import { ButtonCTA } from './ButtonCTA'
import { ServiceCard } from './serviceCard'
import img from '../assets/hero-section-img.png'
import iconOnline from '../assets/icon-online.png'
import iconBudgeting from '../assets/icon-budgeting.png'
import iconOnboarding from '../assets/icon-onboarding.png'
import iconApi from '../assets/icon-api.png'

export const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className='container-text'>
          <h1>Next generation digital banking</h1>
          <div className='hero-section-content'>
            <p>
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving. budgeting, investing, and much more.
            </p>
            <ButtonCTA>
              <span>Request invite</span>
            </ButtonCTA>
          </div>
        </div>
        <div className='hero-background-img-container'>
          <img src={img} alt="images of the app" />
          <div className='hero-background-img'></div>
        </div>
      </section>
      <section className='hero-subsection'>
        <div className='title-section'>
          <h2>Why choose Easybank?</h2>
          <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>
        <div className='services-container'>
          <ServiceCard icon={iconOnline} tittle="Online Banking" >
            <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. </p>
          </ServiceCard>
          <ServiceCard icon={iconBudgeting} tittle="Simple Budgeting" >
            <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
          </ServiceCard>
          <ServiceCard icon={iconOnboarding} tittle="Fast Onboarding">
            <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away. </p>
          </ServiceCard>
          <ServiceCard icon={iconApi} tittle="Open API" >
            <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. </p>
          </ServiceCard>
        </div>
      </section>
    </>
  )
}
