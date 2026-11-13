// Just Talk C1-C2: the owner's private speaking course for advanced students.
// 5 stages, 33 modules of 3 stand-alone 25-minute lessons, a check-in after each stage.
// Lesson: Impromptu speech (0-6) > Power language (6-8: block trick + sound + module phrases) > Main task (8-20) > Hot seat (20-23) > Wrap-up (23-25).
// Every 3 modules is a BLOCK with one speaker's trick, one sound focus and a progress checkpoint
// (the block's last lesson compares the impromptu speech with the block's first lesson).
// Main-task formats: Debate, Dilemma, Summarize (and respond), Data (read the data), Solve (it), Steelman, Mixed.
// No pictures at this level; Data lessons draw real-source charts on the board.

export const C1_FORMATS = { Debate: "Debate", Dilemma: "Dilemma", Summarize: "Summarize and respond", Data: "Read the data", Solve: "Solve it", Steelman: "Steelman", Mixed: "Mixed" };

// 12 blocks: [first module, last module], trick, sound.
export const C1_BLOCKS = [
  { mods: [1, 3], trick: { name: "Point, reason, example", sub: "Say it, back it up, prove it", how: "Say your point in one sentence, give one reason, then one real example. Short, clear and hard to argue with.", ex: "<b>Point:</b> phones don't belong in class. <b>Reason:</b> they break concentration. <b>Example:</b> after France's ban, teachers said break times got louder and more social." },
    sound: { name: "Stress the key word", how: "Say the most important word in each idea a little louder and longer. Everything around it stays light and quick.", ex: "I <b>really</b> don't think it works for <b>hospitals</b>." } },
  { mods: [4, 6], trick: { name: "Signposting", sub: "First of all, on top of that, finally", how: "Tell the listener where you are in your answer: what comes first, what you're adding, and when you're finishing.", ex: "<b>First of all,</b> the budget is small. <b>On top of that,</b> people love their cars. <b>So finally,</b> I'd start with buses." },
    sound: { name: "Pause before the point", how: "Stop for a short beat just before your main point. The silence makes people listen.", ex: "And the best part of the plan is... <b>(pause)</b> it costs almost nothing." } },
  { mods: [7, 9], trick: { name: "Admit, then push back", sub: "Fair enough... but", how: "Agree with a small part of the other view first, then make your point. You sound fair, and you're harder to argue with.", ex: "<b>Fair enough,</b> university opens doors. <b>But</b> not every door is worth $100,000." },
    sound: { name: "Slow down for your main point", how: "Speak at normal speed, then slow right down for the one sentence that matters most.", ex: "So my answer is... <b>it... depends... on the job.</b>" } },
  { mods: [10, 12], trick: { name: "Cause and effect", sub: "which leads to, as a result, that's why", how: "Link ideas into a chain: one thing causes the next. It turns a list of opinions into an argument.", ex: "Flights are cheap, <b>which leads to</b> more flying, <b>and as a result</b> emissions keep rising." },
    sound: { name: "Linking words smoothly", how: "Join the end of one word to the start of the next when it begins with a vowel, so you sound fluent, not robotic.", ex: "turn_it_off · an_idea · it_is_a_big_issue" } },
  { mods: [13, 15], trick: { name: "The story hook", sub: "Picture this... / Let me tell you about...", how: "Open with a tiny story or a scene before your opinion. People remember stories, not points.", ex: "<b>Picture this:</b> a 70-year-old woman opens her first café. Now tell me it's too late to start." },
    sound: { name: "A storyteller's voice", how: "Change your speed and volume: slower and quieter for tension, faster for action.", ex: "I opened the door... <b>(quiet, slow)</b> and nobody was there. <b>(normal)</b> So I ran." } },
  { mods: [16, 17], trick: { name: "Steelmanning", sub: "The strongest case for the other side is...", how: "Before you argue, give the best version of the view you disagree with. Then answer it.", ex: "<b>The strongest case for</b> keeping these objects is that more people can see them here. <b>Still,</b> they were taken." },
    sound: { name: "A fair, neutral tone", how: "When you describe the other side, keep your voice calm and flat, never sarcastic. Save the energy for your own view.", ex: "Some people believe dubbing helps more people enjoy films. <b>(calm)</b> I see it differently." } },
  { mods: [18, 20], trick: { name: "Precise hedging", sub: "arguably, to some extent, in most cases", how: "Make claims exactly as strong as your evidence: not too sure, not too vague.", ex: "AI art is, <b>arguably,</b> still art, and <b>in most cases</b> the human prompt matters more than people think." },
    sound: { name: "Soft tone for careful claims", how: "Use a gentler, slightly rising tone on hedging words, so you sound thoughtful rather than unsure.", ex: "It's <b>arguably</b> the best option, <b>to some extent</b>." } },
  { mods: [21, 23], trick: { name: "Reframing the question", sub: "The real question is...", how: "If the question is too narrow or unfair, change it to the question that really matters, then answer that.", ex: "It's not about punishment or kindness. <b>The real question is</b> what makes our streets safer." },
    sound: { name: "Rising and falling questions", how: "Yes/no questions usually rise at the end; wh- questions and rhetorical questions usually fall.", ex: "Is that fair? <b>(rise)</b> And who pays for it? <b>(fall)</b>" } },
  { mods: [24, 25], trick: { name: "Questions and threes", sub: "Rhetorical questions and the rule of three", how: "Ask a question you then answer yourself, and group ideas in threes. Both make you sound like a confident speaker.", ex: "<b>Why does this matter?</b> Because it's cheaper, safer and faster." },
    sound: { name: "The rhythm of three", how: "Give each of the three items the same beat, with a small rise on the first two and a fall on the last.", ex: "cheaper <b>↗</b>, safer <b>↗</b> and faster <b>↘</b>" } },
  { mods: [26, 28], trick: { name: "Handling interruptions", sub: "If I could just finish... / Let me come back to that", how: "Keep the floor politely when someone cuts in, or park their point and return to it.", ex: "<b>If I could just finish this thought,</b> I'll come straight back to your question." },
    sound: { name: "Holding the floor", how: "Keep your voice up at the end of each part of your sentence, so it's clear you haven't finished.", ex: "There are two problems <b>↗</b>, and the first one <b>↗</b> is the cost." } },
  { mods: [29, 31], trick: { name: "Analogies", sub: "It's a bit like... / Think of it as...", how: "Explain a complex idea by comparing it to something everyone knows.", ex: "Doping in sport is <b>a bit like</b> cheating in an exam: you win, but you didn't really pass." },
    sound: { name: "Contrast stress", how: "When you compare two things, stress both sides of the contrast.", ex: "It's not the <b>money</b> I'm against, it's the <b>message</b>." } },
  { mods: [32, 33], trick: { name: "Closing strong", sub: "So, to sum up... / If you remember one thing...", how: "End with one clear sentence that sums up your view, instead of fading out.", ex: "<b>If you remember one thing,</b> remember this: a good lie is still a lie." },
    sound: { name: "A slow, falling final line", how: "Say your last sentence slower and let your voice fall at the end, so everyone knows you've finished.", ex: "And that's why... I'd say... <b>no. ↘</b>" } },
];

// Impromptu wheel topics, per stage. Lesson 1 = topic, lesson 2 = flip side, lesson 3 = three words (odd modules) or explain it simply (even modules);
// checkpoint lessons always use topic.
export const C1_WHEEL = {
  1: {
    topic: ["The best advice you ignored", "A rule you would happily break", "Something everyone loves but you don't", "The most overrated invention", "What your phone says about you", "A skill school should teach", "Something you changed your mind about", "The job you'd do for free"],
    flip: ["Working from home beats the office", "Social media does more good than harm", "Tourism ruins beautiful places", "Money can buy happiness", "Everyone should learn to cook", "Cities are better than the countryside", "Exams show what you really know", "Cash will disappear, and that's fine"],
    three: ["an airport", "a lie", "my grandmother", "a broken phone", "the wrong bus", "a stranger", "midnight", "a birthday"],
    simple: ["Inflation", "Jet lag", "A mortgage", "How vaccines work", "The stock market", "Why the sky is blue", "A VPN", "Climate change"],
  },
};

const B = (n) => C1_BLOCKS.findIndex((b) => n >= b.mods[0] && n <= b.mods[1]);

export const C1_STAGES = [
  { n: 1, lv: "C1", name: "Make your case", check: "3-minute impromptu, a short debate, then a hot seat.", modules: [
    { name: "Technology", f: "Debate", lessons: [["Phones in Schools", "Motion: phones should be banned in all schools."], ["The Screen-Time Panic", "Motion: we worry far too much about screen time."], ["The Right to Disconnect", "Motion: bosses should not be allowed to message staff after work."]] },
    { name: "Food", f: "Dilemma", lessons: [["The Restaurant Review", "Your friend's new restaurant is bad, and they ask you for an online review."], ["The Dinner Invitation", "You're vegetarian, and your partner's parent proudly serves you meat."], ["The Office Fridge", "Someone keeps eating your lunch at work, and you know who it is."]] },
    { name: "Work", f: "Debate", lessons: [["The Four-Day Week", "Motion: every company should move to a four-day week."], ["Is Hustle Culture Over?", "Motion: working long hours is the only way to get ahead."], ["Public Salaries", "Motion: everyone's salary should be public."]] },
    { name: "Cities", f: "Solve", lessons: [["The Traffic Budget", "Your city has $1 million to cut traffic. Plan how to spend it."], ["The Empty Mall", "A huge mall in your town has closed. Decide what it becomes."], ["Ten Minutes Back", "Plan how to give every commuter in your city 10 minutes back a day."]] },
    { name: "Health", f: "Data", lessons: [["Steps Around the World", "How many steps people take a day, country by country."], ["Sleep Around the World", "How long people sleep in different countries."], ["How Long We Live", "World life expectancy from 1950 to today."]] },
    { name: "Friendship", f: "Dilemma", lessons: [["The Copied Project", "A close friend copied your work and got the better grade."], ["The Loan", "A good friend asks to borrow a large amount of money."], ["The Clash", "Your best friend's wedding falls on the day of a big job interview."]] },
  ] },
  { n: 2, lv: "C1", name: "Weigh it up", modules: [
    { name: "Education", f: "Debate", lessons: [] }, { name: "Money", f: "Dilemma", lessons: [] }, { name: "Travel", f: "Summarize", lessons: [] },
    { name: "Environment", f: "Debate", lessons: [] }, { name: "Social media", f: "Dilemma", lessons: [] }, { name: "Science", f: "Data", lessons: [] },
  ] },
  { n: 3, lv: "C1", name: "Tell it well", modules: [
    { name: "Life stories", f: "Summarize", lessons: [] }, { name: "Generations", f: "Debate", lessons: [] }, { name: "Ethics", f: "Dilemma", lessons: [] },
    { name: "Culture", f: "Steelman", lessons: [] }, { name: "Media", f: "Data", lessons: [] },
  ] },
  { n: 4, lv: "C2", name: "Persuade with nuance", modules: [
    { name: "Artificial intelligence", f: "Debate", lessons: [] }, { name: "Privacy", f: "Dilemma", lessons: [] }, { name: "Business", f: "Solve", lessons: [] },
    { name: "Law and justice", f: "Steelman", lessons: [] }, { name: "Life choices", f: "Dilemma", lessons: [] }, { name: "Fame", f: "Summarize", lessons: [] },
    { name: "Language", f: "Data", lessons: [] }, { name: "Risk", f: "Solve", lessons: [] },
  ] },
  { n: 5, lv: "C2", name: "Think on your feet", modules: [
    { name: "The future", f: "Debate", lessons: [] }, { name: "Relationships", f: "Dilemma", lessons: [] }, { name: "Leadership", f: "Steelman", lessons: [] },
    { name: "Sport", f: "Debate", lessons: [] }, { name: "Art and history", f: "Dilemma", lessons: [] }, { name: "Global issues", f: "Solve", lessons: [] },
    { name: "Big questions", f: "Steelman", lessons: [] }, { name: "Final lessons", f: "Mixed", lessons: [] },
  ] },
];

export const c1Slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Flat list of every written lesson (and check-in), in course order.
export const C1_LESSONS = (() => {
  const list = [];
  let mod = 0;
  for (const st of C1_STAGES) {
    for (const m of st.modules) {
      mod += 1;
      const bi = B(mod);
      const block = C1_BLOCKS[bi];
      m.lessons.forEach(([title, prompt], i) => {
        const n = i + 1;
        const firstMod = block.mods[0];
        list.push({
          key: c1Slug(title), stage: st.n, lv: st.lv, modNum: mod, module: m.name, n, title, prompt, format: m.f, block: bi,
          // a checkpoint lesson opens with the same kind of speech as the block's first lesson (a topic)
          wheel: n === 1 || (mod === block.mods[1] && n === 3) ? "topic" : n === 2 ? "flip" : mod % 2 ? "three" : "simple",
          checkpoint: mod === block.mods[1] && n === 3, firstOfBlock: { mod: firstMod },
        });
      });
    }
    if (st.modules.some((m) => m.lessons.length)) list.push({ key: `check-in-${st.n}`, stage: st.n, lv: st.lv, check: true, title: `Stage ${st.n} Check-in`, prompt: st.check, format: "Debate", block: B(mod), wheel: "topic" });
  }
  // The checkpoint compares with the first lesson of the block's first module.
  for (const l of list) if (l.firstOfBlock) l.firstOfBlock = list.find((x) => x.modNum === l.firstOfBlock.mod && x.n === 1)?.key || null;
  return list;
})();
