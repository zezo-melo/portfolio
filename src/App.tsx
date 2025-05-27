import './App.css'
import Header from './components/Sections/Header'
import Carousel from './components/Sections/Carousel';
import AboutPreviewCarousel from './components/Sections/AboutPreviewCarousel';
import ProjectsPreview from './components/Sections/ProjectsPreview';
import CTASection from './components/Sections/CTASection';
import SkillsSection from './components/Sections/SkillsSection';
import Footer from './components/Sections/Footer';

function App() {

  return (
    <>
      <Header />
      <Carousel />
      <AboutPreviewCarousel />
      <ProjectsPreview />
      <CTASection />
      <SkillsSection />
      <Footer />
    </>
  )
}

export default App;
