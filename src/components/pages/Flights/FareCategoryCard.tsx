import { Radio } from "@mantine/core";
import React, { useState } from "react";
import styles from "./fareCategory.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface FareCategoryCardProps {
  price: string;
  onSelectedFareChange: (fareKey: string) => void;
  title: string;
  fareKey: string;
  isSelected: boolean;
}

const FareCategoryCard: React.FC<FareCategoryCardProps> = ({
  price,
  onSelectedFareChange,
  title,
  fareKey,
  isSelected,
}) => {
  return (
    <button
      className={styles.fareCategoryCard}
      onClick={() => onSelectedFareChange(fareKey)}
    >
      <div className={styles.fareCategoryContainer}>
        <Radio checked={isSelected} onChange={() => onSelectedFareChange(fareKey)} />
        <div>
          <p className={styles.flightClassText}>{title}</p>
        </div>
        <div className={styles.flightInfoContainer}>
          <p className={styles.passengerText}>Yolcu Başına</p>
          <p className={styles.priceText}>{price}</p>
        </div>
        <div className={styles.flightIconContainer}>
        {isSelected ?<FontAwesomeIcon icon={faAngleUp} /> :
        <FontAwesomeIcon icon={faAngleDown} />}
        </div>
      </div>
    </button>
  );
};

export default FareCategoryCard;
