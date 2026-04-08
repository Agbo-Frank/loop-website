import Footer from "../../component/footer"
import Nav from "../../component/nav"
import DemoSection from "./sections/demo"
import FAQSection from "./sections/faq"
import FeaturesSection from "./sections/features"
import Hero from "./sections/hero"
import LogoBar from "./sections/logobar"
import ProblemSection from "./sections/problems"
import ProductsSection from "./sections/products"
import SolutionSection from "./sections/solutions"
import StatsBar from "./sections/statsbar"
import TestimonialsSection from "./sections/testimonia"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoBar />
        <ProblemSection />
        <SolutionSection />
        <StatsBar />
        <FeaturesSection />
        <ProductsSection />
        <TestimonialsSection />
        <FAQSection />
        <DemoSection />
      </main>
      <Footer />
    </>
  )
}
