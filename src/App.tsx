import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTelegram, FaXTwitter } from "react-icons/fa6";
import WritingPage from "./pages/WritingPage";

const EMAIL = "0xabhishekyadav@gmail.com";

function TypedEmail() {
  const [visibleEmail, setVisibleEmail] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setVisibleEmail(EMAIL.slice(0, index));
      if (index >= EMAIL.length) window.clearInterval(timer);
    }, 55);
    return () => window.clearInterval(timer);
  }, []);

  return <a href={`mailto:${EMAIL}`}><span>{visibleEmail}</span><span className="email-cursor" aria-hidden="true" /></a>;
}

const projects: { name: string; copy: string; href?: string }[] = [
  { name: "Erebuz", copy: "Privacy middleware SDK routing onchain transactions through privacy pools, compliance tools, and bridges via a single call.", href: "https://erebuz.com" },
  { name: "Piker", copy: "Onchain fantasy sports protocol on Base with non-custodial smart contract escrow and TEE-verified scoring.", href: "https://www.piker.io/" },
  { name: "Proof of Med", copy: "Privacy-preserving prescription verification using zero-knowledge proofs on Arbitrum.", href: "https://devfolio.co/projects/proof-of-med-ff76" },
  { name: "Encryptix", copy: "On-chain ticketing with private and transparent ticket data using FHE and cross-chain messaging.", href: "https://ethglobal.com/showcase/encryptix-zevtt" },
  { name: "OwnSound", copy: "A Web3 platform for non-fungible sounds with fair ownership and royalty splits.", href: "https://devfolio.co/projects/ownsound-c1a3" },
];

const socials: { label: string; href: string; Icon: IconType }[] = [
  { label: "X", href: "https://x.com/0xabhii", Icon: FaXTwitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/0xabhii/", Icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/Abhi270303", Icon: FaGithub },
  { label: "Telegram", href: "https://t.me/oxabhii", Icon: FaTelegram },
  { label: "Email", href: "mailto:0xabhishekyadav@gmail.com", Icon: FaEnvelope },
];

const elsewhere: [string, string, string, IconType | null][] = [
  ["Résumé", "PDF", "/0xabhii_resume.pdf", null],
  ["Writing", "essays, threads, notes", "/writing", null],
];

function HomePage() {
  return <main>
    <p className="lead">I&apos;m Abhishek. I build products, partnerships, and integrations around crypto protocols, developer tools, and the people who use them.</p>
    <p>I like the point where a complicated system has to become something a person can actually use. That has taken me from consumer social products to wallets, privacy infrastructure, tokenized attention, and a few odd side projects.</p>
    <nav className="social-nav" aria-label="Social links"><span>connect <span aria-hidden="true">↗</span></span><div className="social-icons">{socials.map(({ label, href, Icon }) => <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noreferrer"} aria-label={label} title={label}><Icon aria-hidden="true" /></a>)}</div></nav>

    <section><h2>How I got here</h2><p>I got into web3 by building and shipping in public. I liked that I could have an idea, build a rough version, send someone a link, and find out quickly whether it was useful.</p><p>I started with frontend work, then picked up whatever the next project needed: TypeScript, React, Next.js, Node.js, smart contracts, integrations, and developer relations. That is still more or less how I learn.</p></section>
    <section><h2>What I&apos;ve worked on</h2><p>At Qoneqt, I researched and built ERC-20 social token architecture for creator monetization, then integrated it into the product. I also engineered cross-chain wallet onboarding with ethers.js across multiple EVM chains and turned recurring developer friction into shipped fixes.</p><p>I delivered hands-on technical onboarding for 2,000+ developers across 30+ workshops in 10+ cities, managed 8 regional leads, and produced developer documentation and technical content for the ecosystem.</p><p>At Attenomics, I helped grow from 0 to 500+ users and land our first paying customer. At Rheolly, I worked on partnerships and go-to-market for agentic payments and account abstraction.</p></section>
    <section><h2>Things I built on the side</h2><ul className="projects">{projects.map(({ name, copy, href }) => <li key={name}><div className="project-heading"><strong>{name}</strong>{href && <span className="project-links"><a href={href} target="_blank" rel="noreferrer">open ↗</a></span>}</div><span className="project-copy">{copy}</span></li>)}</ul><p>Side projects are where I try ideas before I know whether they deserve to be products. Some do. Some are useful for a weekend. Both are fine.</p></section>
    <section><h2>Now</h2><p>I&apos;m based in Mumbai, working across growth, partnerships, developer relations, and product in web3. I still build side projects, usually somewhere around developer tools, payments, privacy, or whatever has been sitting in my notes for too long.</p><p>I&apos;m interested in work where the underlying system is genuinely difficult but the final product doesn&apos;t need to feel that way.</p></section>
    <section><h2>Elsewhere</h2><ul className="elsewhere">{elsewhere.map(([label, detail, href, Icon]) => <li key={label}><a className="elsewhere-link" href={href} target={href.startsWith("/") || href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("/") || href.startsWith("mailto:") ? undefined : "noreferrer"}>{Icon && <Icon aria-hidden="true" />}{label}{!Icon && <span className="link-arrow" aria-hidden="true">↗</span>}</a><span>{detail}</span></li>)}</ul></section>
    <p className="closing-line">If you&apos;re working on something along those lines, email me at<span className="closing-email"><TypedEmail /></span></p>
    <p className="signature">Abhishek</p>
    <footer><span>Built in Mumbai with patience and chai ☕</span><span>© {new Date().getFullYear()} Abhishek Yadav</span></footer>
  </main>;
}

export default function App() {
  return window.location.pathname === "/writing" ? <WritingPage /> : <HomePage />;
}
