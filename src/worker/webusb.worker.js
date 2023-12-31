const DAPjs = require('dapjs');
const PROCESSOR_TYPE_ARM_CM0 = 'PROCESSOR_TYPE_ARM_CM0';
const PROCESSOR_TYPE_ARM_CM4 = 'PROCESSOR_TYPE_ARM_CM4';
const PROCESSOR_TYPE_ARM_CM23 = 'PROCESSOR_TYPE_ARM_CM23'
const PROCESSOR_TYPE_UNDEFINED = 'PROCESSOR_TYPE_UNDEFINED';

let processor, proecssorType, baseAddr;
let usbIsConnecting = false;
let bCortexMConnecting = false;
let refreshTimeMS = 0;  // 初始值是0，對照html的select
let connDevice;
let addrs;
let pidDec;

const sfrs_addr = 0x20000000 + 0x91
const P0MF10_addr = 0x20000000 + 0xF9
const P0MF32_addr = 0x20000000 + 0xFA
const P0MF54_addr = 0x20000000 + 0xFB
const P0MF76_addr = 0x20000000 + 0xFC
const P1MF10_addr = 0x20000000 + 0xFD
const P1MF32_addr = 0x20000000 + 0xFE
const P1MF54_addr = 0x20000000 + 0xFF
const P1MF76_addr = 0x20000000 + 0xF1
const P2MF10_addr = 0x20000000 + 0xF2
const P2MF32_addr = 0x20000000 + 0xF3
const P2MF54_addr = 0x20000000 + 0xF4
const P2MF76_addr = 0x20000000 + 0xF5
const P3MF10_addr = 0x20000000 + 0xF6
const P3MF32_addr = 0x20000000 + 0xF7
const P3MF54_addr = 0x20000000 + 0xE9
const P3MF76_addr = 0x20000000 + 0xEA
const P4MF10_addr = 0x20000000 + 0xEB
const P4MF32_addr = 0x20000000 + 0xEC
const P4MF54_addr = 0x20000000 + 0xED
const P4MF76_addr = 0x20000000 + 0xEE
const P5MF10_addr = 0x20000000 + 0xEF
const P5MF32_addr = 0x20000000 + 0xE1
const P5MF54_addr = 0x20000000 + 0xE2
const P5MF76_addr = 0x20000000 + 0xE3
const P6MF10_addr = 0x20000000 + 0x92
const P6MF32_addr = 0x20000000 + 0x93
const P6MF54_addr = 0x20000000 + 0x94
const P6MF76_addr = 0x20000000 + 0x95

/****************************
 * USB Related
 ****************************/

const connect = async () => {
    // 不是connecting的話，取得device instance
    if (!usbIsConnecting) {
        const transport = new DAPjs.WebUSB(connDevice, 0xFF, 0x03, 1, true, 1/*debug channel*/);

        // 抓到device的話，先用Cortex-M的方式連接(NuMicroCM)
        if (connDevice != undefined) {
            /* Cortex-M */
            try {
                processor = new DAPjs.NuMicroCM(transport, 1000000, 3300);

                await processor.connect();

                console.log('Cortex-M is connected.');
                usbIsConnecting = true;
                bCortexMConnecting = true;
                postMessage({ 'action': 'connected' });
            } catch (error) {
                console.log(error);
            }

            // 如果Cortex-M沒有連接成功的話，就用8051的方式連接(NuMicro51)
            if (!bCortexMConnecting) {
                /* 8051 */
                try {
                    processor = new DAPjs.NuMicro51(transport, 1, 3300);
                    pidDec = await processor.connect();

                    console.log('8051 is connected.');
                    usbIsConnecting = true;
                    postMessage({ 'action': 'connected' });
                } catch (error) {
                    console.log(error);
                }
            }

            // 如果都沒連上，show disconnect info
            if (!usbIsConnecting) {
                await disconnect();
            }
        } else {
            await disconnect();
        }
    }
}

const getPIDValue = async () => {
    try {
        if (bCortexMConnecting) {
            proecssorType = await getProecssorType();
            baseAddr = await getBaseAddress(proecssorType);
            await getPID(baseAddr).then(function (result) {
                let pidValue = '0x' + ('00000000' + result.toString(16).toUpperCase()).slice(-8);
                postMessage({ 'action': 'returnPIDValue', 'value': pidValue });
            });
        } else {
            /* 8051 */
            try {
                let pidValue = '0x' + ('00000000' + pidDec.toString(16).toUpperCase()).slice(-8);
                postMessage({ 'action': 'returnPIDValue', 'value': pidValue });
            } catch (error) {
                console.log(error);
                await disconnect();
            }
        }
    } catch (error) {
        console.log(error);
        await disconnect();
    }
}

const getRegisterValue = async () => {
    // 目前已經是connecting狀態，所以直接讀值
    try {
        let showing_buffer = [];

        if (bCortexMConnecting) {
            /* Cortex-M */
            try {
                await processor.resume();

                let result = [];
                for (let i = 0; i < addrs.length; i++) {
                    showing_buffer = await processor.readBlock(0x00000000 + Number(addrs[i]), 1);
                    let value = ('00000000' + showing_buffer[0].toString(16)).slice(-8);
                    // postMessage({ 'action': 'returnRegisterValue', 'addr': addrs[i], 'value': value, 'type': 'CortexM' });
                    var obj = {};
                    obj[`${addrs[i]}`] = value;
                    console.log(`${addrs[i]}, ${value}`);
                    result.push(obj);
                }
                postMessage({ 'action': 'returnRegisterValue', 'result': result, 'type': 'CortexM' });
                await disconnect();
            } catch (error) {
                console.log(error);
                await disconnect();
            }
        } else {
            /* 8051 */
            // TODO: Refer to PinConfig.
        }
        // Setting from renderer Main.js
        await new Promise(r => setTimeout(r, refreshTimeMS));
    } catch (error) {
        console.log(error);
    }
};

const disconnect = async () => {
    processor = undefined;
    proecssorType = undefined;
    baseAddr = undefined;
    usbIsConnecting = false;
    bCortexMConnecting = false;
    postMessage({ 'action': 'disconnect' });
}

const getProecssorType = async () => {
    let uPartNo;
    await processor.readMem32(0xE000ED00).then(function (result) {
        uPartNo = ((('0x' + result.toString(16)) & 0x0000FFF0) >> 4).toString(16).toUpperCase();
    });
    switch (uPartNo) {
        case 'C20':
            return PROCESSOR_TYPE_ARM_CM0;
        case 'C24':
            return PROCESSOR_TYPE_ARM_CM4;
        case 'D20':
            return PROCESSOR_TYPE_ARM_CM23;
    }

    return PROCESSOR_TYPE_UNDEFINED;
}

const getBaseAddress = async (proecssorType) => {
    let baseAddr;
    switch (proecssorType) {
        case PROCESSOR_TYPE_ARM_CM0:
            baseAddr = 0x50000000;
            try {
                if (processor.readMem32(0x40003FFC).toString(16) == '20171011') {
                    baseAddr = 0x40000000;
                }
            }
            catch (error) {
            }
            break;
        case PROCESSOR_TYPE_ARM_CM4:
            baseAddr = 0x40000000;
            break;
        case PROCESSOR_TYPE_ARM_CM23:
            baseAddr = 0x40000000;
            try {
                await processor.readMem32(0x50003FFC).then(function (result) {
                    if ((result).toString(16) == '20201130') {
                        baseAddr = 0x50000000;
                    }
                });
            }
            catch (error) {
            }
            break;
        default:
            throw ('getBaseAddress() Unsupported processor type!')
    }
    return baseAddr;
}

const getPID = async (baseAddr) => {
    return processor.readMem32(REG_SYS_PDID_ADDR(baseAddr));
}

function REG_SYS_PDID_ADDR(BASE) {
    return (BASE) + 0x00000;
}

function registerValueToHex(value) {
    return ('00' + value.toString(16)).slice(-2);
}

/*******************************************
 * message Related
 *******************************************/

onmessage = async (e) => {
    let action = e.data.action;
    let data = e.data.data;
    if (action == 'connect') {
        console.log('worker: connect');
        // 因為connDevice無法透過message傳過來，所以在這邊重新get
        await navigator.usb.getDevices().then((devices) => {
            console.log(`Total devices: ${devices.length}`);
            devices.forEach((device) => {
                connDevice = device;
            });
        }).catch(error => {
            console.log(error);
            connDevice = undefined;
        });
        connect();
    } else if (action == 'getPIDValue') {
        console.log('worker: getPIDValue');
        getPIDValue();
    } else if (action == 'getMFPValues') {
        console.log('worker: getMFPValues');
        addrs = data;
        getRegisterValue();
    } else if (action == 'connectComplete') {    // TODO: not checked yet
        console.log('worker: connectComplete');
        await disconnect();
    } else if (action == 'setRefreshTime') {    // TODO: not checked yet
        console.log('setRefreshTime');
        refreshTimeMS = data;
    }
}