// chip content
NUTOOL_CLOCK.g_cfg_chips = [
    // M460HD - General
    { name: "M467SJHAN", pkg: "LQFP64" },
    { name: "M467KJHAN", pkg: "LQFP128" },
    { name: "M467H3JJHAN", pkg: "LQFP144" },
    { name: "M467JJHAN", pkg: "LQFP144" },
    { name: "M467H3HJHAN", pkg: "LQFP176" },
    { name: "M467HJHAN", pkg: "LQFP176" },
    // M460HD - EPAD
    { name: "M467S2JHAE", pkg: "LQFP64" },
    { name: "M467K2JHAE", pkg: "LQFP128" },
    { name: "M467J2JHAE", pkg: "LQFP144" },
    { name: "M467H2JHAE", pkg: "LQFP176" },
    // M460LD
    { name: "M464YGCAE", pkg: "QFN48" },
    { name: "M464LGCAE", pkg: "LQFP48" },
    { name: "M464AGCAE", pkg: "QFN64" },
    { name: "M464SGCAE", pkg: "LQFP64" },
    { name: "M463VGCAE", pkg: "LQFP100" },
    { name: "M464KGCAE", pkg: "LQFP128" },
    { name: "M463YGCAE", pkg: "QFN48" },
    { name: "M463LGCAE", pkg: "LQFP48" },
    { name: "M463AGCAE", pkg: "QFN64" },
    { name: "M463SGCAE", pkg: "LQFP64" },
    { name: "M463KGCAE", pkg: "LQFP128" },
    { name: "M460YGCAE", pkg: "QFN48" },
    { name: "M460LGCAE", pkg: "LQFP48" },
    { name: "M460AGCAE", pkg: "QFN64" },
    { name: "M460SGCAE", pkg: "LQFP64" },
    { name: "M460KGCAE", pkg: "LQFP128" },
    { name: "M463K2GCAC", pkg: "LQFP128" },
    { name: "M463S2GCAC", pkg: "LQFP64" },
    { name: "M463L2GCAC", pkg: "LQFP48" }
];

/*
The difference between M460HD and M460LD
M460LD added:

M460LD removed:
*/

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.PWRCTL = ['HIRC48EN:18', 'LIRCEN:3', 'HIRCEN:2', 'LXTEN:1', 'HXTEN:0'];
NUTOOL_CLOCK.g_register_map.AHBCLK0 = ['GPHCKEN:31', 'GPGCKEN:30', 'GPFCKEN:29', 'GPECKEN:28', 'GPDCKEN:27', 'GPCCKEN:26', 'GPBCKEN:25', 'GPACKEN:24', 'TRACECKEN:19', 'PDMA1CKEN:18', 'SDH1CKEN:17', 'USBHCKEN:16', 'FMCIDLE:15', 'SPIMCKEN:14', 'KSCKEN:13', 'CRPTCKEN:12', 'HBICKEN:11', 'HSUSBDCKEN:10', 'SENCKEN:9', 'CCAPCKEN:8', 'CRCCKEN:7', 'SDH0CKEN:6', 'EMAC0CKEN:5', 'STCKEN:4', 'EBICKEN:3', 'ISPCKEN:2', 'PDMA0CKEN:1'];
NUTOOL_CLOCK.g_register_map.AHBCLK1 = ['GPJCKEN:25', 'GPICKEN:24', 'CANFD3CKEN:23', 'CANFD2CKEN:22', 'CANFD1CKEN:21', 'CANFD0CKEN:20'];
NUTOOL_CLOCK.g_register_map.APBCLK0 = ['HSOTGCKEN:30', 'I2S0CKEN:29', 'EADC0CKEN:28', 'USBDCKEN:27', 'OTGCKEN:26', 'UART7CKEN:23', 'UART6CKEN:22', 'UART5CKEN:21', 'UART4CKEN:20', 'UART3CKEN:19', 'UART2CKEN:18', 'UART1CKEN:17', 'UART0CKEN:16', 'SPI2CKEN:15', 'SPI1CKEN:14', 'SPI0CKEN:13', 'QSPI0CKEN:12', 'I2C3CKEN:11', 'I2C2CKEN:10', 'I2C1CKEN:9', 'I2C0CKEN:8', 'ACMP01CKEN:7', 'CLKOCKEN:6', 'TMR3CKEN:5', 'TMR2CKEN:4', 'TMR1CKEN:3', 'TMR0CKEN:2', 'RTCCKEN:1', 'WDTCKEN:0'];
NUTOOL_CLOCK.g_register_map.APBCLK1 = ['EADC1CKEN:31', 'I2S1CKEN:29', 'ECAP1CKEN:27', 'ECAP0CKEN:26', 'TRNGCKEN:25', 'EQEI1CKEN:23', 'EQEI0CKEN:22', 'EQEI3CKEN:21', 'EQEI2CKEN:20', 'BPWM1CKEN:19', 'BPWM0CKEN:18', 'EPWM1CKEN:17', 'EPWM0CKEN:16', 'ECAP3CKEN:14', 'ECAP2CKEN:13', 'DACCKEN:12', 'PSIOCKEN:10', 'USCI0CKEN:8', 'SPI4CKEN:7', 'SPI3CKEN:6', 'QSPI1CKEN:4', 'I2C4CKEN:3', 'SC2CKEN:2', 'SC1CKEN:1', 'SC0CKEN:0'];
NUTOOL_CLOCK.g_register_map.APBCLK2 = ['UART9CKEN:17', 'UART8CKEN:16', 'SPI10CKEN:13', 'SPI9CKEN:12', 'SPI8CKEN:11', 'SPI7CKEN:10', 'SPI6CKEN:9', 'SPI5CKEN:8', 'ACMP23CKEN:7', 'EADC2CKEN:6', 'KPICKEN:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL0 = ['CANFD3SEL:31-30', 'CANFD2SEL:29-28', 'CANFD1SEL:27-26', 'CANFD0SEL:25-24', 'SDH1SEL:23-22', 'SDH0SEL:21-20', 'CCAPSEL:17-16', 'EADC2SEL:15-14', 'EADC1SEL:13-12', 'EADC0SEL:11-10', 'USBSEL:8', 'STCLKSEL:5-3', 'HCLKSEL:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL1 = ['WWDTSEL:31-30', 'UART1SEL:27-26', 'UART0SEL:25-24', 'TMR3SEL:22-20', 'TMR2SEL:18-16', 'TMR1SEL:14-12', 'TMR0SEL:10-8', 'CLKOSEL:6-4', 'WDTSEL:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL2 = ['PSIOSEL:30-28', 'TRNGSEL:27', 'UART9SEL:23-22', 'UART8SEL:21-20', 'I2S1SEL:18-16', 'SPI1SEL:14-12', 'QSPI1SEL:11-10', 'BPWM1SEL:9', 'BPWM0SEL:8', 'SPI0SEL:6-4', 'QSPI0SEL:3-2', 'EPWM1SEL:1', 'EPWM0SEL:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL3 = ['UART5SEL:31-30', 'UART4SEL:29-28', 'UART3SEL:27-26', 'UART2SEL:25-24', 'UART7SEL:23-22', 'UART6SEL:21-20', 'I2S0SEL:18-16', 'SPI3SEL:14-12', 'SPI2SEL:11-9', 'KPISEL:7-6', 'SC2SEL:5-4', 'SC1SEL:3-2', 'SC0SEL:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL4 = ['SPI10SEL:26-24', 'SPI9SEL:22-20', 'SPI8SEL:18-16', 'SPI7SEL:14-12', 'SPI6SEL:10-8', 'SPI5SEL:6-4', 'SPI4SEL:2-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV0 = ['SDH0DIV:31-24', 'EADC0DIV:23-16', 'UART1DIV:15-12', 'UART0DIV:11-8', 'USBDIV:7-4', 'HCLKDIV:3-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV1 = ['PSIODIV:31-24', 'SC2DIV:23-16', 'SC1DIV:15-8', 'SC0DIV:7-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV2 = ['EADC1DIV:31-24', 'KPIDIV:15-8', 'I2S1DIV:7-4', 'I2S0DIV:3-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV3 = ['SDH1DIV:31-24', 'VSENSEDIV:15-8'];
NUTOOL_CLOCK.g_register_map.CLKDIV4 = ['UART7DIV:23-20', 'UART6DIV:19-16', 'UART5DIV:15-12', 'UART4DIV:11-8', 'UART3DIV:7-4', 'UART2DIV:3-0'];
NUTOOL_CLOCK.g_register_map.CLKDIV5 = ['EADC2DIV:31-24', 'UART9DIV:23-20', 'UART8DIV:19-16', 'CANFD3DIV:15-12', 'CANFD2DIV:11-8', 'CANFD1DIV:7-4', 'CANFD0DIV:3-0'];
NUTOOL_CLOCK.g_register_map.PCLKDIV = ['APB1DIV:6-4', 'APB0DIV:2-0'];

NUTOOL_CLOCK.g_register_map.SPI0_CLKDIV = ['SPI0DIV:7-0'];
NUTOOL_CLOCK.g_register_map.SPI1_CLKDIV = ['SPI1DIV:7-0'];
NUTOOL_CLOCK.g_register_map.SPI2_CLKDIV = ['SPI2DIV:7-0'];
NUTOOL_CLOCK.g_register_map.SPI3_CLKDIV = ['SPI3DIV:7-0'];
NUTOOL_CLOCK.g_register_map.SPI4_CLKDIV = ['SPI4DIV:7-0'];
NUTOOL_CLOCK.g_register_map.SPI5_CLKDIV = ['SPI5DIV:7-0'];
NUTOOL_CLOCK.g_register_map.SPI6_CLKDIV = ['SPI6DIV:7-0'];
NUTOOL_CLOCK.g_register_map.SPI7_CLKDIV = ['SPI7DIV:7-0'];
NUTOOL_CLOCK.g_register_map.SPI8_CLKDIV = ['SPI8DIV:7-0'];
NUTOOL_CLOCK.g_register_map.SPI9_CLKDIV = ['SPI9DIV:7-0'];
NUTOOL_CLOCK.g_register_map.SPI10_CLKDIV = ['SPI10DIV:7-0'];
NUTOOL_CLOCK.g_register_map.PLLCTL = ['STBSEL:23', 'PLL_SRC:19', 'OE:18', 'BP:17', 'PD:16', 'OUTDIV:15-14', 'INDIV:13-9', 'FBDIV:8-0'];
NUTOOL_CLOCK.g_register_map.PLLFNCTL0 = ['FRDIV:27-16', 'OUTDIV:15-14', 'INDIV:13-9', 'FBDIV:8-0'];
NUTOOL_CLOCK.g_register_map.PLLFNCTL1 = ['PLLFNSRC:31', 'OEFN:30', 'BPFN:29', 'PDFN:28', 'STBSEL:27'];
NUTOOL_CLOCK.g_register_map.RTC_LXTCTL = ['RTCCKSEL:7', 'RTCCKSEL/32768:7'];
NUTOOL_CLOCK.g_register_map.CLKOCTL = ['CLK1HZEN:6', 'DIV1EN:5', 'CLKOEN:4', 'FREQSEL:3-0'];
NUTOOL_CLOCK.g_register_map.SYST_CTRL = ['COUNTFLAG:16', 'CLKSRC:2', 'TICKINT:1', 'ENABLE:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CLKDIV0   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV1   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV2   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV3   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV4   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKDIV5   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.PCLKDIV   = '0x00000011';
NUTOOL_CLOCK.g_register_map_default.CLKSEL0   = '0xFFF3A93A';
NUTOOL_CLOCK.g_register_map_default.CLKSEL1   = '0xBF777723';
NUTOOL_CLOCK.g_register_map_default.CLKSEL2   = '0x20F02B2B';
NUTOOL_CLOCK.g_register_map_default.CLKSEL3   = '0xFFF024BF';
NUTOOL_CLOCK.g_register_map_default.CLKSEL4   = '0x02222222';
NUTOOL_CLOCK.g_register_map_default.PWRCTL    = '0x0004001F';
NUTOOL_CLOCK.g_register_map_default.AHBCLK0   = '0x00008004';
NUTOOL_CLOCK.g_register_map_default.AHBCLK1   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.APBCLK0   = '0x00000001';
NUTOOL_CLOCK.g_register_map_default.APBCLK1   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.APBCLK2   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.PLLCTL    = '0x0008421E';
NUTOOL_CLOCK.g_register_map_default.PLLFNCTL0 = '0x0000842B';
NUTOOL_CLOCK.g_register_map_default.PLLFNCTL1 = '0x50000000';
NUTOOL_CLOCK.g_register_map_default.CLKOCTL   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SPI0_CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SPI1_CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SPI2_CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SPI3_CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SPI4_CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SPI5_CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SPI6_CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SPI7_CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SPI8_CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SPI9_CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SPI10_CLKDIV  = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.SYST_CTRL = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.RTC_LXTCTL = '0x0000000E';

NUTOOL_CLOCK.g_register_map_description = [];
NUTOOL_CLOCK.g_register_map_description.PWRCTL    = '0x40000200';
NUTOOL_CLOCK.g_register_map_description.AHBCLK0   = '0x40000204';
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
NUTOOL_CLOCK.g_register_map_description.APBCLK2   = '0x40000238';
NUTOOL_CLOCK.g_register_map_description.CLKDIV5   = '0x4000023C';
NUTOOL_CLOCK.g_register_map_description.PLLCTL    = '0x40000240';
NUTOOL_CLOCK.g_register_map_description.PLLFNCTL0 = '0x40000248';
NUTOOL_CLOCK.g_register_map_description.PLLFNCTL1 = '0x4000024C';
NUTOOL_CLOCK.g_register_map_description.AHBCLK1   = '0x40000258';
NUTOOL_CLOCK.g_register_map_description.CLKSEL4   = '0x4000025C';
NUTOOL_CLOCK.g_register_map_description.CLKOCTL   = '0x40000260';
NUTOOL_CLOCK.g_register_map_description.SPI0_CLKDIV   = '0x40061004';
NUTOOL_CLOCK.g_register_map_description.SPI1_CLKDIV   = '0x40062004';
NUTOOL_CLOCK.g_register_map_description.SPI2_CLKDIV   = '0x40063004';
NUTOOL_CLOCK.g_register_map_description.SPI3_CLKDIV   = '0x40064004';
NUTOOL_CLOCK.g_register_map_description.SPI4_CLKDIV   = '0x40065004';
NUTOOL_CLOCK.g_register_map_description.SPI5_CLKDIV   = '0x40066004';
NUTOOL_CLOCK.g_register_map_description.SPI6_CLKDIV   = '0x40067004';
NUTOOL_CLOCK.g_register_map_description.SPI7_CLKDIV   = '0x40068004';
NUTOOL_CLOCK.g_register_map_description.SPI8_CLKDIV   = '0x40069004';
NUTOOL_CLOCK.g_register_map_description.SPI9_CLKDIV   = '0x40070004';
NUTOOL_CLOCK.g_register_map_description.SPI10_CLKDIV  = '0x40071004';
NUTOOL_CLOCK.g_register_map_description.SYST_CTRL = '0xE000E010';
NUTOOL_CLOCK.g_register_map_description.RTC_LXTCTL = '0x40041100';

NUTOOL_CLOCK.g_CLKSEL = [];
NUTOOL_CLOCK.g_CLKSEL.APB0DIV = ['HCLK:0', 'HCLK/2:1', 'HCLK/4:2', 'HCLK/8:3', 'HCLK/16:4'];
NUTOOL_CLOCK.g_CLKSEL.APB1DIV = ['HCLK:0', 'HCLK/2:1', 'HCLK/4:2', 'HCLK/8:3', 'HCLK/16:4'];
NUTOOL_CLOCK.g_CLKSEL.BPWM0SEL = ['HCLK:0', 'PCLK0:1'];
NUTOOL_CLOCK.g_CLKSEL.BPWM1SEL = ['HCLK:0', 'PCLK1:1'];
NUTOOL_CLOCK.g_CLKSEL.CANFD0SEL = ['HXT:0', 'PLL/2:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.CANFD1SEL = ['HXT:0', 'PLL/2:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.CANFD2SEL = ['HXT:0', 'PLL/2:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.CANFD3SEL = ['HXT:0', 'PLL/2:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.CCAPSEL = ['HXT:0', 'PLL/2:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.CLKOSEL = ['HXT:0', 'LXT:1', 'HCLK:2', 'HIRC:3', 'LIRC:4', 'PLLFN/2:5', 'PLL/2:6'];
NUTOOL_CLOCK.g_CLKSEL.EADC0SEL = ['PLLFN/2:0', 'PLL/2:1', 'HCLK:2'];
NUTOOL_CLOCK.g_CLKSEL.EADC1SEL = ['PLLFN/2:0', 'PLL/2:1', 'HCLK:2'];
NUTOOL_CLOCK.g_CLKSEL.EADC2SEL = ['PLLFN/2:0', 'PLL/2:1', 'HCLK:2'];
NUTOOL_CLOCK.g_CLKSEL.EPWM0SEL = ['HCLK:0', 'PCLK0:1'];
NUTOOL_CLOCK.g_CLKSEL.EPWM1SEL = ['HCLK:0', 'PCLK1:1'];
NUTOOL_CLOCK.g_CLKSEL.HCLKSEL = ['HXT:0', 'LXT:1', 'PLL:2', 'LIRC:3', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.I2S0SEL = ['HXT:0', 'PLL/2:1', 'PCLK0:2', 'HIRC:3', 'HIRC48:4', 'PLLFN/2:5'];
NUTOOL_CLOCK.g_CLKSEL.I2S1SEL = ['HXT:0', 'PLL/2:1', 'PCLK1:2', 'HIRC:3', 'HIRC48:4', 'PLLFN/2:5'];
NUTOOL_CLOCK.g_CLKSEL.KPISEL = ['HXT:0', 'LIRC:1', 'HIRC:2'];
NUTOOL_CLOCK.g_CLKSEL.PSIOSEL = ['HXT:0', 'LXT:1', 'PCLK1:2', 'PLL/2:3', 'LIRC:4', 'HIRC:5'];
NUTOOL_CLOCK.g_CLKSEL.QSPI0SEL = ['HXT:0', 'PLL/2:1', 'PCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.QSPI1SEL = ['HXT:0', 'PLL/2:1', 'PCLK1:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.RTCCKSEL = ['LXT:0', 'LIRC:1'];
NUTOOL_CLOCK.g_CLKSEL['RTCCKSEL/32768'] = ['LXT/32768:0', 'LIRC/32768:1'];
NUTOOL_CLOCK.g_CLKSEL.SC0SEL = ['HXT:0', 'PLL/2:1', 'PCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SC1SEL = ['HXT:0', 'PLL/2:1', 'PCLK1:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SC2SEL = ['HXT:0', 'PLL/2:1', 'PCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SDH0SEL = ['HXT:0', 'PLL/2:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SDH1SEL = ['HXT:0', 'PLL/2:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI0SEL = ['HXT:0', 'PLL/2:1', 'PCLK1:2', 'HIRC:3', 'HIRC48:4', 'PLLFN/2:5'];
NUTOOL_CLOCK.g_CLKSEL.SPI1SEL = ['HXT:0', 'PLL/2:1', 'PCLK0:2', 'HIRC:3', 'HIRC48:4', 'PLLFN/2:5'];
NUTOOL_CLOCK.g_CLKSEL.SPI2SEL = ['HXT:0', 'PLL/2:1', 'PCLK1:2', 'HIRC:3', 'HIRC48:4', 'PLLFN/2:5'];
NUTOOL_CLOCK.g_CLKSEL.SPI3SEL = ['HXT:0', 'PLL/2:1', 'PCLK0:2', 'HIRC:3', 'HIRC48:4', 'PLLFN/2:5'];
NUTOOL_CLOCK.g_CLKSEL.SPI4SEL = ['HXT:0', 'PLL/2:1', 'PCLK1:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI5SEL = ['HXT:0', 'PLL/2:1', 'PCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI6SEL = ['HXT:0', 'PLL/2:1', 'PCLK1:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI7SEL = ['HXT:0', 'PLL/2:1', 'PCLK0:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI8SEL = ['HXT:0', 'PLL/2:1', 'PCLK1:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI9SEL = ['HXT:0', 'PLL/2:1', 'PCLK1:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI10SEL = ['HXT:0', 'PLL/2:1', 'PCLK1:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.STCLKSEL = ['HXT:0', 'LXT:1', 'HXT/2:2', 'HCLK/2:3', 'HIRC/2:7'];
NUTOOL_CLOCK.g_CLKSEL.TMR0SEL = ['HXT:0', 'LXT:1', 'PCLK0:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR1SEL = ['HXT:0', 'LXT:1', 'PCLK0:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR2SEL = ['HXT:0', 'LXT:1', 'PCLK1:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.TMR3SEL = ['HXT:0', 'LXT:1', 'PCLK1:2', 'EXT:3', 'LIRC:5', 'HIRC:7']; // 'external:3'
NUTOOL_CLOCK.g_CLKSEL.TRNGSEL = ['HXT:0', 'LIRC:1'];
NUTOOL_CLOCK.g_CLKSEL.UART0SEL = ['HXT:0', 'PLL/2:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART1SEL = ['HXT:0', 'PLL/2:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART2SEL = ['HXT:0', 'PLL/2:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART3SEL = ['HXT:0', 'PLL/2:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART4SEL = ['HXT:0', 'PLL/2:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART5SEL = ['HXT:0', 'PLL/2:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART6SEL = ['HXT:0', 'PLL/2:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART7SEL = ['HXT:0', 'PLL/2:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART8SEL = ['HXT:0', 'PLL/2:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.UART9SEL = ['HXT:0', 'PLL/2:1', 'LXT:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.USBSEL = ['HIRC48:0', 'PLL/2:1'];
NUTOOL_CLOCK.g_CLKSEL.WDTSEL = ['LXT:1', 'HCLK/2048:2', 'LIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WWDTSEL = ['HCLK/2048:2', 'LIRC:3'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ACMP01 = ['PCLK1', 'ACMP01CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ACMP23 = ['PCLK1', 'ACMP23CKEN', 'none'];
NUTOOL_CLOCK.g_Module.BPWM0 = ['BPWM0SEL', 'BPWM0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.BPWM1 = ['BPWM1SEL', 'BPWM1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.CANFD0 = ['CANFD0SEL', 'CANFD0CKEN', 'CANFD0DIV'];
NUTOOL_CLOCK.g_Module.CANFD1 = ['CANFD1SEL', 'CANFD1CKEN', 'CANFD1DIV'];
NUTOOL_CLOCK.g_Module.CANFD2 = ['CANFD2SEL', 'CANFD2CKEN', 'CANFD2DIV'];
NUTOOL_CLOCK.g_Module.CANFD3 = ['CANFD3SEL', 'CANFD3CKEN', 'CANFD3DIV'];
NUTOOL_CLOCK.g_Module.CCAP = ['HCLK', 'CCAPCKEN', 'none'];
NUTOOL_CLOCK.g_Module.SEN = ['CCAPSEL', 'SENCKEN', 'VSENSEDIV'];
NUTOOL_CLOCK.g_Module.CRC = ['HCLK', 'CRCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.CRPT = ['HCLK', 'CRPTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.DAC = ['PCLK1', 'DACCKEN', 'none'];
NUTOOL_CLOCK.g_Module.EADC0 = ['EADC0SEL', 'EADC0CKEN', 'EADC0DIV'];
NUTOOL_CLOCK.g_Module.EADC1 = ['EADC1SEL', 'EADC1CKEN', 'EADC1DIV'];
NUTOOL_CLOCK.g_Module.EADC2 = ['EADC2SEL', 'EADC2CKEN', 'EADC2DIV'];
NUTOOL_CLOCK.g_Module.EBI = ['HCLK', 'EBICKEN', 'none'];
NUTOOL_CLOCK.g_Module.ECAP0 = ['PCLK0', 'ECAP0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ECAP1 = ['PCLK1', 'ECAP1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ECAP2 = ['PCLK0', 'ECAP2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.ECAP3 = ['PCLK1', 'ECAP3CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EMAC0 = ['HCLK', 'EMAC0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EPWM0 = ['EPWM0SEL', 'EPWM0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EPWM1 = ['EPWM1SEL', 'EPWM1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EQEI0 = ['PCLK0', 'EQEI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EQEI1 = ['PCLK1', 'EQEI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EQEI2 = ['PCLK0', 'EQEI2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.EQEI3 = ['PCLK1', 'EQEI3CKEN', 'none'];
NUTOOL_CLOCK.g_Module.FMCIDLE = ['HCLK', 'FMCIDLE', 'none'];
NUTOOL_CLOCK.g_Module.ISP = ['HCLK', 'ISPCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPA = ['HCLK', 'GPACKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPB = ['HCLK', 'GPBCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPC = ['HCLK', 'GPCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPD = ['HCLK', 'GPDCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPE = ['HCLK', 'GPECKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPF = ['HCLK', 'GPFCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPG = ['HCLK', 'GPGCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPH = ['HCLK', 'GPHCKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPI = ['HCLK', 'GPICKEN', 'none'];
NUTOOL_CLOCK.g_Module.GPJ = ['HCLK', 'GPJCKEN', 'none'];
NUTOOL_CLOCK.g_Module.HBI = ['HCLK', 'HBICKEN', 'none'];
NUTOOL_CLOCK.g_Module.HSOTG = ['PCLK1', 'HSOTGCKEN', 'none'];
NUTOOL_CLOCK.g_Module.HSUSBD = ['HCLK', 'HSUSBDCKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C0 = ['PCLK0', 'I2C0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C1 = ['PCLK1', 'I2C1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C2 = ['PCLK0', 'I2C2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C3 = ['PCLK1', 'I2C3CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2C4 = ['PCLK0', 'I2C4CKEN', 'none'];
NUTOOL_CLOCK.g_Module.I2S0 = ['I2S0SEL', 'I2S0CKEN', 'I2S0DIV'];
NUTOOL_CLOCK.g_Module.I2S1 = ['I2S1SEL', 'I2S1CKEN', 'I2S1DIV'];
NUTOOL_CLOCK.g_Module.KPI = ['KPISEL', 'KPICKEN', 'KPIDIV'];
NUTOOL_CLOCK.g_Module.KS = ['HCLK', 'KSCKEN', 'none'];
NUTOOL_CLOCK.g_Module.OTG = ['USBSEL', 'OTGCKEN', 'USBDIV'];
NUTOOL_CLOCK.g_Module.PDMA0 = ['HCLK', 'PDMA0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.PDMA1 = ['HCLK', 'PDMA1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.PSIO = ['PSIOSEL', 'PSIOCKEN', 'PSIODIV'];
NUTOOL_CLOCK.g_Module.QSPI0 = ['QSPI0SEL', 'QSPI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.QSPI1 = ['QSPI1SEL', 'QSPI1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.RTC = ['RTCCKSEL', 'RTCCKEN', 'none'];
NUTOOL_CLOCK.g_Module.SC0 = ['SC0SEL', 'SC0CKEN', 'SC0DIV'];
NUTOOL_CLOCK.g_Module.SC1 = ['SC1SEL', 'SC1CKEN', 'SC1DIV'];
NUTOOL_CLOCK.g_Module.SC2 = ['SC2SEL', 'SC2CKEN', 'SC2DIV'];
NUTOOL_CLOCK.g_Module.SDH0 = ['SDH0SEL', 'SDH0CKEN', 'SDH0DIV'];
NUTOOL_CLOCK.g_Module.SDH1 = ['SDH1SEL', 'SDH1CKEN', 'SDH1DIV'];
NUTOOL_CLOCK.g_Module.SPI0 = ['SPI0SEL', 'SPI0CKEN', 'SPI0DIV'];
NUTOOL_CLOCK.g_Module.SPI1 = ['SPI1SEL', 'SPI1CKEN', 'SPI1DIV'];
NUTOOL_CLOCK.g_Module.SPI2 = ['SPI2SEL', 'SPI2CKEN', 'SPI2DIV'];
NUTOOL_CLOCK.g_Module.SPI3 = ['SPI3SEL', 'SPI3CKEN', 'SPI3DIV'];
//NUTOOL_CLOCK.g_Module.SPI4 = ['SPI4SEL', 'SPI4CKEN', 'SPI4DIV'];
//NUTOOL_CLOCK.g_Module.SPI5 = ['SPI5SEL', 'SPI5CKEN', 'SPI5DIV'];
//NUTOOL_CLOCK.g_Module.SPI6 = ['SPI6SEL', 'SPI6CKEN', 'SPI6DIV'];
//NUTOOL_CLOCK.g_Module.SPI7 = ['SPI7SEL', 'SPI7CKEN', 'SPI7DIV'];
//NUTOOL_CLOCK.g_Module.SPI8 = ['SPI8SEL', 'SPI8CKEN', 'SPI8DIV'];
//NUTOOL_CLOCK.g_Module.SPI9 = ['SPI9SEL', 'SPI9CKEN', 'SPI9DIV'];
//NUTOOL_CLOCK.g_Module.SPI10 = ['SPI10SEL', 'SPI10CKEN', 'SPI10DIV'];
NUTOOL_CLOCK.g_Module.SPIM = ['HCLK', 'SPIMCKEN', 'none'];
NUTOOL_CLOCK.g_Module.ST = ['HCLK', 'STCKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['TMR0SEL', 'TMR0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR1 = ['TMR1SEL', 'TMR1CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR2 = ['TMR2SEL', 'TMR2CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TMR3 = ['TMR3SEL', 'TMR3CKEN', 'none'];
NUTOOL_CLOCK.g_Module.TRNG = ['TRNGSEL', 'TRNGCKEN', 'none'];
NUTOOL_CLOCK.g_Module.TRACE = ['HCLK', 'TRACECKEN', 'none'];
NUTOOL_CLOCK.g_Module.UART0 = ['UART0SEL', 'UART0CKEN', 'UART0DIV'];
NUTOOL_CLOCK.g_Module.UART1 = ['UART1SEL', 'UART1CKEN', 'UART1DIV'];
NUTOOL_CLOCK.g_Module.UART2 = ['UART2SEL', 'UART2CKEN', 'UART2DIV'];
NUTOOL_CLOCK.g_Module.UART3 = ['UART3SEL', 'UART3CKEN', 'UART3DIV'];
NUTOOL_CLOCK.g_Module.UART4 = ['UART4SEL', 'UART4CKEN', 'UART4DIV'];
NUTOOL_CLOCK.g_Module.UART5 = ['UART5SEL', 'UART5CKEN', 'UART5DIV'];
NUTOOL_CLOCK.g_Module.UART6 = ['UART6SEL', 'UART6CKEN', 'UART6DIV'];
NUTOOL_CLOCK.g_Module.UART7 = ['UART7SEL', 'UART7CKEN', 'UART7DIV'];
NUTOOL_CLOCK.g_Module.UART8 = ['UART8SEL', 'UART8CKEN', 'UART8DIV'];
NUTOOL_CLOCK.g_Module.UART9 = ['UART9SEL', 'UART9CKEN', 'UART9DIV'];
NUTOOL_CLOCK.g_Module.USBD = ['USBSEL', 'USBDCKEN', 'USBDIV'];
NUTOOL_CLOCK.g_Module.USBH = ['USBSEL', 'USBHCKEN', 'USBDIV'];
NUTOOL_CLOCK.g_Module.USCI0 = ['PCLK0', 'USCI0CKEN', 'none'];
NUTOOL_CLOCK.g_Module.WDT = ['WDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.WWDT = ['WWDTSEL', 'WDTCKEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO = ['CLKOSEL', 'CLKOCKEN/DIV1EN/CLKOEN/!CLK1HZEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_1Hz = ['RTCCKSEL/32768', 'CLK1HZEN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_Divider = ['CLKOSEL', 'CLKOCKEN/!DIV1EN/CLKOEN/!CLK1HZEN', 'FREQSEL'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['STCLKSEL/SYST_CTRL[2]', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {
    // M460HD - General
    "M467SJHAN(LQFP64)": ['UART9', 'HBI'],
    "M467KJHAN(LQFP128)": [],
    "M467H3JJHAN(LQFP144)": ['HBI'],
    "M467JJHAN(LQFP144)": [],
    "M467H3HJHAN(LQFP176)": ['HBI'],
    "M467HJHAN(LQFP176)": [],
    // M460HD - EPAD
    "M467S2JHAE(LQFP64)": ['UART9', 'HBI'],
    "M467K2JHAE(LQFP128)": [],
    "M467J2JHAE(LQFP144)": [],
    "M467H2JHAE(LQFP176)": []
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

NUTOOL_CLOCK.g_BusNonExistent = ['ST'];
NUTOOL_CLOCK.g_BusFromPCLK1 = ['ACMP01', 'ACMP23', 'EADC0', 'EADC1', 'EADC2', 'BPWM1', 'DAC', 'ECAP1', 'ECAP3', 'I2C1', 'I2C3', 'OTG', 'EPWM1', 'QEI1', 'QEI3', 'RTC', 'SC1', 'SPI0', 'SPI2', 'SPI4', 'SPI6', 'SPI8', 'SPI10', 'QSPI1', 'TMR2', 'TMR3', 'UART1', 'UART3', 'UART5', 'UART7', 'UART9', 'I2S1', 'TRNG', 'PSIO'];
NUTOOL_CLOCK.g_DIV_Module_Defines = ['USBD:USB', 'USBH:USB', 'OTG:USB', 'SEN:VSENSE'];
NUTOOL_CLOCK.g_CPUCLKLimit = 200 * 1000000;
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
