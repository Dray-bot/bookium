import Hero from '@/components/Hero'
import CategoryList from '@/components/CategoryList'
import FeaturedBooks from '@/components/FeaturedBooks'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import TopAuthors from '@/components/TopAuthors'
import Newsletter from '@/components/NewsLetter'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryList />
      <FeaturedBooks />
      <WhyChooseUs />
      <Testimonials />
      <TopAuthors />
      <Newsletter />
      <Footer />
    </>
  )
}
