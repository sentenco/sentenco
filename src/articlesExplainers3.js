import { makeExplainer } from "./explainerKit.js";

// Gazette explainers, batch 3: nature, mind and cities. Facts come from the sources listed in each entry's references.

export const EXPLAINERS_3 = [
  makeExplainer({
    slug: "how-rainforests-make-their-own-rain",
    emoji: "🌧️",
    variant: "planet",
    topicLabel: "Nature & Science",
    title: "How a Rainforest Helps Make Its Own Rain",
    dek: "Trees do more than wait for the rain. They send huge amounts of water vapor into the air, and that can bring the rainy season earlier.",
    plain: [
      "A rainforest does not only get rain. It also helps to make rain. Trees take water from the ground. They let the water go from their leaves as vapor.",
      "The vapor goes up into the air and makes clouds. Then it can fall again as rain. In the Amazon, this helps start the wet season in the south.",
      "If people cut down many trees, there is less vapor. Then there may be less rain, and the dry season can be harder.",
    ],
    polished: [
      "A rainforest does not simply wait for rain; it helps to create it. Trees take water from the ground through their roots and release it into the air through their leaves. This process is called {{transpiration|noun|the way plants release water vapor from their leaves}}. A study led by UCLA and NASA's Jet Propulsion Laboratory found that transpiration helps to start the wet season in the southern Amazon, because the water vapor from the trees rises high into the air, where it can turn into rain clouds.[1]",
      "The moisture does not stay in one place. Winds carry it across South America in what scientists call \"flying rivers\", and some of it falls as rain far from the forest.[3] This means the forest is connected to farms and cities that may be hundreds of kilometers away.",
      "The system also has a weakness. A 2025 analysis by an Amazon conservation group argues that cutting down trees, especially in southern Brazil, disturbs these flows during the dry season, when the forest needs water most.[2] Some estimates say that large-scale deforestation could reduce yearly rainfall in the Amazon by about 6 to 18 percent, but these figures come from models and are not certain.[3] Scientists still disagree about exactly how much forest can be lost before the system changes for good.",
    ],
    precise: [
      "A rainforest does not merely wait for rain; it helps to produce it. Trees draw water from the soil through their roots and release it into the air through their leaves, a process known as {{transpiration|noun|the release of water vapour by plants through their leaves}}. A study led by UCLA and NASA's Jet Propulsion Laboratory found that transpiration helps to trigger the wet season in the southern Amazon, because the vapour rises high into the atmosphere, where it can condense into rain clouds.[1]",
      "The moisture does not remain in one place. Winds carry it across South America in what scientists call \"flying rivers\", and some of it falls as rain far from the forest.[3] The forest is therefore linked to farms and cities that may lie hundreds of kilometres away.",
      "The system has a {{vulnerability|noun|a weakness that can be exploited or can cause harm}}, however. A 2025 analysis by an Amazon conservation group argues that clearing trees, particularly in southern Brazil, disrupts these flows in the dry season, when the forest needs water most.[2] Some estimates suggest that extensive deforestation could cut annual rainfall in the Amazon by roughly 6 to 18 percent, although such figures come from models and remain uncertain.[3] Scientists still disagree about how much forest can be lost before the system changes irreversibly.",
    ],
    references: [
      { domain: "jpl.nasa.gov", name: "NASA JPL", headline: "New Study Shows the Amazon Makes Its Own Rainy Season" },
      { domain: "therepublic.com", name: "The Republic (AP)", headline: "As Amazon's 'flying rivers' weaken with tree loss, scientists warn of worsening droughts" },
      { domain: "discoverwildlife.com", name: "Discover Wildlife", headline: "Amazon rainforest aerial rivers" },
    ],
    guide: [
      { q: "The article says a forest and a city far away can be connected by 'flying rivers'. Can you think of another connection between places that we do not usually see?", follow: [] },
      { q: "If forests help to bring rain, who should be responsible for protecting them: the country that owns them, or everyone who benefits? Explain.", follow: ["What could other countries do to help?"] },
      { q: "Scientists are not sure how much forest can be lost before the system changes for good. How should people make decisions when the science is uncertain?", follow: ["Would you act early or wait for more evidence?"] },
    ],
  }),

  makeExplainer({
    slug: "why-you-sleep-badly-in-a-new-place",
    emoji: "🛏️",
    variant: "daily",
    topicLabel: "Daily Life",
    title: "Why You Sleep Badly the First Night in a New Place",
    dek: "Half of your brain may stay on night watch in a hotel bed, and a famous study can show why you wake up tired.",
    plain: [
      "Many people sleep badly on the first night in a hotel or a new house. Scientists call this the first-night effect.",
      "A study in 2016 found a reason. On the first night, one side of the brain stays more awake. It is like a guard on night watch.",
      "On the second night, the guard is not needed. The brain feels safer, and people sleep better.",
    ],
    polished: [
      "Many people sleep badly on the first night in a hotel or a new place. Sleep scientists call this the first-night effect, and a 2016 study from Brown University helped to explain it.[1] The researchers, led by Masako Tamaki and Yuka Sasaki, found that on the first night one side of the brain, the left side, stays more {{alert|adjective|awake and ready to notice what is happening around you}} during deep sleep. They described it as a kind of \"night watch\".[1][2]",
      "To test the idea, the team played soft sounds to volunteers' ears. On the first night, sounds that went to the side of the brain that was more alert made people wake up more often and more quickly.[1][2] On the second night, there was no clear difference between the two sides.[1] The researchers suggested that this may be a protective habit of the brain, which stays ready for possible danger when the place is unfamiliar.[3]",
      "The study has limits. Only healthy volunteers took part, so the results may not apply to people with insomnia or other sleep problems. The team also measured only the first stage of deep sleep, so it is not yet clear whether the same side keeps watch all night.[1] Still, the findings may be useful to travelers: if the first night is poor, the second one is likely to be better.",
    ],
    precise: [
      "Many people sleep poorly on their first night in a hotel or an unfamiliar bed. Sleep researchers call this the first-night effect, and a 2016 study from Brown University helped to explain it.[1] The team, led by Masako Tamaki and Yuka Sasaki, found that on the first night one hemisphere of the brain, the left, remained more {{vigilant|adjective|carefully watching for possible danger}} during deep sleep, a pattern they likened to a \"night watch\".[1][2]",
      "To test the idea, the researchers played soft sounds to the volunteers' ears. On the first night, sounds that reached the more vigilant hemisphere caused more frequent and faster awakenings.[1][2] On the second night, there was no clear difference between the two sides.[1] The authors speculated that this may be a protective mechanism, keeping the brain alert to possible danger when the surroundings are unfamiliar.[3]",
      "The study has limitations. Only healthy volunteers took part, so the results may not apply to people with insomnia or other sleep disorders. The team also measured only the first slow-wave phase, so it remains unclear whether the same hemisphere stands guard all night.[1] Even so, the findings offer reassurance to travellers: if the first night is poor, the second is likely to be better.",
    ],
    references: [
      { domain: "par.nsf.gov", name: "Current Biology (NSF Public Access)", headline: "Night watch in one brain hemisphere during sleep associated with the first-night effect in humans" },
      { domain: "the-scientist.com", name: "The Scientist", headline: "Brain Keeps Watch During Sleep" },
      { domain: "cnbc.com", name: "CNBC", headline: "An evolutionary reason for why it's hard to sleep in hotels" },
    ],
    guide: [
      { q: "How do you sleep on the first night in a new place? Do you do anything to sleep better when you travel?", follow: ["What do you bring that makes a new bed feel familiar?"] },
      { q: "The article says the brain may keep 'watch' for danger. Why might this have helped people long ago?", follow: [] },
      { q: "The study used only healthy volunteers. Why is it important to say who took part in a study, and what could be different for other people?", follow: ["Can you think of another study that may not apply to everyone?"] },
    ],
  }),

  makeExplainer({
    slug: "why-music-gives-you-chills",
    emoji: "🎶",
    variant: "culture",
    topicLabel: "Culture & Fun",
    title: "Why Some Music Gives You Chills",
    dek: "Roughly half of people feel shivers when a favorite song reaches its best moment, and brain scientists are starting to explain why.",
    plain: [
      "Some people get chills from music. It can happen on your arms or on your back. It often happens at a special part of a song.",
      "Scientists say about half of people feel this. The brain gives a happy chemical called dopamine when we hear something we like.",
      "Not everyone feels chills. Some people have more connections between the hearing part of the brain and the part for feelings.",
    ],
    polished: [
      "You are listening to your favorite song, and then it happens: a shiver runs down your back, or the hair on your arms stands up. Scientists call this \"frisson\", the French word for a shiver. Estimates vary between studies, but roughly half of people say that music gives them chills.[1][2]",
      "Researchers think the brain is rewarding itself. A French study of 18 music lovers described how the brain's reward chemical, dopamine, rises while listeners {{anticipate|verb|to expect something and wait for it}} what comes next in a song, and the reward arrives when the prediction turns out to be right.[1]",
      "Not everyone feels them. A Harvard study compared 10 students who reliably got chills from music with 10 who did not. The chill-prone group had more nerve fibers connecting the hearing parts of the brain with the parts that process emotion.[3] These samples are very small, so scientists are careful about drawing big conclusions. Still, the research suggests that the way we feel music may be partly built into our brains.",
    ],
    precise: [
      "You are listening to a favourite song and then it happens: a shiver runs down your spine, or the hair on your arms stands on end. Scientists call the sensation \"frisson\", the French word for a shiver. Estimates differ between studies, but roughly half of people report that music gives them chills.[1][2]",
      "Researchers believe the brain is rewarding itself. A French study of 18 music lovers found that the reward chemical dopamine rises while listeners {{anticipate|verb|to expect and look forward to something that is about to happen}} what comes next in a song, with the reward arriving when the prediction proves right.[1]",
      "Not everyone experiences them. A Harvard-led study compared ten students who reliably felt chills with ten who did not, and found that the chill-prone group had more nerve fibres connecting the auditory regions of the brain with those that process emotion.[3] The samples are very small, so scientists are cautious about drawing firm conclusions. Even so, the research suggests that the way we feel music may be partly {{wired|adjective|built into the brain's structure}} into us.",
    ],
    references: [
      { domain: "smithsonianmag.com", name: "Smithsonian Magazine", headline: "Researchers look at what happens in the brain when music causes chills" },
      { domain: "classicfm.com", name: "Classic FM", headline: "Scientists find why your favourite music gives you chills" },
      { domain: "discovery.com", name: "Discovery", headline: "Getting Chills from Music" },
    ],
    guide: [
      { q: "Which song or piece of music gives you chills? What is happening in the music at that moment?", follow: ["Does it work every time you listen?"] },
      { q: "The studies in the article are very small. Why should we be careful with the results of small studies?", follow: [] },
      { q: "If some people's brains are built to feel music more strongly, is that a good thing? Why might it matter for teachers, therapists or musicians?", follow: ["Do you know someone who never feels chills from music?"] },
    ],
  }),

  makeExplainer({
    slug: "how-smells-bring-back-memories",
    emoji: "👃",
    variant: "daily",
    topicLabel: "Daily Life",
    title: "Why a Smell Can Take You Back to Childhood",
    dek: "The scent of a kitchen or a school can bring back a memory in a second, but scientists say the full story is not so simple.",
    plain: [
      "A smell can bring back a strong memory. You may smell a cake and think of your grandmother. You may smell a place and remember school.",
      "Scientists say smell goes quickly to the parts of the brain for feelings and memory. Other senses do not go there in the same way.",
      "But the idea is not fully proven. Some studies find smells bring back clearer memories. Others find the effect is smaller. We need more research.",
    ],
    polished: [
      "You smell a cake and suddenly you are in your grandmother's kitchen. This feeling is sometimes called the \"Proust effect\", after the French writer Marcel Proust, who described a memory coming back when he tasted a small cake. Popular science explains it this way: smell signals skip the part of the brain that most other senses pass through, and go quickly to the amygdala, which processes emotion, and the hippocampus, which helps to form memories.[1][2]",
      "Some research supports the idea. A 2018 study found that smells brought back clearer and more emotional memories than pictures, and the effect was reportedly stronger in older adults.[2] Another study, from 2002, asked people to describe memories that came from smells and from visual {{cues|noun|signals or hints that help you remember something}}.[2]",
      "The full picture is less simple. A 2012 study found that smells triggered more detailed and emotional memories than music, but its authors said it did not confirm the strongest version of the Proust idea, and that very little research has tested whether smell is really special compared with other senses.[3] The \"direct wiring\" story is also a simplification of how the brain works. So a smell may well take you back to childhood, but scientists are still working out exactly how and why.",
    ],
    precise: [
      "You catch the smell of a cake and suddenly you are in your grandmother's kitchen. The experience is sometimes called the \"Proust effect\", after the French writer Marcel Proust, who described a memory returning as he tasted a small cake. Popular science explains it as follows: smell signals bypass the brain region through which most other senses pass and travel quickly to the amygdala, which processes emotion, and the hippocampus, which helps to form memories.[1][2]",
      "Some research supports the idea. A 2018 study found that smells triggered clearer and more emotional memories than pictures, and the effect was reportedly stronger in older adults.[2] Another study, from 2002, compared memories prompted by odours with those prompted by visual {{cues|noun|signals that help trigger a memory}}.[2]",
      "The full picture is less straightforward. A 2012 study found that smells prompted more detailed and emotionally arousing memories than music, yet its authors said the results did not confirm the strongest form of the Proust claim, and noted that very little research had tested whether smell is genuinely special compared with other senses.[3] The \"direct wiring\" story is also a simplification of how the brain works. A smell may well take you back to childhood, but scientists are still working out exactly how and why.",
    ],
    references: [
      { domain: "scholarblogs.emory.edu", name: "Emory University", headline: "How Smell Triggers Memory" },
      { domain: "scienceabc.com", name: "Science ABC", headline: "Why Do Smells Trigger Memories?" },
      { domain: "digest.bps.org.uk", name: "British Psychological Society Research Digest", headline: "Do smells really trigger particularly evocative memories?" },
    ],
    guide: [
      { q: "Which smell brings back a memory for you? Describe the memory and the place.", follow: ["Is the memory happy, sad or mixed?"] },
      { q: "The article says the 'direct wiring' explanation is a simplification. Why do popular articles often make science sound simpler than it is?", follow: [] },
      { q: "Shops and hotels sometimes use a special smell on purpose. Is that a good idea, or is it a kind of trick? Explain your opinion.", follow: ["Would it change how you feel about a place?"] },
    ],
  }),

  makeExplainer({
    slug: "do-app-streaks-help-you-learn",
    emoji: "🔥",
    variant: "tech",
    topicLabel: "Study & Skills",
    title: "Do App Streaks Really Help You Learn a Language?",
    dek: "A long streak shows that you practiced every day. It does not prove that you can speak, and some learners say it adds stress.",
    plain: [
      "Many language apps count your streak. A streak is the number of days in a row that you practiced. If you miss one day, the number goes back to zero.",
      "Small studies say streaks help people practice more often. People like to keep the number going.",
      "But a streak does not show how well you speak. Some learners feel stress when they lose a streak. A good plan needs speaking practice, too.",
    ],
    polished: [
      "Many language apps show a number that counts the days in a row that you have practiced. This is called a streak, and it is designed to keep you coming back every day. Duolingo's own blog says that the streak is meant to help you stay motivated and that it uses habit research.[1] If you miss a day, the number falls back to zero.",
      "Do streaks work? Small studies suggest that they do help with {{motivation|noun|the reason or desire that makes you want to do something}}. In one questionnaire study of Spanish-speaking adults, the daily streak, points and leagues were the features learners noticed most, and they said these features helped them stay consistent.[2] But a thesis on students of English as a foreign language found mixed results: some learners felt frustrated when they lost a streak, or felt pressure from competition.[3]",
      "The most important limit is that a streak measures practice, not skill. We found no large, independent study showing that app streaks improve how well people speak a language. A number on a screen cannot tell you whether you can order a meal or hold a conversation. A streak can be a helpful habit, but it works best when it is combined with real speaking and listening, and when missing one day does not feel like a disaster.",
    ],
    precise: [
      "Many language apps display a number that counts consecutive days of practice. This is called a streak, and it is designed to bring users back every day. Duolingo's own blog says that the streak is intended to help learners stay motivated and that it draws on habit-forming research.[1] Miss a single day, and the number falls back to zero.",
      "Do streaks work? Small studies suggest that they help with {{motivation|noun|the desire or reason that makes a person want to act}}. In one questionnaire study of Spanish-speaking adults, the daily streak, points and leagues were the features most noticed, and participants said they helped them stay consistent.[2] A thesis on learners of English as a foreign language, however, reported mixed results: some felt frustration after losing a streak, or felt pressure from competition.[3]",
      "The most important limitation is that a streak measures practice, not proficiency. We found no large, independent trial showing that app streaks improve how well people speak a language. A number on a screen cannot tell you whether you can order a meal or sustain a conversation. A streak can be a useful habit, but it works best when it is combined with real speaking and listening, and when missing a day does not feel like a {{setback|noun|a problem that stops or slows down progress}}.",
    ],
    references: [
      { domain: "blog.duolingo.com", name: "Duolingo Blog", headline: "How the Duolingo streak builds habit" },
      { domain: "repositorio.21.edu.ar", name: "Universidad Siglo 21 repository", headline: "Questionnaire study of gamification in Duolingo among Spanish-speaking adults" },
      { domain: "eprints.umpo.ac.id", name: "Universitas Muhammadiyah Ponorogo", headline: "Thesis on Duolingo gamification and EFL students" },
    ],
    guide: [
      { q: "Have you ever kept a streak in an app? How long was it, and what happened when you lost it?", follow: ["Did the streak make you feel good, stressed or both?"] },
      { q: "The article says a streak measures practice, not skill. How could you check your real progress in a language?", follow: [] },
      { q: "Some critics say streaks make people feel trapped. Should apps be allowed to use this kind of pressure? Why or why not?", follow: ["What would a fairer system look like?"] },
    ],
  }),

  makeExplainer({
    slug: "how-sponge-cities-stop-floods",
    emoji: "🌿",
    variant: "work",
    topicLabel: "Society & Issues",
    title: "How 'Sponge Cities' Try to Stop Floods",
    dek: "Instead of sending rain down a pipe, a sponge city lets the ground, the plants and the roofs soak it up. It works, but only up to a point.",
    plain: [
      "A big city has a lot of concrete. When it rains, water cannot go into the ground. It runs on the street and can cause a flood.",
      "A sponge city is different. It has gardens, green roofs and streets that let water go through. The city soaks up the rain like a sponge.",
      "This helps, but there are limits. Very heavy rain can still cause floods. And it costs a lot of money to build.",
    ],
    polished: [
      "In a normal city, rain falls on roads and roofs and runs into drains. When the storm is very heavy, the drains cannot cope, and the streets flood. A \"sponge city\" tries to solve the problem in a different way. Instead of sending the water away quickly, it lets the city soak it up. Streets are built with {{permeable|adjective|allowing liquid to pass through}} paving, there are rain gardens and wetlands, and roofs are covered with plants and have tanks to store water.[1][2]",
      "China started a national sponge city program. The goal was that by 2020, 80 percent of urban areas would absorb and reuse at least 70 percent of rainwater, and later targets moved the deadline to 2030.[1] The results are mixed. Projects such as green roofs and rain gardens have reduced run-off, and cities like Xiamen and Wuhan have coped well with heavy rain.[2]",
      "But the system has limits. Experts say sponge infrastructure can handle only about 200 millimeters of rain in a day.[3] In 2021, subways and highways in Zhengzhou flooded even though the city had sponge features. The program is also expensive, with more than $12 billion spent, and progress has been uneven between cities.[2][3] A sponge city can make floods smaller and less frequent, but it cannot stop every flood.",
    ],
    precise: [
      "In a conventional city, rain falls on roads and roofs and is channelled into drains. When a storm is severe, the drains cannot cope and the streets flood. A \"sponge city\" tackles the problem differently: instead of removing the water quickly, it allows the city to absorb it. Streets are laid with {{permeable|adjective|designed to let water pass through}} paving, rain gardens and wetlands are created, and roofs are covered with vegetation and fitted with water tanks.[1][2]",
      "China launched a national sponge city programme. The original goal was that by 2020, 80 percent of urban areas would absorb and reuse at least 70 percent of rainwater, and later targets pushed the deadline to 2030.[1] The results have been mixed. Projects such as green roofs and rain gardens have reduced run-off, and cities including Xiamen and Wuhan have coped well with heavy rainfall.[2]",
      "The approach has limits, however. Experts say that sponge infrastructure can handle only about 200 millimetres of rain in a day.[3] In 2021, subways and highways in Zhengzhou were flooded even though the city had sponge features. The programme is also expensive, with more than $12 billion spent, and progress has been {{uneven|adjective|not the same in every place}} between cities.[2][3] A sponge city can make floods smaller and rarer, but it cannot prevent every one.",
    ],
    references: [
      { domain: "eco-business.com", name: "Eco-Business", headline: "China's 'sponge cities' aim to re-use 70% of rainwater: here's how" },
      { domain: "proof.csmonitor.com", name: "The Christian Science Monitor", headline: "To curb urban flooding, China is building 'sponge cities.' Do they work?" },
      { domain: "tribuneindia.com", name: "The Tribune", headline: "What are China's sponge cities and why aren't they stopping the floods?" },
    ],
    guide: [
      { q: "Does your city have flooding problems? What causes them, and what could the city do?", follow: ["Who should pay for the solutions?"] },
      { q: "The article says sponge cities help but cannot stop every flood. Is a partial solution still worth the money? Explain.", follow: [] },
      { q: "Which would you prefer in your street: more green space and plants that soak up rain, or bigger drains? Why?", follow: ["What are the other benefits of green roofs and gardens?"] },
    ],
  }),
];
