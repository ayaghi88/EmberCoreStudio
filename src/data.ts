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
    url: 'https://audioloveletter.lovable.app',
    category: 'Core Saas',
    description: 'Digital keepsake platform enabling users to curate audio memories, spoken notes, and interactive soundscapes for loved ones.',
    purpose: 'A personal micro-legacy tool allowing users to build structured audio journals and timeless letters.',
    targetAudience: 'Couples, families, long-distance relatives, and those preservation-minded.',
    developmentStory: 'Inspired by the desire to safeguard human voice inflection and tone across distance and time.',
    tags: ['Audio Keep-sakes', 'Journals', 'Interactive Audio']
  },
  {
    id: 'health-care',
    name: 'Ambers Healthcare',
    url: 'https://ambershealthcare.com',
    category: 'Core Saas',
    description: 'Simplified personal health directory and dynamic benefit assistant maximizing coverage understanding.',
    purpose: 'Guides employees and freelancers to quickly understand out-of-pocket limits and locate adjacent wellness resources.',
    targetAudience: 'Individuals, freelancers, independent contractors without full HR benefits.',
    developmentStory: 'Designed following personal encounters with complex medical billing layouts and opaque health care directories.',
    tags: ['Health Tech', 'Benefits Hub', 'Independent Wellness']
  },
  {
    id: 'austin-lol',
    name: 'Austins LOL',
    url: 'https://austinslol.lovable.app',
    category: 'Community & Culture',
    description: 'Interactive meme synthesis engine and comic repository capturing custom local creator humor.',
    purpose: 'Helps young creators co-write lightweight cartoon scripts, sharing them instantly inside dynamic comic matrices.',
    targetAudience: 'Gen-Z creators, humor writers, and meme enthusiasts.',
    developmentStory: 'A delightful exercise in social-centric design where speed-to-laugh acts as the core retention metric.',
    tags: ['Meme Engine', 'Comic Hub', 'Viral Outreach']
  },
  {
    id: 'celebrate-face',
    name: 'Celebrate My Face',
    url: 'https://celebrate-my-face.lovable.app',
    category: 'Niche Utility',
    description: 'Empathetic self-care companion mapping skin routines directly to confidence journals.',
    purpose: 'Translates daily skin checks into aesthetic confidence patterns, tracking ingredients and mood impacts.',
    targetAudience: 'Skincare enthusiasts, busy working parents, and dermatological advocates.',
    developmentStory: 'Born from finding solace in short, intentional morning grooming rituals amidst heavy work schedules pageants.',
    tags: ['Self-care Companion', 'Ingredient Tracker', 'Confidence Journal']
  },
  {
    id: 'social-bridge',
    name: 'Social Bridge Hub',
    url: 'https://socialbridgehub.netlify.app',
    category: 'Community & Culture',
    description: 'Action-focused neighborhood coordination grid matchmaking digital volunteers to local physical food drops.',
    purpose: 'Provides simple coordinate routing and immediate action maps for community food pantries.',
    targetAudience: 'Local mutual aid networks, community organizers, and micro-volunteers.',
    developmentStory: 'Created to bridge the communication gap between hyper-local food donation centers and ready neighbors.',
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
    url: 'https://identityforgeai.netlify.app',
    category: 'Core Saas',
    description: 'Generative corporate background and formal outfit styling engine for professional headshots.',
    purpose: 'Takes standard smartphone photos and renders clean corporate attire setups for high-fidelity LinkedIn updates.',
    targetAudience: 'Job-seekers, career transitions, and remote teams.',
    developmentStory: 'Designed as an affordable, fast alternative to professional headshots during job placement drives.',
    tags: ['Avatar Synthesis', 'Professional Styling', 'Employment Tools']
  },
  {
    id: 'kin-seeker',
    name: 'KinSeeker',
    url: 'https://kinseeker.netlify.app',
    category: 'Community & Culture',
    description: 'Family tree plotting and dynamic storytelling database emphasizing high-fidelity record preservation.',
    purpose: 'Enables users to digitize old letters, trace oral folk histories, and map lineage metrics without complex paywalls.',
    targetAudience: 'Family historians, genealogists, and memory-preservers.',
    developmentStory: 'Conceived to maintain the rich historical details of previous generations before physical letters decay.',
    tags: ['Heritage Database', 'Lineage Map', 'Oral History Archive']
  },
  {
    id: 'preserv-ai',
    name: 'Preserv-AI',
    url: 'https://preserv-ai.netlify.app',
    category: 'Niche Utility',
    description: 'Smart document cataloguer organizing metadata profiles for critical physical media.',
    purpose: 'Enables users to fast-profile paper records, creating secure offline indexes for backup arrays.',
    targetAudience: 'Small offices, legal assistants, and paper-heavy freelancers.',
    developmentStory: 'Developed after watching physical invoices and contracts disappear into unindexed boxes.',
    tags: ['Smart Organizer', 'Metadata tagging', 'Office Utility']
  },
  {
    id: 'nexus-discovery',
    name: 'Nexus Investigative Discovery',
    url: 'https://nexusinvestigativediscovery.netlify.app',
    category: 'Niche Utility',
    description: 'Sophisticated event relation-mapper designed to connect sparse chronologies visually.',
    purpose: 'Maps witnesses, locations, timelines, and legal documents into clear bento-style network clusters.',
    targetAudience: 'Legal researchers, investigative journalists, and private investigators.',
    developmentStory: 'Crafted as a professional research tool designed to make intricate connections obvious.',
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
    url: 'https://opulencesociety.netlify.app',
    category: 'Community & Culture',
    description: 'Visual bento container displaying high-end luxury lifestyle curation, fine dining events, and art.',
    purpose: 'Acts as an invitation-only networking asset for creative luxury partnerships.',
    targetAudience: 'Luxury consultants, high-net-worth creators, and event producers.',
    developmentStory: 'Created to showcase aesthetic alignment and premium experience management frameworks.',
    tags: ['Luxury Network', 'Aesthetic Curator', 'Elite Group']
  },
  {
    id: 'dating-pool-9to5',
    name: 'The 9 to 5 Dating Pool',
    url: 'https://the9to5datingpool.lovable.app',
    category: 'Core Saas',
    description: 'Highly structured matchmaking application strictly built to accommodate busy desk job calendars.',
    purpose: 'Aligns calendar availability first, pairing users based on real lunch break slots and shared evening commutes.',
    targetAudience: 'Corporate professionals, tech workers, and busy working singles.',
    developmentStory: 'Created during long workweeks when busy professionals realized schedule incompatibility is the true dating killer.',
    tags: ['Coordinated Dating', 'CalSync', 'Professionals Matching']
  },
  {
    id: 'echo-quietly',
    name: 'Echo Quietly',
    url: 'https://echoquietly.lovable.app',
    category: 'Niche Utility',
    description: 'A sensory-friendly auditory reader designed for neurodivergent focus periods.',
    purpose: 'Converts documents into specialized soft readbacks with rhythm trackers to maximize reading grasp.',
    targetAudience: 'Neurodivergent students, visual processors, and slow readers.',
    developmentStory: 'Built from testing dynamic audio trackers targeted specifically at screen fatigue reduction.',
    tags: ['Acoustic Focus', 'Neurodivergent Tools', 'Learning Aids']
  },
  {
    id: 'don-julio-beats',
    name: 'Creme Don Julio Beats Hub',
    url: 'https://creme-donjulio-beats-hub.lovable.app',
    category: 'Community & Culture',
    description: 'Modern beatmaker sandbox loading custom synth packs and audio stems inspired by contemporary retro beats.',
    purpose: 'Allows artists to quick-mix custom loops, exporting raw MIDI triggers for studio use.',
    targetAudience: 'LoFi producers, electronic musicians, and home recording studios.',
    developmentStory: 'Created alongside physical recording setups, blending hardware rhythms with browser-synthesized MIDI.',
    tags: ['MIDI Editor', 'Beats Sandbox', 'Auditory Hub']
  },
  {
    id: 'price-source',
    name: 'Price Source tool',
    url: 'https://price-source-287617961746.us-west2.run.app',
    category: 'Core Saas',
    description: 'Automated comparative tracker highlighting retail discrepancies across inventory databases.',
    purpose: 'Helps small business owners track buying points and monitor margins in real-time.',
    targetAudience: 'Resellers, retail businesses, and inventory procurement managers.',
    developmentStory: 'Emerged during business accounting reviews, replacing multiple manual browser tabs with a single margin dashboard.',
    tags: ['Procurement Tracker', 'Arbitrage tool', 'Business Margin']
  },
  {
    id: 'shangri-la-reads',
    name: 'Shangri-La Reads',
    url: 'https://shangri-la-reads-287617961746.us-west2.run.app',
    category: 'Niche Utility',
    description: 'Immersive reading library with highly customized, distraction-free typography settings.',
    purpose: 'Provides custom typesetting options specifically designed to assist self-published reading previews.',
    targetAudience: 'Bookworms, independent editors, and indie publishing reviewers.',
    developmentStory: 'Created to provide an uncompromised aesthetic preview for digital books.',
    tags: ['Reading Sandbox', 'Typography Spec', 'Self-publishing']
  },
  {
    id: 'kover',
    name: 'Kover AI Support',
    url: 'https://kover-287617961746.us-west2.run.app',
    category: 'Core Saas',
    description: 'Hyper-contextualized resume-to-job matching assistant creating flawless customized cover letters.',
    purpose: 'Instantly aligns specific career outcomes to complex corporate role descriptors.',
    targetAudience: 'Job hunters, university graduates, and recruiting companies.',
    developmentStory: 'Built during recruitment training periods to strip generic cover letters of useless filler phrases.',
    tags: ['Cover Letter Tech', 'Job Finder Tools', 'Career Growth']
  },
  {
    id: 'uv-de-soupe',
    name: 'Creme UV de Soupe',
    url: 'https://creme-uv-de-soupe-287617961746.us-west2.run.app',
    category: 'Niche Utility',
    description: 'Warm, culinary micro-logging layout tracking creative home recipes with styled print outcomes.',
    purpose: 'Allows personal chefs and food bloggers to archive cooking ratios cleanly.',
    targetAudience: 'Culinary bloggers, personal cooks, and kitchen curators.',
    developmentStory: 'Designed as a family kitchen archive tool helping preserve exact visual instructions.',
    tags: ['Kitchen Logger', 'Recipe Designer', 'Foodie Tech']
  },
  {
    id: 'connect-hire-win',
    name: 'Connect Hire Win',
    url: 'https://connect-hire-win.lovable.app',
    category: 'Core Saas',
    description: 'Collaborative career preparation board matching interview feedback matrices to specific goals.',
    purpose: 'Provides live trackboards for interviewing processes and mock question checklists.',
    targetAudience: 'Remote team builders, tech interviewees, and career guides.',
    developmentStory: 'Formed from matching successful mock feedback patterns into an online board system.',
    tags: ['Interview Prep', 'Career Tracker', 'Hiring Boards']
  }
];
