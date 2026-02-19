import CategorieRow from "./components/CategorieRow.jsx"
import {fruits, cheeses, veggies} from "./itemslist.js"

export default function App() {
  return(
    <div>
    <h1>EXTRA SUPERMARKET</h1>
    <CategorieRow title="Delicious Fruits" items={fruits}/>
    <CategorieRow title="Italian Cheeses" items={cheeses}/>
    <CategorieRow title="Fresh Vegetables" items={veggies}/>
    </div>
  )
};