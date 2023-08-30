// chip content
NUTOOL_CLOCK.g_cfg_chips = [
	////M051AN
	//{ name: "M052LAN", pkg: "LQFP48" },
	//{ name: "M054LAN", pkg: "LQFP48" },
	//{ name: "M058LAN", pkg: "LQFP48" },
	//{ name: "M0516LAN", pkg: "LQFP48" },

	//{ name: "M052ZAN", pkg: "QFN33" },
	//{ name: "M054ZAN", pkg: "QFN33" },
	//{ name: "M058ZAN", pkg: "QFN33" },
	//{ name: "M0516ZAN", pkg: "QFN33" },
	////M051BN
	//{ name: "M052LBN", pkg: "LQFP48" },
	//{ name: "M054LBN", pkg: "LQFP48" },
	//{ name: "M058LBN", pkg: "LQFP48" },
	//{ name: "M0516LBN", pkg: "LQFP48" },

	//{ name: "M052ZBN", pkg: "QFN33" },
	//{ name: "M054ZBN", pkg: "QFN33" },
	//{ name: "M058ZBN", pkg: "QFN33" },
	//{ name: "M0516ZBN", pkg: "QFN33" },
	//{ name: "M052TBN", pkg: "QFN33" },
	//{ name: "M054TBN", pkg: "QFN33" },
	//{ name: "M058TBN", pkg: "QFN33" },
	//{ name: "M0516TBN", pkg: "QFN33" },

	//{ name: "M052XBN", pkg: "QFN20" },
	//{ name: "M054XBN", pkg: "QFN20" },
	//{ name: "M058XBN", pkg: "QFN20" },
	//{ name: "M0516XBN", pkg: "QFN20" },
	//{ name: "E32", pkg: "QFN20" },
	//M051DN
	{ name: "M052LDN", pkg: "LQFP48" },
	{ name: "M054LDN", pkg: "LQFP48" },
	{ name: "M058LDN", pkg: "LQFP48" },
	{ name: "M0516LDN", pkg: "LQFP48" },

	{ name: "M052ZDN", pkg: "QFN33" },
	{ name: "M054ZDN", pkg: "QFN33" },
	{ name: "M058ZDN", pkg: "QFN33" },
	{ name: "M0516ZDN", pkg: "QFN33" },
	//{ name: "M052TDN", pkg: "QFN33" },
	//{ name: "M054TDN", pkg: "QFN33" },
	//{ name: "M058TDN", pkg: "QFN33" },
	//{ name: "M0516TDN", pkg: "QFN33" },
	//{ name: "MHC54ZDN", pkg: "QFN33" },

	//{ name: "M052XDN", pkg: "QFN20" },
	//{ name: "M054XDN", pkg: "QFN20" },
	//{ name: "PL054TDN", pkg: "QFN20" },
	//{ name: "M058XDN", pkg: "QFN20" },
	//{ name: "M0516XDN", pkg: "QFN20" },
	//M051DE
	{ name: "M052LDE", pkg: "LQFP48" },
	{ name: "M054LDE", pkg: "LQFP48" },
	{ name: "M058LDE", pkg: "LQFP48" },
	{ name: "M0516LDE", pkg: "LQFP48" },

	{ name: "M052ZDE", pkg: "QFN33" },
	{ name: "M054ZDE", pkg: "QFN33" },
	{ name: "M058ZDE", pkg: "QFN33" },
	{ name: "M0516ZDE", pkg: "QFN33" },
	//{ name: "M052TDE", pkg: "QFN33" },
	//{ name: "M054TDE", pkg: "QFN33" },
	//{ name: "M058TDE", pkg: "QFN33" },
	//{ name: "M0516TDE", pkg: "QFN33" },
	//{ name: "NUC029LAN", pkg: "LQFP48" },
	//{ name: "NUC029TAN", pkg: "QFN33" }
	//M058S
	{ name: "M058SLAN", pkg: "LQFP48" },
	{ name: "M058SZAN", pkg: "QFN33" },
	{ name: "M058SSAN", pkg: "LQFP64" },
	{ name: "M058SFAN", pkg: "TSSOP20" }
];

NUTOOL_CLOCK.g_register_map = [];
NUTOOL_CLOCK.g_register_map.PWRCON = ['OSC10K_EN:3', 'OSC22M_EN:2', 'XTL12M_EN:0'];
NUTOOL_CLOCK.g_register_map.AHBCLK = ['HDIV_EN:4', 'EBI_EN:3', 'ISP_EN:2'];
NUTOOL_CLOCK.g_register_map.APBCLK = ['ACMP23_EN:31', 'ACMP01_EN:30', 'ADC_EN:28', 'PWM67_EN:23', 'PWM45_EN:22', 'PWM23_EN:21', 'PWM01_EN:20', 'UART1_EN:17', 'UART0_EN:16', 'SPI1_EN:13', 'SPI0_EN:12', 'I2C1_EN:9', 'I2C0_EN:8', 'FDIV_EN:6', 'TMR3_EN:5', 'TMR2_EN:4', 'TMR1_EN:3', 'TMR0_EN:2', 'WDT_EN:0'];
NUTOOL_CLOCK.g_register_map.CLKSEL0 = ['STCLK_S:5-3', 'HCLK_S:2-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL1 = ['PWM23_S:31-30', 'PWM01_S:29-28', 'UART_S:25-24', 'TMR3_S:22-20', 'TMR2_S:18-16', 'TMR1_S:14-12', 'TMR0_S:10-8', 'SPI1_S:5', 'SPI0_S:4', 'ADC_S:3-2', 'WDT_S:1-0'];
NUTOOL_CLOCK.g_register_map.CLKSEL2 = ['WWDT_S:17-16', 'PWM67_S:7-6', 'PWM45_S:5-4', 'FRQDIV_S:3-2'];
NUTOOL_CLOCK.g_register_map.CLKDIV = ['ADC_N:23-16', 'UART_N:11-8', 'HCLK_N:3-0'];
NUTOOL_CLOCK.g_register_map.PLLCON = ['PLL_SRC:19', 'OE:18', 'BP:17', 'PD:16', 'OUT_DV:15-14', 'IN_DV:13-9', 'FB_DV:8-0'];
NUTOOL_CLOCK.g_register_map.FRQDIV = ['DIVIDER1:5', 'DIVIDER_EN:4', 'FSEL:3-0'];
NUTOOL_CLOCK.g_register_map.SYST_CSR = ['CLKSRC:2', 'ENABLE:0'];

// Be careful. The order of g_register_map_default will affect the result in the generated code.
NUTOOL_CLOCK.g_register_map_default = [];
NUTOOL_CLOCK.g_register_map_default.CLKDIV   = '0x00000000';
NUTOOL_CLOCK.g_register_map_default.CLKSEL0  = '0x0000003F';
NUTOOL_CLOCK.g_register_map_default.CLKSEL1  = '0xFFFFFFFF';
NUTOOL_CLOCK.g_register_map_default.CLKSEL2  = '0x000000FF';
NUTOOL_CLOCK.g_register_map_default.PWRCON   = '0x0000001D';
NUTOOL_CLOCK.g_register_map_default.AHBCLK   = '0x0000000D';
NUTOOL_CLOCK.g_register_map_default.APBCLK   = '0x00000001'; // X: config's default should be 1.
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
NUTOOL_CLOCK.g_CLKSEL.ADC_S = ['HXT:0', 'PLL:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.SPI0_S = ['PLL:0', 'HCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.SPI1_S = ['PLL:0', 'HCLK:1'];
NUTOOL_CLOCK.g_CLKSEL.TMR0_S = ['HXT:0', 'HCLK:2', 'LIRC:5', 'HIRC:7']; //'external:3',
NUTOOL_CLOCK.g_CLKSEL.TMR1_S = ['HXT:0', 'HCLK:2', 'LIRC:5', 'HIRC:7']; //'external:3',
NUTOOL_CLOCK.g_CLKSEL.TMR2_S = ['HXT:0', 'HCLK:2', 'LIRC:5', 'HIRC:7']; //'external:3',
NUTOOL_CLOCK.g_CLKSEL.TMR3_S = ['HXT:0', 'HCLK:2', 'LIRC:5', 'HIRC:7']; //'external:3',
NUTOOL_CLOCK.g_CLKSEL.UART_S = ['HXT:0', 'PLL:1', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.PWM01_S = ['HXT:0', 'LIRC:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.PWM23_S = ['HXT:0', 'LIRC:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.PWM45_S = ['HXT:0', 'LIRC:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.PWM67_S = ['HXT:0', 'LIRC:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.FRQDIV_S = ['HXT:0', 'LIRC:1', 'HCLK:2', 'HIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WDT_S = ['HCLK/2048:2', 'LIRC:3'];
NUTOOL_CLOCK.g_CLKSEL.WWDT_S = ['HCLK/2048:2', 'LIRC:3'];

NUTOOL_CLOCK.g_CLKSEL_EXTENDED = [];

NUTOOL_CLOCK.g_Module = [];
NUTOOL_CLOCK.g_Module.ACMP01 = ['PCLK', 'ACMP01_EN', 'none'];
NUTOOL_CLOCK.g_Module.ACMP23 = ['PCLK', 'ACMP23_EN', 'none'];
NUTOOL_CLOCK.g_Module.ADC = ['ADC_S', 'ADC_EN', 'ADC_N'];
NUTOOL_CLOCK.g_Module.EBI = ['HCLK', 'EBI_EN', 'none'];
NUTOOL_CLOCK.g_Module.HDIV = ['HCLK', 'HDIV_EN', 'none'];
NUTOOL_CLOCK.g_Module.I2C0 = ['PCLK', 'I2C0_EN', 'none'];
NUTOOL_CLOCK.g_Module.I2C1 = ['PCLK', 'I2C1_EN', 'none'];
NUTOOL_CLOCK.g_Module.ISP = ['HIRC', 'ISP_EN', 'none'];
NUTOOL_CLOCK.g_Module.PWM01 = ['PWM01_S', 'PWM01_EN', 'none'];
NUTOOL_CLOCK.g_Module.PWM23 = ['PWM23_S', 'PWM23_EN', 'none'];
NUTOOL_CLOCK.g_Module.PWM45 = ['PWM45_S', 'PWM45_EN', 'none'];
NUTOOL_CLOCK.g_Module.PWM67 = ['PWM67_S', 'PWM67_EN', 'none'];
NUTOOL_CLOCK.g_Module.SPI0 = ['SPI0_S', 'SPI0_EN', 'none'];
NUTOOL_CLOCK.g_Module.SPI1 = ['SPI1_S', 'SPI1_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR0 = ['TMR0_S', 'TMR0_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR1 = ['TMR1_S', 'TMR1_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR2 = ['TMR2_S', 'TMR2_EN', 'none'];
NUTOOL_CLOCK.g_Module.TMR3 = ['TMR3_S', 'TMR3_EN', 'none'];
NUTOOL_CLOCK.g_Module.UART0 = ['UART_S', 'UART0_EN', 'UART_N'];
NUTOOL_CLOCK.g_Module.UART1 = ['UART_S', 'UART1_EN', 'UART_N'];
NUTOOL_CLOCK.g_Module.WDT = ['WDT_S', 'WDT_EN', 'none'];
NUTOOL_CLOCK.g_Module.WWDT = ['WWDT_S', 'WDT_EN', 'none'];
NUTOOL_CLOCK.g_Module.CKO = ['FRQDIV_S', 'FDIV_EN/DIVIDER_EN/DIVIDER1', 'none'];
NUTOOL_CLOCK.g_Module.CKO_Divider = ['FRQDIV_S', 'FDIV_EN/DIVIDER_EN/!DIVIDER1', 'FSEL'];
NUTOOL_CLOCK.g_Module.SYSTICK = ['STCLK_S/SYST_CSR[2]', 'ENABLE', 'none'];

NUTOOL_CLOCK.g_unusedModule = {
	"M052ZDE": ["SPI0", "PWM01", "EBI"],
	"M054ZDE": ["SPI0", "PWM01", "EBI"],
	"M058ZDE": ["SPI0", "PWM01", "EBI"],
	"M0516ZDE": ["SPI0", "PWM01", "EBI"]
};

NUTOOL_CLOCK.g_equivalentName = [];
NUTOOL_CLOCK.g_equivalentName.CLKO = 'CKO';
NUTOOL_CLOCK.g_equivalentName.CLKO_Divider = 'CKO_Divider';

NUTOOL_CLOCK.g_BusNonExistent = [];
NUTOOL_CLOCK.g_BusFromPCLK1 = [];
NUTOOL_CLOCK.g_DIV_Module_Defines = ['USB:USB', 'UART:UART'];
NUTOOL_CLOCK.g_CPUCLKLimit = 50 * 1000000;
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
