
import CanvasEarth from "./components/CanvasEarth"
import TimeZone from "./components/TimeZone";
import logo from "./assets/as_Scheduled.png"
function App() {



  return (
    <div className="flex flex-col items-center p-6 bg-[#191A19] h-screen">
      <img src={logo} alt="logo" className="fixed z-50 h-14 top-2 left-1/2 transform -translate-x-1/2" />
      <CanvasEarth />
      <TimeZone />

    </div>
  );
}

export default App;