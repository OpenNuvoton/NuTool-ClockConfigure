// chip content
NUTOOL_CLOCK.g_cfg_chips = [
    // KM1M7CF
    { name: "KM1M7CF06N", pkg: "TQFP32" },
    { name: "KM1M7CF06K", pkg: "TQFP32" },

    { name: "KM1M7CF16N", pkg: "TQFP32" },
    { name: "KM1M7CF16K", pkg: "TQFP32" },

    { name: "KM1M7CF05N", pkg: "TQFP48" },
    { name: "KM1M7CF05K", pkg: "TQFP48" },

    { name: "KM1M7CF15N", pkg: "TQFP48" },
    { name: "KM1M7CF15K", pkg: "TQFP48" },

    { name: "KM1M7CF04N", pkg: "TQFP64" },
    { name: "KM1M7CF04K", pkg: "TQFP64" },

    { name: "KM1M7CF14N", pkg: "TQFP64" },
    { name: "KM1M7CF14K", pkg: "TQFP64" },

    { name: "KM1M7CF03N", pkg: "TQFP80" },
    { name: "KM1M7CF03K", pkg: "TQFP80" },

    { name: "KM1M7CF13N", pkg: "TQFP80" },
    { name: "KM1M7CF13K", pkg: "TQFP80" }
];

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.CHIPCKCTR = ['CLKOUTEN:11', 'CLKOUTSEL:10-8', 'HXOEN:0'];
NUTOOL_CLOCK.g_register_map.CHIPCKSEL = ['STCKSEL:8', 'BASESEL:1-0'];
NUTOOL_CLOCK.g_register_map.CHIPCPUCKCTR = ['IOCKDIV:5-4', 'CPUCKDIV:1-0'];
NUTOOL_CLOCK.g_register_map.CHIPCKWAIT = ['HXOWAIT:3-0'];
NUTOOL_CLOCK.g_register_map.CHIPPLLCTR1 = ['PLL_SRC:2', 'PLL30M:1', 'PLLEN:0'];
NUTOOL_CLOCK.g_register_map.CHIPPLLCTR2 = ['PLLIDIV:8', 'PLLODIV:6', 'PLLMUL:5-0'];
NUTOOL_CLOCK.g_register_map.CHIPPERICKEN0 = ['MFACKEN:15', 'TIMER1213CKEN:14', 'TIMER1011CKEN:13', 'TIMER0809CKEN:12', 'TIMER0607CKEN:11', 'TIMER0405CKEN:10', 'TIMER0203CKEN:9', 'TIMER0001CKEN:8', 'GPWM7CKEN:7', 'GPWM6CKEN:6', 'GPWM5CKEN:5', 'GPWM4CKEN:4', 'GPWM3CKEN:3', 'GPWM2CKEN:2', 'GPWM1CKEN:1', 'GPWM0CKEN:0'];
NUTOOL_CLOCK.g_register_map.CHIPPERICKEN1 = ['DMACKEN:5', 'RTCCKEN:4', 'DACCKEN:3', 'ADC2CKEN:2', 'ADC1CKEN:1', 'ADC0CKEN:0'];
NUTOOL_CLOCK.g_register_map.CHIPPERICKEN2 = ['CANCKEN:8', 'SMBUSCKEN:7', 'SIF6CKEN:6', 'SIF5CKEN:5', 'SIF4CKEN:4', 'SIF3CKEN:3', 'SIF2CKEN:2', 'SIF1CKEN:1', 'SIF0CKEN:0'];
NUTOOL_CLOCK.g_register_map.CHIPPERICKEN3 = ['CRYPTO:1', 'TRNG:0'];
NUTOOL_CLOCK.g_register_map.SYST_CTRL = ['CLKSRC:2', 'TICKINT:1', 'ENABLE:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CHIPCKCTR     = '0xA53C000E';
NUTOOL_CLOCK.g_register_map_default.CHIPCKSEL     = '0xA53C0100';
NUTOOL_CLOCK.g_register_map_default.CHIPCPUCKCTR  = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPCKWAIT    = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPPLLCTR1   = '0xA53C0002';
NUTOOL_CLOCK.g_register_map_default.CHIPPLLCTR2   = '0xA53C000A';
NUTOOL_CLOCK.g_register_map_default.CHIPPERICKEN0 = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPPERICKEN1 = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPPERICKEN2 = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPPERICKEN3 = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.SYST_CTRL = '0x00000000';

NUTOOL_CLOCK.g_register_map_description = [];
NUTOOL_CLOCK.g_register_map_description.CHIPCKCTR     = '0x40000800';
NUTOOL_CLOCK.g_register_map_description.CHIPCKSEL     = '0x40000804';
NUTOOL_CLOCK.g_register_map_description.CHIPCPUCKCTR  = '0x40000808';
NUTOOL_CLOCK.g_register_map_description.CHIPCKWAIT    = '0x4000080C';
NUTOOL_CLOCK.g_register_map_description.CHIPPLLCTR1   = '0x40000810';
NUTOOL_CLOCK.g_register_map_description.CHIPPLLCTR2   = '0x40000814';
NUTOOL_CLOCK.g_register_map_description.CHIPPERICKEN0 = '0x40000820';
NUTOOL_CLOCK.g_register_map_description.CHIPPERICKEN1 = '0x40000824';
NUTOOL_CLOCK.g_register_map_description.CHIPPERICKEN2 = '0x40000828';
NUTOOL_CLOCK.g_register_map_description.CHIPPERICKEN3 = '0x4000082C';
NUTOOL_CLOCK.g_register_map_description.SYST_CTRL = '0x00000000';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.PLL_SRC = ['HRCCLK1:0', 'HXOCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.BASESEL = ['HRCCLK1:0', 'HXOCLK:1', 'PLLCLK:2', 'HRCCLK2:3'];
NUTOOL_CLOCK.g_CLKSEL.CLKOUTSEL = ['HRCCLK1/8:0', 'HXOCLK/8:1', 'PLLCLK/256:2'];
NUTOOL_CLOCK.g_CLKSEL.STCKSEL = ['CPUCLK:0', 'HXOCLK/128:0', 'HRCCLK1/128:1'];
NUTOOL_CLOCK.g_CLKSEL.CLKSRC = ['HXOCLK/128:0', 'HRCCLK1/128:0', 'CPUCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.PLLIDIV = ['PLL_SRC:0', 'PLL_SRC/2:1'];
NUTOOL_CLOCK.g_CLKSEL.PLLODIV = ['PLL_OUT:0', 'PLL_OUT/2:1'];
NUTOOL_CLOCK.g_CLKSEL.CPUCKDIV = ['BASECLK/1:0', 'BASECLK/2:1', 'BASECLK/4:2', 'BASECLK/8:3'];
NUTOOL_CLOCK.g_CLKSEL.IOCKDIV = ['CPUCLK/2:0', 'CPUCLK/4:1', 'CPUCLK/8:2', 'CPUCLK/16:3'];
NUTOOL_CLOCK.g_CLKSEL.HXOWAIT = ['1024:0', '2048:1', '4096:2', '8192:3', '16384:4', '32768:5', '65536:6', '131072:7', '196608:8', '262144:9', '393216:10', '524288:11', '786432:12', '1048576:13'];
NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.CLKOUT = ['CLKOUTSEL', 'CLKOUTEN', 'none', 'none'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['CLKSRC/STCKSEL', 'ENABLE/TICKINT', 'none', 'none'];
NUTOOL_CLOCK.g_Module.MFA = ['IOCLK', 'MFACKEN', 'none', 'MFA_MODULE'];
NUTOOL_CLOCK.g_Module.TM12_TM13 = ['IOCLK', 'TIMER1213CKEN', 'none', 'TIMER12_13_MODULE'];
NUTOOL_CLOCK.g_Module.TM10_TM11 = ['IOCLK', 'TIMER1011CKEN', 'none', 'TIMER10_11_MODULE'];
NUTOOL_CLOCK.g_Module.TM08_TM09 = ['IOCLK', 'TIMER0809CKEN', 'none', 'TIMER8_9_MODULE'];
NUTOOL_CLOCK.g_Module.TM06_TM07 = ['IOCLK', 'TIMER0607CKEN', 'none', 'TIMER6_7_MODULE'];
NUTOOL_CLOCK.g_Module.TM04_TM05 = ['IOCLK', 'TIMER0405CKEN', 'none', 'TIMER4_5_MODULE'];
NUTOOL_CLOCK.g_Module.TM02_TM03 = ['IOCLK', 'TIMER0203CKEN', 'none', 'TIMER2_3_MODULE'];
NUTOOL_CLOCK.g_Module.TM00_TM01 = ['IOCLK', 'TIMER0001CKEN', 'none', 'TIMER0_1_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM7 = ['IOCLK', 'GPWM7CKEN', 'none', 'GPWM7_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM6 = ['IOCLK', 'GPWM6CKEN', 'none', 'GPWM6_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM5 = ['IOCLK', 'GPWM5CKEN', 'none', 'GPWM5_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM4 = ['IOCLK', 'GPWM4CKEN', 'none', 'GPWM4_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM3 = ['IOCLK', 'GPWM3CKEN', 'none', 'GPWM3_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM2 = ['IOCLK', 'GPWM2CKEN', 'none', 'GPWM2_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM1 = ['IOCLK', 'GPWM1CKEN', 'none', 'GPWM1_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM0 = ['IOCLK', 'GPWM0CKEN', 'none', 'GPWM0_MODULE'];
NUTOOL_CLOCK.g_Module.DMA = ['IOCLK', 'DMACKEN', 'none', 'DMA_MODULE'];
NUTOOL_CLOCK.g_Module.RTC = ['IOCLK', 'RTCCKEN', 'none', 'RTC_MODULE'];
NUTOOL_CLOCK.g_Module.DAC = ['IOCLK', 'DACCKEN', 'none', 'DAC_MODULE'];
NUTOOL_CLOCK.g_Module.AD2 = ['IOCLK', 'ADC2CKEN', 'none', 'AD2_MODULE'];
NUTOOL_CLOCK.g_Module.AD1 = ['IOCLK', 'ADC1CKEN', 'none', 'AD1_MODULE'];
NUTOOL_CLOCK.g_Module.AD0 = ['IOCLK', 'ADC0CKEN', 'none', 'AD0_MODULE'];
NUTOOL_CLOCK.g_Module.CAN = ['IOCLK', 'CANCKEN', 'none', 'CAN_MODULE'];
NUTOOL_CLOCK.g_Module.SMBUS = ['IOCLK', 'SMBUSCKEN', 'none', 'SMBUS_MODULE'];
NUTOOL_CLOCK.g_Module.Serial6 = ['IOCLK', 'SIF6CKEN', 'none', 'SIF6_MODULE'];
NUTOOL_CLOCK.g_Module.Serial5 = ['IOCLK', 'SIF5CKEN', 'none', 'SIF5_MODULE'];
NUTOOL_CLOCK.g_Module.Serial4 = ['IOCLK', 'SIF4CKEN', 'none', 'SIF4_MODULE'];
NUTOOL_CLOCK.g_Module.Serial3 = ['IOCLK', 'SIF3CKEN', 'none', 'SIF3_MODULE'];
NUTOOL_CLOCK.g_Module.Serial2 = ['IOCLK', 'SIF2CKEN', 'none', 'SIF2_MODULE'];
NUTOOL_CLOCK.g_Module.Serial1 = ['IOCLK', 'SIF1CKEN', 'none', 'SIF1_MODULE'];
NUTOOL_CLOCK.g_Module.Serial0 = ['IOCLK', 'SIF0CKEN', 'none', 'SIF0_MODULE'];
NUTOOL_CLOCK.g_Module.CRYPTO = ['IOCLK', 'CRYPTO', 'none', 'CRYPTO_MODULE'];
NUTOOL_CLOCK.g_Module.TRNG = ['IOCLK', 'TRNG', 'none', 'TRNG_MODULE'];

NUTOOL_CLOCK.g_unusedModule = {
    "KM1M7CF03N(TQFP80)": ['CRYPTO', 'TRNG'],
    "KM1M7CF03K(TQFP80)": function () {
        return this["KM1M7CF03N(TQFP80)"];
    },
    "KM1M7CF04N(TQFP64)": ['GPWM6', 'GPWM7', 'CRYPTO', 'TRNG'],
    "KM1M7CF04K(TQFP64)": function () {
        return this["KM1M7CF04N(TQFP64)"];
    },
    "KM1M7CF05N(TQFP48)": ['GPWM4', 'GPWM6', 'GPWM7', 'CMP2', 'CRYPTO', 'TRNG'],
    "KM1M7CF05K(TQFP48)": function () {
        return this["KM1M7CF05N(TQFP48)"];
    },
    "KM1M7CF06N(TQFP32)": ['GPWM0', 'GPWM1', 'GPWM4', 'GPWM6', 'GPWM7', 'CMP1', 'CMP2', 'CMP4', 'CRYPTO', 'TRNG'],
    "KM1M7CF06K(TQFP32)": function () {
        return this["KM1M7CF06N(TQFP32)"];
    },
    "KM1M7CF13N(TQFP80)": [],
    "KM1M7CF13K(TQFP80)": function () {
        return this["KM1M7CF13N(TQFP80)"];
    },
    "KM1M7CF14N(TQFP64)": ['GPWM6', 'GPWM7'],
    "KM1M7CF14K(TQFP64)": function () {
        return this["KM1M7CF14N(TQFP64)"];
    },
    "KM1M7CF15N(TQFP48)": ['GPWM4', 'GPWM6', 'GPWM7', 'CMP2'],
    "KM1M7CF15K(TQFP48)": function () {
        return this["KM1M7CF15N(TQFP48)"];
    },
    "KM1M7CF16N(TQFP32)": ['GPWM0', 'GPWM1', 'GPWM4', 'GPWM6', 'GPWM7', 'CMP1', 'CMP2', 'CMP4'],
    "KM1M7CF16K(TQFP32)": function () {
        return this["KM1M7CF16N(TQFP32)"];
    }
};

NUTOOL_CLOCK.g_equivalentName = [];
NUTOOL_CLOCK.g_equivalentName._S = 'SEL';
NUTOOL_CLOCK.g_equivalentName.XTL12M_EN = 'HXOEN';
NUTOOL_CLOCK.g_equivalentName.OSC10K_EN = 'LIRCEN';
NUTOOL_CLOCK.g_equivalentName.HCLK_S = 'BASESEL';
NUTOOL_CLOCK.g_equivalentName.HCLK_N = 'CPUCKDIV';
NUTOOL_CLOCK.g_equivalentName.PCLK_S = 'IOCKDIV';
NUTOOL_CLOCK.g_equivalentName.PWRCON = 'CHIPCKCTR';
NUTOOL_CLOCK.g_equivalentName.PLLCON = 'CHIPPLLCTR2';
NUTOOL_CLOCK.g_equivalentName.HXT  = 'HXOCLK';
NUTOOL_CLOCK.g_equivalentName.HIRC = 'HRCCLK1';
NUTOOL_CLOCK.g_equivalentName.HIRC2 = 'HRCCLK2';
NUTOOL_CLOCK.g_equivalentName.LIRC = 'LRCCLK';
NUTOOL_CLOCK.g_equivalentName.PLL  = 'PLLCLK';
NUTOOL_CLOCK.g_equivalentName.HCLK = 'CPUCLK';
NUTOOL_CLOCK.g_equivalentName.PCLK = 'IOCLK';
NUTOOL_CLOCK.g_equivalentName.HXTWAIT  = 'HXOWAIT';
NUTOOL_CLOCK.g_equivalentName.CLKO = 'CLKOUT';
NUTOOL_CLOCK.g_equivalentName.SYST_CSR = 'SYST_CTRL';
NUTOOL_CLOCK.g_equivalentName.STCLK_S = 'STCKSEL';

NUTOOL_CLOCK.g_BusNonExistent = [];
NUTOOL_CLOCK.g_BusFromPCLK1 = [];
NUTOOL_CLOCK.g_DIV_Module_Defines = [];
NUTOOL_CLOCK.g_CPUCLKLimit = 160 * 1000000;
NUTOOL_CLOCK.g_HXTRange = '4~20MHz';
NUTOOL_CLOCK.g_HXTfrequency = 10 * 1000000;
NUTOOL_CLOCK.g_HIRCfrequencyArray = [];
NUTOOL_CLOCK.g_HIRCfrequency = 10 * 1000000;
NUTOOL_CLOCK.g_HIRC2frequencyArray = [];
NUTOOL_CLOCK.g_HIRC2frequency = 11 * 1000000;
NUTOOL_CLOCK.g_HIRC48frequency = 0;
NUTOOL_CLOCK.g_LIRCfrequency = 30 * 1000;
NUTOOL_CLOCK.g_MIRCfrequency = 0;
NUTOOL_CLOCK.g_MIRC1P2Mfrequency = 0;
NUTOOL_CLOCK.g_RTC32kfrequency = 0;
NUTOOL_CLOCK.g_PLL480Mfrequency = 0;
NUTOOL_CLOCK.g_HSUSBOTGPHYfrequency = 0;
