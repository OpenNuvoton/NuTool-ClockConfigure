// chip content
NUTOOL_CLOCK.g_cfg_chips = [
	//NUC200AN
	{ name: "NUC200VE3AN", pkg: "LQFP100" },
	{ name: "NUC220VE3AN", pkg: "LQFP100" },

	{ name: "NUC200SC2AN", pkg: "LQFP64" },
	{ name: "NUC200SD2AN", pkg: "LQFP64" },
	{ name: "NUC200SE3AN", pkg: "LQFP64" },
	{ name: "NUC220SC2AN", pkg: "LQFP64" },
	{ name: "NUC220SD2AN", pkg: "LQFP64" },
	{ name: "NUC220SE3AN", pkg: "LQFP64" },

	{ name: "NUC200LC2AN", pkg: "LQFP48" },
	{ name: "NUC200LD2AN", pkg: "LQFP48" },
	{ name: "NUC200LE3AN", pkg: "LQFP48" },
	{ name: "NUC220LC2AN", pkg: "LQFP48" },
	{ name: "NUC220LD2AN", pkg: "LQFP48" },
	{ name: "NUC220LE3AN", pkg: "LQFP48" },
	//NUC200AE
	{ name: "NUC240VE3AE", pkg: "LQFP100" },
	{ name: "NUC230VE3AE", pkg: "LQFP100" },
	{ name: "NUC240SE3AE", pkg: "LQFP64" },
	{ name: "NUC240SD2AE", pkg: "LQFP64" },
	{ name: "NUC240SC2AE", pkg: "LQFP64" },
	{ name: "NUC230SE3AE", pkg: "LQFP64" },
	{ name: "NUC230SD2AE", pkg: "LQFP64" },
	{ name: "NUC230SC2AE", pkg: "LQFP64" },
	{ name: "NUC240LE3AE", pkg: "LQFP48" },
	{ name: "NUC240LD2AE", pkg: "LQFP48" },
	{ name: "NUC240LC2AE", pkg: "LQFP48" },
	{ name: "NUC230LE3AE", pkg: "LQFP48" },
	{ name: "NUC230LD2AE", pkg: "LQFP48" },
	{ name: "NUC230LC2AE", pkg: "LQFP48" },
	//NUC2201
	{ name: "NUC2201LE3AE", pkg: "LQFP48" },
	{ name: "NUC2201SE3AE", pkg: "LQFP64" }
];

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.PWRCON = ['OSC10K_EN:3', 'OSC22M_EN:2', 'XTL32K_EN:1', 'XTL12M_EN:0'];
NUTOOL_CLOCK.g_register_map.AHBCLK = ['EBI_EN:3', 'ISP_EN:2', 'PDMA_EN:1'];
NUTOOL_CLOCK.g_register_map.APBCLK = ['PS2_EN:31', 'ACMP_EN:30', 'I2S_EN:29', 'ADC_EN:28', 'USBD_EN:27', 'CAN1_EN:25', 'CAN0_EN:24', 'PWM67_EN:23', 'PWM45_EN:22', 'PWM23_EN:21', 'PWM01_EN:20', 'UART2_EN:18', 'UART1_EN:17', 'UART0_EN:16', 'SPI3_EN:15', 'SPI2_EN:14', 'SPI1_EN:13', 'SPI0_EN:12', 'I2C1_EN:9', 'I2C0_EN:8', 'FDIV_EN:6', 'TMR3_EN:5', 'TMR2_EN:4', 'TMR1_EN:3', 'TMR0_EN:2', 'RTC_EN:1', 'WDT_EN:0'];
NUTOOL_CLOCK.g_register_map.APBCLK1 = ['SC2_EN:2', 'SC1_EN:1', 'SC0_EN:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL0 = ['STCLK_S:5-3', 'HCLK_S:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL1 = ['PWM23_S:31-30', 'PWM01_S:29-28', 'UART_S:25-24', 'TMR3_S:22-20', 'TMR2_S:18-16', 'TMR1_S:14-12', 'TMR0_S:10-8', 'SPI3_S:7', 'SPI2_S:6', 'SPI1_S:5', 'SPI0_S:4', 'ADC_S:3-2', 'WDT_S:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL2 = ['RTC_SEL_10K:18', 'RTC_SEL_10K/32768:18', 'WWDT_S:17-16', 'PWM67_S_E:11', 'PWM45_S_E:10', 'PWM23_S_E:9', 'PWM01_S_E:8', 'PWM67_S:7-6', 'PWM45_S:5-4', 'FRQDIV_S:3-2', 'I2S_S:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL3 = ['SC2_S:5-4', 'SC1_S:3-2', 'SC0_S:1-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV = ['ADC_N:23-16', 'UART_N:11-8', 'USB_N:7-4', 'HCLK_N:3-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV1 = ['SC2_N:23-16', 'SC1_N:15-8', 'SC0_N:7-0'];
NUTOOL_CLOCK.g_register_map.PLLCON = ['PLL_SRC:19', 'OE:18', 'BP:17', 'PD:16', 'OUT_DV:15-14', 'IN_DV:13-9', 'FB_DV:8-0'];
NUTOOL_CLOCK.g_register_map.FRQDIV = ['CLKO_1HZ_EN:6', 'DIV1EN:5', 'CLKOEN:4', 'FREQSEL:3-0'];
NUTOOL_CLOCK.g_register_map.SYST_CSR = ['CLKSRC:2', 'ENABLE:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV1  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKSEL0  = '0x0000003F';
NUTOOL_CLOCK.g_register_map_default.CLKSEL1  = '0xFFFFFFFF';
NUTOOL_CLOCK.g_register_map_default.CLKSEL2  = '0x000200FF';
NUTOOL_CLOCK.g_register_map_default.CLKSEL3  = '0x0000003F';
NUTOOL_CLOCK.g_register_map_default.PWRCON   = '0x0000001F';
NUTOOL_CLOCK.g_register_map_default.AHBCLK   = '0x00000005';
NUTOOL_CLOCK.g_register_map_default.APBCLK   = '0x00000001'; //// X: config's default should be 1.
NUTOOL_CLOCK.g_register_map_default.APBCLK1  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.PLLCON   = '0x0005C22E';
NUTOOL_CLOCK.g_register_map_default.FRQDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SYST_CSR = '0x00000000';

NUTOOL_CLOCK.g_register_map_description = [];
NUTOOL_CLOCK.g_register_map_description.PWRCON   = '0x50000200';
NUTOOL_CLOCK.g_register_map_description.AHBCLK   = '0x50000204';
NUTOOL_CLOCK.g_register_map_description.APBCLK   = '0x50000208';
NUTOOL_CLOCK.g_register_map_description.APBCLK1  = '0x50000230';
NUTOOL_CLOCK.g_register_map_description.CLKSEL0  = '0x50000210';
NUTOOL_CLOCK.g_register_map_description.CLKSEL1  = '0x50000214';
NUTOOL_CLOCK.g_register_map_description.CLKSEL2  = '0x5000021C';
NUTOOL_CLOCK.g_register_map_description.CLKSEL3  = '0x50000234';
NUTOOL_CLOCK.g_register_map_description.CLKDIV   = '0x50000218';
NUTOOL_CLOCK.g_register_map_description.CLKDIV1  = '0x50000238';
NUTOOL_CLOCK.g_register_map_description.PLLCON   = '0x50000220';
NUTOOL_CLOCK.g_register_map_description.FRQDIV   = '0x50000224';
NUTOOL_CLOCK.g_register_map_description.SYST_CSR = '0xE000E010';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.ADC_S = ['HXT:0', 'PLL:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.FRQDIV_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.HCLK_S = ['HXT:0', 'LXT:1', 'PLL:2', 'LIRC:3', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.I2S_S = ['HXT:0', 'PLL:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.PWM01_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3', 'LIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.PWM23_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3', 'LIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.PWM45_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3', 'LIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.PWM67_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3', 'LIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.RTC_SEL_10K = ['LXT:0', 'LIRC:1'];
NUTOOL_CLOCK.g_CLKSEL['RTC_SEL_10K/32768'] = ['LXT/32768:0', 'LIRC/32768:1'];
NUTOOL_CLOCK.g_CLKSEL.SC0_S = ['HXT:0', 'PLL:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SC1_S = ['HXT:0', 'PLL:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SC2_S = ['HXT:0', 'PLL:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI0_S = ['PLL:0', 'HCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.SPI1_S = ['PLL:0', 'HCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.SPI2_S = ['PLL:0', 'HCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.SPI3_S = ['PLL:0', 'HCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.STCLK_S = ['HXT:0', 'LXT:1', 'HXT/2:2', 'HCLK/2:3', 'HIRC/2:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR0_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; //'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR1_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; //'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR2_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; //'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR3_S = ['HXT:0', 'LXT:1', 'HCLK:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; //'external:3'
NUTOOL_CLOCK.g_CLKSEL.UART_S = ['HXT:0', 'PLL:1', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WDT_S = ['LXT:1', 'HCLK/2048:2', 'LIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WWDT_S = ['HCLK/2048:2', 'LIRC:3'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];
NUTOOL_CLOCK.g_CLKSEL_EXTENDED.PWM01_S = ['PWM01_S_E:2'];
NUTOOL_CLOCK.g_CLKSEL_EXTENDED.PWM23_S = ['PWM23_S_E:2'];
NUTOOL_CLOCK.g_CLKSEL_EXTENDED.PWM45_S = ['PWM45_S_E:2'];
NUTOOL_CLOCK.g_CLKSEL_EXTENDED.PWM67_S = ['PWM67_S_E:2'];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ACMP = ['PCLK', 'ACMP_EN', 'none'];
NUTOOL_CLOCK.g_Module.ADC = ['ADC_S', 'ADC_EN', 'ADC_N'];
NUTOOL_CLOCK.g_Module.CAN0 = ['PCLK', 'CAN0_EN', 'none'];
NUTOOL_CLOCK.g_Module.CAN1 = ['PCLK', 'CAN1_EN', 'none'];
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
NUTOOL_CLOCK.g_Module.RTC = ['RTC_SEL_10K', 'RTC_EN', 'none'];
NUTOOL_CLOCK.g_Module.SC0 = ['SC0_S', 'SC0_EN', 'SC0_N'];
NUTOOL_CLOCK.g_Module.SC1 = ['SC1_S', 'SC1_EN', 'SC1_N'];
NUTOOL_CLOCK.g_Module.SC2 = ['SC2_S', 'SC2_EN', 'SC2_N'];
NUTOOL_CLOCK.g_Module.SPI0 = ['SPI0_S', 'SPI0_EN', 'none'];
NUTOOL_CLOCK.g_Module.SPI1 = ['SPI1_S', 'SPI1_EN', 'none'];
NUTOOL_CLOCK.g_Module.SPI2 = ['SPI2_S', 'SPI2_EN', 'none'];
NUTOOL_CLOCK.g_Module.SPI3 = ['SPI3_S', 'SPI3_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['TMR0_S', 'TMR0_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR1 = ['TMR1_S', 'TMR1_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR2 = ['TMR2_S', 'TMR2_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR3 = ['TMR3_S', 'TMR3_EN', 'none'];
NUTOOL_CLOCK.g_Module.UART0 = ['UART_S', 'UART0_EN', 'UART_N'];
NUTOOL_CLOCK.g_Module.UART1 = ['UART_S', 'UART1_EN', 'UART_N'];
NUTOOL_CLOCK.g_Module.UART2 = ['UART_S', 'UART2_EN', 'UART_N'];
NUTOOL_CLOCK.g_Module.USBD = ['PLL', 'USBD_EN', 'USB_N'];
NUTOOL_CLOCK.g_Module.WDT = ['WDT_S', 'WDT_EN', 'none'];
NUTOOL_CLOCK.g_Module.WWDT = ['WWDT_S', 'WDT_EN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO = ['FRQDIV_S', 'FDIV_EN/CLKOEN/DIV1EN/!CLKO_1HZ_EN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_1Hz = ['RTC_SEL_10K/32768', 'CLKO_1HZ_EN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_Divider = ['FRQDIV_S', 'FDIV_EN/CLKOEN/!DIV1EN/!CLKO_1HZ_EN', 'FREQSEL'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['STCLK_S/SYST_CSR[2]', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {
	"NUC230LC2AE": ["SPI1", "SPI2", "SPI13", "SC1", "PWM45", "PWM67", "EBI", "USBD"],
	"NUC230LD2AE": ["SPI1", "SPI2", "SPI13", "SC1", "PWM45", "PWM67", "EBI", "USBD"],
	"NUC230LE3AE": ["SPI1", "SPI2", "SPI13", "SC1", "PWM45", "PWM67", "EBI", "USBD"],
	"NUC230SC2AE": ["SPI2", "SPI13", "SC1", "PWM67", "USBD"],
	"NUC230SD2AE": ["SPI2", "SPI13", "SC1", "PWM67", "USBD"],
	"NUC230SE3AE": ["SPI2", "SPI13", "SC1", "PWM67", "USBD"],
	"NUC230VE3AE": ["USBD"],

	"NUC240LC2AE": ["SPI1", "SPI2", "SPI13", "SC1", "SC2", "PWM45", "PWM67", "EBI",],
	"NUC240LD2AE": ["SPI1", "SPI2", "SPI13", "SC1", "SC2", "PWM45", "PWM67", "EBI",],
	"NUC240LE3AE": ["SPI1", "SPI2", "SPI13", "SC1", "SC2", "PWM45", "PWM67", "EBI",],
	"NUC240SC2AE": ["SPI2", "SPI13", "SC1", "PWM45", "PWM67"],
	"NUC240SD2AE": ["SPI2", "SPI13", "SC1", "PWM45", "PWM67"],
	"NUC240SE3AE": ["SPI2", "SPI13", "SC1", "PWM45", "PWM67"]
};

NUTOOL_CLOCK.g_equivalentName = [];
NUTOOL_CLOCK.g_BusNonExistent = [];
NUTOOL_CLOCK.g_BusFromPCLK1 = [];
NUTOOL_CLOCK.g_DIV_Module_Defines = ['USB:USB', 'UART:UART'];
NUTOOL_CLOCK.g_CPUCLKLimit = 72 * 1000000;
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
