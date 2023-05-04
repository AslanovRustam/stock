import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Photos from "./components/photos/photos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Photos />} />
          <Route path="/illustrations" element={<div>illustrations</div>} />
          <Route path="/vectors" element={<div>vectors</div>} />
          <Route path="/videos" element={<div>videos</div>} />
          <Route path="/music" element={<div>music</div>} />
        </Route>
        <Route path="*" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
