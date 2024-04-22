import { faMinus, faPeopleGroup, faPerson, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Group, Popover, Radio } from "@mantine/core";
import React from "react";

import styles from "./style.module.scss";

interface Props {
  passengerCount: number;
  setPassengerCount: React.Dispatch<React.SetStateAction<number>>;
  // todo : enum'a çek
  fareCategory: string;
  setFareCaregory: React.Dispatch<React.SetStateAction<string>>;
  buttonStyle?: React.CSSProperties;
}
const ChangePassengerPopover = ({
  passengerCount,
  setPassengerCount,
  fareCategory,
  setFareCaregory,
  buttonStyle,
}: Props) => {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md" offset={{ mainAxis: 10, crossAxis: -41 }} >
      <Popover.Target>
        <button type="button" style={buttonStyle} className={styles.btn}>
          <p className={styles.countText}>{passengerCount}</p>
          {
            passengerCount == 1 ?
            <FontAwesomeIcon icon={faPerson} size="xl" style={{ color: "#C1C1C1" }}/>
            :
            <FontAwesomeIcon icon={faPeopleGroup} size="xl" style={{ color: "#C1C1C1" }} />
          }
        </button>
      </Popover.Target>
      <Popover.Dropdown>
        <p className={styles.dropdownHeader}>Kabin ve Yolcu Seçimi</p>
        <Radio.Group onChange={setFareCaregory} value={fareCategory} className={styles.radioBtnContainer}>
          <Group mt="xs">
            <Radio value="ECONOMY" label="Economy Class" />
            <Radio value="BUSINESS" label="Business Class" />
          </Group>
        </Radio.Group>
        <div className={styles.passengerQuantityContainer}>
          <p className={styles.passengerText}>Yolcu </p>
          <div className={styles.passengerQuantiyChanger}>
            <button
              className={styles.passengerQuantityButton}
              onClick={() => setPassengerCount(Math.max(1, passengerCount - 1))}
              type="button"
            >
              <FontAwesomeIcon icon={faMinus} size="sm" color='grey' />
            </button>
            <p>{passengerCount}</p>
            <button
              className={styles.passengerQuantityButton}
              onClick={() => setPassengerCount(passengerCount + 1)} 
              type="button">
              <FontAwesomeIcon icon={faPlus} size="sm" color='grey' />
            </button>
          </div>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};

export default ChangePassengerPopover;
