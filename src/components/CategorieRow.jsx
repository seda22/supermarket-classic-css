export default function CategorieRow (props) {
    const {title, items} = props;
    return(
        <div>
            <h2>{title}</h2>
            {items.map((item)=>{
                <ItemCard name={item} key={item}/>
            })}
        </div>
    )
}