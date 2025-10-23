import './styles/tokens.css'
import './styles/globals.css'
import Topbar from './Components/Topbar/Topbar.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';




export default function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
    </>
  );
}
