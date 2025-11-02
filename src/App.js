import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import "./App.css";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="AppHeader">
          <div className="AppBrand">
            <span className="AppBrand-highlight">Custom Photo Collage</span>
          </div>
          <nav className="AppNav">
            <Link to="/custom-photo-collage/terms">Terms of Use</Link>
            <Link to="/custom-photo-collage/privacy">Privacy Policy</Link>
          </nav>
        </header>

        <main className="AppContent">
          <Routes>
            <Route path="/" element={<Navigate to="/terms" replace />} />
            <Route
              path="/custom-photo-collage/terms"
              element={<TermsOfUse />}
            />
            <Route
              path="/custom-photo-collage/privacy"
              element={<PrivacyPolicy />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
