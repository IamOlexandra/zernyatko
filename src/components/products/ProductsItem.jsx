export default function ProductsItem({dataItem}) {
    return(
        <li key={dataItem.id}>
            <img width="304" src={dataItem.image} alt={dataItem.name}/>
            <h2>{dataItem.name}</h2>
            <p>{dataItem.description}</p>
            <p>{dataItem.price} грн</p>
            <button type="button">Детальніше</button>
        </li>
    );
}