import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import "./App.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Support from "./pages/Support";

function App() {
  return (
    <Router basename="/custom-photo-collage">
      <div className="App">
        <header className="AppHeader">
          <div className="AppBrand">
            <span className="AppBrand-highlight">Frame - Photo Collage</span>
          </div>
          <nav className="AppNav">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/support">Support</Link>
          </nav>
        </header>

        <main className="AppContent">
          <Routes>
            <Route path="/" element={<Navigate to="/privacy" replace />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
