import AreasOfFocus from "@/components/AreasOfFocus";
import BlogsResources from "@/components/BlogResources";
import CardSlider from "@/components/CardSlider";
import CofoundSteps from "@/components/CofoundSteps";
import ConceptInnovations from "@/components/ConceptInnovations";
import EirProgram from "@/components/EirProgram";
import EquityJobs from "@/components/EquityJobs";
import FactQuote from "@/components/FactQuote";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroEnd from "@/components/HeroEnd";
import InvestorsNetwork from "@/components/InvestorNetwork";
import Navbar from "@/components/Navbar";
import PortfolioGrid from "@/components/PortfolioGrid";
import ServiceIncubationModel from "@/components/ServiceIncubationModel";

function MyApp() {
  return (
    <>
      <Navbar />
      <Hero />
      <FactQuote />
      <AreasOfFocus />
      <ConceptInnovations />
      <ServiceIncubationModel />
      <PortfolioGrid />
      <CofoundSteps />
      <EirProgram />
      <InvestorsNetwork />
      <EquityJobs />
      <BlogsResources />
      <CardSlider />
      <HeroEnd />
      <Footer />
    </>
  );
}

export default MyApp;
