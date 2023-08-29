import { 
  NavLink, 
  Outlet
} from "react-router-dom";
import Home7 from "../pages/home/Home7";
import { useState } from "react";

export default function ProductLayout() {
  const [pr, setPr] = useState(0);

  const updatePr = (pos) => {
    setPr(pos);

    const spanTags = document.querySelectorAll('.pro--subheader-ele span')
    spanTags.forEach((spanTag) => {
      spanTag.style.color = '#292A2C';
      spanTag.style.fontWeight = '400';
      spanTag.style.borderBottom = 'none'
    })  
    spanTags[pos].style.color = '#6929CA';
    spanTags[pos].style.fontWeight = '600';
    spanTags[pos].style.borderBottom = '1px solid #6929ca'
  }

  return (
    <div className="productLayout">
      <div className="pro--subheader">
        <div className="pro--subheader-container">
          <NavLink 
            className="pro--subheader-ele"
            to=''
            onClick={() => {updatePr(0)}}
          >
            <span className="firstSpan">Overview</span>
          </NavLink>
          <NavLink 
            className="pro--subheader-ele"
            to='ui-kits'
            onClick={() => {updatePr(1)}}
          >
            <span>UI Kits</span>
          </NavLink>
          <NavLink 
            className="pro--subheader-ele"
            to='chat-sdks-api'
            onClick={() => {updatePr(2)}}
          >
            <span>Chat SDKs</span>
          </NavLink>
          <NavLink 
            className="pro--subheader-ele"
            to='extensions' 
            style={{marginRight: '0px'}}
            onClick={() => {updatePr(3)}}
          >
            <span>Extensions</span>
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
      <Home7 />
    </div>
  )
}
