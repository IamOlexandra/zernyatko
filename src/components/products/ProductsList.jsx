import ProductsItem from "./ProductsItem";

export default function ProductsList({data}) {
    return(
        <ul>
            {data.map(item => (<ProductsItem dataItem={item}/>))}
        </ul>
    );
}