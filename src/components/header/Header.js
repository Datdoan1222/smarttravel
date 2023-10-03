// import { BsBookmark } from "react-icons/bs";
// import { BsClockHistory } from "react-icons/bs";
// import { BsFillSignTurnRightFill } from "react-icons/bs";
// import { LiaLanguageSolid } from "react-icons/lia";
// import { AiOutlineMenu } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/ai";


// import "../../contans/styles/Header.scss";

// const Header = () => {
//   return (
//     <div className="Container">
//       <div className="nav-head">
//         <div className="nav-close nav-item ">
//         <span className="icon" style={{marginRight: 0}}> 
//           <AiOutlineClose />
//         </span>
//         </div>
//         {/* <div className="nav-hamburger nav-item">
//           <AiOutlineMenu />
//         </div> */}
//         <ul className="list-item">
//           <div className="nav-item">
//             <a className="handleHeader">
//               <span className="icon">
//                 <BsBookmark className="iconSearch" />
//               </span>
//               Đã lưu
//             </a>
//           </div>
//           <div className="nav-item">
//             <a className="handleHeader">
//               <span className=" icon">
//                 <BsClockHistory className="iconSearch" />
//               </span>
//               Gần đây
//             </a>
//           </div>
//           <div className="nav-item">
//             <a className="handleHeader">
//               <span className=" icon">
//                 <BsFillSignTurnRightFill className="iconSearch" />
//               </span>

//               <span className="title">Chỉ đường</span>
//             </a>
//           </div>
//           <div className="nav-item">
//             <a className="handleHeader">
//               <span className=" icon">
//                 <LiaLanguageSolid className="iconSearch" />
//               </span>

//               <span className="title">Ngôn ngữ</span>
//             </a>
//           </div>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsBookmark, BsClockHistory, BsFillSignTurnRightFill } from "react-icons/bs";
import { LiaLanguageSolid } from "react-icons/lia";
import "../../contans/styles/Header.scss";

const Header = () => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClickToggle = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div className={`Container ${isClosed ? "closed" : ""}`}>
      <div className="nav-head">
        <div className="nav-close nav-item" onClick={handleClickToggle}>
          <span className=" icon-status" style={{ marginRight: 0 }}>
            {isClosed ? (
              <AiOutlineMenu />
            ) : (
              <AiOutlineClose />
            )}
          </span>
        </div>
        <ul className={`list-item ${isClosed ? "closed" : ""}`}>
          <li className="nav-item">
            <a className="handleHeader">
              <span className="icon">
                <BsBookmark className="iconSearch" />
              </span>
              <span className="title">Đã lưu</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="handleHeader">
              <span className="icon">
                <BsClockHistory className="iconSearch" />
              </span>
              <span className="title">Gần đây</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="handleHeader">
              <span className="icon">
                <BsFillSignTurnRightFill className="iconSearch" />
              </span>
              <span className="title">Chỉ đường</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="handleHeader">
              <span className="icon">
                <LiaLanguageSolid className="iconSearch" />
              </span>
              <span className="title">Ngôn ngữ</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;