import { StaticImageData } from 'next/image';
import Cross from '../public/products/cross.jpg';
import Foot from '../public/products/foot.jpeg';
import Tee from '../public/products/tee.jpeg';
import ProductItem from './ProductItem';
import styles from './TheProductsList.module.css';

const products: Product[] = [
  {
    id: 1,
    name: 'Спортивные кроссовки',
    price: 100000,
    image: Cross
  },
  {
    id: 2,
    name: 'Футболка Black lord',
    price: 1000000,
    image: Foot
  },
  {
    id: 3,
    name: 'Футболка Tee',
    price: 1000001,
    image: Tee
  },
];

export default function TheProductsList () {
  return (
    <section className={styles.section} id='products'>
      <h2 className={styles.products__heading}>Наши продукты</h2>
      <div className={styles.products__container}>
        {products.map(product => <ProductItem className={styles.products__item} product={product} key={product.id} />)}
      </div>
    </section>
  );
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
}