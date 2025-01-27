import Hero from "../../sections/Hero";
import Steam from "../../sections/Steam";
import useContent from "../../utils/useContent";

const Home = () => {
  const content = useContent();

  return (
    <div className="Home__main">
      <Hero
        backgroundImage={content.crystalFortress.images.background}
        image={content.crystalFortress.images.logoHorizontal}
        alt={`Logo: ${content.crystalFortress.specs.title}`}
      />
      <Steam gameId="crystalFortress" />
    </div>
  );
};

export default Home;
