import type { ReactNode } from "react";

type Size = "feature" | "wide" | "tall" | "small";

type Card = {
  href: string;
  size: Size;
  kind: "essay" | "thread" | "article" | "note" | "experiment" | "blog";
  date: string;
  title: string;
  cover: ReactNode;
};

const SIZE_CLASSES: Record<Size, string> = {
  feature: "col-span-2 row-span-2",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  small: "col-span-1 row-span-1",
};

const KIND_LABEL: Record<Card["kind"], string> = {
  essay: "essay",
  thread: "𝕏 thread",
  article: "𝕏 article",
  note: "notes",
  experiment: "experiment",
  blog: "blog",
};

// ───────── QuickNode blog covers ─────────

function XstocksCover() {
  return (
    <img
      src="/xstocks.png"
      alt="xstocks"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
function RestakeCover() {
  return (
    <img
      src="/restaking.png"
      alt="restaking"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function EtfCover() {
  return (
    <img
      src="/ibit.png"
      alt="ibit"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function GeniusCover() {
  return (
    <img
      src="/genius-act.png"
      alt="genius act"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function MegaethCover() {
  return (
    <img
      src="/megaeth.png"
      alt="megaeth"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function ImageCover({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

// ───────── data ─────────

const QUICKNODE_BLOGS: Card[] = [
  {
    href: "https://blog.quicknode.com/xstocks-solana-tokenized-stocks-2025/",
    size: "wide",
    kind: "blog",
    date: "02 sep 2025",
    title: "xstocks: tokenized stocks on solana",
    cover: <XstocksCover />,
  },
  {
    href: "https://blog.quicknode.com/restaking-revolution-eigenlayer-defi-yields-2025/",
    size: "wide",
    kind: "blog",
    date: "02 sep 2025",
    title: "the restaking revolution: eigenlayer & defi yields",
    cover: <RestakeCover />,
  },
  {
    href: "https://blog.quicknode.com/ibit-blackrock-bitcoin-etf-guide-2025/",
    size: "tall",
    kind: "blog",
    date: "02 sep 2025",
    title: "the blackrock bitcoin etf guide",
    cover: <EtfCover />,
  },
  {
    href: "https://blog.quicknode.com/genius-act-stablecoin-regulation-2025/",
    size: "small",
    kind: "blog",
    date: "02 sep 2025",
    title: "the genius act: stablecoin regulation in 2025",
    cover: <GeniusCover />,
  },
  {
    href: "https://blog.quicknode.com/megaeth-ultra-fast-l2-ethereum-defi-gaming-2025/",
    size: "small",
    kind: "blog",
    date: "02 sep 2025",
    title: "megaeth: ultra-fast L2 for ethereum defi & gaming",
    cover: <MegaethCover />,
  },
];

const OTHER_CARDS: Card[] = [
  {
    href: "https://medium.com/@0xabhii/autonomous-agents-at-the-edge-how-fleek-powers-decentralized-ai-b76a97a0ffc0?sharedUserId=0xabhii",
    size: "wide",
    kind: "article",
    date: "31 aug 2026",
    title: "Autonomous Agents at the Edge",
    cover: <ImageCover src="/autonomous-agents-at-edge.webp" alt="Autonomous Agents at the Edge" />,
  },
  {
    href: "https://x.com/0xabhii/status/2078481389218083308?s=20",
    size: "wide",
    kind: "article",
    date: "11 sep 2026",
    title: "Revenue Defensibility Across Stablecoins",
    cover: <ImageCover src="/revenue-defensilblity.jpeg" alt="Revenue Defensibility Across Stablecoins" />,
  },
  {
    href: "https://x.com/0xabhii/status/1839020951075520693",
    size: "small",
    kind: "thread",
    date: "26 sep 2024",
    title: "FHE is the next big thing",
    cover: <ImageCover src="/fhe.png" alt="FHE is the next big thing" />,
  },
  {
    href: "https://x.com/0xabhii/status/1847701620588499209",
    size: "small",
    kind: "thread",
    date: "19 oct 2024",
    title: "zero knowledge about zero knowledge",
    cover: <ImageCover src="/zk.png" alt="Zero knowledge about zero knowledge" />,
  },
  {
    href: "https://x.com/0xabhii/status/2060786801997226165",
    size: "wide",
    kind: "article",
    date: "09 jun 2026",
    title: "The Hardest Part of Crypto Nobody Talks About - Oracle",
    cover: (
      <>
        <img
          src="/oracle-article.png"
          alt="the oracle problem needs to be solved"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <p className="absolute left-4 top-4 font-mono text-3xl font-black leading-none text-white md:left-5 md:top-5">
          𝕏
        </p>
      </>
    ),
  },
];

function QuickNodeSection() {
  const featured = QUICKNODE_BLOGS[3]; // genius act
  const sideBlogs = QUICKNODE_BLOGS.filter((_, i) => i !== 3);

  const imgSrc = (title: string) => {
    if (title.includes("xstocks")) return "/xstocks.png";
    if (title.includes("restaking")) return "/restaking.png";
    if (title.includes("etf")) return "/ibit.png";
    return "/megaeth.png";
  };

  return (
    <div className="flex flex-col gap-5 md:flex-row md:gap-6">
      {/* Featured, left 50% */}
      <a
        href={featured.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full overflow-hidden rounded-md md:w-1/2"
      >
        <img
          src="/genius-act.png"
          alt={featured.title}
          loading="lazy"
          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {/* Hover caption */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-paper/95 px-4 py-3 text-ink backdrop-blur transition-transform max-md:translate-y-0 group-hover:translate-y-0">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate font-serif text-sm leading-tight text-ink md:text-base">
              {featured.title}
            </p>
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-rust">
              {KIND_LABEL[featured.kind]} →
            </span>
          </div>
        </div>
      </a>

      {/* Side blogs, right 50%, vertical cards */}
      <div className="grid w-full grid-cols-2 gap-3 md:w-1/2 md:gap-4">
        {sideBlogs.map((blog) => (
          <a
            key={blog.title}
            href={blog.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-md"
          >
            <div className="aspect-[2/1]">
              <img
                src={imgSrc(blog.title)}
                alt={blog.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            {/* Hover caption */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-paper/95 px-3 py-2 text-ink backdrop-blur transition-transform max-md:translate-y-0 group-hover:translate-y-0 md:px-4 md:py-3">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate font-serif text-[13px] leading-tight text-ink md:text-sm">
                  {blog.title}
                </p>
                <span className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-rust md:text-[10px]">
                  {KIND_LABEL[blog.kind]} →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <div
      className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
      style={{
        gridAutoRows: "minmax(170px, auto)",
        gridAutoFlow: "dense",
      }}
    >
      {cards.map((card) => {
        const isPlaceholder = card.href === "#";
        return (
          <a
            key={card.title}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
            className={`group relative block overflow-hidden rounded-md transition-transform hover:-translate-y-1 hover:shadow-lg ${SIZE_CLASSES[card.size]} ${isPlaceholder ? "cursor-default" : ""}`}
          >
            {card.cover}
            {/* Hover caption strip */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-paper/95 px-3 py-2 text-ink backdrop-blur transition-transform max-md:translate-y-0 group-hover:translate-y-0 md:px-4 md:py-3">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate font-serif text-[13px] leading-tight text-ink md:text-sm">
                  {card.title}
                </p>
                <span className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-rust md:text-[10px]">
                  {isPlaceholder ? "coming soon" : `${KIND_LABEL[card.kind]} →`}
                </span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default function WritingPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-20">
      <div className="mb-12 md:mb-14">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          ~ writing & threads
        </p>
        <h2 className="mt-3 font-serif text-5xl leading-[0.95] tracking-tight text-ink md:text-7xl">
          the <span className="italic text-rust">notebook.</span>
        </h2>
        <p className="mt-5 max-w-[55ch] font-serif text-base font-light italic leading-relaxed text-ink/70 md:text-lg">
          technical blogs, crypto threads, and one honest post-mortem.
          covering everything from zk proofs and FHE to oracles, restaking, and
          the products i've built and broken along the way.
        </p>
      </div>

      {/* QuickNode blogs */}
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          wrote some blogs for quicknode
        </p>
        <div className="mt-4">
          <QuickNodeSection />
        </div>
        <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-muted">
          hover a card to see the title · click to open
        </p>
      </div>

      {/* Other writings */}
      <div className="mt-16 md:mt-20">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          other writings
        </p>
        <div className="mt-4">
          <CardGrid cards={OTHER_CARDS} />
        </div>
      </div>

      <p className="mt-12 font-mono text-[11px] uppercase tracking-wider text-muted">
        hover a card to see the title · click to open
      </p>
    </section>
  );
}
