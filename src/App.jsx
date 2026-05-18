import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SentimentBox from "./components/SentimentBox";
import Footer from "./components/Footer";

export default function App() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 px-5">

      <Navbar />

      <div className="flex flex-col items-center justify-center">

        <Hero />

        <SentimentBox />

        <Footer />

      </div>

    </div>

  )
}