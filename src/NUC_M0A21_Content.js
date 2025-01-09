// chip content
NUTOOL_CLOCK.g_cfg_chips = [
    { name: "M0A21OB1AC", pkg: "SSOP20" },
    { name: "M0A21OC1AC", pkg: "SSOP20" },
    //{ name: "M0A23OB1AC", pkg: "SSOP20" },
    { name: "M0A23OC1AC", pkg: "SSOP20" },
    { name: "M0A21EB1AC", pkg: "TSSOP28" },
    //{ name: "M0A23EB1AC", pkg: "TSSOP28" },
    { name: "M0A21EC1AC", pkg: "TSSOP28" },
    { name: "M0A23EC1AC", pkg: "TSSOP28" }
];

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.PWRCTL = ['HXTSELXT:31', 'HXTGAIN:30-28', 'LXTSELXT:27', 'LXTGAIN:26-24', 'PDEN:7', 'PDWKIF:6', 'PDWKIEN:5', 'PDWKDLY:4', 'LIRCEN:3', 'HIRCEN:2', 'LXTEN:1', 'HXTEN:0'];
NUTOOL_CLOCK.g_register_map.AHBCLK = ['CRCCKEN:7', 'HDIV_EN:4', 'ISPCKEN:2', 'PDMACKEN:1'];
NUTOOL_CLOCK.g_register_map.APBCLK0 = ['ADCCKEN:28', 'CAN0CKEN:24', 'UART1CKEN:17', 'UART0CKEN:16', 'ACMP01CKEN:7', 'CLKOCKEN:6', 'TMR3CKEN:5', 'TMR2CKEN:4', 'TMR1CKEN:3', 'TMR0CKEN:2', 'WDTCKEN:0'];
NUTOOL_CLOCK.g_register_map.APBCLK1 = ['PWM0CKEN:16', 'DACCKEN:12', 'USCI1CKEN:9', 'USCI0CKEN:8'];
NUTOOL_CLOCK.g_register_map.CLKSEL0 = ['STCLKSEL:5-3', 'HCLKSEL:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL1 = ['UART1SEL:30-28', 'UART0SEL:26-24', 'TMR3SEL:22-20', 'TMR2SEL:18-16', 'TMR1SEL:14-12', 'TMR0SEL:10-8', 'CLKOSEL:6-4', 'WWDTSEL:3-2', 'WDTSEL:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL2 = ['ADCSEL:21-20'];
NUTOOL_CLOCK.g_register_map.CLKDIV0 = ['ADCDIV:23-16', 'UART1DIV:15-12', 'UART0DIV:11-8', 'HCLKDIV:3-0'];
NUTOOL_CLOCK.g_register_map.PCLKDIV = ['APB1DIV:6-4', 'APB0DIV:2-0'];
NUTOOL_CLOCK.g_register_map.CLKOCTL = ['DIV1EN:5', 'CLKOEN:4', 'FREQSEL:3-0'];
NUTOOL_CLOCK.g_register_map.CLKDCTL = ['HXTFQIEN:17', 'HXTFQDEN:16', 'LXTFIEN:13', 'LXTFDEN:12', 'HXTFIEN:5', 'HXTFDEN:4'];
NUTOOL_CLOCK.g_register_map.SYST_CTRL = ['COUNTFLAG:16', 'CLKSRC:2', 'TICKINT:1', 'ENABLE:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.PWRCTL    = '0xB901001F';
NUTOOL_CLOCK.g_register_map_default.AHBCLK    = '0x00000004';
NUTOOL_CLOCK.g_register_map_default.APBCLK0   = '0x00000001';
NUTOOL_CLOCK.g_register_map_default.APBCLK1   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKSEL0   = '0x0000003F';
NUTOOL_CLOCK.g_register_map_default.CLKSEL1   = '0x4477773B';
NUTOOL_CLOCK.g_register_map_default.CLKSEL2   = '0x0020032B';
NUTOOL_CLOCK.g_register_map_default.CLKDIV0   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.PCLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKOCTL   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDCTL   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SYST_CTRL = '0x00000000';

NUTOOL_CLOCK.g_register_map_description = [];
NUTOOL_CLOCK.g_register_map_description.PWRCTL    = '0x40000200';
NUTOOL_CLOCK.g_register_map_description.AHBCLK    = '0x40000204';
NUTOOL_CLOCK.g_register_map_description.APBCLK0   = '0x40000208';
NUTOOL_CLOCK.g_register_map_description.APBCLK1   = '0x4000020C';
NUTOOL_CLOCK.g_register_map_description.CLKSEL0   = '0x40000210';
NUTOOL_CLOCK.g_register_map_description.CLKSEL1   = '0x40000214';
NUTOOL_CLOCK.g_register_map_description.CLKSEL2   = '0x40000218';
NUTOOL_CLOCK.g_register_map_description.CLKDIV0   = '0x40000220';
NUTOOL_CLOCK.g_register_map_description.PCLKDIV   = '0x40000234';
NUTOOL_CLOCK.g_register_map_description.CLKOCTL   = '0x40000260';
NUTOOL_CLOCK.g_register_map_description.CLKDCTL   = '0x40000270';
NUTOOL_CLOCK.g_register_map_description.SYST_CTRL = '0xE000E010';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.APB0DIV = ['HCLK:0', 'HCLK/2:1', 'HCLK/4:2', 'HCLK/8:3', 'HCLK/16:4'];
NUTOOL_CLOCK.g_CLKSEL.APB1DIV = ['HCLK:0', 'HCLK/2:1', 'HCLK/4:2', 'HCLK/8:3', 'HCLK/16:4'];
NUTOOL_CLOCK.g_CLKSEL.ADCSEL = ['HXT:0', 'PCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.CLKOSEL = ['HXT:0', 'LXT:1', 'HCLK:2', 'LIRC:4', 'HIRC:5'];
NUTOOL_CLOCK.g_CLKSEL.HCLKSEL = ['HXT:0', 'LXT:1', 'LIRC:3', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.STCLKSEL = ['HXT:0', 'LXT:1', 'HXT/2:2', 'HCLK/2:3', 'HIRC/2:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR0SEL = ['HXT:0', 'LXT:1', 'PCLK0:2', 'EXT:3', 'LIRC:5', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR1SEL = ['HXT:0', 'LXT:1', 'PCLK0:2', 'EXT:3', 'LIRC:5', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR2SEL = ['HXT:0', 'LXT:1', 'PCLK1:2', 'EXT:3', 'LIRC:5', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR3SEL = ['HXT:0', 'LXT:1', 'PCLK1:2', 'EXT:3', 'LIRC:5', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.UART0SEL = ['HXT:0', 'LXT:2', 'HIRC:3', 'PCLK0:4', 'LIRC:5'];
NUTOOL_CLOCK.g_CLKSEL.UART1SEL = ['HXT:0', 'LXT:2', 'HIRC:3', 'PCLK1:4', 'LIRC:5'];
NUTOOL_CLOCK.g_CLKSEL.WDTSEL = ['LXT:1', 'HCLK/2048:2', 'LIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WWDTSEL = ['HCLK/2048:2', 'LIRC:3'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ACMP01 = ['PCLK1', 'ACMP01CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ADC = ['ADCSEL', 'ADCCKEN', 'ADCDIV'];
NUTOOL_CLOCK.g_Module.CAN0 = ['PCLK0', 'CAN0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.CRC = ['HCLK', 'CRCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.DAC = ['PCLK1', 'DACCKEN', 'none'];
NUTOOL_CLOCK.g_Module.HDIV = ['HCLK', 'HDIV_EN', 'none'];
NUTOOL_CLOCK.g_Module.ISP = ['HCLK', 'ISPCKEN', 'none'];
NUTOOL_CLOCK.g_Module.PDMA = ['HCLK', 'PDMACKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWM0 = ['PCLK0', 'PWM0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['TMR0SEL', 'TMR0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR1 = ['TMR1SEL', 'TMR1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR2 = ['TMR2SEL', 'TMR2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR3 = ['TMR3SEL', 'TMR3CKEN', 'none'];
NUTOOL_CLOCK.g_Module.UART0 = ['UART0SEL', 'UART0CKEN', 'UART0DIV'];
NUTOOL_CLOCK.g_Module.UART1 = ['UART1SEL', 'UART1CKEN', 'UART1DIV'];
NUTOOL_CLOCK.g_Module.USCI0 = ['PCLK0', 'USCI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.USCI1 = ['PCLK1', 'USCI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.WDT = ['WDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.WWDT = ['WWDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO = ['CLKOSEL', 'CLKOCKEN/DIV1EN/CLKOEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_Divider = ['CLKOSEL', 'CLKOCKEN/!DIV1EN/CLKOEN', 'FREQSEL'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['STCLKSEL/SYST_CTRL[2]', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {
    "M0A21OB1AC(SSOP20)": ["DAC1_OUT", "DAC2_OUT", "DAC3_OUT", "EBI", "I2C0", "I2C1", "PWM1", "BPWM0", "BPWM1", "SPI0", "UART2", "UART3", "UART4", "UART6", "UART7", "CAN0", "USB", "RTC", "QSPI"],
    "M0A21OB1AC(SSOP20)": ["DAC1_OUT", "DAC2_OUT", "DAC3_OUT", "EBI", "I2C0", "I2C1", "PWM1", "BPWM0", "BPWM1", "SPI0", "UART2", "UART3", "UART4", "UART6", "UART7", "CAN0", "USB", "RTC", "QSPI"],
    "M0A23OC1AC(SSOP20)": ["DAC1_OUT", "DAC2_OUT", "DAC3_OUT", "EBI", "I2C0", "I2C1", "PWM1", "BPWM0", "BPWM1", "SPI0", "UART2", "UART3", "UART4", "UART6", "UART7", "USB", "RTC", "QSPI"],
    "M0A21EB1AC(TSSOP28)": ["DAC1_OUT", "DAC2_OUT", "DAC3_OUT", "EBI", "I2C0", "I2C1", "PWM1", "BPWM0", "BPWM1", "SPI0", "UART2", "UART3", "UART4", "UART6", "UART7", "CAN0", "USB", "RTC", "QSPI"],
    "M0A21EC1AC(TSSOP28)": ["DAC1_OUT", "DAC2_OUT", "DAC3_OUT", "EBI", "I2C0", "I2C1", "PWM1", "BPWM0", "BPWM1", "SPI0", "UART2", "UART3", "UART4", "UART6", "UART7", "CAN0", "USB", "RTC", "QSPI"],
    "M0A23EC1AC(TSSOP28)": ["DAC1_OUT", "DAC2_OUT", "DAC3_OUT", "EBI", "I2C0", "I2C1", "PWM1", "BPWM0", "BPWM1", "SPI0", "UART2", "UART3", "UART4", "UART6", "UART7", "USB", "RTC", "QSPI"],
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
NUTOOL_CLOCK.g_equivalentName.PCLK2SEL = 'APB2DIV';
NUTOOL_CLOCK.g_equivalentName.EXT = 'EXT_TRG';

NUTOOL_CLOCK.g_BusNonExistent = [];
NUTOOL_CLOCK.g_BusFromPCLK0 = ['CAN0', 'PWM0', 'TMR0', 'TMR1', 'UART0', 'USCI0', 'WDT'];
NUTOOL_CLOCK.g_BusFromPCLK1 = ['ACMP', 'ADC', 'DAC', 'TMR2', 'TMR3', 'UART1', 'USCI1'];
NUTOOL_CLOCK.g_HXTRange = '4~24MHz';
NUTOOL_CLOCK.g_CPUCLKLimit = 48 * 1000000;
NUTOOL_CLOCK.g_HXTfrequency = 12 * 1000000;
NUTOOL_CLOCK.g_HIRCfrequencyArray = [];
NUTOOL_CLOCK.g_HIRCfrequency = 48 * 1000000;
NUTOOL_CLOCK.g_HIRC2frequencyArray = [];
NUTOOL_CLOCK.g_HIRC2frequency = 0;
NUTOOL_CLOCK.g_HIRC48frequency = 0;
NUTOOL_CLOCK.g_LIRCfrequency = 38.4 * 1000;
NUTOOL_CLOCK.g_MIRCfrequency = 0;
NUTOOL_CLOCK.g_MIRC1P2Mfrequency = 0;
NUTOOL_CLOCK.g_RTC32kfrequency = 0;
NUTOOL_CLOCK.g_PLL480Mfrequency = 0;
NUTOOL_CLOCK.g_HSUSBOTGPHYfrequency = 0;