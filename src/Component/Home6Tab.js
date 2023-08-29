import { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';

export default function Home6Tab(props) {
  
  function setBub(pos) {
      const overlays = document.querySelectorAll('.h6tab-c1-r3-overlay')
      const imgs = document.querySelectorAll('.h6tab-c1-r3-overlay img')
      const txts = document.querySelectorAll('.h6tab-c1-r3-overlay-txt')
      const bubDes = document.querySelectorAll('.h6tab-c1-r3-txt')

      if (props.flag == 1) overlays.forEach((overlay) => { overlay.style.backgroundColor = 'white' });
      else overlays.forEach((overlay) => { overlay.style.backgroundColor = '#f0f0f0' });
      imgs.forEach((img) => { img.style.filter = 'invert(0%)' });
      txts.forEach((txt) => { txt.style.color = 'black' });
      bubDes.forEach((bubDe) => bubDe.style.display = 'none')
    
      overlays[pos].style.backgroundColor = 'transparent'
      imgs[pos].style.filter = 'invert(100%)';
      txts[pos].style.color = 'white';
      bubDes[pos].style.display = 'block'
  }


  const [open, setOpen] = useState({
    bub1: 0,
    bub2: 0,
    bub3: 0
  });


  const updateOpen = (pos) => {
    setBub(props.no * 3 + pos-1);
    setOpen((prevOpen) => {
      if (pos == 1) return { bub1:1, bub2:0, bub3:0 }
      if (pos == 2) return { bub1:0, bub2:1, bub3:0 }
      if (pos == 3) return { bub1:0, bub2:0, bub3:1 }
      return prevOpen;
    });
  }

  return (
    <div className="h6tab">
      <div className="h6tab-c1">
        {
          props.flag == 1 &&
          <>
            <div className="h6tab-c1-r1">
              {props.arg1}
            </div>
            <div className="h6tab-c1-r2">
              Top Features
            </div>
          </>          
        }

        <div className="h6tab-c1-r3-col">
          <div className="h6tab-c1-r3" onClick={() => updateOpen(1)}>
            <div className="h6tab-c1-r3-overlay">
              <img src={props.arg2.bub1.url} alt="" />
              <div className="h6tab-c1-r3-overlay-txt">{props.arg2.bub1.text}</div>
            </div>
          </div>

          <Collapse in={open.bub1} >
            <div className="h6tab-c1-r3-txt">
              {props.arg2.bub1.des}
            </div>
          </Collapse>

          <div className="h6tab-c1-r3" onClick={() => updateOpen(2)}>
            <div className="h6tab-c1-r3-overlay">
              <img src={props.arg2.bub2.url} alt="" />
              <div className="h6tab-c1-r3-overlay-txt">{props.arg2.bub2.text}</div>
            </div>
          </div>

          <Collapse in={open.bub2} >
            <div className="h6tab-c1-r3-txt">
              {props.arg2.bub2.des}
            </div>
          </Collapse>

          <div className="h6tab-c1-r3" onClick={() => updateOpen(3)}>
            <div className="h6tab-c1-r3-overlay">
              <img src={props.arg2.bub3.url} alt="" />
              <div className="h6tab-c1-r3-overlay-txt">{props.arg2.bub3.text}</div>
            </div>
          </div>

          <Collapse in={open.bub3}>
            <div className="h6tab-c1-r3-txt">
              {props.arg2.bub3.des}
            </div>

          </Collapse>


        </div>
      </div>
      <div className="h6tab-c2">
        
          <div className="h6tab-c2-r1">
            <img src={props.arg3} alt="" />
          </div>        
        
        
        { props.flag ==1 && Object.keys(props.arg4).length !== 0 &&
          <>
            <div className="h6tab-c2-r2">
              <img src={props.arg4.url} alt="" />
            </div>
            <div className="h6tab-c2-r3">
              {props.arg4.text}
            </div>
            <div className=" home2-r4-c3-r1--last img1-r6">
              Read More
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </>
        }
      </div>
    </div>
  )
}
