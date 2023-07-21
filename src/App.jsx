import "./App.css";

// Header imports
import Header from "./components/Header";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { menuItems } from "./data";

// Main imports
import Main from "./components/Main";
import Article from "./components/Article";
import { galleryItems } from "./data";
import Gallery from "./components/Gallery";

// Footer imports
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header>
        <div className="mx-auto grid min-h-[66vh] max-w-5xl place-items-center lg:relative lg:min-h-[85vh] lg:place-items-baseline">
          <Nav items={menuItems} />

          <Hero />
        </div>
      </Header>

      <Main>
        <Article />

        <Gallery items={galleryItems} />
      </Main>

      <Footer items={menuItems}></Footer>
    </>
  );
}

export default App;
