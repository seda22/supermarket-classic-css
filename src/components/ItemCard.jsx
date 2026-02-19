export default function ItemCard({product}){
    console.log(product);
    return(
        <div className="item-card">
            <img src={product.img} alt={product.alt}/>
            <h3>{product.name}</h3>
            <span>{product.price}</span>
        </div>
    )
}