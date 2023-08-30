// chip content
NUTOOL_CLOCK.g_cfg_chips = [
	// M451HD
	{ name: "M451VG6AE", pkg: "LQFP100" },
	{ name: "M451VE6AE", pkg: "LQFP100" },

	{ name: "M451RG6AE", pkg: "LQFP64" },
	{ name: "M451RE6AE", pkg: "LQFP64" },

	{ name: "M451LG6AE", pkg: "LQFP48" },
	{ name: "M451LE6AE", pkg: "LQFP48" },

	{ name: "M452RG6AE", pkg: "LQFP64" },
	{ name: "M452RE6AE", pkg: "LQFP64" },

	{ name: "M452LG6AE", pkg: "LQFP48" },
	{ name: "M452LE6AE", pkg: "LQFP48" },

	//{ name: "M4LEDRG6AE", pkg: "LQFP64" },
	//{ name: "M4LEDRE6AE", pkg: "LQFP64" },

	//{ name: "M4LEDLG6AE", pkg: "LQFP48" },
	//{ name: "M4LEDLE6AE", pkg: "LQFP48" },

	{ name: "M453VG6AE", pkg: "LQFP100" },
	//{ name: "M4TKVG6AE", pkg: "LQFP100" },
	{ name: "M453VE6AE", pkg: "LQFP100" },
	//{ name: "M4TKVE6AE", pkg: "LQFP100" },

	{ name: "M453RG6AE", pkg: "LQFP64" },
	//{ name: "M4TKRG6AE", pkg: "LQFP64" },
	{ name: "M453RE6AE", pkg: "LQFP64" },
	//{ name: "M4TKRE6AE", pkg: "LQFP64" },

	{ name: "M453LG6AE", pkg: "LQFP48" },
	//{ name: "M4TKLG6AE", pkg: "LQFP48" },
	{ name: "M453LE6AE", pkg: "LQFP48" },
	//{ name: "M4TKLE6AE", pkg: "LQFP48" },

	{ name: "M451MLG6AE", pkg: "LQFP48" },
	{ name: "M451MLE6AE", pkg: "LQFP48" },
	// M451LD
	{ name: "M451LD3AE", pkg: "LQFP48" },
	{ name: "M451LC3AE", pkg: "LQFP48" },
	{ name: "M451MLD3AE", pkg: "LQFP48" },
	{ name: "M451MLC3AE", pkg: "LQFP48" },
	{ name: "M452LD3AE", pkg: "LQFP48" },
	{ name: "M452LC3AE", pkg: "LQFP48" },
	{ name: "M453LD3AE", pkg: "LQFP48" },
	{ name: "M453LC3AE", pkg: "LQFP48" },

	{ name: "M451RD3AE", pkg: "LQFP64" },
	{ name: "M451RC3AE", pkg: "LQFP64" },
	{ name: "M451MSD3AE", pkg: "LQFP64" },
	{ name: "M451MSC3AE", pkg: "LQFP64" },
	{ name: "M452RD3AE", pkg: "LQFP64" },
	{ name: "M453RD3AE", pkg: "LQFP64" },

	{ name: "M453VD3AE", pkg: "LQFP100" }
];

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.PWRCTL = ['LIRCEN:3', 'HIRCEN:2', 'LXTEN:1', 'HXTEN:0'];
NUTOOL_CLOCK.g_register_map.AHBCLK = ['FMCIDLE:15', 'CRCCKEN:7', 'USBHCKEN:4', 'EBICKEN:3', 'ISPCKEN:2', 'PDMACKEN:1'];
NUTOOL_CLOCK.g_register_map.APBCLK0 = ['EADCCKEN:28', 'USBDCKEN:27', 'OTGCKEN:26', 'CAN0CKEN:24', 'UART3CKEN:19', 'UART2CKEN:18', 'UART1CKEN:17', 'UART0CKEN:16', 'SPI2CKEN:14', 'SPI1CKEN:13', 'SPI0CKEN:12', 'I2C1CKEN:9', 'I2C0CKEN:8', 'ACMP01CKEN:7', 'CLKOCKEN:6', 'TMR3CKEN:5', 'TMR2CKEN:4', 'TMR1CKEN:3', 'TMR0CKEN:2', 'RTCCKEN:1', 'WDTCKEN:0'];
NUTOOL_CLOCK.g_register_map.APBCLK1 = ['TKCKEN:25', 'PWM1CKEN:17', 'PWM0CKEN:16', 'DACCKEN:12', 'SC0CKEN:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL0 = ['PCLK1SEL:7', 'PCLK0SEL:6', 'STCLKSEL:5-3', 'HCLKSEL:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL1 = ['WWDTSEL:31-30', 'CLKOSEL:29-28', 'UARTSEL:25-24', 'TMR3SEL:22-20', 'TMR2SEL:18-16', 'TMR1SEL:14-12', 'TMR0SEL:10-8', 'WDTSEL:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL2 = ['SPI2SEL:7-6', 'SPI1SEL:5-4', 'SPI0SEL:3-2', 'PWM1SEL:1', 'PWM0SEL:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL3 = ['RTCSEL:8', 'RTCSEL/32768:8', 'SC0SEL:1-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV0 = ['EADCDIV:23-16', 'UARTDIV:11-8', 'USBDIV:7-4', 'HCLKDIV:3-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV1 = ['SC0DIV:7-0'];
NUTOOL_CLOCK.g_register_map.PLLCTL = ['PLL_SRC:19', 'OE:18', 'BP:17', 'PD:16', 'OUTDIV:15-14', 'INDIV:13-9', 'FBDIV:8-0'];
NUTOOL_CLOCK.g_register_map.CLKOCTL = ['CLK1HZEN:6', 'DIV1EN:5', 'CLKOEN:4', 'FREQSEL:3-0'];
NUTOOL_CLOCK.g_register_map.SYST_CTRL = ['CLKSRC:2', 'ENABLE:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CLKDIV0   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV1   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKSEL0   = '0x0000003F';
NUTOOL_CLOCK.g_register_map_default.CLKSEL1   = '0xB377770F';
NUTOOL_CLOCK.g_register_map_default.CLKSEL2   = '0x000000AB';
NUTOOL_CLOCK.g_register_map_default.CLKSEL3   = '0x00000003';
NUTOOL_CLOCK.g_register_map_default.PWRCTL    = '0x0000001F';
NUTOOL_CLOCK.g_register_map_default.AHBCLK    = '0x00008004';
NUTOOL_CLOCK.g_register_map_default.APBCLK0   = '0x00000001';
NUTOOL_CLOCK.g_register_map_default.APBCLK1   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.PLLCTL    = '0x0005C02E';
NUTOOL_CLOCK.g_register_map_default.CLKOCTL   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SYST_CTRL = '0x00000000';

NUTOOL_CLOCK.g_register_map_description = [];
NUTOOL_CLOCK.g_register_map_description.PWRCTL    = '0x40000200';
NUTOOL_CLOCK.g_register_map_description.AHBCLK    = '0x40000204';
NUTOOL_CLOCK.g_register_map_description.APBCLK0   = '0x40000208';
NUTOOL_CLOCK.g_register_map_description.APBCLK1   = '0x4000020C';
NUTOOL_CLOCK.g_register_map_description.CLKSEL0   = '0x40000210';
NUTOOL_CLOCK.g_register_map_description.CLKSEL1   = '0x40000214';
NUTOOL_CLOCK.g_register_map_description.CLKSEL2   = '0x40000218';
NUTOOL_CLOCK.g_register_map_description.CLKSEL3   = '0x4000021C';
NUTOOL_CLOCK.g_register_map_description.CLKDIV0   = '0x40000220';
NUTOOL_CLOCK.g_register_map_description.CLKDIV1   = '0x40000224';
NUTOOL_CLOCK.g_register_map_description.PLLCTL    = '0x40000240';
NUTOOL_CLOCK.g_register_map_description.CLKOCTL   = '0x40000260';
NUTOOL_CLOCK.g_register_map_description.SYST_CTRL = '0xE000E010';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.PCLK1SEL = ['HCLK:0', 'HCLK/2:1'];
NUTOOL_CLOCK.g_CLKSEL.PCLK0SEL = ['HCLK:0', 'HCLK/2:1'];
NUTOOL_CLOCK.g_CLKSEL.STCLKSEL = ['HXT:0', 'LXT:1', 'HXT/2:2', 'HCLK/2:3', 'HIRC/2:7'];
NUTOOL_CLOCK.g_CLKSEL.HCLKSEL = ['HXT:0', 'LXT:1', 'PLL:2', 'LIRC:3', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.CLKOSEL = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UARTSEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.TMR3SEL = ['HXT:0', 'LXT:1', 'PCLK1:2', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR2SEL = ['HXT:0', 'LXT:1', 'PCLK1:2', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR1SEL = ['HXT:0', 'LXT:1', 'PCLK0:2', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR0SEL = ['HXT:0', 'LXT:1', 'PCLK0:2', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.SPI2SEL = ['HXT:0', 'PLL:1', 'PCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI1SEL = ['HXT:0', 'PLL:1', 'PCLK1:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI0SEL = ['HXT:0', 'PLL:1', 'PCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.PWM1SEL = ['PLL:0', 'PCLK1:1'];
NUTOOL_CLOCK.g_CLKSEL.PWM0SEL = ['PLL:0', 'PCLK0:1'];
NUTOOL_CLOCK.g_CLKSEL.RTCSEL = ['LXT:0', 'LIRC:1'];
NUTOOL_CLOCK.g_CLKSEL['RTCSEL/32768'] = ['LXT/32768:0', 'LIRC/32768:1'];
NUTOOL_CLOCK.g_CLKSEL.SC0SEL = ['HXT:0', 'PLL:1', 'PCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WDTSEL = ['LXT:1', 'HCLK/2048:2', 'LIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WWDTSEL = ['HCLK/2048:2', 'LIRC:3'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ACMP01 = ['PCLK1', 'ACMP01CKEN', 'none'];
NUTOOL_CLOCK.g_Module.CAN0 = ['PCLK0', 'CAN0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.CRC = ['HCLK', 'CRCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.DAC = ['PCLK1', 'DACCKEN', 'none'];
NUTOOL_CLOCK.g_Module.EADC = ['PCLK1', 'EADCCKEN', 'EADCDIV'];
NUTOOL_CLOCK.g_Module.EBI = ['HCLK', 'EBICKEN', 'none'];
NUTOOL_CLOCK.g_Module.FMCIDLE = ['HIRC', 'FMCIDLE', 'none'];
NUTOOL_CLOCK.g_Module.I2C0 = ['PCLK0', 'I2C0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C1 = ['PCLK1', 'I2C1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ISP = ['HIRC', 'ISPCKEN', 'none'];
NUTOOL_CLOCK.g_Module.OTG = ['PLL', 'OTGCKEN', 'USBDIV'];
NUTOOL_CLOCK.g_Module.PDMA = ['HCLK', 'PDMACKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWM0 = ['PWM0SEL', 'PWM0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWM1 = ['PWM1SEL', 'PWM1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.SC0 = ['SC0SEL', 'SC0CKEN', 'SC0DIV'];
NUTOOL_CLOCK.g_Module.SPI0 = ['SPI0SEL', 'SPI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.SPI1 = ['SPI1SEL', 'SPI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.SPI2 = ['SPI2SEL', 'SPI2CKEN', 'none'];
//NUTOOL_CLOCK.g_Module.TK = ['HIRC/2', 'TKCKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['TMR0SEL', 'TMR0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR1 = ['TMR1SEL', 'TMR1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR2 = ['TMR2SEL', 'TMR2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR3 = ['TMR3SEL', 'TMR3CKEN', 'none'];
NUTOOL_CLOCK.g_Module.UART0 = ['UARTSEL', 'UART0CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.UART1 = ['UARTSEL', 'UART1CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.UART2 = ['UARTSEL', 'UART2CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.UART3 = ['UARTSEL', 'UART3CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.USBD = ['PLL', 'USBDCKEN', 'USBDIV'];
NUTOOL_CLOCK.g_Module.USBH = ['PLL', 'USBHCKEN', 'USBDIV'];
NUTOOL_CLOCK.g_Module.WDT = ['WDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.WWDT = ['WWDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.RTC = ['RTCSEL', 'RTCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO = ['CLKOSEL', 'CLKOCKEN/DIV1EN/CLKOEN/!CLK1HZEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_1Hz = ['RTCSEL/32768', 'CLK1HZEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_Divider = ['CLKOSEL', 'CLKOCKEN/!DIV1EN/CLKOEN/!CLK1HZEN', 'FREQSEL'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['STCLKSEL/SYST_CTRL[2]', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {
	"M451LG6AE": ["UART3", "CAN0", "OTG", "USBD", "USBH"],
	"M451LE6AE": ["UART3", "CAN0", "OTG", "USBD", "USBH"],
	"M451RG6AE": ["CAN0", "OTG", "USBD", "USBH"],
	"M451RE6AE": ["CAN0", "OTG", "USBD", "USBH"],
	"M451VG6AE": ["CAN0", "OTG", "USBD", "USBH"],
	"M451VE6AE": ["CAN0", "OTG", "USBD", "USBH"],
	"M451LD3AE": ["SPI2", "CAN0", "OTG", "USBD", "USBH"],
	"M451LC3AE": ["SPI2", "CAN0", "OTG", "USBD", "USBH"],
	"M451RD3AE": ["SPI2", "CAN0", "OTG", "USBD", "USBH"],
	"M451RC3AE": ["SPI2", "CAN0", "OTG", "USBD", "USBH"],

	"M451MLG6AE": ["UART3", "CAN0", "OTG", "USBD", "USBH", "RTC", "CLKO_1Hz"],
	"M451MLE6AE": ["UART3", "CAN0", "OTG", "USBD", "USBH", "RTC", "CLKO_1Hz"],
	"M451MLD3AE": ["SPI2", "CAN0", "OTG", "USBD", "USBH", "RTC", "CLKO_1Hz"],
	"M451MLC3AE": ["SPI2", "CAN0", "OTG", "USBD", "USBH", "RTC", "CLKO_1Hz"],
	"M451MSD3AE": ["SPI2", "CAN0", "OTG", "USBD", "USBH", "RTC", "CLKO_1Hz"],
	"M451MSC3AE": ["SPI2", "CAN0", "OTG", "USBD", "USBH", "RTC", "CLKO_1Hz"],

	"M452LG6AE": ["UART3", "CAN0"],
	"M452LE6AE": ["UART3", "CAN0"],
	"M452RG6AE": ["CAN0"],
	"M452RE6AE": ["CAN0"],
	"M452LD3AE": ["SPI2", "CAN0"],
	"M452LC3AE": ["SPI2", "CAN0"],
	"M452RD3AE": ["SPI2", "CAN0"],

	"M453LG6AE": ["UART3"],
	"M453LE6AE": ["UART3"],
	"M453LD3AE": ["SPI2"],
	"M453LC3AE": ["SPI2"],
	"M453RD3AE": ["SPI2"],
	"M453VD3AE": ["SPI2"]
};

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
NUTOOL_CLOCK.g_equivalentName.PLLCON = 'PLLCTL';

NUTOOL_CLOCK.g_BusNonExistent = [];
NUTOOL_CLOCK.g_BusFromPCLK1 = ['ACMP01', 'DAC', 'EADC', 'I2C1', 'PWM1', 'RTC', 'SPI1', 'UART1', 'UART3', 'OTG', 'TMR2', 'TMR3'];
NUTOOL_CLOCK.g_DIV_Module_Defines = ['USB:USB', 'OTG:USB', 'UART:UART'];
NUTOOL_CLOCK.g_CPUCLKLimit = 72 * 1000000;
NUTOOL_CLOCK.g_HXTRange = '4~20MHz';
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
