import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";
import Home6 from "./Home6";
import Home7 from "./Home7";

export default function Home() {
    return (
      <div className="home">
        <div className="home1--layout"> 
          <Home1 />
        </div>
        <div className="home2--layout"> 
          <Home2 />
        </div>
        <Home3 />
        <Home4 />
        <Home5 />
        <Home6 />
        <Home7 />
      </div>
    )
  }