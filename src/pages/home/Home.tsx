import home from "../../assets/rupes.jpg";
import Star from "../../assets/Star1.png";
import Background from "../../assets/Background.png";
import { Typewriter } from "react-simple-typewriter";
import Card from "../../globals/components/card/Card";
import Footer from "../../globals/components/footer/Footer";

function Home() {
  return (
    <div className="w-full py-4 px-4">  {/* Fixed missing 'full' in className */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="bg-[#d4d3d3] md:rounded-l-[30px] relative">
          <div className="grid justify-center">
            <h1 className="text-black uppercase font-bold md:text-[82px] text-7xl md:mt-[60px]">
              let's <br /> Explore <br />
              <span className="bg-[#EBD96B] px-4 py-1 my-2 skew-y-6 absolute">
                <Typewriter
                  words={["Unique", "Classic", "Stylish", "Hehe"]}
                  loop={true}  // Fixed
                  cursor
                  cursorStyle="."
                  cursorColor="Black"
                  typeSpeed={90}
                  // backSpeed={90}  // Fixed spelling of `backSpeed`
                />
              </span>
              <br />
              Cloth
            </h1>
            <p className="my-4">
              Live for Influential and Innovative fashion!
            </p>
            <div className="flex py-2">
              <img
                src={Background}
                alt="Background"
                className="md:w-[200px] w-[150px] h-[30px] my-auto"
              />
              <button className="bg-black text-white md:w-[140px] hover:scale-125 hover:rotate-2 duration-100 rounded py-3 ml-8 w-[100px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="md:rounded-r-[30px] bg-[#d4d3d3] relative py-7">
          <img src={Star} alt="Star" className="absolute top-10 left-8 w-10" />
          <img src={Star} alt="Star" className="absolute top-10 right-12" />
          <img
            src={Star}
            alt="Star"
            className="absolute bottom-10 left-7 w-12"
          />
          <img src={Star} alt="Star" className="absolute bottom-9 right-6" />
          <img className="h-full" src={home} alt="Home" />
        </div>
      </div>
      <Card/>
      <Footer/>
      
    </div>
  );
}

export default Home;
