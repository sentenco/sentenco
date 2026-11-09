// Impromptu speaking topics for the Wheel. Each entry is "Short label|Full prompt".
// The label fits on a wheel slice (16 characters or fewer); the prompt is what the speaker answers.
// Every day the Wheel loads 8 of them for the audience the teacher clicks (see dailyTopics).

const TEENS = [
  "School uniforms|Should students wear school uniforms? Give your opinion and explain why.",
  "Homework|Is homework helpful or a waste of time? Talk about your experience.",
  "Phone in class|Should students be allowed to use phones in class? Why or why not?",
  "Best subject|What is your favorite school subject, and what makes it special for you?",
  "Perfect weekend|Describe your perfect weekend from morning to night.",
  "Social media|How much time is too much time on social media? Explain your view.",
  "Dream job|What job would you love to have in the future, and why?",
  "Superpower|If you could have one superpower, which would you choose and how would you use it?",
  "Best friend|What makes someone a good friend? Use an example from your life.",
  "Favorite game|Talk about a game you love and explain how to play it.",
  "Time travel|If you could visit any time in history, when would you go and why?",
  "School lunch|What would you change about school lunches? Be creative.",
  "Pets|Is it better to have a dog or a cat? Defend your choice.",
  "Learning English|Why is it useful to learn English? Share your own reasons.",
  "Favorite movie|Tell us about a movie you could watch again and again.",
  "Morning routine|Describe your morning routine. What do you do first?",
  "Part-time job|Should teenagers have a part-time job? Give reasons for your answer.",
  "Best birthday|Tell us about the best birthday you ever had.",
  "Gaming|Are video games good or bad for teenagers? Explain.",
  "Four-day week|Should schools have a four-day week? What would be good and bad about it?",
  "Role model|Who is a person you look up to, and what can we learn from them?",
  "Dream trip|Where would you go on a trip with your friends, and what would you do there?",
  "Sports|Why is sport important? Talk about a sport you like or dislike.",
  "Be a teacher|If you were the teacher for a day, what would you do?",
  "Favorite food|Describe your favorite food so well that we can almost taste it.",
  "Screen time|Do you think your family should have screen time rules? Explain.",
  "Music|What kind of music do you enjoy, and how does it make you feel?",
  "Embarrassing day|Tell us about a time you felt embarrassed. What happened?",
  "Start time|Should school start later in the morning? Give your opinion.",
  "A new rule|If you could make one new rule for your school, what would it be?",
  "Teen problems|What is the hardest thing about being a teenager today?",
  "Invention|Invent something that would make life easier for students. How does it work?",
  "Reading|Do you prefer reading books or watching videos? Explain your choice.",
  "Exam stress|How do you deal with stress before a test? Give some advice.",
  "Cooking|Talk about a time you cooked something. What did you make and how did it go?",
  "Online friends|Can you have a real friendship with someone you only know online?",
  "Living abroad|Would you like to live in another country one day? Why or why not?",
  "A good day|What makes a day a good day for you?",
  "Fashion|Does what you wear say something about who you are? Share your view.",
  "Strange animal|You can have any unusual animal as a pet. Which one, and what would happen?",
  "Rainy day|What do you like to do on a rainy day when you cannot go out?",
  "Family dinner|Why is it good to eat dinner together as a family? Or is it not important?",
  "Group work|Do you prefer working alone or in a group at school? Why?",
  "Favorite place|Describe a place that makes you feel happy and calm.",
  "Yearly holiday|Which holiday or festival is your favorite, and how do you celebrate it?",
  "Lost phone|Imagine you lose your phone for a whole week. What would change?",
  "Famous person|Which famous person would you like to meet, and what would you ask?",
  "Big decision|Tell us about a hard decision you made. Were you happy with it?",
  "Be an influencer|Would you like to be a famous online influencer? Explain.",
  "School trip|Describe your dream school trip. Where would you go?",
  "First day|How do you feel on the first day of something new, like school or a team?",
  "Being kind|Tell us about a time someone was kind to you or you were kind to someone.",
  "Space|Would you like to travel to space? Talk about the good and bad sides.",
  "Teacher tips|What makes a teacher great? Describe the qualities you like.",
  "Bad habit|What is one habit you want to change, and how will you do it?",
  "Money|If you got a lot of money today, how would you spend it?",
  "Smart homes|Would you like a robot to do your chores at home? Explain.",
  "Best memory|Share one of your happiest childhood memories.",
  "Being shy|Is it hard for you to speak in front of people? Share your thoughts.",
  "Tradition|Describe a family tradition that is important to you.",
  "Winter or summer|Do you prefer summer or winter? Give three reasons.",
  "Giving advice|A younger student is nervous about starting high school. What do you tell them?",
  "School clubs|Which club would you start at your school, and what would you do in it?",
  "Taking risks|Is it good to take risks? Talk about a time you did something brave.",
  "Teamwork|Describe a time when working as a team helped you win or finish something.",
  "Healthy living|What do you do to stay healthy? Is it easy or hard for you?",
  "A big change|Talk about a time when something big changed in your life.",
  "Best invention|What is the best invention of all time? Convince us.",
  "City or village|Would you rather live in a big city or a small town? Why?",
  "Texting|Is texting better than talking face to face? Give your opinion.",
  "Favorite season|Which season do you like best, and what do you do during it?",
  "Funny story|Tell us the funniest thing that ever happened to you.",
  "Cartoons|Did you have a favorite cartoon when you were small? What was it about?",
  "Be a leader|Would you like to be a class leader? What would you do first?",
  "Learning a skill|What new skill would you like to learn this year, and how will you learn it?",
  "Fast fashion|Is it important to have the newest clothes or gadgets? Explain.",
  "Superhero day|You are a superhero for one day. Describe what happens.",
  "Cheating|Why do some students cheat on tests? What should teachers do?",
  "Volunteering|Would you like to help people as a volunteer? What would you do?",
  "Your hometown|Tell a visitor why they should come to your hometown.",
  "Sleep|How much sleep do teenagers need, and why is it hard to get enough?",
  "Best advice|What is the best advice someone ever gave you?",
  "Movies or books|A movie is usually different from the book. Which do you like better?",
  "Lucky charm|Do you believe in luck or superstitions? Share an example.",
  "Night owl|Are you a morning person or a night owl? How does it affect you?",
  "Surprise|Tell us about the best surprise you ever got or gave.",
  "Failure|Is failing a good way to learn? Talk about a time you failed.",
  "Cool teacher|Describe your favorite teacher and what they did differently.",
  "Island life|You are on a deserted island. What three things do you take, and why?",
  "Weekend jobs|Should teenagers help with house chores? Explain what is fair.",
  "A hobby|Tell us about a hobby that you enjoy and why you started it.",
  "Dress code|Should schools have a dress code? Explain your opinion.",
  "Competitions|Do you like to compete or just play for fun? Why?",
  "Photos|Why do people take so many photos today? Is it a good thing?",
  "Weird food|Would you try a strange food from another country? Describe your answer.",
  "Be yourself|Is it hard to be yourself around other people? Share your thoughts.",
  "Tomorrow|Imagine you can plan tomorrow perfectly. What do you do?",
];

const ADULTS = [
  "Remote work|Is working from home better than working in an office? Give your view.",
  "Dream job|If money did not matter, what job would you choose, and why?",
  "Work and life|How do you keep a healthy balance between work and personal life?",
  "Social media|Has social media improved or damaged our relationships? Explain.",
  "Best advice|What is the best piece of advice you have ever received?",
  "Learning English|What has been the hardest part of learning English, and what helped most?",
  "A good boss|Describe the qualities of a good boss. Have you ever had one?",
  "Time management|What is your best tip for managing time well?",
  "Big city life|Would you prefer to live in a big city or in the countryside? Why?",
  "Cash or card|Will we stop using cash completely one day? Share your opinion.",
  "AI at work|How will artificial intelligence change the way people work in the next ten years?",
  "Biggest change|Talk about a big change in your life and what it taught you.",
  "Cooking at home|Is it better to cook at home or eat out? Talk about cost, health and time.",
  "Public transport|How could public transport in your city be improved?",
  "Saving money|What is a smart way to save money? Share a tip from your own life.",
  "Fitness|Do you find it easy to stay active? Explain what works for you.",
  "Success|What does success mean to you? Is it money, happiness, or something else?",
  "Travel lessons|What is the most important thing travel has taught you?",
  "Job interview|Describe the best or worst job interview you have had.",
  "Four-day week|Should companies adopt a four-day work week? What would be the effects?",
  "A mentor|Who has been an important mentor in your life, and what did they teach you?",
  "Online shopping|Has online shopping made life better or worse? Give reasons.",
  "Retirement|At what age should people retire? What would you do after you retire?",
  "Stress|How do you deal with stress? Offer some practical advice.",
  "Technology|Which piece of technology could you not live without, and why?",
  "Small talk|Why is small talk important? Give some tips for starting a conversation.",
  "Making friends|Is it harder to make friends as an adult? Explain your view.",
  "City planning|If you were the mayor for a week, what would you change first?",
  "Leadership|What is the difference between a manager and a leader?",
  "Risk|Describe a risk you took that paid off, or one you regret taking.",
  "Mistakes at work|Tell us about a mistake at work. What did you learn from it?",
  "Being on time|Why do some people always arrive late? Is it a big problem?",
  "Education|Is a university degree still necessary for a successful career?",
  "Traditions|Which family tradition would you like to pass on to your children?",
  "Healthy eating|Why is it so hard to eat healthy? Suggest some solutions.",
  "Tourism|Does tourism help or harm popular places? Give your opinion.",
  "Volunteering|Why should people volunteer? Share your experience or ideas.",
  "Gig economy|Is freelance work better than a regular job? Think about freedom and security.",
  "Climate|What can ordinary people do to help the environment, and does it make a difference?",
  "Productivity|What helps you do your best work? Describe your ideal day.",
  "Customer service|Describe a time when you received excellent or terrible service.",
  "Moving abroad|Would you move to another country for a better job? Explain.",
  "Language link|How does learning a language help you understand a culture?",
  "Digital detox|Would you try a week without your phone? What would happen?",
  "Minimalism|Do we own too many things? Talk about the idea of living with less.",
  "Meetings|Are most work meetings a waste of time? How could they be better?",
  "Regret|Is it better to regret something you did or something you never tried?",
  "Teaching|If you could teach one thing to a large group, what would it be?",
  "Parenting|What is the most important value to teach a child?",
  "News|How do you decide which news to trust today?",
  "First look|Are first impressions important, or are they often wrong?",
  "Public speaking|Why do many people fear public speaking? Share tips to feel more confident.",
  "Money and joy|Can money buy happiness? Support your answer with examples.",
  "Cities at night|What makes a city a great place to visit after dark?",
  "A local dish|Describe a dish from your region and explain how to prepare it.",
  "Hobbies|Why is it important for adults to have a hobby? Tell us about yours.",
  "Housing|Is it better to rent or to buy a home? Think about different situations.",
  "Competition|Does competition bring out the best or the worst in people?",
  "Great teacher|Describe a teacher who changed the way you think.",
  "Driverless cars|Would you trust a car that drives itself? Explain.",
  "Online learning|Can learning online be as good as learning in a classroom?",
  "Celebrities|Why are people so interested in the lives of famous people?",
  "Planning ahead|Are you a planner or do you prefer to be spontaneous? Give an example.",
  "Conflict|How should we handle a disagreement with a colleague or friend?",
  "Your first job|Tell us about your first job and what you remember most.",
  "Giving feedback|How can you give honest feedback without upsetting someone?",
  "Local tradition|Describe a festival or tradition in your country that visitors should see.",
  "Change a law|If you could change one law in your country, which would it be?",
  "Work culture|What makes a great place to work? Describe the culture you would choose.",
  "Hard talks|Tell us how to prepare for a difficult conversation.",
  "Procrastination|Why do we put things off, and how can we stop?",
  "Great decade|Which decade would you have liked to live in, and why?",
  "Weekend plans|How do you like to spend a free weekend? Is rest or activity better?",
  "Advertising|Do advertisements influence you more than you think?",
  "Health care|What makes a good health care system? Share your experience.",
  "Global English|Is it fair that English is the language of international business?",
  "Wealthy or free|Would you choose a high salary or more free time? Explain.",
  "Neighbors|How important is it to know your neighbors? Share an experience.",
  "Smart cities|Would you like to live in a city run by technology? Think about both sides.",
  "Gratitude|Who are you grateful for, and have you ever told them?",
  "Cultural shock|Describe a time when something in another culture surprised you.",
  "Generations|What can younger and older generations learn from each other?",
  "Dream holiday|Plan the perfect holiday for a week. Where, with whom, and what do you do?",
  "Changing careers|Is it ever too late to change careers? Share your opinion.",
  "Gifts|What is the best gift you have given or received, and why was it special?",
  "Ethics at work|You find a colleague made a serious mistake. What do you do?",
  "Self-improvement|What is one thing you want to improve about yourself this year?",
  "Fast food|Should governments control what unhealthy food companies sell?",
  "Reading habits|Do you read for pleasure? Recommend a book to the group.",
  "Slow living|Is life moving too fast? What would a slower life look like?",
  "Teamwork|What makes a team work well together? Use an example.",
  "Superstition|Do you believe in luck or superstition? Explain how it affects your choices.",
  "Memory|Describe a moment from your past that you remember in great detail.",
  "Home town|What would you show a visitor in your home town, and why?",
  "Be a boss|You become the head of a company tomorrow. What are your first three decisions?",
  "Art|Does art matter in daily life? Talk about something that moved you.",
  "Courage|Describe an act of courage that you witnessed or took part in.",
  "Looking ahead|Where do you see yourself in ten years, and what will you do to get there?",
];

function parse(list) {
  return list.map((line) => {
    const [label, prompt] = line.split("|");
    return { label, prompt };
  });
}

export const TOPIC_BANKS = { teens: parse(TEENS), adults: parse(ADULTS) };
export const TOPICS_PER_WHEEL = 8;

// Small seeded random generator so that everyone gets the same "today" set.
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled(list, seed) {
  const rand = mulberry32(seed);
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// Whole days since 1 Jan 2025 on the user's own calendar (so the set changes at their midnight).
export function dayNumber(date = new Date()) {
  const start = Date.UTC(2025, 0, 1);
  const today = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor((today - start) / 86400000);
}

// The 8 topics for a given day: no repeats until the whole bank has been used,
// then the bank is reshuffled so the next round is grouped differently.
export function dailyTopics(audience, date = new Date()) {
  const bank = TOPIC_BANKS[audience];
  const perCycle = Math.floor(bank.length / TOPICS_PER_WHEEL);
  const day = dayNumber(date);
  const cycle = Math.floor(day / perCycle);
  const slot = ((day % perCycle) + perCycle) % perCycle;
  const order = shuffled(bank, 7919 * (cycle + 1) + (audience === "teens" ? 11 : 23));
  return order.slice(slot * TOPICS_PER_WHEEL, (slot + 1) * TOPICS_PER_WHEEL);
}

// A random set for the Shuffle button, so a class can keep going after today's set.
export function randomTopics(audience, avoidLabels = []) {
  const bank = TOPIC_BANKS[audience].filter((t) => !avoidLabels.includes(t.label));
  return shuffled(bank, Math.floor(Math.random() * 1e9)).slice(0, TOPICS_PER_WHEEL);
}
