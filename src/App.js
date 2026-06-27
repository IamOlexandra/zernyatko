import productsData from "./json/products.json"
import Products from "./components/products/Products";
import PopulyarniComponenty from "./PopulyarniComponenty";

function App() {
  return (
    <div className="App">
      <Products data={productsData}/>
      <PopulyarniComponenty />
    </div>
  );
}

export default App;
