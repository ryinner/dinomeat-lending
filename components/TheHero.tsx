import { Black_Ops_One } from 'next/font/google';
import Image from 'next/image';
import heroImage from '../public/hero-image.jpg';
import style from './TheHero.module.css';

const blackOpsOne = Black_Ops_One({ weight: '400', subsets: ['latin'] });

export default function TheHero () {
  return (
    <section className={style.hero}>
      <Image className={style.hero__image} src={heroImage} fill={true} alt='Счастливые покупатели' />
      <div className={style.hero__info}>
        <div className={`${style.hero__logo} ${blackOpsOne.className}`}>Dinomeät</div>
        <div className={style.hero__city}>Челябинск</div>
      </div>
    </section>
  );
}