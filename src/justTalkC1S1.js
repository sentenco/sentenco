// Just Talk C1-C2 · Stage 1 (C1, Make your case): Modules 01-06 + check-in 1. Owner-only.
// Shapes (see JustTalkC1Board.jsx):
//   Debate:  main { brief: [[title, fact]], motion, for: [4], against: [4], time }   hot { for: [3], against: [3], neutral: [2] }
//   Dilemma: main { situation, options: [[key, label, [3 reasons]]], twist, time }   hot { <key>: [3], neutral: [2] }
//   Solve:   main { problem, limits: [3], ideas: [5], time }                         hot { all: [5] }
//   Data:    main { title, unit, rows: [[label, value, shown]], source, note, prompts: [[label, question, [ideas]]] }   hot { all: [5] }
//   every lesson: home (easy, nothing to send), more: [[question, follow-up]] x6
// Facts and data are from real sources named on the board.

export const C1_PHRASES_S1 = {
  Technology: [
    ["Make your point", "The way I see it, ...", "Say your view clearly.", "<b>The way I see it,</b> phones and lessons don't mix."],
    ["Make your point", "There's no question that ...", "For something you're sure of.", "<b>There's no question that</b> notifications break concentration."],
    ["Answer the other side", "That may be true, but ...", "Accept a fact, then push back.", "<b>That may be true, but</b> students also need to learn self-control."],
    ["Answer the other side", "I'm not convinced that ...", "Politely doubt their claim.", "<b>I'm not convinced that</b> a ban changes anything."],
    ["Wrap it up", "All things considered, ...", "Before your final view.", "<b>All things considered,</b> a ban makes sense for younger kids."],
    ["Wrap it up", "At the end of the day, ...", "Say what matters most.", "<b>At the end of the day,</b> school is about learning."],
  ],
  Food: [
    ["Imagine it", "If I were in that situation, I'd ...", "Put yourself in the story.", "<b>If I were in that situation, I'd</b> tell them privately."],
    ["Imagine it", "I'd probably end up ...", "What you'd really do, not what you should do.", "<b>I'd probably end up</b> eating it to be polite."],
    ["Weigh it", "On the one hand ..., on the other hand ...", "Show both sides.", "<b>On the one hand</b> it's rude to refuse; <b>on the other hand</b> it's my choice."],
    ["Weigh it", "The tricky part is ...", "Name what makes it hard.", "<b>The tricky part is</b> that they're a friend."],
    ["Decide", "I couldn't bring myself to ...", "Something you just couldn't do.", "<b>I couldn't bring myself to</b> write a fake review."],
    ["Decide", "It's a matter of ...", "Say what it really depends on.", "<b>It's a matter of</b> respect, on both sides."],
  ],
  Work: [
    ["Admit a point", "Admittedly, ...", "Agree with a small part before you push back.", "<b>Admittedly,</b> the trials went well, but they only lasted six months."],
    ["Admit a point", "I take your point, but ...", "Show you heard them, then disagree politely.", "<b>I take your point, but</b> a hospital can't just close on Fridays."],
    ["Be careful with claims", "There's some evidence that ...", "Make a claim without overselling it.", "<b>There's some evidence that</b> rested workers make fewer mistakes."],
    ["Be careful with claims", "It's not as simple as ...", "Show a problem is more complicated.", "<b>It's not as simple as</b> giving everyone Fridays off."],
    ["Push your point", "What it really comes down to is ...", "Bring the debate back to your main idea.", "<b>What it really comes down to is</b> trust between managers and staff."],
    ["Push your point", "The bottom line is ...", "Finish with your strongest point.", "<b>The bottom line is</b> that people work better when they rest."],
  ],
  Cities: [
    ["Start the plan", "The first thing I'd do is ...", "Your opening move.", "<b>The first thing I'd do is</b> make buses free at rush hour."],
    ["Start the plan", "My top priority would be ...", "What matters most.", "<b>My top priority would be</b> safety for cyclists."],
    ["Explain it", "That way, ...", "Show what the step achieves.", "Add bus lanes. <b>That way,</b> buses beat cars."],
    ["Explain it", "It would cost about ..., but ...", "Talk money honestly.", "<b>It would cost about</b> $300,000, <b>but</b> it pays for itself."],
    ["Short and long term", "A quick win would be ...", "Something fast and cheap.", "<b>A quick win would be</b> smarter traffic lights."],
    ["Short and long term", "In the long run, ...", "The bigger picture.", "<b>In the long run,</b> fewer people will need a car."],
  ],
  Health: [
    ["Describe it", "The chart shows ...", "Start with the big picture.", "<b>The chart shows</b> how many steps people take in seven countries."],
    ["Describe it", "... is roughly twice as ... as ...", "Compare two numbers.", "Hong Kong <b>is roughly twice as</b> active <b>as</b> Indonesia."],
    ["Describe it", "... stands out because ...", "Point to the surprising part.", "Japan <b>stands out because</b> it's high despite long working hours."],
    ["Explain it", "One possible reason is ...", "Offer an explanation, carefully.", "<b>One possible reason is</b> public transport."],
    ["Explain it", "I'd guess that ...", "A softer, more personal explanation.", "<b>I'd guess that</b> climate plays a part."],
    ["Predict it", "If this trend continues, ...", "Look ahead.", "<b>If this trend continues,</b> we'll all be sitting more."],
  ],
  Friendship: [
    ["Feelings", "I'd feel torn because ...", "When both choices pull at you.", "<b>I'd feel torn because</b> I love them, but it's not fair."],
    ["Feelings", "The last thing I'd want is ...", "What you're most afraid of.", "<b>The last thing I'd want is</b> to lose the friendship over money."],
    ["Honesty", "I'd want to be honest without ...", "Truth, but kindly.", "<b>I'd want to be honest without</b> embarrassing them."],
    ["Honesty", "To be fair to them, ...", "See their side.", "<b>To be fair to them,</b> they were under a lot of pressure."],
    ["Decide", "I'd find a way to ...", "A creative middle path.", "<b>I'd find a way to</b> be at both, somehow."],
    ["Decide", "In the end, I'd ...", "Your final choice.", "<b>In the end, I'd</b> choose my friend."],
  ],
};

export const C1_S1 = {
  /* ---------- Module 01 · Technology · Debate ---------- */
  "phones-in-schools": {
    main: { brief: [["France", "In 2018, France banned phones for students in primary and middle schools, during lessons and breaks."], ["The Netherlands", "Since January 2024, Dutch secondary schools have kept phones out of classrooms, unless a teacher uses them for the lesson."], ["UNESCO", "A 2023 UNESCO report said phones should only be in classrooms when they clearly help learning."]],
      motion: "Phones should be banned in all schools.", for: ["Students focus better without notifications", "Less cyberbullying during the school day", "More real conversations at break time", "Teachers stop policing phones"], against: ["Phones can be great learning tools", "Parents want to reach their children", "Students need self-control, not rules", "Bans are hard to enforce"], time: 120 },
    hot: { for: ["How would a parent reach their child in an emergency?", "Isn't it better to teach students to use phones well?", "Who checks the phones, and how?"], against: ["Can a 13-year-old really ignore a notification?", "If phones help learning, why do so many teachers want them gone?", "What does a ban take away that students really need?"], neutral: ["Should the rule be the same for 8-year-olds and 17-year-olds?", "What would make you change your mind?"] },
    home: "For one hour of work or study, count how many times you pick up your phone. Nothing to send: just tell me the number next time.",
    more: [["Did your school have rules about phones?", "Did anyone follow them?"], ["When is a phone genuinely useful in a lesson?", "Can you give an example?"], ["How old should children be to get their first phone?", "Why that age?"], ["Do adults use phones in meetings too much?", "Should there be a rule?"], ["Would you send your child to a school with no phones at all?", "What would worry you?"], ["Has a phone ever helped you learn something important?", "What was it?"]],
  },
  "the-screen-time-panic": {
    main: { brief: [["The WHO", "WHO guidelines from 2019 say babies under one should have no screen time, and children aged 2 to 4 no more than one hour a day."], ["The potato study", "A 2019 Oxford study of over 350,000 teenagers found screen use was linked to well-being about as much as eating potatoes."], ["Steve Jobs", "In 2010, Steve Jobs told a journalist that his own children hadn't used the iPad yet."]],
      motion: "We worry far too much about screen time.", for: ["Research often finds only small effects", "Every new technology caused a panic: radio, TV, comics", "What you do on a screen matters more than how long", "Screens connect people too"], against: ["Sleep and attention really suffer", "Apps are designed to keep you scrolling", "Children lose time for play and sport", "Parents often see the changes first"], time: 120 },
    hot: { for: ["If screens are harmless, why are apps designed to keep us scrolling?", "Would you be happy with a 10-year-old on a phone for six hours a day?", "What about sleep?"], against: ["People panicked about TV and comics too. Were they right?", "Isn't it what you do on the screen that matters, not how long?", "Why did the Oxford study compare screens to potatoes?"], neutral: ["Where's the line between enough and too much?", "What would make you change your mind?"] },
    home: "Check your phone's screen-time report for yesterday. Was it more or less than you expected? Nothing to send.",
    more: [["How much screen time do you think you had yesterday?", "Are you surprised?"], ["What's the best thing you've done on a screen this week?", "And the biggest waste of time?"], ["Should parents control their teenagers' screens?", "How?"], ["Is reading on a screen the same as reading a book?", "Which do you prefer?"], ["Do you ever take a break from screens on purpose?", "How does it feel?"], ["What will screens look like in 20 years?", "Will we still worry?"]],
  },
  "the-right-to-disconnect": {
    main: { brief: [["France", "Since 2017, French companies with 50 or more employees must agree rules on when staff can switch off from work messages."], ["Portugal", "A 2021 law in Portugal stops most employers from contacting staff outside working hours, except in emergencies."], ["Australia", "Since August 2024, Australian employees have had the right to ignore unreasonable work contact after hours."]],
      motion: "Bosses should not be allowed to message staff after work.", for: ["People need real rest to do good work", "Burnout costs companies money", "Family time shouldn't depend on the boss's mood", "Clear rules protect everyone"], against: ["Some jobs need quick answers", "Some people like working at night", "Teams across time zones can't follow one clock", "Good culture works better than a law"], time: 120 },
    hot: { for: ["What about a doctor or a pilot?", "What if you prefer to answer emails at 10 p.m.?", "How would a team in three time zones work?"], against: ["Why should a boss control someone's evening?", "If the message can wait, why send it?", "Who decides what an emergency is?"], neutral: ["Is the problem the message, or the pressure to reply?", "What would make you change your mind?"] },
    home: "Tonight, notice the last time you check a work or study message. Nothing to send: just tell me the time next lesson.",
    more: [["Do you answer work messages in the evening?", "Why or why not?"], ["What's a reasonable time to send a work message?", "And to expect an answer?"], ["Have you ever turned off notifications for work?", "What happened?"], ["Is it different for people who run their own business?", "How?"], ["Should holidays be completely offline?", "Could you do it?"], ["What do you do to switch off after work?", "Does it work?"]],
  },

  /* ---------- Module 02 · Food · Dilemma ---------- */
  "the-restaurant-review": {
    main: { situation: "Your close friend opened a small restaurant three months ago. You ate there last week: the food was cold and the service was slow. Today they message you: \"Could you write us an online review? It would really help.\"",
      options: [["a", "Write an honest review", ["Other customers deserve the truth", "Honest feedback helps them improve", "Fake reviews are unfair"]], ["b", "Write a kind review anyway", ["Friends support each other", "One bad night isn't the whole story", "A bad review could sink a new business"]], ["c", "Find a way not to write one", ["Give private feedback instead", "Say you don't write reviews", "Go back and try it again first"]]],
      twist: "Your friend tells you they've put all their savings into the restaurant, and online reviews are their only advertising.", time: 150 },
    hot: { a: ["What if your review is the reason it closes?", "Could you say it to their face first?", "Is one visit enough to judge?"], b: ["What happens when strangers come because of your review?", "Isn't a fake review a kind of lie?", "Would you want a friend to do that for you?"], c: ["Isn't avoiding it just a polite way of saying no?", "What exactly will you tell your friend?", "Is private feedback really enough?"], neutral: ["Does friendship change the rules of honesty?", "What would make you change your answer?"] },
    home: "Read three online reviews of any place you know. Notice which one sounds honest, and why. Nothing to send.",
    more: [["Do you trust online reviews?", "Why or why not?"], ["Have you ever written a bad review?", "What happened?"], ["What makes a restaurant worth going back to?", "Is it the food?"], ["Should businesses be allowed to delete bad reviews?", "Why?"], ["Would you open a restaurant?", "What would it serve?"], ["What's the worst meal you've had out?", "Did you complain?"]],
  },
  "the-dinner-invitation": {
    main: { situation: "You've been vegetarian for ten years. You're meeting your partner's parents for the first time, and their mother has spent all day cooking her famous beef dish. Nobody told her you don't eat meat.",
      options: [["a", "Eat it this once", ["First impressions matter", "One meal won't change your values", "It respects her effort"]], ["b", "Politely say no", ["Your values are part of who you are", "Honesty now avoids problems later", "Most people understand if you're kind"]], ["c", "Eat around it quietly", ["Nobody has to feel awkward", "You can explain later", "The side dishes might be enough"]]],
      twist: "Halfway through dinner, your partner says, \"Oh, didn't I mention? Alex is vegetarian.\" Everyone looks at your plate.", time: 150 },
    hot: { a: ["What if she cooks it again every time you visit?", "Would you expect the same from a guest in your home?", "What would you never eat, even to be polite?"], b: ["Isn't it rude when she spent all day cooking?", "Could this make the whole evening awkward?", "Whose job was it to tell her?"], c: ["What happens when she offers you seconds?", "Isn't hiding it a little dishonest?", "Could you keep doing that for years?"], neutral: ["Who's really responsible here?", "What would make you change your answer?"] },
    home: "Think of a time you ate or did something just to be polite. Be ready to tell me the story in one minute. Nothing to send.",
    more: [["Is it rude to refuse food someone made for you?", "Does it depend on the culture?"], ["What food would you never eat?", "Why?"], ["How should guests tell hosts what they don't eat?", "When?"], ["Have you ever been to a very awkward dinner?", "What happened?"], ["Are food choices private or public?", "Why?"], ["What dish would you cook to impress someone?", "Why that one?"]],
  },
  "the-office-fridge": {
    main: { situation: "For three weeks, someone has been eating the lunch you leave in the office fridge. Yesterday you saw who it was: a friendly new colleague who sits next to you.",
      options: [["a", "Talk to them directly", ["It's clear and fair", "Maybe it's a misunderstanding", "It can save the relationship"]], ["b", "Tell your manager", ["Technically, it's stealing", "You avoid a personal fight", "Managers should know"]], ["c", "Say nothing and change your habits", ["It keeps the peace", "It's only lunch", "No risk of a scene"]]],
      twist: "You find out the colleague is in serious money trouble and often skips meals.", time: 150 },
    hot: { a: ["What will your first sentence be?", "What if they deny it?", "Won't sitting next to them feel awkward afterwards?"], b: ["Isn't that a big step for a sandwich?", "What if they find out it was you?", "Is it fair to go behind their back?"], c: ["Isn't that letting them get away with it?", "What if they do it to other people?", "How long would you put up with it?"], neutral: ["Does the reason someone does something wrong change what you'd do?", "What would make you change your answer?"] },
    home: "Notice one small thing at work or home that annoys you this week. Think how you'd raise it politely. Nothing to send.",
    more: [["What's the most annoying thing a colleague can do?", "Have you seen it?"], ["Do you bring lunch to work or buy it?", "Why?"], ["How do you deal with small conflicts?", "Directly or quietly?"], ["Should offices have strict kitchen rules?", "Who makes them?"], ["Have you ever said something and regretted it at work?", "What happened?"], ["What makes a good colleague?", "Name three things."]],
  },

  /* ---------- Module 03 · Work · Debate ---------- */
  "the-four-day-week": {
    main: { brief: [["The UK trial", "In 2022, 61 UK companies tried a four-day week for six months with no cut in pay. Afterwards, 56 of them decided to keep it."], ["Iceland", "Between 2015 and 2019, about 2,500 workers in Iceland cut their hours without losing pay. In most workplaces, the work got done just as well."], ["Microsoft Japan", "In 2019, Microsoft Japan gave staff every Friday off for one month and reported that sales per employee went up by about 40%."]],
      motion: "Every company should move to a four-day week.", for: ["People are more focused and make fewer mistakes", "Less burnout means fewer sick days", "Companies attract and keep better staff", "Less commuting is better for the planet"], against: ["Hospitals, schools and shops can't just close", "Longer days could mean more stress, not less", "Small businesses may not afford it", "Customers expect service five days a week"], time: 120 },
    hot: { for: ["What would you say to a nurse who can't take Fridays off?", "Wouldn't people just answer work emails on their day off?", "If productivity drops, who pays for it?"], against: ["Then why did 56 of 61 UK companies keep it?", "Isn't a tired worker worse for a company than a missing day?", "Your grandparents probably worked six days a week. Was that better?"], neutral: ["Who should decide: the government or each company?", "What would make you change your mind?"] },
    home: "Watch or listen to any short interview in English (2-3 minutes). Notice where the speaker stresses the key word, or uses point, reason, example. Nothing to send.",
    more: [["What would you do with an extra day off every week?", "Would you really rest?"], ["Is it fair if only some jobs get a four-day week?", "Who would lose out?"], ["Do people in your country work too much?", "Is that changing?"], ["Would you choose more money or more free time?", "Has your answer changed over the years?"], ["What makes a workplace one people never want to leave?", "Have you worked somewhere like that?"], ["In 20 years, how many days a week will people work?", "What will drive that change?"]],
  },
  "is-hustle-culture-over": {
    main: { brief: [["WHO and ILO", "A 2021 study by the WHO and the International Labour Organization linked working 55 or more hours a week to a higher risk of stroke and heart disease."], ["Karoshi", "Japanese has a word for death from overwork: karoshi."], ["70 hours or 55?", "A 2014 Stanford study by economist John Pencavel found that people working 70 hours a week produced about the same as people working 55."]],
      motion: "Working long hours is the only way to get ahead.", for: ["Experience builds faster when you work more", "Competition is tough, especially when you're young", "Many success stories involve years of long days", "Commitment gets noticed"], against: ["After a point, more hours means worse work", "Health problems end careers", "Working smart beats working long", "Burnout makes good people quit"], time: 120 },
    hot: { for: ["Then why did 70 hours produce no more than 55 in the Stanford study?", "Who looks after your health while you hustle?", "Would you want your children to work 70 hours a week?"], against: ["Do you know anyone who got to the top working 40 hours?", "Isn't it different when you're 22 and starting out?", "What about people who love their work?"], neutral: ["Is it hours or effort that really counts?", "What would make you change your mind?"] },
    home: "This week, notice one day when you worked or studied too long. What did you get done in the last hour? Nothing to send.",
    more: [["What's the longest day you've ever worked?", "Was it worth it?"], ["Is 'hustle' a good or bad word to you?", "Why?"], ["Do successful people in your country work long hours?", "Is that the reason?"], ["How do you know when to stop working?", "Do you listen?"], ["Would you take a lower salary for shorter hours?", "How much lower?"], ["What advice would you give a 22-year-old starting their first job?", "Why that?"]],
  },
  "public-salaries": {
    main: { brief: [["Norway", "In Norway, anyone can look up the income and tax of any taxpayer online, though people can see who looked them up."], ["The EU", "An EU pay-transparency law from 2023 must become part of every member country's law by June 2026."], ["Job ads", "Several US states, including Colorado and California, now require job ads to show a pay range."]],
      motion: "Everyone's salary should be public.", for: ["Unfair pay gaps become visible", "It's easier to negotiate a fair salary", "Less guessing and gossip", "Companies have to justify pay"], against: ["Pay is private", "It can create jealousy in teams", "People may quit when they see others earn more", "Pay depends on many private things"], time: 120 },
    hot: { for: ["Would you be happy if your neighbors knew your salary?", "What about two people doing the same job for different pay, for good reasons?", "Won't some people just feel worse about themselves?"], against: ["How can someone know they're paid fairly without it?", "Why are companies so keen to keep pay secret?", "Norway has done it for years. What went wrong there?"], neutral: ["Should it be everyone's exact pay, or just the ranges?", "What would make you change your mind?"] },
    home: "Look at one job ad in English this week. Does it show the pay? Nothing to send: just tell me what you noticed.",
    more: [["Do people in your country talk about their salaries?", "With who?"], ["Have you ever found out a colleague earned more?", "How did you feel?"], ["Should managers earn much more than their teams?", "How much more?"], ["Is it rude to ask someone's salary?", "Always?"], ["What makes a salary fair?", "Who decides?"], ["Would you take a job if the pay wasn't in the ad?", "Why?"]],
  },

  /* ---------- Module 04 · Cities · Solve it ---------- */
  "the-traffic-budget": {
    main: { problem: "Your city has $1 million to cut traffic in the center within one year. Plan how to spend it.", limits: ["$1 million, and not a cent more", "Results within 12 months", "Shops in the center must not lose customers"],
      ideas: ["Free buses at rush hour", "Safe bike lanes on main roads", "Smart traffic lights", "Park-and-ride at the edge of town", "Rewards for working from home one day a week"], time: 240 },
    hot: { all: ["Which part of your plan would people hate most?", "How will you know if it worked?", "What would you cut if the budget dropped to $500,000?", "Why not just build more roads?", "What would shop owners say about your plan?"] },
    home: "On your next trip across town, notice one thing that slows everyone down. Nothing to send: just tell me next time.",
    more: [["How do you usually get around your city?", "Why that way?"], ["What's the worst traffic you've ever been in?", "What caused it?"], ["Should city centers be car-free?", "For everyone?"], ["Would you cycle to work if it were safe?", "What would stop you?"], ["Which city has the best transport you've seen?", "What made it good?"], ["Who should pay for public transport?", "Users or taxes?"]],
  },
  "the-empty-mall": {
    main: { problem: "A huge shopping mall in your town closed last year, and the building is empty. You're on the town council: decide what it becomes.", limits: ["The building can't be knocked down", "It has to pay for itself within five years", "People of all ages should use it"],
      ideas: ["Small flats and housing", "A school, library and sports center", "An indoor market for local producers", "Offices and co-working spaces", "A mix: shops downstairs, homes upstairs"], time: 240 },
    hot: { all: ["Who will pay to change the building?", "What will teenagers do there?", "What if nobody comes?", "Why is your idea better than housing?", "What would you do with the giant parking lot?"] },
    home: "Notice one empty or unused building near you. What could it become? Nothing to send.",
    more: [["Do you still go to shopping malls?", "Why or why not?"], ["What's missing in your town?", "Who would use it?"], ["Should old buildings be saved or replaced?", "Always?"], ["Where do teenagers hang out where you live?", "Is it enough?"], ["Do you shop more online or in person?", "What's the difference?"], ["What would your dream building have inside?", "Who would it be for?"]],
  },
  "ten-minutes-back": {
    main: { problem: "Plan how to give every commuter in your city 10 minutes back a day, within two years.", limits: ["No new metro lines", "Two years at most", "It must work for people who drive and people who don't"],
      ideas: ["Flexible start times for offices and schools", "Bus-only lanes", "More trains at peak times", "Working from home one or two days a week", "Better connections between buses and trains"], time: 240 },
    hot: { all: ["Which commuters would your plan help least?", "How will you measure the 10 minutes?", "What would businesses say about flexible hours?", "What's the cheapest part of your plan?", "If you could pick only one idea, which one and why?"] },
    home: "Time your next commute, door to door. Nothing to send: just tell me the number next lesson.",
    more: [["How long is your commute?", "What do you do on the way?"], ["Would you move closer to work for a shorter commute?", "What would you give up?"], ["Is commuting time wasted time?", "Always?"], ["What's the best invention for commuters?", "Why?"], ["Would you work four longer days to commute less?", "Why?"], ["What would you do with 10 extra minutes a day?", "Really?"]],
  },

  /* ---------- Module 05 · Health · Read the data ---------- */
  "steps-around-the-world": {
    main: { title: "Average steps per day, smartphone users", unit: "steps", rows: [["Hong Kong", 6880, "6,880"], ["China", 6189, "6,189"], ["Japan", 6010, "6,010"], ["UK", 5444, "5,444"], ["USA", 4774, "4,774"], ["Mexico", 4692, "4,692"], ["Indonesia", 3513, "3,513"]],
      source: "Althoff et al., Stanford University, published in Nature, 2017. Data from 717,527 smartphone users in 111 countries.", note: "The world average was about 5,000 steps a day.",
      prompts: [["Describe", "What does the chart show? Which numbers stand out?", ["Hong Kong walks the most, almost double Indonesia", "The world average is about 5,000 steps", "The USA and Mexico are almost the same"]], ["Explain", "Why might people in Hong Kong walk so much more than people in the USA?", ["Dense city and lots of public transport", "Fewer people drive", "Hot weather can make walking harder"]], ["Predict", "Will these numbers go up or down in 10 years? Why?", ["Remote work means less walking to the office", "Fitness trackers may push numbers up", "Cities are getting more walkable"]]] },
    hot: { all: ["Is a smartphone a fair way to count steps?", "Should cities be designed to make people walk more?", "The study found the gap between active and inactive people mattered more than the average. Why might that be?", "How many steps do you think you took yesterday?", "Who's responsible for how much people move: people or governments?"] },
    home: "Check your phone's step count for yesterday. Is it above or below the world average of about 5,000? Nothing to send.",
    more: [["Do you count your steps?", "Does it change what you do?"], ["Where do you walk the most in a normal week?", "Why there?"], ["Is your city good for walking?", "What would make it better?"], ["Do you take the stairs or the lift?", "Always?"], ["Would you walk to work if it took 40 minutes?", "Why?"], ["What's the best walk you've ever done?", "Where was it?"]],
  },
  "sleep-around-the-world": {
    main: { title: "Average sleep per night, sleep-app users", unit: "hours", rows: [["Netherlands", 8.2, "8 h 12 min"], ["UK", 7.95, "just under 8 h"], ["Japan", 7.4, "7 h 24 min"], ["Singapore", 7.4, "7 h 24 min"]],
      source: "Walch, Cochran and Forger, University of Michigan, published in Science Advances, 2016. Data from sleep-app users in 20 countries.", note: "Sleep experts recommend at least 7 hours a night for adults.",
      prompts: [["Describe", "What does the chart show?", ["The Netherlands sleeps about 48 minutes more than Japan", "All four are above 7 hours", "The differences look small but add up"]], ["Explain", "The study found bedtimes, not wake-up times, made the biggest difference. Why might people go to bed later in some countries?", ["Late dinners and social life", "Long working hours", "Phones and TV in the evening"]], ["Predict", "48 minutes a night: how much is that in a year?", ["About 290 hours, or 12 full days", "What could you do with 12 extra days of sleep?", "Will people sleep more or less in the future?"]]] },
    hot: { all: ["Is an app a reliable way to measure sleep?", "Should schools start later so teenagers can sleep more?", "Who sleeps the most in your family, and why?", "Is sleeping less a sign of hard work or bad planning?", "Should employers care how much their staff sleep?"] },
    home: "Tonight, notice what time you actually fall asleep, not just go to bed. Nothing to send.",
    more: [["How many hours do you usually sleep?", "Is it enough?"], ["Are you a morning person or a night person?", "Always?"], ["What keeps you up at night?", "Can you change it?"], ["Do you nap?", "Does it help?"], ["What's your perfect bedtime routine?", "Do you follow it?"], ["Should people sleep in on weekends?", "Or keep the same times?"]],
  },
  "how-long-we-live": {
    main: { title: "World life expectancy at birth", unit: "years", rows: [["1950", 46, "about 46"], ["2000", 67, "about 67"], ["2019", 73, "about 73"], ["2021", 71, "about 71"]],
      source: "United Nations, World Population Prospects 2022 (world average, rounded).", note: "2021 was the first big drop in decades.",
      prompts: [["Describe", "What happened between 1950 and today?", ["Life expectancy rose by about 27 years", "It went up steadily until 2019", "Then it dropped"]], ["Explain", "Why did people live so much longer by 2019? And why the drop in 2021?", ["Vaccines, clean water, better food", "Far fewer babies dying", "COVID-19 caused the dip"]], ["Predict", "Where will the line be in 2050? Why?", ["Probably higher again", "Ageing populations bring new problems", "The gaps between countries are still huge"]]] },
    hot: { all: ["Would you want to live to 100? Why or why not?", "Is a longer life always a better life?", "Who should pay for the care of very old people?", "Why do some countries still have much shorter lives?", "What's one habit that adds years to a life?"] },
    home: "Ask an older person you know what the biggest change in daily life has been since they were young. Nothing to send.",
    more: [["Who's the oldest person you know?", "What's their secret?"], ["What age is 'old' today?", "Has it changed?"], ["Would you like to know how long you'll live?", "Why?"], ["What should people do in retirement?", "Rest or keep working?"], ["How has health care changed in your country?", "For the better?"], ["What would you tell your 80-year-old self?", "Why?"]],
  },

  /* ---------- Module 06 · Friendship · Dilemma ---------- */
  "the-copied-project": {
    main: { situation: "You and your close friend took the same course. You worked hard on your final project; your friend copied large parts of it. They got a higher grade than you.",
      options: [["a", "Tell the teacher", ["It's unfair to everyone else too", "Rules exist for a reason", "Your grade suffered"]], ["b", "Talk to your friend first", ["Give them a chance to fix it", "It protects the friendship", "There may be a story you don't know"]], ["c", "Let it go", ["It's only one grade", "The friendship matters more", "It won't change anything now"]]],
      twist: "Your friend tells you they were about to fail the course, and their scholarship depended on passing.", time: 150 },
    hot: { a: ["What if your friend loses their place because of you?", "Could you still be friends afterwards?", "Would the teacher even believe you?"], b: ["What will you say if they just laugh it off?", "And if they refuse to fix it?", "Isn't talking just a way to avoid the hard choice?"], c: ["What if they do it again, to someone else?", "Doesn't letting it go make it okay?", "How would you feel about it in a year?"], neutral: ["Is cheating ever understandable?", "What would make you change your answer?"] },
    home: "Think of one time someone took credit for your work, or you saw it happen. Be ready to tell it in one minute. Nothing to send.",
    more: [["Did people cheat at your school?", "How?"], ["Is helping a friend with homework cheating?", "Where's the line?"], ["What's worse: cheating or lying about it?", "Why?"], ["Would you report a friend for anything?", "For what?"], ["How do you rebuild trust after a friend lets you down?", "Is it possible?"], ["Does AI make cheating easier or harder?", "How?"]],
  },
  "the-loan": {
    main: { situation: "A good friend asks to borrow $5,000 to start a small business. You have the money in savings, but it's your emergency fund.",
      options: [["a", "Lend the money", ["Friends help when it matters", "You believe in their idea", "You might get it back with thanks"]], ["b", "Say no", ["Money can ruin friendships", "It's your safety net", "That's what banks are for"]], ["c", "Offer something else", ["Lend a smaller amount", "Help with the business plan", "Introduce them to someone who invests"]]],
      twist: "You find out your friend still owes money to another friend from two years ago.", time: 150 },
    hot: { a: ["What happens to the friendship if they can't pay you back?", "Would you write a contract?", "What would you do if you had an emergency next month?"], b: ["How would you say no without hurting them?", "What if the business succeeds without you?", "Would you lend to family?"], c: ["Isn't a smaller loan still a risk?", "Will they see it as a polite no?", "What else could you really offer?"], neutral: ["Should friends ever lend each other money?", "What would make you change your answer?"] },
    home: "Think about your own rule for lending money: who, how much, and when. Be ready to explain it in one minute. Nothing to send.",
    more: [["Have you ever lent money to a friend?", "Did you get it back?"], ["Is it easier to lend to family or friends?", "Why?"], ["Would you invest in a friend's business?", "What kind?"], ["How much should people keep for emergencies?", "Do you?"], ["Is it rude to remind someone they owe you money?", "How would you do it?"], ["What's more valuable: money or time?", "Always?"]],
  },
  "the-clash": {
    main: { situation: "Your best friend's wedding is on Saturday in another city. On Thursday, you're invited to the final interview for your dream job: on the same Saturday, at the same time.",
      options: [["a", "Go to the wedding", ["Some days only happen once", "Your friend will remember", "There will be other jobs"]], ["b", "Go to the interview", ["Your future depends on it", "A real friend would understand", "You can celebrate together later"]], ["c", "Try to move one of them", ["Ask for a video interview", "Ask for another time", "Go to part of the wedding"]]],
      twist: "The company says no other time is possible. Your friend says, \"Of course, do what's best for you,\" but sounds hurt.", time: 150 },
    hot: { a: ["What if this job never comes back?", "Would your friend do the same for you?", "How would you explain it to the company?"], b: ["What will you say to your friend afterwards?", "Would you go to the interview if it were your own wedding day?", "Is a job ever more important than people?"], c: ["What if they both say no?", "Is half a wedding really better than none?", "Who would you ask first?"], neutral: ["Do adults put work before friends too often?", "What would make you change your answer?"] },
    home: "Compare today's checkpoint speech with your first speech in Module 04. What did you do better? Be ready to tell me in one minute. Nothing to send.",
    more: [["Have you ever missed something important for work?", "Do you regret it?"], ["What's the most important event you've been to for a friend?", "Why did you go?"], ["How do you choose between two good things?", "Head or heart?"], ["Is a dream job worth any sacrifice?", "Which ones?"], ["Would you travel far for a friend's wedding?", "How far?"], ["What would your best friend say about this lesson?", "Really?"]],
  },

  /* ---------- Stage 1 check-in ---------- */
  "check-in-1": {
    review: [0, 1],
    main: { brief: [], motion: "Technology has made us less patient.", for: ["We expect instant answers and delivery", "Attention spans feel shorter", "Waiting in a line now feels unbearable", "Endless scrolling trains us to skip"], against: ["We're patient with long series and podcasts", "Technology saves time for things we care about", "Every generation says the next one is impatient", "People still wait years for things that matter"], time: 120 },
    hot: { for: ["Then why do people watch three-hour films and ten-season series?", "Weren't people impatient before phones too?", "What have you waited a long time for lately?"], against: ["When did you last wait for something without picking up your phone?", "Why do we skip a song after ten seconds?", "Would you wait a week for a letter today?"], neutral: ["Is impatience always a bad thing?", "What would make you change your mind?"] },
    home: "Stage 1 is done. This week, listen to one English speech or talk, and notice point, reason, example and signposting. Nothing to send.",
    more: [["Which Stage 1 lesson did you enjoy most?", "Why?"], ["Which trick feels most natural now?", "And which is hardest?"], ["What topic would you like to debate again?", "Which side?"], ["Has your speaking changed in this stage?", "How?"], ["What do you want to work on in Stage 2?", "Why?"], ["What's one phrase you'll keep using?", "Where will you use it?"]],
  },
};
