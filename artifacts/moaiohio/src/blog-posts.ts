export interface BlogPost {
  slug: string;
  title: string;
  tag: string;
  date: string;
  excerpt: string;
  body: string;
}

export const POSTS: BlogPost[] = [
  {
    slug: "end-of-boilerplate",
    title: "The End of Boilerplate: Why Vibe Coding Works",
    tag: "AI & Creative",
    date: "Sep 15, 2025",
    excerpt: "How AI code generation is changing the way we approach architecture, enabling faster iteration without sacrificing quality.",
    body: `The landscape of web development is shifting beneath our feet. For the past decade, we've focused heavily on frameworks, boilerplate generation, and scaffolding tools just to get a project to the starting line. Now, we're seeing a paradigm shift where the starting line is drawn for us, instantaneously, by AI.

Vibe coding isn't about letting AI write all your code and walking away. It's about elevating the developer's role from syntax dictation to systems thinking. When you no longer have to manually type out every component or API route, your focus naturally shifts to architecture, user experience, and the connective tissue that makes an application truly great.

We've found that teams embracing this approach aren't just shipping faster — they're shipping better products. By reducing the cognitive load of boilerplate, developers have the energy to sweat the details that actually matter: performance bottlenecks, accessibility, and micro-interactions.

The danger of heavily automated workflows is creating products that feel generic — software without a soul. This is where craft comes back into the picture. A great studio doesn't use AI to replace design; it uses AI to implement structural components so human creativity can be spent entirely on differentiation.`,
  },
  {
    slug: "shipping-speed",
    title: "Shipping at the Speed of Thought",
    tag: "Business",
    date: "Jul 10, 2025",
    excerpt: "Frameworks for decision making that allow founders to reduce time-to-market while maintaining high standards.",
    body: `The most dangerous trap a founder can fall into is mistaking motion for progress. Shipping fast is not about cutting corners — it's about ruthless prioritization and having systems in place that let you move with intention.

We work with founders who have great ideas but get stuck in planning loops. The antidote is a simple rule: if you can't ship a working version in a week, the scope is too big. Break it down until you can.

Vibe coding has accelerated this even further. Prototypes that used to take a month now take days. That speed changes the economics of experimentation entirely — you can validate three ideas in the time it used to take to build one.

The founders who win aren't the ones with the best ideas. They're the ones who build, learn, and iterate faster than everyone else.`,
  },
];
