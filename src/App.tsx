import AboutSection from "./components/sections/About";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import HowWeWork from "./components/sections/HowWeWork";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import BenifitsSection from "./components/sections/BenifitsSection";
import ApplicationPlansSection from "./components/sections/ApplicationPlansSection";
import ResumeBuildingAndCoachingSection from "./components/sections/ResumeBuildingAndCoachingSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";
import Copyright from "./components/Copyright";

function App() {
  return (
    <main className="max-w-[1500px] mx-auto">
      <section className="min-h-screen flex flex-col bg-cover bg-center bg-[url(/src/assets/hero-gradient.png)]">
        <Header />
        <Hero />
      </section>

      <HowWeWork />

      <section className="min-h-screen flex flex-col bg-cover bg-center bg-[url('/src/assets/about-gradient.png')]">
        <AboutSection />
      </section>

      <TestimonialsSection />

      <BenifitsSection />

      <ApplicationPlansSection />

      <ResumeBuildingAndCoachingSection />

      <section className="h-[354px] max-[980px]:h-[250px] max-w-[1080px] mx-auto mb-25 px-15 max-md:px-3">
        <ContactSection />
      </section>

      <Footer />

      <section className="bg-[#0649E7]">
        <Copyright />
      </section>
    </main>
  );
}

export default App;
