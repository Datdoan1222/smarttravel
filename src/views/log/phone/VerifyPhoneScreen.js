import React,{useState} from "react";
import "../../../contans/styles/log.scss";
import bachgroundLog from "../../../assets/img/bachgroundLog.png";
import logo from "../../../assets/img/logo.jpg";
import HeaderLog from "../../../components/log/HeaderLog";
import ItemLeft from "../../../components/log/ItemLeft";
import ItemRight from "../../../components/log/ItemRight";
import VerifyOTP from "../../../components/log/phone/VerifyOTP";

function VerifyPhoneScreen() {
  const [otp, setOtp] = useState("");
  const onChange = (value) => setOtp(value);
  return (
    <div className="Container">
      <HeaderLog logo={logo} />
      <div className="Body">
        <img src={bachgroundLog} className="Image" alt="bachground" />
        <div className="Body-item">
          <ItemLeft title="Du Lịch Thông Minh" />
          <ItemRight
            title="Nhập OTP"
            textTitle="Chúng tôi vừa gửi cho bạn mã gồm 4 chữ số qua số điện thoại"
          >
            <VerifyOTP value={otp} valueLength={4} onChange={onChange} />
          </ItemRight>
        </div>
      </div>
    </div>
  );
}

export default VerifyPhoneScreen;
