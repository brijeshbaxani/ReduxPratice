import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Componments/Navbar/Navbar";
import Details from "./Componments/Details/Details";
import Company from "./Componments/Company/Company";
import Employ from "./Componments/Employ/Employ";
import CompanyDetailsCard from "./Componments/CompanyDetailsCard/CompanyDetailsCard";
import { Provider } from "react-redux";
import store from "./store";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Details />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/employ" element={<Employ />}></Route>
          <Route path="/company-details/:id" element={<CompanyDetailsCard />}
          ></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
