/**************************************************************************//**
 * @file     clk.h
 * @version  V1.00
 * @brief    KM1M7AF series CLK Driver Header File
 *
 * SPDX-License-Identifier: Apache-2.0
 * @copyright (C) 2021 Nuvoton Technology Corp. Japan All rights reserved.
 ******************************************************************************/
#ifndef __CLK_H__
#define __CLK_H__

#ifdef __cplusplus
extern "C"
{
#endif


/** @addtogroup Standard_Driver Standard Driver
  @{
*/

/** @addtogroup CLK_Driver CLK Driver
  @{
*/

/** @addtogroup CLK_EXPORTED_CONSTANTS CLK Exported Constants
  @{
*/

/*@}*/ /* end of group CLK_EXPORTED_CONSTANTS */


/** @addtogroup CLK_EXPORTED_FUNCTIONS CLK Exported Functions
  @{
*/

#define FREQ_4MHZ           4000000U    /*!< Define frequency macro   4MHz  \hideinitializer */
#define FREQ_20MHZ         20000000U    /*!< Define frequency macro  20MHz  \hideinitializer */
#define FREQ_53MHZ         53000000U    /*!< Define frequency macro  53MHz  \hideinitializer */
#define FREQ_60MHZ         60000000U    /*!< Define frequency macro  60MHz  \hideinitializer */
#define FREQ_71MHZ         71000000U    /*!< Define frequency macro  71MHz  \hideinitializer */
#define FREQ_88MHZ         88000000U    /*!< Define frequency macro  88MHz  \hideinitializer */
#define FREQ_106MHZ       106000000U    /*!< Define frequency macro 106MHz  \hideinitializer */
#define FREQ_120MHZ       120000000U    /*!< Define frequency macro 120MHz  \hideinitializer */
#define FREQ_124MHZ       124000000U    /*!< Define frequency macro 124MHz  \hideinitializer */
#define FREQ_142MHZ       142000000U    /*!< Define frequency macro 142MHz  \hideinitializer */
#define FREQ_160MHZ       160000000U    /*!< Define frequency macro 160MHz  \hideinitializer */
#define FREQ_240MHZ       240000000U    /*!< Define frequency macro 240MHz  \hideinitializer */

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

/* output PLL clock divider */
#define CLK_PLLODIV_1       (0x0UL << CLK_CHIPPLLCTR2_PLLODIV_Pos)      /*!< Divide 1/1 \hideinitializer */
#define CLK_PLLODIV_2       (0x1UL << CLK_CHIPPLLCTR2_PLLODIV_Pos)      /*!< Divide 1/2 \hideinitializer */

/* PLL Multiply configuration */
#define CLK_PLLMUL_MIN      (10U)               /*!< Minimum PLL Multiply setting \hideinitializer */
#define CLK_PLLMUL_MAX      (63U)               /*!< Maximum PLL Multiply setting \hideinitializer */

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
/*  CHIPCKSEL constant definitions.                                                                        */
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
#define CLK_BASESEL_HRC     (0x00UL << CLK_CHIPCKSEL_BASESEL_Pos)   /*!< Setting clock source as internal high speed RC clock   \hideinitializer */
#define CLK_BASESEL_HXO     (0x01UL << CLK_CHIPCKSEL_BASESEL_Pos)   /*!< Setting clock source as external X'tal                 \hideinitializer */
#define CLK_BASESEL_PLL     (0x02UL << CLK_CHIPCKSEL_BASESEL_Pos)   /*!< Setting clock source as PLL output                     \hideinitializer */

/*---------------------------------------------------------------*/
/* Peripheral Module clock-gating(MCLK) selection                */
/*---------------------------------------------------------------*/
/* MCLK Group */
#define MODULE_GRP0_Msk     (0x00010000UL)      /*!< Select of Peripheral Module Group 0 \hideinitializer */
#define MODULE_GRP1_Msk     (0x00020000UL)      /*!< Select of Peripheral Module Group 1 \hideinitializer */
#define MODULE_GRP2_Msk     (0x00040000UL)      /*!< Select of Peripheral Module Group 2 \hideinitializer */

#define MODULE_Msk          (0x0000FFFFUL)      /*!< Select module mask bit \hideinitializer */

/* CLK->CHIPPERICKEN0 */
#define CAN_MODULE          (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN14_Msk)      /*!< [MCLK Group 0]CAN controller \hideinitializer */
#define DMA_MODULE          (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN13_Msk)      /*!< [MCLK Group 0]DMA controller \hideinitializer */
#define GPWMB_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN11_Msk)      /*!< [MCLK Group 0]GPWMB          \hideinitializer */
#define GPWMA_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN10_Msk)      /*!< [MCLK Group 0]GPWMA          \hideinitializer */
#define GPWM9_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN9_Msk)       /*!< [MCLK Group 0]GPWM9          \hideinitializer */
#define GPWM8_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN8_Msk)       /*!< [MCLK Group 0]GPWM8          \hideinitializer */
#define GPWM7_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN7_Msk)       /*!< [MCLK Group 0]GPWM7          \hideinitializer */
#define GPWM6_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN6_Msk)       /*!< [MCLK Group 0]GPWM6          \hideinitializer */
#define GPWM5_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN5_Msk)       /*!< [MCLK Group 0]GPWM5          \hideinitializer */
#define GPWM4_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN4_Msk)       /*!< [MCLK Group 0]GPWM4          \hideinitializer */
#define GPWM3_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN3_Msk)       /*!< [MCLK Group 0]GPWM3          \hideinitializer */
#define GPWM2_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN2_Msk)       /*!< [MCLK Group 0]GPWM2          \hideinitializer */
#define GPWM1_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN1_Msk)       /*!< [MCLK Group 0]GPWM1          \hideinitializer */
#define GPWM0_MODULE        (MODULE_GRP0_Msk | CLK_CHIPPERICKEN0_PECKEN0_Msk)       /*!< [MCLK Group 0]GPWM0          \hideinitializer */

/* CLK->CHIPPERICKEN1 */
#define TIMER25_MODULE      (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN12_Msk)      /*!< [MCLK Group 1]Timer25        \hideinitializer */
#define TIMER24_MODULE      (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN11_Msk)      /*!< [MCLK Group 1]Timer24        \hideinitializer */
#define TIMER23_MODULE      (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN10_Msk)      /*!< [MCLK Group 1]Timer23        \hideinitializer */
#define TIMER22_MODULE      (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN9_Msk)       /*!< [MCLK Group 1]Timer22        \hideinitializer */
#define TIMER21_MODULE      (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN8_Msk)       /*!< [MCLK Group 1]Timer21        \hideinitializer */
#define TIMER20_MODULE      (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN7_Msk)       /*!< [MCLK Group 1]Timer20        \hideinitializer */
#define TIMER12_13_MODULE   (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN6_Msk)       /*!< [MCLK Group 1]Timer12, 13    \hideinitializer */
#define TIMER10_11_MODULE   (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN5_Msk)       /*!< [MCLK Group 1]Timer10, 11    \hideinitializer */
#define TIMER8_9_MODULE     (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN4_Msk)       /*!< [MCLK Group 1]Timer8, 9      \hideinitializer */
#define TIMER6_7_MODULE     (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN3_Msk)       /*!< [MCLK Group 1]Timer6, 7      \hideinitializer */
#define TIMER4_5_MODULE     (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN2_Msk)       /*!< [MCLK Group 1]Timer4, 5      \hideinitializer */
#define TIMER2_3_MODULE     (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN1_Msk)       /*!< [MCLK Group 1]Timer2, 3      \hideinitializer */
#define TIMER0_1_MODULE     (MODULE_GRP1_Msk | CLK_CHIPPERICKEN1_PECKEN0_Msk)       /*!< [MCLK Group 1]Timer0, 1      \hideinitializer */

/* CLK->CHIPPERICKEN2 */
#define SMBUS1_MODULE       (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN14_Msk)      /*!< [MCLK Group 2]SMBus I/F 1    \hideinitializer */
#define SIF7_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN11_Msk)      /*!< [MCLK Group 2]SerialI/F 7    \hideinitializer */
#define SIF6_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN10_Msk)      /*!< [MCLK Group 2]SerialI/F 6    \hideinitializer */
#define SIF5_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN9_Msk)       /*!< [MCLK Group 2]SerialI/F 5    \hideinitializer */
#define SIF4_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN8_Msk)       /*!< [MCLK Group 2]SerialI/F 4    \hideinitializer */
#define SIF3_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN7_Msk)       /*!< [MCLK Group 2]SerialI/F 3    \hideinitializer */
#define SIF2_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN6_Msk)       /*!< [MCLK Group 2]SerialI/F 2    \hideinitializer */
#define SIF1_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN5_Msk)       /*!< [MCLK Group 2]SerialI/F 1    \hideinitializer */
#define SIF0_MODULE         (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN4_Msk)       /*!< [MCLK Group 2]SerialI/F 0    \hideinitializer */
#define MFA_DAC_MODULE      (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN3_Msk)       /*!< [MCLK Group 2]MFA            \hideinitializer */
#define AD2_MODULE          (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN2_Msk)       /*!< [MCLK Group 2]ADC 2          \hideinitializer */
#define AD1_MODULE          (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN1_Msk)       /*!< [MCLK Group 2]ADC 1          \hideinitializer */
#define AD0_MODULE          (MODULE_GRP2_Msk | CLK_CHIPPERICKEN2_PECKEN0_Msk)       /*!< [MCLK Group 2]ADC 0          \hideinitializer */

/*---------------------------------------------------------------*/
/* DEEPSLEEP mode configuration definition                       */
/*---------------------------------------------------------------*/
/* BASECLK setting in DEEPSLEEP */
#define CLK_DSLEEP_BASECLK_OFF      (0U << CLK_CHIPDSLEEPMD_BCKEN_Pos)       /*!< BASECLK stop in DEEPSLEEP   \hideinitializer */
#define CLK_DSLEEP_BASECLK_ON       (1U << CLK_CHIPDSLEEPMD_BCKEN_Pos)       /*!< BASECLK active in DEEPSLEEP \hideinitializer */

/* HXOCLK and PLLCLK setting in DEEPSLEEP */
#define CLK_DSLEEP_HXO_AND_PLL_OFF  ((0U << CLK_CHIPDSLEEPMD_PLLEN_Pos) | (0U << CLK_CHIPDSLEEPMD_HXOEN_Pos))   /*!< HXOCLK and PLLCLK stop in DEEPSLEEP        \hideinitializer */
#define CLK_DSLEEP_HXO_ON_PLL_OFF   ((0U << CLK_CHIPDSLEEPMD_PLLEN_Pos) | (1U << CLK_CHIPDSLEEPMD_HXOEN_Pos))   /*!< HXOCLK stop and PLLCLK active in DEEPSLEEP \hideinitializer */
#define CLK_DSLEEP_HXO_AND_PLL_ON   ((1U << CLK_CHIPDSLEEPMD_PLLEN_Pos) | (1U << CLK_CHIPDSLEEPMD_HXOEN_Pos))   /*!< HXOCLK and PLLCLK active in DEEPSLEEP      \hideinitializer */

/*---------------------------------------------------------------*/
/* BASECLK monitor definition                                    */
/*---------------------------------------------------------------*/
#define CLK_BASEST_HRCCLK       (0x1U << CLK_CHIPCKSTAT_BASEST_Pos)                 /*!< HXOCLK active in DEEPSLEEP \hideinitializer */
#define CLK_BASEST_HXOCLK       (0x2U << CLK_CHIPCKSTAT_BASEST_Pos)                 /*!< HXOCLK active in DEEPSLEEP \hideinitializer */
#define CLK_BASEST_PLLCLK       (0x4U << CLK_CHIPCKSTAT_BASEST_Pos)                 /*!< HXOCLK active in DEEPSLEEP \hideinitializer */

#define CLK_SYSTICK_CLK_CPU         (0x0U)              /*!< Use Processor clock         \hideinitializer */
#define CLK_SYSTICK_CLK_HXO_DIV128  (0x1U)              /*!< Use External clock(HXO/128) \hideinitializer */

/* Declare these inline functions here to avoid MISRA C 2004 rule 8.1 error */
__STATIC_INLINE void CLK_SysTickDelay(uint32_t us);

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
uint32_t CLK_SetIOCLK(uint32_t u32div);
void CLK_DisableModuleClock(uint32_t u32module);
void CLK_EnableModuleClock(uint32_t u32module);
void CLK_Sleep(void);
void CLK_DeepSleep(uint32_t u32BaseClk, uint32_t u32HxoAndPllClk);
uint32_t CLK_GetCPUFreq(void);
uint32_t CLK_GetIOCLK(void);
uint32_t CLK_GetPLLClockFreq(void);
uint32_t CLK_WaitClockReady(uint32_t u32ClkMask);
void CLK_EnableSysTick(uint32_t u32ClkSrc, uint32_t u32Count);
void CLK_DisableSysTick(void);

/*@}*/ /* end of group CLK_EXPORTED_FUNCTIONS */

/*@}*/ /* end of group CLK_Driver */

/*@}*/ /* end of group Standard_Driver */


#ifdef __cplusplus
}
#endif

#endif  /* __CLK_H__ */

/*** (C) COPYRIGHT 2021 Nuvoton Technology Corp. Japan ***/
