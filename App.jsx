import './styles/tokens.css';
import './styles/globals.css';
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

export default function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
    </>
  );
}
