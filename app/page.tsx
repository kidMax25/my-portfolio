import Header from '../components/Header'
import Hero from '../components/Hero'
import SkillsShowcase from '../components/SkillsShowcase'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  console.log('Service ID:', process.env.NEXT_PUBLIC_SERVICE_ID)
  console.log('Template ID:', process.env.NEXT_PUBLIC_TEMPLATE_ID)
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <SkillsShowcase />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

