// chip content
NUTOOL_CLOCK.g_cfg_chips = [
	{ name: "M0519VE3AE", pkg: "LQFP100" },

	{ name: "M0519SE3AE", pkg: "LQFP64" },
	{ name: "M0519SD3AE", pkg: "LQFP64" },

	{ name: "M0519LE3AE", pkg: "LQFP48" },
	{ name: "M0519LD3AE", pkg: "LQFP48" }
];

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.PWRCON = ['OSC10K_EN:3', 'OSC22M_EN:2', 'XTL12M_EN:0'];
NUTOOL_CLOCK.g_register_map.AHBCLK = ['HDIV_EN:4'];
NUTOOL_CLOCK.g_register_map.APBCLK = ['OPA_EN:29', 'EADC_EN:28', 'ECAP1_EN:27', 'ECAP0_EN:26', 'ACMP_EN:22', 'EPWM1_EN:21', 'EPWM0_EN:20', 'BPWM0_EN:19', 'UART1_EN:17', 'UART0_EN:16', 'SPI2_EN:14', 'SPI1_EN:13', 'SPI0_EN:12', 'I2C0_EN:8', 'FDIV_EN:6', 'TMR3_EN:5', 'TMR2_EN:4', 'TMR1_EN:3', 'TMR0_EN:2', 'WDT_EN:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL0 = ['STCLK_S:5-3', 'HCLK_S:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL1 = ['UART_S:25-24', 'SPI2_S:6', 'SPI1_S:5', 'SPI0_S:4', 'WDT_S:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL2 = ['WWDT_S:17-16', 'FRQDIV_S:3-2'];
NUTOOL_CLOCK.g_register_map.CLKDIV = ['EADC_N:23-16', 'UART_N:11-8', 'HCLK_N:3-0'];
NUTOOL_CLOCK.g_register_map.PLLCON = ['PLL_SRC:19', 'OE:18', 'BP:17', 'PD:16', 'OUT_DV:15-14', 'IN_DV:13-9', 'FB_DV:8-0'];
NUTOOL_CLOCK.g_register_map.FRQDIV = ['DIV1:5', 'DIVIDER_EN:4', 'FSEL:3-0'];
NUTOOL_CLOCK.g_register_map.SYST_CSR = ['CLKSRC:2', 'ENABLE:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKSEL0  = '0x0000003F';
NUTOOL_CLOCK.g_register_map_default.CLKSEL1  = '0xFFFFFFFF';
NUTOOL_CLOCK.g_register_map_default.CLKSEL2  = '0xFFFFFFFF';
NUTOOL_CLOCK.g_register_map_default.PWRCON   = '0x0000000D';
NUTOOL_CLOCK.g_register_map_default.AHBCLK   = '0x00000005';
NUTOOL_CLOCK.g_register_map_default.APBCLK   = '0x00000001';
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
NUTOOL_CLOCK.g_CLKSEL.HCLK_S = ['HXT:0', 'PLL:2', 'LIRC:3', 'HIRC:7'];
NUTOOL_CLOCK.g_CLKSEL.STCLK_S = ['HXT:0', 'HXT/2:2', 'HCLK/2:3', 'HIRC/2:7'];
NUTOOL_CLOCK.g_CLKSEL.SPI0_S = ['PLL:0', 'HCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.SPI1_S = ['PLL:0', 'HCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.SPI2_S = ['PLL:0', 'HCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.UART_S = ['HXT:0', 'PLL:1', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.FRQDIV_S = ['HXT:0', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WDT_S = ['HCLK/128:0', 'HCLK/512:1', 'HCLK/2048:2', 'LIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WWDT_S = ['HCLK/2048:2', 'LIRC:3'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ACMP = ['PCLK', 'ACMP_EN', 'none'];
NUTOOL_CLOCK.g_Module.BPWM0 = ['PCLK', 'BPWM0_EN', 'none'];
NUTOOL_CLOCK.g_Module.EADC = ['PCLK', 'EADC_EN', 'EADC_N'];
NUTOOL_CLOCK.g_Module.ECAP0 = ['PCLK', 'ECAP0_EN', 'none'];
NUTOOL_CLOCK.g_Module.ECAP1 = ['PCLK', 'ECAP1_EN', 'none'];
NUTOOL_CLOCK.g_Module.EPWM0 = ['PCLK', 'EPWM0_EN', 'none'];
NUTOOL_CLOCK.g_Module.EPWM1 = ['PCLK', 'EPWM1_EN', 'none'];
NUTOOL_CLOCK.g_Module.HDIV = ['HCLK', 'HDIV_EN', 'none'];
NUTOOL_CLOCK.g_Module.I2C0 = ['PCLK', 'I2C0_EN', 'none'];
NUTOOL_CLOCK.g_Module.OPA = ['PCLK', 'OPA_EN', 'none'];
NUTOOL_CLOCK.g_Module.SPI0 = ['SPI0_S', 'SPI0_EN', 'none'];
NUTOOL_CLOCK.g_Module.SPI1 = ['SPI1_S', 'SPI1_EN', 'none'];
NUTOOL_CLOCK.g_Module.SPI2 = ['SPI2_S', 'SPI2_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['PCLK', 'TMR0_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR1 = ['PCLK', 'TMR1_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR2 = ['PCLK', 'TMR2_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR3 = ['PCLK', 'TMR3_EN', 'none'];
NUTOOL_CLOCK.g_Module.UART0 = ['UART_S', 'UART0_EN', 'UART_N'];
NUTOOL_CLOCK.g_Module.UART1 = ['UART_S', 'UART0_EN', 'UART_N'];
NUTOOL_CLOCK.g_Module.WDT = ['WDT_S', 'WDT_EN', 'none'];
NUTOOL_CLOCK.g_Module.WWDT = ['WWDT_S', 'WDT_EN', 'none'];
NUTOOL_CLOCK.g_Module.CLKO = ['FRQDIV_S', 'FDIV_EN/DIVIDER_EN/DIV1', 'none'];
NUTOOL_CLOCK.g_Module.CLKO_Divider = ['FRQDIV_S', 'FDIV_EN/DIVIDER_EN/!DIV1', 'FSEL'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['STCLK_S/SYST_CSR[2]', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {
	"M0519LD3AE": ["SPI1", "SPI2"],
	"M0519LE3AE": ["SPI1", "SPI2"],
	"M0519SD3AE": ["SPI1"],
	"M0519SE3AE": ["SPI1"]
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
