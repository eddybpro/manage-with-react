import "./App.css";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Review from "./components/Review";
import { featuresData } from "./featuresData";
import { reviewData } from "./reviewData";
import { useState } from "react";

function App() {
  const [slide, setSlide] = useState(0);
  return (
    <>
      <Header />
      <main>
        <div className="FeaturesWrapper">
          <div className="FeaturesWrapper-FirstPart">
            <h1 className="FeaturesWrapper-FirstPart-Title">
              What&apos;s different about Manage?
            </h1>
            <p className="FeaturesWrapper-FirstPart-Para">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div className="FeaturesWrapper-FeaturesBox">
            {featuresData.map((feature) => (
              <Feature key={feature.id} data={feature} />
            ))}
          </div>
        </div>
        <div className="ReviewsWrapper">
          <h1 className="ReviewsWrapper-Title">What they&apos;ve said</h1>
          <div className="ReviewsWrapper-Slider">
            {reviewData.map((review, i) => (
              <div
                className={
                  slide === i ? "ReviewsWrapper-Slider-Slide" : "SlideHidden"
                }
                key={i}
              >
                <Review data={review} />
              </div>
            ))}
          </div>
          <div className="ReviewsWrapper-Btns mobile">
            {reviewData.map((_, idx) => (
              <button
                className={slide == idx ? "active" : ""}
                key={idx}
                onClick={() => setSlide(idx)}
              ></button>
            ))}
          </div>
          <button className="ReviewsWrapper-GetStartedBtn">get started</button>
        </div>
        <div className="SimplifyWrapper">
          <h1 className="SimplifyWrapper-Title">
            Simplify how your team works today.
          </h1>
          <button className="SimplifyWrapper-Btn">get started</button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
