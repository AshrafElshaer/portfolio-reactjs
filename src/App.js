import { Intro , About , Portfolio  , ContactMe} from "./sections";

import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro />

      <main>
        <About />
        <Portfolio />
      </main>

      <ContactMe />
    </div>
  );
}

export default App;
