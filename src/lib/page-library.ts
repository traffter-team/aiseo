export interface Section {
  name: string;
  purpose: string;
  seoNote?: string;
}

export interface PageTemplate {
  name: string;
  suggestedSections: Section[];
}

export interface PageLibrary {
  [key: string]: PageTemplate;
}

export const pageLibrary: PageLibrary = {
  Home: {
    name: "Home Page",
    suggestedSections: [
      {
        name: "Hero Banner",
        purpose:
          "Primary H1 + Unique Selling Proposition + Call to Action. Example: 'Welcome to [CasinoName] - Get Your [BonusDetails] Now!'",
        seoNote: "Very important—targets main brand keyword, drives click-throughs.",
      },
      {
        name: "Top Casinos Showcase",
        purpose: "Visually appealing section to showcase 3–5 featured partner casinos or top game categories.",
      },
      {
        name: "Why Choose Us",
        purpose:
          "Bullet points highlighting key benefits and trust factors (e.g., 'Licensed & Secure', 'Fast Payouts', '24/7 Support').",
      },
      {
        name: "Latest Reviews Feed",
        purpose: "Dynamic section displaying snippets or links to the latest casino/game reviews.",
      },
      {
        name: "Trending Games",
        purpose: "Showcase popular or new games with links to their individual guides or play pages.",
      },
      {
        name: "User Testimonials",
        purpose: "Section for social proof, featuring positive quotes or feedback from users.",
      },
      {
        name: "FAQ Preview",
        purpose: "A small section with 2-3 common questions and answers, linking to the full FAQ page.",
      },
      { name: "Blog Teasers", purpose: "Snippets of the latest blog articles to encourage further reading." },
      {
        name: "Footer",
        purpose: "Standard footer with navigation links, legal information, responsible gaming links, and copyright.",
      },
    ],
  },
  Reviews: {
    name: "Casino Review Page",
    suggestedSections: [
      {
        name: "Review Headline",
        purpose: "H1: '[Casino Name] Review [Current Year] - Expert Analysis & Player Ratings'.",
        seoNote: "Very important—targets exact-match review keyword.",
      },
      {
        name: "Rating Summary Box",
        purpose: "Overall star rating, brief pros/cons list, and a primary CTA to visit the casino.",
      },
      {
        name: "Full In-depth Review",
        purpose:
          "Comprehensive analysis covering bonuses, game selection, user experience, mobile compatibility, customer support, and security. Use H2/H3 for sub-sections.",
      },
      {
        name: "Exclusive Bonus Offers",
        purpose: "Highlight any special or exclusive bonuses available for the reviewed casino, with clear CTAs.",
      },
      {
        name: "Game Library Overview",
        purpose: "Summary of game types and notable software providers available at the casino.",
      },
      {
        name: "Banking Options Table",
        purpose: "Table detailing deposit and withdrawal methods, processing times, and limits.",
      },
      {
        name: "Player Feedback & Comments",
        purpose: "Section to display or collect user-generated reviews and comments.",
      },
      { name: "Casino-Specific FAQs", purpose: "Frequently asked questions specifically about the reviewed casino." },
      { name: "Related Casino Reviews", purpose: "Links to reviews of similar or alternative casinos." },
    ],
  },
  Guide: {
    name: "Game/Strategy Guide Page",
    suggestedSections: [
      { name: "Guide Headline", purpose: "H1: '[Game Name] - How to Play & Win' or '[Strategy Topic] Explained'." },
      {
        name: "Overview / Introduction",
        purpose:
          "Brief introduction to the game or strategy, including key features (e.g., RTP, volatility for games).",
      },
      {
        name: "How to Play / Step-by-Step",
        purpose: "Detailed, step-by-step instructions for playing the game or implementing the strategy.",
      },
      {
        name: "Bonus Features / Key Elements",
        purpose: "Explanation of special rounds, bonus features (for games), or critical components of the strategy.",
      },
      {
        name: "Payouts & Volatility / Success Metrics",
        purpose: "Data tables for game payouts or metrics for strategy effectiveness.",
      },
      { name: "Pros & Cons", purpose: "Quick bullet list summarizing advantages and disadvantages." },
      { name: "Video Demonstration", purpose: "Embedded video showing gameplay or strategy in action." },
      { name: "Similar Games / Related Guides", purpose: "Links to other relevant internal content." },
      { name: "User Comments / Discussion", purpose: "Section for user feedback and discussion." },
    ],
  },
  Bonuses: {
    name: "Bonuses Page",
    suggestedSections: [
      { name: "Bonuses Headline", purpose: "H1: 'Best Online Casino Bonuses [Current Year] - Updated List'." },
      {
        name: "Explanation of Bonus Types",
        purpose:
          "Detailed explanations of different bonus types (e.g., Welcome, No-Deposit, Free Spins, Reload, Cashback).",
      },
      {
        name: "Top Bonus Offers Table",
        purpose: "A ranked or categorized table showcasing the best current bonus offers with key details and CTAs.",
      },
      { name: "How to Claim a Bonus Guide", purpose: "Step-by-step instructions on how to claim bonuses." },
      {
        name: "Understanding Bonus Terms",
        purpose:
          "Explanation of common bonus terms and conditions like wagering requirements, game restrictions, and validity periods.",
      },
      {
        name: "Regional Bonus Information",
        purpose: "Sections or filters for bonuses available in specific countries or regions, if applicable.",
      },
    ],
  },
  Blog: {
    name: "Blog Post",
    suggestedSections: [
      { name: "Blog Post Headline", purpose: "H1: Engaging title targeting a specific long-tail keyword or topic." },
      {
        name: "Introduction",
        purpose: "Compelling introduction (100–150 words) that sets the context and user intent.",
      },
      {
        name: "Main Content Subtopics",
        purpose: "Well-structured content using H2/H3 headings for subtopics, incorporating LSI keywords.",
      },
      {
        name: "Internal and External Links",
        purpose: "Strategically placed links to relevant internal pages and 1-2 authoritative external resources.",
      },
      {
        name: "FAQ Section for Article",
        purpose: "3–5 relevant Q&As related to the blog post topic, optimized for featured snippets.",
      },
      {
        name: "Author Box",
        purpose: "Information about the author to build E-A-T (Expertise, Authoritativeness, Trustworthiness).",
      },
      {
        name: "Call to Action",
        purpose: "Encourage users to subscribe to a newsletter, read related articles, or explore casino offers.",
      },
    ],
  },
  FAQ: {
    name: "FAQ Page",
    suggestedSections: [
      {
        name: "FAQ Headline",
        purpose: "H1: '[Site Name] - Frequently Asked Questions' or 'FAQ for [Specific Topic]'.",
      },
      {
        name: "Categorized Q&A Blocks",
        purpose:
          "Questions and answers organized into categories (e.g., Account, Bonuses, Payments). Use accordion or <details> for better UX.",
      },
      { name: "Search Functionality", purpose: "Allow users to search FAQs." },
      { name: "Related Links", purpose: "Links from answers to more detailed guides or relevant pages on the site." },
    ],
  },
  About: {
    name: "About Us Page",
    suggestedSections: [
      { name: "Our Story / Mission", purpose: "Narrative about the brand's mission, history, and values." },
      {
        name: "Meet the Team",
        purpose: "Introduce key team members with photos and brief bios to build trust and E-A-T.",
      },
      { name: "Our Commitment", purpose: "Statements on fair play, security, responsible gaming, etc." },
      { name: "Contact Information Snippet", purpose: "Brief contact info with a link to the full Contact Us page." },
    ],
  },
  Contact: {
    name: "Contact Us Page",
    suggestedSections: [
      { name: "Contact Headline", purpose: "H1: 'Contact Us - Get in Touch with [Site Name]'." },
      {
        name: "Contact Form",
        purpose: "Form for user inquiries, categorized if possible (e.g., General, Support, Partnership).",
      },
      {
        name: "Direct Contact Methods",
        purpose: "Email addresses, phone numbers (if applicable), and physical address (for local SEO schema).",
      },
      { name: "Map Integration", purpose: "Embedded map if there's a physical office location." },
      { name: "Social Media Links", purpose: "Links to official social media profiles." },
    ],
  },
  Legal: {
    name: "Legal Pages (Terms, Privacy, etc.)",
    suggestedSections: [
      { name: "Page Title (e.g., Terms and Conditions)", purpose: "Clear H1 for the specific legal document." },
      {
        name: "Main Legal Text",
        purpose:
          "The full text of the terms, privacy policy, cookie policy, or responsible gambling policy. Properly structured with headings.",
      },
      { name: "Last Updated Date", purpose: "Clearly state when the document was last revised." },
      { name: "Navigation to Other Legal Docs", purpose: "Easy links to other related legal pages." },
    ],
  },
  Slots: {
    name: "Slots/Games Hub Page",
    suggestedSections: [
      {
        name: "Games Hub Headline",
        purpose: "H1: 'Play Online Slots & Casino Games at [CasinoName]' or 'Explore Thousands of Casino Games'.",
        seoNote: "Important—targets broad game-category keywords.",
      },
      {
        name: "Game Category Navigation",
        purpose: "Clear links or tabs for different game categories (e.g., Slots, Table Games, Live Dealer, Jackpots).",
      },
      {
        name: "Featured Slots/Games",
        purpose: "Showcase a selection of top, new, or popular games with appealing visuals and play links.",
      },
      {
        name: "Filter & Sort Options",
        purpose: "Allow users to filter games by provider, type, features, RTP, volatility, etc.",
      },
      { name: "Top RTP Games List", purpose: "Section highlighting games with high Return to Player percentages." },
      { name: "New Releases Section", purpose: "Display the newest game titles added to the platform." },
      {
        name: "Popular Game Providers Links",
        purpose: "Links to pages or sections dedicated to specific game software providers.",
      },
      {
        name: "How to Choose a Game Guide Snippet",
        purpose: "Brief advice for players on selecting games that suit their preferences, linking to a full guide.",
      },
    ],
  },
  Providers: {
    name: "Game Providers Page",
    suggestedSections: [
      {
        name: "Providers Headline",
        purpose: "H1: 'Top Casino Game Providers' or 'Discover Games by Leading Software Developers'.",
        seoNote: "Targets industry authority & brand names of providers.",
      },
      {
        name: "Provider Listing",
        purpose: "Alphabetical or categorized list of game providers with their logos and a brief introduction.",
      },
      {
        name: "Individual Provider Profile Teasers",
        purpose:
          "Short summaries for each provider, linking to dedicated review pages or filtered game lists for that provider.",
      },
      {
        name: "Provider Comparison Table",
        purpose: "Table comparing key features, game types, or popular titles from different providers.",
      },
      {
        name: "Search/Filter for Providers",
        purpose:
          "Allow users to search for specific providers or filter by game genres they specialize in, region, technology, etc.",
      },
    ],
  },
  "Payment Methods": {
    name: "Payment Methods Page",
    suggestedSections: [
      {
        name: "Payments Headline",
        purpose: "H1: 'Casino Payment & Banking Options' or 'Secure Deposits & Withdrawals'.",
        seoNote: "Critical—keywords for transaction-related queries.",
      },
      {
        name: "Deposit Methods Overview",
        purpose:
          "List of available deposit methods (e.g., Credit/Debit Cards, E-wallets, Bank Transfers, Cryptocurrency) with logos and brief descriptions.",
      },
      {
        name: "Withdrawal Methods Overview",
        purpose:
          "List of available withdrawal methods, highlighting processing times and any differences from deposit methods.",
      },
      {
        name: "Detailed Information Table",
        purpose:
          "Table showing methods, typical processing times for deposits/withdrawals, min/max limits, and any potential fees.",
      },
      {
        name: "How to Deposit/Withdraw Guides",
        purpose: "Step-by-step instructions for making deposits and requesting withdrawals.",
      },
      {
        name: "Security of Transactions",
        purpose: "Information on security measures used to protect financial transactions (SSL, encryption, etc.).",
      },
    ],
  },
  "Tournaments & Events": {
    name: "Tournaments & Events Page",
    suggestedSections: [
      { name: "Tournaments Headline", purpose: "H1: 'Join Exciting Casino Tournaments & Events'." },
      {
        name: "Upcoming Events Calendar/List",
        purpose:
          "Display a schedule of current and upcoming tournaments or special events, including dates, game types, and prize pools.",
      },
      {
        name: "How to Participate Guide",
        purpose:
          "Clear instructions on how to enter tournaments, including entry fees, qualification criteria, and rules.",
      },
      { name: "Featured Tournaments", purpose: "Highlight major or ongoing tournaments with more details." },
      {
        name: "Past Winners & Leaderboards",
        purpose: "Showcase previous tournament winners or current leaderboards to create excitement and social proof.",
      },
      {
        name: "Event-Specific FAQs",
        purpose: "Address common questions related to participating in tournaments and events.",
      },
    ],
  },
  "Mobile Apps": {
    name: "Mobile Apps Page",
    suggestedSections: [
      {
        name: "Mobile Apps Headline",
        purpose: "H1: 'Download Our Casino Mobile App - Play on iOS & Android'.",
        seoNote: "Useful for 'casino app' searches.",
      },
      {
        name: "App Store Download Links",
        purpose:
          "Prominent buttons or badges linking directly to the app on the Apple App Store and Google Play Store.",
      },
      {
        name: "Mobile App Features & Screenshots",
        purpose: "Showcase key features of the mobile app with appealing screenshots or mockups.",
      },
      {
        name: "Device Compatibility Information",
        purpose: "Specify supported operating systems and device requirements.",
      },
      {
        name: "Installation Guide",
        purpose: "Simple step-by-step instructions on how to download and install the app.",
      },
      {
        name: "Mobile-Exclusive Bonuses",
        purpose: "Highlight any bonuses or promotions specifically for mobile app users.",
      },
      {
        name: "Comparison with Mobile Website",
        purpose: "Briefly explain the benefits of using the app versus the mobile-responsive website, if applicable.",
      },
    ],
  },
  "VIP / Loyalty Program": {
    name: "VIP / Loyalty Program Page",
    suggestedSections: [
      { name: "VIP Program Headline", purpose: "H1: 'Exclusive VIP & Loyalty Rewards Program'." },
      {
        name: "Program Overview & Benefits",
        purpose: "Introduce the VIP/Loyalty program and its main advantages for players.",
      },
      {
        name: "Tier Structure Explained",
        purpose:
          "Detail the different VIP levels or loyalty tiers, including how to achieve them and the specific benefits of each tier (e.g., points system, cashback, exclusive bonuses, personal manager).",
      },
      {
        name: "How to Qualify / Join",
        purpose: "Clear explanation of the criteria for joining the program or progressing through tiers.",
      },
      {
        name: "Exclusive Perks Showcase",
        purpose:
          "Highlight unique benefits like dedicated support, faster withdrawals, birthday gifts, exclusive tournaments, or luxury rewards.",
      },
      { name: "VIP Member FAQs", purpose: "Address common questions about the VIP program, points, and rewards." },
    ],
  },
  News: {
    name: "News Page",
    suggestedSections: [
      {
        name: "News Headline",
        purpose: "H1: 'Latest iGaming News & Industry Updates' or '[CasinoName] News'.",
        seoNote: "Fresh content signal; important for topical authority.",
      },
      {
        name: "Latest News Feed",
        purpose: "Chronological or categorized feed of news articles, press releases, or announcements.",
      },
      { name: "Featured News Articles", purpose: "Highlight important or trending news items." },
      {
        name: "Industry Analysis & Commentary",
        purpose: "Section for expert opinions, market analysis, or commentary on gaming trends (if applicable).",
      },
      {
        name: "Event Coverage Recaps",
        purpose: "Summaries or reports from trade shows, conferences, or significant industry events.",
      },
      { name: "Search and Filter Options", purpose: "Allow users to search news articles or filter by category/date." },
      {
        name: "Newsletter Signup for Updates",
        purpose: "Encourage users to subscribe for the latest news and updates via email.",
      },
    ],
  },
  Glossary: {
    name: "Glossary Page",
    suggestedSections: [
      { name: "Glossary Headline", purpose: "H1: 'Casino & Gambling Terms Glossary'." },
      { name: "Alphabetical Navigation", purpose: "A-Z links for easy navigation." },
      { name: "Term & Definition Blocks", purpose: "Clear definitions for common casino, betting, and gaming terms." },
      { name: "Search Functionality", purpose: "Allow users to search for specific terms." },
    ],
  },
};

// Helper function to get available pages (excluding Home which is always included)
export function getAvailablePages(): string[] {
  return Object.keys(pageLibrary).filter(key => key !== 'Home');
}

// Helper function to get page template by key
export function getPageTemplate(pageKey: string): PageTemplate | null {
  return pageLibrary[pageKey] || null;
}

// Helper function to get all page templates
export function getAllPageTemplates(): PageTemplate[] {
  return Object.values(pageLibrary);
} 