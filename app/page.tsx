"use client";
import ChangePassengerPopover from "@/src/components/pages/Home/ChangePassengerPopover";
import cities from "@/src/utils/constants/cities";
import flightsData from "@/src/utils/constants/flights";
import {
  faCalendarDays,
  faChevronRight,
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autocomplete } from "@mantine/core";
import { useState } from "react";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";
import ErrorModal from '@/src/modals/ErrorModal';
import Header from '@/src/layouts/Header/Header';
import { FareCategories } from '@/src/utils/enums';

export default function Home() {
  const router = useRouter();

  const [originCity, setOriginCity] = useState<string | undefined>();
  const [destinationCity, setDestinationCity] = useState<string | undefined>();
  const [fareCategory, setFareCategory] = useState<string>(FareCategories.ECONOMY);
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  

  const customButtonStyle = {
    width: "120px",
    height: "60px",
    backgroundColor: "#242A38",
    border: "none",
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!originCity || !destinationCity) {
      setErrorModalOpen(true);
      return;
    }
    const foundFlights = findAvailableFlights(
      originCity,
      destinationCity,
      flightsData
    );
    if (foundFlights.length === 0) {
      setErrorModalOpen(true);
    } else {
      localStorage.setItem("availableFlights", JSON.stringify(foundFlights));
      localStorage.setItem("passengerCount", passengerCount.toString());
      router.push("/ucak-bileti/ucuslar");
    }
  };

  const handleCloseErrorModal = () => {
    setErrorModalOpen(false);
  }

  const findAvailableFlights = (
    originCity: string,
    destinationCity: string,
    data: typeof flightsData
  ) => {
    return data.flights.filter((flight) => {
      const originAirportCity = flight.originAirport.city.name.toLowerCase();
      const destinationAirportCity =
        flight.destinationAirport.city.name.toLowerCase();

      return (
        originAirportCity === originCity.toLowerCase() &&
        destinationAirportCity === destinationCity.toLowerCase()
      );
    });
  };

  const handleLeftCities = (value: string) => {
    return cities.filter((city) => city.label !== value);
  }

  return (
    <main className={styles.main}>
     <Header />
     <div className={styles.flightSearchContainer}>
      <h2 className={styles.title}>Merhaba</h2>
      <h3 className={styles.description}>Nereyi keşfetmek istersiniz ?</h3>
      <form className={styles.searchBar} onSubmit={(e) => handleSearch(e)}>
        <Autocomplete
          className={styles.autocomplete}
          size="xl"
          radius="xs"
          label=""
          placeholder="Nereden ?"
          data={handleLeftCities(destinationCity || "")}
          value={originCity}
          onChange={(value) => setOriginCity(value)}
          leftSection={<FontAwesomeIcon icon={faPlaneDeparture} size="lg" />}
        />
        <Autocomplete
          className={styles.autocomplete}
          size="xl"
          radius="xs"
          label=""
          placeholder="Nereye ?"
          data={handleLeftCities(originCity || "")}
          value={destinationCity}
          onChange={(value) => setDestinationCity(value)}
          leftSection={<FontAwesomeIcon icon={faPlaneArrival} size="lg" />}
        />
        <div className={styles.date}>
          Tarih
          <FontAwesomeIcon
            icon={faCalendarDays}
            size="2xl"
            style={{ color: "#C1C1C1" }}
          />
        </div>
        <ChangePassengerPopover
          fareCategory={fareCategory}
          passengerCount={passengerCount}
          setFareCaregory={setFareCategory}
          setPassengerCount={setPassengerCount}
          buttonStyle={ customButtonStyle }
        />
        <button data-testid="formSubmit" className={styles.submitBtn} type="submit">
          <FontAwesomeIcon
            icon={faChevronRight}
            size="2xl"
            style={{ color: "#fff" }}
          />
        </button>
      </form>
    </div>
      <ErrorModal
        isOpen={errorModalOpen}
        onClose={handleCloseErrorModal}
        message="Uçuş bulunamadı"
      />
    </main>
  );
}
