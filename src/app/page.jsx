import Image from "next/image";
import Hero from "./components/Hero";
import News from "./components/News";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex min-h-screen flex-col">
        <Hero />
        <News />
        <Newsletter />
        <Testimonials />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
