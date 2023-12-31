import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Graph from "./components/Graph";
import ProductSale from "./components/ProductSale";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className=" flex justify-center items-center border-2 border-yellow-400">
      <Header/>
      <SubHeader/>
      <Graph/>
      <ProductSale/>
      <Dashboard/>
      
    </div>
  );
}

export default App;
