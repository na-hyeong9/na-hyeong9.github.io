import Header from "./components/layout/Header"; // 불러오기

function App() {
  return (
    <div className="wrap">
      <Header />

      {/* 헤더가 fixed라 컨텐츠가 가려지지 않게 여백 추가 */}
      <main className="container mt80">
        <h1>여기에 본문이 들어갑니다.</h1>
      </main>
    </div>
  );
}

export default App;
