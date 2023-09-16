import "./App.css";
import Layout from "./Components/Layout";
import IndexRoutes from "./Routes";
function App() {
  return (
    <div className="App">
      <Layout>
        <IndexRoutes />
      </Layout>
    </div>
  );
}

export default App;
