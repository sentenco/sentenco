import { makeExplainer } from "./explainerKit.js";

// Gazette explainers, batch 1: short "how it works, and where it struggles" pieces in the style of Unseen Reading Part 5.
// Facts come from the sources listed in each entry's references.

export const EXPLAINERS_1 = [
  makeExplainer({
    slug: "how-translation-earbuds-work",
    emoji: "🎧",
    variant: "tech",
    topicLabel: "Digital & Tech",
    title: "How Translation Earbuds Work, and Where They Struggle",
    dek: "Earbuds can now translate a conversation almost as it happens, but accents, noise and slang still cause trouble.",
    plain: [
      "Translation earbuds help you talk to people who speak another language. They listen to the person. They turn the words into text. Then they translate the text and say it in your ear.",
      "This takes only a few seconds. Some earbuds use your phone to do the work. Some need the internet.",
      "The earbuds are not perfect. They can make mistakes with fast speech, loud places and special words. They only work with some languages. They are good for simple things, like asking for food or directions.",
    ],
    polished: [
      "Translation earbuds listen to a person speaking, turn the words into text, translate that text and read the result aloud in your ear.[1] The whole chain takes only a few seconds. Apple's AirPods can do it with an iPhone, and Apple says the {{processing|noun|the way a computer deals with information}} happens on the phone itself, which helps protect {{privacy|noun|the right to keep your personal information secret}}.[1] Google's Translate app can work with almost any earbuds on Android, but its translation is done online, so it needs a data connection.[2]",
      "The idea is simple, but real conversations are messy. Each step in the chain can make a small mistake, and the mistakes add up. Fast speech, strong accents, background noise and {{slang|noun|very informal words used by a particular group of people}} can all confuse the first step, and a wrong word at the start becomes a wrong sentence at the end. The tools also support only certain languages, and the list keeps changing, so travelers should check it before they go.[1][3]",
      "So should we stop learning languages? Probably not. Earbuds are useful for ordering food, asking for directions or following a short talk. But there is a pause before each translation, and people have to take turns. For jokes, friendships and deep conversations, many people will still want to speak the language themselves.",
    ],
    precise: [
      "Translation earbuds work as a three-stage relay: they capture speech, convert it into text, translate that text and then read the output aloud in the wearer's ear.[1] The entire sequence takes only seconds. Apple's AirPods rely on a paired iPhone, and Apple stresses that the {{processing|noun|the handling of data by a computer}} is carried out on the device, a design that safeguards {{privacy|noun|a person's control over their own personal information}}.[1] Google's Translate app, by contrast, can work with almost any earbuds on Android, but it translates online and therefore depends on a data connection.[2]",
      "In practice, however, conversation is far messier than a demonstration suggests. Because each stage feeds the next, a small error in the first can {{cascade|verb|to pass from one stage to the next, getting bigger each time}} into a distorted final sentence. Rapid speech, regional accents, background noise and {{colloquial|adjective|used in ordinary, informal speech}} expressions are the usual culprits. Language coverage is also uneven and keeps changing, which is why travelers are advised to check the current list before relying on a device.[1][3]",
      "None of this makes language learning obsolete. Earbuds are well suited to practical errands such as ordering a meal or asking the way, yet the delay before each translation forces speakers to take turns. Humour, friendship and nuance depend on tone and timing, and for those, many people will still prefer to speak the language themselves.",
    ],
    references: [
      { domain: "apple.com", name: "Apple Newsroom", headline: "Live Translation on AirPods expands to the EU" },
      { domain: "techradar.com", name: "TechRadar", headline: "Google smashes language barriers with live translation for any earbuds on Android — here's how it works" },
      { domain: "which.co.uk", name: "Which?", headline: "We tested Apple's Live Translation feature: does it really work?" },
    ],
    guide: [
      { q: "Would you use translation earbuds on a trip? In which situations would you trust them, and in which would you not?", follow: ["What could go wrong if a translation is slightly wrong?"] },
      { q: "The article says people will probably still learn languages. Do you agree? What can a person do in a language that a device cannot?", follow: [] },
      { q: "Apple processes translation on the phone, while Google's version works online. Which would you prefer, and why?", follow: ["What personal information might go through a translation tool?"] },
    ],
  }),

  makeExplainer({
    slug: "how-drones-deliver-packages",
    emoji: "🚁",
    variant: "tech",
    topicLabel: "Digital & Tech",
    title: "How Drones Deliver Packages, and Why Neighbors Complain",
    dek: "A drone can bring a small parcel to a backyard in minutes, but noise, weather and safety rules limit where it can fly.",
    plain: [
      "Some companies now use drones to bring small packages to homes. The drone flies high above the town. When it arrives, it stops in the air.",
      "Then it lowers the package on a long rope. The package comes down to the ground, and the rope goes back up.",
      "Drones are fast, but they are not perfect. They are noisy, and bad weather is a problem. They can carry only small things. Some neighbors do not like the sound.",
    ],
    polished: [
      "Delivery drones are small aircraft that carry a parcel from a store to a customer's home. Zipline's drone flies at about 300 feet, stops in the air and lowers a small device on a {{tether|noun|a rope or cable that keeps something attached}}. The device puts the package on the ground and goes back up.[1] Wing's drones use a similar tether, but they hover much lower, at about 25 feet.[2] The routes are planned automatically around weather, buildings and airspace rules.",
      "The system is fast, but it has limits. The parcels must be small. Wind and heavy rain can stop the flights. In the United States, rules generally still require a person to watch each flight, often from a distant control room.[3] Noise is another problem. In tests reported by Axios, Zipline's drone measured 79 {{decibels|noun|units used to measure how loud a sound is}}, Wing's 84 and Amazon's 88, measured from 50 feet.[2]",
      "These numbers matter because drone companies need the support of the people who live under the flight paths. A quick delivery is not much use if the neighbors find the sound annoying. For now, drones work best for light, urgent items, and the companies are still working to make them quieter.",
    ],
    precise: [
      "Delivery drones are compact aircraft that carry a parcel from a store to a customer's home. Zipline's drone cruises at roughly 300 feet, hovers and lowers a small unit on a {{tether|noun|a cable that keeps one object attached to another}}, which sets the package down and retracts.[1] Wing uses a comparable technique but hovers far lower, at about 25 feet.[2] Routes are generated automatically to account for weather, obstacles and airspace restrictions.",
      "The system is quick, yet it is hemmed in by constraints. Payloads must be small, and strong wind or heavy rain can ground the aircraft. In the United States, regulations still generally require a human to supervise each flight, often remotely.[3] Noise is a further {{obstacle|noun|something that makes progress difficult}}. In testing reported by Axios, Zipline's drone registered 79 {{decibels|noun|units that measure the loudness of sound}}, against 84 for Wing and 88 for Amazon, measured from 50 feet.[2]",
      "These figures matter because the industry depends on {{tolerance|noun|a willingness to accept something you do not like}} from the residents beneath its flight paths. A rapid delivery is of little value if neighbors resent the sound. For the moment, drones are best suited to light, urgent items, and companies are still working to make them quieter.",
    ],
    references: [
      { domain: "flyzipline.com", name: "Zipline Support", headline: "How does Zipline work?" },
      { domain: "axios.com", name: "Axios", headline: "Drone delivery's next challenge: Don't annoy the neighbors" },
      { domain: "scdigest.com", name: "Supply Chain Digest", headline: "Drone Delivery Gaining Traction" },
    ],
    guide: [
      { q: "Would you like drone deliveries in your neighborhood? What would you want to order this way?", follow: ["What would bother you most: the noise, the safety or the privacy?"] },
      { q: "The article says people must usually still watch every flight. Why do you think rules are strict for flying machines?", follow: [] },
      { q: "Which kinds of deliveries are best for drones, and which are not? Explain your choices.", follow: ["How would life change in a village far from big stores?"] },
    ],
  }),

  makeExplainer({
    slug: "how-bees-tell-each-other-where-food-is",
    emoji: "🐝",
    variant: "planet",
    topicLabel: "Nature & Science",
    title: "How Bees Tell Each Other Where the Flowers Are",
    dek: "A honeybee can dance a map on the wall of the hive, and scientists spent decades proving that it really works.",
    plain: [
      "Honeybees can tell other bees where to find food. They do it with a dance. The bee moves in a small circle and walks in a straight line while she shakes her body.",
      "The line shows the direction of the flowers. A longer shake means the flowers are farther away.",
      "A scientist named Karl von Frisch studied this dance. Later scientists tested it with a robot bee. Some scientists still ask if smell also helps.",
    ],
    polished: [
      "When a honeybee finds a good patch of flowers, she goes back to the hive and performs a dance to tell the other bees where it is. She walks in a straight line while shaking her body, then circles back and repeats. This is called the waggle dance.[1] The angle of the straight line shows the direction of the food in relation to the sun, and the length of the shaking shows the {{distance|noun|how far one place is from another}}: the longer the shake, the farther the flowers.[1][2]",
      "The Austrian scientist Karl von Frisch worked out the meaning of the dance, and in 1973 he won a Nobel Prize for it.[3] Later experiments supported his idea. In one, researchers used a mechanical bee to {{communicate|verb|to share information with someone}} a distance and direction to bees that had never visited the food.[2] In 2005, radar tracking showed that recruit bees really do fly in the direction the dance indicates.[2]",
      "Not everyone agrees on every detail. Von Frisch thought that bees measure distance by the energy they use, but later work suggests they judge it by how much the scenery moves past their eyes.[2] A few scientists even believe that smell alone guides the bees to the flowers.[2] Either way, the dance shows how a very small brain can pass on a surprisingly complex message.",
    ],
    precise: [
      "When a honeybee locates a rich patch of flowers, she returns to the hive and performs a {{choreographed|adjective|arranged as a planned series of movements}} routine to tell her nestmates where it lies. She runs in a straight line while {{vibrating|verb|moving quickly and steadily from side to side}} her body, loops back and repeats. This is the waggle dance.[1] The angle of the straight run, measured against the vertical, corresponds to the direction of the food relative to the sun, while the duration of the waggle encodes the distance: the longer the waggle, the farther the flowers.[1][2]",
      "The Austrian scientist Karl von Frisch deciphered the code and was awarded a Nobel Prize in 1973.[3] Later experiments largely confirmed his claims. In one, researchers used a mechanical \"robobee\" to convey a distance and direction to bees that had never visited the food source.[2] In 2005, radar tracking showed that recruits do fly in the direction the dance indicates.[2]",
      "Some details remain {{contested|adjective|argued about by people who disagree}}. Von Frisch believed that bees gauge distance by the energy they expend, but later work indicates that they judge it by how much of the landscape streams past their eyes.[2] A minority of scientists still argue that scent alone guides the recruits.[2] Either way, the dance demonstrates how a tiny brain can transmit a remarkably complex message.",
    ],
    references: [
      { domain: "content.ces.ncsu.edu", name: "NC State Extension", headline: "Honey Bee Dance Language" },
      { domain: "bee-craft.com", name: "Bee Craft", headline: "How Karl von Frisch deciphered the waggle dance" },
      { domain: "wpr.org", name: "Wisconsin Public Radio", headline: "Waggle Dancing with Karl von Frisch" },
    ],
    guide: [
      { q: "The bee's dance shares direction and distance. How would you explain a place to a friend without words?", follow: ["What would be hard to show without speaking?"] },
      { q: "Scientists tested the dance with a robot bee. Why is it important to test an idea in more than one way?", follow: [] },
      { q: "Some scientists still think smell matters more than the dance. How should we treat an idea that experts do not fully agree on?", follow: ["Can you give another example where scientists disagree?"] },
    ],
  }),

  makeExplainer({
    slug: "how-phones-warn-you-before-an-earthquake",
    emoji: "📳",
    variant: "planet",
    topicLabel: "Nature & Science",
    title: "How Your Phone Can Warn You Before an Earthquake Hits",
    dek: "Millions of phones act as tiny earthquake sensors, giving people a few precious seconds to drop, cover and hold on.",
    plain: [
      "Many phones can feel the ground shake. When an earthquake starts, the first small waves move fast. The strong waves come later.",
      "If many phones feel the first waves, a computer system sends an alert. People can get the message before the strong shaking arrives.",
      "The warning is very short. It can be a few seconds or about a minute. People close to the earthquake may get almost no warning.",
    ],
    polished: [
      "An earthquake sends out two kinds of waves. The first, called P-waves, are fast but usually weak. The second, called S-waves, are slower, and they cause most of the damage. Android's Earthquake Alerts system uses this gap in time. The {{accelerometers|noun|small sensors that measure movement}} inside millions of phones work like tiny seismometers, and if many phones in one area feel the first waves, a computer system decides that an earthquake has started and sends an alert.[1]",
      "The warning is short. In the Philippines in November 2023, the first alert for a magnitude 6.7 earthquake was sent 18.3 seconds after the quake began, and in Turkey in April 2025 it took eight seconds.[1] People who are far from the center can get up to a minute of warning, but people very close to it may receive only a second or two.[2] The system also has to {{balance|verb|to give the right amount of importance to two things}} speed and accuracy, because the first few seconds give very little data.[1]",
      "Even a few seconds can matter. They give people time to drop to the ground, take cover and hold on, or to stop a train or open a fire-station door. The system does not promise to warn about every earthquake, and it needs a data connection and location settings to be switched on. But it shows how ordinary phones can protect people.[2][3]",
    ],
    precise: [
      "An earthquake radiates two kinds of seismic waves. The first, P-waves, travel quickly but are usually weak; the slower S-waves cause most of the damage. Android's Earthquake Alerts system exploits that gap. The {{accelerometers|noun|motion sensors built into a device}} inside millions of phones function as a vast network of miniature seismometers, and when several devices in one area register the early waves, a central system concludes that a quake has begun and issues an alert.[1]",
      "The lead time is measured in seconds. For a magnitude 6.7 earthquake in the Philippines in November 2023, the first alert went out 18.3 seconds after the rupture began, and in Turkey in April 2025 it took eight seconds.[1] People far from the epicentre may receive up to a minute of notice, whereas those very close may have only a second or two.[2] Engineers must also {{reconcile|verb|to find a way to make two competing needs work together}} speed with accuracy, since the earliest seconds yield very little data, yet every second of delay is a second of warning lost.[1]",
      "Even a few seconds can be decisive. They allow people to drop, take cover and hold on, or let automated systems stop trains and open fire-station doors. The system cannot guarantee a warning for every quake, and it requires a data connection and enabled location settings. Nevertheless, it shows how everyday devices can be turned into a public safety network.[2][3]",
    ],
    references: [
      { domain: "research.google", name: "Google Research", headline: "Android Earthquake Alerts: A global system for early warning" },
      { domain: "preventionweb.net", name: "PreventionWeb", headline: "Android Earthquake Alerts: A global system for early warning" },
      { domain: "androidauthority.com", name: "Android Authority", headline: "Google's Android Earthquake Alerts system works well" },
    ],
    guide: [
      { q: "Would you want an earthquake alert on your phone, even if it sometimes arrives only a second before the shaking? Why or why not?", follow: ["What would you do in 10 seconds of warning?"] },
      { q: "The system has to choose between a fast alert and an accurate one. Which is more important, and why?", follow: ["What happens if an alert is sent by mistake?"] },
      { q: "Millions of ordinary phones become sensors in this system. What are the advantages and risks of using personal devices this way?", follow: [] },
    ],
  }),

  makeExplainer({
    slug: "why-phantom-traffic-jams-happen",
    emoji: "🚗",
    variant: "daily",
    topicLabel: "Daily Life",
    title: "Why Traffic Jams Appear Out of Nowhere",
    dek: "No accident, no roadworks, and still the cars stop. Scientists showed that one driver's small mistake can start a jam.",
    plain: [
      "Sometimes cars stop on a road, but there is no accident. This is called a phantom traffic jam.",
      "It can start with one driver. The driver brakes a little too hard. The driver behind brakes harder. The next driver brakes even harder. Soon the cars at the back have to stop.",
      "Scientists tested this with 22 cars on a circle. There were no problems on the road, but a jam still started.",
    ],
    polished: [
      "Everyone knows the feeling: you are driving on a busy road when the cars suddenly stop. You wait, you move slowly, and then the road is empty again, with no accident to explain it. These are called phantom traffic jams, and they can start with just one driver who brakes a little too hard in {{dense|adjective|with many things very close together}} traffic.[1]",
      "The reason is that each driver reacts after the one in front. If the first driver brakes, the second brakes a little harder to be safe, the third brakes harder still, and the slowdown travels backward along the road like a wave.[2] In 2008, a team led by Yuki Sugiyama at Nagoya University tested this idea. They asked 22 cars to drive around a circular track at an even speed. There were no lane changes, no signs and no roadworks, yet a jam still formed.[2][3]",
      "The study showed that jams do not always need a {{bottleneck|noun|a narrow place on a road that slows traffic down}}. Sometimes the traffic itself is the cause. Drivers cannot completely prevent this, but keeping a steady speed and a safe distance, and braking gently, can make the waves smaller. The next time you hit a jam with no reason, you may be inside one of these waves.",
    ],
    precise: [
      "Most motorists have experienced it: traffic on a busy road abruptly grinds to a halt, crawls forward and then dissolves, leaving no accident or obstruction to explain the delay. Such episodes are known as phantom traffic jams, and they can originate with a single driver who brakes slightly too hard in {{dense|adjective|packed closely together}} traffic.[1]",
      "The mechanism is a chain reaction. Each driver reacts to the one ahead, so a mild brake in the first car prompts a firmer brake in the second, a firmer one still in the third, and the disturbance travels backward as a wave.[2] In 2008, a team led by Yuki Sugiyama at Nagoya University put this idea to the test. They had 22 cars drive around a circular track at a steady speed, with no lane changes, no signs and no roadworks, and yet a jam still formed.[2][3]",
      "The experiment demonstrated that a jam does not always require a {{bottleneck|noun|a point on a road where traffic is forced to narrow and slow down}}; the traffic itself can be the cause. No individual can eliminate the effect, but keeping a steady speed and a generous gap and braking gently can {{dampen|verb|to make something weaker or less strong}} the waves. The next time you hit a jam for no apparent reason, you may simply be inside one of them.",
    ],
    references: [
      { domain: "scienceabc.com", name: "Science ABC", headline: "What Are Phantom Traffic Jams?" },
      { domain: "sciencedaily.com", name: "ScienceDaily", headline: "Traffic Jams Without Bottlenecks: Experimental Evidence for the Physical Mechanism of the Formation of a Jam" },
      { domain: "ir.library.osaka-u.ac.jp", name: "Osaka University Library", headline: "Traffic jams without bottlenecks, New Journal of Physics 10 033001" },
    ],
    guide: [
      { q: "Have you ever been stuck in a jam that suddenly disappeared? What did you think caused it?", follow: ["What did the drivers around you do?"] },
      { q: "The article says one small mistake can grow into a big problem. Can you think of another situation where this happens, at school, at work or online?", follow: [] },
      { q: "What could drivers, or cars themselves, do to reduce phantom jams? Would you accept a car that controls your speed?", follow: ["Who is responsible if the car makes a mistake?"] },
    ],
  }),

  makeExplainer({
    slug: "how-lab-grown-meat-is-made",
    emoji: "🥩",
    variant: "planet",
    topicLabel: "Nature & Science",
    title: "How Lab-Grown Meat Is Made, and Why It Is Still Hard to Find",
    dek: "Real meat can be grown from a few animal cells, but cost, energy and new laws stand between it and your plate.",
    plain: [
      "Lab-grown meat is real meat. It is not grown on a farm. Scientists take a few cells from an animal. They put the cells in a big tank with food for the cells. The cells grow into meat.",
      "In 2022, the United States approved lab-grown chicken for sale. Two companies could sell it in 2023.",
      "But this meat is still very expensive. Making it uses a lot of energy. Some places, like Florida and Alabama, do not allow it.",
    ],
    polished: [
      "Lab-grown meat, also called cultivated meat, is real animal meat that is made without raising and killing a whole animal. Scientists take cells from a living animal or a fertilized egg and store them. The cells are then placed in a large container called a {{bioreactor|noun|a large tank where living cells are grown}} and given nutrients such as amino acids, so they can multiply and form muscle and fat.[1][2]",
      "The idea is not new. The first lab-grown burger cost hundreds of thousands of dollars to produce.[3] Prices have fallen since then, although many of the lower figures are only projections from the companies themselves. In the United States, the FDA approved the first cultivated meat in November 2022, and in June 2023 the Department of Agriculture allowed two companies to sell their products.[3]",
      "Big questions remain. The process needs very careful control of temperature and oxygen, so it uses a lot of energy. A 2019 study from Oxford University found that its effect on the climate could be higher or lower than beef, depending on how it is made and what it is compared with.[2] The liquid food for the cells is also {{expensive|adjective|costing a lot of money}}. Meanwhile, some US states have moved against it: in 2024, Florida and Alabama banned the production and sale of cultivated meat.[3] Whether it reaches ordinary shops will depend on science, price and public opinion.",
    ],
    precise: [
      "Lab-grown meat, also called cultivated meat, is genuine animal tissue produced without raising and slaughtering a whole animal. Scientists take cells from a living animal or a fertilized egg and bank them. The cells are then placed in a {{bioreactor|noun|a vessel in which living cells are grown under controlled conditions}} and fed nutrients such as amino acids, which allows them to multiply and form muscle and fat.[1][2]",
      "The concept is not new. The first lab-grown burger cost hundreds of thousands of dollars to produce.[3] Costs have fallen since, although many of the lower figures are projections supplied by the companies themselves. In the United States, the FDA granted its first approval for cultivated meat in November 2022, and in June 2023 the Department of Agriculture permitted two firms to sell their products.[3]",
      "Significant questions remain. The process demands tight control of temperature and oxygen, which makes it highly energy-intensive. A 2019 Oxford study concluded that its climate impact could be either higher or lower than beef's, depending on how it is produced and what it is compared with.[2] The nutrient liquid that feeds the cells is also a major {{cost driver|noun|a factor that makes something much more expensive}}. Meanwhile, some US states have moved against the industry: in 2024, Florida and Alabama outlawed the production and sale of cultivated meat.[3] Whether it reaches ordinary shops will depend on science, price and public opinion.",
    ],
    references: [
      { domain: "pbs.org", name: "PBS NewsHour", headline: "How lab-grown meat is made and will people accept it" },
      { domain: "sciencefocus.com", name: "BBC Science Focus", headline: "What is lab-grown meat? How it's made, environmental impact and more" },
      { domain: "malaymail.com", name: "Malay Mail", headline: "US approves lab-grown chicken for sale" },
    ],
    guide: [
      { q: "Would you try lab-grown meat? What would make you more or less willing to eat it?", follow: ["Would the price or the label matter to you?"] },
      { q: "The article says the climate effect of lab-grown meat is not clear. How should a consumer decide when experts are not sure?", follow: [] },
      { q: "Some places have banned lab-grown meat. Do you think governments should allow it, ban it or let people decide? Explain.", follow: ["Who should check that it is safe to eat?"] },
    ],
  }),
];
