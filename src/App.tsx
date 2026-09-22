import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import MusicControl from "./components/audio/MusicControl";
import PageTransition from "./components/transitions/PageTransition";
import { useMetadata } from "./hooks/useMetadata";
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
export default function App() {
  const { pathname } = useLocation();
  useMetadata();
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <div className="audio-row">
          <MusicControl />
        </div>
        <Suspense
          fallback={
            <div className="route-loading" role="status">
              LOADING RECORD…
            </div>
          }
        >
          <PageTransition key={pathname}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </main>
      <Footer />
    </MotionConfig>
  );
}
