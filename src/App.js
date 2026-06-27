import productsData from "./json/products.json"
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">

      <Products data={productsData}/>
      
    </div>
  );
}

export default App;