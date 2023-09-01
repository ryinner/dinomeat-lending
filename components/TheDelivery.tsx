import styles from './TheDelivery.module.css';

export default function TheDelivery () {
  return (
    <section className={styles.section} id='delivery'>
      <h2>Доставка</h2>
      <div className={styles.delivery__text}>
        <p className={styles.delivery__paragraph}>Доставка осуществляется в постаматы и пункты выдачи заказов СДЭК в срок от 1 дня от даты совершения заказа.</p>
        <p className={styles.delivery__paragraph}>
          Товар доставляется в постаматы и пункты выдачи заказов СДЭК при наличии полной оплаты за товар и доставку. Стоимость доставки составляет 200 рублей. Заказ можно оформить на сайте компании ДНС. Вес заказа не может быть более 20кг.
          При поступлении заказа в постамат / пункт выдачи заказов, Вам поступит смс оповещение от компании СДЭК с кодом для получения.
        </p>
      </div>
    </section>
  );
}