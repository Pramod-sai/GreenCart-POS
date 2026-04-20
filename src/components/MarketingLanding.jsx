export function MarketingLanding({ storeName, onStaffSignIn }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="marketing-root">
      <header className="marketing-nav" role="banner">
        <div className="marketing-nav-inner">
          <button type="button" className="marketing-brand" onClick={() => scrollTo("top")}>
            <span className="marketing-logo" aria-hidden="true" />
            <span className="marketing-brand-text">{storeName}</span>
          </button>
          <nav className="marketing-links" aria-label="Site">
            <button type="button" className="marketing-link" onClick={() => scrollTo("top")}>
              Home
            </button>
            <button type="button" className="marketing-link" onClick={() => scrollTo("about")}>
              About us
            </button>
            <button type="button" className="marketing-link" onClick={() => scrollTo("features")}>
              Features
            </button>
            <button type="button" className="marketing-link" onClick={() => scrollTo("contact")}>
              Contact
            </button>
          </nav>
          <button type="button" className="marketing-cta" onClick={onStaffSignIn}>
            Staff sign in
          </button>
        </div>
      </header>

      <main className="marketing-main">
        <section id="top" className="marketing-hero">
          <div className="marketing-hero-grid">
            <div>
              <p className="marketing-kicker">Retail operations, simplified</p>
              <h1 className="marketing-h1">Checkout, inventory, and staff tools in one calm workspace.</h1>
              <p className="marketing-lead">
                {storeName} is built for supermarkets and convenience stores: a fast cashier terminal,
                delivery tracking, analytics, and admin controls—wrapped in a consistent green design
                system.
              </p>
              <div className="marketing-hero-actions">
                <button type="button" className="marketing-primary" onClick={onStaffSignIn}>
                  Authenticate &amp; open console
                </button>
                <button type="button" className="marketing-secondary" onClick={() => scrollTo("about")}>
                  Learn more
                </button>
              </div>
              <ul className="marketing-tags" aria-label="Highlights">
                <li>Employee + PIN sign-in</li>
                <li>Role-based areas</li>
                <li>POS, delivery, reporting</li>
              </ul>
            </div>
            <aside className="marketing-hero-card" aria-label="Getting started">
              <h2 className="marketing-card-title">Typical flow</h2>
              <ol className="marketing-steps">
                <li>
                  <strong>Visit</strong> — browse this page or jump straight to staff sign-in.
                </li>
                <li>
                  <strong>Authenticate</strong> — pick your employee tile and enter your PIN.
                </li>
                <li>
                  <strong>Operate</strong> — cashiers use POS and delivery; admins unlock broader modules.
                </li>
              </ol>
            </aside>
          </div>
        </section>

        <section id="about" className="marketing-section marketing-section-alt">
          <h2 className="marketing-section-title">About us</h2>
          <p className="marketing-prose">
            GreenCart POS is a front-end demonstration of a practical in-store terminal: responsive
            layouts, keyboard-friendly controls, and modules that mirror how real teams work during a
            shift—from opening the register to closing out deliveries.
          </p>
          <p className="marketing-prose muted">
            This marketing view is static; the live product experience begins after staff sign-in.
          </p>
        </section>

        <section id="features" className="marketing-section">
          <h2 className="marketing-section-title">What you get inside</h2>
          <div className="marketing-feature-grid">
            <article className="marketing-feature">
              <h3>POS terminal</h3>
              <p>Categories, scan/search, cart, discounts, and payment methods suited to C-store pace.</p>
            </article>
            <article className="marketing-feature">
              <h3>Operations</h3>
              <p>Deliveries, orders, maintenance checklists, and staff views to coordinate the floor.</p>
            </article>
            <article className="marketing-feature">
              <h3>Admin &amp; insight</h3>
              <p>Dashboards, analytics, inventory, and finance-style summaries for managers.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="marketing-section marketing-section-alt">
          <h2 className="marketing-section-title">Contact</h2>
          <p className="marketing-prose">
            For store support and helpline details, use the in-app header links after you sign in
            (Helpline, Help, and About modals).
          </p>
          <p className="marketing-prose">
            Ready to try the console? Use <strong>Staff sign in</strong> above—demo PINs are shown on the
            login dialog.
          </p>
        </section>
      </main>

      <footer className="marketing-footer">
        <p>
          © {new Date().getFullYear()} {storeName} · Demo UI
        </p>
      </footer>
    </div>
  );
}
