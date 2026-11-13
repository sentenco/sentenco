// Just Talk C1-C2 · Stage 2 (C1, Weigh it up): Modules 07-12 + check-in 2. Owner-only.
// Same shapes as justTalkC1S1.js, plus:
//   Summarize: main { title, byline, text: [paragraphs], points: [key points], agree: [3], disagree: [3] }   hot { agree: [3], disagree: [3], neutral: [2] }
// Summarize texts are opinion pieces written for these lessons. Facts and data are from real sources named on the board.

export const C1_PHRASES_S2 = {
  Education: [
    ["Admit a point", "Granted, ...", "Accept something the other side says.", "<b>Granted,</b> a degree still opens some doors."],
    ["Admit a point", "That's a fair point; however, ...", "Polite, then firm.", "<b>That's a fair point; however,</b> the debt can last decades."],
    ["Push back", "Even so, ...", "Your point still stands.", "<b>Even so,</b> I wouldn't pay that much for it."],
    ["Push back", "It depends on ...", "Show it isn't the same for everyone.", "<b>It depends on</b> what you want to study."],
    ["Evidence", "The research points to ...", "Lean on what studies show.", "<b>The research points to</b> homework helping older students more."],
    ["Conclude", "Ultimately, ...", "Your final position.", "<b>Ultimately,</b> learning matters more than the grade."],
  ],
  Money: [
    ["Imagine it", "If it were me, I'd ...", "Your honest first reaction.", "<b>If it were me, I'd</b> take it to the police."],
    ["Imagine it", "I'd be tempted to ..., but ...", "Admit the temptation.", "<b>I'd be tempted to</b> keep it, <b>but</b> I couldn't sleep."],
    ["Weigh it", "Morally, ...", "What's right.", "<b>Morally,</b> it isn't my money."],
    ["Weigh it", "Practically speaking, ...", "What's realistic.", "<b>Practically speaking,</b> nobody would ever know."],
    ["Decide", "I'd hate to ...", "What you'd regret.", "<b>I'd hate to</b> be the person who lost it."],
    ["Decide", "Either way, ...", "Whatever happens.", "<b>Either way,</b> I'd want to sleep at night."],
  ],
  Travel: [
    ["Report it", "The writer argues that ...", "Sum up the main idea.", "<b>The writer argues that</b> bucket lists turn travel into a checklist."],
    ["Report it", "According to the text, ...", "Give a detail from the text.", "<b>According to the text,</b> rents have risen so much that locals leave."],
    ["Report it", "The main point is that ...", "Say it in one sentence.", "<b>The main point is that</b> the journey can be part of the holiday."],
    ["Respond", "I partly agree with ...", "Agree with some of it.", "<b>I partly agree with</b> the idea of slower travel."],
    ["Respond", "Where I disagree is ...", "Point to your disagreement.", "<b>Where I disagree is</b> the idea that famous places aren't worth it."],
    ["Respond", "The text overlooks ...", "Say what the writer forgot.", "<b>The text overlooks</b> people with only a week of holiday."],
  ],
  Environment: [
    ["Cause and effect", "This leads to ...", "Show the next link in the chain.", "Cheap flights. <b>This leads to</b> more people flying."],
    ["Cause and effect", "As a result, ...", "The outcome.", "<b>As a result,</b> emissions keep going up."],
    ["Cause and effect", "The knock-on effect is ...", "A further result.", "<b>The knock-on effect is</b> higher prices for everyone."],
    ["Warn", "Unless we ..., ...", "A condition.", "<b>Unless we</b> change our habits, nothing will improve."],
    ["Look ahead", "In the long term, this means ...", "Future consequences.", "<b>In the long term, this means</b> fewer, better clothes."],
    ["Conclude", "That's precisely why ...", "Tie it back to your argument.", "<b>That's precisely why</b> a limit makes sense."],
  ],
  "Social media": [
    ["Feelings", "I'd feel uncomfortable if ...", "Name what bothers you.", "<b>I'd feel uncomfortable if</b> my boss saw that photo."],
    ["Feelings", "There's a risk that ...", "Point to a danger.", "<b>There's a risk that</b> followers stop trusting you."],
    ["Act", "The way I'd handle it is ...", "Your approach.", "<b>The way I'd handle it is</b> to message my friend privately."],
    ["Act", "To protect ..., I'd ...", "Who or what you'd protect.", "<b>To protect</b> my followers, <b>I'd</b> say no."],
    ["Limits", "I'd draw the line at ...", "Where you'd stop.", "<b>I'd draw the line at</b> hiding that it's an ad."],
    ["Choose", "I'd rather ... than ...", "Compare two options.", "<b>I'd rather</b> lose the money <b>than</b> lie."],
  ],
  Science: [
    ["Describe it", "The figures suggest ...", "What the numbers seem to say.", "<b>The figures suggest</b> growth is slowing down."],
    ["Describe it", "There's been a sharp rise in ...", "A fast increase.", "<b>There's been a sharp rise in</b> the number of people online."],
    ["Describe it", "Compared with ..., ...", "Set two figures side by side.", "<b>Compared with</b> NASA, ESA spends about a third."],
    ["Explain it", "This could be explained by ...", "A possible cause.", "<b>This could be explained by</b> better health care."],
    ["Explain it", "It's likely that ...", "A confident guess.", "<b>It's likely that</b> cost keeps rural areas offline."],
    ["Predict it", "By ..., we could see ...", "A forecast with a date.", "<b>By</b> 2040, <b>we could see</b> almost everyone online."],
  ],
};

export const C1_S2 = {
  /* ---------- Module 07 · Education · Debate ---------- */
  "is-university-worth-it": {
    main: { brief: [["US student debt", "Americans owe over $1.6 trillion in student loans, according to the Federal Reserve."], ["Germany", "Public universities in Germany charge no tuition fees for most students, including students from abroad."], ["Employers", "Several large employers, including Google and IBM, have dropped degree requirements for many jobs."]],
      motion: "University is no longer worth the cost.", for: ["The debt can follow you for decades", "Many skills can be learned online", "Employers care more about skills", "Apprenticeships pay while you learn"], against: ["Graduates still earn more on average", "Some careers need a degree", "University builds networks and independence", "It's free or cheap in many countries"], time: 120 },
    hot: { for: ["Would you want a doctor without a degree?", "Then why do graduates still earn more on average?", "What about countries where university is free?"], against: ["Is a $100,000 debt worth it for every subject?", "Why are Google and IBM dropping degree requirements?", "What did you learn at university that you couldn't learn elsewhere?"], neutral: ["Who should pay for university: students or taxpayers?", "What would make you change your mind?"] },
    home: "Ask someone you know if their degree was worth it, and why. Be ready to report what they said in one minute. Nothing to send.",
    more: [["Did you go to university, or do you plan to?", "Why?"], ["What was the most useful thing you studied?", "Do you still use it?"], ["Should university be free?", "For everyone?"], ["Is it better to study what you love or what pays?", "Why?"], ["What do employers in your country look for?", "Is a degree enough?"], ["Would you study again now?", "What?"]],
  },
  "homework": {
    main: { brief: [["Finland", "Finnish students usually get relatively little homework, and Finland has often scored well in international tests."], ["The research", "A 2006 review led by Harris Cooper at Duke University found homework helps older students more than young children."], ["A real ban", "In 2017, schools in Marion County, Florida, replaced homework in primary school with 20 minutes of reading a night."]],
      motion: "Homework should be banned.", for: ["Children need time to play and rest", "It causes stress and family fights", "Not every home is a good place to study", "Research shows little benefit for young children"], against: ["Practice builds skills", "It teaches independence and planning", "Older students benefit more", "Parents see what children are learning"], time: 120 },
    hot: { for: ["How would older students prepare for big exams?", "Isn't practice at home how you get good at anything?", "What about reading: is that homework too?"], against: ["Why do Finnish students do well with little homework?", "Who helps children whose parents work late?", "How much homework is too much?"], neutral: ["Should the rule be the same for 7-year-olds and 17-year-olds?", "What would make you change your mind?"] },
    home: "Remember the homework you hated most at school. Be ready to describe it in one minute: what, why, and did it help? Nothing to send.",
    more: [["How much homework did you get at school?", "Did you do it?"], ["What's the most useful homework you ever had?", "Why?"], ["Should parents help with homework?", "How much?"], ["Is homework fair to students without a quiet place to study?", "What could schools do?"], ["Do adults have homework too?", "What kind?"], ["What would you replace homework with?", "Why?"]],
  },
  "life-without-grades": {
    main: { brief: [["Harvard", "A 2023 Harvard report found that about 79% of grades given in 2020-21 were in the A range."], ["Brown University", "At Brown University in the US, students can take any course on a pass or no-credit basis instead of letter grades."], ["Montessori", "Montessori schools usually don't give traditional grades; teachers write about each child's progress instead."]],
      motion: "Schools should stop giving grades.", for: ["Students learn for the subject, not the score", "Grades cause stress and cheating", "When almost everyone gets an A, grades say little", "Written feedback is more useful"], against: ["Grades show clearly where you stand", "Universities and employers need a way to compare", "Some students need the pressure", "Without grades, effort may drop"], time: 120 },
    hot: { for: ["How would a university choose between 5,000 applicants?", "Wouldn't some students just stop working?", "How would you know you're improving?"], against: ["What does an A mean if 79% of grades are As?", "Do you remember your grades or what you learned?", "Has a bad grade ever made you love a subject less?"], neutral: ["Should grades start later, say at 12?", "What would make you change your mind?"] },
    home: "Think of the best feedback you ever got from a teacher or boss, a sentence, not a grade. Be ready to share it. Nothing to send.",
    more: [["What's the best grade you ever got?", "Was it deserved?"], ["Did grades motivate you at school?", "Why or why not?"], ["Are grades fair?", "For everyone?"], ["What should replace grades?", "Who would write it?"], ["Do you grade things in your life, like films or restaurants?", "Why?"], ["How do you know you've learned something well?", "Without a test?"]],
  },

  /* ---------- Module 08 · Money · Dilemma ---------- */
  "the-envelope": {
    main: { situation: "Walking home, you find an envelope on the pavement with $2,000 in cash inside. There's no name, no address, nothing else.",
      options: [["a", "Take it to the police", ["It's the right thing to do", "The owner might go there", "You stay out of trouble"]], ["b", "Keep it", ["Nobody could ever find the owner", "Finders keepers", "The police may not even look"]], ["c", "Try to find the owner yourself", ["Put up signs nearby", "Ask in local shops", "Post in a local online group"]]],
      twist: "The next day, you see a handwritten sign on a lamppost: \"Lost: envelope with my rent money. Please call.\" There's a phone number.", time: 150 },
    hot: { a: ["What if nobody claims it and the police keep it?", "Would you do the same for $20?", "How long would you wait to hear back?"], b: ["What if it was someone's rent money?", "Would you tell anyone?", "Where's the line: $20, $200, $2,000?"], c: ["How would you check that someone is the real owner?", "What if three people call?", "How long would you keep trying?"], neutral: ["Does the amount change what's right?", "What would make you change your answer?"] },
    home: "Notice one small honest or dishonest act around you this week, in real life or in the news. Be ready to tell it in one minute. Nothing to send.",
    more: [["Have you ever found money or something valuable?", "What did you do?"], ["Have you ever lost something important?", "Did you get it back?"], ["Is it stealing to keep money you find?", "Always?"], ["Do people in your country hand in lost things?", "Why?"], ["What would you do with $2,000 right now?", "Really?"], ["Is honesty easier when someone is watching?", "Why?"]],
  },
  "the-wrong-price": {
    main: { situation: "At the checkout of an electronics shop, a $900 laptop scans at $90. The cashier doesn't notice.",
      options: [["a", "Point out the mistake", ["It's clearly an error", "It's not your money", "The cashier could get in trouble"]], ["b", "Pay and say nothing", ["The shop made the mistake", "Big chains can afford it", "It's their job to check"]], ["c", "Pay, then decide later", ["Think about it calmly at home", "You could go back tomorrow", "No awkward moment at the till"]]],
      twist: "You find out it's not a big chain: it's a small family shop that has been struggling all year.", time: 150 },
    hot: { a: ["Would you do the same if it were the other way round and you paid $900 for a $90 laptop?", "What if the shop never notices anyway?", "Would you expect a reward?"], b: ["Isn't that the same as taking $810?", "Would you tell your friends?", "What if the cashier has to pay for it?"], c: ["Will you really go back tomorrow?", "Isn't 'later' just a way to keep it?", "How would you explain it when you return?"], neutral: ["Is a mistake in your favor different from stealing?", "What would make you change your answer?"] },
    home: "Next time you pay for something, check the receipt. Was anything wrong, in your favor or against you? Nothing to send.",
    more: [["Have you ever been undercharged?", "What did you do?"], ["Have you ever been overcharged?", "Did you complain?"], ["Do you check your receipts?", "Always?"], ["Is it different with a big company?", "Why?"], ["What's the best bargain you ever got?", "Was it fair?"], ["Do you like shopping in small shops or big ones?", "Why?"]],
  },
  "passion-or-pay": {
    main: { situation: "You're offered your dream job, doing work you'd love, but for half your current salary. You could pay your bills on it, but only just.",
      options: [["a", "Take the dream job", ["Life is too short for a job you don't love", "Passion often leads to success", "Money isn't everything"]], ["b", "Stay with the higher salary", ["Security matters", "You can enjoy life outside work", "Dreams can stay hobbies"]], ["c", "Try to do both", ["Keep the job and start the dream on the side", "Ask for part-time at first", "Save money, then switch"]]],
      twist: "That evening, your partner tells you they're expecting a baby.", time: 150 },
    hot: { a: ["What happens if your car breaks down next month?", "Will you still love it when money is tight?", "Who else does your choice affect?"], b: ["Would you regret it in ten years?", "Can a job you don't love make you happy?", "What would you tell your children to do?"], c: ["Do you really have the energy for both?", "How long before you'd have to choose?", "Isn't 'both' sometimes 'neither'?"], neutral: ["What makes a job a dream job?", "What would make you change your answer?"] },
    home: "Ask one person: would they take half their salary for a job they love? Be ready to report their answer in one minute. Nothing to send.",
    more: [["What's your dream job?", "Why haven't you done it yet?"], ["How much does money matter in choosing a job?", "Has that changed?"], ["Do you know anyone who followed their passion?", "How did it go?"], ["Is it possible to love any job?", "How?"], ["What would you do if money didn't matter?", "Really?"], ["What advice did your parents give you about work?", "Was it good?"]],
  },

  /* ---------- Module 09 · Travel · Summarize and respond ---------- */
  "against-bucket-lists": {
    main: { title: "The Bucket List Is Ruining Travel", byline: "An opinion piece written for this lesson",
      text: ["Every year, millions of us fly across the world to stand in the same spot, take the same photo and tick the same box. The \"100 places to see before you die\" lists were meant to inspire us. Instead, they have turned travel into a checklist.", "We queue for an hour to see a famous painting for thirty seconds, then rush to the next attraction. Meanwhile, the small café round the corner, the conversation with a local, the wrong turn that leads somewhere beautiful: these are the moments people remember years later, and none of them are on any list.", "Travel should change how we see the world, not prove that we have seen it. Next time, leave the list at home. Pick one place, stay longer, and let yourself get a little lost."],
      points: ["Bucket lists turn travel into a checklist", "Famous sights mean queues and short visits", "The best moments are unplanned", "Stay longer in fewer places"],
      agree: ["Unplanned moments make the best memories", "Crowds ruin famous places", "Slower trips are calmer and often cheaper"], disagree: ["Some places really are worth seeing once", "Lists help people with little time", "You can do both: famous sights and wandering"] },
    hot: { agree: ["Would you really skip the Eiffel Tower on your first trip to Paris?", "Isn't 'getting lost' a luxury for people with lots of time?", "What's wrong with a photo to remember a place?"], disagree: ["When did you last enjoy a place more because it was famous?", "Isn't queueing for an hour a waste of a holiday?", "What do you remember most from your last trip: the sights or the people?"], neutral: ["What's the best thing you did on a trip that wasn't planned?", "What would make you change your mind?"] },
    home: "Read any short travel article in English. Be ready to sum it up in two sentences, like today. Nothing to send.",
    more: [["Do you have a bucket list?", "What's on it?"], ["What's the most famous place you've visited?", "Was it worth it?"], ["Do you plan trips carefully or go with the flow?", "Why?"], ["What's a place you'd love to stay in for a month?", "Why there?"], ["Do you take a lot of photos when you travel?", "Do you look at them later?"], ["What makes a trip unforgettable?", "Give an example."]],
  },
  "too-many-tourists": {
    main: { title: "A Letter From a Crowded City", byline: "An opinion piece written for this lesson",
      text: ["I was born in this city, and I love it. But I no longer recognize my own street. The bakery where I bought bread for twenty years is now a souvenir shop. Most of the flats in my building are short-term rentals, so my neighbors change every three days, and rents have risen so much that my children cannot afford to live here.", "In summer, cruise ships bring thousands of visitors at once, and the old town becomes a moving crowd. I understand that tourism brings jobs and money. I do not want to close the gates. But a city is not a theme park. It needs people who live in it all year.", "Please visit, but visit gently: come out of season, stay longer, spend your money with local people, and remember that someone calls this place home."],
      points: ["Tourism has changed the writer's neighborhood", "Short-term rentals push rents up and locals out", "Tourism brings jobs, so the writer doesn't want to stop it", "Visit gently: out of season, longer, spending locally"],
      agree: ["Locals need homes they can afford", "Cities need limits on short-term rentals", "Quieter tourism is better for visitors too"], disagree: ["Tourism pays many people's wages", "Cities have always changed", "Visitors' money keeps many shops open"] },
    hot: { agree: ["Should cities limit how many tourists can come?", "Have you ever stayed in a short-term rental yourself?", "Who loses their job if tourism shrinks?"], disagree: ["Would you want strangers in your building every three days?", "What happens to a city when nobody lives in the center?", "Is the money worth losing a neighborhood?"], neutral: ["What's a city you'd love to visit, and when would you go?", "What would make you change your mind?"] },
    home: "Think of one place in your country that has too many or too few tourists. Be ready to explain why in one minute. Nothing to send.",
    more: [["Is your city popular with tourists?", "Do locals like it?"], ["Would you rent your home to tourists?", "Why?"], ["What's the most crowded place you've visited?", "How did it feel?"], ["Should tourists pay a special tax?", "How much?"], ["What makes a good tourist?", "And a bad one?"], ["Would you live in a city full of tourists?", "Why?"]],
  },
  "slow-travel": {
    main: { title: "Take the Train", byline: "An opinion piece written for this lesson",
      text: ["Last summer I travelled from London to Rome by train. It took two days instead of two and a half hours. My friends thought I was mad. But I watched the Alps go past my window, ate dinner in Paris and met a retired teacher who told me the history of every town we passed. When I arrived, I felt I had travelled, not just moved.", "Flying is fast, but we pay for that speed: with airport stress, with the climate, and with the feeling that the world is just a series of departure lounges.", "Trains are not always cheap, and they are not possible everywhere. But for many trips, the train is a real choice. The journey can be part of the holiday, not just the price we pay to get there."],
      points: ["The writer took two days to go from London to Rome by train", "The journey itself became part of the trip", "Flying costs us stress and harms the climate", "Trains aren't always possible, but often they are a real choice"],
      agree: ["You see the places in between", "Less stress than airports", "Better for the climate"], disagree: ["Most people have few holiday days", "Trains can cost more than flights", "You can't take a train across an ocean"] },
    hot: { agree: ["Would you spend two days of a one-week holiday on a train?", "What if the train costs three times more than the flight?", "How would you get from your country to Japan?"], disagree: ["Do you actually enjoy airports?", "Shouldn't people who fly pay more for the pollution?", "What did you see on your last flight?"], neutral: ["What's the most beautiful journey you've ever taken?", "What would make you change your mind?"] },
    home: "Compare your first speech in Module 07 with today's checkpoint. What changed? Be ready to tell me in one minute. Nothing to send.",
    more: [["What's your favorite way to travel?", "Why?"], ["What's the longest journey you've taken?", "How did you spend the time?"], ["Do you like flying?", "What's the worst part?"], ["Would you choose a holiday you can reach by train?", "Where?"], ["Is the journey part of the holiday for you?", "Always?"], ["What would make you fly less?", "Anything?"]],
  },

  /* ---------- Module 10 · Environment · Debate ---------- */
  "a-flight-limit": {
    main: { brief: [["Aviation's share", "Flying produces about 2.5% of the world's CO2 emissions, according to Our World in Data."], ["France", "Since 2023, France has banned some short domestic flights where a train can do the trip in under two and a half hours."], ["Frequent flyers", "A 2020 study found that about 1% of the world's people cause around half of the emissions from passenger flights."]],
      motion: "Every person should have a yearly limit on flights.", for: ["A small group causes most of the damage", "It's fair: everyone gets the same allowance", "It pushes people toward trains", "Voluntary change is too slow"], against: ["It punishes families living far apart", "Business travel can't always be replaced", "Cleaner planes are the real answer", "It would be almost impossible to enforce"], time: 120 },
    hot: { for: ["What about people whose family lives on another continent?", "Who decides the limit, and how many flights?", "Wouldn't rich people just buy extra flights?"], against: ["Is it fair that 1% of people cause half the emissions?", "If not a limit, then what?", "How many flights did you take last year?"], neutral: ["Should frequent flyers pay more for each extra flight?", "What would make you change your mind?"] },
    home: "Count the flights you took in the last two years. Was each one really necessary? Nothing to send.",
    more: [["How often do you fly?", "For what?"], ["Have you ever chosen not to fly?", "Why?"], ["Should flights be more expensive?", "By how much?"], ["Would you take a 10-hour train instead of a 2-hour flight?", "Why?"], ["What's the best trip you've taken without flying?", "Where?"], ["Will planes be clean in 20 years?", "What will change?"]],
  },
  "warning-labels-on-meat": {
    main: { brief: [["The WHO", "In 2015, the World Health Organization's cancer agency classified processed meat, like bacon and ham, as a cause of cancer."], ["Food emissions", "A 2021 study in Nature Food found that the world's food system produces about a third of human greenhouse gas emissions."], ["Haarlem", "The Dutch city of Haarlem decided to ban most meat advertising in public spaces from 2024."]],
      motion: "Meat should carry health and climate warnings.", for: ["People have a right to know", "It worked for cigarettes", "It could cut emissions without a ban", "Processed meat really is linked to cancer"], against: ["Meat isn't the same as tobacco", "Labels insult people's intelligence", "It hurts farmers", "Many foods have risks; where do labels stop?"], time: 120 },
    hot: { for: ["Should sugar and alcohol get labels too?", "Do labels actually change what people buy?", "Isn't a steak once a week fine?"], against: ["Didn't warnings help cut smoking?", "If processed meat causes cancer, why hide it?", "What's wrong with people knowing more?"], neutral: ["Who should decide what goes on food labels?", "What would make you change your mind?"] },
    home: "Look at the label on one thing you eat this week. What does it tell you, and what doesn't it? Nothing to send.",
    more: [["How often do you eat meat?", "Has that changed?"], ["Would a warning label change what you buy?", "Why?"], ["Do you read food labels?", "What do you look for?"], ["Could you go vegetarian for a month?", "What would be hardest?"], ["Should schools serve meat?", "Every day?"], ["What's a traditional dish from your country?", "Is it healthy?"]],
  },
  "fast-fashion": {
    main: { brief: [["France", "In 2024, France's lower house voted to fine ultra-fast-fashion brands and ban their advertising."], ["Emissions", "The UN Environment Programme estimates the fashion industry produces between 2% and 8% of global greenhouse gas emissions."], ["Worn less", "A 2017 Ellen MacArthur Foundation report found clothes were worn about 36% fewer times than 15 years earlier."]],
      motion: "Clothes should cost more so that we buy less.", for: ["Cheap clothes are made to be thrown away", "Higher prices would mean better quality", "Workers could be paid fairly", "Less waste and fewer emissions"], against: ["Poor families need cheap clothes", "People should be free to choose", "Second-hand shops already offer an option", "Prices alone won't change habits"], time: 120 },
    hot: { for: ["What about families who can't afford expensive clothes?", "Would you pay double for a T-shirt?", "Couldn't people just buy second-hand?"], against: ["Why are clothes worn 36% fewer times than before?", "Who really pays for a $5 T-shirt?", "How many clothes do you own that you never wear?"], neutral: ["Should brands have to take back old clothes?", "What would make you change your mind?"] },
    home: "Open your wardrobe and count the clothes you haven't worn in a year. Nothing to send: just tell me the number.",
    more: [["Where do you usually buy clothes?", "Why there?"], ["Do you buy second-hand?", "Why or why not?"], ["What's the oldest piece of clothing you still wear?", "Why do you keep it?"], ["Do you follow fashion?", "How closely?"], ["Would you rent clothes for special occasions?", "Have you?"], ["What happens to your old clothes?", "Where do they go?"]],
  },

  /* ---------- Module 11 · Social media · Dilemma ---------- */
  "the-unflattering-photo": {
    main: { situation: "A friend posts a photo from last weekend's party. You look terrible in it, but it already has 300 likes and lots of friendly comments.",
      options: [["a", "Ask them to take it down", ["It's your face and your choice", "You'd do the same for them", "It could affect how others see you"]], ["b", "Laugh it off and leave it", ["It's only a photo", "Everyone looks bad sometimes", "Making a fuss draws more attention"]], ["c", "Untag yourself quietly", ["Nobody gets upset", "Fewer people see it", "You keep the peace"]]],
      twist: "You notice your new manager follows your friend and has just liked the photo.", time: 150 },
    hot: { a: ["What if your friend loves the photo?", "Would you ask the same about a group photo where they look great?", "Isn't it a bit late with 300 likes?"], b: ["Would you still laugh if it were for a job interview?", "Where's your limit?", "What if someone shares it further?"], c: ["Isn't that avoiding the conversation?", "Does untagging really change anything?", "Would your friend notice?"], neutral: ["Should people ask before posting photos of others?", "What would make you change your answer?"] },
    home: "Look at the last photo you posted or shared of another person. Did you ask them first? Nothing to send.",
    more: [["Do you ask before posting photos of friends?", "Always?"], ["Have you ever asked someone to delete a photo?", "What happened?"], ["How many photos do you take in a week?", "Why so many or few?"], ["Who should control photos of children online?", "Why?"], ["Do you look at old photos of yourself?", "How do they make you feel?"], ["What's the best photo of you ever taken?", "Why?"]],
  },
  "the-paid-post": {
    main: { situation: "You have 20,000 followers. A skincare brand offers you $2,000 to post that you love their cream. You tried it: it's average, and it made your skin red.",
      options: [["a", "Say no", ["Your followers trust you", "Your reputation is worth more", "It might harm someone's skin"]], ["b", "Take the money and post", ["Everyone knows posts are ads", "$2,000 is a lot", "Other people might like the cream"]], ["c", "Post an honest review, paid", ["Be clear it's an ad", "Say what you really think", "Let the brand decide"]]],
      twist: "The brand offers double if you don't mention that it's an ad.", time: 150 },
    hot: { a: ["Can you afford to say no to $2,000?", "What if all your rivals say yes?", "Would you say no to a product you liked?"], b: ["What will you say when followers' skin goes red?", "How long will people trust you?", "Isn't that just lying for money?"], c: ["Will the brand even accept an honest review?", "What if the honest review is bad?", "Would followers believe a paid review?"], neutral: ["Should hidden ads be illegal everywhere?", "What would make you change your answer?"] },
    home: "Next time you scroll social media, count the posts that are really ads. How many say so clearly? Nothing to send.",
    more: [["Do you follow any influencers?", "Do you trust them?"], ["Have you ever bought something because of a post?", "Was it good?"], ["Is influencing a real job?", "Why?"], ["Would you like to be an influencer?", "About what?"], ["How can you tell when a post is an ad?", "Always?"], ["Who's responsible when an influencer lies?", "The brand or the person?"]],
  },
  "the-first-account": {
    main: { situation: "Your 12-year-old niece begs you to help her set up a social media account. All her friends have one, and her parents told her to ask you. Most big apps say users must be at least 13.",
      options: [["a", "Help her set it up", ["She'll do it anyway", "Better with an adult's help", "Being left out hurts too"]], ["b", "Say no until she's 13", ["The rules exist for a reason", "She isn't ready", "One more year won't hurt"]], ["c", "Make a deal with rules", ["Private account only", "Time limits", "You check in regularly"]]],
      twist: "She tells you she already has a secret account, and she's been talking to people she doesn't know.", time: 150 },
    hot: { a: ["Isn't breaking the age rule teaching her rules don't matter?", "What will you do if she sees something upsetting?", "Should her parents decide, not you?"], b: ["What if she just makes a secret account?", "Will she be left out at school?", "What's really different at 13?"], c: ["Who checks the rules are kept?", "What happens if she breaks the deal?", "Is a private account really safe?"], neutral: ["What's the right age for social media?", "What would make you change your answer?"] },
    home: "Ask a parent you know what age their children got their first phone or account, and why. Be ready to report. Nothing to send.",
    more: [["When did you first use social media?", "Too early?"], ["What would you teach a child about the internet?", "First?"], ["Should schools teach social media skills?", "What exactly?"], ["Is social media worse for teenagers than adults?", "Why?"], ["What's the best thing social media gave you?", "And the worst?"], ["Should parents read their children's messages?", "Until what age?"]],
  },

  /* ---------- Module 12 · Science · Read the data ---------- */
  "eight-billion-people": {
    main: { title: "Years it took the world to add each billion people", unit: "years", rows: [["1 → 2 billion", 123, "123 years (1804-1927)"], ["2 → 3 billion", 33, "33 years (1927-1960)"], ["3 → 4 billion", 14, "14 years (1960-1974)"], ["4 → 5 billion", 13, "13 years (1974-1987)"], ["5 → 6 billion", 12, "12 years (1987-1999)"], ["6 → 7 billion", 12, "12 years (1999-2011)"], ["7 → 8 billion", 11, "11 years (2011-2022)"]],
      source: "United Nations, Department of Economic and Social Affairs, Population Division (milestone estimates).", note: "The UN projects 9 billion around 2037.",
      prompts: [["Describe", "What does the chart show? What's the biggest change?", ["It took 123 years to add the second billion", "Since 1960, a billion every 11 to 14 years", "The speed has stayed similar for 60 years"]], ["Explain", "Why did the world's population grow so much faster after 1927?", ["Better medicine and vaccines", "Cleaner water and more food", "Fewer children dying young"]], ["Predict", "The UN expects 9 billion around 2037. Will growth keep going, or slow down? Why?", ["Families are getting smaller", "People are living longer", "Some countries are already shrinking"]]] },
    hot: { all: ["Is a bigger world population a problem or an opportunity?", "Why are some countries now worried about too few babies?", "Should governments pay people to have children?", "Would you rather live in a world of 8 billion or 2 billion?", "What's the biggest change you'd expect at 10 billion?"] },
    home: "Look up the population of your country and your city. Be ready to say how they compare with 50 years ago. Nothing to send.",
    more: [["How big was your family growing up?", "And today?"], ["Is your city getting bigger or smaller?", "Why?"], ["How many children is the ideal family?", "Why?"], ["Is your country young or old?", "What does that mean for the future?"], ["Where would you like to live: a crowded city or an empty place?", "Why?"], ["What will your town look like in 2050?", "Better or worse?"]],
  },
  "the-world-online": {
    main: { title: "People using the internet in 2024", unit: "%", rows: [["High-income countries", 93, "93%"], ["People in cities", 83, "83%"], ["Men", 70, "70%"], ["Whole world", 68, "68%"], ["Women", 65, "65%"], ["People in rural areas", 48, "48%"], ["Low-income countries", 27, "27%"]],
      source: "International Telecommunication Union (ITU), Facts and Figures 2024.", note: "About 5.5 billion people were online in 2024, and about 2.6 billion were not.",
      prompts: [["Describe", "What does the chart show? Which gaps are the biggest?", ["High-income countries are almost all online", "Low-income countries are at 27%", "Cities are far ahead of the countryside"]], ["Explain", "Why are rural areas and low-income countries so far behind?", ["Cost of phones and data", "No networks in remote areas", "Electricity and skills"]], ["Predict", "Will everyone be online by 2040? What would it take?", ["Cheaper phones and data", "Satellite internet", "Teaching digital skills"]]] },
    hot: { all: ["Should internet access be a human right?", "Who should pay to connect the last 2.6 billion people?", "Why might women be online less than men?", "Could you live without the internet for a month?", "Is being offline always a disadvantage?"] },
    home: "Notice one thing you do online this week that you couldn't do 15 years ago. Be ready to talk about it. Nothing to send.",
    more: [["When did you first use the internet?", "What did you do?"], ["How many hours a day are you online?", "Too many?"], ["Who in your family isn't online?", "Why not?"], ["What would you miss most without the internet?", "Why?"], ["Is the internet making the world more equal?", "Or less?"], ["What will the internet be like in 2040?", "Better or worse?"]],
  },
  "space-budgets": {
    main: { title: "Space agency budgets, 2024", unit: "billion US$", rows: [["NASA (USA)", 24.9, "$24.9 billion"], ["ESA (Europe)", 8.5, "€7.79 billion (about $8.5 billion)"]],
      source: "NASA fiscal year 2024 appropriation (The Planetary Society); ESA 2024 budget (European Space Agency, reported January 2024).", note: "NASA's budget was about 0.4% of all US government spending in 2024.",
      prompts: [["Describe", "What does the chart show?", ["NASA spends about three times more than ESA", "Both are tens of billions over a decade", "It's a small part of total government spending"]], ["Explain", "Why do governments spend money on space at all?", ["Science and discovery", "Satellites for weather, GPS and phones", "National pride and security"]], ["Predict", "Will space spending grow in the next 10 years? Who will pay?", ["Private companies are spending more", "Missions to the Moon and Mars", "Pressure to spend on Earth's problems"]]] },
    hot: { all: ["Is space a good use of public money when there are problems on Earth?", "What has space research given ordinary people?", "Should private companies lead space exploration?", "Would you go to Mars if you could?", "If you had NASA's budget, what would you spend it on?"] },
    home: "Compare today's checkpoint speech with your first speech in Module 10. What did you link better with cause and effect? Be ready to tell me. Nothing to send.",
    more: [["Are you interested in space?", "Why or why not?"], ["What's the most amazing space discovery you know?", "Why?"], ["Should your country have a space program?", "Why?"], ["Would you pay to go to space as a tourist?", "How much?"], ["Is there life somewhere else?", "Where?"], ["What will humans do in space by 2050?", "Really?"]],
  },

  /* ---------- Stage 2 check-in (a dilemma) ---------- */
  "check-in-2": {
    review: [2, 3], format: "Dilemma",
    main: { situation: "The night before an important exam, a classmate sends you a photo of what look like the real exam answers.",
      options: [["a", "Look at them", ["Everyone else will", "It might not even be real", "Just to check"]], ["b", "Delete it without looking", ["It's cheating", "You'd never know your real level", "You could be expelled"]], ["c", "Tell the teacher", ["The exam is unfair now", "Others could get hurt", "It's the honest thing"]]],
      twist: "You find out half the class has already seen them, and the exam is graded on a curve.", time: 150 },
    hot: { a: ["How would you feel getting a grade you didn't earn?", "What if you get caught?", "Would you tell your parents?"], b: ["Is that fair to you if everyone else looked?", "What if you fail because of it?", "Would you warn anyone else?"], c: ["What happens to your classmate?", "Would people trust you after that?", "Would you do it anonymously?"], neutral: ["Is cheating worse in school or at work?", "What would make you change your answer?"] },
    home: "Stage 2 is done. This week, notice someone using \"admit, then push back\" or a cause-and-effect chain in English, on TV, a podcast or at work. Nothing to send.",
    more: [["Which Stage 2 lesson did you enjoy most?", "Why?"], ["Which is easier: admitting a point, or linking cause and effect?", "Why?"], ["What topic would you like to debate again?", "Which side?"], ["How has your speaking changed since Stage 1?", "Give an example."], ["What do you want to improve in Stage 3?", "Why?"], ["Which phrase from Stage 2 will you keep using?", "Where?"]],
  },
};
