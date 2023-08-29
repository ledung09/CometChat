window.addEventListener("load", () => {
  window.addEventListener("scroll", (event) => {
    let scroll = window.scrollY;
    if (scroll > 0) {
      document.querySelector("#header-wrapper").classList.add("shadow");
    } else {
      document.querySelector("#header-wrapper").classList.remove("shadow");
    }
  });
});

export default function Home1() {
  return (
    <div className="home1">
      <div className="home1-c1">
        <div className="home1-c1-r1">Everything you need to build In-app Messaging</div>
        <div className="home1-c1-r2">A rich set of features and integrations make our SDKs, APIs, and UI Kits the market’s most flexible and easy to use. Want a quick launch and hassle free management? Our no-code widget lets you copy and paste your way to integrated in-app chat.</div>
        <div className="home1-c1-r3">Works well with:</div>
        <div className="home1-c1-r4">
          <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6140c5b1d805f583510bd126_react.png" alt="" srcSet="" />
          <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6140c5b2a6986e5d2f6dce59_react%20native.png" alt="" srcSet="" />
          <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6140c5b22914964c32579854_swift.png" alt="" srcSet="" />
          <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6140c5b568805c5d34ebe2de_kotlin.png" alt="" srcSet="" />
          <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6140c5b1a6986e32eb6dce58_php.png" alt="" srcSet="" />
          <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6140c5b23c44f83946921ebb_laravel.png" alt="" srcSet="" />
          <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6245b62385bb3b640d9f9d5b_flutterio-icon.svg" alt="" srcSet="" />
        </div>
        <div className="home1-c1-r5">
            <div className="work btn--inner1">How It Works
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="try btn--inner2">Try For Free
              <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>

      </div>
      <div className="home1-c2">
        <img className="home1-c2-img1" src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144d124ce8667d6248c6ef1_home%20page%20mvp%20hero%20(1).png" alt="" srcSet="" />
        <img className="home1-side" src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6144d07ab60a1b019cbb159c_circles.png" alt="" />
      </div>
    </div>
  )
}
