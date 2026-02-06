import Header from "./components/Header";
import MainVisual from "./pages/MainVisual";
import About from "./pages/About";
import ProjectList from "./pages/ProjectList";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="wrap">
      <Header />

      <main className="main">
        <MainVisual />
        <About />
        <ProjectList />
        <Contact />
      </main>
    </div>
  );
}
