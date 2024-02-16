// chip content
NUTOOL_CLOCK.g_cfg_chips = [
	{ name: "NUC472HI8AE", pkg: "LQFP176" },
	{ name: "NUC472HG8AE", pkg: "LQFP176" },

	{ name: "NUC472JI8AE", pkg: "LQFP144" },
	{ name: "NUC472JG8AE", pkg: "LQFP144" },

	{ name: "NUC472KI8AE", pkg: "LQFP128" },
	{ name: "NUC472KG8AE", pkg: "LQFP128" },

	{ name: "NUC472VI8AE", pkg: "LQFP100" },
	{ name: "NUC472VG8AE", pkg: "LQFP100" },

	{ name: "NUC442JI8AE", pkg: "LQFP144" },
	{ name: "NUC442JG8AE", pkg: "LQFP144" },

	{ name: "NUC442KI8AE", pkg: "LQFP128" },
	{ name: "NUC442KG8AE", pkg: "LQFP128" },

	{ name: "NUC442VI8AE", pkg: "LQFP100" },
	{ name: "NUC442VG8AE", pkg: "LQFP100" },

	{ name: "NUC442RI8AE", pkg: "LQFP64" },
	{ name: "NUC442RG8AE", pkg: "LQFP64" }
];

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.PWRCTL = ['LIRCEN:3', 'HIRCEN:2', 'LXTEN:1', 'HXTEN:0'];
NUTOOL_CLOCK.g_register_map.AHBCLK = ['CRPTCKEN:12', 'USBDCKEN:10', 'SENCKEN:9', 'CAPCKEN:8', 'CRCCKEN:7', 'SDHCKEN:6', 'EMACCKEN:5', 'USBHCKEN:4', 'EBICKEN:3', 'ISPCKEN:2', 'PDMACKEN:1'];
NUTOOL_CLOCK.g_register_map.APBCLK0 = ['PS2CKEN:31', 'I2S1CKEN:30', 'I2S0CKEN:29', 'ADCCKEN:28', 'OTGCKEN:26', 'CAN1CKEN:25', 'CAN0CKEN:24', 'UART5CKEN:21', 'UART4CKEN:20', 'UART3CKEN:19', 'UART2CKEN:18', 'UART1CKEN:17', 'UART0CKEN:16', 'SPI3CKEN:15', 'SPI2CKEN:14', 'SPI1CKEN:13', 'SPI0CKEN:12', 'I2C3CKEN:11', 'I2C2CKEN:10', 'I2C1CKEN:9', 'I2C0CKEN:8', 'ACMPCKEN:7', 'CLKOCKEN:6', 'TMR3CKEN:5', 'TMR2CKEN:4', 'TMR1CKEN:3', 'TMR0CKEN:2', 'RTCCKEN:1', 'WDTCKEN:0'];
NUTOOL_CLOCK.g_register_map.APBCLK1 = ['EADCCKEN:31', 'OPACKEN:30', 'EPWM1CKEN:29', 'EPWM0CKEN:28', 'ECAP1CKEN:27', 'ECAP0CKEN:26', 'QEI1CKEN:23', 'QEI0CKEN:22', 'PWM1CH45CKEN:21', 'PWM1CH23CKEN:20', 'PWM1CH01CKEN:19', 'PWM0CH45CKEN:18', 'PWM0CH23CKEN:17', 'PWM0CH01CKEN:16', 'I2C4CKEN:8', 'SC5CKEN:5', 'SC4CKEN:4', 'SC3CKEN:3', 'SC2CKEN:2', 'SC1CKEN:1', 'SC0CKEN:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL0 = ['SDHSEL:21-20', 'ICAPSEL:17-16', 'USBHSEL:8', 'PCLKSEL:6', 'STCLKSEL:5-3', 'HCLKSEL:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL1 = ['WWDTSEL:31-30', 'CLKOSEL:29-28', 'UARTSEL:25-24', 'TMR3SEL:22-20', 'TMR2SEL:18-16', 'TMR1SEL:14-12', 'TMR0SEL:10-8', 'SPI3SEL:7', 'SPI2SEL:6', 'SPI1SEL:5', 'SPI0SEL:4', 'EADCSEL:3-2', 'WDTSEL:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL2 = ['PWM1CH45SEL:22-20', 'PWM1CH23SEL:18-16', 'PWM1CH01SEL:14-12', 'PWM0CH45SEL:10-8', 'PWM0CH23SEL:6-4', 'PWM0CH01SEL:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL3 = ['I2S1SEL:19-18', 'I2S0SEL:17-16', 'SC5SEL:11-10', 'SC4SEL:9-8', 'SC3SEL:7-6', 'SC2SEL:5-4', 'SC1SEL:3-2', 'SC0SEL:1-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV0 = ['SDHDIV:31-24', 'ADCDIV:23-16', 'UARTDIV:11-8', 'USBHDIV:7-4', 'HCLKDIV:3-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV1 = ['SC3DIV:31-24', 'SC2DIV:23-16', 'SC1DIV:15-8', 'SC0DIV:7-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV2 = ['SC5DIV:15-8', 'SC4DIV:7-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV3 = ['EMACDIV:23-16', 'VSENSEDIV:15-8', 'CAPDIV:7-0'];
NUTOOL_CLOCK.g_register_map.PLLCTL = ['PLLREMAP:20', 'PLL_SRC:19', 'OE:18', 'BP:17', 'PD:16', 'OUTDV:15-14', 'INDIV:13-9', 'FBDIV:8-0'];
NUTOOL_CLOCK.g_register_map.PLL2CTL = ['PLL2CKEN:8', 'PLL2DIV:7-0'];
NUTOOL_CLOCK.g_register_map.CLKOCTL = ['DIV1EN:5', 'CLKOEN:4', 'FSEL:3-0'];
NUTOOL_CLOCK.g_register_map.SYST_CSR = ['CLKSRC:2', 'ENABLE:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CLKDIV0  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV1  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV2  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV3  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKSEL0  = '0x0033053F';
NUTOOL_CLOCK.g_register_map_default.CLKSEL1  = '0xB37777FF';
NUTOOL_CLOCK.g_register_map_default.CLKSEL2  = '0x00333333'; // Note: In TRM, the defulat value is 0x00777777.
NUTOOL_CLOCK.g_register_map_default.CLKSEL3  = '0x000F0FFF';
NUTOOL_CLOCK.g_register_map_default.PWRCTL   = '0x0000001F';
NUTOOL_CLOCK.g_register_map_default.AHBCLK   = '0x00000005';
NUTOOL_CLOCK.g_register_map_default.APBCLK0  = '0x00000001';
NUTOOL_CLOCK.g_register_map_default.APBCLK1  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.PLLCTL   = '0x00058228';
NUTOOL_CLOCK.g_register_map_default.PLL2CTL  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKOCTL  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SYST_CSR = '0x00000000';

NUTOOL_CLOCK.g_register_map_description = [];
NUTOOL_CLOCK.g_register_map_description.PWRCTL   = "0x40000200";
NUTOOL_CLOCK.g_register_map_description.AHBCLK   = "0x40000204";
NUTOOL_CLOCK.g_register_map_description.APBCLK0  = "0x40000208";
NUTOOL_CLOCK.g_register_map_description.APBCLK1  = "0x4000020C";
NUTOOL_CLOCK.g_register_map_description.CLKSEL0  = "0x40000210";
NUTOOL_CLOCK.g_register_map_description.CLKSEL1  = "0x40000214";
NUTOOL_CLOCK.g_register_map_description.CLKSEL2  = "0x40000218";
NUTOOL_CLOCK.g_register_map_description.CLKSEL3  = "0x4000021C";
NUTOOL_CLOCK.g_register_map_description.CLKDIV0  = "0x40000220";
NUTOOL_CLOCK.g_register_map_description.CLKDIV1  = "0x40000224";
NUTOOL_CLOCK.g_register_map_description.CLKDIV2  = "0x40000228";
NUTOOL_CLOCK.g_register_map_description.CLKDIV3  = "0x4000022C";
NUTOOL_CLOCK.g_register_map_description.PLLCTL   = "0x40000240";
NUTOOL_CLOCK.g_register_map_description.PLL2CTL  = "0x40000244";
NUTOOL_CLOCK.g_register_map_description.CLKOCTL  = "0x40000260";
NUTOOL_CLOCK.g_register_map_description.SYST_CSR = "0xE000E010";

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.CLKOSEL = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.EADCSEL = ['HXT:0', 'PLL:1', 'PCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.HCLKSEL = ['HXT:0', 'LXT:1', 'PLL:2', 'LIRC:3', 'PLL2:4', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.I2S0SEL = ['HXT:0', 'PLL:1', 'PCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.I2S1SEL = ['HXT:0', 'PLL:1', 'PCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.ICAPSEL = ['HXT:0', 'PLL:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.PCLKSEL = ['HCLK:0', 'HCLK/2:1'];
NUTOOL_CLOCK.g_CLKSEL.PWM0CH23SEL = ['HXT:0', 'LXT:1', 'PCLK:2', 'HIRC:3', 'LIRC:4'];
NUTOOL_CLOCK.g_CLKSEL.PWM0CH01SEL = ['HXT:0', 'LXT:1', 'PCLK:2', 'HIRC:3', 'LIRC:4'];
NUTOOL_CLOCK.g_CLKSEL.PWM0CH45SEL = ['HXT:0', 'LXT:1', 'PCLK:2', 'HIRC:3', 'LIRC:4'];
NUTOOL_CLOCK.g_CLKSEL.PWM1CH01SEL = ['HXT:0', 'LXT:1', 'PCLK:2', 'HIRC:3', 'LIRC:4'];
NUTOOL_CLOCK.g_CLKSEL.PWM1CH23SEL = ['HXT:0', 'LXT:1', 'PCLK:2', 'HIRC:3', 'LIRC:4'];
NUTOOL_CLOCK.g_CLKSEL.PWM1CH45SEL = ['HXT:0', 'LXT:1', 'PCLK:2', 'HIRC:3', 'LIRC:4'];
NUTOOL_CLOCK.g_CLKSEL.SC0SEL = ['HXT:0', 'PLL:1', 'PCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SC1SEL = ['HXT:0', 'PLL:1', 'PCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SC2SEL = ['HXT:0', 'PLL:1', 'PCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SC3SEL = ['HXT:0', 'PLL:1', 'PCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SC4SEL = ['HXT:0', 'PLL:1', 'PCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SC5SEL = ['HXT:0', 'PLL:1', 'PCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SDHSEL = ['HXT:0', 'PLL:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI0SEL = ['PLL:0', 'PCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.SPI1SEL = ['PLL:0', 'PCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.SPI2SEL = ['PLL:0', 'PCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.SPI3SEL = ['PLL:0', 'PCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.STCLKSEL = ['HXT:0', 'LXT:1', 'HXT/2:2', 'HCLK/2:3', 'HIRC/2:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR0SEL = ['HXT:0', 'LXT:1', 'PCLK:2', 'LIRC:5', 'HIRC:7']; // EXTERNAL:3
NUTOOL_CLOCK.g_CLKSEL.TMR1SEL = ['HXT:0', 'LXT:1', 'PCLK:2', 'LIRC:5', 'HIRC:7']; // EXTERNAL:3
NUTOOL_CLOCK.g_CLKSEL.TMR2SEL = ['HXT:0', 'LXT:1', 'PCLK:2', 'LIRC:5', 'HIRC:7']; // EXTERNAL:3
NUTOOL_CLOCK.g_CLKSEL.TMR3SEL = ['HXT:0', 'LXT:1', 'PCLK:2', 'LIRC:5', 'HIRC:7']; // EXTERNAL:3
NUTOOL_CLOCK.g_CLKSEL.UARTSEL = ['HXT:0', 'PLL:1', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.USBHSEL = ['PLL2:0', 'PLL:1'];
NUTOOL_CLOCK.g_CLKSEL.WDTSEL = ['HXT:0', 'LXT:1', 'HCLK/2048:2', 'LIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WWDTSEL = ['HCLK/2048:2', 'LIRC:3'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ACMP = ['PCLK', 'ACMPCKEN', 'none'];
NUTOOL_CLOCK.g_Module.ADC = ['EADCSEL', 'ADCCKEN', 'ADCDIV'];
NUTOOL_CLOCK.g_Module.CAN0 = ['PCLK', 'CAN0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.CAN1 = ['PCLK', 'CAN1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.CAP = ['ICAPSEL', 'CAPCKEN', 'CAPDIV'];
NUTOOL_CLOCK.g_Module.CRC = ['HCLK', 'CRCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.CRPT = ['HCLK', 'CRPTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.EADC = ['EADCSEL', 'EADCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.EBI = ['HCLK', 'EBICKEN', 'none'];
NUTOOL_CLOCK.g_Module.ECAP0 = ['PCLK', 'ECAP0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ECAP1 = ['PCLK', 'ECAP1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EMAC = ['HCLK', 'EMACCKEN', 'EMACDIV'];
NUTOOL_CLOCK.g_Module.EPWM0 = ['PCLK', 'EPWM0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EPWM1 = ['PCLK', 'EPWM1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C0 = ['PCLK', 'I2C0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C1 = ['PCLK', 'I2C1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C2 = ['PCLK', 'I2C2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C3 = ['PCLK', 'I2C3CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C4 = ['PCLK', 'I2C4CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2S0 = ['I2S0SEL', 'I2S0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2S1 = ['I2S1SEL', 'I2S1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ISP = ['HIRC', 'ISPCKEN', 'none'];
NUTOOL_CLOCK.g_Module.OPA = ['PCLK', 'OPACKEN', 'none'];
NUTOOL_CLOCK.g_Module.OTG = ['PCLK', 'OTGCKEN', 'none'];
NUTOOL_CLOCK.g_Module.PDMA = ['HCLK', 'PDMACKEN', 'none'];
NUTOOL_CLOCK.g_Module.PS2 = ['HIRC', 'PS2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWM0CH01 = ['PWM0CH01SEL', 'PWM0CH01CKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWM0CH23 = ['PWM0CH23SEL', 'PWM0CH23CKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWM0CH45 = ['PWM0CH45SEL', 'PWM0CH45CKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWM1CH01 = ['PWM1CH01SEL', 'PWM1CH01CKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWM1CH23 = ['PWM1CH23SEL', 'PWM1CH23CKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWM1CH45 = ['PWM1CH45SEL', 'PWM1CH45CKEN', 'none'];
NUTOOL_CLOCK.g_Module.QEI0 = ['PCLK', 'QEI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.QEI1 = ['PCLK', 'QEI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.RTC = ['LIRCorLXT', 'RTCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.SC0 = ['SC0SEL', 'SC0CKEN', 'SC0DIV'];
NUTOOL_CLOCK.g_Module.SC1 = ['SC1SEL', 'SC1CKEN', 'SC1DIV'];
NUTOOL_CLOCK.g_Module.SC2 = ['SC2SEL', 'SC2CKEN', 'SC2DIV'];
NUTOOL_CLOCK.g_Module.SC3 = ['SC3SEL', 'SC3CKEN', 'SC3DIV'];
NUTOOL_CLOCK.g_Module.SC4 = ['SC4SEL', 'SC4CKEN', 'SC4DIV'];
NUTOOL_CLOCK.g_Module.SC5 = ['SC5SEL', 'SC5CKEN', 'SC5DIV'];
NUTOOL_CLOCK.g_Module.SDH = ['SDHSEL', 'SDHCKEN', 'SDHDIV'];
NUTOOL_CLOCK.g_Module.SEN = ['ICAPSEL', 'SENCKEN', 'VSENSEDIV'];
NUTOOL_CLOCK.g_Module.SPI0 = ['SPI0SEL', 'SPI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.SPI1 = ['SPI1SEL', 'SPI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.SPI2 = ['SPI2SEL', 'SPI2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.SPI3 = ['SPI3SEL', 'SPI3CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['TMR0SEL', 'TMR0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR1 = ['TMR1SEL', 'TMR1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR2 = ['TMR2SEL', 'TMR2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR3 = ['TMR3SEL', 'TMR3CKEN', 'none'];
NUTOOL_CLOCK.g_Module.UART0 = ['UARTSEL', 'UART0CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.UART1 = ['UARTSEL', 'UART1CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.UART2 = ['UARTSEL', 'UART2CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.UART3 = ['UARTSEL', 'UART3CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.UART4 = ['UARTSEL', 'UART4CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.UART5 = ['UARTSEL', 'UART5CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.USBD = ['PLL480M', 'USBDCKEN', 'none'];
NUTOOL_CLOCK.g_Module.USBH = ['USBHSEL', 'USBHCKEN', 'USBHDIV'];
NUTOOL_CLOCK.g_Module.WDT = ['WDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.WWDT = ['WWDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO = ['CLKOSEL', 'CLKOCKEN/DIV1EN/CLKOEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_Divider = ['CLKOSEL', 'CLKOCKEN/!DIV1EN/CLKOEN', 'FSEL'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['STCLKSEL/SYST_CSR[2]', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {
	"NUC442VI8AE": ["OPA"],
	"NUC442VG8AE": ["OPA"],
	"NUC442RI8AE": ["UART2", "UART5", "SPI1", "I2C0", "I2C2", "I2C3", "SC2", "SC3", "SC4", "I2S0", "EPWM1", "OPA"],
	"NUC442RG8AE": ["UART2", "UART5", "SPI1", "I2C0", "I2C2", "I2C3", "SC2", "SC3", "SC4", "I2S0", "EPWM1", "OPA"]
};

NUTOOL_CLOCK.g_equivalentName = [];
NUTOOL_CLOCK.g_equivalentName._S = 'SEL';
NUTOOL_CLOCK.g_equivalentName.OSC10K_EN = 'LIRCEN';
NUTOOL_CLOCK.g_equivalentName.OSC22M_EN = 'HIRCEN';
NUTOOL_CLOCK.g_equivalentName.XTL32K_EN = 'LXTEN';
NUTOOL_CLOCK.g_equivalentName.XTL12M_EN = 'HXTEN';
NUTOOL_CLOCK.g_equivalentName.WDT_EN = 'WDTCKEN';
NUTOOL_CLOCK.g_equivalentName.HCLK_S = 'HCLKSEL';
NUTOOL_CLOCK.g_equivalentName.PCLK_S = 'PCLKSEL';
NUTOOL_CLOCK.g_equivalentName.STCLK_S = 'STCLKSEL';
NUTOOL_CLOCK.g_equivalentName['STCLK_S/SYST_CSR[2]'] = 'STCLKSEL/SYST_CSR[2]';
NUTOOL_CLOCK.g_equivalentName.HCLK_N = 'HCLKDIV';
NUTOOL_CLOCK.g_equivalentName.PWRCON = 'PWRCTL';
NUTOOL_CLOCK.g_equivalentName.PLLCON = 'PLLCTL';

NUTOOL_CLOCK.g_BusNonExistent = [];
NUTOOL_CLOCK.g_BusFromPCLK1 = [];
NUTOOL_CLOCK.g_DIV_Module_Defines = ['USB:USB', 'UART:UART', 'SEN:VSENSOR'];
NUTOOL_CLOCK.g_CPUCLKLimit = 84 * 1000000;
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
NUTOOL_CLOCK.g_PLL480Mfrequency = 480 * 1000000;
NUTOOL_CLOCK.g_HSUSBOTGPHYfrequency = 0;