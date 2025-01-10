import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MoreReasons from './components/MoreReasons';

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <main className='px-[10%]'>
      <MoreReasons />
      <FAQ />
      </main>
      
      <Footer />
    </div>
  )
}