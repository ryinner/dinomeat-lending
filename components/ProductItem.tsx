import Image from 'next/image';
import styles from './ProductItem.module.css';
import type { Product } from './TheProductsList';

export default function ProductItem ({ product, className }: { product: Product, className: string }) {
  return (
    <div className={`${className} ${styles.product}`}>
      <h3>{product.name}</h3>
      <Image style={{position: 'relative', width: '100%'}} src={product.image} alt={product.name} />
    </div>
  );
}
