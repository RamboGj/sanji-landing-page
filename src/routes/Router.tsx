import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/hello-world" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
