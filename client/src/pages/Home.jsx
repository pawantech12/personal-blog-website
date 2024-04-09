import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
const Home = () => {
  return (
    <>
      <main className="px-24">
        <section className="hero">
          <div className="content">
            <h1>Hay, I am Arun</h1>
            <p>
              An architect, software developer, YouTuber and keynote speaker. On
              this site I write about my learning and experience.
            </p>
            <div className="subscribeBox">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email Address"
              />
              <button>Subscribe</button>
            </div>
            <div className="socialLinkContainer">
              <h5>Follow:</h5>
              <ul>
                <li>
                  <Link>
                    <TwitterIcon />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FacebookIcon />
                  </Link>
                </li>
                <li>
                  <Link>
                    <InstagramIcon />
                  </Link>
                </li>
                <li>
                  <Link>
                    <GitHubIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="img"></div>
        </section>
      </main>
    </>
  );
};

export default Home;
