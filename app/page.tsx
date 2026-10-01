import Image from 'next/image'
import Logo from '@/components/Logo'
import ContactForm from '@/components/ContactForm'
import CaseStudies from '@/components/CaseStudies'
import Thread from '@/components/Thread'

const services = ['Short-form edits', 'Fan-driven campaigns']

export default function Home() {
  return (
    <>
      <header className="top">
        <span>Est. 2024 · Stockholm</span>
        <a href="#contact">Contact</a>
      </header>

      <main>
        <section className="hero">
          <h1 className="fade">
            <Logo className="logo" />
          </h1>
          <p className="tagline fade d1">We make films go viral.</p>
          <a href="#contact" className="btn fade d2">
            Work with us
          </a>
        </section>

        <Thread className="thread-tall" />

        <section className="block">
          <p className="caps label">As seen on</p>
          <div className="press-logos">
            <a
              href="https://www.yahoo.com/entertainment/movies/articles/why-hollywood-paying-17-old-102101659.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Business Insider"
            >
              <Image src="/press-bi.png" alt="Business Insider" width={465} height={160} className="press-bi" />
            </a>
            <Image
              src="/press-clio.png"
              alt="The Clio Awards 2025 Shortlist"
              width={574}
              height={355}
              className="press-clio"
            />
          </div>
        </section>

        <Thread />

        <section className="block">
          <p className="caps label">What we do</p>
          <ul className="services">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <Thread />

        <section className="block">
          <CaseStudies />
        </section>

        <Thread />

        <section id="contact" className="block contact">
          <p className="caps label">Contact</p>
          <h2 className="contact-title">Got a release?</h2>
          <ContactForm />
        </section>

        <Thread />
      </main>

      <footer className="foot">
        <Logo className="logo-sm" />
        <p>© {new Date().getFullYear()} Viral Cartel Inc.</p>
      </footer>
    </>
  )
}
