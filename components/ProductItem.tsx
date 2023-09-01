import Image from 'next/image';
import styles from './ProductItem.module.css';
import type { Product } from './TheProductsList';

export default function ProductItem ({ product, className }: { product: Product, className: string }) {
  return (
    <div className={`${className} ${styles.product}`}>
      <h3 className={styles.product__name}>{product.name}</h3>
      <Image style={{position: 'relative', width: '100%', objectFit: 'cover', height: '20rem'}} src={product.image} alt={product.name} />
      <div className={styles.product__price}>{product.price} руб.</div>
    </div>
  );
}
