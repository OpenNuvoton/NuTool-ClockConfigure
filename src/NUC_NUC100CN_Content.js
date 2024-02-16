// chip content
NUTOOL_CLOCK.g_cfg_chips = [
	//NUC100CN
	{ name: "NUC130VE3CN", pkg: "LQFP100" },
	{ name: "NUC140VE3CN", pkg: "LQFP100" },
	{ name: "NUC130RC1CN", pkg: "LQFP64" },
	{ name: "NUC130RD2CN", pkg: "LQFP64" },
	{ name: "NUC130RE3CN", pkg: "LQFP64" },
	{ name: "NUC140RC1CN", pkg: "LQFP64" },
	{ name: "NUC140RD2CN", pkg: "LQFP64" },
	{ name: "NUC140RE3CN", pkg: "LQFP64" },
	{ name: "NUC130LC1CN", pkg: "LQFP48" },
	{ name: "NUC130LD2CN", pkg: "LQFP48" },
	{ name: "NUC130LE3CN", pkg: "LQFP48" },
	{ name: "NUC140LC1CN", pkg: "LQFP48" },
	{ name: "NUC140LD2CN", pkg: "LQFP48" },
	{ name: "NUC140LE3CN", pkg: "LQFP48" },
	//NUC100DN
	{ name: "NUC100VE3DN", pkg: "LQFP100" },
	{ name: "NUC100RC1DN", pkg: "LQFP64" },
	{ name: "NUC100RD1DN", pkg: "LQFP64" },
	{ name: "NUC100RD2DN", pkg: "LQFP64" },
	{ name: "NUC100RE3DN", pkg: "LQFP64" },
	{ name: "NUC100LC1DN", pkg: "LQFP48" },
	{ name: "NUC100LD2DN", pkg: "LQFP48" },
	{ name: "NUC100LE3DN", pkg: "LQFP48" },
	{ name: "NUC120VE3DN", pkg: "LQFP100" },
	{ name: "NUC120RC1DN", pkg: "LQFP64" },
	{ name: "NUC120RD2DN", pkg: "LQFP64" },
	{ name: "NUC120RE3DN", pkg: "LQFP64" },
	{ name: "NUC120LC1DN", pkg: "LQFP48" },
	{ name: "NUC120LD2DN", pkg: "LQFP48" },
	{ name: "NUC120LE3DN", pkg: "LQFP48" },
	//NUC131
	{ name: "NUC131SC2AE", pkg: "LQFP64" },
	{ name: "NUC131SD2AE", pkg: "LQFP64" },
	{ name: "NUC131LC2AE", pkg: "LQFP48" },
	{ name: "NUC131LD2AE", pkg: "LQFP48" },
	//NUC121AE
	{ name: "NUC121SC2AE", pkg: "LQFP64" },
	{ name: "NUC121LC2AE", pkg: "LQFP48" },
	{ name: "NUC121ZC2AE", pkg: "QFN33" },
	{ name: "NUC125SC2AE", pkg: "LQFP64" },
	{ name: "NUC125LC2AE", pkg: "LQFP48" },
	{ name: "NUC125ZC2AE", pkg: "QFN33" },
	//NUC123AN
	{ name: "NUC123ZD4AN0", pkg: "QFN33" },
	{ name: "NUC123ZC2AN1", pkg: "QFN33" },
	{ name: "NUC123LD4AN0", pkg: "LQFP48" },
	{ name: "NUC123LC2AN1", pkg: "LQFP48" },
	{ name: "NUC123SD4AN0", pkg: "LQFP64" },
	{ name: "NUC123SC2AN1", pkg: "LQFP64" },
	//NUC123AE
	{ name: "NUC123ZD4AE0", pkg: "QFN33" },
	{ name: "NUC123ZC2AE1", pkg: "QFN33" },
	{ name: "NUC123SD4AE0", pkg: "LQFP64" },
	{ name: "NUC123SC2AE1", pkg: "LQFP64" },
	{ name: "NUC123LD4AE0", pkg: "LQFP48" },
	{ name: "NUC123LC2AE1", pkg: "LQFP48" },
	//NUC126
	{ name: "NUC126LE4AE", pkg: "LQFP48" },
	{ name: "NUC126LG4AE", pkg: "LQFP48" },
	{ name: "NUC126SE4AE", pkg: "LQFP64" },
	{ name: "NUC126SG4AE", pkg: "LQFP64" },
	{ name: "NUC126VG4AE", pkg: "LQFP100" },
	// NUC1261
	{ name: "NUC1261LG4AE", pkg: "LQFP48" },
	{ name: "NUC1261LE4AE", pkg: "LQFP48" },
	{ name: "NUC1261NE4AE", pkg: "LQFP48" },
	{ name: "NUC1261SG4AE", pkg: "LQFP64" },
	{ name: "NUC1261SE4AE", pkg: "LQFP64" },
	// NUC1262
	{ name: "NUC1262NE4AE", pkg: "QFN48" },
	{ name: "NUC1262LE4AE", pkg: "LQFP48" },
	{ name: "NUC1262SE4AE", pkg: "LQFP64" },
	// NUC1263
	{ name: "NUC1263", pkg: "QFN48" }
];

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.PWRCON = ['OSC10K_EN:3', 'OSC22M_EN:2', 'XTL32K_EN:1', 'XTL12M_EN:0'];
NUTOOL_CLOCK.g_register_map.AHBCLK = ['EBI_EN:3', 'ISP_EN:2', 'PDMA_EN:1'];
NUTOOL_CLOCK.g_register_map.APBCLK = ['PS2_EN:31', 'ACMP_EN:30', 'I2S_EN:29', 'ADC_EN:28', 'USBD_EN:27', 'CAN0_EN:24', 'PWM67_EN:23', 'PWM45_EN:22', 'PWM23_EN:21', 'PWM01_EN:20', 'UART2_EN:18', 'UART1_EN:17', 'UART0_EN:16', 'SPI3_EN:15', 'SPI2_EN:14', 'SPI1_EN:13', 'SPI0_EN:12', 'I2C1_EN:9', 'I2C0_EN:8', 'FDIV_EN:6', 'TMR3_EN:5', 'TMR2_EN:4', 'TMR1_EN:3', 'TMR0_EN:2', 'RTC_EN:1', 'WDT_EN:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL0 = ['STCLK_S:5-3', 'HCLK_S:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL1 = ['PWM23_S:31-30', 'PWM01_S:29-28', 'UART_S:25-24', 'TMR3_S:22-20', 'TMR2_S:18-16', 'TMR1_S:14-12', 'TMR0_S:10-8', 'ADC_S:3-2', 'WDT_S:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL2 = ['PWM67_S:7-6', 'PWM45_S:5-4', 'FRQDIV_S:3-2', 'I2S_S:1-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV = ['ADC_N:23-16', 'UART_N:11-8', 'USB_N:7-4', 'HCLK_N:3-0'];
NUTOOL_CLOCK.g_register_map.PLLCON = ['PLL_SRC:19', 'OE:18', 'BP:17', 'PD:16', 'OUT_DV:15-14', 'IN_DV:13-9', 'FB_DV:8-0'];
NUTOOL_CLOCK.g_register_map.FRQDIV = ['DIVIDER_EN:4', 'FSEL:3-0'];
NUTOOL_CLOCK.g_register_map.SYST_CSR = ['CLKSRC:2', 'ENABLE:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKSEL0  = '0x0000003F';
NUTOOL_CLOCK.g_register_map_default.CLKSEL1  = '0xFFFFFFFF';
NUTOOL_CLOCK.g_register_map_default.CLKSEL2  = '0x000000FF';
NUTOOL_CLOCK.g_register_map_default.PWRCON   = '0x0000001F';
NUTOOL_CLOCK.g_register_map_default.AHBCLK   = '0x00000005';
NUTOOL_CLOCK.g_register_map_default.APBCLK   = '0x00000001'; // X: config's default should be 1.
NUTOOL_CLOCK.g_register_map_default.PLLCON   = '0x0005C22E';
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
NUTOOL_CLOCK.g_register_map_description.PLLCON   = '0x50000220';
NUTOOL_CLOCK.g_register_map_description.FRQDIV   = '0x50000224';
NUTOOL_CLOCK.g_register_map_description.SYST_CSR = '0xE000E010';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.ADC_S = ['HXT:0', 'PLL:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.FRQDIV_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.HCLK_S = ['HXT:0', 'LXT:1', 'PLL:2', 'LIRC:3', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.I2S_S = ['HXT:0', 'PLL:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.PWM01_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.PWM23_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.PWM45_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.PWM67_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.STCLK_S = ['HXT:0', 'LXT:1', 'HXT/2:2', 'HCLK/2:3', 'HIRC/2:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR0_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR1_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR2_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR3_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.UART_S = ['HXT:0', 'PLL:1', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WDT_S = ['LXT:1', 'HCLK/2048:2', 'LIRC:3'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ACMP = ['PCLK', 'ACMP_EN', 'none'];
NUTOOL_CLOCK.g_Module.ADC = ['ADC_S', 'ADC_EN', 'ADC_N'];
NUTOOL_CLOCK.g_Module.CAN0 = ['PCLK', 'CAN0_EN', 'none'];
NUTOOL_CLOCK.g_Module.EBI = ['HCLK', 'EBI_EN', 'none'];
NUTOOL_CLOCK.g_Module.I2C0 = ['PCLK', 'I2C0_EN', 'none'];
NUTOOL_CLOCK.g_Module.I2C1 = ['PCLK', 'I2C1_EN', 'none'];
NUTOOL_CLOCK.g_Module.I2S = ['I2S_S', 'I2S_EN', 'none'];
NUTOOL_CLOCK.g_Module.ISP = ['HIRC', 'ISP_EN', 'none'];
NUTOOL_CLOCK.g_Module.PDMA = ['HCLK', 'PDMA_EN', 'none'];
NUTOOL_CLOCK.g_Module.PS2 = ['HIRC', 'PS2_EN', 'none'];
NUTOOL_CLOCK.g_Module.PWM01 = ['PWM01_S', 'PWM01_EN', 'none'];
NUTOOL_CLOCK.g_Module.PWM23 = ['PWM23_S', 'PWM23_EN', 'none'];
NUTOOL_CLOCK.g_Module.PWM45 = ['PWM45_S', 'PWM45_EN', 'none'];
NUTOOL_CLOCK.g_Module.PWM67 = ['PWM67_S', 'PWM67_EN', 'none'];
NUTOOL_CLOCK.g_Module.RTC = ['LXT', 'RTC_EN', 'none'];
NUTOOL_CLOCK.g_Module.SPI0 = ['PCLK', 'SPI0_EN', 'none'];
NUTOOL_CLOCK.g_Module.SPI1 = ['PCLK', 'SPI1_EN', 'none'];
NUTOOL_CLOCK.g_Module.SPI2 = ['PCLK', 'SPI2_EN', 'none'];
NUTOOL_CLOCK.g_Module.SPI3 = ['PCLK', 'SPI3_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['TMR0_S', 'TMR0_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR1 = ['TMR1_S', 'TMR1_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR2 = ['TMR2_S', 'TMR2_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR3 = ['TMR3_S', 'TMR3_EN', 'none'];
NUTOOL_CLOCK.g_Module.UART0 = ['UART_S', 'UART0_EN', 'UART_N'];
NUTOOL_CLOCK.g_Module.UART1 = ['UART_S', 'UART1_EN', 'UART_N'];
NUTOOL_CLOCK.g_Module.UART2 = ['UART_S', 'UART2_EN', 'UART_N'];
NUTOOL_CLOCK.g_Module.USBD = ['PLL', 'USBD_EN', 'USB_N'];
NUTOOL_CLOCK.g_Module.WDT = ['WDT_S', 'WDT_EN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_Divider = ['FRQDIV_S', 'FDIV_EN/DIVIDER_EN', 'FSEL'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['STCLK_S/SYST_CSR[2]', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {
	"NUC130LC1CN": ["SPI1", "SPI2", "SPI3", "PWM45", "PWM67", "EBI", "USBD"],
	"NUC130LD2CN": ["SPI1", "SPI2", "SPI3", "PWM45", "PWM67", "EBI", "USBD"],
	"NUC130LE3CN": ["SPI1", "SPI2", "SPI3", "PWM45", "PWM67", "EBI", "USBD"],
	"NUC130RC1CN": ["SPI2", "SPI3", "PWM67", "USBD"],
	"NUC130RD2CN": ["SPI2", "SPI3", "PWM67", "USBD"],
	"NUC130RD3CN": ["SPI2", "SPI3", "PWM67", "USBD"],
	"NUC130VE3CN": ["USBD"],

	"NUC140LC1CN": ["UART2", "SPI1", "SPI2", "SPI3", "PWM45", "PWM67", "EBI"],
	"NUC140LD2CN": ["UART2", "SPI1", "SPI2", "SPI3", "PWM45", "PWM67", "EBI"],
	"NUC140LE3CN": ["UART2", "SPI1", "SPI2", "SPI3", "PWM45", "PWM67", "EBI"],
	"NUC140RC1CN": ["SPI2", "SPI3", "PWM45", "PWM67"],
	"NUC140RD2CN": ["SPI2", "SPI3", "PWM45", "PWM67"],
	"NUC140RE3CN": ["SPI2", "SPI3", "PWM45", "PWM67"]
};

NUTOOL_CLOCK.g_equivalentName = [];
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
