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
    //NUC1311
    { name: "NUC1311LC2AE", pkg: "LQFP48" },
    { name: "NUC1311LD2AE", pkg: "LQFP48" },
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
NUTOOL_CLOCK.g_register_map.PWRCTL = ['LIRCEN:3', 'HIRCEN:2', 'LXTEN:1', 'HXTEN:0', 'HIRC48EN:13'];
NUTOOL_CLOCK.g_register_map.AHBCLK = ['GPIOFCKEN:21', 'GPIOECKEN:20', 'GPIODCKEN:19', 'GPIOCCKEN:18', 'GPIOBCKEN:17', 'GPIOACKEN:16', 'FMCIDLE:15', 'CRCCKEN:7', 'HDIVCKEN:4', 'EBICKEN:3', 'ISPCKEN:2', 'PDMACKEN:1'];
NUTOOL_CLOCK.g_register_map.APBCLK0 = ['ACMP01CKEN:30', 'ADCCKEN:28', 'USBDCKEN:27', 'PWM1CKEN:21', 'PWM0CKEN:20', 'UART2CKEN:18', 'UART1CKEN:17', 'UART0CKEN:16', 'SPI1CKEN:13', 'SPI0CKEN:12', 'I2C1CKEN:9', 'I2C0CKEN:8', 'CLKOCKEN:6', 'TMR3CKEN:5', 'TMR2CKEN:4', 'TMR1CKEN:3', 'TMR0CKEN:2', 'RTCCKEN:1', 'WDTCKEN:0'];
NUTOOL_CLOCK.g_register_map.APBCLK1 = ['USCI2CKEN:10', 'USCI1CKEN:9', 'USCI0CKEN:8'/*, 'SC1CKEN:1', 'SC0CKEN:0'*/];
NUTOOL_CLOCK.g_register_map.CLKSEL0 = ['PCLK1SEL:7', 'PCLK0SEL:6', 'STCLKSEL:5-3', 'HCLKSEL:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL1 = ['PWM1SEL:29', 'PWM0SEL:28', 'UARTSEL:25-24', 'TMR3SEL:22-20', 'TMR2SEL:18-16', 'TMR1SEL:14-12', 'TMR0SEL:10-8', 'ADCSEL:3-2', 'WDTSEL:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL2 = ['SPI1SEL:27-26', 'SPI0SEL:25-24', 'RTCSEL:18', 'RTCSEL/32768:18', 'WWDTSEL:17-16', 'CLKOSEL:4-2'];
NUTOOL_CLOCK.g_register_map.CLKSEL3 = ['USBDSEL:8'/*, 'SC1SEL:3-2', 'SC0SEL:1-0'*/];
NUTOOL_CLOCK.g_register_map.CLKDIV0 = ['ADCDIV:23-16', 'UARTDIV:11-8', 'USBDIV:7-4', 'HCLKDIV:3-0'];
//NUTOOL_CLOCK.g_register_map.CLKDIV1 = ['SC1DIV:15-8', 'SC0DIV:7-0'];
NUTOOL_CLOCK.g_register_map.PLLCTL = ['PLL_SRC:19', 'OE:18', 'BP:17', 'PD:16', 'OUT_DV:15-14', 'IN_DV:13-9', 'FB_DV:8-0'];
NUTOOL_CLOCK.g_register_map.CLKOCTL = ['CLK1HZEN:6', 'DIV1EN:5', 'CLKOEN:4', 'FREQSEL:3-0'];
NUTOOL_CLOCK.g_register_map.SYST_CSR = ['CLKSRC:2', 'ENABLE:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CLKDIV0  = '0x00000000';
//NUTOOL_CLOCK.g_register_map_default.CLKDIV1  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKSEL0  = '0x0000003F';
NUTOOL_CLOCK.g_register_map_default.CLKSEL1  = '0x3377770F';
NUTOOL_CLOCK.g_register_map_default.CLKSEL2  = '0x00020008';
NUTOOL_CLOCK.g_register_map_default.CLKSEL3  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.PWRCTL   = '0x00003C1F';
NUTOOL_CLOCK.g_register_map_default.AHBCLK   = '0x003F8004';
NUTOOL_CLOCK.g_register_map_default.APBCLK0  = '0x00000001';
NUTOOL_CLOCK.g_register_map_default.APBCLK1  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.PLLCTL   = '0x008D8418';
NUTOOL_CLOCK.g_register_map_default.CLKOCTL  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SYST_CSR = '0x00000000';

NUTOOL_CLOCK.g_register_map_description = [];
NUTOOL_CLOCK.g_register_map_description.PWRCTL   = '0x50000200';
NUTOOL_CLOCK.g_register_map_description.AHBCLK   = '0x50000204';
NUTOOL_CLOCK.g_register_map_description.APBCLK0  = '0x50000208';
NUTOOL_CLOCK.g_register_map_description.APBCLK1  = '0x50000230';
NUTOOL_CLOCK.g_register_map_description.CLKSEL0  = '0x50000210';
NUTOOL_CLOCK.g_register_map_description.CLKSEL1  = '0x50000214';
NUTOOL_CLOCK.g_register_map_description.CLKSEL2  = '0x5000021C';
NUTOOL_CLOCK.g_register_map_description.CLKSEL3  = '0x50000234';
NUTOOL_CLOCK.g_register_map_description.CLKDIV0  = '0x50000218';
//NUTOOL_CLOCK.g_register_map_description.CLKDIV1  = '0x50000238';
NUTOOL_CLOCK.g_register_map_description.PLLCTL   = '0x50000220';
NUTOOL_CLOCK.g_register_map_description.CLKOCTL  = '0x50000224';
NUTOOL_CLOCK.g_register_map_description.SYST_CSR = '0xE000E010';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.ADCSEL = ['HXT:0', 'PLL:1', 'PCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.CLKOSEL = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3', 'HIRC48:5'];
NUTOOL_CLOCK.g_CLKSEL.HCLKSEL = ['HXT:0', 'LXT:1', 'PLL:2', 'LIRC:3', 'HIRC48:4', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.PCLK0SEL = ['HCLK:0', 'HCLK/2:1'];
NUTOOL_CLOCK.g_CLKSEL.PCLK1SEL = ['HCLK:0', 'HCLK/2:1'];
NUTOOL_CLOCK.g_CLKSEL.PWM0SEL = ['PLL:0', 'PCLK0:1'];
NUTOOL_CLOCK.g_CLKSEL.PWM1SEL = ['PLL:0', 'PCLK1:1'];
NUTOOL_CLOCK.g_CLKSEL.RTCSEL = ['LXT:0', 'LIRC:1'];
NUTOOL_CLOCK.g_CLKSEL['RTCSEL/32768'] = ['LXT/32768:0', 'LIRC/32768:1'];
//NUTOOL_CLOCK.g_CLKSEL.SC0SEL = ['HXT:0', 'PLL:1', 'PCLK1:2', 'HIRC:3'];
//NUTOOL_CLOCK.g_CLKSEL.SC1SEL = ['HXT:0', 'PLL:1', 'PCLK1:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI0SEL = ['HXT:0', 'PLL:1', 'PCLK0:2', 'HIRC48:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI1SEL = ['HXT:0', 'PLL:1', 'PCLK0:2', 'HIRC48:3'];
NUTOOL_CLOCK.g_CLKSEL.STCLKSEL = ['HXT:0', 'LXT:1', 'HXT/2:2', 'HCLK/2:3', 'HIRC/2:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR0SEL = ['HXT:0', 'LXT:1', 'PCLK0:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; //'external:3',
NUTOOL_CLOCK.g_CLKSEL.TMR1SEL = ['HXT:0', 'LXT:1', 'PCLK0:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; //'external:3',
NUTOOL_CLOCK.g_CLKSEL.TMR2SEL = ['HXT:0', 'LXT:1', 'PCLK1:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; //'external:3',
NUTOOL_CLOCK.g_CLKSEL.TMR3SEL = ['HXT:0', 'LXT:1', 'PCLK1:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; //'external:3',
NUTOOL_CLOCK.g_CLKSEL.UARTSEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.USBDSEL = ['HIRC48:0', 'PLL/(USBDIV+1):1'];
NUTOOL_CLOCK.g_CLKSEL.WDTSEL = ['LXT:1', 'HCLK/2048:2', 'LIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WWDTSEL = ['HCLK/2048:2', 'LIRC:3'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ACMP01 = ['PCLK0', 'ACMP01CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ADC = ['ADCSEL', 'ADCCKEN', 'ADCDIV'];
NUTOOL_CLOCK.g_Module.CRC = ['HCLK', 'CRCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.EBI = ['HCLK', 'EBICKEN', 'none'];
NUTOOL_CLOCK.g_Module.FMCIDLE = ['HIRC', 'FMCIDLE', 'none'];
NUTOOL_CLOCK.g_Module.GPIOA = ['HCLK', 'GPIOACKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPIOB = ['HCLK', 'GPIOBCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPIOC = ['HCLK', 'GPIOCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPIOD = ['HCLK', 'GPIODCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPIOE = ['HCLK', 'GPIOECKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPIOF = ['HCLK', 'GPIOFCKEN', 'none'];
NUTOOL_CLOCK.g_Module.HDIV = ['HCLK', 'HDIVCKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C0 = ['PCLK0', 'I2C0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C1 = ['PCLK1', 'I2C1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ISP = ['HIRC', 'ISPCKEN', 'none'];
NUTOOL_CLOCK.g_Module.PDMA = ['HCLK', 'PDMACKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWM0 = ['PWM0SEL', 'PWM0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWM1 = ['PWM1SEL', 'PWM1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.RTC = ['RTCSEL', 'RTCCKEN', 'none'];
//NUTOOL_CLOCK.g_Module.SC0 = ['SC0SEL', 'SC0CKEN', 'SC0DIV'];
//NUTOOL_CLOCK.g_Module.SC1 = ['SC1SEL', 'SC1CKEN', 'SC1DIV'];
NUTOOL_CLOCK.g_Module.SPI0 = ['SPI0SEL', 'SPI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.SPI1 = ['SPI1SEL', 'SPI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['TMR0SEL', 'TMR0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR1 = ['TMR1SEL', 'TMR1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR2 = ['TMR2SEL', 'TMR2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR3 = ['TMR3SEL', 'TMR3CKEN', 'none'];
NUTOOL_CLOCK.g_Module.UART0 = ['UARTSEL', 'UART0CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.UART1 = ['UARTSEL', 'UART1CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.UART2 = ['UARTSEL', 'UART2CKEN', 'UARTDIV'];
NUTOOL_CLOCK.g_Module.USBD = ['USBDSEL', 'USBDCKEN', 'none'];
NUTOOL_CLOCK.g_Module.USCI0 = ['PCLK0', 'USCI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.USCI1 = ['PCLK1', 'USCI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.USCI2 = ['PCLK0', 'USCI2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.WDT = ['WDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.WWDT = ['WWDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO = ['CLKOSEL', 'CLKOCKEN/DIV1EN/CLKOEN/!CLK1HZEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_1Hz = ['RTCSEL/32768', 'CLK1HZEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_Divider = ['CLKOSEL', 'CLKOCKEN/!DIV1EN/CLKOEN/!CLK1HZEN', 'FREQSEL'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['STCLKSEL/SYST_CSR[2]', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {};
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
NUTOOL_CLOCK.g_equivalentName.EXT = 'EXT_TRG';

NUTOOL_CLOCK.g_BusNonExistent = [];
NUTOOL_CLOCK.g_BusFromPCLK1 = ['USCI1', 'I2C1'];
NUTOOL_CLOCK.g_DIV_Module_Defines = ['UART:UART', 'USBD:USB'];
NUTOOL_CLOCK.g_CPUCLKLimit = 72 * 1000000;
NUTOOL_CLOCK.g_HXTRange = '4~20MHz';
NUTOOL_CLOCK.g_HXTfrequency = 12 * 1000000;
NUTOOL_CLOCK.g_HIRCfrequencyArray = [];
NUTOOL_CLOCK.g_HIRCfrequency = 22118400;
NUTOOL_CLOCK.g_HIRC2frequencyArray = [];
NUTOOL_CLOCK.g_HIRC2frequency = 0;
NUTOOL_CLOCK.g_HIRC48frequency = 48 * 1000000;
NUTOOL_CLOCK.g_LIRCfrequency = 10 * 1000;
NUTOOL_CLOCK.g_MIRCfrequency = 0;
NUTOOL_CLOCK.g_MIRC1P2Mfrequency = 0;
NUTOOL_CLOCK.g_RTC32kfrequency = 0;
NUTOOL_CLOCK.g_PLL480Mfrequency = 0;
NUTOOL_CLOCK.g_HSUSBOTGPHYfrequency = 0;
