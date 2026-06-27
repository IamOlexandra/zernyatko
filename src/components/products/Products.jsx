import ProductsList from "./ProductsList";

export default function Products({data}) {
    return(
        <section>
            <h1>Популярні товари</h1>
            <ProductsList data={data}/>
        </section>
    );
}