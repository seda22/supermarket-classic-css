import CategoryRow from "./components/CategoryRow.jsx"
import {fruits, cheeses, veggies} from "./itemslist.js"

export default function App() {
  return(
    <div>
    <h1>EXTRA SUPERMARKET</h1>
    <CategoryRow title="Delicious Fruits" items={fruits}/>
    <CategoryRow title="Italian Cheeses" items={cheeses}/>
    <CategoryRow title="Fresh Vegetables" items={veggies}/>
    </div>
  )
};