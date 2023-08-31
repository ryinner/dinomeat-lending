import Image from 'next/image';
import heroImage from '../public/hero-image.jpg';
import style from './TheHero.module.css';

export default function TheHero () {
  return (
    <section className={style.hero}>
      <Image className={style.hero__image} src={heroImage} fill={true} alt='Счастливые покупатели' />
    </section>
  );
}