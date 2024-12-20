import Navbar from "./ui/navbar/navbar";
import Projects from "./ui/projects/projects";
import ContentWrapper from "./ui/content-wrapper/content-wrapper";
import HeroSection from "./ui/hero-section/hero-section";
import Footer from "./ui/footer/footer";
import PageWrapper from "./ui/page-wrapper/page-wrapper";

export default function Page() {
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <HeroSection />
        <ContentWrapper wide id="my-work">
          <h1>My work</h1>
          <Projects />
        </ContentWrapper>
      </main>
      <Footer />
    </PageWrapper>
  );
}
