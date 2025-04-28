import Header from "./components/Header";
import Hero from "./components/Hero";

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
    </main>
  );
}

export default App;
