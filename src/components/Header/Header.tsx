'use client'
import React, {useState} from 'react'
import styles from './Header.module.css'
// Internal Components

// External Libraries
import { Link } from 'react-scroll';

export default function Header() {
  // dropdown navbar menu on smaller screens:
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  // toggle dropdown navbar menu on smaller screens:
  const toggleDropdown = () => {
      setIsDropdownActive((prev) => !prev); /* relies on prior state so dont change it to just !isDropdownActive */
  }

  // closes dropdown menu on nav item click
  const onClickCloseDropdown = () =>{
      setIsDropdownActive(false)
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.hamburger} ${isDropdownActive ? styles.hamburger_active : '' }`} onClick={toggleDropdown}>
          <div className={styles.bar} ></div>
          <div className={styles.bar} ></div>
          <div className={styles.bar} ></div>
      </div>

      <nav className={styles.navbar}>
        <ul>
            <li className={styles.link}><Link to="xyz" spy={true} smooth={true} duration={500}  offset={10}> XYZ </Link></li>  
            <li className={styles.link}><Link to="xyz" spy={true} smooth={true} duration={500}  offset={10}> XYZ2 </Link></li>   
        </ul>
      </nav>

      {isDropdownActive && 
        <nav className={styles.navbar_dropdown}>
          <ul>
            <li className={styles.link}><Link to="XYZ" spy={true} smooth={true} duration={500}  offset={10} > XYZ </Link></li> 
            <li className={styles.link}><Link to="XYZ" spy={true} smooth={true} duration={500}  offset={10} > XYZ </Link></li> 
          </ul>
        </nav>
      }
    </header>
  )
}
