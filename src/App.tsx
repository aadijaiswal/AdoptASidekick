import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Importing the functional components for different pages
import Adoption from './pages/Adoption';
import FeedingInitiatives from './pages/FeedingInitiatives';
import Complaints from './pages/Complaints';
import AwarenessCampaign from './pages/AwarenessCampaign';
import LostAndFound from './pages/LostAndFound';

// Define the App component
const App = () => {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">AdoptASidekick</h1>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
            <li><Link to="/adopt" className="text-gray-700 hover:text-blue-600">Adopt</Link></li>
            <li><Link to="/donate" className="text-gray-700 hover:text-blue-600">Donate</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>

        {/* Hero Section */}
        <header className="bg-blue-100 py-20 text-center">
          <h2 className="text-4xl font-bold text-blue-600">Help Save Stray Animals!</h2>
          <p className="text-lg text-gray-600 mt-4">Join us in finding homes for stray cats and dogs.</p>
          <div className="mt-6">
            <Link to="/adopt" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Start Adopting
            </Link>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap">
              {/* Feature 1 */}
              <div className="w-full md:w-1/3 px-4 py-4">
                <img src="https://source.unsplash.com/random/300x200?dog" alt="Adopt a dog" className="w-full h-48 object-cover rounded-md"/>
                <h3 className="text-2xl font-semibold mt-4">Adopt a Pet</h3>
                <p className="text-gray-600 mt-2">Browse through our available cats and dogs, ready for adoption.</p>
              </div>
              {/* Feature 2 */}
              <div className="w-full md:w-1/3 px-4 py-4">
                <img src="https://source.unsplash.com/random/300x200?cat" alt="Donate to help strays" className="w-full h-48 object-cover rounded-md"/>
                <h3 className="text-2xl font-semibold mt-4">Donate for Strays</h3>
                <p className="text-gray-600 mt-2">Your donations will help provide food and shelter for stray animals.</p>
              </div>
              {/* Feature 3 */}
              <div className="w-full md:w-1/3 px-4 py-4">
                <img src="https://source.unsplash.com/random/300x200?animal" alt="Report stray abuse" className="w-full h-48 object-cover rounded-md"/>
                <h3 className="text-2xl font-semibold mt-4">Report Abuse</h3>
                <p className="text-gray-600 mt-2">If you see someone hurting stray animals, report it immediately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area with Routing */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adopt" element={<Adoption />} />
            <Route path="/donate" element={<FeedingInitiatives />} />
            <Route path="/contact" element={<Complaints />} />
            <Route path="/awareness" element={<AwarenessCampaign />} />
            <Route path="/lost-and-found" element={<LostAndFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 AdoptASidekick. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

// Home component (you can replace this with a custom home page)
const Home = () => {
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold text-blue-600">Welcome to AdoptASidekick!</h2>
      <p className="text-lg text-gray-600 mt-4">Find loving homes for stray animals. Explore our services to adopt, donate, or report abuse.</p>
    </div>
  );
};

export default App;
