import styles from './TheFooter.module.css';

export default function TheFooter () {
  return (
    <footer className={styles.footer} id='#about-us'>
      <div className={styles.footer__container}>
        <p className={styles.footer__paragraph}>Официальный интернет-магазин «Dinomeät»</p>
        <p className={styles.footer__paragraph}>ООО «ODL»</p>
        <p className={styles.footer__paragraph}>ИНН: 7453355413</p>
        <p className={styles.footer__paragraph}>КПП: 745301001</p>
        <p className={styles.footer__paragraph}>ОГРН: 1237400034530</p>
        <p className={styles.footer__paragraph}>454080 обл. Челябинская, г. Челябинск, ул. Энтузиастов, д. 12, офис 207</p>
        <p className={styles.footer__paragraph}>Телефон: +7 (922) 740-14-23</p>
      </div>
    </footer>
  );
}