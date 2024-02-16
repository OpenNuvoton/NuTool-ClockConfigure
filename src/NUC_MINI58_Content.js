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
NUTOOL_CLOCK.g_register_map.AHBCLK = ['ISPCKEN:2'];
NUTOOL_CLOCK.g_register_map.APBCLK = ['ACMPCKEN:30', 'ADCCKEN:28', 'PWMCH45CKEN:22', 'PWMCH23CKEN:21', 'PWMCH01CKEN:20', 'UART1CKEN:17', 'UART0CKEN:16', 'SPICKEN:12', 'I2C1CKEN:9', 'I2C0CKEN:8', 'CLKOCKEN:6', 'TMR1CKEN:3', 'TMR0CKEN:2', 'WDTCKEN:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL0 = ['STCLKSEL:5-3', 'HCLKSEL:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL1 = ['PWMCH23SEL:31-30', 'PWMCH01SEL:29-28', 'UARTSEL:25-24', 'TMR1SEL:14-12', 'TMR0SEL:10-8', 'SPISEL:5-4', 'ADCSEL:3-2', 'WDTSEL:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL2 = ['WWDTSEL:17-16', 'PWMCH45SEL:5-4', 'CLKOSEL:3-2'];
NUTOOL_CLOCK.g_register_map.CLKDIV = ['ADCDIV:23-16', 'UARTDIV:11-8', 'HCLKDIV:3-0'];
NUTOOL_CLOCK.g_register_map.PLLCTL = ['PLL_SRC:19', 'OE:18', 'BP:17', 'PD:16', 'OUTDIV:15-14', 'INDIV:13-9', 'FBDIV:8-0'];
NUTOOL_CLOCK.g_register_map.CLKOCTL = ['DIV1EN:5', 'CLKOEN:4', 'FSEL:3-0'];
NUTOOL_CLOCK.g_register_map.SYST_CSR = ['CLKSRC:2', 'ENABLE:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKSEL0  = '0x0000003F';
NUTOOL_CLOCK.g_register_map_default.CLKSEL1  = '0xAFFFFFFF';
NUTOOL_CLOCK.g_register_map_default.CLKSEL2  = '0x000200EF';
NUTOOL_CLOCK.g_register_map_default.PWRCTL   = '0x0000001D';
NUTOOL_CLOCK.g_register_map_default.AHBCLK   = '0x00000005';
NUTOOL_CLOCK.g_register_map_default.APBCLK   = '0x00000001';
NUTOOL_CLOCK.g_register_map_default.PLLCTL   = '0x0005C230';
NUTOOL_CLOCK.g_register_map_default.CLKOCTL  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SYST_CSR = '0x00000000';

NUTOOL_CLOCK.g_register_map_description = [];
NUTOOL_CLOCK.g_register_map_description.PWRCTL   = '0x50000200';
NUTOOL_CLOCK.g_register_map_description.AHBCLK   = '0x50000204';
NUTOOL_CLOCK.g_register_map_description.APBCLK   = '0x50000208';
NUTOOL_CLOCK.g_register_map_description.CLKSEL0  = '0x50000210';
NUTOOL_CLOCK.g_register_map_description.CLKSEL1  = '0x50000214';
NUTOOL_CLOCK.g_register_map_description.CLKSEL2  = '0x5000021C';
NUTOOL_CLOCK.g_register_map_description.CLKDIV   = '0x50000218';
NUTOOL_CLOCK.g_register_map_description.PLLCTL   = '0x50000220';
NUTOOL_CLOCK.g_register_map_description.CLKOCTL  = '0x50000224';
NUTOOL_CLOCK.g_register_map_description.SYST_CSR = '0xE000E010';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.ADCSEL = ['HXTorLXT:0', 'PLL:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.CLKOSEL = ['HXTorLXT:0', 'LIRC:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.HCLKSEL = ['HXTorLXT:0', 'PLL:2', 'LIRC:3', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.PWMCH01SEL = ['HCLK:2'];
NUTOOL_CLOCK.g_CLKSEL.PWMCH23SEL = ['HCLK:2'];
NUTOOL_CLOCK.g_CLKSEL.PWMCH45SEL = ['HCLK:2'];
NUTOOL_CLOCK.g_CLKSEL.SPISEL = ['HXTorLXT:0', 'HCLK:1', 'PLL:2'];
NUTOOL_CLOCK.g_CLKSEL.STCLKSEL = ['HXTorLXT:0', 'HXTorLXT/2:2', 'HCLK/2:3', 'HIRC/2:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR0SEL = ['HXTorLXT:0', 'LIRC:1', 'HCLK:2', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR1SEL = ['HXTorLXT:0', 'LIRC:1', 'HCLK:2', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.UARTSEL = ['HXTorLXT:0', 'PLL:1', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WDTSEL = ['HXTorLXT:0', 'HCLK/2048:2', 'LIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WWDTSEL = ['HCLK/2048:2', 'LIRC:3'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ACMP = ['PCLK', 'ACMPCKEN', 'none'];
NUTOOL_CLOCK.g_Module.ADC = ['ADCSEL', 'ADCCKEN', 'ADCDIV'];
NUTOOL_CLOCK.g_Module.I2C0 = ['PCLK', 'I2C0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C1 = ['PCLK', 'I2C1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ISP = ['HIRC', 'ISPCKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWMCH01 = ['PWMCH01SEL', 'PWMCH01CKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWMCH23 = ['PWMCH23SEL', 'PWMCH23CKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWMCH45 = ['PWMCH45SEL', 'PWMCH45CKEN', 'none'];
NUTOOL_CLOCK.g_Module.SPI0 = ['SPISEL', 'SPICKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['TMR0SEL', 'TMR0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR1 = ['TMR1SEL', 'TMR1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.UART0 = ['UARTSEL', 'UART0CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.UART1 = ['UARTSEL', 'UART1CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.WDT = ['WDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.WWDT = ['WWDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO = ['CLKOSEL', 'CLKOCKEN/DIV1EN/CLKOEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_Divider = ['CLKOSEL', 'CLKOCKEN/!DIV1EN/CLKOEN', 'FSEL'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['STCLKSEL/SYST_CSR[2]', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {
	"MINI58FDE": ["ACMP"]
};

NUTOOL_CLOCK.g_equivalentName = [];
NUTOOL_CLOCK.g_equivalentName._S = 'SEL';
NUTOOL_CLOCK.g_equivalentName.OSC10K_EN = 'LIRCEN';
NUTOOL_CLOCK.g_equivalentName.OSC22M_EN = 'HIRCEN';
NUTOOL_CLOCK.g_equivalentName.XTL32K_EN = 'LXTEN';
NUTOOL_CLOCK.g_equivalentName.XTL12M_EN = 'HXTEN';
NUTOOL_CLOCK.g_equivalentName.WDT_EN = 'WDTCKEN';
NUTOOL_CLOCK.g_equivalentName.HCLK_S = 'HCLKSEL';
NUTOOL_CLOCK.g_equivalentName.STCLK_S = 'STCLKSEL';
NUTOOL_CLOCK.g_equivalentName['STCLK_S/SYST_CSR[2]'] = 'STCLKSEL/SYST_CSR[2]';
NUTOOL_CLOCK.g_equivalentName.HCLK_N = 'HCLKDIV';
NUTOOL_CLOCK.g_equivalentName.PWRCON = 'PWRCTL';
NUTOOL_CLOCK.g_equivalentName.PLLCON = 'PLLCTL';

NUTOOL_CLOCK.g_BusNonExistent = [];
NUTOOL_CLOCK.g_BusFromPCLK1 = [];
NUTOOL_CLOCK.g_DIV_Module_Defines = ['USB:USB', 'UART:UART'];
NUTOOL_CLOCK.g_CPUCLKLimit = 50 * 1000000;
NUTOOL_CLOCK.g_HXTRange = '4~24MHz';
NUTOOL_CLOCK.g_HXTfrequency = 12 * 1000000;
NUTOOL_CLOCK.g_HIRCfrequencyArray = [];
NUTOOL_CLOCK.g_HIRCfrequency = 22118400;
NUTOOL_CLOCK.g_HIRC2frequencyArray = [];
NUTOOL_CLOCK.g_HIRC2frequency = 0;
NUTOOL_CLOCK.g_HIRC48frequency = 0;
NUTOOL_CLOCK.g_LIRCfrequency = 10 * 1000;
NUTOOL_CLOCK.g_MIRCfrequency = 0;
NUTOOL_CLOCK.g_MIRC1P2Mfrequency = 0;
NUTOOL_CLOCK.g_RTC32kfrequency = 0;
NUTOOL_CLOCK.g_PLL480Mfrequency = 0;
NUTOOL_CLOCK.g_HSUSBOTGPHYfrequency = 0;
