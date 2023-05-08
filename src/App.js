import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Photos from "./pages/photos";
import Videos from "./pages/videos";
import Music from "./pages/music";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/music" element={<Music />} />
        </Route>
        <Route path="*" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
