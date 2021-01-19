import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {

  return (
    <>
      <Navbar/>
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default App;
