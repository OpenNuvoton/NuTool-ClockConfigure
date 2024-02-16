// chip content
NUTOOL_CLOCK.g_cfg_chips = [
	// M480MD
	{ name: "M481ZIDAE", pkg: "QFN33" },
	{ name: "M482ZIDAE", pkg: "QFN33" },
	{ name: "M481LIDAE", pkg: "LQFP48" },
	{ name: "M482LIDAE", pkg: "LQFP48" },
	{ name: "M485LIDAE", pkg: "LQFP48" },
	{ name: "M481SIDAE", pkg: "LQFP64" },
	{ name: "M482SIDAE", pkg: "LQFP64" },
	{ name: "M483SIDAE", pkg: "LQFP64" },
	//{ name: "M484SIDAE", pkg: "LQFP64" },
	//{ name: "M484SIDAE2U", pkg: "LQFP64" },
	{ name: "M485SIDAE", pkg: "LQFP64" },
	{ name: "M487SIDAE", pkg: "LQFP64" },
	{ name: "M482KIDAE", pkg: "LQFP128" },
	{ name: "M483KIDAE", pkg: "LQFP128" },
	//{ name: "M484KIDAE", pkg: "LQFP128" },
	{ name: "M485KIDAE", pkg: "LQFP128" },
	{ name: "M487KIDAE", pkg: "LQFP128" },
	{ name: "M487KMCAN", pkg: "LQFP128" },
	{ name: "M487JIDAE", pkg: "LQFP144" },
	// M480LD
	{ name: "M481ZGCAE", pkg: "QFN33" },
	{ name: "M482ZGCAE", pkg: "QFN33" },
	{ name: "M481ZE8AE", pkg: "QFN33" },
	{ name: "M482ZE8AE", pkg: "QFN33" },
	{ name: "M481LGCAE", pkg: "LQFP48" },
	{ name: "M482LGCAE", pkg: "LQFP48" },
	{ name: "M481LE8AE", pkg: "LQFP48" },
	{ name: "M482LE8AE", pkg: "LQFP48" },
	{ name: "M481SGCAE", pkg: "LQFP64" },
	{ name: "M482SGCAE", pkg: "LQFP64" },
	{ name: "M483SGCAE", pkg: "LQFP64" },
	{ name: "M481SE8AE", pkg: "LQFP64" },
	{ name: "M482SE8AE", pkg: "LQFP64" },
	{ name: "M483SE8AE", pkg: "LQFP64" },
	{ name: "M481SGCAE2A", pkg: "LQFP64" },
	{ name: "M483SGCAE2A", pkg: "LQFP64" },
	{ name: "M482KGCAE", pkg: "LQFP128" },
	{ name: "M483KGCAE", pkg: "LQFP128" },
	{ name: "M483KGCAE2A", pkg: "LQFP128" }
];

/*
The difference between M480MD and M480LD
M480LD added:
HIRC48
SEN
CCAP
UART6
UART7
EADC1
CAN2
TRNG
I2SDIV

M480LD removed:
EMAC
SDH1
OPA
SPIM
HSUSB
USCI0
USCI1
SC1
SC2
*/

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.PWRCTL = ['LIRCEN:3', 'HIRCEN:2', 'LXTEN:1', 'HXTEN:0', 'HIRC48EN:18'];
NUTOOL_CLOCK.g_register_map.AHBCLK = ['USBHCKEN:16', 'FMCIDLE:15', 'CRPTCKEN:12', 'SENCKEN:9', 'CCAPCKEN:8', 'CRCCKEN:7', 'SDH0CKEN:6', 'EBICKEN:3', 'ISPCKEN:2', 'PDMACKEN:1'];
NUTOOL_CLOCK.g_register_map.APBCLK0 = ['I2S0CKEN:29', 'EADCCKEN:28', 'USBDCKEN:27', 'OTGCKEN:26', 'CAN1CKEN:25', 'CAN0CKEN:24', 'UART7CKEN:23', 'UART6CKEN:22', 'UART5CKEN:21', 'UART4CKEN:20', 'UART3CKEN:19', 'UART2CKEN:18', 'UART1CKEN:17', 'UART0CKEN:16', 'SPI2CKEN:15', 'SPI1CKEN:14', 'SPI0CKEN:13', 'QSPI0CKEN:12', 'I2C2CKEN:10', 'I2C1CKEN:9', 'I2C0CKEN:8', 'ACMP01CKEN:7', 'CLKOCKEN:6', 'TMR3CKEN:5', 'TMR2CKEN:4', 'TMR1CKEN:3', 'TMR0CKEN:2', 'RTCCKEN:1', 'WDTCKEN:0'];
NUTOOL_CLOCK.g_register_map.APBCLK1 = ['EADC1CKEN:31', 'CAN2CKEN:28', 'ECAP1CKEN:27', 'ECAP0CKEN:26', 'TRNGCKEN:25', 'QEI1CKEN:23', 'QEI0CKEN:22', 'BPWM1CKEN:19', 'BPWM0CKEN:18', 'EPWM1CKEN:17', 'EPWM0CKEN:16', 'DACCKEN:12', 'QSPI1CKEN:4', 'SC0CKEN:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL0 = ['SDH0SEL:21-20', 'CCAPSEL:17-16', 'USBSEL:8', 'STCLKSEL:5-3', 'HCLKSEL:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL1 = ['WWDTSEL:31-30', 'CLKOSEL:29-28', 'UART1SEL:27-26', 'UART0SEL:25-24', 'TMR3SEL:22-20', 'TMR2SEL:18-16', 'TMR1SEL:14-12', 'TMR0SEL:10-8', 'WDTSEL:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL2 = ['SPI3SEL:13-12', 'SPI2SEL:11-10', 'BPWM1SEL:9', 'BPWM0SEL:8', 'SPI1SEL:7-6', 'SPI0SEL:5-4', 'QSPI0SEL:3-2', 'EPWM1SEL:1', 'EPWM0SEL:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL3 = ['UART5SEL:31-30', 'UART4SEL:29-28', 'UART3SEL:27-26', 'UART2SEL:25-24', 'UART7SEL:23-22', 'UART6SEL:21-20', 'I2S0SEL:17-16', 'QSPI1SEL:13-12', 'RTCSEL:8', 'RTCSEL/32768:8', 'SC0SEL:1-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV0 = ['SDH0DIV:31-24', 'EADCDIV:23-16', 'UART1DIV:15-12', 'UART0DIV:11-8', 'USBDIV:7-4', 'HCLKDIV:3-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV1 = ['SC0DIV:7-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV2 = ['EADC1DIV:31-24', 'I2SDIV:3-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV3 = ['VSENSEDIV:15-8', 'CCAPDIV:7-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV4 = ['UART7DIV:23-20', 'UART6DIV:19-16', 'UART5DIV:15-12', 'UART4DIV:11-8', 'UART3DIV:7-4', 'UART2DIV:3-0'];
NUTOOL_CLOCK.g_register_map.PCLKDIV = ['APB1DIV:6-4', 'APB0DIV:2-0'];
NUTOOL_CLOCK.g_register_map.PLLCTL = ['PLL_SRC:19', 'OE:18', 'BP:17', 'PD:16', 'OUTDIV:15-14', 'INDIV:13-9', 'FBDIV:8-0'];
NUTOOL_CLOCK.g_register_map.CLKOCTL = ['CLK1HZEN:6', 'DIV1EN:5', 'CLKOEN:4', 'FREQSEL:3-0'];
NUTOOL_CLOCK.g_register_map.SYST_CTRL = ['CLKSRC:2', 'ENABLE:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CLKDIV0   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV1   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV2   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV3   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV4   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.PCLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKSEL0   = '0x00F3013F';
NUTOOL_CLOCK.g_register_map_default.CLKSEL1   = '0xBF777703';
NUTOOL_CLOCK.g_register_map_default.CLKSEL2   = '0x000003AB';
NUTOOL_CLOCK.g_register_map_default.CLKSEL3   = '0xFF00003F';
NUTOOL_CLOCK.g_register_map_default.PWRCTL    = '0x0004001F';
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
NUTOOL_CLOCK.g_register_map_description.CLKDIV2   = '0x40000228';
NUTOOL_CLOCK.g_register_map_description.CLKDIV3   = '0x4000022C';
NUTOOL_CLOCK.g_register_map_description.CLKDIV4   = '0x40000230';
NUTOOL_CLOCK.g_register_map_description.PCLKDIV   = '0x40000234';
NUTOOL_CLOCK.g_register_map_description.PLLCTL    = '0x40000240';
NUTOOL_CLOCK.g_register_map_description.CLKOCTL   = '0x40000260';
NUTOOL_CLOCK.g_register_map_description.SYST_CTRL = '0xE000E010';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.APB0DIV = ['HCLK:0', 'HCLK/2:1', 'HCLK/4:2', 'HCLK/8:3', 'HCLK/16:4'];
NUTOOL_CLOCK.g_CLKSEL.APB1DIV = ['HCLK:0', 'HCLK/2:1', 'HCLK/4:2', 'HCLK/8:3', 'HCLK/16:4'];
NUTOOL_CLOCK.g_CLKSEL.BPWM0SEL = ['PLL:0', 'PCLK0:1'];
NUTOOL_CLOCK.g_CLKSEL.BPWM1SEL = ['PLL:0', 'PCLK1:1'];
NUTOOL_CLOCK.g_CLKSEL.CCAPSEL = ['HXT:0', 'PLL:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.CLKOSEL = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.EPWM0SEL = ['PLL:0', 'PCLK0:1'];
NUTOOL_CLOCK.g_CLKSEL.EPWM1SEL = ['PLL:0', 'PCLK1:1'];
NUTOOL_CLOCK.g_CLKSEL.HCLKSEL = ['HXT:0', 'LXT:1', 'PLL:2', 'LIRC:3', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.I2S0SEL = ['HXT:0', 'PLL:1', 'PCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.QSPI0SEL = ['HXT:0', 'PLL:1', 'PCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.QSPI1SEL = ['HXT:0', 'PLL:1', 'PCLK1:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.RTCSEL = ['LXT:0', 'LIRC:1'];
NUTOOL_CLOCK.g_CLKSEL['RTCSEL/32768'] = ['LXT/32768:0', 'LIRC/32768:1'];
NUTOOL_CLOCK.g_CLKSEL.SC0SEL = ['HXT:0', 'PLL:1', 'PCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SDH0SEL = ['HXT:0', 'PLL:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI0SEL = ['HXT:0', 'PLL:1', 'PCLK1:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI1SEL = ['HXT:0', 'PLL:1', 'PCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI2SEL = ['HXT:0', 'PLL:1', 'PCLK1:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.STCLKSEL = ['HXT:0', 'LXT:1', 'HXT/2:2', 'HCLK/2:3', 'HIRC/2:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR0SEL = ['HXT:0', 'LXT:1', 'PCLK0:2', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR1SEL = ['HXT:0', 'LXT:1', 'PCLK0:2', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR2SEL = ['HXT:0', 'LXT:1', 'PCLK1:2', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR3SEL = ['HXT:0', 'LXT:1', 'PCLK1:2', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.UART0SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART1SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART2SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART3SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART4SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART5SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART6SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART7SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.USBSEL = ['HIRC48:0', 'PLL:1'];
NUTOOL_CLOCK.g_CLKSEL.WDTSEL = ['LXT:1', 'HCLK/2048:2', 'LIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WWDTSEL = ['HCLK/2048:2', 'LIRC:3'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ACMP01 = ['PCLK1', 'ACMP01CKEN', 'none'];
NUTOOL_CLOCK.g_Module.BPWM0 = ['BPWM0SEL', 'BPWM0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.BPWM1 = ['BPWM1SEL', 'BPWM1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.CAN0 = ['PCLK0', 'CAN0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.CAN1 = ['PCLK1', 'CAN1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.CAN2 = ['PCLK0', 'CAN2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.CCAP = ['CCAPSEL', 'CCAPCKEN', 'CCAPDIV'];
NUTOOL_CLOCK.g_Module.CRC = ['HCLK', 'CRCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.CRPT = ['HCLK', 'CRPTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.DAC = ['PCLK1', 'DACCKEN', 'none'];
NUTOOL_CLOCK.g_Module.EADC = ['PCLK1', 'EADCCKEN', 'EADCDIV'];
NUTOOL_CLOCK.g_Module.EADC1 = ['PCLK1', 'EADC1CKEN', 'EADC1DIV'];
NUTOOL_CLOCK.g_Module.EBI = ['HCLK', 'EBICKEN', 'none'];
NUTOOL_CLOCK.g_Module.ECAP0 = ['PCLK0', 'ECAP0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ECAP1 = ['PCLK1', 'ECAP1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EPWM0 = ['EPWM0SEL', 'EPWM0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EPWM1 = ['EPWM1SEL', 'EPWM1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.FMCIDLE = ['HIRC', 'FMCIDLE', 'none'];
NUTOOL_CLOCK.g_Module.I2C0 = ['PCLK0', 'I2C0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C1 = ['PCLK1', 'I2C1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C2 = ['PCLK0', 'I2C2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2S0 = ['I2S0SEL', 'I2S0CKEN', 'I2SDIV'];
NUTOOL_CLOCK.g_Module.ISP = ['HIRC', 'ISPCKEN', 'none'];
NUTOOL_CLOCK.g_Module.OTG = ['USBSEL', 'OTGCKEN', 'USBDIV'];
NUTOOL_CLOCK.g_Module.PDMA = ['HCLK', 'PDMACKEN', 'none'];
NUTOOL_CLOCK.g_Module.QEI0 = ['PCLK0', 'QEI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.QEI1 = ['PCLK1', 'QEI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.QSPI0 = ['QSPI0SEL', 'QSPI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.QSPI1 = ['QSPI1SEL', 'QSPI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.RTC = ['RTCSEL', 'RTCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.SC0 = ['SC0SEL', 'SC0CKEN', 'SC0DIV'];
NUTOOL_CLOCK.g_Module.SDH0 = ['SDH0SEL', 'SDH0CKEN', 'SDH0DIV'];
NUTOOL_CLOCK.g_Module.SEN = ['CCAPSEL', 'SENCKEN', 'VSENSEDIV'];
NUTOOL_CLOCK.g_Module.SPI0 = ['SPI0SEL', 'SPI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.SPI1 = ['SPI1SEL', 'SPI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.SPI2 = ['SPI2SEL', 'SPI2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['TMR0SEL', 'TMR0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR1 = ['TMR1SEL', 'TMR1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR2 = ['TMR2SEL', 'TMR2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR3 = ['TMR3SEL', 'TMR3CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TRNG = ['PCLK1', 'TRNGCKEN', 'none'];
NUTOOL_CLOCK.g_Module.UART0 = ['UART0SEL', 'UART0CKEN', 'UART0DIV'];
NUTOOL_CLOCK.g_Module.UART1 = ['UART1SEL', 'UART1CKEN', 'UART1DIV'];
NUTOOL_CLOCK.g_Module.UART2 = ['UART2SEL', 'UART2CKEN', 'UART2DIV'];
NUTOOL_CLOCK.g_Module.UART3 = ['UART3SEL', 'UART3CKEN', 'UART3DIV'];
NUTOOL_CLOCK.g_Module.UART4 = ['UART4SEL', 'UART4CKEN', 'UART4DIV'];
NUTOOL_CLOCK.g_Module.UART5 = ['UART5SEL', 'UART5CKEN', 'UART5DIV'];
NUTOOL_CLOCK.g_Module.UART6 = ['UART6SEL', 'UART6CKEN', 'UART5DIV'];
NUTOOL_CLOCK.g_Module.UART7 = ['UART7SEL', 'UART7CKEN', 'UART7DIV'];
NUTOOL_CLOCK.g_Module.USBD = ['USBSEL', 'USBDCKEN', 'USBDIV'];
NUTOOL_CLOCK.g_Module.USBH = ['USBSEL', 'USBHCKEN', 'USBDIV'];
NUTOOL_CLOCK.g_Module.WDT = ['WDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.WWDT = ['WWDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO = ['CLKOSEL', 'CLKOCKEN/DIV1EN/CLKOEN/!CLK1HZEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_1Hz = ['RTCSEL/32768', 'CLK1HZEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_Divider = ['CLKOSEL', 'CLKOCKEN/!DIV1EN/CLKOEN/!CLK1HZEN', 'FREQSEL'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['STCLKSEL/SYST_CTRL[2]', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {
	"M481ZE8AE": ["EADC1", "SPI2", "CAN0", "CAN1", "CAN2", "QEI0", "ECAP0", "ECAP1", "OTG", "EBI", "CCAP", "SEN", "USBD", "USBH"],
	"M481ZGCAE": ["EADC1", "SPI2", "CAN0", "CAN1", "CAN2", "QEI0", "ECAP0", "ECAP1", "OTG", "EBI", "CCAP", "SEN", "USBD", "USBH"],
	"M481LE8AE": ["EADC1", "CAN0", "CAN1", "CAN2", "ECAP1", "OTG", "CCAP", "SEN", "USBD", "USBH"],
	"M481LGCAE": ["EADC1", "CAN0", "CAN1", "CAN2", "ECAP1", "OTG", "CCAP", "SEN", "USBD", "USBH"],
	"M481SE8AE": ["EADC1", "CAN0", "CAN1", "CAN2", "ECAP1", "OTG", "USBD", "USBH"],
	"M481SGCAE": ["EADC1", "CAN0", "CAN1", "CAN2", "ECAP1", "OTG", "USBD", "USBH"],
	"M481SGCAE2A": ["CAN0", "CAN1", "CAN2", "ECAP1", "OTG", "USBD", "USBH"],

	"M482ZE8AE": ["EADC1", "SPI2", "CAN0", "CAN1", "CAN2", "QEI0", "ECAP0", "ECAP1", "EBI", "CCAP", "SEN"],
	"M482ZGCAE": ["EADC1", "SPI2", "CAN0", "CAN1", "CAN2", "QEI0", "ECAP0", "ECAP1", "EBI", "CCAP", "SEN"],
	"M482LE8AE": ["EADC1", "CAN0", "CAN1", "CAN2", "ECAP1", "CCAP", "SEN"],
	"M482LGCAE": ["EADC1", "CAN0", "CAN1", "CAN2", "ECAP1", "CCAP", "SEN"],
	"M482SE8AE": ["EADC1", "CAN0", "CAN1", "CAN2", "ECAP1"],
	"M482SGCAE": ["EADC1", "CAN0", "CAN1", "CAN2", "ECAP1"],
	"M482KGCAE": ["EADC1", "CAN0", "CAN1", "CAN2"],

	"M483SE8AE": ["EADC1", "ECAP1"],
	"M483SGCAE": ["EADC1", "ECAP1"],
	"M483KGCAE": ["EADC1"],
	"M483SGCAE2A": ["ECAP1"]
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
NUTOOL_CLOCK.g_equivalentName.PCLK0SEL = 'APB0DIV';
NUTOOL_CLOCK.g_equivalentName.PCLK1SEL = 'APB1DIV';

NUTOOL_CLOCK.g_BusNonExistent = [];
NUTOOL_CLOCK.g_BusFromPCLK1 = ['ACMP01', 'EADC', 'EADC1', 'BPWM1', 'CAN1', 'DAC', 'ECAP1', 'I2C1', 'OTG', 'EPWM1', 'QEI1', 'RTC', 'QSPI1', 'SPI0', 'SPI2', 'TMR2', 'TMR3', 'TRNG', 'UART1', 'UART3', 'UART5', 'UART7'];
NUTOOL_CLOCK.g_DIV_Module_Defines = ['USBD:USB', 'USBH:USB', 'OTG:USB', 'SEN:VSENSE'];
NUTOOL_CLOCK.g_CPUCLKLimit = 192 * 1000000;
NUTOOL_CLOCK.g_HXTRange = '4~24MHz';
NUTOOL_CLOCK.g_HXTfrequency = 12 * 1000000;
NUTOOL_CLOCK.g_HIRCfrequencyArray = [];
NUTOOL_CLOCK.g_HIRCfrequency = 12 * 1000000;
NUTOOL_CLOCK.g_HIRC2frequencyArray = [];
NUTOOL_CLOCK.g_HIRC2frequency = 0;
NUTOOL_CLOCK.g_HIRC48frequency = 48 * 1000000;
NUTOOL_CLOCK.g_LIRCfrequency = 10 * 1000;
NUTOOL_CLOCK.g_MIRCfrequency = 0;
NUTOOL_CLOCK.g_MIRC1P2Mfrequency = 0;
NUTOOL_CLOCK.g_RTC32kfrequency = 0;
NUTOOL_CLOCK.g_PLL480Mfrequency = 0;
NUTOOL_CLOCK.g_HSUSBOTGPHYfrequency = 0;
