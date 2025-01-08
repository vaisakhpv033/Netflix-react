import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FAQ from './components/FAQ';

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <FAQ />
    </div>
  )
}