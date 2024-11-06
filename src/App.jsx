import Landing from "./pages/landing";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import GetAll from "./pages/getAllUsrs";
import GetJpgImage from "./pages/getJpgImage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="get-all-users" element={<GetAll />} />
          <Route path="get-jpg-image" element={<GetJpgImage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
