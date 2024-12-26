import { HeroSection } from './hero-section'
import { LogoCloud } from './logo-cloud'
import { FeatureSection } from './feature-section'
import { SocialProof } from './social-proof'
import { CTA } from './cta'
import { FAQ } from './faq'
import { PricingSection } from './pricing'
import { BlogSection } from './blog'
import { BentoGrids } from './bento-grids'
import NewsLetter from './news-letter'
import Stats from './stats'

function LandingPage() {
  return (
    <>
      <HeroSection />
			<LogoCloud />
			<FeatureSection />
			<SocialProof />
			<CTA />
			<FAQ />
			<PricingSection />
			<BlogSection />
			<BentoGrids/>
			<NewsLetter />
			<Stats />
    </>
  )
}

export default LandingPage