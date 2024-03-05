
import logo from "./assets/as_Scheduled.png";
import CanvasEarth from "./components/CanvasEarth"
import TimeZone from "./components/TimeZone";
function App() {



  return (
    <div className="flex flex-col items-center p-6 bg-[#191A19] h-screen">
      {/* <img src={logo} alt="logo" className='h-20' /> */}
      <CanvasEarth />
      <TimeZone />

    </div>
  );
}

export default App;