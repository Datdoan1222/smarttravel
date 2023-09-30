import "./App.scss";
import SiginScreen from "./log/SiginScreen";
function Auth() {
  return <SiginScreen />;
}
function App() {
  return (
    <div>
      <Auth />
    </div>
  );
}

export default App;
