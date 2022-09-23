import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Portfolio from "./sections/portfolio/Portfolio";
import ContactMe from "./sections/contactMe/ContactMe";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />

      <main>
        <About />
        <Portfolio />
      </main>

      <ContactMe />
    </div>
  );
}

export default App;
