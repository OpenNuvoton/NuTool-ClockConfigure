// chip content
NUTOOL_CLOCK.g_cfg_chips = [
	//NUC505
	{ name: "NUC505YO13Y", pkg: "QFN88" },
	//{ name: "NUC505DR13Y", pkg: "LQFP64" },
	{ name: "NUC505DS13Y", pkg: "LQFP64" },
	{ name: "NUC505DSA", pkg: "LQFP64" },
	{ name: "NUC505DL13Y", pkg: "LQFP48" },
	{ name: "NUC505DLA", pkg: "LQFP48" },
	{ name: "NUC505YLA2Y", pkg: "QFN48" },
	{ name: "NUC505YLA", pkg: "QFN48" }
];

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.PWRCTL = ['HXTEN:0'];
NUTOOL_CLOCK.g_register_map.AHBCLK = ['USBHCKEN:9', 'USBDCKEN:6', 'SDHCKEN:5', 'SPIMCKEN:3', 'ROMCKEN:2', 'SRAM23CKEN:1', 'SRAM01CKEN:0'];
NUTOOL_CLOCK.g_register_map.APBCLK = ['ADCCKEN:15', 'I2SCKEN:14', 'UART2CKEN:13', 'UART1CKEN:12', 'UART0CKEN:11', 'SPI1CKEN:10', 'SPI0CKEN:9', 'PWMCKEN:8', 'RTCCKEN:7', 'I2C1CKEN:6', 'I2C0CKEN:5', 'WDTCKEN:4', 'TMR3CKEN:3', 'TMR2CKEN:2', 'TMR1CKEN:1', 'TMR0CKEN:0'];
NUTOOL_CLOCK.g_register_map.CLKDIV0 = ['USBHSEL:31', 'USBHDIV:27-24', 'USBDSEL:23', 'USBDDIV:20-16', 'PCLKDIV:11-8', 'HCLKSEL:7', 'HCLKDIV:3-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV1 = ['SDHSEL:30', 'ADCSEL:28', 'SDHDIV:26-16', 'STICKDIV:15-8', 'ADCDIV:7-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV2 = ['SPI1SEL:29', 'SPI0SEL:28', 'I2SSEL:25-24', 'I2SDIV:7-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV3 = ['UART2SEL:20', 'UART2DIV:19-16', 'UART1SEL:12', 'UART1DIV:11-8', 'UART0SEL:4', 'UART0DIV:3-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV4 = ['TMR2SEL:26', 'TMR1SEL:25', 'TMR0SEL:24', 'TMR2DIV:23-16', 'TMR1DIV:15-8', 'TMR0DIV:7-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV5 = ['PWMSEL:26', 'WDTSEL:25', 'TMR3SEL:24', 'PWMDIV:23-16', 'WDTDIV:15-8', 'TMR3DIV:7-0'];
NUTOOL_CLOCK.g_register_map.PLLCTL = ['PD:17', 'BP:16', 'OUTDIV:15-13', 'INDIV:12-7', 'FBDIV:6-0'];
NUTOOL_CLOCK.g_register_map.APLLCTL = ['FRAC:31-20', 'MODE:18', 'APD:16', 'OUTDIV:15-13', 'FBDIV:12-6', 'INDIV:5-0'];
NUTOOL_CLOCK.g_register_map.SYST_CSR = ['CLKSRC:2', 'ENABLE:0'];
NUTOOL_CLOCK.g_register_map.RTC_CLKSRC = ['RTCSEL:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CLKDIV0    = '0x00010000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV1    = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV2    = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV3    = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV4    = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV5    = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.PWRCTL     = '0x00FFFF03';
NUTOOL_CLOCK.g_register_map_default.AHBCLK     = '0x0000000F';
NUTOOL_CLOCK.g_register_map_default.APBCLK     = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.PLLCTL     = '0x000020CF';
NUTOOL_CLOCK.g_register_map_default.APLLCTL    = '0x00030000';
NUTOOL_CLOCK.g_register_map_default.SYST_CSR   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.RTC_CLKSRC = '0x00000001';

NUTOOL_CLOCK.g_register_map_description = [];
NUTOOL_CLOCK.g_register_map_description.PWRCTL     = '0x50000200';
NUTOOL_CLOCK.g_register_map_description.AHBCLK     = '0x50000204';
NUTOOL_CLOCK.g_register_map_description.APBCLK     = '0x50000208';
NUTOOL_CLOCK.g_register_map_description.CLKDIV0    = '0x50000210';
NUTOOL_CLOCK.g_register_map_description.CLKDIV1    = '0x50000214';
NUTOOL_CLOCK.g_register_map_description.CLKDIV2    = '0x50000218';
NUTOOL_CLOCK.g_register_map_description.CLKDIV3    = '0x5000021C';
NUTOOL_CLOCK.g_register_map_description.CLKDIV4    = '0x50000230';
NUTOOL_CLOCK.g_register_map_description.CLKDIV5    = '0x50000234';
NUTOOL_CLOCK.g_register_map_description.PLLCTL     = '0x50000220';
NUTOOL_CLOCK.g_register_map_description.APLLCTL    = '0x50000228';
NUTOOL_CLOCK.g_register_map_description.SYST_CSR   = '0xE000E010';
NUTOOL_CLOCK.g_register_map_description.RTC_CLKSRC = '0x400E703C';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.ADCSEL = ['HXT:0', 'PLL:1'];
NUTOOL_CLOCK.g_CLKSEL.HCLKSEL = ['HXT:0', 'PLL:1'];
NUTOOL_CLOCK.g_CLKSEL.I2SSEL = ['HXT:0', 'PLL:1', 'APLL:3'];
NUTOOL_CLOCK.g_CLKSEL.PWMSEL =  ['HXT:0', 'PLL:1'];
NUTOOL_CLOCK.g_CLKSEL.SDHSEL =  ['HXT:0', 'PLL:1'];
NUTOOL_CLOCK.g_CLKSEL.SPI0SEL = ['HXT:0', 'PLL:1'];
NUTOOL_CLOCK.g_CLKSEL.SPI1SEL = ['HXT:0', 'PLL:1'];
NUTOOL_CLOCK.g_CLKSEL.TMR0SEL = ['RTC32k:0', 'HXT:1'];
NUTOOL_CLOCK.g_CLKSEL.TMR1SEL = ['RTC32k:0', 'HXT:1'];
NUTOOL_CLOCK.g_CLKSEL.TMR2SEL = ['RTC32k:0', 'HXT:1'];
NUTOOL_CLOCK.g_CLKSEL.TMR3SEL = ['RTC32k:0', 'HXT:1'];
NUTOOL_CLOCK.g_CLKSEL.UART0SEL = ['HXT:0', 'PLL:1'];
NUTOOL_CLOCK.g_CLKSEL.UART1SEL = ['HXT:0', 'PLL:1'];
NUTOOL_CLOCK.g_CLKSEL.UART2SEL = ['HXT:0', 'PLL:1'];
NUTOOL_CLOCK.g_CLKSEL.USBDSEL = ['HXT:0', 'PLL:1'];
NUTOOL_CLOCK.g_CLKSEL.USBHSEL = ['HXT:0', 'PLL:1'];
NUTOOL_CLOCK.g_CLKSEL.WDTSEL = ['RTC32k:0', 'HXT:1'];
NUTOOL_CLOCK.g_CLKSEL.RTCSEL = ['LXT:0', 'LIRC:1'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ADC = ['ADCSEL', 'ADCCKEN', 'ADCDIV'];
NUTOOL_CLOCK.g_Module.I2C0 = ['PCLK', 'I2C0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C1 = ['PCLK', 'I2C1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2S = ['I2SSEL', 'I2SCKEN', 'I2SDIV'];
NUTOOL_CLOCK.g_Module.PWM = ['PWMSEL', 'PWMCKEN', 'PWMDIV'];
NUTOOL_CLOCK.g_Module.ROM = ['HCLK', 'ROMCKEN', 'none'];
NUTOOL_CLOCK.g_Module.RTC = ['RTC32k', 'RTCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.SDH = ['SDHSEL', 'SDHCKEN', 'SDHDIV'];
NUTOOL_CLOCK.g_Module.SPI0 = ['SPI0SEL', 'SPI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.SPI1 = ['SPI1SEL', 'SPI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.SPIM = ['HCLK', 'SPIMCKEN', 'none'];
NUTOOL_CLOCK.g_Module.SRAM23 = ['HCLK', 'SRAM01CKEN', 'none'];
NUTOOL_CLOCK.g_Module.SRAM23 = ['HCLK', 'SRAM23CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['TMR0SEL', 'TMR0CKEN', 'TMR0DIV'];
NUTOOL_CLOCK.g_Module.TMR1 = ['TMR1SEL', 'TMR1CKEN', 'TMR1DIV'];
NUTOOL_CLOCK.g_Module.TMR2 = ['TMR2SEL', 'TMR2CKEN', 'TMR2DIV'];
NUTOOL_CLOCK.g_Module.TMR3 = ['TMR3SEL', 'TMR3CKEN', 'TMR3DIV'];
NUTOOL_CLOCK.g_Module.UART0 = ['UART0SEL', 'UART0CKEN', 'UART0DIV'];
NUTOOL_CLOCK.g_Module.UART1 = ['UART1SEL', 'UART1CKEN', 'UART1DIV'];
NUTOOL_CLOCK.g_Module.UART2 = ['UART2SEL', 'UART2CKEN', 'UART2DIV'];
NUTOOL_CLOCK.g_Module.USBD = ['USBDSEL', 'USBDCKEN', 'USBDDIV'];
NUTOOL_CLOCK.g_Module.USBH = ['USBHSEL', 'USBHCKEN', 'USBHDIV'];
NUTOOL_CLOCK.g_Module.WDT = ['WDTSEL', 'WDTCKEN', 'WDTDIV'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['HXT/(STICKDIV+1)', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {
	"NUC505DLA": ["SDH", "SPI1", "UART2", "USBH", "PWM", "RTC"],
	"NUC505YLA": ["SDH", "SPI1", "UART2", "USBH", "PWM", "RTC"],
	"NUC505DSA": ["RTC"]
};

NUTOOL_CLOCK.g_equivalentName = [];
NUTOOL_CLOCK.g_equivalentName._S = 'SEL';
NUTOOL_CLOCK.g_equivalentName.XTL12M_EN = 'HXTEN';
NUTOOL_CLOCK.g_equivalentName.HCLK_S = 'HCLKSEL';
NUTOOL_CLOCK.g_equivalentName.HCLK_N = 'HCLKDIV';
NUTOOL_CLOCK.g_equivalentName.PCLK_N = 'PCLKDIV';
NUTOOL_CLOCK.g_equivalentName.PWRCON = 'PWRCTL';
NUTOOL_CLOCK.g_equivalentName.PLLCON = 'PLLCTL';

NUTOOL_CLOCK.g_BusNonExistent = [];
NUTOOL_CLOCK.g_BusFromPCLK1 = [];
NUTOOL_CLOCK.g_DIV_Module_Defines = ['UART0:UART0', 'UART1:UART1', 'UART2:UART2'];
NUTOOL_CLOCK.g_CPUCLKLimit = 100 * 1000000;
NUTOOL_CLOCK.g_HXTRange = '12MHz';
NUTOOL_CLOCK.g_HXTfrequency = 12 * 1000000;
NUTOOL_CLOCK.g_HIRCfrequencyArray = [];
NUTOOL_CLOCK.g_HIRCfrequency = 0;
NUTOOL_CLOCK.g_HIRC2frequencyArray = [];
NUTOOL_CLOCK.g_HIRC2frequency = 0;
NUTOOL_CLOCK.g_HIRC48frequency = 0;
NUTOOL_CLOCK.g_LIRCfrequency = 0;
NUTOOL_CLOCK.g_MIRCfrequency = 0;
NUTOOL_CLOCK.g_MIRC1P2Mfrequency = 0;
NUTOOL_CLOCK.g_RTC32kfrequency = 32768;
NUTOOL_CLOCK.g_PLL480Mfrequency = 0;
NUTOOL_CLOCK.g_HSUSBOTGPHYfrequency = 0;
