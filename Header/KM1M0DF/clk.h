/**************************************************************************//**
 * @file     clk.h
 * @version  V1.00
 * @brief    KM1M0DF series CLK Driver Header File
 *
 * SPDX-License-Identifier: Apache-2.0
 * @copyright (C) 2023 Nuvoton Technology Corp. Japan All rights reserved.
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

#define CLK_FREQ_20MHZ         20000000U                                                /*!< Define frequency macro  20MHz  \hideinitializer */
#define CLK_FREQ_40MHZ         40000000U                                                /*!< Define frequency macro  40MHz  \hideinitializer */
#define CLK_FREQ_48MHZ         48000000U                                                /*!< Define frequency macro  48MHz  \hideinitializer */

/*---------------------------------------------------------------*/
/* Structure Definition                                          */
/*---------------------------------------------------------------*/
typedef struct
{
    uint32_t u32PllMultiply;  /* PLL multiplier value */
    uint32_t u32PllOutDiv;    /* PLL output division ratio */
    uint32_t u32PllInDiv;     /* PLL input division ratio */
    uint32_t u32DiffMin;      /* minimum diffevence */

} CLK_PLL_PARAM;


/*---------------------------------------------------------------*/
/* PLL clock-configuration definition                            */
/*---------------------------------------------------------------*/

#define CLK_NPLLEN_ON             (0x0U << CLK_PLLCTR1_NPLLEN_Pos)                    /*!< Enable PLL function \hideinitializer */
#define CLK_NPLLEN_OFF            (0x1U << CLK_PLLCTR1_NPLLEN_Pos)                    /*!< Disable PLL function \hideinitializer */


/*---------------------------------------------------------------------------------------------------------*/
/*  PLLCTR2 constant definitions.                                                                          */
/*---------------------------------------------------------------------------------------------------------*/
/* output PLL clock divider */
#define CLK_PLLODIV_4             (0x0UL << CLK_PLLCTR2_PLLODIV_Pos)                  /*!< Divide 1/4 \hideinitializer */
#define CLK_PLLODIV_6             (0x1UL << CLK_PLLCTR2_PLLODIV_Pos)                  /*!< Divide 1/6 \hideinitializer */
#define CLK_OUTPUT_DIV_4          (4U)                                                /*!< PLL Output Divide 1/4 \hideinitializer */
#define CLK_OUTPUT_DIV_6          (6U)                                                /*!< PLL Output Divide 1/6 \hideinitializer */

/* input PLL clock divider */
#define CLK_PLLIDIV_SEL           (0x5UL)                                             /*!< Divide Selection \hideinitializer */
#define CLK_PLLIDIV_1             (0x0UL << CLK_PLLCTR2_PLLIDIV_Pos)                  /*!< Divide 1/1 \hideinitializer */
#define CLK_PLLIDIV_2             (0x1UL << CLK_PLLCTR2_PLLIDIV_Pos)                  /*!< Divide 1/2 \hideinitializer */
#define CLK_PLLIDIV_3             (0x2UL << CLK_PLLCTR2_PLLIDIV_Pos)                  /*!< Divide 1/3 \hideinitializer */
#define CLK_PLLIDIV_4             (0x3UL << CLK_PLLCTR2_PLLIDIV_Pos)                  /*!< Divide 1/4 \hideinitializer */
#define CLK_PLLIDIV_5             (0x4UL << CLK_PLLCTR2_PLLIDIV_Pos)                  /*!< Divide 1/5 \hideinitializer */

/* PLL Multiply configuration */
#define CLK_MUL_PLL_32            (0x20U << CLK_PLLCTR2_MUL_PLL_Pos)                  /*!< PLL Multiply 32 \hideinitializer */
#define CLK_MUL_PLL_40            (0x28U << CLK_PLLCTR2_MUL_PLL_Pos)                  /*!< PLL Multiply 40 \hideinitializer */
#define CLK_MUL_PLL_64            (0x40U << CLK_PLLCTR2_MUL_PLL_Pos)                  /*!< PLL Multiply 64 \hideinitializer */

/*PLLSRC*/
#define CLK_PLLSRC_HRCCLK         (0x00U << CLK_PLLCTR2_PLLISEL_Pos)                  /*!< Internal high-speed oscillation clock (HRCCLK) \hideinitializer */
#define CLK_PLLSRC_HXOCLK         (0x01U << CLK_PLLCTR2_PLLISEL_Pos)                  /*!< External high-speed oscillation clock (HXOCLK) \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  CPUCKCTR constant definitions.                                                                         */
/*---------------------------------------------------------------------------------------------------------*/

/* SYSCLK clock divider */
#define CLK_SYSDIV_1              (0x0UL << CLK_CPUCKCTR_SYSDIV_Pos)                  /*!< Divide 1    \hideinitializer */
#define CLK_SYSDIV_2              (0x1UL << CLK_CPUCKCTR_SYSDIV_Pos)                  /*!< Divide 1/2  \hideinitializer */
#define CLK_SYSDIV_4              (0x2UL << CLK_CPUCKCTR_SYSDIV_Pos)                  /*!< Divide 1/4  \hideinitializer */
#define CLK_SYSDIV_8              (0x3UL << CLK_CPUCKCTR_SYSDIV_Pos)                  /*!< Divide 1/8  \hideinitializer */
#define CLK_SYSDIV_16             (0x4UL << CLK_CPUCKCTR_SYSDIV_Pos)                  /*!< Divide 1/16 \hideinitializer */

/* CPUCLK clock divider */
#define CLK_CPUCKDIV_1            (0x0UL << CLK_CPUCKCTR_CPUCKDIV_Pos)                /*!< Divide 1/1   \hideinitializer */
#define CLK_CPUCKDIV_2            (0x1UL << CLK_CPUCKCTR_CPUCKDIV_Pos)                /*!< Divide 1/2   \hideinitializer */
#define CLK_CPUCKDIV_4            (0x2UL << CLK_CPUCKCTR_CPUCKDIV_Pos)                /*!< Divide 1/4   \hideinitializer */
#define CLK_CPUCKDIV_8            (0x3UL << CLK_CPUCKCTR_CPUCKDIV_Pos)                /*!< Divide 1/8   \hideinitializer */
#define CLK_CPUCKDIV_16           (0x4UL << CLK_CPUCKCTR_CPUCKDIV_Pos)                /*!< Divide 1/16  \hideinitializer */
#define CLK_CPUCKDIV_32           (0x5UL << CLK_CPUCKCTR_CPUCKDIV_Pos)                /*!< Divide 1/32  \hideinitializer */
#define CLK_CPUCKDIV_64           (0x6UL << CLK_CPUCKCTR_CPUCKDIV_Pos)                /*!< Divide 1/64  \hideinitializer */
#define CLK_CPUCKDIV_128          (0x7UL << CLK_CPUCKCTR_CPUCKDIV_Pos)                /*!< Divide 1/128 \hideinitializer */


/*---------------------------------------------------------------------------------------------------------*/
/*  CKSEL constant definitions.                                                                            */
/*---------------------------------------------------------------------------------------------------------*/
#define CLK_SYSCLKSEL_HRCCLK      (0x00UL << CLK_CKSEL_SYSCLKSEL_Pos)                 /*!< Setting SYSCLK clock source as HRC output  \hideinitializer */
#define CLK_SYSCLKSEL_HXOCLK      (0x01UL << CLK_CKSEL_SYSCLKSEL_Pos)                 /*!< Setting SYSCLK clock source as HXO output  \hideinitializer */
#define CLK_SYSCLKSEL_LRCCLK      (0x02UL << CLK_CKSEL_SYSCLKSEL_Pos)                 /*!< Setting SYSCLK clock source as LRC output  \hideinitializer */
#define CLK_SYSCLKSEL_LXOCLK      (0x03UL << CLK_CKSEL_SYSCLKSEL_Pos)                 /*!< Setting SYSCLK clock source as LXO output  \hideinitializer */
#define CLK_SYSCLKSEL_PLLCLK      (0x04UL << CLK_CKSEL_SYSCLKSEL_Pos)                 /*!< Setting SYSCLK clock source as PLL output  \hideinitializer */

#define CLK_HPCLKSEL_HRCCLK       (0x00UL << CLK_CKSEL_HPCLKSEL_Pos)                  /*!< Setting HPCLK clock source as HRC output  \hideinitializer */
#define CLK_HPCLKSEL_HXOCLK       (0x01UL << CLK_CKSEL_HPCLKSEL_Pos)                  /*!< Setting HPCLK clock source as HXO output  \hideinitializer */
#define CLK_HPCLKSEL_PLLCLK       (0x02UL << CLK_CKSEL_HPCLKSEL_Pos)                  /*!< Setting HPCLK clock source as PLL output  \hideinitializer */

#define CLK_LPCLKSEL_LRCCLK       (0x00UL << CLK_CKSEL_LPCKSEL_Pos)                   /*!< Setting LPCLK clock source as LRC output  \hideinitializer */
#define CLK_LPCLKSEL_LXOCLK       (0x01UL << CLK_CKSEL_LPCKSEL_Pos)                   /*!< Setting LPCLK clock source as LXO output  \hideinitializer */


#define CLK_SYSTICK_CLK_CPU       (0xFFU)                                             /*!< Use Processor clock  \hideinitializer */
#define CLK_SYSTICK_CLK_LPCLK     (0x0U)                                              /*!< Use External clock(LPCLK) \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  CKCTR constant definitions.                                                                            */
/*---------------------------------------------------------------------------------------------------------*/
#define CLK_HRCCLK_ON             (CLK_CKCTR_HRCEN_Msk)                               /*!< HRCCLK ON   \hideinitializer */
#define CLK_HXOCLK_ON             (CLK_CKCTR_HXOEN_Msk)                               /*!< HXOCLK ON   \hideinitializer */
#define CLK_LXOCLK_ON             (CLK_CKCTR_LXOEN_Msk)                               /*!< LXOCLK ON   \hideinitializer */
/*---------------------------------------------------------------*/
/* Peripheral Module clock-gating(MCLK) selection                */
/*---------------------------------------------------------------*/
/* MCLK Group */
#define MODULE_GRP0_MSK           (0x00010000UL)                                      /*!< Select of Peripheral Module Group 0 \hideinitializer */
#define MODULE_GRP1_MSK           (0x00020000UL)                                      /*!< Select of Peripheral Module Group 1 \hideinitializer */

#define MODULE_MSK                (0x0000FFFFUL)                                      /*!< Select module mask bit \hideinitializer */

/* CLK->PERICKEN0 */
#define DMA1_MODULE               (MODULE_GRP0_MSK | CLK_PERICKEN0_PECKEN11_Msk)      /*!< [MCLK Group 0]DMA1                    \hideinitializer */
#define DMA0_MODULE               (MODULE_GRP0_MSK | CLK_PERICKEN0_PECKEN10_Msk)      /*!< [MCLK Group 0]DMA0                    \hideinitializer */
#define PWM_MODULE                (MODULE_GRP0_MSK | CLK_PERICKEN0_PECKEN9_Msk)       /*!< [MCLK Group 0]PWM                     \hideinitializer */
#define RTC_MODULE                (MODULE_GRP0_MSK | CLK_PERICKEN0_PECKEN8_Msk)       /*!< [MCLK Group 0]RTC                     \hideinitializer */
#define BUZ_MODULE                (MODULE_GRP0_MSK | CLK_PERICKEN0_PECKEN7_Msk)       /*!< [MCLK Group 0]Buzzer                  \hideinitializer */
#define TIMER15_MODULE            (MODULE_GRP0_MSK | CLK_PERICKEN0_PECKEN6_Msk)       /*!< [MCLK Group 0]Timer15                 \hideinitializer */
#define TIMER13_14_MODULE         (MODULE_GRP0_MSK | CLK_PERICKEN0_PECKEN5_Msk)       /*!< [MCLK Group 0]Timer13 and Timer14     \hideinitializer */
#define TIMER11_12_MODULE         (MODULE_GRP0_MSK | CLK_PERICKEN0_PECKEN4_Msk)       /*!< [MCLK Group 0]Timer11 and Timer12     \hideinitializer */
#define TIMER9_10_MODULE          (MODULE_GRP0_MSK | CLK_PERICKEN0_PECKEN3_Msk)       /*!< [MCLK Group 0]Timer9 and Timer10      \hideinitializer */
#define TIMER7_8_MODULE           (MODULE_GRP0_MSK | CLK_PERICKEN0_PECKEN2_Msk)       /*!< [MCLK Group 0]Timer7 and Timer8       \hideinitializer */
#define TIMER_8BITL_MODULE        (MODULE_GRP0_MSK | CLK_PERICKEN0_PECKEN1_Msk)       /*!< [MCLK Group 0]8-bit Simple Timer      \hideinitializer */
#define TIMER_8BIT_MODULE         (MODULE_GRP0_MSK | CLK_PERICKEN0_PECKEN0_Msk)       /*!< [MCLK Group 0]8-bit Timer             \hideinitializer */


/* CLK->PERICKEN1 */
#define SIF8_MODULE               (MODULE_GRP1_MSK | CLK_PERICKEN1_PECKEN11_Msk)      /*!< [MCLK Group 1]Serial 8                 \hideinitializer */
#define SIF7_MODULE               (MODULE_GRP1_MSK | CLK_PERICKEN1_PECKEN10_Msk)      /*!< [MCLK Group 1]Serial 7                 \hideinitializer */
#define SIF6_MODULE               (MODULE_GRP1_MSK | CLK_PERICKEN1_PECKEN9_Msk)       /*!< [MCLK Group 1]Serial 6                 \hideinitializer */
#define SIF5_MODULE               (MODULE_GRP1_MSK | CLK_PERICKEN1_PECKEN8_Msk)       /*!< [MCLK Group 1]Serial 5                 \hideinitializer */
#define SIF4_MODULE               (MODULE_GRP1_MSK | CLK_PERICKEN1_PECKEN7_Msk)       /*!< [MCLK Group 1]Serial 4                 \hideinitializer */
#define SIF3_MODULE               (MODULE_GRP1_MSK | CLK_PERICKEN1_PECKEN6_Msk)       /*!< [MCLK Group 1]Serial 3                 \hideinitializer */
#define SIF2_MODULE               (MODULE_GRP1_MSK | CLK_PERICKEN1_PECKEN5_Msk)       /*!< [MCLK Group 1]Serial 2                 \hideinitializer */
#define SIF1_MODULE               (MODULE_GRP1_MSK | CLK_PERICKEN1_PECKEN4_Msk)       /*!< [MCLK Group 1]Serial 1                 \hideinitializer */
#define SIF0_MODULE               (MODULE_GRP1_MSK | CLK_PERICKEN1_PECKEN3_Msk)       /*!< [MCLK Group 1]Serial 0                 \hideinitializer */
#define ADC_MODULE                (MODULE_GRP1_MSK | CLK_PERICKEN1_PECKEN2_Msk)       /*!< [MCLK Group 1]ADC                      \hideinitializer */
#define CRC_MODULE                (MODULE_GRP1_MSK | CLK_PERICKEN1_PECKEN1_Msk)       /*!< [MCLK Group 1]CRC                      \hideinitializer */
#define NF_MODULE                 (MODULE_GRP1_MSK | CLK_PERICKEN1_PECKEN0_Msk)       /*!< [MCLK Group 1]Noise Filter             \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  DSLEEPMD constant definitions.                                                                         */
/*---------------------------------------------------------------------------------------------------------*/
/* SYSCLK setting in DEEPSLEEP */
#define CLK_DSLEEP_SYSCLK_OFF     (0U << CLK_DSLEEPMD_SYSEN_Pos)                      /*!< SYSCLK stop in DEEPSLEEP   \hideinitializer */
#define CLK_DSLEEP_SYSCLK_ON      (1U << CLK_DSLEEPMD_SYSEN_Pos)                      /*!< SYSCLK active in DEEPSLEEP \hideinitializer */

/* HXOCLK setting in DEEPSLEEP */
#define CLK_DSLEEP_HXOCLK_OFF     (0U << CLK_DSLEEPMD_HXOEN_Pos)                      /*!< HXOCLK stop in DEEPSLEEP   \hideinitializer */
#define CLK_DSLEEP_HXOCLK_ON      (1U << CLK_DSLEEPMD_HXOEN_Pos)                      /*!< HXOCLK active in DEEPSLEEP \hideinitializer */

/* HRCCLK setting in DEEPSLEEP */
#define CLK_DSLEEP_HRCCLK_OFF     (0U << CLK_DSLEEPMD_HRCEN_Pos)                      /*!< HRCCLK stop in DEEPSLEEP   \hideinitializer */
#define CLK_DSLEEP_HRCCLK_ON      (1U << CLK_DSLEEPMD_HRCEN_Pos)                      /*!< HRCCLK active in DEEPSLEEP \hideinitializer */

/* LXOCLK setting in DEEPSLEEP */
#define CLK_DSLEEP_LXOCLK_OFF     (0U << CLK_DSLEEPMD_LXOEN_Pos)                      /*!< LXOCLK stop in DEEPSLEEP   \hideinitializer */
#define CLK_DSLEEP_LXOCLK_ON      (1U << CLK_DSLEEPMD_LXOEN_Pos)                      /*!< LXOCLK active in DEEPSLEEP \hideinitializer */

/* LRCCLK setting in DEEPSLEEP */
#define CLK_DSLEEP_LRCCLK_OFF     (0U << CLK_DSLEEPMD_LRCEN_Pos)                      /*!< LRCCLK stop in DEEPSLEEP   \hideinitializer */
#define CLK_DSLEEP_LRCCLK_ON      (1U << CLK_DSLEEPMD_LRCEN_Pos)                      /*!< LRCCLK active in DEEPSLEEP \hideinitializer */

/* PLLCLK setting in DEEPSLEEP */
#define CLK_DSLEEP_PLLCLK_OFF     (0U << CLK_DSLEEPMD_PLLEN_Pos)                      /*!< PLLCLK stop in DEEPSLEEP   \hideinitializer */
#define CLK_DSLEEP_PLLCLK_ON      (1U << CLK_DSLEEPMD_PLLEN_Pos)                      /*!< PLLCLK active in DEEPSLEEP \hideinitializer */

/*---------------------------------------------------------------*/
/* CLK monitor definition                                        */
/*---------------------------------------------------------------*/
#define CLK_STABLE_HRCCLK         (CLK_CKSTAT_HRCOK_Msk)                              /*!< HRCCLK stabilization status \hideinitializer */
#define CLK_STABLE_LRCCLK         (CLK_CKSTAT_LRCOK_Msk)                              /*!< LRCCLK stabilization status \hideinitializer */

/*---------------------------------------------------------------*/
/* SYSCLK monitor definition                                     */
/*---------------------------------------------------------------*/
#define CLK_LPCLKST_LRCCLK        (0X01U << CLK_CKSTAT_LPCLKST_Pos)                  /*!< LRCCLK operation status      \hideinitializer */
#define CLK_LPCLKST_LXOCLK        (0X02U << CLK_CKSTAT_LPCLKST_Pos)                  /*!< LXOCLK operation status      \hideinitializer */
#define CLK_HPCLKST_HRCCLK        (0X01U << CLK_CKSTAT_HPCLKST_Pos)                  /*!< HRCCLK operation status      \hideinitializer */
#define CLK_HPCLKST_HXOCLK        (0X02U << CLK_CKSTAT_HPCLKST_Pos)                  /*!< HXOCLK operation status      \hideinitializer */
#define CLK_HPCLKST_PLLCLK        (0X04U << CLK_CKSTAT_HPCLKST_Pos)                  /*!< PLLCLK operation status      \hideinitializer */

#define CLK_SYSCLKST_HRCCLK       (0x01U << CLK_CKSTAT_SYSCLKST_Pos)                 /*!< HRCCLK operation status     \hideinitializer */
#define CLK_SYSCLKST_HXOCLK       (0x02U << CLK_CKSTAT_SYSCLKST_Pos)                 /*!< HXOCLK operation status     \hideinitializer */
#define CLK_SYSCLKST_LRCCLK       (0x04U << CLK_CKSTAT_SYSCLKST_Pos)                 /*!< LRCCLK operation status     \hideinitializer */
#define CLK_SYSCLKST_LXOCLK       (0x08U << CLK_CKSTAT_SYSCLKST_Pos)                 /*!< LXOCLK operation status     \hideinitializer */
#define CLK_SYSCLKST_PLLCLK       (0x10U << CLK_CKSTAT_SYSCLKST_Pos)                 /*!< PLLCLK operation status     \hideinitializer */

/*@}*/ /* end of group CLK_EXPORTED_CONSTANTS */


/** @addtogroup CLK_EXPORTED_FUNCTIONS CLK Exported Functions
  @{
*/

/* Declare these inline functions here to avoid MISRA C 2004 rule 8.1 error */
__STATIC_INLINE uint32_t CLK_IsHRCEnable(void);
__STATIC_INLINE uint32_t CLK_IsHXOEnable(void);
__STATIC_INLINE uint32_t CLK_IsPLLEnable(void);
__STATIC_INLINE uint32_t CLK_IsHRCStability(void);
__STATIC_INLINE void CLK_SysTickDelay(uint32_t us);
__STATIC_INLINE uint32_t CLK_IsLRCStability(void);
__STATIC_INLINE uint32_t CLK_IsLXOEnable(void);
/**
  * @brief      Check the state of internal high-speed oscillation (HRC).
  * @param      None
  * @return     Internal oscillation (HRC) state
  *             - 1 : Oscillation is enable.
  *             - 0 : Oscillation is disable.
  * @details    This function get the state of internal high-speed oscillation (HRC).
  */
__STATIC_INLINE uint32_t CLK_IsHRCEnable(void)
{
    return (((CLK->CKCTR & CLK_CKCTR_HRCEN_Msk) == CLK_CKCTR_HRCEN_Msk) ? 1U : 0U);
}

/**
  * @brief      Check the state of external high-speed oscillation (HXO).
  * @param      None
  * @return     External oscillation (HXO) state
  *             - 1 : Oscillation is enable.
  *             - 0 : Oscillation is disable.
  * @details    This function get the state of external high-speed oscillation (HXO).
  */
__STATIC_INLINE uint32_t CLK_IsHXOEnable(void)
{
    return (((CLK->CKCTR & CLK_CKCTR_HXOEN_Msk) == CLK_CKCTR_HXOEN_Msk) ? 1U : 0U);
}

/**
  * @brief      Check the state of PLL function.
  * @param      None
  * @return     PLL function state
  * @retval     - 1 : PLL is enable.
  * @retval     - 0 : PLL is disable.
  * @details    This function get the state of PLL function.
  */
__STATIC_INLINE uint32_t CLK_IsPLLEnable(void)
{
    return (((CLK->PLLCTR1 & CLK_PLLCTR1_NPLLEN_Msk) == CLK_PLLCTR1_NPLLEN_Msk) ? 0U : 1U);
}

/**
  * @brief      Check the state of internal high-speed oscillation (HRC).
  * @param      None
  * @return     Internal oscillation (HRC) state
  * @retval     - 1 : Oscillation is stable.
  * @retval     - 0 : Oscillation is not stable.
  * @details    This function get the state of internal high-speed oscillation (HRC).
  */
__STATIC_INLINE uint32_t CLK_IsHRCStability(void)
{
    return (((CLK->CKSTAT & CLK_CKSTAT_HRCOK_Msk) == CLK_CKSTAT_HRCOK_Msk) ? 1U : 0U);
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
        ;
    }

    /* Disable SysTick counter */
    SysTick->CTRL = 0U;
}

/**
  * @brief      Check the state of internal low-speed oscillation (LRC).
  * @param      None
  * @return     Internal oscillation (LRC) state
  * @retval     - 1 : Oscillation is stable.
  * @retval     - 0 : Oscillation is not stable.
  * @details    This function get the state of internal low-speed oscillation (LRC).
  */
__STATIC_INLINE uint32_t CLK_IsLRCStability(void)
{
    return (((CLK->CKSTAT & CLK_CKSTAT_LRCOK_Msk) == CLK_CKSTAT_LRCOK_Msk) ? 1U : 0U);
}

/**
  * @brief      Check the state of external low-speed oscillation (LXO).
  * @param      None
  * @return     External oscillation (LXO) state
  * @retval     - 1 : Oscillation is enable.
  * @retval     - 0 : Oscillation is disable.
  * @details    This function get the state of external low-speed oscillation (LXO).
  */
__STATIC_INLINE uint32_t CLK_IsLXOEnable(void)
{
    return (((CLK->CKCTR & CLK_CKCTR_LXOEN_Msk) == CLK_CKCTR_LXOEN_Msk) ? 1U : 0U);
}

/*-----------------------------*/
/* BSP API function prototypes */
/*-----------------------------*/
void CLK_DisablePLL(void);
uint32_t CLK_EnablePLL(uint32_t u32PllClkSrc, uint32_t u32PllFreq);
void CLK_DisableHXO(void);
void CLK_EnableHXO(void);
uint32_t CLK_SetCoreClock(uint32_t u32CPUclk);
void CLK_SetCPUCLK(uint32_t u32ClkSrc, uint32_t u32SysClkDiv, uint32_t u32CPUClkDiv);
void CLK_DisableModuleClock(uint32_t u32Module);
void CLK_EnableModuleClock(uint32_t u32Module);
void CLK_Sleep(void);
void CLK_DeepSleep(uint32_t u32SysClk, uint32_t u32HxoClk, uint32_t u32HrcClk, uint32_t u32LxoClk, uint32_t u32LrcClk, uint32_t u32PllClk);
uint32_t CLK_GetCPUFreq(void);
uint32_t CLK_GetPLLClockFreq(void);
uint32_t CLK_WaitClockReady(uint32_t u32ClkMask);
uint32_t CLK_WaitSYSClockChange(uint32_t u32ClkSrc);
void CLK_EnableSysTick(uint32_t u32ClkSrc, uint32_t u32Count);
void CLK_DisableSysTick(void);
void CLK_EnableHRC(void);
void CLK_DisableHRC(void);
void CLK_EnableLXO(void);
void CLK_DisableLXO(void);
void CLK_EnableHXODrive(void);
void CLK_DisableHXODrive(void);
void CLK_EnableLXODrive(void);
void CLK_DisableLXODrive(void);
void CLK_SetHPCLK(uint32_t u32ClkSel);
void CLK_SetLPCLK(uint32_t u32ClkSel);
void CLK_SetSYSCLK(uint32_t u32ClkSel, uint32_t u32ClkDiv);
uint32_t CLK_GetSYSFreq(void);
uint32_t CLK_GetHPFreq(void);
uint32_t CLK_GetLPFreq(void);
void CLK_EnableActivePowerDown(void);
void CLK_DisableActivePowerDown(void);
void CLK_EnableStandbyPowerDown(void);
void CLK_DisableStandbyPowerDown(void);

/*@}*/ /* end of group CLK_EXPORTED_FUNCTIONS */

/*@}*/ /* end of group CLK_Driver */

/*@}*/ /* end of group Standard_Driver */


#endif  /* __CLK_H__ */

/*** (C) COPYRIGHT 2023 Nuvoton Technology Corp. Japan ***/