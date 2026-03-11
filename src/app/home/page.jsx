import Image from "next/image";
import Footer from "../components/Footer";
import ContactForm from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Hero from "../components/Hero";
import NewsPage from "../components/News";



export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex min-h-screen flex-col">
        <Hero />
        <NewsPage />
        <Newsletter />
        <Testimonials />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}