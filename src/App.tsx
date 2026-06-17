import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import Gallery from "./components/sections/Gallery/Gallery";
import SocialFeed from "./components/sections/SocialFeed/SocialFeed";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Gallery />
        <SocialFeed />
      </main>

      <Footer />
    </>
  );
}

export default App;
