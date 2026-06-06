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
    tags: ['AI Learning', 'EdTech', 'Interactive Slate', 'SBA Funding Target']
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
    tags: ['File Compression', 'Media Optimizer', 'Mobile Web App', 'Creator Tools']
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
    tags: ['Text Hygiene', 'Publishing Preparedness', 'Formatting Sanitizer', 'Data Cleaning']
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
    tags: ['Translation Suite', 'Global Content', 'Creative Translation', 'Multi-Language']
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
    tags: ['Executive Hub', 'Identity', 'Sponsor Profile', 'Anchor Site']
  },
  {
    id: 'audio-love-letter',
    name: 'Audio Love Letter',
    url: '',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Audio Keep-sakes', 'Journals', 'Interactive Audio']
  },
  {
    id: 'health-care',
    name: 'Ambers Healthcare',
    url: '',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Health Tech', 'Benefits Hub', 'Independent Wellness']
  },
  {
    id: 'austin-lol',
    name: 'Austins LOL',
    url: '',
    category: 'Community & Culture',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Meme Engine', 'Comic Hub', 'Viral Outreach']
  },
  {
    id: 'celebrate-face',
    name: 'Celebrate My Face',
    url: '',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Self-care Companion', 'Ingredient Tracker', 'Confidence Journal']
  },
  {
    id: 'social-bridge',
    name: 'Social Bridge Hub',
    url: '',
    category: 'Community & Culture',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Mutual Aid', 'Volunteering', 'Hyper-local Map']
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
    tags: ['Maternity Log', 'Holistic Wellness', 'Parent Tools']
  },
  {
    id: 'identity-forge',
    name: 'Identity Forge AI',
    url: '',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Avatar Synthesis', 'Professional Styling', 'Employment Tools']
  },
  {
    id: 'kin-seeker',
    name: 'KinSeeker',
    url: '',
    category: 'Community & Culture',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Heritage Database', 'Lineage Map', 'Oral History Archive']
  },
  {
    id: 'preserv-ai',
    name: 'Preserv-AI',
    url: '',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Smart Organizer', 'Metadata tagging', 'Office Utility']
  },
  {
    id: 'nexus-discovery',
    name: 'Nexus Investigative Discovery',
    url: '',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Timeline Network', 'Event Mapping', 'Investigative Hub']
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
    tags: ['Incubator Portfolio', 'Corporate Brand', 'App Engine']
  },
  {
    id: 'opulence-society',
    name: 'Opulence Society',
    url: '',
    category: 'Community & Culture',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Luxury Network', 'Aesthetic Curator', 'Elite Group']
  },
  {
    id: 'dating-pool-9to5',
    name: 'The 9 to 5 Dating Pool',
    url: '',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Coordinated Dating', 'CalSync', 'Professionals Matching']
  },
  {
    id: 'echo-quietly',
    name: 'Echo Quietly',
    url: '',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Acoustic Focus', 'Neurodivergent Tools', 'Learning Aids']
  },
  {
    id: 'don-julio-beats',
    name: 'Creme Don Julio Beats Hub',
    url: '',
    category: 'Community & Culture',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['MIDI Editor', 'Beats Sandbox', 'Auditory Hub']
  },
  {
    id: 'price-source',
    name: 'Price Source tool',
    url: '',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Procurement Tracker', 'Arbitrage tool', 'Business Margin']
  },
  {
    id: 'shangri-la-reads',
    name: 'Shangri-La Reads',
    url: '',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Reading Sandbox', 'Typography Spec', 'Self-publishing']
  },
  {
    id: 'kover',
    name: 'Kover AI Support',
    url: '',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Cover Letter Tech', 'Job Finder Tools', 'Career Growth']
  },
  {
    id: 'uv-de-soupe',
    name: 'Creme UV de Soupe',
    url: '',
    category: 'Niche Utility',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Kitchen Logger', 'Recipe Designer', 'Foodie Tech']
  },
  {
    id: 'connect-hire-win',
    name: 'Connect Hire Win',
    url: '',
    category: 'Core Saas',
    description: '',
    purpose: '',
    targetAudience: '',
    developmentStory: '',
    tags: ['Interview Prep', 'Career Tracker', 'Hiring Boards']
  }
];
