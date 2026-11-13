// Just Talk C1-C2 · Stage 3 (C1, Tell it well): Modules 13-17 + check-in 3. Owner-only.
// Same shapes as justTalkC1S1.js / S2, plus:
//   Steelman: main { brief: [[title, fact]], motion, for: [4], against: [4], time }   hot { for: [3], against: [3], neutral: [2] }
//     The student picks what they REALLY think, makes the best case for the OTHER side, then answers it.
//     The hot seat pushes against the side they really hold.
// Summarize texts are opinion pieces written for these lessons. Facts and data are from real sources named on the board.

export const C1_PHRASES_S3 = {
  "Life stories": [
    ["Report it", "The story shows that ...", "Sum up the lesson of the story.", "<b>The story shows that</b> it's never too late to start."],
    ["Report it", "What struck me most was ...", "The detail that stayed with you.", "<b>What struck me most was</b> how many times she failed first."],
    ["Report it", "The writer's point seems to be ...", "A careful summary.", "<b>The writer's point seems to be</b> that quitting can be brave."],
    ["Connect it", "That reminds me of ...", "Link it to your own life.", "<b>That reminds me of</b> my grandfather, who learned to paint at 70."],
    ["Question it", "I'm not sure the story proves ...", "Doubt the conclusion.", "<b>I'm not sure the story proves</b> anyone can do it."],
    ["Connect it", "In my own experience, ...", "Bring in your own story.", "<b>In my own experience,</b> practice beat talent every time."],
  ],
  Generations: [
    ["Compare", "Compared with my parents' generation, ...", "Set two generations side by side.", "<b>Compared with my parents' generation,</b> we travel much more."],
    ["Compare", "Back then, ..., whereas now ...", "Then and now in one sentence.", "<b>Back then,</b> a house cost four years' pay, <b>whereas now</b> it's eight."],
    ["Be fair", "It's easy to forget that ...", "Remind people of something.", "<b>It's easy to forget that</b> our grandparents had no internet."],
    ["Be fair", "To be fair to older people, ...", "Give the other generation credit.", "<b>To be fair to older people,</b> they built a lot of what we use."],
    ["Evidence", "The numbers tell a different story:", "Correct a belief with data.", "<b>The numbers tell a different story:</b> homes cost twice as much."],
    ["Conclude", "Every generation has its own ...", "Zoom out at the end.", "<b>Every generation has its own</b> problems and its own luck."],
  ],
  Ethics: [
    ["Decide", "The right thing to do would be ...", "What's morally right.", "<b>The right thing to do would be</b> to report it."],
    ["Feel", "I couldn't live with myself if ...", "What your conscience can't accept.", "<b>I couldn't live with myself if</b> someone got hurt."],
    ["Weigh it", "There's no easy answer, but ...", "Admit it's hard, then choose.", "<b>There's no easy answer, but</b> I'd tell the truth."],
    ["Weigh it", "It's only fair to ...", "Fairness to someone.", "<b>It's only fair to</b> warn the next employer."],
    ["Weigh it", "The lesser of two evils is ...", "When both choices are bad.", "<b>The lesser of two evils is</b> losing the friendship."],
    ["Feel", "My conscience tells me ...", "Your inner voice.", "<b>My conscience tells me</b> to speak up."],
  ],
  Culture: [
    ["Steelman", "The strongest case for ... is ...", "Give the other side its best argument.", "<b>The strongest case for</b> keeping them <b>is</b> that more people can see them."],
    ["Steelman", "To be fair to the other side, ...", "Be generous first.", "<b>To be fair to the other side,</b> dubbing helps people who can't read fast."],
    ["Steelman", "I can see why people believe ...", "Show you understand.", "<b>I can see why people believe</b> visitors should adapt."],
    ["Steelman", "Their best argument is ...", "Name it clearly.", "<b>Their best argument is</b> respect for the host culture."],
    ["Answer it", "Having said that, ...", "Turn to your own view.", "<b>Having said that,</b> I still think they belong at home."],
    ["Answer it", "Where I part ways is ...", "Where you stop agreeing.", "<b>Where I part ways is</b> the idea that rules never change."],
  ],
  Media: [
    ["Describe it", "The data points to ...", "What the chart suggests.", "<b>The data points to</b> a big gap between countries."],
    ["Describe it", "What's striking is ...", "The surprising part.", "<b>What's striking is</b> how few people pay in the UK."],
    ["Describe it", "... dropped off sharply in ...", "A sudden fall.", "Ticket sales <b>dropped off sharply in</b> 2020."],
    ["Describe it", "... has recovered, but not fully", "Coming back, but not all the way.", "The box office <b>has recovered, but not fully</b>."],
    ["Explain it", "This is partly because ...", "One cause among several.", "<b>This is partly because</b> people got used to streaming."],
    ["Predict it", "Looking ahead, I'd expect ...", "Your forecast.", "<b>Looking ahead, I'd expect</b> trust to keep falling."],
  ],
};

export const C1_S3 = {
  /* ---------- Module 13 · Life stories · Summarize and respond ---------- */
  "the-late-bloomer": {
    main: { title: "It's Never Too Late", byline: "An opinion piece written for this lesson",
      text: ["We love stories about young geniuses: the 19-year-old who starts a company, the teenage champion. But some of the most interesting lives start late.", "Harland Sanders began franchising his fried chicken in his sixties. Vera Wang designed her first wedding dress at about 40, after careers in figure skating and fashion journalism. And in every town there are people who learn to paint, run a marathon or open a café when everyone expected them to slow down.", "Starting late has real advantages: you know who you are, you have more patience, and you are less afraid of looking foolish. The only real deadline is the one we set ourselves. So if there is something you have always wanted to try, the best time was years ago. The second-best time is now."],
      points: ["We celebrate young success too much", "Some famous people started late", "Starting late brings patience and self-knowledge", "The only deadline is the one we set ourselves"],
      agree: ["Experience and patience help", "Many people find their passion later", "Fear of looking foolish fades with age"], disagree: ["Some careers really do need an early start", "Older people may have less energy and time", "A few success stories don't prove it for everyone"] },
    hot: { agree: ["Could someone start a football career at 40?", "Isn't it easier to take risks with no family to support?", "Do a few famous examples prove anything?"], disagree: ["Do you know anyone who started something great after 50?", "What do you think you're too old for, and why?", "Isn't 'too late' often just fear?"], neutral: ["What would you start tomorrow if age didn't matter?", "What would make you change your mind?"] },
    home: "Think of someone you know who started something late in life. Be ready to tell their story in one minute, starting with a hook. Nothing to send.",
    more: [["What did you want to be when you were ten?", "Why?"], ["Is there something you think you're too old to start?", "Really?"], ["Who's the most inspiring older person you know?", "Why?"], ["Is it harder to learn new things as you get older?", "In what way?"], ["What's the best age to change careers?", "Why?"], ["What would you like to learn in your sixties?", "Why then?"]],
  },
  "in-praise-of-quitting": {
    main: { title: "In Praise of Quitting", byline: "An opinion piece written for this lesson",
      text: ["We are told that winners never quit. It sounds inspiring, but it is often bad advice. People stay in jobs that make them miserable, in courses they chose at eighteen, in relationships that ended long ago, simply because quitting feels like failure.", "Economists have a name for this: the sunk cost fallacy. We keep going because of what we have already spent, not because of what we will get. But time spent on the wrong path is not an investment. It is a loss that keeps growing.", "Quitting well is a skill. It means asking honestly: if I were starting today, would I choose this? If the answer is no, walking away is not weakness. It is the first step toward something better."],
      points: ["'Never quit' is often bad advice", "The sunk cost fallacy keeps people stuck", "Time on the wrong path is a growing loss", "Ask: would I choose this if I started today?"],
      agree: ["Life is too short for the wrong path", "Many successful people quit something first", "Knowing when to stop is a skill"], disagree: ["Quitting too early means never getting good", "Hard things are worth it", "It can become a habit"] },
    hot: { agree: ["How do you know it's the wrong path and not just a hard week?", "What would happen if everyone quit when things got difficult?", "Have you ever regretted quitting something?"], disagree: ["Have you ever stayed in something too long?", "Why should you keep going just because you started?", "Isn't 'never quit' easy to say if you're happy?"], neutral: ["What's the difference between quitting and giving up?", "What would make you change your mind?"] },
    home: "Think of something you quit, or wish you had quit sooner. Be ready to tell the story in one minute. Nothing to send.",
    more: [["What's something you quit and don't regret?", "Why?"], ["What's something you're glad you didn't quit?", "What kept you going?"], ["Is quitting seen as bad in your culture?", "Why?"], ["How do you know when to stop?", "Any signs?"], ["Have you ever finished something just because you started?", "Was it worth it?"], ["What advice would you give someone who wants to quit their job?", "Why?"]],
  },
  "talent-or-practice": {
    main: { title: "Practice Beats Talent", byline: "An opinion piece written for this lesson",
      text: ["In 2008, the writer Malcolm Gladwell made the \"10,000-hour rule\" famous: the idea that experts are made by roughly ten thousand hours of practice. It became one of the most quoted ideas of the decade, and for good reason. It tells us that greatness is not a gift you either have or don't. It is earned.", "Think of any top musician or athlete. Behind every \"natural\" performance are years of repetition, mistakes and coaching that nobody sees. Talent might give you a head start, but without practice it goes nowhere.", "Researchers still argue about how much practice really explains, and later studies suggest it is only part of the story. Still, the message is the right one. Stop asking whether you are talented. Start asking how you will practise."],
      points: ["The 10,000-hour rule made practice famous", "Top performers practise for years out of sight", "Talent without practice goes nowhere", "Researchers say practice is only part of the story, but the message holds"],
      agree: ["Hard work is something you control", "Everyone improves with practice", "Believing in talent makes people give up"], disagree: ["Some people have real natural advantages", "Studies show practice explains only part of it", "Age, body and luck matter too"] },
    hot: { agree: ["If practice is everything, why can't everyone become a top athlete?", "What about height in basketball?", "The writer admits practice is only part of the story. Doesn't that weaken the point?"], disagree: ["Have you ever got good at something without practising?", "Isn't 'talent' sometimes an excuse not to try?", "Who's the hardest-working person you know, and how good are they?"], neutral: ["How many hours have you practised English?", "What would make you change your mind?"] },
    home: "Estimate how many hours you've spent learning English in your life. Be ready to explain how you worked it out. Nothing to send.",
    more: [["What are you naturally good at?", "Did you practise it?"], ["What took you the longest to learn?", "Why?"], ["Do you believe in talent?", "Why or why not?"], ["What would you practise for 10,000 hours?", "Why?"], ["Who's the best teacher or coach you've had?", "What did they do?"], ["Is it ever too late to master something?", "Example?"]],
  },

  /* ---------- Module 14 · Generations · Debate ---------- */
  "who-has-it-easier": {
    main: { brief: [["Home prices", "In England, an average home cost about 3.5 times a full-time salary in 1997 and over 8 times in 2023 (Office for National Statistics)."], ["Education", "In OECD countries, nearly half of 25-to-34-year-olds now have a university-level qualification."], ["Families", "In the 1960s, women around the world had about 5 children on average; today it's about 2.3 (United Nations)."]],
      motion: "Young people today have it easier than their parents did.", for: ["More education and opportunities", "Technology makes life easier", "More freedom in how to live", "Travel and information are cheap and easy"], against: ["Homes cost far more than before", "Jobs are less secure", "Social media brings new pressure", "Many face more debt"], time: 120 },
    hot: { for: ["How can a 25-year-old buy a home when it costs 8 years' salary?", "Is a phone full of apps really an easier life?", "Why do so many young people say they feel anxious?"], against: ["Would you swap your life for your parents' at your age?", "What could your parents not do that you can?", "Isn't every generation sure the next one has it easy?"], neutral: ["What's one thing each generation could learn from the other?", "What would make you change your mind?"] },
    home: "Ask an older relative one thing that was easier and one thing that was harder when they were your age. Be ready to tell me. Nothing to send.",
    more: [["What was easier for your parents than for you?", "And harder?"], ["Which generation do you belong to?", "Do you feel like it?"], ["What will be easier for the next generation?", "Why?"], ["Do older and younger people understand each other in your country?", "Why?"], ["What's the best advice an older person gave you?", "Did you follow it?"], ["Would you like to have been young in another decade?", "Which one?"]],
  },
  "voting-at-16": {
    main: { brief: [["Austria", "In 2007, Austria lowered the voting age to 16 for national elections."], ["Scotland", "Since 2016, 16- and 17-year-olds have been able to vote in Scottish Parliament and local elections."], ["European elections", "In 2024, Germany and Belgium let 16-year-olds vote in European Parliament elections."]],
      motion: "The voting age should be 16.", for: ["16-year-olds can work and pay taxes", "Decisions about the future affect them most", "Starting early builds a voting habit", "Many teenagers are well informed"], against: ["Most 16-year-olds aren't adults yet", "They may follow parents or social media", "Interest in politics is low at that age", "Where do you stop: 14, 12?"], time: 120 },
    hot: { for: ["Would you trust your 16-year-old self with a vote?", "If 16 is old enough to vote, why not to drink or drive?", "Couldn't parents simply tell them how to vote?"], against: ["Why can a 16-year-old pay taxes but not vote?", "Aren't many adults badly informed too?", "Austria has done it since 2007. What went wrong?"], neutral: ["What should schools teach about politics?", "What would make you change your mind?"] },
    home: "Notice one political decision in the news this week that affects young people. Be ready to explain it in one minute. Nothing to send.",
    more: [["When did you first vote?", "How did it feel?"], ["Were you interested in politics at 16?", "Why?"], ["Should voting be taught at school?", "How?"], ["Do young people vote less?", "Why?"], ["What decision would you change if young people voted more?", "Why?"], ["What age is someone an adult?", "Is it the same for everything?"]],
  },
  "retiring-later": {
    main: { brief: [["Denmark", "In 2025, Denmark voted to raise its pension age to 70 by 2040, the highest in Europe."], ["France", "In 2023, France raised its minimum retirement age from 62 to 64, after months of protests."], ["Living longer", "World life expectancy rose from about 46 years in 1950 to about 73 in 2019 (United Nations)."]],
      motion: "The retirement age should rise to 70.", for: ["People live much longer than before", "Pensions are hard to pay for", "Many people enjoy working longer", "Experience is valuable"], against: ["Physical jobs are too hard at 70", "Young people need those jobs", "People have earned their rest", "Not everyone lives longer"], time: 120 },
    hot: { for: ["Would you want a 69-year-old builder on a roof?", "What about people who started working at 16?", "Is a longer life a reason to work, or to rest?"], against: ["Who pays for 25 years of pension?", "What about people who want to keep working?", "Why did Denmark decide 70 was fair?"], neutral: ["Should the age be different for different jobs?", "What would make you change your mind?"] },
    home: "Think about what you'd do on your first day of retirement. Be ready to describe it in one minute, like a story. Nothing to send.",
    more: [["When would you like to retire?", "Why then?"], ["What will you do when you retire?", "Really?"], ["Do older people work in your country?", "In which jobs?"], ["Is retirement good for people?", "Always?"], ["Who looks after older people in your family?", "How?"], ["What would you miss about work?", "Anything?"]],
  },

  /* ---------- Module 15 · Ethics · Dilemma ---------- */
  "the-self-driving-car": {
    main: { situation: "You're on a team designing a self-driving car. You must decide what the car does if a crash can't be avoided: protect its passenger at all costs, or swerve to save more people outside the car.",
      options: [["a", "Always protect the passenger", ["People won't buy a car that might sacrifice them", "The passenger trusted the car", "It's predictable"]], ["b", "Save the most lives", ["More lives matter more", "It's the fairest rule", "Human drivers often do this"]], ["c", "Let the owner choose a setting", ["It's their car and their life", "No one decides for others", "It's honest about the choice"]]],
      twist: "A survey shows most people want other people's cars to save the most lives, but want their own car to protect them.", time: 150 },
    hot: { a: ["What if the car could save five children instead?", "Would you feel safe walking near those cars?", "Who's responsible for the people hit?"], b: ["Would you buy a car that might sacrifice you?", "Who decides what counts as 'more lives'?", "What if the passenger is a child?"], c: ["Isn't that letting rich people buy safety?", "Would you tell other drivers your setting?", "Who's to blame after a crash?"], neutral: ["Should machines ever make life-and-death decisions?", "What would make you change your answer?"] },
    home: "Notice one decision a machine or app makes for you this week, from your route to your music. Be ready to tell me. Nothing to send.",
    more: [["Would you ride in a self-driving car?", "Why?"], ["Do you trust machines more or less than people?", "For what?"], ["Who should be blamed when a robot makes a mistake?", "Why?"], ["What jobs would you never give to a machine?", "Why?"], ["Is it ever right to sacrifice one person to save more?", "When?"], ["Will people still learn to drive in 30 years?", "Why?"]],
  },
  "the-reference": {
    main: { situation: "A good friend worked for you for a year and was honestly not very good at the job: often late, often careless. Now they ask you to write a job reference. They really need the job.",
      options: [["a", "Write an honest reference", ["The next employer deserves the truth", "Your reputation is on the line", "Honesty helps them improve"]], ["b", "Write a glowing reference", ["Friends help each other", "Everyone deserves a second chance", "They might do better in a new job"]], ["c", "Politely decline to write one", ["You don't lie and don't hurt them", "They can ask someone else", "You stay honest"]]],
      twist: "Your friend tells you they've been looking after a sick parent all year, which is why they were often late.", time: 150 },
    hot: { a: ["What if your reference costs them the job?", "Could you be honest and kind at the same time?", "Would you show them what you wrote?"], b: ["What if they're careless in the new job too?", "Would you want someone to lie to you as an employer?", "What happens to your reputation?"], c: ["Isn't saying no also a message?", "What will you say to your friend?", "Is silence really more honest?"], neutral: ["Should references even exist?", "What would make you change your answer?"] },
    home: "Think of one person you'd happily write a reference for. Be ready to describe them in 3 sentences, with an example. Nothing to send.",
    more: [["Have you ever written a reference?", "Was it honest?"], ["Do employers in your country check references?", "Always?"], ["Is it ever okay to lie to help a friend?", "When?"], ["What's the best compliment a boss ever gave you?", "Why?"], ["Should work and friendship mix?", "Why?"], ["What would your last boss say about you?", "Honestly?"]],
  },
  "the-safety-secret": {
    main: { situation: "At work, you discover that your company has known for months about a safety problem in one of its products. Nobody has been hurt yet. Your manager tells you to keep quiet while they \"fix it\".",
      options: [["a", "Report it outside the company", ["People's safety comes first", "Customers have a right to know", "Silence makes you part of it"]], ["b", "Push harder inside first", ["Give them a deadline", "Go above your manager", "Write everything down"]], ["c", "Trust your manager and wait", ["They said they're fixing it", "You could lose your job", "Maybe the risk is small"]]],
      twist: "You find out a customer has just been injured, and the fix is still months away.", time: 150 },
    hot: { a: ["What if you lose your job and can't find another?", "Are you sure enough to go public?", "Who would you tell first?"], b: ["How long would you give them?", "What if your manager's boss already knows?", "Is that enough if someone gets hurt meanwhile?"], c: ["How would you feel if someone got hurt?", "What's your limit?", "Is 'I was told to' ever a good excuse?"], neutral: ["Should whistleblowers be protected by law?", "What would make you change your answer?"] },
    home: "Compare today's checkpoint speech with your first speech in Module 13. Did you open with a story hook? Be ready to tell me. Nothing to send.",
    more: [["Have you ever had to speak up at work?", "What happened?"], ["Are whistleblowers heroes or traitors?", "Why?"], ["What would make you leave a job immediately?", "Why?"], ["Do you trust big companies?", "Which ones?"], ["Is loyalty to your company a good thing?", "Always?"], ["What's the hardest decision you've made at work?", "Why?"]],
  },

  /* ---------- Module 16 · Culture · Steelman ---------- */
  "returning-treasures": {
    main: { brief: [["The Benin Bronzes", "In 2022, Germany transferred ownership of over 1,000 Benin Bronzes in its museums to Nigeria."], ["The Parthenon Marbles", "The British Museum holds the Parthenon Marbles; Greece has asked for their return for decades."]],
      motion: "Museums should return objects taken from other countries.", for: ["They were often taken by force", "They belong to the culture that made them", "Returning them repairs old wrongs", "Local communities can see their own history"], against: ["Big museums let millions see them", "Some objects are safer where they are", "Where do you stop: everything in every museum?", "Ownership is complicated after centuries"], time: 90 },
    hot: { for: ["What if the object is safer where it is now?", "Should every museum in the world empty its rooms?", "Isn't it good that millions of visitors can see them?"], against: ["Would you be happy if your country's treasures were abroad?", "If something was stolen, does time make it okay?", "Why did Germany decide to return the bronzes?"], neutral: ["Who should decide: governments, museums, or communities?", "What would make you change your mind?"] },
    home: "Look up one object from your country that's in a museum abroad. Be ready to steelman both sides about it. Nothing to send.",
    more: [["What's the best museum you've been to?", "Why?"], ["Is there something from your country in a museum abroad?", "Should it come back?"], ["Do museums still matter in the age of the internet?", "Why?"], ["Would you rather see a copy or the real thing?", "Why?"], ["What would you put in a museum about your life?", "Why?"], ["Who owns history?", "Anyone?"]],
  },
  "when-in-rome": {
    main: { brief: [["Barcelona", "Barcelona can fine people for walking around the city in swimwear away from the beach."], ["Places of worship", "Many churches, mosques and temples ask visitors to cover their shoulders and knees."]],
      motion: "Tourists should follow local customs, even ones they disagree with.", for: ["It shows respect for the host", "You're a guest in someone's home", "It avoids conflict and offense", "You learn more by joining in"], against: ["Some customs go against your values", "Respect doesn't mean giving up who you are", "Customs change over time", "Visitors bring new ideas too"], time: 90 },
    hot: { for: ["What if a custom treats women unfairly?", "Should a vegetarian eat meat to be polite?", "Where's the line between respect and giving up your values?"], against: ["Would you want visitors to ignore your country's customs?", "Isn't covering your shoulders a small thing?", "What's the point of travelling if you don't adapt?"], neutral: ["What's a custom from your country visitors often get wrong?", "What would make you change your mind?"] },
    home: "Think of one custom from your country that confuses visitors. Be ready to explain it fairly in one minute. Nothing to send.",
    more: [["What's a custom from another country that surprised you?", "Why?"], ["Have you ever made a cultural mistake abroad?", "What happened?"], ["Which customs from your country would you never give up?", "Why?"], ["Should immigrants adopt local customs?", "All of them?"], ["Are customs becoming the same everywhere?", "Good or bad?"], ["What should every visitor to your country know?", "Why?"]],
  },
  "original-or-dubbed": {
    main: { brief: [["Dubbing countries", "Germany, Spain, Italy and France traditionally dub most foreign films and TV."], ["Subtitling countries", "The Netherlands, where TV is mostly subtitled, ranked first in the EF English Proficiency Index in 2023."]],
      motion: "Films should always be shown in their original language.", for: ["You hear the real actors' voices", "Subtitles help people learn languages", "Translation changes jokes and meaning", "It respects the original work"], against: ["Subtitles are hard for children and slow readers", "People want to relax, not read", "Good dubbing is an art", "You miss the picture while reading"], time: 90 },
    hot: { for: ["What about children who can't read fast yet?", "Should people with poor eyesight just miss out?", "Isn't a great dubbing actor an artist too?"], against: ["Why do subtitling countries often speak better English?", "Have you ever watched a film dubbed badly?", "Doesn't an actor's real voice matter?"], neutral: ["Would you watch a film in a language you don't know, with subtitles?", "What would make you change your mind?"] },
    home: "Watch five minutes of a show in English with English subtitles. Notice one phrase you'd like to use. Nothing to send.",
    more: [["Do you prefer dubbed or subtitled films?", "Why?"], ["What's the best film you've seen in another language?", "Why?"], ["Do you watch shows in English?", "With subtitles?"], ["Has TV helped you learn English?", "How?"], ["Is anything lost in translation?", "Example?"], ["Would you watch a film with no translation at all?", "Why?"]],
  },

  /* ---------- Module 17 · Media · Read the data ---------- */
  "who-pays-for-news": {
    main: { title: "People who paid for online news in the last year, 2024", unit: "%", rows: [["Norway", 40, "40%"], ["Sweden", 31, "31%"], ["Average of 20 countries", 17, "17%"], ["Japan", 9, "9%"], ["UK", 8, "8%"]],
      source: "Reuters Institute, Digital News Report 2024 (online survey in 20 richer countries).", note: "The 20-country average has stayed at 17% for four years.",
      prompts: [["Describe", "What does the chart show? What's the biggest gap?", ["Norway pays five times more than the UK", "Most people don't pay at all", "The Nordic countries lead"]], ["Explain", "Why might people in Norway pay so much more than people in the UK?", ["Strong local newspapers", "Free news from the BBC in the UK", "Habits and trust"]], ["Predict", "Will more people pay for news in 10 years, or fewer? Why?", ["AI summaries may replace news sites", "Paywalls are spreading", "People may pay for one trusted source"]]] },
    hot: { all: ["Should news be free?", "Who pays for journalism if nobody buys it?", "Do you pay for any news? Why or why not?", "Is free news worse news?", "Should governments fund news?"] },
    home: "Count how many news sources you look at in one day this week. Do you pay for any? Nothing to send.",
    more: [["Where do you get your news?", "Why there?"], ["Do you pay for any subscriptions?", "Which ones?"], ["Do you trust free news?", "Why?"], ["Did your parents read newspapers?", "Do you?"], ["How do you know if news is true?", "Always?"], ["Would you pay for news about your town?", "How much?"]],
  },
  "cinemas-after-the-pandemic": {
    main: { title: "Box office in the US and Canada", unit: "billion US$", rows: [["2019", 11.3, "$11.3 billion"], ["2020", 2.1, "$2.1 billion"], ["2021", 4.5, "$4.5 billion"], ["2022", 7.4, "$7.4 billion"], ["2023", 9.0, "$9.0 billion"]],
      source: "Box Office Mojo (IMDb) and Comscore, yearly domestic box office.", note: "2023 was still about 20% below 2019.",
      prompts: [["Describe", "What happened between 2019 and 2023?", ["A huge fall in 2020", "Steady recovery every year", "Still below 2019"]], ["Explain", "Why hasn't the box office fully recovered?", ["People got used to streaming", "Ticket prices", "Films go online faster"]], ["Predict", "Will cinemas ever be as busy as in 2019? Why?", ["Big event films still pull crowds", "Cinemas may become special experiences", "Some cinemas will close"]]] },
    hot: { all: ["When did you last go to the cinema?", "What can a cinema give you that streaming can't?", "Should films be in cinemas only for a while before streaming?", "Is watching a film at home just as good?", "What would make you go to the cinema more?"] },
    home: "Think of the last film you saw in a cinema. Be ready to say why you chose the cinema instead of home. Nothing to send.",
    more: [["Do you prefer the cinema or watching at home?", "Why?"], ["What's the best cinema experience you've had?", "Why?"], ["How much does a cinema ticket cost where you live?", "Is it worth it?"], ["Do you watch films on your phone?", "Really?"], ["Which film would you watch again in a cinema?", "Why?"], ["Will cinemas exist in 2050?", "What will they look like?"]],
  },
  "the-trust-gap": {
    main: { title: "People who trust most news most of the time, 2024", unit: "%", rows: [["Finland", 69, "69%"], ["Average of 47 countries", 40, "40%"], ["Greece", 23, "23%"], ["Hungary", 23, "23%"]],
      source: "Reuters Institute, Digital News Report 2024.", note: "About 39% of people say they sometimes or often avoid the news.",
      prompts: [["Describe", "What does the chart show?", ["Finland trusts news three times more than Greece", "The average is under half", "Big differences between countries"]], ["Explain", "Why might trust be so much higher in Finland?", ["Strong public broadcaster", "Media seen as independent", "Media literacy taught in schools"]], ["Predict", "Will trust in news go up or down in the next ten years? Why?", ["AI-made fake content", "People choosing their own bubbles", "Trusted brands may matter more"]]] },
    hot: { all: ["Do you trust the news in your country?", "Is avoiding the news a good idea?", "Who's responsible for fake news: platforms, journalists or readers?", "How do you check if a story is true?", "Should schools teach how to read the news?"] },
    home: "Compare today's checkpoint speech with your first speech in Module 16. Did you sound fair to the other side? Be ready to tell me. Nothing to send.",
    more: [["Which news source do you trust most?", "Why?"], ["Have you ever believed fake news?", "What happened?"], ["Do you avoid the news sometimes?", "Why?"], ["Is the news too negative?", "Always?"], ["How do young people get news today?", "Is it good?"], ["What would make you trust the news more?", "Anything?"]],
  },

  /* ---------- Stage 3 check-in (summarize and respond) ---------- */
  "check-in-3": {
    review: [4, 5], format: "Summarize",
    main: { title: "Talk to Strangers", byline: "An opinion piece written for this lesson",
      text: ["On a crowded train, most of us look at our phones and avoid eye contact. We assume strangers don't want to talk, and that a conversation would be awkward.", "But a well-known study in Chicago in 2014 tested this. Commuters who were asked to talk to the person next to them had a more pleasant journey than those who sat in silence, even though most had predicted the opposite.", "Small conversations with strangers make us feel more connected and less lonely. They cost nothing. So next time you are waiting for a coffee or sitting on a bus, try saying something. The worst that can happen is a short, slightly awkward moment. The best is a story you'll remember."],
      points: ["We avoid talking to strangers", "A 2014 Chicago study found talking made journeys more pleasant", "Small talk makes us feel connected and less lonely", "It costs nothing; try it"],
      agree: ["Small talk makes the day better", "We worry about awkwardness too much", "You can learn surprising things"], disagree: ["Some people want peace and quiet", "It can feel unsafe", "Culture matters: not everywhere welcomes it"] },
    hot: { agree: ["What about people who just want to read on the train?", "Is it the same for a woman travelling alone at night?", "Would this work in every country?"], disagree: ["When did a stranger last make your day better?", "Isn't it a little sad that we all stare at phones?", "What's the worst that could really happen?"], neutral: ["How do you start a conversation with a stranger?", "What would make you change your mind?"] },
    home: "Stage 3 is done. This week, have one short conversation with a stranger in any language, and be ready to tell it as a story with a hook. Nothing to send.",
    more: [["Which Stage 3 lesson did you enjoy most?", "Why?"], ["Is steelmanning harder than debating?", "Why?"], ["Which story from this stage do you remember best?", "Why?"], ["How has your storytelling changed?", "Example?"], ["What would you like to work on in Stage 4?", "Why?"], ["Which phrase from Stage 3 will you keep?", "Where will you use it?"]],
  },
};
