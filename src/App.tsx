import Hero from "./sections/Hero";
import Social from "./sections/Social";
import Steam from "./sections/Steam";
import "./App.css";

const App = () => {
  return (
    <main className="App__main">
      <div className="App__inner-container">
        <Hero />
        <Steam />
        <Social />
      </div>
    </main>
  );
};

export default App;
