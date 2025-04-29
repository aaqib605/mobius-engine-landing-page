import AboutSection from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import TestimonialsSection from "./components/TestimonialsSection";
import BenifitsSection from "./components/BenifitsSection";
import ApplicationPlansSection from "./components/ApplicationPlansSection";
import ResumeBuildingAndCoachingSection from "./components/ResumeBuildingAndCoachingSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <main className="max-w-[1500px] mx-auto">
      <section
        className="min-h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/hero-gradient.png')" }}
      >
        <Header />
        <Hero />
      </section>

      <HowWeWork />

      <section
        className="min-h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/about-gradient.png')" }}
      >
        <AboutSection />
      </section>

      <TestimonialsSection />

      <BenifitsSection />

      <ApplicationPlansSection />

      <ResumeBuildingAndCoachingSection />

      <section className="h-[354px] max-[980px]:h-[250px] max-w-[1080px] mx-auto mb-25 px-15 max-md:px-3">
        <ContactSection />
      </section>
    </main>
  );
}

export default App;
