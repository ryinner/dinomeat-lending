'use client';

import Link from 'next/link';
import { useState } from 'react';
import HamburgerMenuIcon from './Icons/HamburgerMenuIcon';
import styles from './TheNavigation.module.css';

const linksMap = [
  { link: '#products', label: 'Продукция' },
  { link: '#delivery', label: 'Доставка' },
  { link: '#about-us', label: 'О нас' },
];

export default function TheNavigation () {
  const [isActive, setIsActive] = useState(false);

  const burgerMenuHandler = () => { setIsActive(() => !isActive); };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationBurger}><HamburgerMenuIcon onClick={burgerMenuHandler} /></div>
      <ul className={`${styles.navigationList} ${isActive && styles.navigationListActive}`}>
        <li className={styles.navigationBurger}><HamburgerMenuIcon style={{fill: '#fff'}} className={styles.navigationBurger} onClick={burgerMenuHandler} /></li>
        {linksMap.map(link => <li key={link.label} className={styles.link}><Link href={link.link}>{link.label}</Link></li>)}
      </ul>
    </nav>
  );
}
