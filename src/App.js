import productsData from "./json/products.json"
import Products from "./components/products/Products";
import WhyChooseZernyatko from "./components/WhyChooseZernyatko";
import PopulyarniComponenty from "./components/PopulyarniComponenty";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <Products data={productsData}/>
      <WhyChooseZernyatko/>
      <PopulyarniComponenty />

      <Footer/>
    </div>
  );
}

export default App;
