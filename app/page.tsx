import Logo from '@/components/Logo'
import ContactForm from '@/components/ContactForm'

const stats = [
  { value: '1B+', label: 'organic views' },
  { value: '2,000+', label: 'creators' },
  { value: '68.9M', label: 'views on one edit' },
]

const work = [
  { title: 'Sonic the Hedgehog 3', note: '68.9M views · Clio Entertainment shortlist' },
  { title: 'F1', note: 'campaign' },
]

export default function Home() {
  return (
    <>
      <header className="top">
        <span>Est. 2024 · Dubai</span>
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

        <section className="stats" aria-label="Numbers">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="stat">{s.value}</p>
              <p className="caps">{s.label}</p>
            </div>
          ))}
        </section>

        <section className="block">
          <p className="caps label">Selected work</p>
          <ul className="work">
            {work.map((w) => (
              <li key={w.title}>
                <span className="work-title">{w.title}</span>
                <em>{w.note}</em>
              </li>
            ))}
          </ul>
        </section>

        <section className="block">
          <p className="caps label">As seen in</p>
          <a
            className="press"
            href="https://www.yahoo.com/entertainment/movies/articles/why-hollywood-paying-17-old-102101659.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="caps press-name">Business Insider</span>
            <span className="press-quote">
              &ldquo;Why Hollywood is paying this 17-year-old up to $20,000 to boost film trailers with TikTok
              edits&rdquo;
            </span>
          </a>
          <div className="press">
            <span className="caps press-name">Clio Entertainment Awards</span>
            <span className="press-quote">Shortlisted</span>
          </div>
        </section>

        <section id="contact" className="block contact">
          <p className="caps label">Contact</p>
          <h2 className="contact-title">Got a release?</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="foot">
        <Logo className="logo-sm" />
        <p>© {new Date().getFullYear()} Viral Cartel Inc.</p>
      </footer>
    </>
  )
}
