import Header from "./components/Header";
import MainVisual from "./pages/MainVisual";
import About from "./pages/About";
import Skills from "./pages/Skills";
import ProjectList from "./pages/ProjectList";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="wrap">
      <Header />

      <main className="main">
        <MainVisual />
        <About />
        <Skills />
        <ProjectList />
        <Contact />
      </main>
    </div>
  );
}
