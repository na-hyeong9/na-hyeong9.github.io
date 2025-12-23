import Header from "./components/Header"; // 불러오기
import MainVisual from "./components/MainVisual"; // 불러오기

function App() {
  return (
    <div className="wrap">
      <Header />

      {/* 헤더가 fixed라 컨텐츠가 가려지지 않게 여백 추가 */}
      <main className="container mt80">
        <MainVisual />
      </main>
    </div>
  );
}

export default App;
