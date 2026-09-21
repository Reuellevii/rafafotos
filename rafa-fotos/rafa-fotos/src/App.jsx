import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Differentials from './components/Differentials'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CtaWhatsApp from './components/CtaWhatsApp'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

// Ordem das seções da página. Para mudar a ordem, basta trocar as linhas de lugar.
export default function App() {
  return (
    <>
      <a className="pular-conteudo" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Differentials />
        <Process />
        <Testimonials />
        <CtaWhatsApp />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
