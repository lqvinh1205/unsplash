import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import HomePages from "./features/homePage";
import NoMatch from "./features/noMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
