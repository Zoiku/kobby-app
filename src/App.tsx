import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Inventory from "./pages/Inventory";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Layout from "./layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/users" element={<Users />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/inventory" element={<Inventory />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
