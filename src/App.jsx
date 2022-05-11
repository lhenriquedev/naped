import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Series } from "./pages/Series/Series";
import { Games } from "./pages/Games/Games";
import { Animes } from "./pages/Animes/Animes";
import { Movies } from "./pages/Movies/Movies";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import GlobalStyle from "./styles/globalStyles";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/animes" element={<Animes />} />
          <Route path="/games" element={<Games />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
