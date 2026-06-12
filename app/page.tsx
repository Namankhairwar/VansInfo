import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Products from '@/components/products'
import Approach from '@/components/approach'
import Team from '@/components/team'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Products />
        <Approach />
        <Team />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
