import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div className="background">
      <Nav />
      <div className="main-content">
        <div className="content-container">
          <h1 className="hero">
            {"Become "}
            <span className="gradient-text">{"Super Productive "}</span>
            {"in programming by our tutorials!"}
          </h1>
          <h3 className="description">
            {`By participating in our courses, you can also join our private
            discord servers.`}
          </h3>
          <div className="newsletter-container">
            <div className="space-y-3">
              <h5 className="newsletter-text">{"Signup for our newsletter"}</h5>
              <input
                placeholder="yourmail@somewhere.com"
                className="newsletter-input"
                type="email"
              />
            </div>
            <button className="newsletter-btn">{"Sign Up"}</button>
          </div>
        </div>
        <div className="website-image">
          <img className="w-full" src="/macbook.svg" alt="blank web page" />
        </div>
      </div>
      <div className="text-center md:py-16 py-1">
        <h4 className="download-text">{"Download our app:"}</h4>
        <div className="whitespace-nowrap mx-auto">
          <img className="download-btn" src="/App Store.svg" />
          <img className="download-btn" src="/Play Store.svg" />
        </div>
      </div>
      <footer className="footer">
        {"© App 2023 - "}
        <span className="text-violet-400">{"tailwindcss template "}</span>
        {"by Ali Ahmadi"}
      </footer>
    </div>
  );
}

export default App;
