import "./App.scss";
import SiginPhoneScreen from "./log/phone/SiginPhoneScreen";
import VerifyPhoneScreen from "./log/phone/VerifyPhoneScreen";
function Auth() {
  // return <SiginPhoneScreen />;
  return <VerifyPhoneScreen />;
}
function App() {
  return (
    <div>
      <Auth />
    </div>
  );
}

export default App;
