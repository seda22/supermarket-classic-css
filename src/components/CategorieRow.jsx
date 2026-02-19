import ItemCard from "./ItemCard";

export default function CategorieRow (props) {
    const {title, items} = props;
    return(
        <div>
            <h2>{title}</h2>
            {items.map((item)=>{
               return <ItemCard product={item} key={item.id}/>
            })}
        </div>
    )
}