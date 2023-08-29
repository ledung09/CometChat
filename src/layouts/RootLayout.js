import { NavLink, Outlet } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

export default function RootLayout() {  
  return (
    <div className="root-layout">
      <header id="header-wrapper">
        <div className="header--container">
          <NavLink to='/'>
            <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/61fa9da6582eb93036b07cda_horizontal%20primary.svg" alt="" srcSet="" />
          </NavLink>
          <NavLink 
            to='pro' 
            className="header--ele">
            {({ isActive }) => (
              <span style={{ color: isActive ? '#6929CA' : ""}}>
                Product
              </span>
            )}
          </NavLink>

          <Dropdown>
            <Dropdown.Toggle className="header--ele">
                Solutions
              <i className="fa-solid fa-angle-down"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Dating</Dropdown.Item>
              <Dropdown.Item>Edu-Tech</Dropdown.Item>
              <Dropdown.Item>Live Streaming and Events</Dropdown.Item>
              <Dropdown.Item>Marketplace</Dropdown.Item>
              <Dropdown.Item>On Demand</Dropdown.Item>
              <Dropdown.Item>Social Community</Dropdown.Item>
            
            </Dropdown.Menu>
          </Dropdown>

          <NavLink to='page-developing' className="header--ele">Pricing</NavLink>

          <Dropdown>
            <Dropdown.Toggle className="header--ele">
              Developers
              <i className="fa-solid fa-angle-down"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Documentation</Dropdown.Item>
              <Dropdown.Item>Tutorials</Dropdown.Item>
              <Dropdown.Item>Blog</Dropdown.Item>
              <Dropdown.Item>Product Updates</Dropdown.Item>
              <Dropdown.Item>UI Kits</Dropdown.Item>
              <Dropdown.Item>SDKs and APIs</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <NavLink to='page-developing' className="header--ele">Help Center</NavLink>

          <div className="header--ele login--section">
            <div className="login">Sign In</div>
            <NavLink to='page-developing' className="sale">Contact Sales
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </header>
      
      <main>
        <Outlet />
      </main>

      <footer>
        <div className="ft--container">
          <div className="ft-r1">
            <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/613fbf5128051b65f319e6c2_dark.svg" alt="" />
          </div>
          <div className="ft-r2">
            <div className="ft-r2-c1">
              <p>Product</p>
              <a href="">Overview</a>
              <a href="">Chat & Messaging</a>
              <a href="">Extensions</a>
              <a href="">UI Kits</a>
              <a href="">SDKs & APIs</a>
              <a href="">Pricing</a>
            </div>
            <div className="ft-r2-c1">
              <p>Solutions</p>
              <a href="">Social Community</a>
              <a href="">Marketplace</a>
              <a href="">Dating</a>
              <a href="">On Demand</a>
              <a href="">Edu-Tech</a>
              <a href="">Live Streaming</a>
            </div>
            <div className="ft-r2-c1">
              <p>Developers</p>
              <a href="">Documentation</a>
              <a href="">Tutorials</a>
              <a href="">Help Center</a>
              <a href="">Product Updates</a>
              <a href="">Product Status</a>
              <a href="">Give Feedback</a>
              <a href="">API Explorer</a>
            </div>
            <div className="ft-r2-c1">
              <p>Company</p>
              <a href="">About Us</a>
              <a href="">Blog</a>
              <a href="">Contact Sales</a>
              <a href="">Contact Support</a>
              <a href="">Careers</a>
              <a href="">Partners</a>
              <a href="">Privacy Policy</a>
            </div>
            <div className="ft-r2-c2">
              <div className="ft-r2-c2-r1">
                <img src="https://images.g2crowd.com/uploads/report_medal/image/1003316/medal.svg" alt="" />
                <img src="https://www.g2.com/shared-assets/product-badges/users-love-us.svg" alt="" srcSet="" />
              </div>
              <div className="ft-r2-c2-r2">Connect</div>
              <div className="ft-r2-c2-r3">
                <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/613fc2514e1408b67c772eea_facebook.svg" alt="" />
                <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/613fc24a407d136dbd327ede_linkedin.svg" alt="" srcSet="" />
                <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6151d45b4359583fa926dd43_linkedin.svg" alt="" />
                <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/6151d4f0e3ae262ac4992cd3_linkedin%20(6).svg" alt="" />
                <img src="https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/630cfc541c910f6399a47628_github.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="ft-r3"> 2023 © CometChat — <span className="pink--txt">Terms</span> & <span className="pink--txt">Privacy Policy</span></div>
        </div>
      </footer>    
    </div>
  )
}
