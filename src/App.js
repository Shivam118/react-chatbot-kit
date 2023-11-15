import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HomeScreen from "./bot/HomeScreen";
import SuccessPage from "./bot/SuccessPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100vw",
                height: "100vh",
                background: "#376D7E",
              }}
            >
              <h1 style={{ color: "white" }}>Enter into Student Info System</h1>
              <NavLink to="/details" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "15px",
                    padding: "10px 15px",
                  }}
                >
                  Enroll Now!
                </div>
              </NavLink>
            </div>
          }
        />
        <Route path="/details" element={<HomeScreen />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}
