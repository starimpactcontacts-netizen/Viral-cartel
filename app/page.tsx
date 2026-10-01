import Crest from '@/components/Crest'
import ContactForm from '@/components/ContactForm'

const ticker = ['Film', 'Television', 'Music', 'Streaming', 'Gaming', 'Live Events', 'Creators', 'Culture']

const pillars = [
  {
    n: '01',
    title: 'Attention is the new box office',
    body: 'Audiences discover what to watch on their feeds, not on billboards. Distribution now starts where culture is already happening.',
  },
  {
    n: '02',
    title: 'Creators are the channel',
    body: 'Millions of creators shape what breaks through. We give studios the systems to activate them deliberately, not by luck.',
  },
  {
    n: '03',
    title: 'Built to scale',
    body: 'One campaign, thousands of voices. Our products turn a single release moment into a compounding wave of content.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Launch a challenge',
    body: 'Studios set the brief, the assets and the rewards for a release.',
  },
  {
    n: '02',
    title: 'Creators compete',
    body: 'Creators remix, react and produce original UGC, competing for placement and prizes.',
  },
  {
    n: '03',
    title: 'Attention compounds',
    body: 'The best content rises, multiplying reach across every platform at once.',
  },
]

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="wordmark" aria-label="Viral Cartel home">
          Viral Cartel
        </a>
        <a href="#top" className="nav-crest" aria-hidden tabIndex={-1}>
          <Crest size={44} />
        </a>
        <a href="#contact" className="btn btn-ghost btn-sm">
          Contact <span aria-hidden>↗</span>
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow" aria-hidden />
          <p className="eyebrow">Viral Cartel Inc.</p>
          <h1 className="headline">
            Infrastructure for the <br className="br-lg" />
            attention economy
          </h1>
          <div className="rule" aria-hidden />
          <p className="lede">
            We build systems that turn cultural attention into scalable distribution for film &amp; entertainment.
          </p>
          <p className="muted hero-body">
            Viral Cartel is building a multi-product platform for cultural distribution in entertainment. Our flagship
            product, Loopgate, lets studios ignite competitive UGC at massive scale.
          </p>
          <div className="cta-row">
            <a href="#loopgate" className="btn btn-primary">
              View Loopgate <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact sales <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        <div className="ticker" aria-hidden>
          <div className="ticker-track">
            {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
              <span key={i}>
                {t}
                <i>✦</i>
              </span>
            ))}
          </div>
        </div>

        <section className="section">
          <div className="section-head">
            <p className="eyebrow">Why we exist</p>
            <h2 className="headline h2">Distribution has moved to the feed</h2>
          </div>
          <div className="grid-3">
            {pillars.map((p) => (
              <article key={p.n} className="card">
                <span className="card-n">{p.n}</span>
                <h3>{p.title}</h3>
                <p className="muted">{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="loopgate" className="section loopgate">
          <div className="loopgate-inner">
            <div className="section-head">
              <p className="eyebrow">Flagship product</p>
              <h2 className="headline h2 xl">Loopgate</h2>
              <p className="lede left">
                Competitive UGC at massive scale. Loopgate lets studios turn every release into a creator-powered
                distribution engine.
              </p>
            </div>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.n}>
                  <span className="card-n">{s.n}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p className="muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a href="#contact" className="btn btn-primary">
              Request a demo <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2 className="headline h2">Let&rsquo;s move culture</h2>
            <p className="muted">
              Studios, distributors and partners: tell us what you&rsquo;re launching and we&rsquo;ll show you how to
              scale it.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="footer">
        <Crest size={36} />
        <p className="wordmark">Viral Cartel</p>
        <p className="muted small">© {new Date().getFullYear()} Viral Cartel Inc. All rights reserved.</p>
      </footer>
    </>
  )
}
