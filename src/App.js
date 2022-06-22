import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Portfolio from "./sections/portfolio/Portfolio";

function App() {
  return (
    <div className='App'>
      <Header />

      <main>
        <About />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
