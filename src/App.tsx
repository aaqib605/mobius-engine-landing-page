import AboutSection from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import TestimonialsSection from "./components/TestimonialsSection";

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

      <section>
        <HowWeWork />
      </section>

      <section
        className="min-h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/about-gradient.png')" }}
      >
        <AboutSection />
      </section>

      <section>
        <TestimonialsSection />
      </section>
    </main>
  );
}

export default App;
