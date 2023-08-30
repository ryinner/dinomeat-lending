import { Black_Ops_One } from 'next/font/google';
import styles from './TheHeader.module.css';
import TheNavigation from './TheNavigation';

const blackOpsOne = Black_Ops_One({ weight: '400', subsets: ['latin'] });

export default function TheHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={blackOpsOne.className}>Dinomeät</div>
        <TheNavigation />
      </div>
    </header>
  );
}
