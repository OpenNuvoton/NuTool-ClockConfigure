// chip content
NUTOOL_CLOCK.g_cfg_chips = [
	// KM1M7BF
	{ name: "KM1M7BF02N", pkg: "HQFP100" },
	{ name: "KM1M7BF02M", pkg: "HQFP100" },
	{ name: "KM1M7BF02K", pkg: "HQFP100" },

	{ name: "KM1M7BF00N", pkg: "HQFP144" },
	{ name: "KM1M7BF00M", pkg: "HQFP144" },
	{ name: "KM1M7BF00K", pkg: "HQFP144" }
];

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.CHIPCKCTR = ['HXOEN:1'];
NUTOOL_CLOCK.g_register_map.CHIPCKSEL = ['BASESEL:1-0'];
NUTOOL_CLOCK.g_register_map.CHIPCPUCKCTR = ['IOCKDIV:5-4', 'CPUCKDIV:1-0'];
NUTOOL_CLOCK.g_register_map.CHIPCKWAIT = ['HXOWAIT:3-0'];
NUTOOL_CLOCK.g_register_map.CHIPPLLCTR1 = ['PLL30M:1', 'PLLEN:0'];
NUTOOL_CLOCK.g_register_map.CHIPPLLCTR2 = ['PLLIDIV:9-8', 'PLLODIV:6', 'PLLMUL:5-0'];
NUTOOL_CLOCK.g_register_map.CHIPPERICKEN0 = ['CANCKEN:14', 'DMACKEN:13', 'GPWMBCKEN:11', 'GPWMACKEN:10', 'GPWM9CKEN:9', 'GPWM8CKEN:8', 'GPWM7CKEN:7', 'GPWM6CKEN:6', 'GPWM5CKEN:5', 'GPWM4CKEN:4', 'GPWM3CKEN:3', 'GPWM2CKEN:2', 'GPWM1CKEN:1', 'GPWM0CKEN:0'];
NUTOOL_CLOCK.g_register_map.CHIPPERICKEN1 = ['TM25CKEN:12', 'TM24CKEN:11', 'TM23CKEN:10', 'TM22CKEN:9', 'TM21CKEN:8', 'TM20CKEN:7', 'TM1213CKEN:6', 'TM1011CKEN:5', 'TM0809CKEN:4', 'TM0607CKEN:3', 'TM0405CKEN:2', 'TM0203CKEN:1', 'TM0001CKEN:0'];
NUTOOL_CLOCK.g_register_map.CHIPPERICKEN2 = ['SMBusCKEN:14', 'Serial7CKEN:11', 'Serial6CKEN:10', 'Serial5CKEN:9', 'Serial4CKEN:8', 'Serial3CKEN:7', 'Serial2CKEN:6', 'Serial1CKEN:5', 'Serial0CKEN:4', 'MFACKEN:3', 'AD2CKEN:2', 'AD1CKEN:1', 'AD0CKEN:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CHIPCKCTR    = {
								"NuClockConfig":     '0xA53C0001',
								"NuClockConfigTest": '0xA53C0003'
};
NUTOOL_CLOCK.g_register_map_default.CHIPCKSEL     = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPCPUCKCTR  = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPCKWAIT    = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPPLLCTR1   = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPPLLCTR2   = '0xA53C000A';
NUTOOL_CLOCK.g_register_map_default.CHIPPERICKEN0 = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPPERICKEN1 = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPPERICKEN2 = '0xA53C0000';

NUTOOL_CLOCK.g_register_map_description = [];
NUTOOL_CLOCK.g_register_map_description.CHIPCKCTR     = '0x40000000';
NUTOOL_CLOCK.g_register_map_description.CHIPCKSEL     = '0x40000004';
NUTOOL_CLOCK.g_register_map_description.CHIPCPUCKCTR  = '0x40000008';
NUTOOL_CLOCK.g_register_map_description.CHIPCKWAIT    = '0x4000000C';
NUTOOL_CLOCK.g_register_map_description.CHIPPLLCTR1   = '0x40000010';
NUTOOL_CLOCK.g_register_map_description.CHIPPLLCTR2   = '0x40000014';
NUTOOL_CLOCK.g_register_map_description.CHIPPERICKEN0 = '0x40000020';
NUTOOL_CLOCK.g_register_map_description.CHIPPERICKEN1 = '0x40000024';
NUTOOL_CLOCK.g_register_map_description.CHIPPERICKEN2 = '0x40000028';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.BASESEL = ['HRCCLK:0', 'HXOCLK:1', 'PLLCLK:2'];
NUTOOL_CLOCK.g_CLKSEL.CPUCKDIV = ['BASECLK/1:0', 'BASECLK/2:1', 'BASECLK/4:2', 'BASECLK/8:3'];
NUTOOL_CLOCK.g_CLKSEL.IOCKDIV = ['CPUCLK/2:0', 'CPUCLK/4:1', 'CPUCLK/8:2', 'CPUCLK/16:3'];
NUTOOL_CLOCK.g_CLKSEL.HXOWAIT = ['1024:0', '2048:1', '4096:2', '8192:3', '16384:4', '32768:5', '65536:6', '131072:7', '196608:8', '262144:9', '393216:10', '524288:11', '786432:12', '1048576:13'];
NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.AD0 = ['IOCLK', 'AD0CKEN', 'none', 'AD0_MODULE'];
NUTOOL_CLOCK.g_Module.AD1 = ['IOCLK', 'AD1CKEN', 'none', 'AD1_MODULE'];
NUTOOL_CLOCK.g_Module.AD2 = ['IOCLK', 'AD2CKEN', 'none', 'AD2_MODULE'];
NUTOOL_CLOCK.g_Module.CAN = ['IOCLK', 'CANCKEN', 'none', 'CAN_MODULE'];
NUTOOL_CLOCK.g_Module.DMA = ['IOCLK', 'DMACKEN', 'none', 'DMA_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM0 = ['IOCLK', 'GPWM0CKEN', 'none', 'GPWM0_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM1 = ['IOCLK', 'GPWM1CKEN', 'none', 'GPWM1_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM2 = ['IOCLK', 'GPWM2CKEN', 'none', 'GPWM2_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM3 = ['IOCLK', 'GPWM3CKEN', 'none', 'GPWM3_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM4 = ['IOCLK', 'GPWM4CKEN', 'none', 'GPWM4_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM5 = ['IOCLK', 'GPWM5CKEN', 'none', 'GPWM5_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM6 = ['IOCLK', 'GPWM6CKEN', 'none', 'GPWM6_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM7 = ['IOCLK', 'GPWM7CKEN', 'none', 'GPWM7_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM8 = ['IOCLK', 'GPWM8CKEN', 'none', 'GPWM8_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM9 = ['IOCLK', 'GPWM9CKEN', 'none', 'GPWM9_MODULE'];
NUTOOL_CLOCK.g_Module.GPWMA = ['IOCLK', 'GPWMACKEN', 'none', 'GPWMA_MODULE'];
NUTOOL_CLOCK.g_Module.GPWMB = ['IOCLK', 'GPWMBCKEN', 'none', 'GPWMB_MODULE'];
//NUTOOL_CLOCK.g_Module.GPWMH = ['PLLCLK', 'PLL30M', 'none', 'GPWMH_MODULE'];
NUTOOL_CLOCK.g_Module.MFA_DAC = ['IOCLK', 'MFACKEN', 'none', 'MFA_DAC_MODULE'];
NUTOOL_CLOCK.g_Module.Serial0 = ['IOCLK', 'Serial0CKEN', 'none', 'SIF0_MODULE'];
NUTOOL_CLOCK.g_Module.Serial1 = ['IOCLK', 'Serial1CKEN', 'none', 'SIF1_MODULE'];
NUTOOL_CLOCK.g_Module.Serial2 = ['IOCLK', 'Serial2CKEN', 'none', 'SIF2_MODULE'];
NUTOOL_CLOCK.g_Module.Serial3 = ['IOCLK', 'Serial3CKEN', 'none', 'SIF3_MODULE'];
NUTOOL_CLOCK.g_Module.Serial4 = ['IOCLK', 'Serial4CKEN', 'none', 'SIF4_MODULE'];
NUTOOL_CLOCK.g_Module.Serial5 = ['IOCLK', 'Serial5CKEN', 'none', 'SIF5_MODULE'];
NUTOOL_CLOCK.g_Module.Serial6 = ['IOCLK', 'Serial6CKEN', 'none', 'SIF6_MODULE'];
NUTOOL_CLOCK.g_Module.Serial7 = ['IOCLK', 'Serial7CKEN', 'none', 'SIF7_MODULE'];
NUTOOL_CLOCK.g_Module.SMBus = ['IOCLK', 'SMBusCKEN', 'none', 'SMBUS1_MODULE'];
NUTOOL_CLOCK.g_Module.TM00_TM01 = ['IOCLK', 'TM0001CKEN', 'none', 'TIMER0_1_MODULE'];
NUTOOL_CLOCK.g_Module.TM02_TM03 = ['IOCLK', 'TM0203CKEN', 'none', 'TIMER2_3_MODULE'];
NUTOOL_CLOCK.g_Module.TM04_TM05 = ['IOCLK', 'TM0405CKEN', 'none', 'TIMER4_5_MODULE'];
NUTOOL_CLOCK.g_Module.TM06_TM07 = ['IOCLK', 'TM0607CKEN', 'none', 'TIMER6_7_MODULE'];
NUTOOL_CLOCK.g_Module.TM08_TM09 = ['IOCLK', 'TM0809CKEN', 'none', 'TIMER8_9_MODULE'];
NUTOOL_CLOCK.g_Module.TM10_TM11 = ['IOCLK', 'TM1011CKEN', 'none', 'TIMER10_11_MODULE'];
NUTOOL_CLOCK.g_Module.TM12_TM13 = ['IOCLK', 'TM1213CKEN', 'none', 'TIMER12_13_MODULE'];
NUTOOL_CLOCK.g_Module.TM20 = ['IOCLK', 'TM20CKEN', 'none', 'TIMER20_MODULE'];
NUTOOL_CLOCK.g_Module.TM21 = ['IOCLK', 'TM21CKEN', 'none', 'TIMER21_MODULE'];
NUTOOL_CLOCK.g_Module.TM22 = ['IOCLK', 'TM22CKEN', 'none', 'TIMER22_MODULE'];
NUTOOL_CLOCK.g_Module.TM23 = ['IOCLK', 'TM23CKEN', 'none', 'TIMER23_MODULE'];
NUTOOL_CLOCK.g_Module.TM24 = ['IOCLK', 'TM24CKEN', 'none', 'TIMER24_MODULE'];
NUTOOL_CLOCK.g_Module.TM25 = ['IOCLK', 'TM25CKEN', 'none', 'TIMER25_MODULE'];

NUTOOL_CLOCK.g_unusedModule = {
	"KM1M7BF02N(HQFP100)": ['GPWMA', 'GPWMB', 'Serial2', 'CAN', 'SMBus'],
	"KM1M7BF02M(HQFP100)": function () {
		return this["KM1M7BF02N(HQFP100)"];
	},
	"KM1M7BF02K(HQFP100)": function () {
		return this["KM1M7BF02N(HQFP100)"];
	},
	"KM1M7BF00N(HQFP144)": ['CAN'],
	"KM1M7BF00M(HQFP144)": function () {
		return this["KM1M7BF00N(HQFP144)"];
	},
	"KM1M7BF00K(HQFP144)": function () {
		return this["KM1M7BF00N(HQFP144)"];
	}
};

NUTOOL_CLOCK.g_equivalentName = [];
NUTOOL_CLOCK.g_equivalentName._S = 'SEL';
NUTOOL_CLOCK.g_equivalentName.XTL12M_EN = 'HXOEN';
NUTOOL_CLOCK.g_equivalentName.HCLK_S = 'BASESEL';
NUTOOL_CLOCK.g_equivalentName.HCLK_N = 'CPUCKDIV';
NUTOOL_CLOCK.g_equivalentName.PCLK_S = 'IOCKDIV';
NUTOOL_CLOCK.g_equivalentName.PWRCON = 'CHIPCKCTR';
NUTOOL_CLOCK.g_equivalentName.PLLCON = 'CHIPPLLCTR2';
NUTOOL_CLOCK.g_equivalentName.HXT  = 'HXOCLK';
NUTOOL_CLOCK.g_equivalentName.HIRC = 'HRCCLK';
NUTOOL_CLOCK.g_equivalentName.PLL  = 'PLLCLK';
NUTOOL_CLOCK.g_equivalentName.HCLK = 'CPUCLK';
NUTOOL_CLOCK.g_equivalentName.PCLK = 'IOCLK';
NUTOOL_CLOCK.g_equivalentName.HXTWAIT  = 'HXOWAIT';

NUTOOL_CLOCK.g_BusNonExistent = [];
NUTOOL_CLOCK.g_BusFromPCLK1 = [];
NUTOOL_CLOCK.g_DIV_Module_Defines = [];
NUTOOL_CLOCK.g_CPUCLKLimit = 160 * 1000000;
NUTOOL_CLOCK.g_HXTRange = '4~20MHz';
NUTOOL_CLOCK.g_HXTfrequency = 10 * 1000000;
NUTOOL_CLOCK.g_HIRCfrequencyArray = [];
NUTOOL_CLOCK.g_HIRCfrequency = 5 * 1000000;
NUTOOL_CLOCK.g_HIRC2frequencyArray = [];
NUTOOL_CLOCK.g_HIRC2frequency = 0;
NUTOOL_CLOCK.g_HIRC48frequency = 0;
NUTOOL_CLOCK.g_LIRCfrequency = 0;
NUTOOL_CLOCK.g_MIRCfrequency = 0;
NUTOOL_CLOCK.g_MIRC1P2Mfrequency = 0;
NUTOOL_CLOCK.g_RTC32kfrequency = 0;
NUTOOL_CLOCK.g_PLL480Mfrequency = 0;
NUTOOL_CLOCK.g_HSUSBOTGPHYfrequency = 0;
