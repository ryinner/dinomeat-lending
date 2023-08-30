import style from './TheFooter.module.css';

export default function TheFooter () {
  return (
    <footer className={style.footer} id='#about-us'>
      <div className={style.footer__container}>
        Я подвальчик
      </div>
    </footer>
  );
}