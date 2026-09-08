---
sidebar: false
toc: false
pager: false
---

<style>
.site-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.site-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--fg);
  text-decoration: none;
}

.site-nav {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  align-items: center;
}

.site-nav a {
  font-size: 0.9rem;
  color: var(--fg-muted);
  text-decoration: none;
}

.site-nav a:hover {
  color: var(--fg);
}

.intro p {
  font-size: 1.1rem;
  line-height: 1.75;
  margin: 0 0 1rem;
}

.intro p:last-child {
  margin-bottom: 0;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.6rem;
  margin: 0.75rem 0 0;
  padding: 0;
  list-style: none;
}

.skills li {
  font-family: var(--monospace);
  font-size: 0.78rem;
  color: var(--fg-muted);
}

.skills li + li::before {
  content: "·";
  margin-right: 0.6rem;
  color: var(--fg-faint);
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1.25rem;
}

.two-col p {
  margin: 0;
  font-size: 1rem;
}
</style>

<header class="site-header">
  <a class="site-title" href="/">Huw Evans</a>
  <nav class="site-nav">
    <a href="mailto:yo@huw.cool">mail</a>
    <a href="https://book.huw.cool">book a meeting</a>
    <a href="https://wa.me/61431218603">phone</a>
  </nav>
</header>

<div class="intro">
<div class="two-col">
  <div>
    <p>I work with founders and small teams who need both technical execution and commercial judgement — without splitting those across two different people.</p>
    <ul class="skills">
      <li>TypeScript &amp; React</li>
      <li>Cloudflare Workers</li>
      <li>data engineering</li>
      <li>machine learning</li>
      <li>A/B experimentation</li>
      <li>Meta Ads &amp; growth</li>
      <li>product management</li>
      <li>design &amp; UX</li>
      <li>video production</li>
    </ul>
  </div>
  <p>Right now I'm consulting for a mental health project in India, working across WhatsApp-based service delivery, data infrastructure, and the experiment design used to measure impact.</p>
</div>
</div>
