import React, { useContext } from "react";
import Section from "../../components/Section";
import Content from "../../components/Content";
import { STEAM_PAGE_URL } from "../../constants";
import LanguageContext from "../../LanguageContext";
import "./Steam.css";

const Steam: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section>
      {/* Reference iframe: */}
      {/* <iframe
        title="Steam Link"
        src="https://store.steampowered.com/widget/2594740/"
        frameBorder="0"
        width="100%"
        height="190"
      /> */}
      <div className="Steam__container">
        <div>
          <h3 className="Steam__title">Crystal Fortress</h3>
          <a className="Steam__tail" href={STEAM_PAGE_URL}>
            Steam
          </a>
        </div>
        <div className="Steam__description">
          <a
            href="https://store.steampowered.com/app/2594740/Crystal_Fortress/?snr=1_5_1100__1100&amp;utm_source=steamwidget"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="Steam__capsule"
              src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2594740/capsule_184x69.jpg?t=1722001766"
            />
          </a>
          <Content text={(c) => c.crystalFortress.steamSummary} />
        </div>
        <div className="Steam__cta">
          <div className="Steam__cta-inner">
            <div className="Steam__cta-date">
              <h1>
                {Content.getGeneral((c) => c.available[language])}:{" "}
                {Content.getSpecs(
                  (c) => c.crystalFortress.releaseDate[language]
                )}
              </h1>
            </div>
            <div className="Steam__cta-button">
              <a
                className="Steam__cta-link"
                href={STEAM_PAGE_URL}
                target="__blank"
              >
                {Content.getGeneral((c) => c.wishlistOnSteam[language])}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Steam;
