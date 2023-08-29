import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Home2() {
  const [hei, setHei] = useState(0);
  useEffect(() => {
      window.addEventListener("scroll", (event) => {
        let scroll = window.scrollY;
        let perLen = 0;
        if (scroll < 853) perLen = 0;
        else if (scroll > 1935) perLen = 100;
        else perLen = (scroll - 853) * 100 / (1935 - 853);
        setHei(perLen);
      });
	}, [])

  return (
    <div className="home2">
      <div className="home2-r1" >All-In-One: <span className='pink--txt'>Text</span>, <span className='pink--txt'>Voice</span> and <span className='pink--txt'>Video</span></div>
      <div className="home2-r2">With an intuitive messaging experience users can do more without leaving your platform. With integrations, flexible deployment, and a build option for every developer skillset (APIs, SDKs, UI Kits, and more) your team can implement chat and return its focus to your core product.</div>
      <div className="home2-r3">
          <div className="learn btn--outer btn--inner2-rev">Learn More
            <i className="fa-solid fa-arrow-right"></i>
          </div>
      </div>
      <div className="home2-r4">
        <div className="home2-r4-side">
          <img className="home2-r4-side1" src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/61422115b01d8c08508a8484_Vector%20(2).svg" alt="" srcSet="" />
          <div className="home2-r4-sideline">
            <div className="home2-r4-sideline-active" style={{ height: `${hei}%` }}></div>
          </div>
          <img className="home2-r4-side2" src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/61422115b01d8c52c38a8483_Vector%20(3).svg" alt="" srcSet="" />
        </div>
        <Carousel id="damn" fade keyboard>
          <Carousel.Item interval={null}>
            <div className="home2-r4--car">
              <div className="home2-r4-c1">
                How easy is it to implement CometChat?
              </div>
              <div className="home2-r4-c2">
                <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/61421b8c90255677b63e7b9d_phone%20(4).png" alt="" />
              </div>
              <div className="home2-r4-c3">
                <div className="home2-r4-c3-r1 img1-r1">Single Sign-On (SSO)</div>
                <div className="home2-r4-c3-r1 img1-r2">Message History</div>
                <div className="home2-r4-c3-r1 img1-r3">Sentiment Analysis</div>
                <div className="home2-r4-c3-r1 img1-r4">Rich Media Attachements</div>
                <div className="home2-r4-c3-r1">Typing Indicators</div>
                <div className="home2-r4-c3-r1 home2-r4-c3-r1--last img1-r6">
                  And SO Much More
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={null}>
          <div className="home2-r4--car">
              <div className="home2-r4-c1">
                How easy is it to implement CometChat?
              </div>
              <div className="home2-r4-c2">
                <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/61421b8ca28559a03f4432c0_phone%20(5).png" alt="" />
              </div>
              <div className="home2-r4-c3">
                <div className="home2-r4-c3-r1 img2-r1">One-to-One Calling</div>
                <div className="home2-r4-c3-r1 img1-r2">Secure HD Connection</div>
                <div className="home2-r4-c3-r1 img1-r3">Users & Friends List</div>
                <div className="home2-r4-c3-r1 img1-r4">Group Calling / Conferencing</div>
                <div className="home2-r4-c3-r1">Single Sign-On (SSO)</div>
                <div className="home2-r4-c3-r1 home2-r4-c3-r1--last img1-r6">
                  And SO Much More
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={null}>
          <div className="home2-r4--car">
              <div className="home2-r4-c1">
                How easy is it to implement CometChat?
              </div>
              <div className="home2-r4-c2">
                <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/61421b8ce0d1acdf060df370_phone%20(6).png" alt="" />
              </div>
              <div className="home2-r4-c3">
                <div className="home2-r4-c3-r1 img3-r1">Single Sign-On (SSO)</div>
                <div className="home2-r4-c3-r1 img1-r3">Video Calling / Conferencing</div>
                <div className="home2-r4-c3-r1 img1-r4">Video Broadcasting</div>
                <div className="home2-r4-c3-r1">Secure HD Connection</div>
                <div className="home2-r4-c3-r1 home2-r4-c3-r1--last img1-r6">
                  And SO Much More
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>


      </div>
      <div className="home2-r5-outter">
        <div className="home2-r5">Implementation Options for Every Developer Skillset</div>
        <div className="home2-r6">Powerful SDKs, UI Kits, APIs, and even a no-code widget help developers of any skill level ship an integrated chat solution.</div>
      </div>


    </div>
  )
}
