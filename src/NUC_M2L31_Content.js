NUTOOL_CLOCK.g_cfg_chips = [
    { name: "M2L31XD4AE", pkg: "WLCSP25" },
    { name: "M2L31ZE4AE", pkg: "QFN33" },
    { name: "M2L31ZD4AE", pkg: "QFN33" },
    { name: "M2L31YG4AE", pkg: "QFN48" },
    { name: "M2L31YE4AE", pkg: "QFN48" },
    { name: "M2L31YD4AE", pkg: "QFN48" },
    { name: "M2L31YIDAE", pkg: "QFN48" },
    { name: "M2L31YGDAE", pkg: "QFN48" },
    { name: "M2L31LE4AE", pkg: "LQFP48" },
    { name: "M2L31LG4AE", pkg: "LQFP48" },
    { name: "M2L31LD4AE", pkg: "LQFP48" },
    { name: "M2L31LIDAE", pkg: "LQFP48" },
    { name: "M2L31LGDAE", pkg: "LQFP48" },
    { name: "M2L31CIDAE", pkg: "WLCSP49" },
    { name: "M2L31CGDAE", pkg: "WLCSP49" },
    { name: "M2L31SG4AE", pkg: "LQFP64" },
    { name: "M2L31SE4AE", pkg: "LQFP64" },
    { name: "M2L31SIDAE", pkg: "LQFP64" },
    { name: "M2L31SGDAE", pkg: "LQFP64" },
    { name: "M2L31KIDAE", pkg: "LQFP128" },
    { name: "M2L31KGDAE", pkg: "LQFP128" }
];

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.PWRCTL = ['HXTMD:31', 'MIRCFSEL:30-28', 'MIRCEN:26', 'MIRCSTBS:25-24', 'HXTGAIN:22-20', 'HIRC48MEN:18', 'HIRCSTBS:17-16', 'HIRC48MSTBS:15-14', 'HXTSELTYP:12', 'PDEN:7', 'PDWKIF:6', 'PDWKIEN:5', 'LIRCEN:3', 'HIRCEN:2', 'LXTEN:1', 'HXTEN:0'];
NUTOOL_CLOCK.g_register_map.AHBCLK0 = ['GPHCKEN:31', 'GPGCKEN:30', 'GPFCKEN:29', 'GPECKEN:28', 'GPDCKEN:27', 'GPCCKEN:26', 'GPBCKEN:25', 'GPACKEN:24', 'RMCFDIS:23', 'USBHCKEN:16', 'RMCIDLE:15', 'KSCKEN:13', 'CRPTCKEN:12', 'CRCCKEN:7', 'STCKEN:4', 'EBICKEN:3', 'ISPCKEN:2', 'PDMA0CKEN:1'];
NUTOOL_CLOCK.g_register_map.APBCLK0 = ['TRNGCKEN:31', 'EADC0CKEN:28', 'USBDCKEN:27', 'OTGCKEN:26', 'UART7CKEN:23', 'UART6CKEN:22', 'UART5CKEN:21', 'UART4CKEN:20', 'UART3CKEN:19', 'UART2CKEN:18', 'UART1CKEN:17', 'UART0CKEN:16', 'SPI2CKEN:15', 'SPI1CKEN:14', 'SPI0CKEN:13', 'QSPI0CKEN:12', 'I2C3CKEN:11', 'I2C2CKEN:10', 'I2C1CKEN:9', 'I2C0CKEN:8', 'ACMP01CKEN:7', 'CLKOCKEN:6', 'TMR3CKEN:5', 'TMR2CKEN:4', 'TMR1CKEN:3', 'TMR0CKEN:2', 'RTCCKEN:1'];
NUTOOL_CLOCK.g_register_map.APBCLK1 = ['ECAP1CKEN:27', 'ECAP0CKEN:26', 'TKCKEN:25', 'EQEI1CKEN:23', 'EQEI0CKEN:22', 'EPWM1CKEN:17', 'EPWM0CKEN:16', 'DACEN:12', 'WWDTCKEN:11', 'USCI1CKEN:9', 'USCI0CKEN:8', 'SPI3CKEN:6'];
NUTOOL_CLOCK.g_register_map.CLKSEL0 = ['CANFD1SEL:27-26', 'CANFD0SEL:25-24', 'HCLK1SEL:14-12', 'EADC0SEL:11-10', 'USBSEL:8', 'STCLKSEL:5-3', 'HCLKSEL:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL1 = ['WWDTSEL:31-30', 'TMR3SEL:22-20', 'TMR2SEL:18-16', 'TMR1SEL:14-12', 'TMR0SEL:10-8', 'CLKOSEL:7-4'];
NUTOOL_CLOCK.g_register_map.CLKSEL2 = ['SPI1SEL:14-12', 'TKSEL:7', 'SPI0SEL:6-4', 'QSPI0SEL:3-2', 'EPWM1SEL:1', 'EPWM0SEL:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL3 = ['SPI3SEL:14-12', 'SPI2SEL:10-8', 'PWM1SEL:7', 'PWM0SEL:6'];
NUTOOL_CLOCK.g_register_map.CLKDIV0 = ['EADC0DIV:23-16', 'UART1DIV:15-12', 'UART0DIV:11-8', 'USBDIV:7-4', 'HCLK0DIV:3-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV4 = ['UART7DIV:23-20', 'UART6DIV:19-16', 'UART5DIV:15-12', 'UART4DIV:11-8', 'UART3DIV:7-4', 'UART2DIV:3-0'];
NUTOOL_CLOCK.g_register_map.PCLKDIV = ['APB1DIV:6-4', 'APB0DIV:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL4 = ['UART7SEL:30-28', 'UART6SEL:26-24', 'UART5SEL:22-20', 'UART4SEL:18-16', 'UART3SEL:14-12', 'UART2SEL:10-8', 'UART1SEL:6-4', 'UART0SEL:2-0'];
NUTOOL_CLOCK.g_register_map.PLLCTL2 = ['FRDIV:27-16', 'OUTDIV:15-14', 'INDIV:13-9', 'FBDIV:8-0'];
NUTOOL_CLOCK.g_register_map.PLLCTL = ['STBSEL:23', 'PLL_SRC:19', 'OE:18', 'BP:17', 'PD:16'];
NUTOOL_CLOCK.g_register_map.CLKDIV5 = ['CANFD1DIV:7-4', 'CANFD0DIV:3-0'];
NUTOOL_CLOCK.g_register_map.APBCLK2 = ['UTCPD0CKEN:15', 'PWM1CKEN:9', 'PWM0CKEN:8', 'ACMP2CKEN:7'];
NUTOOL_CLOCK.g_register_map.AHBCLK1 = ['HCLK1EN:28', 'CANFD1CKEN:21', 'CANFD0CKEN:20', 'CANRAM1EN:17', 'CANRAM0EN:16'];
NUTOOL_CLOCK.g_register_map.CLKOCTL = ['CLK1HZEN:6', 'DIV1EN:5', 'CLKOEN:4', 'FREQSEL:3-0'];
NUTOOL_CLOCK.g_register_map.SYST_CTL = ['COUNTFLAG:16', 'CLKSRC:2', 'TICKINT:1', 'ENABLE:0'];
NUTOOL_CLOCK.g_register_map.RTC_LXTCTL = ['IOCTLSEL:8', 'RTCCKSEL:7', 'RTCCKSEL/32768:7', 'GAIN:4-1'];
NUTOOL_CLOCK.g_register_map.SPI0_CLKDIV = ['SPI0DIV:8-0'];
NUTOOL_CLOCK.g_register_map.SPI1_CLKDIV = ['SPI1DIV:8-0'];
NUTOOL_CLOCK.g_register_map.SPI2_CLKDIV = ['SPI2DIV:8-0'];
NUTOOL_CLOCK.g_register_map.SPI3_CLKDIV = ['SPI3DIV:8-0'];
NUTOOL_CLOCK.g_register_map.LPSCC_CLKEN0 = ['OPACKEN:27', 'LPADC0CKEN:24', 'TTMR1CKEN:23', 'TTMR0CKEN:22', 'LPTMR1CKEN:21', 'LPTMR0CKEN:20', 'LPUART0CKEN:19', 'LPI2C0CKEN:18', 'LPSPI0CKEN:17', 'WDTCKEN:16', 'LPSRAMCKEN:2', 'LPGPIOCKEN:1', 'LPPDMA0CKEN:0'];
NUTOOL_CLOCK.g_register_map.LPSCC_CLKSEL0 = ['WDTSEL:25-24', 'LPADC0SEL:17-16', 'LPTMR1SEL:14-12', 'LPTMR0SEL:10-8', 'TTMR1SEL:7-6', 'TTMR0SEL:5-4', 'LPSPI0SEL:3-2', 'LPUART0SEL:1-0'];
NUTOOL_CLOCK.g_register_map.LPSCC_CLKDIV0 = ['LPADC0DIV:19-16', 'LPUART0DIV:11-8', 'APB2DIV:6-4', 'HCLK1DIV:3-0'];
NUTOOL_CLOCK.g_register_map.LPSPI_CLKDIV = ['LPSPI0DIV:8-0'];

NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.PWRCTL = '0x2000001C';
NUTOOL_CLOCK.g_register_map_default.AHBCLK0 = '0x00008004';
NUTOOL_CLOCK.g_register_map_default.APBCLK0 = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.APBCLK1 = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKSEL0 = '0x0F000D3F';
NUTOOL_CLOCK.g_register_map_default.CLKSEL1 = '0x80777730';
NUTOOL_CLOCK.g_register_map_default.CLKSEL2 = '0x0000202B';
NUTOOL_CLOCK.g_register_map_default.CLKSEL3 = '0x00002200';
NUTOOL_CLOCK.g_register_map_default.CLKDIV0 = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV4 = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.PCLKDIV = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.APBCLK2 = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV5 = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.PLLCTL = '0x00010000';
NUTOOL_CLOCK.g_register_map_default.PLLCTL2 = '0x00008422';
NUTOOL_CLOCK.g_register_map_default.CLKSEL4 = '0x33333333';
NUTOOL_CLOCK.g_register_map_default.AHBCLK1 = '0x10000000';
NUTOOL_CLOCK.g_register_map_default.CLKOCTL = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SYST_CTL = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.RTC_LXTCTL = '0x00000006';
NUTOOL_CLOCK.g_register_map_default.SPI0_CLKDIV = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SPI1_CLKDIV = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SPI2_CLKDIV = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SPI3_CLKDIV = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.LPSCC_CLKEN0 = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.LPSCC_CLKSEL0 = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.LPSCC_CLKDIV0 = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.LPSPI_CLKDIV = '0x00000000';

NUTOOL_CLOCK.g_register_map_description = [];
NUTOOL_CLOCK.g_register_map_description.PWRCTL = '0x40000200';
NUTOOL_CLOCK.g_register_map_description.AHBCLK0 = '0x40000204';
NUTOOL_CLOCK.g_register_map_description.APBCLK0 = '0x40000208';
NUTOOL_CLOCK.g_register_map_description.APBCLK1 = '0x4000020C';
NUTOOL_CLOCK.g_register_map_description.CLKSEL0 = '0x40000210';
NUTOOL_CLOCK.g_register_map_description.CLKSEL1 = '0x40000214';
NUTOOL_CLOCK.g_register_map_description.CLKSEL2 = '0x40000218';
NUTOOL_CLOCK.g_register_map_description.CLKSEL3 = '0x4000021C';
NUTOOL_CLOCK.g_register_map_description.CLKDIV0 = '0x40000220';
NUTOOL_CLOCK.g_register_map_description.CLKDIV4 = '0x40000230';
NUTOOL_CLOCK.g_register_map_description.PCLKDIV = '0x40000234';
NUTOOL_CLOCK.g_register_map_description.APBCLK2 = '0x40000238';
NUTOOL_CLOCK.g_register_map_description.CLKDIV5 = '0x4000023C';
NUTOOL_CLOCK.g_register_map_description.PLLCTL = '0x40000240';
NUTOOL_CLOCK.g_register_map_description.PLLCTL2 = '0x40000244';
NUTOOL_CLOCK.g_register_map_description.CLKSEL4 = '0x40000248';
NUTOOL_CLOCK.g_register_map_description.AHBCLK1 = '0x40000258';
NUTOOL_CLOCK.g_register_map_description.CLKOCTL = '0x40000260';
NUTOOL_CLOCK.g_register_map_description.SYST_CTL = '0xE000E010';
NUTOOL_CLOCK.g_register_map_description.RTC_LXTCTL = '0x40041100';
NUTOOL_CLOCK.g_register_map_description.SPI0_CLKDIV = '0x40061004';
NUTOOL_CLOCK.g_register_map_description.SPI1_CLKDIV = '0x40062004';
NUTOOL_CLOCK.g_register_map_description.SPI2_CLKDIV = '0x40063004';
NUTOOL_CLOCK.g_register_map_description.SPI3_CLKDIV = '0x40064004';
NUTOOL_CLOCK.g_register_map_description.LPSCC_CLKEN0 = '0x40038040';
NUTOOL_CLOCK.g_register_map_description.LPSCC_CLKSEL0 = '0x40038050';
NUTOOL_CLOCK.g_register_map_description.LPSCC_CLKDIV0 = '0x40038060';
NUTOOL_CLOCK.g_register_map_description.LPSPI_CLKDIV = '0x400E1004';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.APB0DIV = ['HCLK0:0', 'HCLK0/2:1', 'HCLK0/4:2', 'HCLK0/8:3', 'HCLK0/16:4'];
NUTOOL_CLOCK.g_CLKSEL.APB1DIV = ['HCLK0:0', 'HCLK0/2:1', 'HCLK0/4:2', 'HCLK0/8:3', 'HCLK0/16:4'];
NUTOOL_CLOCK.g_CLKSEL.APB2DIV = ['HCLK1:0', 'HCLK1/2:1', 'HCLK1/4:2', 'HCLK1/8:3', 'HCLK1/16:4'];
NUTOOL_CLOCK.g_CLKSEL.CANFD0SEL = ['HXT:0', 'HIRC48M:1', 'SRHCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.CANFD1SEL = ['HXT:0', 'HIRC48M:1', 'HCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.CLKOSEL = ['HXT:0', 'LXT:1', 'HCLK0:2', 'HIRC:3', 'LIRC:4', 'HIRC48M:5', 'PLL:6', 'MIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.EADC0SEL = ['PLL:1', 'SRHCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.EPWM0SEL = ['SRHCLK0:0', 'PCLK0:1'];
NUTOOL_CLOCK.g_CLKSEL.EPWM1SEL = ['SRHCLK0:0', 'PCLK1:1'];
NUTOOL_CLOCK.g_CLKSEL.HCLKSEL = ['HXT:0', 'LXT:1', 'PLL:2', 'LIRC:3', 'MIRC:5', 'HIRC48M:6', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.HCLK1SEL = ['HIRC:0', 'MIRC:1', 'LXT:2', 'LIRC:3', 'HIRC48M/2:4'];
NUTOOL_CLOCK.g_CLKSEL.PWM0SEL = ['SRHCLK0:0', 'PCLK0:1'];
NUTOOL_CLOCK.g_CLKSEL.PWM1SEL = ['SRHCLK0:0', 'PCLK1:1'];
NUTOOL_CLOCK.g_CLKSEL.QSPI0SEL = ['HXT:0', 'PLL:1', 'PCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.RTCCKSEL = ['LXT:0', 'LIRC:1'];
NUTOOL_CLOCK.g_CLKSEL['RTCCKSEL/32768'] = ['LXT/32768:0', 'LIRC/32768:1'];
NUTOOL_CLOCK.g_CLKSEL.SPI0SEL = ['HXT:0', 'PLL:1', 'PCLK1:2', 'HIRC:3', 'HIRC48M:4'];
NUTOOL_CLOCK.g_CLKSEL.SPI1SEL = ['HXT:0', 'PLL:1', 'PCLK0:2', 'HIRC:3', 'HIRC48M:4'];
NUTOOL_CLOCK.g_CLKSEL.SPI2SEL = ['HXT:0', 'PLL:1', 'PCLK1:2', 'HIRC:3', 'HIRC48M:4'];
NUTOOL_CLOCK.g_CLKSEL.SPI3SEL = ['HXT:0', 'PLL:1', 'PCLK0:2', 'HIRC:3', 'HIRC48M:4'];
NUTOOL_CLOCK.g_CLKSEL.STCLKSEL = ['HXT:0', 'LXT:1', 'HXT/2:2', 'HCLK0/2:3', 'HIRC/2:7'];
NUTOOL_CLOCK.g_CLKSEL.TKSEL = ['HIRC:0', 'MIRC:1'];
NUTOOL_CLOCK.g_CLKSEL.TMR0SEL = ['HXT:0', 'LXT:1', 'PCLK0:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR1SEL = ['HXT:0', 'LXT:1', 'PCLK0:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR2SEL = ['HXT:0', 'LXT:1', 'PCLK1:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR3SEL = ['HXT:0', 'LXT:1', 'PCLK1:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.UART0SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3', 'MIRC:4', 'HIRC48M:5'];
NUTOOL_CLOCK.g_CLKSEL.UART1SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3', 'MIRC:4', 'HIRC48M:5'];
NUTOOL_CLOCK.g_CLKSEL.UART2SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3', 'MIRC:4', 'HIRC48M:5'];
NUTOOL_CLOCK.g_CLKSEL.UART3SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3', 'MIRC:4', 'HIRC48M:5'];
NUTOOL_CLOCK.g_CLKSEL.UART4SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3', 'MIRC:4', 'HIRC48M:5'];
NUTOOL_CLOCK.g_CLKSEL.UART5SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3', 'MIRC:4', 'HIRC48M:5'];
NUTOOL_CLOCK.g_CLKSEL.UART6SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3', 'MIRC:4', 'HIRC48M:5'];
NUTOOL_CLOCK.g_CLKSEL.UART7SEL = ['HXT:0', 'PLL:1', 'LXT:2', 'HIRC:3', 'MIRC:4', 'HIRC48M:5'];
NUTOOL_CLOCK.g_CLKSEL.USBSEL = ['HIRC48M:0', 'PLL:1'];
NUTOOL_CLOCK.g_CLKSEL.WWDTSEL = ['HCLK0/2048:2', 'LIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WDTSEL = ['LIRC:0', 'LXT:1', 'HCLK1/2048:2'];
NUTOOL_CLOCK.g_CLKSEL.LPADC0SEL = ['HIRC:0', 'MIRC:1', 'LXT:2', 'PCLK2:3'];
NUTOOL_CLOCK.g_CLKSEL.LPTMR1SEL = ['HIRC:0', 'MIRC:1', 'LXT:2', 'LIRC:3', 'EXT:4']; // 'external:4'
NUTOOL_CLOCK.g_CLKSEL.LPTMR0SEL = ['HIRC:0', 'MIRC:1', 'LXT:2', 'LIRC:3', 'EXT:4']; // 'external:4'
NUTOOL_CLOCK.g_CLKSEL.TTMR1SEL = ['HIRC:0', 'MIRC:1', 'LXT:2', 'LIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.TTMR0SEL = ['HIRC:0', 'MIRC:1', 'LXT:2', 'LIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.LPSPI0SEL = ['HIRC:0', 'MIRC:1'];
NUTOOL_CLOCK.g_CLKSEL.LPUART0SEL = ['HIRC:0', 'MIRC:1', 'LXT:2'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ACMP01 = ['PCLK1', 'ACMP01CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ACMP2 = ['PCLK1', 'ACMP2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.CANFD0 = ['CANFD0SEL', 'CANFD0CKEN', 'CANFD0DIV'];
NUTOOL_CLOCK.g_Module.CANRAM0 = ['HCLK0', 'CANRAM0EN', 'none'];
NUTOOL_CLOCK.g_Module.CANFD1 = ['CANFD1SEL', 'CANFD1CKEN', 'CANFD1DIV'];
NUTOOL_CLOCK.g_Module.CANRAM1 = ['HCLK0', 'CANRAM1EN', 'none'];
NUTOOL_CLOCK.g_Module.CRC = ['HCLK0', 'CRCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.CRPT = ['HCLK0', 'CRPTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.DAC = ['PCLK1', 'DACEN', 'none'];
NUTOOL_CLOCK.g_Module.EADC0 = ['EADC0SEL', 'EADC0CKEN', 'EADC0DIV'];
NUTOOL_CLOCK.g_Module.EBI = ['HCLK0', 'EBICKEN', 'none'];
NUTOOL_CLOCK.g_Module.ECAP0 = ['PCLK0', 'ECAP0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ECAP1 = ['PCLK1', 'ECAP1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EPWM0 = ['EPWM0SEL', 'EPWM0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EPWM1 = ['EPWM1SEL', 'EPWM1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EQEI0 = ['PCLK0', 'EQEI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EQEI1 = ['PCLK1', 'EQEI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPA = ['HCLK0', 'GPACKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPB = ['HCLK0', 'GPBCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPC = ['HCLK0', 'GPCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPD = ['HCLK0', 'GPDCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPE = ['HCLK0', 'GPECKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPF = ['HCLK0', 'GPFCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPG = ['HCLK0', 'GPGCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPH = ['HCLK0', 'GPHCKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C0 = ['PCLK0', 'I2C0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C1 = ['PCLK1', 'I2C1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C2 = ['PCLK0', 'I2C2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C3 = ['PCLK1', 'I2C3CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ISP = ['HCLK0', 'ISPCKEN', 'none'];
NUTOOL_CLOCK.g_Module.KS = ['HCLK0', 'KSCKEN', 'none'];
NUTOOL_CLOCK.g_Module.LPADC0 = ['LPADC0SEL', 'LPADC0CKEN', 'LPADC0DIV'];
NUTOOL_CLOCK.g_Module.LPGPIO = ['HCLK1', 'LPGPIOCKEN', 'none'];
NUTOOL_CLOCK.g_Module.LPI2C0 = ['PCLK2', 'LPI2C0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.LPPDMA0 = ['HCLK1', 'LPPDMA0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.LPSPI0 = ['LPSPI0SEL', 'LPSPI0CKEN', 'LPSPI0DIV'];
NUTOOL_CLOCK.g_Module.LPSRAM = ['HCLK1', 'LPSRAMCKEN', 'none'];
NUTOOL_CLOCK.g_Module.LPTMR0 = ['LPTMR0SEL', 'LPTMR0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.LPTMR1 = ['LPTMR1SEL', 'LPTMR1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.LPUART0 = ['LPUART0SEL', 'LPUART0CKEN', 'LPUART0DIV'];
NUTOOL_CLOCK.g_Module.OPA = ['PCLK2', 'OPACKEN', 'none'];
NUTOOL_CLOCK.g_Module.OTG = ['USBSEL', 'OTGCKEN', 'USBDIV'];
NUTOOL_CLOCK.g_Module.PDMA0 = ['HCLK0', 'PDMA0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWM0 = ['PWM0SEL', 'PWM0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.PWM1 = ['PWM1SEL', 'PWM1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.QSPI0 = ['QSPI0SEL', 'QSPI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.RTC = ['RTCCKSEL', 'RTCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.SPI0 = ['SPI0SEL', 'SPI0CKEN', 'SPI0DIV'];
NUTOOL_CLOCK.g_Module.SPI1 = ['SPI1SEL', 'SPI1CKEN', 'SPI1DIV'];
NUTOOL_CLOCK.g_Module.SPI2 = ['SPI2SEL', 'SPI2CKEN', 'SPI2DIV'];
NUTOOL_CLOCK.g_Module.SPI3 = ['SPI3SEL', 'SPI3CKEN', 'SPI3DIV'];
NUTOOL_CLOCK.g_Module.ST = ['STCLKSEL', 'STCKEN', 'none'];
NUTOOL_CLOCK.g_Module.TK = ['TKSEL', 'TKCKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['TMR0SEL', 'TMR0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR1 = ['TMR1SEL', 'TMR1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR2 = ['TMR2SEL', 'TMR2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR3 = ['TMR3SEL', 'TMR3CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TRNG = ['PCLK1', 'TRNGCKEN', 'none'];
NUTOOL_CLOCK.g_Module.TTMR0 = ['TTMR0SEL', 'TTMR0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TTMR1 = ['TTMR1SEL', 'TTMR1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.UART0 = ['UART0SEL', 'UART0CKEN', 'UART0DIV'];
NUTOOL_CLOCK.g_Module.UART1 = ['UART1SEL', 'UART1CKEN', 'UART1DIV'];
NUTOOL_CLOCK.g_Module.UART2 = ['UART2SEL', 'UART2CKEN', 'UART2DIV'];
NUTOOL_CLOCK.g_Module.UART3 = ['UART3SEL', 'UART3CKEN', 'UART3DIV'];
NUTOOL_CLOCK.g_Module.UART4 = ['UART4SEL', 'UART4CKEN', 'UART4DIV'];
NUTOOL_CLOCK.g_Module.UART5 = ['UART5SEL', 'UART5CKEN', 'UART5DIV'];
NUTOOL_CLOCK.g_Module.UART6 = ['UART6SEL', 'UART6CKEN', 'UART6DIV'];
NUTOOL_CLOCK.g_Module.UART7 = ['UART7SEL', 'UART7CKEN', 'UART7DIV'];
NUTOOL_CLOCK.g_Module.USBD = ['USBSEL', 'USBDCKEN', 'USBDIV'];
NUTOOL_CLOCK.g_Module.USBH = ['USBSEL', 'USBHCKEN', 'USBDIV'];
NUTOOL_CLOCK.g_Module.USCI0 = ['PCLK0', 'USCI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.USCI1 = ['PCLK1', 'USCI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.UTCPD0 = ['PCLK0', 'UTCPD0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.WDT = ['WDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.WWDT = ['WWDTSEL', 'WWDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO = ['CLKOSEL', 'CLKOCKEN/DIV1EN/CLKOEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_1Hz = ['RTCCKSEL/32768', 'CLK1HZEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_Divider = ['CLKOSEL', 'CLKOCKEN/!DIV1EN/CLKOEN', 'FREQSEL'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['STCLKSEL/SYST_CTL[2]', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {
    'M2L31XD4AE(WLCSP25)': ['ACMP2', 'EBI', 'I2C2', 'I2C3', 'PWM0', 'PWM1', 'SPI2', 'SPI3', 'UART6', 'UART7', 'USCI1', 'CANFD1', 'DAC1', 'OPA2', 'TK'],
    'M2L31ZE4AE(QFN33)': ['EBI', 'I2C2', 'I2C3', 'PWM0', 'PWM1', 'SPI2', 'SPI3', 'UART6', 'UART7', 'USCI1', 'CANFD1', 'DAC1', 'OPA2', 'TK'],
    'M2L31ZD4AE(QFN33)': ['EBI', 'I2C2', 'I2C3', 'PWM0', 'PWM1', 'SPI2', 'SPI3', 'UART6', 'UART7', 'USCI1', 'CANFD1', 'DAC1', 'OPA2', 'TK'],
    'M2L31YG4AE(QFN48)': ['I2C2', 'I2C3', 'PWM0', 'PWM1', 'SPI2', 'SPI3', 'UART6', 'UART7', 'USCI1', 'CANFD1', 'DAC1', 'OPA2', 'TK'],
    'M2L31YE4AE(QFN48)': ['I2C2', 'I2C3', 'PWM0', 'PWM1', 'SPI2', 'SPI3', 'UART6', 'UART7', 'USCI1', 'CANFD1', 'DAC1', 'OPA2', 'TK'],
    'M2L31YD4AE(QFN48)': ['I2C2', 'I2C3', 'PWM0', 'PWM1', 'SPI2', 'SPI3', 'UART6', 'UART7', 'USCI1', 'CANFD1', 'DAC1', 'OPA2', 'TK'],
    'M2L31YIDAE(QFN48)': [],
    'M2L31YGDAE(QFN48)': [],
    'M2L31LE4AE(LQFP48)': ['I2C2', 'I2C3', 'PWM0', 'PWM1', 'SPI2', 'SPI3', 'UART6', 'UART7', 'USCI1', 'CANFD1', 'DAC1', 'OPA2', 'TK'],
    'M2L31LG4AE(LQFP48)': ['I2C2', 'I2C3', 'PWM0', 'PWM1', 'SPI2', 'SPI3', 'UART6', 'UART7', 'USCI1', 'CANFD1', 'DAC1', 'OPA2', 'TK'],
    'M2L31LD4AE(LQFP48)': ['I2C2', 'I2C3', 'PWM0', 'PWM1', 'SPI2', 'SPI3', 'UART6', 'UART7', 'USCI1', 'CANFD1', 'DAC1', 'OPA2', 'TK'],
    'M2L31LIDAE(LQFP48)': [],
    'M2L31LGDAE(LQFP48)': [],
    'M2L31CIDAE(WLCSP49)': ['I2C2', 'I2C3', 'PWM0', 'PWM1', 'SPI2', 'SPI3', 'UART6', 'UART7', 'USCI1', 'CANFD1', 'DAC1', 'OPA2', 'TK'],
    'M2L31CGDAE(WLCSP49)': ['I2C2', 'I2C3', 'PWM0', 'PWM1', 'SPI2', 'SPI3', 'UART6', 'UART7', 'USCI1', 'CANFD1', 'DAC1', 'OPA2', 'TK'],
    'M2L31SG4AE(LQFP64)': ['I2C2', 'I2C3', 'PWM0', 'PWM1', 'SPI2', 'SPI3', 'UART6', 'UART7', 'USCI1', 'CANFD1', 'DAC1', 'OPA2', 'TK'],
    'M2L31SE4AE(LQFP64)': ['I2C2', 'I2C3', 'PWM0', 'PWM1', 'SPI2', 'SPI3', 'UART6', 'UART7', 'USCI1', 'CANFD1', 'DAC1', 'OPA2', 'TK'],
    'M2L31SIDAE(LQFP64)': [],
    'M2L31SGDAE(LQFP64)': [],
    'M2L31KIDAE(LQFP128)': [],
    'M2L31KGDAE(LQFP128)': []
};

NUTOOL_CLOCK.g_equivalentName = [];
NUTOOL_CLOCK.g_equivalentName._S = 'SEL';
NUTOOL_CLOCK.g_equivalentName.HIRC48 = 'HIRC48M';
NUTOOL_CLOCK.g_equivalentName.OSC10K_EN = 'LIRCEN';
NUTOOL_CLOCK.g_equivalentName.OSC22M_EN = 'HIRCEN';
NUTOOL_CLOCK.g_equivalentName.XTL32K_EN = 'LXTEN';
NUTOOL_CLOCK.g_equivalentName.XTL12M_EN = 'HXTEN';
NUTOOL_CLOCK.g_equivalentName.HIRC48EN = 'HIRC48MEN';
NUTOOL_CLOCK.g_equivalentName.WDT_EN = 'WDTCKEN';
NUTOOL_CLOCK.g_equivalentName.SYST_CSR = 'SYST_CTL';
NUTOOL_CLOCK.g_equivalentName.HCLK_S = 'HCLKSEL';
NUTOOL_CLOCK.g_equivalentName.HCLK = 'HCLK0';
NUTOOL_CLOCK.g_equivalentName.HCLK0 = 'SRHCLK0';
NUTOOL_CLOCK.g_equivalentName.HCLK1 = 'SRHCLK1';
NUTOOL_CLOCK.g_equivalentName.HCLK2 = 'HCLK1';
NUTOOL_CLOCK.g_equivalentName.HCLK2_S = 'HCLK1SEL';
NUTOOL_CLOCK.g_equivalentName.STCLK_S = 'STCLKSEL';
NUTOOL_CLOCK.g_equivalentName['STCLK_S/SYST_CSR[2]'] = 'STCLKSEL/SYST_CTL[2]';
NUTOOL_CLOCK.g_equivalentName.PWRCON = 'PWRCTL';
NUTOOL_CLOCK.g_equivalentName.PLLCON = 'PLLCTL2';
NUTOOL_CLOCK.g_equivalentName.PCLK0SEL = 'APB0DIV';
NUTOOL_CLOCK.g_equivalentName.PCLK1SEL = 'APB1DIV';
NUTOOL_CLOCK.g_equivalentName.PCLK2SEL = 'APB2DIV';

NUTOOL_CLOCK.g_BusNonExistent = ['ST'];
NUTOOL_CLOCK.g_BusFromHCLK0 = [];   // SRHCLK0
NUTOOL_CLOCK.g_BusFromHCLK1 = [];   // SRHCLK1
NUTOOL_CLOCK.g_BusFromHCLK2 = ['LPSRAM', 'LPGPIO', 'LPPDMA0'];   // HCLK1
NUTOOL_CLOCK.g_BusFromPCLK1 = ['ACMP01', 'ACMP2', 'EADC0', 'DAC', 'ECAP1', 'I2C1', 'I2C3', 'OTG', 'PWM1', 'EPWM1', 'EQEI1', 'RTC', 'SPI0', 'SPI2', 'TRNG', 'TMR2', 'TMR3', 'UART1', 'UART3', 'UART5', 'UART7', 'USCI1'];
NUTOOL_CLOCK.g_BusFromPCLK2 = ['LPADC0', 'LPI2C0', 'LPSPI0', 'LPUART0', 'LPTMR0', 'LPTMR1', 'TTMR0', 'TTMR1', 'WDT', 'OPA'];
NUTOOL_CLOCK.g_DIV_Module_Defines = ['OTG:USB', 'USB:USB'];
NUTOOL_CLOCK.g_CPUCLKLimit = 72 * 1000000;
NUTOOL_CLOCK.g_HXTRange = '4~32MHz';
NUTOOL_CLOCK.g_HXTfrequency = 12 * 1000000;
NUTOOL_CLOCK.g_HIRCfrequencyArray = [];
NUTOOL_CLOCK.g_HIRCfrequency = 12 * 1000000;
NUTOOL_CLOCK.g_HIRC2frequencyArray = [];
NUTOOL_CLOCK.g_HIRC2frequency = 0;
NUTOOL_CLOCK.g_HIRC48frequency = 48 * 1000000;
NUTOOL_CLOCK.g_LIRCfrequency = 32 * 1000;
NUTOOL_CLOCK.g_MIRCfrequency = 4000000;
NUTOOL_CLOCK.g_MIRC1P2Mfrequency = 0;
NUTOOL_CLOCK.g_RTC32kfrequency = 0;
NUTOOL_CLOCK.g_PLL480Mfrequency = 0;
NUTOOL_CLOCK.g_HSUSBOTGPHYfrequency = 0;