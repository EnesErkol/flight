"use client";

import FareCategoryCard from "@/src/components/pages/Flights/FareCategoryCard";
import { Flight } from "@/src/utils/constants/flights";
import { FareCategories } from "@/src/utils/enums";
import { Subcategory } from "@/src/utils/types/flightsDataType"
import SubFareCategoryCard from "@/src/components/pages/Flights/SubFareCategoryCard";
import React from "react";
import styles from "./flightCard.module.scss";

interface IFlightCardProps {
  flight: Flight;
  selectedFareCategory: FareCategories | null;
  onSelectedFareChange: (selectedFareCategory: FareCategories | null) => void;
  isDiscountApplied: boolean;
  isFlightSelected: boolean;
  setSelectedFlightId: React.Dispatch<React.SetStateAction<string | null>>;
}

const FlightCard: React.FC<IFlightCardProps> = ({
  flight,
  selectedFareCategory,
  onSelectedFareChange,
  setSelectedFlightId,
  isFlightSelected,
  isDiscountApplied,
}) => {
  const fareCategories = flight.fareCategories
  const businessFareCategory = fareCategories.BUSINESS
  const economyFareCategory = fareCategories.ECONOMY

  const economyPrice = economyFareCategory.subcategories[0].price.currency + ' ' + economyFareCategory.subcategories[0].price.amount * (isDiscountApplied ? 0.5 : 1)
     
  const businessPrice =
  businessFareCategory.subcategories[0].price.currency + ' ' +
  businessFareCategory.subcategories[0].price.amount;

  const economyFlightData = economyFareCategory.subcategories;
  const businessFlightData = businessFareCategory.subcategories;

  const handleFareChange = (fare: FareCategories) => {
    onSelectedFareChange(fare);
    setSelectedFlightId(flight.id);

    if (selectedFareCategory === fare && isFlightSelected) {
      onSelectedFareChange(null);
    }
  };

  const selectedFlightData =
    selectedFareCategory === FareCategories.ECONOMY
      ? economyFlightData
      : businessFlightData;


      const originAirpotCity = flight.originAirport.city
      const destinationAirportCity = flight.destinationAirport.city
  return (
    <div  >
      <div className={styles.detailsContainer}>
        <div className={styles.detailsCard}>
          <div className={styles.detailsContent}>
            <div className={styles.destinationContainer}>
              <div>
                <h2 className={styles.locationInfo}>
                  {flight.departureDateTimeDisplay}
                </h2>
                <p className={styles.airportCityCode}>{originAirpotCity.code}</p>
                <p className={styles.airportCityName}>{originAirpotCity.name}</p>
              </div>
              <hr className={styles.destinationStick} />
              <div>
                <h2 className={styles.locationInfo}>{flight.arrivalDateTimeDisplay}</h2>
                <p className={styles.airportCityCode}>{destinationAirportCity.code}</p>
                <p className={styles.airportCityName}>{destinationAirportCity.name}</p>
              </div>
            </div>
            <div className={styles.durationContainer}>
              <p className={styles.flightDurationText}>Uçuş Süresi</p>
              <h4>{flight.flightDuration}</h4>
            </div>
          </div>
        </div>
        <FareCategoryCard
          price={economyPrice}
          isSelected={
            isFlightSelected && selectedFareCategory === FareCategories.ECONOMY
          }
          onSelectedFareChange={() => handleFareChange(FareCategories.ECONOMY)}
          title="ECONOMY"
          fareKey={FareCategories.ECONOMY}
        />
        <FareCategoryCard
          price={businessPrice}
          isSelected={
            isFlightSelected && selectedFareCategory === FareCategories.BUSINESS
          }
          onSelectedFareChange={() => handleFareChange(FareCategories.BUSINESS)}
          // todo enum
          title="BUSINESS"
          fareKey={FareCategories.BUSINESS}
        />
      </div>
      {selectedFareCategory && isFlightSelected ? (
        <div className={styles.selectedFlightContainer}>
          {selectedFlightData.map((flightData: Subcategory, index: number) => (
            <SubFareCategoryCard
              key={index}
              isDiscountApplied={isDiscountApplied}
              flightData={flightData}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FlightCard;
