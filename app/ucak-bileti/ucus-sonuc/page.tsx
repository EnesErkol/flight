"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/src/layouts/Header/Header"
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@mantine/core"
import styles from "./filgihtResult.module.scss"

interface flightStatusProps {
  status: string
  amount: number
  currency: string
}

const FlightResultPage: React.FC = () => {
  const router = useRouter()
  const [flightStatus, setFlightStatus] = useState<flightStatusProps | null>(
    null
  )

  const handleGoBack = () => {
    router.push("/")
    //router.push("/ucak-bileti/ucuslar") // this is for the flight selection page
  }

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const flightInfo = localStorage.getItem("flightInfo")
      if (flightInfo) {
        setFlightStatus(JSON.parse(flightInfo))
      }
    }
  }, [])
  return (
    <div className={styles.flex1}>
      <div className={styles.headerContainer}>
        <Header headerTextColor="#5E5E5E" borderStyle="1px solid #818181" />
      </div>
      {!flightStatus ? (
        <div className={styles.loadingContainer}>
          Yükleniyor...
        </div>
      ) : flightStatus?.status === "AVAILABLE" ? (
        <div className={styles.availableContainer}>
          <div className={styles.contentWrapper}>
            <div className={styles.borderedSection}>
              <FontAwesomeIcon icon={faCheck} className={styles.successIcon} data-testid="success-icon"/>
              <p className={styles.sectionTitle}>Kabin seçiminiz tamamlandı.</p>
            </div>
            <div className={styles.priceInfoContainer}>
              <h1 className={styles.sectionDescription}>Toplam tutar</h1>
              <h2 className={styles.totalAmount}>
                {flightStatus.currency} {flightStatus.amount}
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.availableContainer}>
          <div className={styles.contentWrapper}>
            <div className={styles.borderedSection}>
              <FontAwesomeIcon icon={faXmark} className={styles.errorIcon} data-testid="error-icon" />
              <p className={styles.sectionTitle}>
                Kabin seçiminiz tamamlanamadı.
              </p>
            </div>
            <div className={styles.goBackButtonContainer}>
              <Button data-testid="goBackBtn" className={styles.goBackButton} color="red" onClick={handleGoBack}>
                Başa Dön
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FlightResultPage
