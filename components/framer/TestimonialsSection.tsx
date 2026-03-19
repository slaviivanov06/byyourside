"use client";

const tweets = [
  {
    name: "Miguel Ventura",
    handle: "@migdvv",
    avatar: "MV",
    avatarBg: "#7C3AED",
    text: "Learned some basics of @framer yesterday, and today I delivered a landing page for a client. It's so unreal how small the learning curve is from Figma to @framer. Absolutely loving it.",
  },
  {
    name: "Daniël van der Winden",
    handle: "@dvdwinden",
    avatar: "DW",
    avatarBg: "#0369A1",
    text: "I've built pretty handy sites powered by Craft or WordPress in the past, but seeing @framer tackle CMS stuff so effortlessly is mind-boggling",
  },
  {
    name: "Davo Galavotti",
    handle: "@pixelbeat",
    avatar: "DG",
    avatarBg: "#059669",
    text: "A quick word about @framer. Framer is forever changing the experience of designing for the web. Forget about a design tool. Once you get the basics, you're not on a design tool anymore. You're creating your product/story in the medium itself. As friendly & powerful as it is.",
  },
  {
    name: "",
    handle: "",
    avatar: "?",
    avatarBg: "#6B7280",
    text: "ashlinks.framer.website. Great job @jornvandijk and team 🙌🙌🙌",
  },
  {
    name: "Sanket Sahu",
    handle: "@sanketsahu",
    avatar: "SS",
    avatarBg: "#DC2626",
    text: "I can't get enough of @framer sites! 🔥 We are building some serious community websites without any developer involvement!...and I think that's a win for this product.",
  },
  {
    name: "Lauren Waller",
    handle: "@waller_texas",
    avatar: "LW",
    avatarBg: "#D97706",
    text: "Just launched my new portfolio with @framer and it was a breeze. The animations are buttery smooth and the CMS integration saved me hours.",
  },
  {
    name: "",
    handle: "",
    avatar: "?",
    avatarBg: "#374151",
    text: "Yo, @framer is sick AF. Mind-blowing tbh.",
  },
  {
    name: "",
    handle: "",
    avatar: "?",
    avatarBg: "#374151",
    text: "I'll build 🤌",
  },
];

function renderText(text: string) {
  const parts = text.split(/(@\w+)/g);
  return parts.map((part, i) =>
    part.startsWith("@")
      ? <span key={i} className="text-blue-500 font-medium">{part}</span>
      : <span key={i}>{part}</span>
  );
}

function TweetCard({ tweet }: { tweet: typeof tweets[0] }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 break-inside-avoid mb-4 hover:shadow-md transition-shadow">
      {tweet.name && (
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ background: tweet.avatarBg }}>
              {tweet.avatar}
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">{tweet.name}</p>
              <p className="text-xs text-gray-400">{tweet.handle}</p>
            </div>
          </div>
          <svg className="w-4 h-4 text-[#1DA1F2] fill-current flex-shrink-0" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.74-8.854L1.254 2.25H8.08l4.265 5.638 5.9-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
      )}
      <p className="text-gray-700 text-sm leading-relaxed">{renderText(tweet.text)}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  const cols = [
    tweets.slice(0, 3),
    tweets.slice(3, 5),
    tweets.slice(5, 7),
    tweets.slice(7),
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1180px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 leading-tight max-w-3xl mx-auto">
          Our customers love how easy it is to design and publish a professional site in Framer.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cols.map((col, ci) => (
            <div key={ci} style={{ marginTop: [0, 32, 16, 48][ci] }}>
              {col.map((t, i) => <TweetCard key={i} tweet={t} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
