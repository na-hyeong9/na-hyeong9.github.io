import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import About from "./components/About";

function App() {
  return (
    <div className="wrap">
      <Header />

      {/* 헤더가 fixed라 컨텐츠가 가려지지 않게 여백 추가 */}
      <main>
        <MainVisual />
        <About />
      </main>
    </div>
  );
}

export default App;
