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
NUTOOL_CLOCK.g_register_map.PWRCON = ['OSC10K_EN:3', 'OSC22M_EN:2', 'XTL32K_EN:1', 'XTL12M_EN:0'];
NUTOOL_CLOCK.g_register_map.AHBCLK = ['ISP_EN:2'];
NUTOOL_CLOCK.g_register_map.APBCLK = ['ACMP_EN:30', 'ADC_EN:28', 'PWM45_EN:22', 'PWM23_EN:21', 'PWM01_EN:20', 'UART_EN:16', 'SPI_EN:12', 'I2C_EN:8', 'FDIV_EN:6', 'TMR1_EN:3', 'TMR0_EN:2', 'WDT_EN:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL0 = ['STCLK_S:5-3', 'HCLK_S:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL1 = ['UART_S:25-24', 'TMR1_S:14-12', 'TMR0_S:10-8', 'SPI_S:4', 'ADC_S:3-2', 'WDT_S:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL2 = ['FRQDIV_S:3-2'];
NUTOOL_CLOCK.g_register_map.CLKDIV = ['ADC_N:23-16', 'UART_N:11-8', 'HCLK_N:3-0'];
NUTOOL_CLOCK.g_register_map.FRQDIV = ['DIVIDER1:5', 'DIVIDER_EN:4', 'FSEL:3-0'];
NUTOOL_CLOCK.g_register_map.SYST_CSR = ['CLKSRC:2', 'ENABLE:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKSEL0  = '0x0000003F';
NUTOOL_CLOCK.g_register_map_default.CLKSEL1  = '0xAFFFFFFF';
NUTOOL_CLOCK.g_register_map_default.CLKSEL2  = '0x000000EF';
NUTOOL_CLOCK.g_register_map_default.PWRCON   = '0x0000001D';
NUTOOL_CLOCK.g_register_map_default.AHBCLK   = '0x00000005';
NUTOOL_CLOCK.g_register_map_default.APBCLK   = '0x00000001'; // X: config's default should be 1.
NUTOOL_CLOCK.g_register_map_default.FRQDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SYST_CSR = '0x00000000';

NUTOOL_CLOCK.g_register_map_description = [];
NUTOOL_CLOCK.g_register_map_description.PWRCON   = '0x50000200';
NUTOOL_CLOCK.g_register_map_description.AHBCLK   = '0x50000204';
NUTOOL_CLOCK.g_register_map_description.APBCLK   = '0x50000208';
NUTOOL_CLOCK.g_register_map_description.CLKSEL0  = '0x50000210';
NUTOOL_CLOCK.g_register_map_description.CLKSEL1  = '0x50000214';
NUTOOL_CLOCK.g_register_map_description.CLKSEL2  = '0x5000021C';
NUTOOL_CLOCK.g_register_map_description.CLKDIV   = '0x50000218';
NUTOOL_CLOCK.g_register_map_description.FRQDIV   = '0x50000224';
NUTOOL_CLOCK.g_register_map_description.SYST_CSR = '0xE000E010';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.HCLK_S = ['HXTorLXT:0', 'LIRC:3', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.STCLK_S = ['HXTorLXT:0', 'HXTorLXT/2:2', 'HCLK/2:3', 'HIRC/2:7'];
NUTOOL_CLOCK.g_CLKSEL.WDT_S = ['HXTorLXT:0', 'HCLK/2048:2', 'LIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.ADC_S = ['HXTorLXT:0', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI_S = ['HXTorLXT:0', 'HCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.TMR0_S = ['HXTorLXT:0', 'LIRC:1', 'HCLK:2', 'HIRC:7']; //'external:3',
NUTOOL_CLOCK.g_CLKSEL.TMR1_S = ['HXTorLXT:0', 'LIRC:1', 'HCLK:2', 'HIRC:7']; //'external:3',
NUTOOL_CLOCK.g_CLKSEL.UART_S = ['HXTorLXT:0', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.FRQDIV_S = ['HXTorLXT:0', 'HCLK:2', 'HIRC:3'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ACMP = ['PCLK', 'ACMP_EN', 'none'];
NUTOOL_CLOCK.g_Module.ADC = ['ADC_S', 'ADC_EN', 'ADC_N'];
NUTOOL_CLOCK.g_Module.I2C = ['PCLK', 'I2C_EN', 'none'];
NUTOOL_CLOCK.g_Module.ISP = ['HIRC', 'ISP_EN', 'none'];
NUTOOL_CLOCK.g_Module.PWM01 = ['PCLK', 'PWM01_EN', 'none'];
NUTOOL_CLOCK.g_Module.PWM23 = ['PCLK', 'PWM23_EN', 'none'];
NUTOOL_CLOCK.g_Module.PWM45 = ['PCLK', 'PWM45_EN', 'none'];
NUTOOL_CLOCK.g_Module.SPI = ['SPI_S', 'SPI_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['TMR0_S', 'TMR0_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR1 = ['TMR1_S', 'TMR1_EN', 'none'];
NUTOOL_CLOCK.g_Module.UART = ['UART_S', 'UART_EN', 'UART_N'];
NUTOOL_CLOCK.g_Module.WDT = ['WDT_S', 'WDT_EN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO = ['FRQDIV_S', 'FDIV_EN/DIVIDER_EN/DIVIDER1', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_Divider = ['FRQDIV_S', 'FDIV_EN/DIVIDER_EN/!DIVIDER1', 'FSEL'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['STCLK_S/SYST_CSR[2]', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {
	"MINI51FDE": ["ACMP", "PWM01"],
	"MINI52FDE": ["ACMP", "PWM01"],
	"MINI54FDE": ["ACMP", "PWM01"],
	"MINI54FHC": ["ACMP"]
};

NUTOOL_CLOCK.g_equivalentName = [];
NUTOOL_CLOCK.g_BusNonExistent = [];
NUTOOL_CLOCK.g_BusFromPCLK1 = [];
NUTOOL_CLOCK.g_DIV_Module_Defines = ['USB:USB', 'UART:UART'];
NUTOOL_CLOCK.g_CPUCLKLimit = 24 * 1000000;
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
