import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Collections from "./components/Collections";
import Discover from "./components/Discover";
import ElevaateSection from "./components/ElevaateSection";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import MiddleBanner from "./components/MiddleBanner";
import Offers from "./components/Offers";
import Wardrobe from "./components/Wardrobe";
import Tailored from "./components/Tailored";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Collections />
      <Discover />
      <Wardrobe />
      <Favorites />
      <MiddleBanner />
      <Offers />
      <Tailored />
      <ElevaateSection />
      <Footer />
    </div>
  );
}

export default App;
