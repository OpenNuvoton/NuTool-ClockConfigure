// chip content
NUTOOL_CLOCK.g_cfg_chips = [
    // KM1M4BF
    { name: "KM1M4BF02K", pkg: "LQFP100" },
    { name: "KM1M4BF02G", pkg: "LQFP100" },

    { name: "KM1M4BF03K", pkg: "TQFP80" },
    { name: "KM1M4BF03G", pkg: "TQFP80" },

    { name: "KM1M4BF04K", pkg: "TQFP64" },
    { name: "KM1M4BF04G", pkg: "TQFP64" },

    { name: "KM1M4BF05G", pkg: "TQFP48" },

    { name: "KM1M4BF52K", pkg: "LQFP100" },
    { name: "KM1M4BF52G", pkg: "LQFP100" },

    { name: "KM1M4BF53K", pkg: "TQFP80" },
    { name: "KM1M4BF53G", pkg: "TQFP80" },

    { name: "KM1M4BF54K", pkg: "TQFP64" },
    { name: "KM1M4BF54G", pkg: "TQFP64" },
];

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.CHIPCKCTR = ['HXOEN:1'];
NUTOOL_CLOCK.g_register_map.CHIPCKSEL = ['BASESEL:1-0'];
NUTOOL_CLOCK.g_register_map.CHIPCPUCKCTR = ['IOCKDIV:5-4', 'CPUCKDIV:1-0'];
NUTOOL_CLOCK.g_register_map.CHIPCKWAIT = ['HXOWAIT:3-0'];
NUTOOL_CLOCK.g_register_map.CHIPPLLCTR1 = ['PLLEN:0'];
NUTOOL_CLOCK.g_register_map.CHIPPLLCTR2 = ['PLLIDIV:9-8', 'PLLMUL:6-0'];
NUTOOL_CLOCK.g_register_map.CHIPPERICKEN0 = ['DMACKEN:13', 'GPWM7CKEN:7', 'GPWM6CKEN:6', 'GPWM5CKEN:5', 'GPWM4CKEN:4', 'GPWM3CKEN:3', 'GPWM2CKEN:2', 'GPWM1CKEN:1', 'GPWM0CKEN:0'];
NUTOOL_CLOCK.g_register_map.CHIPPERICKEN1 = ['TM15CKEN:15', 'TM14CKEN:14', 'TM13CKEN:13', 'TM12CKEN:12', 'TM11CKEN:11', 'TM10CKEN:10', 'TM07CKEN:7', 'TM06CKEN:6', 'TM05CKEN:5', 'TM04CKEN:4', 'TM03CKEN:3', 'TM02CKEN:2', 'TM01CKEN:1', 'TM00CKEN:0'];
NUTOOL_CLOCK.g_register_map.CHIPPERICKEN2 = ['VGA1CKEN:14', 'VGA0CKEN:13', 'SIF6CKEN:10', 'SIF5CKEN:9', 'SIF4CKEN:8', 'SIF3CKEN:7', 'SIF2CKEN:6', 'SIF1CKEN:5', 'SIF0CKEN:4', 'MFACKEN:3', 'AD2CKEN:2', 'AD1CKEN:1', 'AD0CKEN:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CHIPCKCTR     = '0xA53C0003';
NUTOOL_CLOCK.g_register_map_default.CHIPCKSEL     = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPCPUCKCTR  = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPCKWAIT    = '0xA53C000D';
NUTOOL_CLOCK.g_register_map_default.CHIPPLLCTR1   = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPPLLCTR2   = '0xA53C000A';
NUTOOL_CLOCK.g_register_map_default.CHIPPERICKEN0 = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPPERICKEN1 = '0xA53C0000';
NUTOOL_CLOCK.g_register_map_default.CHIPPERICKEN2 = '0xA53C0000';

NUTOOL_CLOCK.g_register_map_description = [];
NUTOOL_CLOCK.g_register_map_description.CHIPCKCTR     = '0x40001000';
NUTOOL_CLOCK.g_register_map_description.CHIPCKSEL     = '0x40001004';
NUTOOL_CLOCK.g_register_map_description.CHIPCPUCKCTR  = '0x40001008';
NUTOOL_CLOCK.g_register_map_description.CHIPCKWAIT    = '0x4000100C';
NUTOOL_CLOCK.g_register_map_description.CHIPPLLCTR1   = '0x40001010';
NUTOOL_CLOCK.g_register_map_description.CHIPPLLCTR2   = '0x40001014';
NUTOOL_CLOCK.g_register_map_description.CHIPPERICKEN0 = '0x40001020';
NUTOOL_CLOCK.g_register_map_description.CHIPPERICKEN1 = '0x40001024';
NUTOOL_CLOCK.g_register_map_description.CHIPPERICKEN2 = '0x40001028';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.BASESEL = ['HRCCLK:0', 'HXOCLK:1', 'PLLCLK:2'];
NUTOOL_CLOCK.g_CLKSEL.CPUCKDIV = ['BASECLK/1:0', 'BASECLK/2:1', 'BASECLK/4:2', 'BASECLK/8:3'];
NUTOOL_CLOCK.g_CLKSEL.IOCKDIV = ['CPUCLK/2:0', 'CPUCLK/4:1', 'CPUCLK/8:2', 'CPUCLK/16:3'];
NUTOOL_CLOCK.g_CLKSEL.HXOWAIT = ['1024:0', '2048:1', '4096:2', '8192:3', '16384:4', '32768:5', '65536:6', '131072:7', '196608:8', '262144:9', '393216:10', '524288:11', '786432:12', '1048576:13'];
NUTOOL_CLOCK.g_CLKSEL.PLLIDIV = ['HXOCLK/1:0', 'HXOCLK/4:1', 'HXOCLK/2:2', 'HXOCLK/3:3'];
NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.AD0 = ['IOCLK', 'AD0CKEN', 'none', 'AD0_MODULE'];
NUTOOL_CLOCK.g_Module.AD1 = ['IOCLK', 'AD1CKEN', 'none', 'AD1_MODULE'];
NUTOOL_CLOCK.g_Module.AD2 = ['IOCLK', 'AD2CKEN', 'none', 'AD2_MODULE'];
NUTOOL_CLOCK.g_Module.DMA = ['IOCLK', 'DMACKEN', 'none', 'DMA_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM0 = ['IOCLK', 'GPWM0CKEN', 'none', 'GPWM0_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM1 = ['IOCLK', 'GPWM1CKEN', 'none', 'GPWM1_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM2 = ['IOCLK', 'GPWM2CKEN', 'none', 'GPWM2_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM3 = ['IOCLK', 'GPWM3CKEN', 'none', 'GPWM3_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM4 = ['IOCLK', 'GPWM4CKEN', 'none', 'GPWM4_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM5 = ['IOCLK', 'GPWM5CKEN', 'none', 'GPWM5_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM6 = ['IOCLK', 'GPWM6CKEN', 'none', 'GPWM6_MODULE'];
NUTOOL_CLOCK.g_Module.GPWM7 = ['IOCLK', 'GPWM7CKEN', 'none', 'GPWM7_MODULE'];
NUTOOL_CLOCK.g_Module.MFA = ['IOCLK', 'MFACKEN', 'none', 'MFA_MODULE'];
NUTOOL_CLOCK.g_Module.Serial0 = ['IOCLK', 'SIF0CKEN', 'none', 'SIF0_MODULE'];
NUTOOL_CLOCK.g_Module.Serial1 = ['IOCLK', 'SIF1CKEN', 'none', 'SIF1_MODULE'];
NUTOOL_CLOCK.g_Module.Serial2 = ['IOCLK', 'SIF2CKEN', 'none', 'SIF2_MODULE'];
NUTOOL_CLOCK.g_Module.Serial3 = ['IOCLK', 'SIF3CKEN', 'none', 'SIF3_MODULE'];
NUTOOL_CLOCK.g_Module.Serial4 = ['IOCLK', 'SIF4CKEN', 'none', 'SIF4_MODULE'];
NUTOOL_CLOCK.g_Module.Serial5 = ['IOCLK', 'SIF5CKEN', 'none', 'SIF5_MODULE'];
NUTOOL_CLOCK.g_Module.Serial6 = ['IOCLK', 'SIF6CKEN', 'none', 'SIF6_MODULE'];
NUTOOL_CLOCK.g_Module.TM00 = ['IOCLK', 'TM00CKEN', 'none', 'TIMER0_MODULE'];
NUTOOL_CLOCK.g_Module.TM01 = ['IOCLK', 'TM01CKEN', 'none', 'TIMER1_MODULE'];
NUTOOL_CLOCK.g_Module.TM02 = ['IOCLK', 'TM02CKEN', 'none', 'TIMER2_MODULE'];
NUTOOL_CLOCK.g_Module.TM03 = ['IOCLK', 'TM03CKEN', 'none', 'TIMER3_MODULE'];
NUTOOL_CLOCK.g_Module.TM04 = ['IOCLK', 'TM04CKEN', 'none', 'TIMER4_MODULE'];
NUTOOL_CLOCK.g_Module.TM05 = ['IOCLK', 'TM05CKEN', 'none', 'TIMER5_MODULE'];
NUTOOL_CLOCK.g_Module.TM06 = ['IOCLK', 'TM06CKEN', 'none', 'TIMER6_MODULE'];
NUTOOL_CLOCK.g_Module.TM07 = ['IOCLK', 'TM07CKEN', 'none', 'TIMER7_MODULE'];
NUTOOL_CLOCK.g_Module.TM10 = ['IOCLK', 'TM10CKEN', 'none', 'TIMER10_MODULE'];
NUTOOL_CLOCK.g_Module.TM11 = ['IOCLK', 'TM11CKEN', 'none', 'TIMER11_MODULE'];
NUTOOL_CLOCK.g_Module.TM12 = ['IOCLK', 'TM12CKEN', 'none', 'TIMER12_MODULE'];
NUTOOL_CLOCK.g_Module.TM13 = ['IOCLK', 'TM13CKEN', 'none', 'TIMER13_MODULE'];
NUTOOL_CLOCK.g_Module.TM14 = ['IOCLK', 'TM14CKEN', 'none', 'TIMER14_MODULE'];
NUTOOL_CLOCK.g_Module.TM15 = ['IOCLK', 'TM15CKEN', 'none', 'TIMER15_MODULE'];
NUTOOL_CLOCK.g_Module.VGA0 = ['IOCLK', 'VGA0CKEN', 'none', 'VGA0_MODULE'];
NUTOOL_CLOCK.g_Module.VGA1 = ['IOCLK', 'VGA1CKEN', 'none', 'VGA1_MODULE'];

NUTOOL_CLOCK.g_unusedModule = {
    "KM1M4BF05G(TQFP48)": ['Serial0', 'Serial4', 'Serial5']
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
NUTOOL_CLOCK.g_CPUCLKLimit = 120 * 1000000;
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