import { ReactSVG } from "react-svg";
import Navbar from "./components/Navbar";
import databize from "../src/assets/images/client-databiz.svg";
import audioPhile from "../src/assets/images/client-audiophile.svg";
import meet from "../src/assets/images/client-meet.svg";
import maker from "../src/assets/images/client-maker.svg";
import heroDesktop from "../src/assets/images/image-hero-desktop.png";
import heroMobile from "../src/assets/images/image-hero-mobile.png";

function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <section className="lg:container lg:mx-auto lg:px-24 flex flex-col-reverse lg:flex-row justify-between items-center px-0">
        <div className="lg:space-y-10 tracking-wide space-y-5">
          <div className="lg:hidden font-bold text-3xl text-center mt-3">
            Make remote work
          </div>
          <div className="text-6xl font-bold hidden lg:block">
            Make
            <br />
            remote work
          </div>
          <div className="text-center lg:text-left">
            Get your team in sych , no matter your location. <br />
            Streamline processes, create team rituals, and <br /> watch
            productivity soar
          </div>
          <div className="flex justify-center lg:block">
            <a
              href="#"
              className="border border-black px-5 py-2.5  rounded-lg font-bold bg-black text-white hover:bg-transparent hover:text-black"
            >
              Learn more
            </a>
          </div>
          <div className="flex lg:gap-8 pt-12 md:pt-6 lg:pt-12">
            <ReactSVG
              className="scale-75 md:scale-90 lg:scale-110"
              src={databize}
            />
            <ReactSVG
              className="scale-75 md:scale-90 lg:scale-110"
              src={audioPhile}
            />
            <ReactSVG
              className="scale-75 md:scale-90 lg:scale-110"
              src={meet}
            />
            <ReactSVG
              className="scale-75 md:scale-90 lg:scale-110"
              src={maker}
            />
          </div>
        </div>
        <div>
          <img
            src={heroDesktop}
            alt=""
            width={"420px"}
            className="hidden lg:block"
          />
          <img src={heroMobile} alt="" className="lg:hidden" />
        </div>
      </section>
    </div>
  );
}

export default App;
