import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/contact";

function App() {
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

export default App;
