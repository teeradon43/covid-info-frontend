import { Search, Result } from './Components/Page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="m-auto">
        <Routes>
          <Route path="/result" element={<Result />} exact />
          <Route path="/" element={<Search />} exact />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
