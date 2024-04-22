"use client";
import { Flight } from "@/src/utils/constants/flights";
import { Switch } from "@mantine/core";
import { useLayoutEffect, useMemo, useState } from "react";
import styles from "./page.module.scss";
import FlightCard from "@/src/components/pages/Flights/FlightCard";
import { FareCategories } from "@/src/utils/enums";
import { Button } from "@mantine/core";
import Header from '@/src/layouts/Header/Header';

export default function Flights() {
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [filter, setFilter] = useState<
  // todo: enum'a çek
    "DEFAULT" | "SORT_BY_PRICE" | "SORT_BY_TIME"
  >("DEFAULT");

  const [selectedFlightId, setSelectedFlightId] = useState<string | null>(null);
  const [selectedFareCategory, setSelectedFareCategory] =
    useState<null | FareCategories>(null);
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  useLayoutEffect(() => {
    const flights = JSON.parse(localStorage.getItem("availableFlights")!);
    const passengerCount = parseInt(localStorage.getItem("passengerCount")!);
    if (Array.isArray(flights) && flights.length > 0) {
      setPassengerCount(passengerCount);
      setFlights(flights);
    }
  }, []);

  const filteredFlights = useMemo(() => {
    if (!Array.isArray(flights) || flights.length === 0) return [];

    switch (filter) {
      case "SORT_BY_PRICE":
        return flights.slice().sort((flight1, flight2) => {
          const price1 =
            flight1.fareCategories.ECONOMY.subcategories.find(
              (category: any) => category.brandCode === "Eco Fly"
            )?.price.amount ?? 0;

          const price2 =
            flight2.fareCategories.ECONOMY.subcategories.find(
              (category: any) => category.brandCode === "Eco Fly"
            )?.price.amount ?? 0;

          return price1 - price2;
        });

      case "SORT_BY_TIME":
        return flights.slice().sort((flight1, flight2) => {
          return (
            new Date(flight1.departureDateTimeDisplay).getTime() -
            new Date(flight2.departureDateTimeDisplay).getTime()
          );
        });
      default:
        return flights;
    }
  }, [filter, flights]);

  const firstFlight = flights[0];
  return (
    <main className={styles.main}>
       <Header headerTextColor="#5E5E5E" borderStyle="1px solid #818181" />
      {flights.length === 0 ? (
        <div>Loading...</div>
      ) : (
          <div className={styles.flightContainer}>
            <div className={styles.flightInfoContainer}>
            <div className={styles.flightText}>Uçuş</div>
            <div>
              {firstFlight.originAirport.city.name} -{" "}
              {firstFlight.destinationAirport.city.name}, {passengerCount} yolcu
            </div>
            <div>
              <Switch
                labelPosition="left"
                label="Promosyon kodu"
                checked={isDiscountApplied}
                size="lg"
                onChange={() => setIsDiscountApplied(!isDiscountApplied)}
              />
             {isDiscountApplied && <div className={styles.promotionTextContainer}>
                <p>
                  Promosyon kodu seçeneği ile tüm Economy kabini Eco Fly
                  paketlerini %50 indirimle satın alabilirsiniz!
                </p>
                <p>
                  Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim
                  yapılamamaktadır.
                </p>
              </div>}
            </div>
            </div>
            <div className={styles.flightSelectionContainer}>
              <div className={styles.orderByContainer}>
                Sıralama kriteri
                <Button className={styles.sortButton} onClick={() => setFilter("SORT_BY_PRICE")} color="#1e293b" size="compact-md" >
                  Ekonomi kabine ücreti
                </Button>
                <Button className={styles.sortButton} onClick={() => setFilter("SORT_BY_TIME")} color="#1e293b" size="compact-md" >
                  Kalkış saati
                </Button>
              </div>
              <div className={styles.flightCardContainer}>
                {filteredFlights.map((flight) => (
                  <FlightCard
                    key={flight.id}
                    flight={flight}
                    isDiscountApplied={isDiscountApplied}
                    onSelectedFareChange={(fareCategory) =>
                      setSelectedFareCategory(fareCategory)
                    }
                    selectedFareCategory={selectedFareCategory}
                    isFlightSelected={selectedFlightId === flight.id}
                    setSelectedFlightId={setSelectedFlightId}
                  />
                ))}
              </div>
            </div>
          </div>
      )}
    </main>
  );
}
