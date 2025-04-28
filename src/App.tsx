import Header from "./components/Header";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";

function App() {
  return (
    <main>
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
    </main>
  );
}

export default App;
