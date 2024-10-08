import React from "react";
import Section from "../../components/Section";
import { STEAM_PAGE_URL } from "../../constants";
import "./Steam.css";

const Steam: React.FC = () => {
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
            on Steam
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
          Defend the Crystal Fortress and its people from invading forces in
          this blend of Turn-Based Tactical RPGs and Tower Defense. Summon the
          infantry, call out the archers, deploy turrets. Use all the available
          tools to keep the enemies at bay!
        </div>
        <div className="Steam__cta">
          <div className="Steam__cta-inner">
            <div className="Steam__cta-date">
              <h1>Available: Coming soon</h1>
            </div>
            <div className="Steam__cta-button">
              <a
                className="Steam__cta-link"
                href={STEAM_PAGE_URL}
                target="__blank"
              >
                Wishlist on Steam
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Steam;
