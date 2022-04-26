import React from "react";
import { Link } from "react-router-dom";
import Download from "../componets/assets/download1.jpg";
import PersomHeader from '../componets/assets/personheader.jpg'
import Background from '../componets/assets/headerbackground.jpg'
import Lady from '../componets/assets/ladyheader.jpg'
import '../componets/styles/AppStyles.css'

const LandingPage = () => {
  return (
    <div>
      <div className="imagebackground">
        <div className="mask">
          <div className="content">
            <h1>Create and monetize audio content. </h1>
            <p>
              The easiest way to create and sell audio courses, privaye podcast
              and audiobooks directly to listeners.
            </p>
            <Link to="/sign-up">
              <button className="btn">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="display">
          <div className="display-text display-responsive">
            <h1>
              Audio monetization made simple and accessible for you and your
              listeners
            </h1>
            <p>
              Share knowledge through podcast using your mobile device and earn
              income from it.
            </p>
          </div>
          <div className="display-image display-responsive">
            <img
              src={Download}
              alt="person-image"
              className="img-pricing display-responsive"
              height={300}
              width={400}
            />
          </div>
        </div>
        <div className="img-section">
          <div className="flex-img display-responsive">
            <img
              src={Lady}
              alt="person-image"
              className="ladywhite display-responsive"
              height={300}
              width={400}
            />
            <img
              src={Background}
              alt="person-image"
              className="display-responsive "
              height={300}
              width={400}
            />
          </div>
          <div div className="landing-details">
            <img
              src={PersomHeader}
              alt="person-image"
              className="img-pricing display-responsive"
              height={300}
              width={400}
            />
            <div className="details-content display-responsive">
              <h3>Content Creator</h3>
              <p>
                Share what you know with audio and turn your knowledge into an
                education empire. Without messy video editing or a laptop,
                create your online courses and share what you know with ease
                using your smartphone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
