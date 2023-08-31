import { StaticImageData } from 'next/image';
import Cross from '../public/products/cross.jpg';
import ProductItem from './ProductItem';
import styles from './TheProductsList.module.css';

const products: Product[] = [
  {
    id: 1,
    name: 'Спортивные кроссовки',
    price: 100000,
    image: Cross
  }
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