// chip content
NUTOOL_CLOCK.g_cfg_chips = [
	//MINI51DE
	{ name: "MINI51LDE", pkg: "LQFP48" },
	{ name: "MINI52LDE", pkg: "LQFP48" },
	{ name: "MINI54LDE", pkg: "LQFP48" },

	{ name: "MINI51ZDE", pkg: "QFN33" },
	{ name: "MINI52ZDE", pkg: "QFN33" },
	{ name: "MINI54ZDE", pkg: "QFN33" },

	{ name: "MINI51TDE", pkg: "QFN33" },
	{ name: "MINI52TDE", pkg: "QFN33" },
	{ name: "MINI54TDE", pkg: "QFN33" },

	{ name: "MINI51FDE", pkg: "TSSOP20" },
	{ name: "MINI52FDE", pkg: "TSSOP20" },
	{ name: "MINI54FDE", pkg: "TSSOP20" },
	//MINI55
	{ name: "MINI55LDE", pkg: "LQFP48" },
	{ name: "MINI55ZDE", pkg: "QFN33" },
	//MINI57
	{ name: "MINI57TDE", pkg: "QFN33" },
	{ name: "MINI57EDE", pkg: "TSSOP28" },
	{ name: "MINI57FDE", pkg: "TSSOP20" },
	//MINI58
	{ name: "MINI58LDE", pkg: "LQFP48" },

	{ name: "MINI58ZDE", pkg: "QFN33" },
	{ name: "MINI58TDE", pkg: "QFN33" },

	{ name: "MINI58FDE", pkg: "TSSOP20" }
];

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.PWRCTL = ['LIRCEN:3', 'HIRCEN:2', 'LXTEN:1', 'HXTEN:0'];
NUTOOL_CLOCK.g_register_map.AHBCLK = ['HDIVCKEN:4', 'ISPCKEN:2'];
NUTOOL_CLOCK.g_register_map.APBCLK = ['ACMPCKEN:30', 'EADCCKEN:28', 'USCI1CKEN:25', 'USCI0CKEN:24', 'BPWMCKEN:23', 'EPWMCKEN:20', 'PGACKEN:12', 'ECAPCKEN:8', 'CLKOCKEN:6', 'TMR1CKEN:3', 'TMR0CKEN:2', 'WDTCKEN:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL0 = ['STCLKSEL:4-3', 'HCLKSEL:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL1 = ['CLKOSEL:31-30', 'TMR1SEL:14-12', 'TMR0SEL:10-8', 'EADCSEL:5-4', 'WDTSEL:1-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV = ['EADCDIV:23-16', 'HCLKDIV:3-0'];
NUTOOL_CLOCK.g_register_map.CLKOCTL = ['DIV1EN:5', 'CLKOEN:4', 'FSEL:3-0'];
NUTOOL_CLOCK.g_register_map.SYST_CTRL = ['CLKSRC:2', 'ENABLE:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKSEL0  = '0x0000001B';
NUTOOL_CLOCK.g_register_map_default.CLKSEL1  = '0xC3077733';
NUTOOL_CLOCK.g_register_map_default.PWRCTL   = '0x0000001D';
NUTOOL_CLOCK.g_register_map_default.AHBCLK   = '0x00000014';
NUTOOL_CLOCK.g_register_map_default.APBCLK   = '0x00000001';
NUTOOL_CLOCK.g_register_map_default.CLKOCTL  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SYST_CTRL = '0x00000004';

NUTOOL_CLOCK.g_register_map_description = [];
NUTOOL_CLOCK.g_register_map_description.PWRCTL   = '0x50000200';
NUTOOL_CLOCK.g_register_map_description.AHBCLK   = '0x50000204';
NUTOOL_CLOCK.g_register_map_description.APBCLK   = '0x50000208';
NUTOOL_CLOCK.g_register_map_description.CLKSEL0  = '0x50000210';
NUTOOL_CLOCK.g_register_map_description.CLKSEL1  = '0x50000214';
NUTOOL_CLOCK.g_register_map_description.CLKDIV   = '0x50000220';
NUTOOL_CLOCK.g_register_map_description.CLKOCTL  = '0x50000260';
NUTOOL_CLOCK.g_register_map_description.SYST_CTRL = '0xE000E010';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.EADCSEL = ['HXTorLXT:0', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.CLKOSEL = ['HXTorLXT:0', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.HCLKSEL = ['HXTorLXT:0', 'LIRC:1', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.STCLKSEL = ['HXTorLXT:0', 'HXTorLXT/2:1', 'HCLK/2:2', 'HIRC/2:3'];
NUTOOL_CLOCK.g_CLKSEL.TMR0SEL = ['HXTorLXT:0', 'LIRC:1', 'HCLK:2', 'EXT:3', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR1SEL = ['HXTorLXT:0', 'LIRC:1', 'HCLK:2', 'EXT:3', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.WDTSEL = ['HXTorLXT:0', 'HCLK/2048:2', 'LIRC:3'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ACMP = ['PCLK', 'ACMPCKEN', 'none'];
NUTOOL_CLOCK.g_Module.EADC = ['EADCSEL', 'EADCCKEN', 'EADCDIV'];
NUTOOL_CLOCK.g_Module.BPWM = ['PCLK', 'BPWMCKEN', 'none'];
NUTOOL_CLOCK.g_Module.ECAP = ['PCLK', 'ECAPCKEN', 'none'];
NUTOOL_CLOCK.g_Module.EPWM = ['PCLK', 'EPWMCKEN', 'none'];
NUTOOL_CLOCK.g_Module.HDIV = ['HCLK', 'HDIVCKEN', 'none'];
NUTOOL_CLOCK.g_Module.ISP = ['HIRC', 'ISPCKEN', 'none'];
NUTOOL_CLOCK.g_Module.PGA = ['PCLK', 'PGACKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['TMR0SEL', 'TMR0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR1 = ['TMR1SEL', 'TMR1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.USCI0 = ['PCLK', 'USCI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.USCI1 = ['PCLK', 'USCI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.WDT = ['WDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO = ['CLKOSEL', 'CLKOCKEN/DIV1EN/CLKOEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_Divider = ['CLKOSEL', 'CLKOCKEN/!DIV1EN/CLKOEN', 'FSEL'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['STCLKSEL/SYST_CTRL[2]', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {};
NUTOOL_CLOCK.g_equivalentName = [];
NUTOOL_CLOCK.g_equivalentName._S = 'SEL';
NUTOOL_CLOCK.g_equivalentName.OSC10K_EN = 'LIRCEN';
NUTOOL_CLOCK.g_equivalentName.OSC22M_EN = 'HIRCEN';
NUTOOL_CLOCK.g_equivalentName.XTL32K_EN = 'LXTEN';
NUTOOL_CLOCK.g_equivalentName.XTL12M_EN = 'HXTEN';
NUTOOL_CLOCK.g_equivalentName.WDT_EN = 'WDTCKEN';
NUTOOL_CLOCK.g_equivalentName.SYST_CSR = 'SYST_CTRL';
NUTOOL_CLOCK.g_equivalentName.HCLK_S = 'HCLKSEL';
NUTOOL_CLOCK.g_equivalentName.STCLK_S = 'STCLKSEL';
NUTOOL_CLOCK.g_equivalentName['STCLK_S/SYST_CSR[2]'] = 'STCLKSEL/SYST_CTRL[2]';
NUTOOL_CLOCK.g_equivalentName.HCLK_N = 'HCLKDIV';
NUTOOL_CLOCK.g_equivalentName.PWRCON = 'PWRCTL';
NUTOOL_CLOCK.g_equivalentName.EXT = {
	'TMR0SEL': 'T0',
	'TMR1SEL': 'T1'
};

NUTOOL_CLOCK.g_BusNonExistent = [];
NUTOOL_CLOCK.g_BusFromPCLK1 = [];
NUTOOL_CLOCK.g_DIV_Module_Defines = [];
NUTOOL_CLOCK.g_CPUCLKLimit = 48 * 1000000;
NUTOOL_CLOCK.g_HXTRange = '4~24MHz';
NUTOOL_CLOCK.g_HXTfrequency = 12 * 1000000;
NUTOOL_CLOCK.g_HIRCfrequencyArray = [];
NUTOOL_CLOCK.g_HIRCfrequency = 48 * 1000000;
NUTOOL_CLOCK.g_HIRC2frequencyArray = [];
NUTOOL_CLOCK.g_HIRC2frequency = 0;
NUTOOL_CLOCK.g_HIRC48frequency = 0;
NUTOOL_CLOCK.g_LIRCfrequency = 10 * 1000;
NUTOOL_CLOCK.g_MIRCfrequency = 0;
NUTOOL_CLOCK.g_MIRC1P2Mfrequency = 0;
NUTOOL_CLOCK.g_RTC32kfrequency = 0;
NUTOOL_CLOCK.g_PLL480Mfrequency = 0;
NUTOOL_CLOCK.g_HSUSBOTGPHYfrequency = 0;
