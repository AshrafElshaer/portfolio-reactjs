import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Portfolio from "./sections/portfolio/Portfolio";
import ContactMe from "./sections/contactMe/ContactMe";

function App() {
  return (
    <div className='App'>
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
