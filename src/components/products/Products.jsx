import ProductsList from "./ProductsList";
import css from "../../css/products.module.css"

export default function Products({data}) {
    return(
        <section className={css.products}>
            <h1 className={css.productsTitle}>Популярні товари</h1>
            <ProductsList data={data}/>
        </section>
    );
}