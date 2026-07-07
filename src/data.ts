export interface AppProject {
  id: string;
  name: string;
  url: string;
  category: 'Highlighted' | 'Core Saas' | 'Niche Utility' | 'Community & Culture';
  description: string;
  purpose: string;
  targetAudience: string;
  developmentStory: string;
  tags: string[];
  isActive?: boolean;
}

export const APPS_DATA: AppProject[] = [
  {
    id: 'lovable-learner',
    name: 'LovableLearner.com',
    url: 'https://lovablelearner.com',
    category: 'Highlighted',
    description: 'Special Flagship Project — Interactive AI-powered learning system created for students and classroom engagement.',
    purpose: 'To supplement classroom education by adapting topics into custom interactive models, ensuring no student is left behind.',
    targetAudience: 'Students, educators, and schools seeking personalized, interactive tutoring companions.',
    developmentStory: 'Created as the ultimate tool I wished existed during school and onboarding, facilitating clear and fast knowledge compression.',
    tags: ['AI Learning', 'EdTech', 'Interactive Slate', 'SBA Funding Target'],
    isActive: false
  },
  {
    id: 'shrink-and-send',
    name: 'ShrinkandSend.com',
    url: 'https://shrinkandsend.com',
    category: 'Highlighted',
    description: 'High-performance mobile web app built for rapid file size compression, easy media sharing, image resizing, and immediate storage optimization.',
    purpose: 'Instantly reduce the size of images, audio, and videos without quality degradation, optimized directly for creators and publishing portals.',
    targetAudience: 'Content creators, editors, self-publishers, and digital agencies.',
    developmentStory: 'Engineered after countless frustrations with large file size limitations when uploading manuscript packages and media releases.',
    tags: ['File Compression', 'Media Optimizer', 'Mobile Web App', 'Creator Tools'],
    isActive: false
  },
  {
    id: 'text-detox-alchemy',
    name: 'Textdetoxalchemy.com',
    url: 'https://textdetoxalchemy.com',
    category: 'Highlighted',
    description: 'Advanced text hygiene engine designed to clean user text, stripping out special characters, redundant spaces, and formatting anomalies so manuscripts and drafts are pristine and publishing-ready.',
    purpose: 'Instantly sanitize copy, converting messy text into formatted, standardized documents with surgical precision.',
    targetAudience: 'Authors, bloggers, publishers, and transcriptionists.',
    developmentStory: 'Developed to eliminate the painstaking labor of manually debugging text files of non-standard symbols and spacing issues prior to book layout.',
    tags: ['Text Hygiene', 'Publishing Preparedness', 'Formatting Sanitizer', 'Data Cleaning'],
    isActive: false
  },
  {
    id: 'authors-linguist',
    name: 'Authorslinguist.netlify.app',
    url: 'https://authorslinguist.netlify.app',
    category: 'Highlighted',
    description: 'Surgical translation and global communication suite allowing users to translate text into different languages seamlessly.',
    purpose: 'Bridging structural barriers by converting manuscripts, training programs, and documents internationalized with semantic accuracy.',
    targetAudience: 'Novelist, educators, content teams, and indie publishers looking to scale globally.',
    developmentStory: 'Conceived while navigating the hurdles of independent international publishing, where translating drafts seamlessly without losing cultural nuance is key.',
    tags: ['Translation Suite', 'Global Content', 'Creative Translation', 'Multi-Language'],
    isActive: false
  },
  {
    id: 'amber-yaghi-org',
    name: 'AmberYaghi.org',
    url: 'https://amberyaghi.org',
    category: 'Highlighted',
    description: 'Personal executive hub, brand narrative, and portfolio housing our core missions and leadership values.',
    purpose: 'Acts as the single source of truth for professional history, technology advocacy, and community sponsorship.',
    targetAudience: 'Stakeholders, Angel Investors, Business Incubators, and SBA Officers.',
    developmentStory: 'Constructed to act as a clear personal brand anchor that frames everything Ember Core Studio creates.',
    tags: ['Executive Hub', 'Identity', 'Sponsor Profile', 'Anchor Site'],
    isActive: true
  },
  {
    id: 'ember-core-studio-site',
    name: 'Ember Core Studio',
    url: 'https://embercorestudio.org',
    category: 'Highlighted',
    description: 'The creative incubator. An umbrella ecosystem turning vision into scalable application formats.',
    purpose: 'A single, SBA-aligned showcase displaying all proprietary models, saas applications, and custom frameworks.',
    targetAudience: 'SBA Officers, Angel Funders, Startup Accelerators.',
    developmentStory: 'Evolved from a rental agency into a clean-tech incubator, serving as a unified testament to rapid AI creation.',
    tags: ['Incubator Portfolio', 'Corporate Brand', 'App Engine'],
    isActive: false
  },
  {
    id: 'maternity-magic',
    name: 'Maternity Magic',
    url: 'https://maternitymagic.netlify.app',
    category: 'Niche Utility',
    description: 'Curated wellness navigator tracking nutritional and energetic shifts during pregnancy.',
    purpose: 'Allows expectant mothers to track daily iron, hydration, and positive mindset checkpoints easily.',
    targetAudience: 'Pregnant women, maternity advocates, and holistic birth support partners.',
    developmentStory: 'Created to stand in stark contrast to clinical clinical interfaces, providing a warm, reassuring environment.',
    tags: ['Maternity Log', 'Holistic Wellness', 'Parent Tools'],
    isActive: false
  },
  {
    id: 'audio-love-letter',
    name: 'Audio Love Letter',
    url: 'https://audioloveletter.lovable.app',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'health-care',
    name: 'Ambers Healthcare',
    url: 'https://ambershealthcare.com',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'austin-lol',
    name: 'Austins LOL',
    url: 'https://austinslol.lovable.app',
    category: 'Community & Culture',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'celebrate-face',
    name: 'Celebrate My Face',
    url: 'https://celebrate-my-face.lovable.app',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'social-bridge',
    name: 'Social Bridge Hub',
    url: 'https://socialbridgehub.netlify.app',
    category: 'Community & Culture',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'identity-forge',
    name: 'Identity Forge AI',
    url: 'https://identityforgeai.netlify.app',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'kin-seeker',
    name: 'KinSeeker',
    url: 'https://kinseeker.netlify.app',
    category: 'Community & Culture',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'preserv-ai',
    name: 'Preserv-AI',
    url: 'https://preserv-ai.netlify.app',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'nexus-discovery',
    name: 'Nexus Investigative Discovery',
    url: 'https://nexusinvestigativediscovery.netlify.app',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'opulence-society',
    name: 'Opulence Society',
    url: 'https://opulencesociety.netlify.app',
    category: 'Community & Culture',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'dating-pool-9to5',
    name: 'The 9 to 5 Dating Pool',
    url: 'https://the9to5datingpool.lovable.app',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'echo-quietly',
    name: 'Echo Quietly',
    url: 'https://echoquietly.lovable.app',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'don-julio-beats',
    name: 'Creme Don Julio Beats Hub',
    url: 'https://creme-donjulio-beats-hub.lovable.app',
    category: 'Community & Culture',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'price-source',
    name: 'Price Source tool',
    url: 'https://price-source-287617961746.us-west2.run.app',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'dating-pool-9to5-run',
    name: 'The 9 to 5 Dating Pool (Cloud Run)',
    url: 'https://the-9-to-5-dating-pool-287617961746.us-west2.run.app',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'shangri-la-reads',
    name: 'Shangri-La Reads',
    url: 'https://shangri-la-reads-287617961746.us-west2.run.app',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'kover',
    name: 'Kover AI Support',
    url: 'https://kover-287617961746.us-west2.run.app',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'uv-de-soupe',
    name: 'Creme UV de Soupe',
    url: 'https://creme-uv-de-soupe-287617961746.us-west2.run.app',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'connect-hire-win',
    name: 'Connect Hire Win',
    url: 'https://connect-hire-win.lovable.app',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 're-lie',
    name: 'Re-Lie',
    url: 'https://re-lie-287617961746.us-west2.run.app',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'sentinel-osint',
    name: 'Sentinel Personal Safety OSINT Dashboard',
    url: 'https://sentinel-personal-safety-osint-dashboard-287617961746.us-west2.run.app',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'clean-slate',
    name: 'CleanSlate',
    url: 'https://cleanslate-287617961746.us-west2.run.app',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'fairshare-navigator',
    name: 'FairShare Navigator: Child Support & Family Law Aide',
    url: 'https://fairshare-navigator-child-support-family-law-aide-287617961746.us-west2.run.app',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'covercraft-ai',
    name: 'CoverCraft AI',
    url: 'https://covercraft-ai-287617961746.us-west2.run.app',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'ceremony-officiant',
    name: 'Ceremony Officiant Portfolio',
    url: 'https://ceremony-officiant-portfolio-287617961746.us-west2.run.app',
    category: 'Community & Culture',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'open-people-search',
    name: 'OpenPeopleSearch',
    url: 'https://openpeoplesearch-287617961746.us-west2.run.app',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'cellpulse-intelligence',
    name: 'CellPulse Intelligence',
    url: 'https://cellpulse-intelligence-287617961746.us-west2.run.app',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'vanguard-elite-connections',
    name: 'Vanguard Elite Connections',
    url: 'https://vanguard-elite-connections-287617961746.us-west2.run.app',
    category: 'Community & Culture',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'birthday-photoshoot',
    name: 'Birthday Photoshoot Studio',
    url: 'https://birthday-photoshoot-studio-287617961746.us-west2.run.app',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'legacyforge',
    name: 'LegacyForge: The $1M Roadmap',
    url: 'https://legacyforge-the-1m-roadmap-287617961746.us-west2.run.app',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'wepub-ai',
    name: 'WePub AI Book Publisher',
    url: 'https://wepub-ai-book-publisher-287617961746.us-west2.run.app',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'amzstyle-ai',
    name: 'AmzStyle AI Fashion Stylist',
    url: 'https://amzstyle-ai-fashion-stylist-287617961746.us-west2.run.app',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'courage-is-love',
    name: 'Courage is Love',
    url: 'https://courage-is-love-287617961746.us-west2.run.app',
    category: 'Community & Culture',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  },
  {
    id: 'big-steel-studio',
    name: 'Big Steel Studio',
    url: 'https://big-steel-studio-287617961746.us-west2.run.app',
    category: 'Community & Culture',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: []
  }
];
