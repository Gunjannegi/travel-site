import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search/Search";
import ImgCarousel from "./components/carousel/ImgCarousel";
import Destinations from "./components/destinations/Destinations";
import Footer from "./components/footer/Footer";
import Selects from "./components/selects/Selects";

function App() {
  return (
      <div>
          <Navbar />
          <Hero />
          <Destinations />
          <Search />
          <Selects />
          <ImgCarousel />
          <Footer/>
    </div>
  );
}

export default App;
