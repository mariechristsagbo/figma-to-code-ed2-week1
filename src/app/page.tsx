import HeroSection from '@/components/HeroSection'
import Collections from '@/components/Collections'
import Services from '@/components/Services'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home () {
  return (
    <main className='max-w-7xl mx-auto px-4'>
       <HeroSection/>
       <Collections/>
       <Services/>
       <CallToAction/>
    </main>
  )
}
