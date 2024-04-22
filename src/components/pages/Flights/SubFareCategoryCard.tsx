import React from "react"
import { useRouter } from "next/navigation"
import { Subcategory } from "@/src/utils/types/flightsDataType"
import { Card, Button } from '@mantine/core';
import styles from "./subFareCategory.module.scss"


export interface SubFareCategoryCardProps {
  isDiscountApplied: boolean
  flightData: Subcategory
}

const SubFareCategoryCard: React.FC<SubFareCategoryCardProps> = ({
  isDiscountApplied,
  flightData,
}) => {
  const router = useRouter()
  const flightResultHandler = (flightData: Subcategory) => () => {
    const { status, price } = flightData
    const { amount, currency } = price
    localStorage.setItem(
      "flightInfo",
      JSON.stringify({ status, amount, currency })
    )
    router.push("/ucak-bileti/ucus-sonuc")
  }
  return (
    <Card className={styles.subFareCategory}>
      <Card.Section className={styles.subFareCategoryCard}>
        <div className={styles.subFareCategoryCardHeaderContainer}>
          <h1 className={styles.subFareCategoryCardHeader}>{flightData.brandCode}</h1>
          <div className={styles.flex}>
            <h2 className={styles.subFareCategoryCardCurrencyHeader}>{flightData.price.currency}</h2>
            <h3>{
							isDiscountApplied && flightData.brandCode === "Eco Fly" ? flightData.price.amount * 0.5 :
						flightData.price.amount} </h3>
          </div>
        </div>
      </Card.Section>
      <Card.Section className={styles.subFareCategoryCardBody}>
        {flightData.rights.map((text: string, i: number) => (
          <div className={styles.flightOptions} key={i}>
            <p className={styles.optionText}>{text}</p>
          </div>
        ))}
      </Card.Section>
      <Card.Section className={styles.subFareCategoryCardFooter}>
        <Button
          color="red"
          disabled={isDiscountApplied && flightData.brandCode !== "Eco Fly"}
          className={styles.subFareCategoryCardFooterButton}
          onClick={flightResultHandler(flightData)}
          size="md"
        >
          Uçuşu Seç
        </Button>
      </Card.Section>
    </Card>
  )
}

export default SubFareCategoryCard
