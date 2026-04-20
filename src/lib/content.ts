import type { IconName } from "@/lib/icon-map";

export type NavItem = {
  label: string;
  href: string;
};
    
export type NavGroup = {
  label: string;
  items: NavItem[];
};

export type FocusArea = {
  title: string;
  description: string;
  icon: IconName;
};

export type Program = {
  title: string;
  description: string;
  sdg: string;
};

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  publishedAt: string;
  readTime: string;
  author: string;
  contentHtml: string;
  featuredInImpact?: boolean;
};

export type IconCardItem = {
  title: string;
  description: string;
  icon: IconName;
};

export type AboutValue = {
  title: string;
  description: string;
  icon: IconName;
};

export type AboutSection = {
  title: string;
  description: string;
};

export const siteName = "Emmaus Care Foundation";
export const siteMotto = "Leaving No One Behind - By Giving Them Care";
export const siteLogoPath = "/images/logos/logo.png";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "News & Stories", href: "/news" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export const aboutMenuItems: NavItem[] = [
  { label: "About Us", href: "/about" },
  // { label: "Our Founder", href: "/founder" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
];

export const getInvolvedMenuItems: NavItem[] = [
  { label: "Volunteer", href: "/get-involved" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "News & Stories", href: "/news" },
];

export const navPrimaryLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export const navGroups: NavGroup[] = [
  { label: "About", items: aboutMenuItems },
  { label: "Get Involved", items: getInvolvedMenuItems },
];

export const footerLinks: NavItem[] = [
  { label: "About Us", href: "/about" },
  // { label: "Our Founder", href: "/founder" },
  { label: "Programs", href: "/programs" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export const focusAreas: FocusArea[] = [
  {
    title: "Poverty Reduction",
    description:
      "We support families with practical pathways toward dignity, livelihood resilience, and long-term stability.",
    icon: "HandCoins",
  },
  {
    title: "Hunger Relief",
    description:
      "Emergency food support and community-based feeding responses help vulnerable households meet immediate needs.",
    icon: "Soup",
  },
  {
    title: "Education Support",
    description:
      "From school supplies to scholarships, we help children and young adults remain on the path to learning.",
    icon: "GraduationCap",
  },
  {
    title: "Women Empowerment",
    description:
      "We invest in women through opportunity, training, mentorship, and support that strengthens entire communities.",
    icon: "Venus",
  },
  {
    title: "Human Dignity & Social Support",
    description:
      "Our care model prioritizes inclusion, protection, and compassionate accompaniment for those often overlooked.",
    icon: "ShieldCheck",
  },
];

export const sdgAlignment: FocusArea[] = [
  {
    title: "No Poverty",
    description: "Creating opportunities that help households move from crisis toward resilience.",
    icon: "HandCoins",
  },
  {
    title: "Zero Hunger",
    description: "Supporting food access and relief interventions for underserved families.",
    icon: "Soup",
  },
  {
    title: "Quality Education",
    description: "Keeping children and youth connected to the education they deserve.",
    icon: "GraduationCap",
  },
  {
    title: "Gender Equality",
    description: "Championing inclusion, empowerment, and agency for women and girls.",
    icon: "Users",
  },
  {
    title: "Reduced Inequalities",
    description: "Advancing dignity, protection, and equal access for marginalized people.",
    icon: "Scale",
  },
  {
    title: "Partnerships for the Goals",
    description: "Working collaboratively with institutions and communities for durable impact.",
    icon: "Handshake",
  },
];

export const programs: Program[] = [
  {
    title: "Emmaus Poverty Alleviation Program",
    description:
      "Provides material support, livelihood pathways, and community-centered interventions that help vulnerable persons improve their standard of living.",
    sdg: "SDG 1: No Poverty",
  },
  {
    title: "Emmaus Hunger Relief Program",
    description:
      "Responds to food insecurity through feeding outreach, relief support, and collaboration with local communities and faith actors.",
    sdg: "SDG 2: Zero Hunger",
  },
  {
    title: "Emmaus Education Support Program",
    description:
      "Expands access to learning through school support, scholarship assistance, mentorship, and child-centered educational care.",
    sdg: "SDG 4: Quality Education",
  },
  {
    title: "Emmaus Women Empowerment Program",
    description:
      "Equips women with confidence, skills, and support systems that promote dignity, economic participation, and leadership.",
    sdg: "SDG 5: Gender Equality",
  },
  {
    title: "Emmaus Human Dignity and Social Support Program",
    description:
      "Offers compassionate support to people facing exclusion, hardship, disability, or social vulnerability while affirming their worth.",
    sdg: "SDG 10: Reduced Inequalities",
  },
  {
    title: "Emmaus Partnership and Sustainable Development Program",
    description:
      "Builds strategic relationships with churches, public institutions, NGOs, and development partners to increase reach and sustainability.",
    sdg: "SDG 17: Partnerships for the Goals",
  },
];

export const aboutWhoWeAre = {
  title: "Who We Are",
  description:
    "Emmaus Care Foundation is a faith-based, non-profit, non-government organization established to promote human dignity, restore hope, and improve the quality of life of poor and vulnerable persons. We work at the intersection of compassion, development, and accountability so that people facing poverty, exclusion, or hardship are met not merely with charity, but with pathways toward dignity and lasting wellbeing.",
};

export const aboutFoundations: IconCardItem[] = [
  {
    title: "Catholic Social Teaching",
    description:
      "Our service is inspired by the Preferential Option for the Poor, a call to place the needs and dignity of vulnerable persons at the center of our response.",
    icon: "HeartHandshake",
  },
  {
    title: "Sustainable Human Development",
    description:
      "We align compassionate action with a broader vision of human flourishing, inclusion, resilience, and long-term development outcomes.",
    icon: "Globe",
  },
  {
    title: "Faith in Accompaniment",
    description:
      "We believe real service means walking with people through hardship, listening well, sharing resources responsibly, and helping restore hope.",
    icon: "Users",
  },
];

export const aboutEmmausStory = {
  title: "Why Emmaus",
  description:
    "The name Emmaus reflects the Gospel story in Luke 24:13–35, where Christ restored hope to discouraged disciples on the road to Emmaus. In the same spirit, the Foundation accompanies the poor and marginalized in their journey towards dignity and hope. For us, Emmaus is more than a name. It is a model of compassionate presence, listening, encouragement, and transformation.",
};

export const aboutCoreStatements: AboutSection[] = [
  {
    title: "Vision",
    description:
      "A society where every person, especially the poor and marginalized, lives with dignity, hope, and equal access to opportunities for a meaningful and sustainable life.",
  },
  {
    title: "Mission",
    description:
      "To live out the Gospel mandate of love by promoting the dignity of the human person through sharing resources, empowering the poor, reducing poverty and hunger, supporting education, promoting equality, and building partnerships in line with Catholic Social Teaching and the Sustainable Development Goals.",
  },
  {
    title: "Our Goal",
    description:
      "The overall goal of the Foundation is to restore hope, protect human dignity, and improve the living conditions of poor vulnerable persons through sustainable humanitarian and development programs.",
  },
];

export const aboutValues: AboutValue[] = [
  {
    title: "Respect for human dignity",
    description:
      "Every person is created with worth and must be treated with care, fairness, and reverence regardless of circumstance.",
    icon: "ShieldCheck",
  },
  {
    title: "Preferential option for the poor",
    description:
      "We intentionally center the needs, voices, and rights of poor and vulnerable persons in our decisions and programs.",
    icon: "HeartHandshake",
  },
  {
    title: "Compassion and love",
    description:
      "Our work is animated by empathy, mercy, and concrete acts of care that affirm the humanity of those we serve.",
    icon: "Heart",
  },
  {
    title: "Justice and Equality",
    description:
      "We pursue fairness, inclusion, and equal access to opportunity so that no one is left behind or treated as less worthy.",
    icon: "Scale",
  },
  {
    title: "Faith in action",
    description:
      "We translate belief into practical service, allowing the Gospel mandate of love to shape visible, measurable impact.",
    icon: "BadgeCheck",
  },
  {
    title: "Solidarity",
    description:
      "We stand with communities in their struggles and aspirations, building trust through presence, partnership, and shared responsibility.",
    icon: "Users",
  },
  {
    title: "Stewardship",
    description:
      "Resources entrusted to us are managed carefully, responsibly, and in ways that maximize impact for the people who need support most.",
    icon: "HandCoins",
  },
  {
    title: "Transparency and Accountability",
    description:
      "We value honest communication, measurable outcomes, and responsible systems that strengthen trust with communities and partners.",
    icon: "ShieldCheck",
  },
  {
    title: "Sustainable development",
    description:
      "We design interventions that not only meet urgent needs, but also strengthen resilience, opportunity, and long-term wellbeing.",
    icon: "Globe",
  },
];

export const aboutApproach: IconCardItem[] = [
  {
    title: "Share resources with dignity",
    description:
      "We respond to urgent needs in ways that respect people’s agency, reduce shame, and affirm their inherent worth.",
    icon: "HandCoins",
  },
  {
    title: "Empower for long-term change",
    description:
      "Relief is paired with education, livelihood support, and opportunity-building so communities can move toward resilience.",
    icon: "BadgeCheck",
  },
  {
    title: "Build through partnership",
    description:
      "We collaborate with churches, institutions, donors, and development actors because durable impact requires shared effort.",
    icon: "Handshake",
  },
  {
    title: "Align local work with global goals",
    description:
      "Our programs connect grassroots realities with broader development priorities, especially the Sustainable Development Goals.",
    icon: "Globe",
  },
];

export const aboutCommitments: AboutSection[] = [
  {
    title: "Presence before prescription",
    description:
      "We begin by listening, learning context, and honoring the lived realities of the communities we serve before deciding how best to intervene.",
  },
  {
    title: "Care with practical substance",
    description:
      "For us, care is not abstract language. It must be visible in food on the table, children in school, women with opportunity, and vulnerable persons treated with dignity.",
  },
  {
    title: "Service with accountability",
    description:
      "We are committed to transparent stewardship, measurable outcomes, and relationships that deserve the trust of donors, partners, and communities.",
  },
  {
    title: "Development that includes everyone",
    description:
      "Our work resists exclusion by intentionally reaching people at risk of being forgotten, underserved, or pushed to the margins.",
  },
];

export const programDeliveryPillars: IconCardItem[] = [
  {
    title: "Integrated relief and development",
    description:
      "We combine immediate response with longer-term support so that emergency assistance can mature into resilience and opportunity.",
    icon: "HeartHandshake",
  },
  {
    title: "Community-rooted design",
    description:
      "Programs are shaped by listening to local realities, honoring context, and building interventions people can genuinely use and sustain.",
    icon: "Users",
  },
  {
    title: "Transparent stewardship",
    description:
      "Resources are directed carefully, monitored responsibly, and aligned with outcomes that reflect both compassion and accountability.",
    icon: "ShieldCheck",
  },
  {
    title: "Pathways to resilience",
    description:
      "Our aim is not only to relieve hardship, but to help people regain stability, confidence, and access to lasting opportunities.",
    icon: "BadgeCheck",
  },
];

export const volunteerRoles: IconCardItem[] = [
  {
    title: "Field volunteers",
    description:
      "Support outreach days, distributions, mentoring, and practical community activities that bring care closer to vulnerable persons.",
    icon: "HeartHandshake",
  },
  {
    title: "Skilled professionals",
    description:
      "Contribute expertise in education, administration, communications, health, project coordination, or training facilitation.",
    icon: "BadgeCheck",
  },
  {
    title: "Advocates and mobilizers",
    description:
      "Help spread awareness, rally support, and connect Emmaus Care Foundation to new communities of generosity and partnership.",
    icon: "Globe",
  },
  {
    title: "Giving communities",
    description:
      "Church groups, institutions, and supporters can sponsor initiatives, contribute resources, and strengthen program continuity.",
    icon: "HandCoins",
  },
];

export const partnershipPrinciples: IconCardItem[] = [
  {
    title: "Shared mission clarity",
    description:
      "Strong partnerships begin with alignment around dignity, service, measurable outcomes, and the communities we seek to support.",
    icon: "Handshake",
  },
  {
    title: "Complementary strengths",
    description:
      "We value partnerships that combine local reach, technical expertise, resources, and strategic influence for deeper impact.",
    icon: "Building2",
  },
  {
    title: "Mutual accountability",
    description:
      "Trust grows when partners communicate transparently, steward resources responsibly, and stay committed to shared standards.",
    icon: "ShieldCheck",
  },
  {
    title: "Long-term sustainability",
    description:
      "We pursue collaborations that strengthen systems, community ownership, and durable development outcomes beyond one-off activity.",
    icon: "Globe",
  },
];

export const impactPathways: IconCardItem[] = [
  {
    title: "Immediate relief",
    description:
      "Food support, emergency assistance, and compassionate interventions help stabilize people facing urgent hardship.",
    icon: "Soup",
  },
  {
    title: "Educational continuity",
    description:
      "School support and scholarships help children and young people remain connected to learning and possibility.",
    icon: "GraduationCap",
  },
  {
    title: "Livelihood empowerment",
    description:
      "Training, opportunity-building, and empowerment initiatives support households on the path to greater resilience.",
    icon: "BadgeCheck",
  },
  {
    title: "Dignity and inclusion",
    description:
      "We work to reduce exclusion and affirm the worth of vulnerable persons through accompaniment, solidarity, and social support.",
    icon: "ShieldCheck",
  },
];

export const impactGoals = [
  "Improve the quality of life of vulnerable persons",
  "Promote dignity and equality",
  "Provide opportunities for sustainable livelihoods",
  "Strengthen communities through compassion and solidarity",
];

export const involvementWays: IconCardItem[] = [
  {
    title: "Volunteer",
    description:
      "Offer your time, professional skills, and compassion to outreach, mentoring, and community support efforts.",
    icon: "HeartHandshake",
  },
  {
    title: "Partner",
    description:
      "Collaborate with us as a church, NGO, institution, or corporate body to scale sustainable impact.",
    icon: "Handshake",
  },
  {
    title: "Donate",
    description:
      "Fund practical interventions that feed families, support education, empower women, and protect dignity.",
    icon: "Heart",
  },
];

export const partnershipGroups: IconCardItem[] = [
  {
    title: "Churches",
    description:
      "Faith communities help us identify need, accompany families, and serve with compassion close to the grassroots.",
    icon: "Church",
  },
  {
    title: "Government Agencies",
    description:
      "We value public-sector collaboration that improves coordination, accountability, and community reach.",
    icon: "Landmark",
  },
  {
    title: "NGOs",
    description:
      "Working alongside peer organizations allows us to share expertise, align interventions, and avoid duplication.",
    icon: "HeartHandshake",
  },
  {
    title: "Corporate Partners",
    description:
      "Purpose-driven businesses can support innovation, skills development, employee volunteering, and targeted giving.",
    icon: "Building2",
  },
  {
    title: "International Development Partners",
    description:
      "Global partnerships help strengthen long-term systems, program quality, and sustainable development outcomes.",
    icon: "Globe",
  },
];

type StorySeed = Omit<Story, "contentHtml"> & {
  paragraphs: string[];
  keyPoints?: string[];
  quote?: string;
};

function createStory({ paragraphs, keyPoints, quote, ...story }: StorySeed): Story {
  const html = [
    ...paragraphs.map((paragraph) => `<p>${paragraph}</p>`),
    keyPoints
      ? `<h2>Key Takeaways</h2><ul>${keyPoints.map((point) => `<li>${point}</li>`).join("")}</ul>`
      : "",
    quote ? `<blockquote><p>${quote}</p></blockquote>` : "",
  ]
    .filter(Boolean)
    .join("");

  return {
    ...story,
    contentHtml: html,
  };
}

const storyLibrary: Story[] = [
  createStory({
    slug: "community-outreach-reaches-new-households",
    title: "Community Outreach Reaches New Households",
    excerpt:
      "Volunteers and staff delivered practical support, listening care, and dignity-centered relief in underserved communities.",
    category: "Outreach Programs",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-03-12",
    readTime: "5 min read",
    author: "Emmaus Care Editorial Team",
    paragraphs: [
      "Emmaus Care Foundation recently extended outreach activities into additional underserved households, combining practical support with attentive listening and community presence.",
      "The outreach reflected the foundation’s commitment to dignity-centered service by ensuring that assistance was delivered relationally rather than mechanically. Volunteers spent time listening to families, understanding local pressures, and responding with care that felt personal and respectful.",
      "Moments like this continue to reinforce the belief that restoring hope requires more than material support alone. It also requires presence, trust, and the assurance that vulnerable persons are not forgotten.",
    ],
    keyPoints: [
      "Households received direct support and encouragement",
      "Volunteers prioritized listening and accompaniment",
      "Outreach insights will shape future program planning",
    ],
    quote: "Restoring hope begins when people feel seen, heard, and accompanied.",
  }),
  createStory({
    slug: "empowerment-initiative-connects-women-to-opportunity",
    title: "Empowerment Initiative Connects Women to Opportunity",
    excerpt:
      "A new cohort-based initiative is helping women grow confidence, skills, and access to supportive networks.",
    category: "Empowerment Initiatives",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-03-10",
    readTime: "6 min read",
    author: "Programs Desk",
    paragraphs: [
      "A recently launched empowerment initiative is helping women build practical confidence through community, encouragement, and structured opportunity-building.",
      "Participants are engaging with support that recognizes both immediate need and long-term potential. The program emphasizes agency, dignity, and the kind of accompaniment that helps women imagine new possibilities for themselves and their households.",
      "As the cohort continues, the foundation hopes to deepen the initiative through partnerships, mentorship, and further opportunities for sustainable advancement.",
    ],
    keyPoints: [
      "Confidence-building is central to the program model",
      "Support includes networks, mentorship, and practical formation",
      "Long-term empowerment remains the underlying goal",
    ],
  }),
  createStory({
    slug: "education-drive-supports-learners-ahead-of-term",
    title: "Education Drive Supports Learners Ahead of Term",
    excerpt:
      "School resources and community mobilization are helping learners begin the term better prepared and encouraged.",
    category: "Community Projects",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-03-08",
    readTime: "4 min read",
    author: "Education Support Team",
    paragraphs: [
      "Ahead of the new academic term, Emmaus Care Foundation supported an education-focused drive designed to reduce common barriers that keep vulnerable children from fully participating in school.",
      "The effort brought together encouragement, school-related support, and community mobilization in ways that reminded families they are not alone in carrying the burden of educational continuity.",
      "Beyond immediate supplies, the initiative also reinforced the foundation’s larger belief that education remains one of the clearest pathways toward long-term dignity and opportunity.",
    ],
    keyPoints: [
      "Support focused on readiness and continuity",
      "Families received practical encouragement before term began",
      "Education remains central to long-term impact",
    ],
  }),
  createStory({
    slug: "success-story-spotlight-care-restored",
    title: "Success Story Spotlight: Care Restored",
    excerpt:
      "A family’s journey from instability to renewed care illustrates what consistent accompaniment and practical support can do.",
    category: "Success Stories",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-03-05",
    readTime: "7 min read",
    author: "Impact Communications",
    paragraphs: [
      "One family recently reflected on a season when uncertainty had almost eclipsed their sense of possibility. Through timely support and steady accompaniment, that season slowly gave way to renewed stability and hope.",
      "Their story is a reminder that transformation often happens through ordinary but faithful gestures: showing up, listening carefully, responding responsibly, and staying present long enough for people to recover confidence.",
      "Emmaus Care Foundation sees stories like this as signs that dignity-centered care can have practical, life-giving effects when it is sustained with compassion and accountability.",
    ],
    keyPoints: [
      "Accompaniment was as important as practical support",
      "Care was restored through steady, relational intervention",
      "The journey highlights the value of consistent follow-through",
    ],
  }),
  createStory({
    slug: "campaign-season-mobilizes-local-partners",
    title: "Campaign Season Mobilizes Local Partners",
    excerpt:
      "Churches, donors, and volunteers came together around a shared call to serve vulnerable neighbors with compassion.",
    category: "Events and Campaigns",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-03-02",
    readTime: "5 min read",
    author: "Partnerships Team",
    paragraphs: [
      "A recent campaign season helped gather churches, donors, and volunteers around a common call to support vulnerable neighbors with practical compassion.",
      "The campaign focused not only on raising resources, but also on nurturing shared responsibility. It created space for people to understand the mission more clearly and participate in ways that felt relational and concrete.",
      "This kind of mobilization continues to show that lasting humanitarian work is strengthened when communities themselves become active partners in hope-building.",
    ],
    keyPoints: [
      "Multiple partners were mobilized through one campaign",
      "The effort strengthened awareness and ownership",
      "Campaigns can build community, not just funding",
    ],
  }),
  createStory({
    slug: "field-visits-strengthen-accountability-and-trust",
    title: "Field Visits Strengthen Accountability and Trust",
    excerpt:
      "Program follow-up visits are helping the foundation remain responsive, relational, and transparent in service delivery.",
    category: "News & Updates",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-02-28",
    readTime: "4 min read",
    author: "Monitoring and Learning Desk",
    paragraphs: [
      "Follow-up field visits continue to play an important role in how Emmaus Care Foundation listens, learns, and remains accountable after interventions are delivered.",
      "These visits help the team understand what has changed, what remains difficult, and how future support can become more responsive to lived realities on the ground.",
      "By returning to communities and paying attention to outcomes and relationships, the foundation strengthens the trust necessary for meaningful long-term impact.",
    ],
    keyPoints: [
      "Field visits improve program learning",
      "Accountability grows through continued presence",
      "Trust is reinforced by thoughtful follow-up",
    ],
  }),
  createStory({
    slug: "feeding-outreach-supports-children-and-caregivers",
    title: "Feeding Outreach Supports Children and Caregivers",
    excerpt:
      "A coordinated relief effort provided meals, encouragement, and practical support to households facing acute food pressure.",
    category: "Hunger Relief",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-02-25",
    readTime: "5 min read",
    author: "Relief Response Team",
    paragraphs: [
      "A coordinated feeding outreach recently reached children and caregivers experiencing significant food pressure, offering both practical support and encouragement during a difficult period.",
      "The intervention reflected Emmaus Care Foundation’s conviction that hunger relief should be delivered with dignity, care, and attentiveness to the wider realities affecting households.",
      "Beyond the meals themselves, the outreach created moments of reassurance for families who needed to know they were not facing hardship alone.",
    ],
    keyPoints: [
      "Relief focused on both nutrition and encouragement",
      "Caregivers were engaged alongside children",
      "The outreach addressed immediate hardship with dignity",
    ],
  }),
  createStory({
    slug: "youth-mentoring-sessions-expand-confidence-and-direction",
    title: "Youth Mentoring Sessions Expand Confidence and Direction",
    excerpt:
      "Mentorship gatherings are helping young people imagine future pathways with greater confidence, support, and encouragement.",
    category: "Education Support",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-02-22",
    readTime: "5 min read",
    author: "Youth Mentorship Team",
    paragraphs: [
      "Youth mentoring sessions are helping participants reflect on their gifts, responsibilities, and possible futures with new confidence.",
      "The gatherings create space for practical guidance, emotional encouragement, and the kind of relational support that helps young people navigate uncertainty with greater hope.",
      "Emmaus Care Foundation sees mentoring as part of a broader commitment to protecting dignity by ensuring that young people are not left to struggle alone.",
    ],
    keyPoints: [
      "Mentorship combines guidance and encouragement",
      "Young people are being supported holistically",
      "The sessions contribute to confidence and long-term direction",
    ],
  }),
  createStory({
    slug: "womens-training-cohort-celebrates-new-milestones",
    title: "Women’s Training Cohort Celebrates New Milestones",
    excerpt:
      "Participants marked progress in confidence, practical skills, and community support as the latest empowerment cohort concluded.",
    category: "Women Empowerment",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-02-18",
    readTime: "6 min read",
    author: "Women Empowerment Desk",
    paragraphs: [
      "A women-focused training cohort recently marked important progress in practical skills, mutual encouragement, and confidence-building.",
      "Participants spoke about the value of being supported in an environment that recognized their potential while also taking their real challenges seriously.",
      "The cohort illustrates how empowerment initiatives can create both immediate encouragement and longer-term pathways toward stronger livelihoods and social support.",
    ],
    keyPoints: [
      "Training reinforced confidence and solidarity",
      "Participants gained practical tools and encouragement",
      "Empowerment remains linked to wider household wellbeing",
    ],
    featuredInImpact: true,
  }),
  createStory({
    slug: "church-partners-help-extend-compassionate-reach",
    title: "Church Partners Help Extend Compassionate Reach",
    excerpt:
      "Faith communities contributed volunteers, visibility, and practical support to strengthen local outreach efforts.",
    category: "Partnerships",
    image:
      "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-02-15",
    readTime: "4 min read",
    author: "Faith Partnerships Desk",
    paragraphs: [
      "Church partners continue to play a meaningful role in extending the reach of compassionate service through volunteering, local visibility, and resource support.",
      "These collaborations show how faith communities can help identify need, build trust, and strengthen the relational foundations that humanitarian work depends on.",
      "For Emmaus Care Foundation, such partnerships remain essential to delivering support that is both locally grounded and spiritually meaningful.",
    ],
    keyPoints: [
      "Churches support both reach and trust",
      "Local faith communities strengthen responsiveness",
      "Partnership deepens the sustainability of service",
    ],
  }),
  createStory({
    slug: "back-to-school-support-restores-momentum-for-learners",
    title: "Back-to-School Support Restores Momentum for Learners",
    excerpt:
      "Families received learning materials and encouragement designed to reduce disruption and keep children engaged in school.",
    category: "Community Projects",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-02-12",
    readTime: "5 min read",
    author: "Education Support Team",
    paragraphs: [
      "Back-to-school support helped families reduce the pressure of preparation and re-engage with the school term more confidently.",
      "The assistance combined practical resources with reassurance for caregivers who often carry the burden of educational disruption quietly and without much support.",
      "Initiatives like this are part of a broader effort to keep vulnerable learners connected to opportunity and protected from avoidable setbacks.",
    ],
    keyPoints: [
      "Learning continuity was protected through timely support",
      "Caregivers received both material and emotional encouragement",
      "The intervention reduced barriers to school participation",
    ],
  }),
  createStory({
    slug: "volunteer-spotlight-highlights-service-with-dignity",
    title: "Volunteer Spotlight Highlights Service with Dignity",
    excerpt:
      "This month’s volunteer story reflects the quiet, consistent acts of care that help communities feel seen and supported.",
    category: "Volunteer Stories",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-02-09",
    readTime: "4 min read",
    author: "Volunteer Engagement Team",
    paragraphs: [
      "This month’s volunteer spotlight celebrates the kind of service that is steady, respectful, and deeply human.",
      "Behind many visible programs are volunteers who show up consistently, offer practical help, and strengthen the emotional tone of outreach through warmth and attentiveness.",
      "Their contributions remind the foundation that compassion is not only organizational. It is also personal, relational, and often quietly transformative.",
    ],
    keyPoints: [
      "Volunteer presence shapes community experience",
      "Small acts of care often carry deep significance",
      "Service becomes more credible when it is relational",
    ],
  }),
  createStory({
    slug: "listening-visits-shape-more-responsive-programming",
    title: "Listening Visits Shape More Responsive Programming",
    excerpt:
      "Community conversations are helping the foundation understand need more clearly and design support with greater sensitivity.",
    category: "Field Learning",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-02-06",
    readTime: "5 min read",
    author: "Field Learning Team",
    paragraphs: [
      "Listening visits are helping Emmaus Care Foundation ground its planning more deeply in what communities actually say they need.",
      "These conversations provide more than information. They create trust, reveal nuance, and challenge assumptions that can weaken program design when left unexamined.",
      "The foundation continues to treat listening as a core practice because durable support begins with understanding people’s realities before prescribing solutions.",
    ],
    keyPoints: [
      "Listening improves relevance and sensitivity",
      "Community voice informs future decision-making",
      "Trust is strengthened through respectful attention",
    ],
  }),
  createStory({
    slug: "seasonal-giving-campaign-invites-shared-responsibility",
    title: "Seasonal Giving Campaign Invites Shared Responsibility",
    excerpt:
      "Donors and partners were invited into a campaign focused on practical giving, transparent stewardship, and local hope-building.",
    category: "Campaigns",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-02-03",
    readTime: "4 min read",
    author: "Development Office",
    paragraphs: [
      "A seasonal giving campaign recently invited donors and partners to participate in practical, transparent support for vulnerable communities.",
      "The campaign emphasized stewardship, shared responsibility, and the idea that generosity can become more meaningful when it is connected to clear purpose and trusted relationships.",
      "Emmaus Care Foundation continues to see campaigns like this as opportunities not only to raise support, but also to deepen mutual understanding between the mission and the people who sustain it.",
    ],
    keyPoints: [
      "Giving was framed as shared mission participation",
      "Transparency and trust remained central themes",
      "Campaigns can deepen long-term donor relationship",
    ],
  }),
  createStory({
    slug: "a-school-return-made-possible",
    title: "A School Return Made Possible",
    excerpt:
      "After receiving learning materials and fee support, a vulnerable student returned to school with renewed confidence and stability.",
    category: "Education Support",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-01-30",
    readTime: "6 min read",
    author: "Impact Communications",
    paragraphs: [
      "A vulnerable learner recently returned to school after receiving timely educational support that eased a difficult family burden.",
      "The return represented more than a resumed school routine. It marked the restoration of confidence, belonging, and the sense that a hopeful future was still worth pursuing.",
      "Emmaus Care Foundation continues to see school continuity as one of the clearest expressions of dignity-centered investment in the lives of children and families.",
    ],
    keyPoints: [
      "Educational support reduced a major barrier to attendance",
      "The intervention restored confidence and routine",
      "School continuity remains a strategic priority",
    ],
    featuredInImpact: true,
  }),
  createStory({
    slug: "food-relief-that-reached-a-family-in-crisis",
    title: "Food Relief that Reached a Family in Crisis",
    excerpt:
      "Emergency food support helped a household weather an especially difficult season while community volunteers walked alongside them.",
    category: "Hunger Relief",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-01-26",
    readTime: "5 min read",
    author: "Relief Response Team",
    paragraphs: [
      "During a difficult season of household instability, emergency food support helped one family regain breathing room and immediate relief.",
      "Volunteers did more than distribute assistance. They stayed long enough to listen, encourage, and help the family feel accompanied rather than processed.",
      "Stories like this reflect the foundation’s desire to ensure that practical relief is delivered in ways that strengthen dignity, reassurance, and human connection.",
    ],
    keyPoints: [
      "The intervention provided timely household relief",
      "Volunteers brought both resources and encouragement",
      "Care was delivered relationally and respectfully",
    ],
    featuredInImpact: true,
  }),
  createStory({
    slug: "skills-training-opened-new-possibilities",
    title: "Skills Training Opened New Possibilities",
    excerpt:
      "A women-focused empowerment effort created confidence, new income potential, and deeper social support for participants.",
    category: "Women Empowerment",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-01-22",
    readTime: "6 min read",
    author: "Women Empowerment Desk",
    paragraphs: [
      "A skills-focused empowerment effort recently opened new possibilities for participants by combining training, encouragement, and stronger social support.",
      "For many women, the experience was valuable not only because of the practical knowledge gained, but because it strengthened confidence and affirmed that growth was possible even after difficult circumstances.",
      "Emmaus Care Foundation remains committed to the kind of empowerment that supports both livelihood potential and personal dignity.",
    ],
    keyPoints: [
      "Skills development increased confidence and possibility",
      "Participants benefited from shared learning and solidarity",
      "Empowerment was treated as both practical and personal",
    ],
    featuredInImpact: true,
  }),
];

export const newsStories: Story[] = storyLibrary;

export const successStories: Story[] = storyLibrary.filter((story) => story.featuredInImpact).slice(0, 3);

export function getStoryBySlug(slug: string) {
  return storyLibrary.find((story) => story.slug === slug);
}

export const donationAreas: IconCardItem[] = [
  {
    title: "Feeding Programs",
    description: "Help provide emergency meals and community feeding support for families facing food insecurity.",
    icon: "Soup",
  },
  {
    title: "Educational Scholarships",
    description: "Support tuition, learning materials, and the consistent school participation of vulnerable children.",
    icon: "GraduationCap",
  },
  {
    title: "Skills Acquisition Training",
    description: "Fund practical training that opens doors to income generation and long-term self-reliance.",
    icon: "BadgeCheck",
  },
  {
    title: "Women Empowerment Initiatives",
    description: "Strengthen programs that nurture confidence, opportunity, inclusion, and sustainable livelihoods for women.",
    icon: "Venus",
  },
];

export const socialLinks = [
  { label: "Facebook", href: "#", icon: "Facebook" as IconName },
  { label: "Instagram", href: "#", icon: "Instagram" as IconName },
  { label: "LinkedIn", href: "#", icon: "Linkedin" as IconName },
  { label: "YouTube", href: "#", icon: "Youtube" as IconName },
];

export const contactDetails: IconCardItem[] = [
  {
    title: "Email",
    description: "info@emmauscarefoundation.org",
    icon: "Mail",
  },
  {
    title: "Phone",
    description: "+234 (000) 000-0000",
    icon: "Phone",
  },
  {
    title: "Address",
    description: "Foundation House, Placeholder Address, Nigeria",
    icon: "MapPin",
  },
];