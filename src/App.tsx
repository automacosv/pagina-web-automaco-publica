import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />

        <main className="grow">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;