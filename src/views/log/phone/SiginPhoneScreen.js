import React from "react";
import "../../../contans/styles/log.scss";
import bachgroundLog from "../../../assets/img/bachgroundLog.png";
import logo from "../../../assets/img/logo.jpg";
import LoginPhoneForm from "../../../components/log/phone/LoginPhoneForm";
import HeaderLog from "../../../components/log/HeaderLog";
import ItemLeft from "../../../components/log/ItemLeft";
import ItemRight from "../../../components/log/ItemRight";

const SiginPhoneScreen = () => {
  return (
    <div className="Container">
      <HeaderLog logo={logo} />
      <div className="Body">
        <img src={bachgroundLog} className="Image" alt="bachground" />
        <div className="Body-item">
          <ItemLeft title="Du Lịch Thông Minh" />
          <ItemRight
            title="Số điện thoại"
            textTitle="Nhập số điện thoại có 10 chữ số"
          >
            <LoginPhoneForm />
          </ItemRight>
        </div>
      </div>
    </div>
  );
};

export default SiginPhoneScreen;
