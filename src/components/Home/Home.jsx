import AboutSection from "../AboutSection/AboutSection"
import ChooseUsSection from "../ChooseUsSection/ChooseUsSection"
import Footer from "../Footer/Footer"
import NavigationBar from "../NavigationBar/NavigationBar"
import ReviewsSection from "../ReviewsSection/ReviewsSection"
import ServicesSection from "../ServicesSection/ServicesSection"
import WelcomeSection from "../WelcomeSection/WelcomeSection"



function Home() {
  return (
    <div className="Home">
      <NavigationBar/>
      <WelcomeSection/>
      <AboutSection/>
      <ServicesSection/>
      <ChooseUsSection/>
      <ReviewsSection/>
      <Footer/>
    </div>
  )
}

export default Home
