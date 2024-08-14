import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard";
import SaudiELeagues from "./pages/saudiELeagues";
import Players from "./pages/players";
import Orders from "./pages/orders";
import Leagues from "./pages/leagues";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<SaudiELeagues />} />
            <Route path="saudi-eLeagues" element={<SaudiELeagues />} />
            <Route path="players" element={<Players />} />
            <Route path="orders" element={<Orders />} />
            <Route path="leagues" element={<Leagues />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
