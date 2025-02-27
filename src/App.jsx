import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MoreReasons from './components/MoreReasons';
import TrendingNow from './components/TrendingNow';

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <main className='px-[10%]'>
        <TrendingNow />
      <MoreReasons />
      <FAQ />
      </main>
      
      <Footer />
    </div>
  )
}