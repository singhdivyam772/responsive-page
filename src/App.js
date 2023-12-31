import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Graph from "./components/Graph";
import ProductSale from "./components/ProductSale";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className=" relative w-screen h-screen border-2 border-yellow-400 bg-slate-200">
      
      <Dashboard/>
      <Header/>
      <SubHeader/>
      <Graph/>
      <ProductSale/>
      
      
    </div>
  );
}

export default App;
