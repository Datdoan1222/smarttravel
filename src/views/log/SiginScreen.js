import React from "react";
import "../../contans/styles/log.scss";
import bachgroundLog from "../../assets/img/bachgroundLog.png";
import LoginPhoneForm from "../../components/log/LoginPhoneForm";
// import logoItem from "../../assets/img/logoItem.png";

const SiginScreen = () => {
  return (
    <div className="Container">
      <header className="Header">
        <div>
          {/* <img
          src={bachgroundLog}
          className="Image-background"
          alt="bachground"
        /> */}
        </div>
      </header>
      <body className="Body">
        <div className="Body-item">
          <div className="Item-left">
            <p className="Item-left-title">Du Lịch Thông Minh</p>
            {/* <img src={logoItem} className="Item-left-image" alt="bachground" /> */}
            <div className="Item-left-image"></div>
          </div>
          <div className="Item-right">
            <form>
              <p className="Item-right-title">Số điện thoại</p>
              <LoginPhoneForm />
            </form>
          </div>
        </div>

        <div>
          <img
            src={bachgroundLog}
            className="Image-background"
            alt="bachground"
          />
        </div>
      </body>
    </div>
  );
};

export default SiginScreen;
