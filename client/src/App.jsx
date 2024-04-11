import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App({ element }) {
  return (
    <>
      <Navbar />
      {element}
      <Footer />
    </>
  );
}

export default App;
