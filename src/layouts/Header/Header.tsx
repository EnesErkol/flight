import React from "react"
import styles from "./header.module.scss"

interface HeaderProps {
  headerTextColor?: string;
  borderStyle?: string;
}

const Header: React.FC<HeaderProps> = ({ headerTextColor, borderStyle }) => {
  return (
    <header className={styles.header}>
      <div
        style={{ borderBottom: borderStyle || "1px solid white" }}
        className={styles.headerContainer}
      >
        <h3 className={styles.headertext} style={{color: headerTextColor || "white"}}>
          turkishairlines.com
        </h3>
        <p className={styles.headertext} style={{ color: headerTextColor || "white" }}>
          search<span className={styles.boldText}>Flight Challenge</span>
        </p>
      </div>
    </header>
  )
}

export default Header
