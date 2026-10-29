import { makeExplainer } from "./explainerKit.js";

// Gazette explainers, batch 4: cities, food, money and language. Facts come from the sources listed in each entry's references.

export const EXPLAINERS_4 = [
  makeExplainer({
    slug: "how-bike-sharing-works",
    emoji: "🚲",
    variant: "work",
    topicLabel: "Society & Issues",
    title: "How Bike-Sharing Works, and Why the Bikes Keep Moving",
    dek: "Renting a bike by the minute looks easy. Behind it, trucks and clever rewards move thousands of bikes to where people need them.",
    plain: [
      "In a bike-sharing system, you take a bike from one place and leave it in another. You pay for the time. Many people use these bikes to go to work or school.",
      "There is a problem. People take bikes from busy places and leave them in other places. Soon one area has too many bikes and another has none.",
      "So workers move the bikes with vans. Some systems also give small rewards to riders who bring bikes to empty places.",
    ],
    polished: [
      "In a bike-sharing system, you pick up a bike at one place, ride it where you want to go and leave it somewhere else. Some systems have fixed stations where bikes must be returned, and others are \"dockless\", which means that users can leave the bikes almost anywhere in a service area.[1] The largest docked system in the United States, New York's Citi Bike, recorded more than 30 million trips in 2022.[2]",
      "The problem is that people do not move evenly. For example, many riders travel to offices in the morning, and the bikes pile up at the end of their trips. Researchers call this an imbalance of {{inventory|noun|the number of things that are available in a place}}. Some places end up with too many bikes, which can be untidy and annoying for residents, while others have too few, so users are disappointed.[1]",
      "To fix this, companies use \"rebalancing\". Workers move bikes in vans and trailers from full places to empty ones, and some systems also give riders a reward for taking a bike to a place where it is needed. Citi Bike's Bike Angels program, which started in 2018, gives free rides and points for this.[3] The idea shows that a simple service can need a lot of planning behind the scenes, and it is a good reminder that \"sharing\" works best when the system is organized.",
    ],
    precise: [
      "In a bike-sharing system, you collect a bike at one point, ride it to your destination and leave it somewhere else. Some systems have fixed stations where bikes must be returned, while \"dockless\" systems let users leave them almost anywhere in a service area.[1] The largest docked system in the United States, New York's Citi Bike, recorded more than 30 million trips in 2022.[2]",
      "The difficulty is that people do not move evenly. For example, many riders travel to offices in the morning, and bikes accumulate where trips end. Researchers describe this as an imbalance of {{inventory|noun|the number of items available in a given place}}. Some areas end up with too many bikes, which can be untidy and irritating for residents, while others have too few, which frustrates users.[1]",
      "To correct this, operators use \"rebalancing\". Staff move bikes in vans and trailers from crowded areas to empty ones, and some systems also reward riders who take bikes to places where they are needed. Citi Bike's Bike Angels programme, launched in 2018, offers free rides and points for this.[3] It is a reminder that a simple service can require extensive planning behind the scenes, and that sharing works best when it is well {{coordinated|adjective|organised so that people or parts work well together}}.",
    ],
    references: [
      { domain: "arxiv.org", name: "arXiv", headline: "A Deep Reinforcement Learning Framework for Rebalancing Dockless Bike Sharing Systems" },
      { domain: "comptroller.nyc.gov", name: "NYC Comptroller", headline: "Riding Forward: Overhauling Citi Bike's Contract for Better, More Equitable Service" },
      { domain: "lyft.com", name: "Lyft Blog", headline: "The math that ensures you always get a Citi Bike when you want it" },
    ],
    guide: [
      { q: "Would you use a shared bike in your city? When would it be useful, and when would you not use it?", follow: ["What would make you feel safe riding in traffic?"] },
      { q: "The article says bikes pile up in some areas and run out in others. Where else do you see this kind of imbalance, for example with taxis, buses or seats?", follow: [] },
      { q: "Is it fair to give riders rewards for moving bikes, or should companies pay workers to do it? Explain your opinion.", follow: ["What are the advantages of each way?"] },
    ],
  }),

  makeExplainer({
    slug: "how-a-library-of-things-works",
    emoji: "🧰",
    variant: "work",
    topicLabel: "Society & Issues",
    title: "How a 'Library of Things' Lets You Borrow a Drill",
    dek: "Some libraries now lend tools, cake pans and cameras along with books. It saves money, but someone has to look after the things.",
    plain: [
      "A library of things lends objects. You can borrow a tool, a camera or a cake pan. You use a library card, like you do for books.",
      "This is good for things that you need only one or two times. You do not have to buy them. It also helps the planet, because fewer things are made.",
      "You must bring the things back in good condition. If something breaks, you may need to pay.",
    ],
    polished: [
      "A library of things is a place that lends objects instead of, or as well as, books. Tool libraries are the most common kind, but some libraries also lend cameras, cake pans, camping equipment and garden tools.[1][2] The system often works like a book library: you use a library card, take the item home and bring it back by a certain date. Some libraries charge a small fee, but more often the service is free.[1]",
      "The main benefits are saving money and sharing resources. Many tools are expensive, and a household may need them only once or twice, which makes them ideal for community lending.[2] Fewer people buy things that will sit in a cupboard, so fewer products need to be made.[2]",
      "But lending objects is harder than lending books. Libraries have to {{maintain|verb|to keep something in good condition}} the items, check that all the parts come back and decide what happens if something is broken. Rules differ from library to library. One library, for example, charges $1.00 for each missing part that is easy to replace, and the full price of the item if it cannot be repaired.[3] The idea works because people respect the rules, and it shows how a community can share more than stories.",
    ],
    precise: [
      "A library of things is a library that lends objects instead of, or alongside, books. Tool libraries are the most common form, but some libraries also lend cameras, cake tins, camping equipment and garden tools.[1][2] The model often resembles a book library: borrowers use a library card, take the item home and return it by a set date. Some libraries charge a small fee, but more often the service is free.[1]",
      "The main benefits are savings and shared resources. Many tools are expensive, and a household may need them only once or twice, which makes them ideal for community lending.[2] Fewer people buy items that will sit unused in a cupboard, so fewer products need to be manufactured.[2]",
      "Lending objects is, however, harder than lending books. Libraries must {{maintain|verb|to keep something in good working condition}} the items, check that every part comes back and decide what happens if something is damaged. Rules differ from library to library: one, for example, charges $1.00 for each missing part that is easy to replace, and the full price of the item if it cannot be repaired.[3] The system works because borrowers respect the rules, and it shows that a community can share far more than stories.",
    ],
    references: [
      { domain: "en.wikipedia.org", name: "Wikipedia", headline: "Library of things" },
      { domain: "99percentinvisible.org", name: "99% Invisible", headline: "Libraries of Things: Creating a Real 'Sharing Economy' for the Digital Age" },
      { domain: "midlandparklibrary.org", name: "Midland Park Memorial Library", headline: "Library of Things Policy" },
    ],
    guide: [
      { q: "What would you borrow from a library of things? Is there something you bought and used only once?", follow: ["How much money could a family save by borrowing?"] },
      { q: "The article says rules about broken items differ from library to library. What rules would you make to be fair to borrowers and to the library?", follow: [] },
      { q: "Is borrowing better than owning? Think about money, space, the environment and convenience.", follow: ["What things would you never want to borrow?"] },
    ],
  }),

  makeExplainer({
    slug: "best-before-or-use-by",
    emoji: "🥫",
    variant: "daily",
    topicLabel: "Daily Life",
    title: "'Best Before' or 'Use By'? The Date You Should Not Ignore",
    dek: "Two labels, two meanings. One is about safety, the other is about quality, and mixing them up wastes a lot of good food.",
    plain: [
      "Food has two kinds of dates. 'Use by' is about safety. After that date, the food can make you ill. Do not eat it.",
      "'Best before' is about quality. After that date, the food is usually still safe, but it may not taste its best.",
      "Many people throw away good food after the 'best before' date. Look at the food, and smell it. If it looks and smells fine, it is probably good.",
    ],
    polished: [
      "Most packaged food has a date on it, but not all dates mean the same thing. In the UK, the Food Standards Agency explains that a \"use by\" date is about safety, and a \"best before\" date is about quality.[1] After the use-by date, food may not be safe to eat, and shops are not allowed to sell it. You cannot rely on smell or taste to decide, because the bacteria that cause food poisoning cannot always be smelled or tasted.[1]",
      "A \"best before\" date is different. Food that is past this date is usually still safe to eat, but it may not be at its best: it might be less crunchy, less colorful or less tasty.[1] Because of this, the agency says you can use your senses to check if the food is still okay. The date is only accurate if the food has been stored as the label says.[1][3]",
      "The confusion matters. Campden BRI, a food research organization, says that many people throw away food that is perfectly good just because the best-before date has passed.[3] In a survey for Food Standards Scotland, 21 percent of people wrongly thought that the best-before date was the best sign that food is safe.[2] Understanding the difference can {{reduce|verb|to make something smaller or less}} food waste and save money, without putting your health at risk.",
    ],
    precise: [
      "Most packaged food carries a date, but not every date means the same thing. In the UK, the Food Standards Agency explains that a \"use by\" date concerns safety, while a \"best before\" date concerns quality.[1] After the use-by date, food may be unsafe to eat, and shops are not allowed to sell it. You cannot rely on smell or taste to decide, because the bacteria that cause food poisoning cannot always be smelled or tasted.[1]",
      "A \"best before\" date is different. Food past this date is usually still safe to eat, but it may no longer be at its best: it might be less crisp, less colourful or less flavoursome.[1] For that reason, the agency says that you can use your senses to check whether the food is still acceptable. The date is accurate only if the food has been stored as instructed on the label.[1][3]",
      "The confusion has consequences. Campden BRI, a food research organisation, says that many people throw away food that is perfectly good simply because the best-before date has passed.[3] In a survey for Food Standards Scotland, 21 percent of consumers wrongly said that the best-before date was the best indicator of whether food is safe.[2] Understanding the difference can {{reduce|verb|to make something smaller in amount}} food waste and save money without putting anyone's health at risk.",
    ],
    references: [
      { domain: "food.gov.uk", name: "Food Standards Agency", headline: "Best before and use by dates" },
      { domain: "foodstandards.gov.scot", name: "Food Standards Scotland", headline: "Use by and best before dates" },
      { domain: "campdenbri.co.uk", name: "Campden BRI", headline: "Use by vs best before" },
    ],
    guide: [
      { q: "Do you check the date on food before you eat it? What do you do when the 'best before' date has passed?", follow: ["Do you trust your eyes and nose?"] },
      { q: "Why do you think many people mix up the two dates? How could labels be clearer?", follow: [] },
      { q: "Food waste is a big problem. What other everyday habits could help to reduce it at home or in restaurants?", follow: ["Which habit would be easiest for you to change?"] },
    ],
  }),

  makeExplainer({
    slug: "how-contactless-payment-works",
    emoji: "💳",
    variant: "tech",
    topicLabel: "Digital & Tech",
    title: "How Contactless Payment Works Without Touching Anything",
    dek: "A card or phone can pay a bill in one second. A short-range radio link and a secret substitute number make it possible.",
    plain: [
      "To pay with a contactless card, you hold it near the machine. There is a tiny chip and an antenna in the card. The machine sends a small amount of energy to the chip, and the chip sends back the payment.",
      "On a phone, the real card number is not used. The phone uses a different number called a token. If a thief sees the token, he cannot use your real card.",
      "There is a limit. For small payments you do not need a PIN. If you lose your card, someone may use it for small payments.",
    ],
    polished: [
      "When you tap a card on a payment machine, a short-range radio link called NFC (near-field communication) does the work. The card has a tiny chip and an antenna, but no battery. The machine's electromagnetic field gives the chip enough power to reply with the payment information.[1][2] The card has to be only a few centimeters away.",
      "Phones add another layer of protection. Instead of the real card number, a phone wallet sends a substitute number called a {{token|noun|a substitute code that is used instead of private information}}, which is linked to one device.[1] The real number is therefore not given to the shop, which limits the damage if the shop is hacked. The card information is also kept in a separate secure chip in the phone, and the payment may need your fingerprint, face or passcode.[1][3]",
      "Contactless payment is not risk-free. Most countries set a limit for payments that can be made without a PIN, so a lost card could be used for small purchases until the limit is reached.[3] Experts also advise protecting a lost phone with a passcode. The exact limits depend on the country and the bank, so it is worth checking your own. The system is fast and generally secure, but it works best when people take simple steps to protect their cards and phones.",
    ],
    precise: [
      "When you tap a card on a payment terminal, a short-range radio link called NFC (near-field communication) does the work. The card contains a tiny chip and an antenna but no battery; the terminal's electromagnetic field supplies enough power for the chip to reply with the payment data.[1][2] The card must be only a few centimetres from the reader.",
      "Phones add another layer of protection. Instead of the real card number, a mobile wallet transmits a substitute number called a {{token|noun|a substitute code used in place of sensitive information}}, which is tied to a single device.[1] The real number is therefore never given to the shop, which limits the damage if the shop is hacked. Card details are also stored in a separate secure chip within the phone, and the payment may require a fingerprint, face scan or passcode.[1][3]",
      "Contactless payment is not risk-free. Most countries impose a limit on payments made without a PIN, so a lost card could be used for small purchases until that limit is reached.[3] Experts also advise securing a lost phone with a passcode. The exact limits vary by country and bank, so it is worth checking your own. The system is fast and generally secure, but it works best when users take simple precautions.",
    ],
    references: [
      { domain: "stripe.com", name: "Stripe", headline: "NFC security 101: A guide for businesses using contactless payments" },
      { domain: "grandavehousing.calpoly.edu", name: "Cal Poly Housing", headline: "Contactless: How Does It Work?" },
      { domain: "adityabirlacapital.com", name: "Aditya Birla Capital", headline: "What is contactless payment" },
    ],
    guide: [
      { q: "Do you pay by card, phone or cash? What do you like and dislike about each way?", follow: ["When would you not use contactless?"] },
      { q: "The article says a token protects your real card number. Why is it a good idea not to give a shop your real number?", follow: [] },
      { q: "A lost card can be used for small payments. How could banks make this safer without making payment slower?", follow: ["Would you accept a smaller limit to be safer?"] },
    ],
  }),

  makeExplainer({
    slug: "do-subtitles-help-you-learn-a-language",
    emoji: "🎬",
    variant: "daily",
    topicLabel: "Study & Skills",
    title: "Do Subtitles Help You Learn a Language?",
    dek: "Watching your favorite series is more than free entertainment, but the type of subtitles you choose changes what you learn.",
    plain: [
      "Many people learn English by watching series. But which subtitles are best? You can use subtitles in your own language, or English subtitles.",
      "Studies say English subtitles are often better for learning new words. You see the word and hear it at the same time.",
      "But there is a danger. You may only read and not listen. The best way is to try a scene with subtitles, and then try again without them.",
    ],
    polished: [
      "Watching series and films in English is a popular way to practice, but should you turn the subtitles on, and in which language? Researchers have studied this question for years. Subtitles in the same language as the sound, often called captions, show you the words that you hear, so you can connect the sound of a word with its spelling.[1][3]",
      "Some studies suggest that captions work better for learning vocabulary than subtitles in your own language. In a study by Peters and colleagues, learners who watched with English captions gained more knowledge of words, including their pronunciation and spelling, than learners who watched with subtitles in their first language.[3] But the research is not simple. The benefit depends on {{factors|noun|things that influence a result}} such as how many words the learner already knows.[2] One review also found no clear advantage for special, highlighted captions over ordinary ones.",
      "There is also a possible danger: if the subtitles are always on, you may read instead of listening. A good approach is to use the tools in steps. Watch a scene with English captions, then watch it again without them, and write down any new words. Subtitles are a helpful support, but listening is the skill you are trying to build, so they should not be a permanent crutch.",
    ],
    precise: [
      "Watching series and films in English is a popular way to practise, but should you switch the subtitles on, and in which language? Researchers have studied this question for years. Subtitles in the same language as the soundtrack, often called captions, show the words you hear, so you can connect the sound of a word with its spelling.[1][3]",
      "Some studies suggest that captions work better for vocabulary than subtitles in the viewer's own language. In a study by Peters and colleagues, learners who watched with English captions gained more knowledge of words, including their pronunciation and spelling, than learners who watched with first-language subtitles.[3] But the research is not straightforward. The benefit depends on {{variables|noun|factors that can change from one situation to another}} such as how many words the learner already knows.[2] One review also found no clear advantage for specially highlighted captions over ordinary ones.",
      "There is also a potential drawback: if subtitles are always on, you may read rather than listen. A sensible approach is to use them in stages. Watch a scene with English captions, watch it again without them and note any new words. Subtitles are a useful support, but listening is the skill you are trying to build, so they should not become a permanent crutch.",
    ],
    references: [
      { domain: "cambridge.org", name: "Language Teaching (Cambridge)", headline: "How do second language learners go about their listening when they view captioned videos? Replication studies of Taylor (2005), Winke et al. (2013) and Rodgers and Webb (2017)" },
      { domain: "api.equinoxpub.com", name: "Equinox Publishing", headline: "Vocabulary Learning Through Viewing Captioned or Subtitled Videos and the Role of Learner- and Word-Related Factors" },
      { domain: "planetread.org", name: "Planet Read", headline: "Learning vocabulary through audiovisual input: The differential effect of L1 subtitles and captions" },
    ],
    guide: [
      { q: "Do you watch series or films in English? Which subtitles do you use, and why?", follow: ["Have you learned any words this way? Which ones?"] },
      { q: "The article says you may read instead of listening. What could you do to make sure you practice listening, too?", follow: [] },
      { q: "Could a teacher use a series in class? Which scene or genre would work best, and what would students do?", follow: ["What would you ask students to do before, during and after watching?"] },
    ],
  }),

  makeExplainer({
    slug: "how-podcasts-became-mainstream",
    emoji: "🎧",
    variant: "culture",
    topicLabel: "Culture & Fun",
    title: "How Podcasts Went From Niche to Normal",
    dek: "A few years ago, podcasts were a hobby for some. Now most adults in the United States have listened to one. How do we know?",
    plain: [
      "A podcast is an audio show that you can listen to when you like. Some podcasts also have video.",
      "In 2020, about 37 percent of Americans listened to podcasts every month. In 2024, the number was 47 percent. In 2026, a survey said that 80 percent of adults had listened to or watched a podcast at least once.",
      "These numbers come from surveys. Surveys are not perfect, but they show that podcasts are now part of normal life.",
    ],
    polished: [
      "A podcast is an audio show that you can listen to whenever you like, and many now come with video, too. They started as a small hobby, but the numbers have grown quickly. According to Edison Research's \"Infinite Dial\" surveys in the United States, 37 percent of people aged 12 and over listened to podcasts every month in 2020.[1] By 2024, the number was 47 percent, about 135 million people, and the audience was growing fastest among women and older listeners.[2]",
      "The 2026 report went further. It found that 80 percent of Americans aged 12 and over had listened to or watched a podcast at some time, a record high.[3] The question now includes video, which shows how the idea of a podcast has widened: it is no longer only audio. A person who watches a conversation on a video site may count as a podcast viewer.",
      "These numbers need to be read carefully. They come from surveys in one country, not from every listener in the world. Another group, Pew Research, has also pointed out that download numbers do not show whether people actually listened to an episode, either in part or in full. Still, the numbers point in one direction. Podcasts have moved from the edge of media into the center of {{everyday|adjective|ordinary and part of normal life}} listening, and the next question is how people will choose among so many shows.",
    ],
    precise: [
      "A podcast is an audio show that can be played whenever the listener chooses, and many now include video as well. They began as a small hobby, but the numbers have grown rapidly. According to Edison Research's \"Infinite Dial\" surveys in the United States, 37 percent of people aged 12 and over listened to podcasts every month in 2020.[1] By 2024, the figure was 47 percent, about 135 million people, with the audience growing fastest among women and older listeners.[2]",
      "The 2026 report went further. It found that 80 percent of Americans aged 12 and over had listened to or watched a podcast at some point, a record high.[3] The question now includes video, which shows how the definition has widened: a podcast is no longer purely audio, and someone who watches a conversation on a video site may count as a podcast viewer.",
      "These figures need to be read with care. They come from surveys in a single country, not from every listener worldwide. Pew Research has also noted that download numbers do not show whether people actually listened to an episode, in part or in full. Even so, the direction is clear. Podcasts have moved from the margins of media to the centre of {{everyday|adjective|ordinary and part of normal life}} listening, and the next question is how people will choose among so many shows.",
    ],
    references: [
      { domain: "businesswire.com", name: "Business Wire", headline: "Monthly Podcast Listening Now at 37 Percent" },
      { domain: "ppc.land", name: "PPC Land", headline: "Edison Research's report reveals significant growth in the U.S. podcast audience" },
      { domain: "tubefilter.com", name: "Tubefilter", headline: "Four out of five U.S. adults have listened to or watched a podcast" },
    ],
    guide: [
      { q: "Do you listen to podcasts? Which topics do you like, and when do you listen?", follow: ["Do you prefer audio only or video?"] },
      { q: "The article says download numbers do not show whether someone listened. What other ways could we measure real listening?", follow: [] },
      { q: "With so many shows, how do you choose what to listen to? How could a podcast help you practice English?", follow: ["What kind of English would you hear in a podcast that is different from a textbook?"] },
    ],
  }),
];
