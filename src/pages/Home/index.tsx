import Content from "../../components/Content";
import Hero from "../../sections/Hero";
import Steam from "../../sections/Steam";

const Home = () => {
  return (
    <div className="Home__main">
      <Hero
        backgroundImage={Content.getImage((c) => c.crystalFortress.background)}
        image={(c) => c.crystalFortress.logoHorizontal}
        alt={Content.getSpecs((c) => `${c.crystalFortress.title} logo`)}
      />
      <Steam />
    </div>
  );
};

export default Home;
