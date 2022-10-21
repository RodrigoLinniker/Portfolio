import Aos from "aos";
import { useEffect } from "react";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projetos } from "./components/Projetos";
import { Skills } from "./components/Skills";
import { Sobre } from "./components/Sobre";

function App() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <Header />
      <Sobre />
      <Skills />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
