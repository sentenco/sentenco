// Just Talk B1-B2: the plan (5 stages, 33 modules, 99 lessons). Lesson boards live in justTalkB1Boards.js.
// Every lesson stands alone; each module keeps one theme. Stages 1-3 are B1, Stages 4-5 are B2.

export const B1_THEMES = {
 "body": "The Human Body",
 "mind": "The Mind",
 "animals": "Amazing Animals",
 "food": "Food Science and History",
 "planet": "Our Planet",
 "space": "Space",
 "tech": "Inventions and Technology",
 "history": "History's Surprises",
 "money": "Money and Shopping Secrets",
 "health": "Health Science",
 "culture": "Culture, Art and Sport"
};

export const B1_STAGES = [
 {
  "n": 1,
  "lv": "B1",
  "name": "Facts and everyday grammar",
  "about": "Present and past simple, comparatives, can, quantifiers: describing how things are.",
  "check": "Talk for 2 minutes about 3 facts you learned. Use present and past simple, comparatives and can.",
  "modules": [
   {
    "name": "Body Mysteries",
    "theme": "body",
    "lessons": [
     {
      "title": "Why We Yawn",
      "hook": "Yawning is contagious: even reading about it can make you yawn.",
      "grammar": "Present simple for facts: We yawn when we're tired."
     },
     {
      "title": "Why We Get Hiccups",
      "hook": "One man had hiccups for 68 years.",
      "grammar": "Past simple, regular and irregular: He started, he stopped, he had."
     },
     {
      "title": "How Much Water Is Inside You?",
      "hook": "About 60% of your body is water.",
      "grammar": "Quantifiers: much, many, a lot of, a little."
     }
    ]
   },
   {
    "name": "Animal Abilities",
    "theme": "animals",
    "lessons": [
     {
      "title": "Why Dogs Love Us",
      "hook": "A dog's brain reacts to its owner's smell like a reward.",
      "grammar": "Present simple with he / she / it: A dog wags its tail."
     },
     {
      "title": "Animals That Sleep Standing Up",
      "hook": "Horses sleep standing up, but they lie down to dream.",
      "grammar": "Can / can't: They can sleep standing, but they can't dream standing."
     },
     {
      "title": "The Smartest Birds",
      "hook": "Crows remember human faces for years.",
      "grammar": "Superlatives: the smartest, the cleverest."
     }
    ]
   },
   {
    "name": "Food Stories",
    "theme": "food",
    "lessons": [
     {
      "title": "The Story of Coffee",
      "hook": "Legend says a goat herder discovered coffee.",
      "grammar": "Past simple story with first, then, after that."
     },
     {
      "title": "Why Spicy Food Burns",
      "hook": "Chili doesn't burn you. It tricks your brain.",
      "grammar": "Sense verbs: It tastes, smells, feels + adjective."
     },
     {
      "title": "Breakfast Around the World",
      "hook": "In Japan, fish and rice are a normal breakfast.",
      "grammar": "While / but for contrast: In Japan..., while in Poland..."
     }
    ]
   },
   {
    "name": "Weather and Seasons",
    "theme": "planet",
    "lessons": [
     {
      "title": "How Lightning Works",
      "hook": "Lightning is hotter than the surface of the sun.",
      "grammar": "Comparatives: hotter than, more dangerous than."
     },
     {
      "title": "The World's Hottest and Coldest Places",
      "hook": "The coldest temperature ever measured was -89°C.",
      "grammar": "Superlatives: the hottest, the coldest, the driest."
     },
     {
      "title": "Why We Have Seasons",
      "hook": "Summer isn't because the Earth is closer to the sun.",
      "grammar": "Because / so: It's hot because..., so we..."
     }
    ]
   },
   {
    "name": "Long Ago",
    "theme": "history",
    "lessons": [
     {
      "title": "The First Olympic Games",
      "hook": "The first winners got olive leaves, not gold.",
      "grammar": "Past simple questions: Did they...? What did they win?"
     },
     {
      "title": "Telling Time Before Clocks",
      "hook": "People used the sun, water and candles to tell the time.",
      "grammar": "There was / there were: There were no clocks."
     },
     {
      "title": "Why Some Countries Drive on the Left",
      "hook": "Knights rode on the left to keep their sword hand free.",
      "grammar": "Past simple + to for a reason: They rode on the left to..."
     }
    ]
   },
   {
    "name": "Healthy Body",
    "theme": "health",
    "lessons": [
     {
      "title": "How Germs Spread",
      "hook": "Germs can live on your phone for days.",
      "grammar": "Can for possibility: Germs can travel, they can live..."
     },
     {
      "title": "Do We Need 8 Glasses of Water?",
      "hook": "Food gives you about 20% of your water.",
      "grammar": "Need to / don't need to."
     },
     {
      "title": "How Your Heart Works",
      "hook": "Your heart beats about 100,000 times a day.",
      "grammar": "How many / how often / how much questions."
     }
    ]
   }
  ]
 },
 {
  "n": 2,
  "lv": "B1",
  "name": "Rules, changes and the past",
  "about": "Passives, used to, must and should, will and might: explaining and predicting.",
  "check": "Explain one thing from this stage to a friend. Use the passive, used to, must and will.",
  "modules": [
   {
    "name": "Your Amazing Body",
    "theme": "body",
    "lessons": [
     {
      "title": "Why We Have Fingerprints",
      "hook": "Even identical twins have different fingerprints.",
      "grammar": "Present simple passive: Fingerprints are used to..."
     },
     {
      "title": "What Happens When We Sleep",
      "hook": "You spend about 26 years of your life asleep.",
      "grammar": "Zero conditional: If you don't sleep, your brain doesn't work well."
     },
     {
      "title": "Why We Blink",
      "hook": "You blink about 15,000 times a day.",
      "grammar": "Infinitive of purpose: We blink to clean our eyes."
     }
    ]
   },
   {
    "name": "Kitchen Science",
    "theme": "food",
    "lessons": [
     {
      "title": "Why Bread Goes Stale",
      "hook": "Stale bread isn't dry. Its starch changes.",
      "grammar": "Get + adjective: It gets hard, it gets old."
     },
     {
      "title": "Why Ice Cream Gives You Brain Freeze",
      "hook": "Brain freeze is your brain telling you to warm up.",
      "grammar": "Make + adjective: Cold food makes my head hurt."
     },
     {
      "title": "How Chewing Gum Was Invented",
      "hook": "People chewed tree resin 5,000 years ago.",
      "grammar": "Past simple passive: It was made from..., it was sold..."
     }
    ]
   },
   {
    "name": "Money Basics",
    "theme": "money",
    "lessons": [
     {
      "title": "The Story of Money",
      "hook": "People once paid with shells, salt and even cows.",
      "grammar": "Then and now: past simple vs present simple."
     },
     {
      "title": "Why Prices Go Up",
      "hook": "In 1950, a cup of coffee in the US cost about 10 cents.",
      "grammar": "Present continuous for change: Prices are going up."
     },
     {
      "title": "Tipping Around the World",
      "hook": "In Japan, a tip can be rude.",
      "grammar": "Should / shouldn't / have to."
     }
    ]
   },
   {
    "name": "Life in Space",
    "theme": "space",
    "lessons": [
     {
      "title": "What Astronauts Eat",
      "hook": "Bread isn't allowed in space: the crumbs float.",
      "grammar": "Must / mustn't / can't for rules."
     },
     {
      "title": "A Day on Mars",
      "hook": "A day on Mars is about 40 minutes longer than on Earth.",
      "grammar": "Will for predictions: People will..., it won't be easy."
     },
     {
      "title": "Why the Moon Changes Shape",
      "hook": "We always see the same side of the moon.",
      "grammar": "Might / may for possibility: There might be water there."
     }
    ]
   },
   {
    "name": "Feelings and Culture",
    "theme": "culture",
    "lessons": [
     {
      "title": "Greetings Around the World",
      "hook": "In some countries, people kiss three times to say hello.",
      "grammar": "It's polite / rude to + verb."
     },
     {
      "title": "Why Colors Change Our Mood",
      "hook": "Many fast-food logos are red and yellow. That's not random.",
      "grammar": "Make + someone + feel + adjective."
     },
     {
      "title": "Why Songs Get Stuck in Your Head",
      "hook": "Most people get a song stuck in their head every week.",
      "grammar": "Keep + -ing: I keep singing it."
     }
    ]
   },
   {
    "name": "Life Before",
    "theme": "history",
    "lessons": [
     {
      "title": "Life Before Fridges",
      "hook": "People kept ice in underground ice houses.",
      "grammar": "Used to: People used to buy ice every day."
     },
     {
      "title": "How Elevators Changed Cities",
      "hook": "Before elevators, the top floor was the cheapest.",
      "grammar": "Could / couldn't for past ability."
     },
     {
      "title": "Travel Before Planes",
      "hook": "In the early 1800s, crossing the Atlantic by sailing ship took about 6 weeks.",
      "grammar": "Had to / didn't have to."
     }
    ]
   }
  ]
 },
 {
  "n": 3,
  "lv": "B1",
  "name": "Experiences and imagination",
  "about": "Present perfect, first and second conditionals, relative clauses, past continuous: telling and imagining.",
  "check": "Tell an experience and imagine a what-if. Use the present perfect and the conditionals.",
  "modules": [
   {
    "name": "How Your Mind Works",
    "theme": "mind",
    "lessons": [
     {
      "title": "Why Habits Are Hard to Break",
      "hook": "It takes about 66 days to make a new habit.",
      "grammar": "Verb + -ing or to: stop eating, try to stop."
     },
     {
      "title": "Morning People and Night Owls",
      "hook": "Your sleep type is partly in your genes.",
      "grammar": "Prefer + -ing / would rather."
     },
     {
      "title": "Why We Laugh",
      "hook": "We laugh 30 times more with other people than alone.",
      "grammar": "-ed and -ing adjectives: amused / amusing, bored / boring."
     }
    ]
   },
   {
    "name": "Animal Secrets",
    "theme": "animals",
    "lessons": [
     {
      "title": "How Elephants Talk",
      "hook": "Elephants can hear through their feet.",
      "grammar": "Defining relative clauses: an animal that..., a sound which..."
     },
     {
      "title": "Why Zebras Have Stripes",
      "hook": "Stripes may keep flies away.",
      "grammar": "Present perfect: Scientists have found..., they have tested..."
     },
     {
      "title": "Why Cats Knock Things Over",
      "hook": "Cats often do it when they want your attention.",
      "grammar": "Want someone to + verb: It wants you to look."
     }
    ]
   },
   {
    "name": "Planet Puzzles",
    "theme": "planet",
    "lessons": [
     {
      "title": "Why the Sea Is Salty",
      "hook": "Rivers carry salt to the sea every day.",
      "grammar": "Time linkers: when, after, before, until."
     },
     {
      "title": "Why Ice Floats",
      "hook": "If ice sank, lakes would freeze from the bottom up.",
      "grammar": "Second conditional: If ice sank, fish would..."
     },
     {
      "title": "How Much Trash Is in the Ocean?",
      "hook": "The biggest patch of ocean trash is about three times the size of France.",
      "grammar": "Too much / too many / not enough."
     }
    ]
   },
   {
    "name": "Inventions",
    "theme": "tech",
    "lessons": [
     {
      "title": "Inventions Made by Accident",
      "hook": "The microwave was invented because of a melted chocolate bar.",
      "grammar": "Past continuous: He was working when..."
     },
     {
      "title": "How GPS Knows Where You Are",
      "hook": "Your phone listens to at least 4 satellites to find you.",
      "grammar": "As ... as / not as ... as."
     },
     {
      "title": "The Story of the Smartphone",
      "hook": "The first iPhone came out in 2007.",
      "grammar": "Present perfect with for / since: I've had my phone for..."
     }
    ]
   },
   {
    "name": "Healthy Habits",
    "theme": "health",
    "lessons": [
     {
      "title": "Is Breakfast Important?",
      "hook": "Scientists still don't agree about breakfast.",
      "grammar": "First conditional: If you skip breakfast, you'll..."
     },
     {
      "title": "Why Exercise Makes You Happy",
      "hook": "Exercise makes your brain release happy chemicals.",
      "grammar": "-ing as a subject: Running makes me..., Swimming is..."
     },
     {
      "title": "Why We Need Sunlight",
      "hook": "Your body makes vitamin D from sunlight.",
      "grammar": "Too + adjective / adjective + enough: too hot, warm enough."
     }
    ]
   }
  ]
 },
 {
  "n": 4,
  "lv": "B2",
  "name": "Explaining and arguing",
  "about": "Deduction, contrast, be used to, gerunds, future modals: discussing why things happen.",
  "check": "Explain why something happens and argue both sides. Use deduction, contrast and gerunds.",
  "modules": [
   {
    "name": "The Brain and the Body",
    "theme": "body",
    "lessons": [
     {
      "title": "How the Brain Makes Memories",
      "hook": "Every time you remember something, you change it a little.",
      "grammar": "Used to / would for past habits."
     },
     {
      "title": "Why We Get Goosebumps",
      "hook": "Goosebumps are left over from when humans had fur.",
      "grammar": "Non-defining relative clauses: Goosebumps, which..."
     },
     {
      "title": "Left-Handed or Right-Handed?",
      "hook": "About 10% of people are left-handed, in every country.",
      "grammar": "Indirect questions: Scientists don't know why..."
     }
    ]
   },
   {
    "name": "Food Debates",
    "theme": "food",
    "lessons": [
     {
      "title": "Why We Crave Sugar",
      "hook": "Our brains were built for a world with very little sugar.",
      "grammar": "Be used to / get used to."
     },
     {
      "title": "Is Organic Food Really Better?",
      "hook": "Organic doesn't always mean healthier.",
      "grammar": "However / whereas / on the other hand."
     },
     {
      "title": "Would You Eat Insects?",
      "hook": "About 2 billion people already eat insects.",
      "grammar": "Would you ever...? Hypothetical questions."
     }
    ]
   },
   {
    "name": "Planet Extremes",
    "theme": "planet",
    "lessons": [
     {
      "title": "Why Deserts Are Cold at Night",
      "hook": "The Sahara can drop below 0°C at night.",
      "grammar": "Even though: Even though it's hot all day..."
     },
     {
      "title": "Why Cities Are Getting Hotter",
      "hook": "A city can be 7°C hotter than the countryside.",
      "grammar": "Get + comparative and comparative: hotter and hotter."
     },
     {
      "title": "Why Some Places Never Rain",
      "hook": "Parts of the Atacama Desert have had no rain for hundreds of years.",
      "grammar": "Although / despite / in spite of."
     }
    ]
   },
   {
    "name": "Fear and First Impressions",
    "theme": "mind",
    "lessons": [
     {
      "title": "The Power of First Impressions",
      "hook": "People decide if they trust you in a tenth of a second.",
      "grammar": "Seem / appear + to: She seems to be..."
     },
     {
      "title": "Why We Fear the Wrong Things",
      "hook": "Mosquitoes kill far more people than sharks do.",
      "grammar": "Be more / less likely to."
     },
     {
      "title": "Why We Can't Put Our Phones Down",
      "hook": "People check their phones about 100 times a day.",
      "grammar": "Can't help + -ing / can't stop + -ing."
     }
    ]
   },
   {
    "name": "Space Questions",
    "theme": "space",
    "lessons": [
     {
      "title": "Is There Life Out There?",
      "hook": "There may be more planets than grains of sand on Earth.",
      "grammar": "Modals of deduction: There must be..., there can't be..."
     },
     {
      "title": "Space Junk",
      "hook": "More than 30,000 pieces of junk circle the Earth.",
      "grammar": "Present perfect passive: has been left, have been launched."
     },
     {
      "title": "Should We Spend Money on Space?",
      "hook": "The International Space Station cost over 150 billion dollars.",
      "grammar": "It's worth + -ing / it's a waste of."
     }
    ]
   },
   {
    "name": "Tech and Work",
    "theme": "tech",
    "lessons": [
     {
      "title": "Will Robots Take Our Jobs?",
      "hook": "Many jobs that exist now didn't exist 20 years ago.",
      "grammar": "Future modals: will have to, won't be able to."
     },
     {
      "title": "The Economics of Free Apps",
      "hook": "If you don't pay for it, you are the product.",
      "grammar": "Unless: Unless you pay..., they..."
     },
     {
      "title": "Your Phone Knows You",
      "hook": "Your phone knows where you've been and for how long.",
      "grammar": "Present perfect simple vs continuous."
     }
    ]
   },
   {
    "name": "Shopping Psychology",
    "theme": "money",
    "lessons": [
     {
      "title": "How Supermarkets Make You Spend More",
      "hook": "Milk is at the back of the shop for a reason.",
      "grammar": "Make / let / encourage someone to."
     },
     {
      "title": "Why We Buy Things We Don't Need",
      "hook": "Shopping can feel like a reward to your brain.",
      "grammar": "Gerunds after prepositions: instead of buying, without thinking."
     },
     {
      "title": "Cash or Cashless?",
      "hook": "Some shops no longer take cash at all.",
      "grammar": "No longer / not anymore / still."
     }
    ]
   },
   {
    "name": "Art and Emotion",
    "theme": "culture",
    "lessons": [
     {
      "title": "Why We Cry at Movies",
      "hook": "Your brain reacts to a sad movie like a real event.",
      "grammar": "I find it + adjective + to: I find it hard to..."
     },
     {
      "title": "Why Japanese Trains Are Never Late",
      "hook": "If a train leaves 20 seconds early, the company apologizes.",
      "grammar": "So ... that / such ... that."
     },
     {
      "title": "Is Graffiti Art?",
      "hook": "Some street art sells for millions of dollars.",
      "grammar": "Whether: It depends on whether..."
     }
    ]
   }
  ]
 },
 {
  "n": 5,
  "lv": "B2",
  "name": "Hypothesis and big ideas",
  "about": "Third and mixed conditionals, past modals, future perfect, passive reporting: debating and speculating.",
  "check": "Debate a big question for 3 minutes. Use the third conditional, past modals and the future perfect.",
  "modules": [
   {
    "name": "Animal Minds",
    "theme": "animals",
    "lessons": [
     {
      "title": "Can Animals Feel Guilt?",
      "hook": "That \"guilty\" dog face may just be fear.",
      "grammar": "Past deduction: must have, can't have, might have."
     },
     {
      "title": "Should We Bring Back Extinct Animals?",
      "hook": "Scientists are trying to bring back the woolly mammoth.",
      "grammar": "Mixed conditionals: If people hadn't hunted them, they would still be here."
     },
     {
      "title": "Animals That Use Tools",
      "hook": "Some octopuses carry coconut shells as portable homes.",
      "grammar": "Passive reporting: They have been seen..., it is believed that..."
     }
    ]
   },
   {
    "name": "History's Turning Points",
    "theme": "history",
    "lessons": [
     {
      "title": "The Real Story of the Titanic",
      "hook": "The Titanic had lifeboats for only half its passengers.",
      "grammar": "Third conditional: If they had..., it would have..."
     },
     {
      "title": "Why Rome Fell",
      "hook": "Rome didn't fall in a day. It took about 300 years.",
      "grammar": "Narrative tenses: past simple, continuous and perfect."
     },
     {
      "title": "Lost Cities",
      "hook": "Machu Picchu was hidden from the world for centuries.",
      "grammar": "It was believed that... / It is thought that..."
     }
    ]
   },
   {
    "name": "Living Longer",
    "theme": "health",
    "lessons": [
     {
      "title": "Can We Live to 150?",
      "hook": "The oldest person ever lived to 122.",
      "grammar": "Future perfect: By 2050, we will have..."
     },
     {
      "title": "Can You Train Your Brain?",
      "hook": "Learning a language changes the shape of your brain.",
      "grammar": "Present perfect continuous: Scientists have been studying..."
     },
     {
      "title": "The Placebo Effect",
      "hook": "Fake pills can work, even when you know they're fake.",
      "grammar": "Even if: Even if you know..., it can still..."
     }
    ]
   },
   {
    "name": "Why We Do What We Do",
    "theme": "mind",
    "lessons": [
     {
      "title": "Why We Procrastinate",
      "hook": "Procrastination is about feelings, not time.",
      "grammar": "Should have / shouldn't have."
     },
     {
      "title": "Why We Believe Fake News",
      "hook": "False news spreads about 6 times faster than true news.",
      "grammar": "Reported speech: They said that..., they told us..."
     },
     {
      "title": "The Bystander Effect",
      "hook": "The more people see an emergency, the less likely anyone is to help.",
      "grammar": "The more..., the more..."
     }
    ]
   },
   {
    "name": "Our Future in Space",
    "theme": "space",
    "lessons": [
     {
      "title": "How Big Is the Universe?",
      "hook": "Light from some stars left them before the dinosaurs lived.",
      "grammar": "Past perfect: The light had left..."
     },
     {
      "title": "Will We Live on Mars?",
      "hook": "Mars has dust storms that cover the whole planet.",
      "grammar": "Future continuous: People will be living..."
     },
     {
      "title": "Could an Asteroid Hit Earth?",
      "hook": "An asteroid wiped out the dinosaurs 66 million years ago.",
      "grammar": "Could have / might have: It could have hit..."
     }
    ]
   },
   {
    "name": "Tech That Changed Us",
    "theme": "tech",
    "lessons": [
     {
      "title": "Inventions That Changed Everything",
      "hook": "Without the printing press, most people couldn't read.",
      "grammar": "Without + noun conditionals: Without..., we wouldn't have..."
     },
     {
      "title": "How AI Learns",
      "hook": "An AI can read more in a day than you will in your lifetime.",
      "grammar": "Passive with modals: It can be trained, it should be checked."
     },
     {
      "title": "Who Invented the Internet?",
      "hook": "The first internet message was \"LO\". Then the computer crashed.",
      "grammar": "Participle clauses: Working together, scientists..."
     }
    ]
   },
   {
    "name": "Money and the Mind",
    "theme": "money",
    "lessons": [
     {
      "title": "The Psychology of Sales",
      "hook": "We want things more when there are only 2 left.",
      "grammar": "Wish / if only: I wish I hadn't bought it."
     },
     {
      "title": "Why Diamonds Cost So Much",
      "hook": "Diamonds aren't rare. Marketing made them expensive.",
      "grammar": "Passive with by: They were made popular by..."
     },
     {
      "title": "Does Money Buy Happiness?",
      "hook": "After a certain income, more money adds very little happiness.",
      "grammar": "Cleft sentences: It's not money that..., what matters is..."
     }
    ]
   },
   {
    "name": "Culture and Change",
    "theme": "culture",
    "lessons": [
     {
      "title": "Languages That Are Disappearing",
      "hook": "One language disappears about every two weeks.",
      "grammar": "Passive continuous: are being lost, is being taught."
     },
     {
      "title": "How Music Changes the Brain",
      "hook": "Playing an instrument works almost every part of the brain.",
      "grammar": "Not only ... but also."
     },
     {
      "title": "Why Some Songs Become Hits",
      "hook": "Most hit songs reach the chorus in under a minute.",
      "grammar": "It's said that / it's claimed that."
     }
    ]
   }
  ]
 }
];

export const b1Slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Flat list in course order: every lesson and each stage check-in, with module numbers 01-33.
export const B1_LESSONS = (() => {
  const list = [];
  let mod = 0;
  for (const st of B1_STAGES) {
    for (const m of st.modules) {
      mod += 1;
      m.lessons.forEach((l, i) => list.push({ key: b1Slug(l.title), stage: st.n, lv: st.lv, modNum: mod, module: m.name, theme: m.theme, n: i + 1, ...l }));
    }
    list.push({ key: `check-in-${st.n}`, stage: st.n, lv: st.lv, check: true, title: `Stage ${st.n} check-in`, hook: st.check });
  }
  return list;
})();
