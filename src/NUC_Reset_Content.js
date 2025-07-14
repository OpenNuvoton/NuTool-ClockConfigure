NUTOOL_CLOCK.clearVars = function() {
    NUTOOL_CLOCK.g_BusFromACLK = [];
    NUTOOL_CLOCK.g_BusFromHCLK0 = [];
    NUTOOL_CLOCK.g_BusFromHCLK1 = [];
    NUTOOL_CLOCK.g_BusFromHCLK2 = [];
    NUTOOL_CLOCK.g_BusFromPCLK1 = [];
    NUTOOL_CLOCK.g_BusFromPCLK2 = [];
    NUTOOL_CLOCK.g_BusFromPCLK3 = [];
    NUTOOL_CLOCK.g_BusFromPCLK4 = [];
    NUTOOL_CLOCK.g_MIRCfreeuncyArray = [];
    NUTOOL_CLOCK.g_HCLKs = {};
    NUTOOL_CLOCK.g_PCLKs = {};
    NUTOOL_CLOCK.g_PLLs = {};
};