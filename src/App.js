import "./App.css"
// import Auth from "./Pages/Auth";
// import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
function App() {
  return (
    <div className="App">
        <div className="blur" style={{
          top: "-18%" , right : "0"
        }}></div>
        <div className="blur" style={{
          top:"36%" , left:"-8rem"
        }}></div>

        {/* <Home/> */}
        <Profile />
        {/* <Auth /> */}
    </div>
  );
}

export default App;
