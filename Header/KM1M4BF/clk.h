/**************************************************************************//**
 * @file     clk.h
 * @version  V1.00
 * @brief    KM1M4BF series CLK Driver Header File
 *
 * SPDX-License-Identifier: Apache-2.0
 * @copyright (C) 2022 Nuvoton Technology Corp. Japan All rights reserved.
 ******************************************************************************/
#ifndef __CLK_H__
#define __CLK_H__


/** @addtogroup Standard_Driver Standard Driver
  @{
*/

/** @addtogroup CLK_Driver CLK Driver
  @{
*/

/** @addtogroup CLK_EXPORTED_CONSTANTS CLK Exported Constants
  @{
*/

#define FREQ_4MHZ           4000000U    /*!< Define frequency macro   4MHz  \hideinitializer */
#define FREQ_40MHZ         40000000U    /*!< Define frequency macro  40MHz  \hideinitializer */
#define FREQ_60MHZ         60000000U    /*!< Define frequency macro  60MHz  \hideinitializer */
#define FREQ_80MHZ         80000000U    /*!< Define frequency macro  80MHz  \hideinitializer */
#define FREQ_100MHZ       100000000U    /*!< Define frequency macro 100MHz  \hideinitializer */
#define FREQ_120MHZ       120000000U    /*!< Define frequency macro 120MHz  \hideinitializer */

/*---------------------------------------------------------------*/
/* PLL clock-configuration definition                            */
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------*/
/*  CHIPPLLCTR2 constant definitions.                                                                      */
/*---------------------------------------------------------------------------------------------------------*/
/* input PLL clock divider */
#define CLK_PLLIDIV_1       (0x1UL << CLK_CHIPPLLCTR2_PLLIDIV_Pos)      /*!< Divide 1/1 \hideinitializer */
#define CLK_PLLIDIV_2       (0x2UL << CLK_CHIPPLLCTR2_PLLIDIV_Pos)      /*!< Divide 1/2 \hideinitializer */
#define CLK_PLLIDIV_3       (0x3UL << CLK_CHIPPLLCTR2_PLLIDIV_Pos)      /*!< Divide 1/3 \hideinitializer */

/* PLL Multiply configuration */
#define CLK_PLLMUL_MIN      (10U)               /*!< Minimum PLL Multiply setting \hideinitializer */
#define CLK_PLLMUL_MAX      (80U)               /*!< Maximum PLL Multiply setting \hideinitializer */

/*---------------------------------------------------------------*/
/* HXO clock-configuration definition                            */
/*---------------------------------------------------------------*/
/* waiting for stability configuration */
#define CLK_WCYCLE_1024     (0x0U << CLK_CHIPCKWAIT_HXOWAIT_Pos)        /*!< 1024 cycles waiting    \hideinitializer */
#define CLK_WCYCLE_2048     (0x1U << CLK_CHIPCKWAIT_HXOWAIT_Pos)        /*!< 2048 cycles waiting    \hideinitializer */
#define CLK_WCYCLE_4096     (0x2U << CLK_CHIPCKWAIT_HXOWAIT_Pos)        /*!< 4096 cycles waiting    \hideinitializer */
#define CLK_WCYCLE_8192     (0x3U << CLK_CHIPCKWAIT_HXOWAIT_Pos)        /*!< 8192 cycles waiting    \hideinitializer */
#define CLK_WCYCLE_16384    (0x4U << CLK_CHIPCKWAIT_HXOWAIT_Pos)        /*!< 16384 cycles waiting   \hideinitializer */
#define CLK_WCYCLE_32768    (0x5U << CLK_CHIPCKWAIT_HXOWAIT_Pos)        /*!< 32768 cycles waiting   \hideinitializer */
#define CLK_WCYCLE_65536    (0x6U << CLK_CHIPCKWAIT_HXOWAIT_Pos)        /*!< 65536 cycles waiting   \hideinitializer */
#define CLK_WCYCLE_131072   (0x7U << CLK_CHIPCKWAIT_HXOWAIT_Pos)        /*!< 131072 cycles waiting  \hideinitializer */
#define CLK_WCYCLE_196608   (0x8U << CLK_CHIPCKWAIT_HXOWAIT_Pos)        /*!< 196608 cycles waiting  \hideinitializer */
#define CLK_WCYCLE_262144   (0x9U << CLK_CHIPCKWAIT_HXOWAIT_Pos)        /*!< 262144 cycles waiting  \hideinitializer */
#define CLK_WCYCLE_393216   (0xAU << CLK_CHIPCKWAIT_HXOWAIT_Pos)        /*!< 393216 cycles waiting  \hideinitializer */
#define CLK_WCYCLE_524288   (0xBU << CLK_CHIPCKWAIT_HXOWAIT_Pos)        /*!< 524288 cycles waiting  \hideinitializer */
#define CLK_WCYCLE_786432   (0xCU << CLK_CHIPCKWAIT_HXOWAIT_Pos)        /*!< 786432 cycles waiting  \hideinitializer */
#define CLK_WCYCLE_1048576  (0xDU << CLK_CHIPCKWAIT_HXOWAIT_Pos)        /*!< 1048576 cycles waiting \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  CHIPCPUCKCTR constant definitions.                                                                     */
/*---------------------------------------------------------------------------------------------------------*/
/* CPUCLK clock divider */
#define CLK_CPUCKDIV_1      (0x0UL << CLK_CHIPCPUCKCTR_CPUCKDIV_Pos)    /*!< Divide 1/1 \hideinitializer */
#define CLK_CPUCKDIV_2      (0x1UL << CLK_CHIPCPUCKCTR_CPUCKDIV_Pos)    /*!< Divide 1/2 \hideinitializer */
#define CLK_CPUCKDIV_4      (0x2UL << CLK_CHIPCPUCKCTR_CPUCKDIV_Pos)    /*!< Divide 1/4 \hideinitializer */
#define CLK_CPUCKDIV_8      (0x3UL << CLK_CHIPCPUCKCTR_CPUCKDIV_Pos)    /*!< Divide 1/8 \hideinitializer */

/* IOCLK clock divider */
#define CLK_IOCKDIV_2       (0x0UL << CLK_CHIPCPUCKCTR_IOCKDIV_Pos)     /*!< Divide 1/2  \hideinitializer */
#define CLK_IOCKDIV_4       (0x1UL << CLK_CHIPCPUCKCTR_IOCKDIV_Pos)     /*!< Divide 1/4  \hideinitializer */
#define CLK_IOCKDIV_8       (0x2UL << CLK_CHIPCPUCKCTR_IOCKDIV_Pos)     /*!< Divide 1/8  \hideinitializer */
#define CLK_IOCKDIV_16      (0x3UL << CLK_CHIPCPUCKCTR_IOCKDIV_Pos)     /*!< Divide 1/16 \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  CHIPCKSEL constant definitions.                                                                        */
/*---------------------------------------------------------------------------------------------------------*/
#define CLK_BASESEL_HRC     (0x00UL << CLK_CHIPCKSEL_BASESEL_Pos)   /*!< Setting clock source as internal clock  \hideinitializer */
#define CLK_BASESEL_HXO     (0x01UL << CLK_CHIPCKSEL_BASESEL_Pos)   /*!< Setting clock source as external X'tal  \hideinitializer */
#define CLK_BASESEL_PLL     (0x02UL << CLK_CHIPCKSEL_BASESEL_Pos)   /*!< Setting clock source as PLL output      \hideinitializer */

#define CLK_SYSTICK_CLK_CPU             (0xFFU)        /*!< Use Processor clock             \hideinitializer */
#define CLK_SYSTICK_CLK_HXO_DIV128      (0x0U)         /*!< Use External clock(HXO/128)     \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  CHIPCKCTR constant definitions.                                                                        */
/*---------------------------------------------------------------------------------------------------------*/
#define CLK_HXOCLK_ON                   (CLK_CHIPCKCTR_HXOEN_Msk)                   /*!< XHOCLK ON   \hideinitializer */

/*---------------------------------------------------------------*/
/* Peripheral Module clock-gating(MCLK) selection                */
/*---------------------------------------------------------------*/
/* MCLK Group */
#define MODULE_GRP0_Msk     (0x00010000UL)      /*!< Select of Peripheral Module Group 0 \hideinitializer */
#define MODULE_GRP1_Msk     (0x00020000UL)      /*!< Select of Peripheral Module Group 1 \hideinitializer */
#define MODULE_GRP2_Msk     (0x00040000UL)      /*!< Select of Peripheral Module Group 2 \hideinitializer */

#define MODULE_Msk          (0x0000FFFFUL)      /*!< Select module mask bit \hideinitializer */

/* CLK->CHIPPERICKEN0 */
#define DMA_MODULE          (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN13_Msk)      /*!< [MCLK Group 0]DMA            \hideinitializer */
#define GPWM7_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN7_Msk)       /*!< [MCLK Group 0]GPWM7          \hideinitializer */
#define GPWM6_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN6_Msk)       /*!< [MCLK Group 0]GPWM6          \hideinitializer */
#define GPWM5_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN5_Msk)       /*!< [MCLK Group 0]GPWM5          \hideinitializer */
#define GPWM4_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN4_Msk)       /*!< [MCLK Group 0]GPWM4          \hideinitializer */
#define GPWM3_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN3_Msk)       /*!< [MCLK Group 0]GPWM3          \hideinitializer */
#define GPWM2_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN2_Msk)       /*!< [MCLK Group 0]GPWM2          \hideinitializer */
#define GPWM1_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN1_Msk)       /*!< [MCLK Group 0]GPWM1          \hideinitializer */
#define GPWM0_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN0_Msk)       /*!< [MCLK Group 0]GPWM0          \hideinitializer */

/* CLK->CHIPPERICKEN1 */
#define TIMER15_MODULE      (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN15_Msk)      /*!< [MCLK Group 1]Timer15        \hideinitializer */
#define TIMER14_MODULE      (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN14_Msk)      /*!< [MCLK Group 1]Timer14        \hideinitializer */
#define TIMER13_MODULE      (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN13_Msk)      /*!< [MCLK Group 1]Timer13        \hideinitializer */
#define TIMER12_MODULE      (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN12_Msk)      /*!< [MCLK Group 1]Timer12        \hideinitializer */
#define TIMER11_MODULE      (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN11_Msk)      /*!< [MCLK Group 1]Timer11        \hideinitializer */
#define TIMER10_MODULE      (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN10_Msk)      /*!< [MCLK Group 1]Timer10        \hideinitializer */
#define TIMER7_MODULE       (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN7_Msk)       /*!< [MCLK Group 1]Timer7         \hideinitializer */
#define TIMER6_MODULE       (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN6_Msk)       /*!< [MCLK Group 1]Timer6         \hideinitializer */
#define TIMER5_MODULE       (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN5_Msk)       /*!< [MCLK Group 1]Timer5         \hideinitializer */
#define TIMER4_MODULE       (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN4_Msk)       /*!< [MCLK Group 1]Timer4         \hideinitializer */
#define TIMER3_MODULE       (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN3_Msk)       /*!< [MCLK Group 1]Timer3         \hideinitializer */
#define TIMER2_MODULE       (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN2_Msk)       /*!< [MCLK Group 1]Timer2         \hideinitializer */
#define TIMER1_MODULE       (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN1_Msk)       /*!< [MCLK Group 1]Timer1         \hideinitializer */
#define TIMER0_MODULE       (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN0_Msk)       /*!< [MCLK Group 1]Timer0         \hideinitializer */

/* CLK->CHIPPERICKEN2 */
#define VGA1_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN14_Msk)      /*!< [MCLK Group 2]VGA 1          \hideinitializer */
#define VGA0_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN13_Msk)      /*!< [MCLK Group 2]VGA 0          \hideinitializer */
#define SIF6_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN10_Msk)      /*!< [MCLK Group 2]SerialI/F 6    \hideinitializer */
#define SIF5_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN9_Msk)       /*!< [MCLK Group 2]SerialI/F 5    \hideinitializer */
#define SIF4_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN8_Msk)       /*!< [MCLK Group 2]SerialI/F 4    \hideinitializer */
#define SIF3_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN7_Msk)       /*!< [MCLK Group 2]SerialI/F 3    \hideinitializer */
#define SIF2_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN6_Msk)       /*!< [MCLK Group 2]SerialI/F 2    \hideinitializer */
#define SIF1_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN5_Msk)       /*!< [MCLK Group 2]SerialI/F 1    \hideinitializer */
#define SIF0_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN4_Msk)       /*!< [MCLK Group 2]SerialI/F 0    \hideinitializer */
#define MFA_MODULE          (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN3_Msk)       /*!< [MCLK Group 2]ADC 2          \hideinitializer */
#define AD2_MODULE          (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN2_Msk)       /*!< [MCLK Group 2]ADC 2          \hideinitializer */
#define AD1_MODULE          (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN1_Msk)       /*!< [MCLK Group 2]ADC 1          \hideinitializer */
#define AD0_MODULE          (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN0_Msk)       /*!< [MCLK Group 2]ADC 0          \hideinitializer */


/*---------------------------------------------------------------------------------------------------------*/
/*  CHIPDSLEEPMD constant definitions.                                                                     */
/*---------------------------------------------------------------------------------------------------------*/
/* BASECLK setting in DEEPSLEEP */
#define CLK_DSLEEP_BASECLK_OFF      (0U << CLK_CHIPDSLEEPMD_BCKEN_Pos)              /*!< BASECLK stop in DEEPSLEEP   \hideinitializer */
#define CLK_DSLEEP_BASECLK_ON       (1U << CLK_CHIPDSLEEPMD_BCKEN_Pos)              /*!< BASECLK active in DEEPSLEEP \hideinitializer */

/* HXOCLK setting in DEEPSLEEP */
#define CLK_DSLEEP_HXOCLK_OFF       (0U << CLK_CHIPDSLEEPMD_HXOEN_Pos)              /*!< HXOCLK stop in DEEPSLEEP   \hideinitializer */
#define CLK_DSLEEP_HXOCLK_ON        (1U << CLK_CHIPDSLEEPMD_HXOEN_Pos)              /*!< HXOCLK active in DEEPSLEEP \hideinitializer */

/* PLLCLK setting in DEEPSLEEP */
#define CLK_DSLEEP_PLLCLK_OFF       (0U << CLK_CHIPDSLEEPMD_PLLEN_Pos)              /*!< PLLCLK stop in DEEPSLEEP   \hideinitializer */
#define CLK_DSLEEP_PLLCLK_ON        (1U << CLK_CHIPDSLEEPMD_PLLEN_Pos)              /*!< PLLCLK active in DEEPSLEEP \hideinitializer */

/*---------------------------------------------------------------*/
/* CLK monitor definition                                    */
/*---------------------------------------------------------------*/
#define CLK_STABLE_HRCCLK       (CLK_CHIPCKSTAT_HRCOK_Msk)                          /*!< HRCCLK stabilization status \hideinitializer */
#define CLK_STABLE_HXOCLK       (CLK_CHIPCKSTAT_HXOOK_Msk)                          /*!< HXOCLK stabilization status \hideinitializer */
#define CLK_STABLE_PLLCLK       (CLK_CHIPCKSTAT_PLLOK_Msk)                          /*!< PLLCLK stabilization status \hideinitializer */

/*---------------------------------------------------------------*/
/* BASECLK monitor definition                                    */
/*---------------------------------------------------------------*/
#define CLK_BASEST_HRCCLK       (0x1U << CLK_CHIPCKSTAT_BASEST_Pos)                 /*!< HRCCLK operation status     \hideinitializer */
#define CLK_BASEST_HXOCLK       (0x2U << CLK_CHIPCKSTAT_BASEST_Pos)                 /*!< HXOCLK operation status     \hideinitializer */
#define CLK_BASEST_PLLCLK       (0x4U << CLK_CHIPCKSTAT_BASEST_Pos)                 /*!< PLLCLK operation status     \hideinitializer */

/*@}*/ /* end of group CLK_EXPORTED_CONSTANTS */


/** @addtogroup CLK_EXPORTED_FUNCTIONS CLK Exported Functions
  @{
*/

/* Declare these inline functions here to avoid MISRA C 2004 rule 8.1 error */
__STATIC_INLINE uint32_t CLK_IsHRCEnable(void);
__STATIC_INLINE uint32_t CLK_IsHXOEnable(void);
__STATIC_INLINE uint32_t CLK_IsPLLEnable(void);
__STATIC_INLINE uint32_t CLK_IsHRCStability(void);
__STATIC_INLINE uint32_t CLK_IsHXOStability(void);
__STATIC_INLINE uint32_t CLK_IsPLLStability(void);
__STATIC_INLINE void CLK_SysTickDelay(uint32_t us);

/**
  * @brief      Check the state of internal oscillation (HRC).
  * @param      None
  * @return     Internal oscillation (HRC) state
  *             - 1 : Oscillation is enable.
  *             - 0 : Oscillation is disable.
  * @details    This function get the state of internal oscillation (HRC).
  */
__STATIC_INLINE uint32_t CLK_IsHRCEnable(void)
{
    return (((CLK->CHIPCKSTAT & CLK_CHIPCKSTAT_HRCEN_Msk) == CLK_CHIPCKSTAT_HRCEN_Msk) ? 1U : 0U);
}

/**
  * @brief      Check the state of external oscillation (HXO).
  * @param      None
  * @return     External oscillation (HXO) state
  *             - 1 : Oscillation is enable.
  *             - 0 : Oscillation is disable.
  * @details    This function get the state of external oscillation (HXO).
  */
__STATIC_INLINE uint32_t CLK_IsHXOEnable(void)
{
    return (((CLK->CHIPCKSTAT & CLK_CHIPCKSTAT_HXOEN_Msk) == CLK_CHIPCKSTAT_HXOEN_Msk) ? 1U : 0U);
}

/**
  * @brief      Check the state of PLL function.
  * @param      None
  * @return     PLL function state
  *             - 1 : Oscillation is enable.
  *             - 0 : Oscillation is disable.
  * @details    This function get the state of PLL function.
  */
__STATIC_INLINE uint32_t CLK_IsPLLEnable(void)
{
    return (((CLK->CHIPCKSTAT & CLK_CHIPCKSTAT_PLLEN_Msk) == CLK_CHIPCKSTAT_PLLEN_Msk) ? 1U : 0U);
}

/**
  * @brief      Check the state of internal oscillation (HRC).
  * @param      None
  * @return     Internal oscillation (HRC) state
  *             - 1 : Oscillation is stable.
  *             - 0 : Oscillation is not stable.
  * @details    This function get the state of internal oscillation (HRC).
  */
__STATIC_INLINE uint32_t CLK_IsHRCStability(void)
{
    return (((CLK->CHIPCKSTAT & CLK_CHIPCKSTAT_HRCOK_Msk) == CLK_CHIPCKSTAT_HRCOK_Msk) ? 1U : 0U);
}

/**
  * @brief      Check the state of external oscillation (HXO).
  * @param      None
  * @return     External oscillation (HXO) state
  *             - 1 : Oscillation is stable.
  *             - 0 : Oscillation is not stable.
  * @details    This function get the state of external oscillation (HXO).
  */
__STATIC_INLINE uint32_t CLK_IsHXOStability(void)
{
    return (((CLK->CHIPCKSTAT & CLK_CHIPCKSTAT_HXOOK_Msk) == CLK_CHIPCKSTAT_HXOOK_Msk) ? 1U : 0U);
}

/**
  * @brief      Check the state of PLL function.
  * @param      None
  * @return     PLL function state
  *             - 1 : Oscillation is stable.
  *             - 0 : Oscillation is not stable.
  * @details    This function get the state of PLL function.
  */
__STATIC_INLINE uint32_t CLK_IsPLLStability(void)
{
    return (((CLK->CHIPCKSTAT & CLK_CHIPCKSTAT_PLLOK_Msk) == CLK_CHIPCKSTAT_PLLOK_Msk) ? 1U : 0U);
}

/**
  * @brief      This function execute delay function.
  * @param[in]  us  Delay time. The Max value is 2^24 / CPU Clock(MHz). Ex:
  *                             72MHz => 233016us, 50MHz => 335544us,
  *                             48MHz => 349525us, 28MHz => 699050us ...
  * @return     None
  * @details    Use the SysTick to generate the delay time and the unit is in us.
  *             The SysTick clock source is from CPUCLK, i.e the same as system core clock.
  */
__STATIC_INLINE void CLK_SysTickDelay(uint32_t us)
{
    SysTick->LOAD = us * CyclesPerUs;
    SysTick->VAL  = 0x0U;
    SysTick->CTRL = SysTick_CTRL_CLKSOURCE_Msk | SysTick_CTRL_ENABLE_Msk;

    /* Waiting for down-count to zero */
    while ((SysTick->CTRL & SysTick_CTRL_COUNTFLAG_Msk) == 0UL)
    {
    }

    /* Disable SysTick counter */
    SysTick->CTRL = 0U;
}

/*-----------------------------*/
/* BSP API function prototypes */
/*-----------------------------*/
void CLK_DisablePLL(void);
uint32_t CLK_EnablePLL(uint32_t u32PllFreq);
void CLK_DisableXtalRC(uint32_t u32ClkMask);
void CLK_EnableXtalRC(uint32_t u32ClkMask, uint32_t u32WaitStability);
uint32_t CLK_SetCoreClock(uint32_t u32CPUclk);
void CLK_SetCPUCLK(uint32_t u32ClkSrc, uint32_t u32ClkDiv);
uint32_t CLK_SetIOCLK(uint32_t u32Div);
void CLK_DisableModuleClock(uint32_t u32Module);
void CLK_EnableModuleClock(uint32_t u32Module);
void CLK_Sleep(void);
void CLK_DeepSleep(uint32_t u32BaseClk, uint32_t u32HxoClk, uint32_t u32PllClk);
uint32_t CLK_GetCPUFreq(void);
uint32_t CLK_GetIOCLK(void);
uint32_t CLK_GetPLLClockFreq(void);
uint32_t CLK_WaitClockReady(uint32_t u32ClkMask);
uint32_t CLK_WaitBaseClockChange(uint32_t u32ClkSrc);
void CLK_EnableSysTick(uint32_t u32ClkSrc, uint32_t u32Count);
void CLK_DisableSysTick(void);

/*@}*/ /* end of group CLK_EXPORTED_FUNCTIONS */

/*@}*/ /* end of group CLK_Driver */

/*@}*/ /* end of group Standard_Driver */


#endif  /* __CLK_H__ */

/*** (C) COPYRIGHT 2022 Nuvoton Technology Corp. Japan ***/
