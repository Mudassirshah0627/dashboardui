import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard";
import SaudiELeagues from "./pages/saudiELeagues";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<SaudiELeagues />} />
            <Route path="saudi-eLeagues" element={<SaudiELeagues />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
