import Link from 'next/link';
import styles from './TheNavigation.module.css';

const linksMap = [
  { link: '#products', label: 'Продукция' },
  { link: '#delivery', label: 'Доставка' },
  { link: '#about-us', label: 'О нас' },
];

export default function TheNavigation () {
  return (
    <nav>
      <ul className={styles.navigation}>
        { linksMap.map(link => <li key={link.label} className={styles.link}><Link href={link.link}>{ link.label }</Link></li>) }
      </ul>
    </nav>
  );
}