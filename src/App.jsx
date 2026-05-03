import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </div>
    </div>
  );
}
