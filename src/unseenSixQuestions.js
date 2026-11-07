// The standard six questions for every text, in this order: Main idea, Detail, Vocabulary, Reference, Not stated, Inference.
// Each is [kind, prompt, right answer, wrong, wrong, explanation, evidence]. Lessons listed here use these six questions
// instead of the questions in their data file (see unseenPartsBuild.js).

export const UNSEEN_SIX = {
 "1": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "A small van brings books to a village that has no library.",
    "A village council is trying to find a driver for a van.",
    "A school is starting a story hour for young children.",
    "The text describes a van that brings books to a village with no library.",
    "a small blue van stops in the main square of Little Brook, a village with no library"
   ],
   [
    "Detail",
    "How many books can a person borrow at one time?",
    "Four books.",
    "Two books.",
    "Thirty books.",
    "The text says anyone can borrow “up to four at a time”. Thirty is the number of children at the story hour, not books.",
    "anyone can borrow up to four at a time"
   ],
   [
    "Vocabulary",
    "In the text, “carries” means…",
    "holds and takes from place to place.",
    "reads aloud to listeners.",
    "sells for a small price.",
    "The van carries more than 2,000 books, so it holds the books and moves them from village to village.",
    "The van carries more than 2,000 books"
   ],
   [
    "Reference",
    "In the second paragraph, “them” in “So I bring the books to them” refers to…",
    "the children in the village.",
    "the books in the van.",
    "the people on the village council.",
    "Mrs Hall says that many children have no books at home, so she brings the books to them.",
    "So I bring the books to them"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people live in Little Brook.",
    "How many books the van carries.",
    "Who drives the van.",
    "The text does not say how many people live in the village. It gives the number of books and names the driver, Mrs Hall.",
    [
     "The van carries more than 2,000 books",
     "The driver, Mrs Hall"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about the story hour?",
    "It has become more popular over the year.",
    "Fewer children come now than at the start.",
    "Only adults are allowed to join it.",
    "At first only five children came, but now there are often thirty. So more children come than before.",
    "At first only five children came, but now there are often thirty."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Street libraries let neighbours share books for free.",
    "Street libraries are replacing big city libraries.",
    "Street libraries are only built in the United States.",
    "The text says that anyone can take or leave a book, and that it is free.",
    [
     "Anyone can take a book to read, and anyone can leave a book for others",
     "It is free"
    ]
   ],
   [
    "Detail",
    "Who can take a book from a street library?",
    "Anyone.",
    "Only the neighbours who built it.",
    "Only people who leave a book first.",
    "The text says that anyone can take a book to read, and anyone can leave one. Nobody asks for a name or for money.",
    "Anyone can take a book to read, and anyone can leave a book for others"
   ],
   [
    "Vocabulary",
    "In the text, “look after” means…",
    "take care of.",
    "look for.",
    "look at.",
    "The text says that neighbours build the street libraries and also look after them, so they take care of them.",
    "who also look after them"
   ],
   [
    "Reference",
    "In the first paragraph, “It” in “It looks like a tiny house” refers to…",
    "the small wooden box.",
    "the street corner.",
    "the glass door.",
    "The text first mentions a small wooden box on a street corner, and then says that it looks like a tiny house.",
    "It looks like a tiny house with a glass door"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much it costs to build a street library.",
    "Where the first street library appeared.",
    "What a street library looks like.",
    "The text does not say how much a street library costs. It does say where the first one appeared (the United States) and that it looks like a tiny house.",
    [
     "It looks like a tiny house with a glass door",
     "appeared in the United States in 2009"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about the number of street libraries since 2009?",
    "It has grown a lot.",
    "It has stayed the same.",
    "It has become smaller.",
    "The first one appeared in 2009, and today there are more than 150,000, so the number has grown a lot.",
    [
     "The first street library appeared in the United States in 2009",
     "Today there are more than 150,000 of them around the world"
    ]
   ]
  ]
 },
 "2": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Cities are hotter than nearby areas, for several reasons.",
    "Cities are cooler than the countryside at night.",
    "Cities should paint all of their roofs white to save energy.",
    "The text gives several causes, then some solutions. Trees are only one of the solutions listed.",
    [
     "Cities are usually several degrees warmer than the countryside around them",
     "some cities paint roofs white, plant trees along streets and create small parks"
    ]
   ],
   [
    "Detail",
    "According to the text, why can city centres stay hot after sunset?",
    "Dark roads and roofs release heat they absorbed earlier.",
    "Trees give out heat after dark.",
    "City centres get more sunlight than villages.",
    "Dark surfaces “release the heat slowly after sunset”. Nothing says trees give out heat, or that cities get more sun.",
    "Dark roads and roofs absorb sunlight during the day and release the heat slowly after sunset"
   ],
   [
    "Vocabulary",
    "In the text, “urban” means…",
    "connected with a city.",
    "connected with the sea.",
    "connected with the sun.",
    "The text calls the effect the urban heat island, and it is about cities that are warmer than the countryside.",
    "an effect known as the urban heat island"
   ],
   [
    "Reference",
    "In the second paragraph, “the problem” refers to…",
    "city centres being hotter than the countryside.",
    "the lack of parks in the villages nearby.",
    "the high cost of painting roofs white.",
    "The first paragraph explains the urban heat island: cities are warmer than the countryside. The second paragraph then gives ways to reduce this problem.",
    [
     "Cities are usually several degrees warmer than the countryside around them",
     "To reduce the problem"
    ]
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned as a cause of the urban heat island?",
    "Heavy traffic.",
    "Dark roads and roofs.",
    "Tall buildings that block the wind.",
    "The text never mentions traffic. The other two are both named as causes.",
    [
     "Dark roads and roofs",
     "Fewer trees make matters worse",
     "Tall buildings also block the wind"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a city with many parks and trees?",
    "It may stay cooler than a city with few of them.",
    "It will be hotter because of the grass.",
    "It will have no heat island at all.",
    "The text says that plants cool the air and that some cities plant trees and create parks to reduce the problem.",
    [
     "plants cool the air by releasing water vapour",
     "plant trees along streets and create small parks"
    ]
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Vertical farming has real benefits, but costs limit what it can grow.",
    "Vertical farming will soon replace all traditional farms.",
    "Vertical farming uses more water than traditional farming.",
    "The text gives the benefits (food all year, less water) and then the limit: electricity makes it expensive, so only light crops are grown. It does not say farms have been replaced or that it is cheaper.",
    [
     "vertical farming is not a perfect solution",
     "use a large amount of electricity"
    ]
   ],
   [
    "Detail",
    "How much less water can a vertical farm use than a traditional farm?",
    "Up to 90 percent less.",
    "About half as much.",
    "About 10 percent less.",
    "The text says that a vertical farm uses up to 90 percent less water than a traditional farm.",
    "uses up to 90 percent less water than a traditional farm"
   ],
   [
    "Vocabulary",
    "In the text, “traditional” means…",
    "usual and done in the old way.",
    "very modern and expensive.",
    "much larger than the others.",
    "A traditional farm is the usual kind, in a field, which the text compares with a vertical farm.",
    "than a traditional farm"
   ],
   [
    "Reference",
    "In the second paragraph, “which” in “which makes the food more expensive” refers to…",
    "the large amount of electricity that the farm uses.",
    "the climate of the region where the farm is.",
    "the price that people pay for food in the shops.",
    "The sentence says that the lights and climate control use a large amount of electricity, which makes the food more expensive.",
    "use a large amount of electricity, which makes the food more expensive to produce"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many vertical farms there are in the world.",
    "What replaces the sun in a vertical farm.",
    "Which crops most vertical farms grow today.",
    "The text does not say how many vertical farms exist. It says that LED lights replace the sun and that most farms grow leafy greens and herbs.",
    [
     "LED lights replace the sun",
     "most vertical farms currently grow leafy greens and herbs"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about the future of vertical farming?",
    "People disagree about whether the costs will fall.",
    "Everyone agrees that it will become cheap.",
    "Everyone agrees that it will end.",
    "The text says that supporters believe that costs will fall, but critics are not convinced.",
    "Supporters believe that costs will fall as technology improves, but critics are not convinced."
   ]
  ]
 },
 "3": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Vaccines train the body to recognise a germ and respond faster.",
    "Vaccines cure people who are already very ill.",
    "Vaccines make the body produce more germs.",
    "The text explains that a vaccine shows the body a harmless sample, so that it can respond much faster to the real germ.",
    [
     "When the body meets this sample, special white blood cells produce antibodies",
     "the body produces antibodies much faster than the first time"
    ]
   ],
   [
    "Detail",
    "According to the text, why can most vaccines not make a healthy person ill?",
    "They contain only a harmless piece or a weakened form of a germ.",
    "They are made from the antibodies of another person.",
    "They destroy the germ before it enters the body.",
    "The text says most vaccines contain “a harmless piece or a weakened form of a germ”. Nothing says they use other people’s antibodies or destroy the germ outside the body.",
    "Most vaccines contain a harmless piece or a weakened form of a germ, so they cannot make a healthy person ill."
   ],
   [
    "Vocabulary",
    "In the text, “renews” in “a booster renews it” means…",
    "makes strong again.",
    "removes completely.",
    "slowly weakens.",
    "The text says that protection can fade, and a booster renews it, so it makes the protection strong again.",
    "a booster renews it"
   ],
   [
    "Reference",
    "In the first paragraph, “this sample” refers to…",
    "the harmless piece or weakened form of the germ.",
    "the special white blood cells in the body.",
    "the antibodies that attach to the germ.",
    "“This sample” points back to the piece or weakened germ in the first sentence. The real germ only appears in the second paragraph.",
    [
     "When the body meets this sample",
     "Most vaccines contain a harmless piece or a weakened form of a germ"
    ]
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How long a vaccine takes to be made.",
    "What antibodies do to a germ.",
    "Why some vaccines need booster doses.",
    "The text does not say how long a vaccine takes to make. It explains what antibodies do and why boosters are needed.",
    [
     "proteins that attach to the germ and mark it for destruction",
     "protection can fade over time, and a booster renews it"
    ]
   ],
   [
    "Inference",
    "What can we conclude about a vaccinated person who meets the real germ?",
    "Their body is likely to respond faster than an unvaccinated person’s.",
    "They will never become ill from that germ.",
    "They will need a new vaccine for every meeting with the germ.",
    "The memory cells make the body react “much faster than the first time”. The text does not promise the person will never be ill.",
    "the memory cells recognise it at once and the body produces antibodies much faster than the first time"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Forgetting is natural, and it can be slowed down.",
    "People who forget are not trying hard enough.",
    "Nobody can improve their memory.",
    "The text says that forgetting is not always a failure and that it can be slowed down by reviewing and sleeping well.",
    [
     "Forgetting is not always a failure of memory",
     "Fortunately, forgetting can be slowed down"
    ]
   ],
   [
    "Detail",
    "What did Ebbinghaus find when he tested his own memory?",
    "He lost much of what he learned within a day, unless he reviewed it.",
    "He lost almost nothing, even when he did not review it at all.",
    "He lost all of it within a few minutes of learning it.",
    "That is what the text says. “Everything” and “most after a week” both go beyond it.",
    "a large part of what he had learned was lost within a day, unless he reviewed it"
   ],
   [
    "Vocabulary",
    "In the text, “intervals” means…",
    "periods of time between reviews.",
    "tests that last a long time.",
    "small mistakes in memory.",
    "“Increasing intervals” means longer and longer gaps between reviews: after one day, then a week, then a month.",
    "Reviewing material at increasing intervals, for example after one day, then a week, then a month"
   ],
   [
    "Reference",
    "In the second paragraph, “it” in “helps the brain treat it as important” refers to…",
    "the material that is reviewed.",
    "the brain.",
    "the forgetting curve.",
    "The sentence says that reviewing material at intervals helps the brain treat the material as important.",
    "Reviewing material at increasing intervals, for example after one day, then a week, then a month, helps the brain treat it as important"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many words Ebbinghaus used in his lists.",
    "What the forgetting curve is called.",
    "How sleep affects memories.",
    "The text does not say how many words Ebbinghaus used. It names the forgetting curve and says that memories are strengthened during sleep.",
    [
     "This pattern became known as the forgetting curve",
     "memories are strengthened during sleep"
    ]
   ],
   [
    "Inference",
    "What can we conclude about someone who reviews a lesson after one day, a week and a month?",
    "They are more likely to remember it.",
    "They will remember everything exactly.",
    "They will forget it faster.",
    "The text says that reviewing at increasing intervals helps the brain treat the material as important.",
    "Reviewing material at increasing intervals, for example after one day, then a week, then a month, helps the brain treat it as important"
   ]
  ]
 },
 "4": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Weather warnings come from data and models, and clear messages help people act.",
    "Weather forecasts are always right if enough computers are used.",
    "Warnings are sent only to people who live near the sea.",
    "The text explains how data and models lead to warnings, and that specific messages make it easier to decide what to do.",
    [
     "feed it into computer models that predict the weather several days ahead",
     "Warnings work best when they are specific"
    ]
   ],
   [
    "Detail",
    "Why do forecasters compare several computer models?",
    "No single model is always right.",
    "Each model only covers one country.",
    "Satellites cannot provide enough data.",
    "The text says “no single model is always right”, so forecasters compare several. Nothing says models cover one country or that data is missing.",
    "Forecasters compare several models, because no single model is always right."
   ],
   [
    "Vocabulary",
    "In the text, “alert” in “An early alert” means…",
    "a message that tells people to be ready.",
    "a place where storms begin.",
    "a computer model of the weather.",
    "The text says that an early alert means that danger is possible, so people should stay informed and prepare.",
    "An early alert means that danger is possible"
   ],
   [
    "Reference",
    "In the last sentence, “which” refers to…",
    "the fact that a specific message makes it easier to decide what to do.",
    "the fact that forecasters compare many different models.",
    "the fact that many services now send alerts to phones.",
    "“Which” refers to the whole idea before it: a specific message makes it easier to decide what to do. That is the reason many services send alerts to phones.",
    "makes it easier to decide what to do, which is why many services now send alerts directly to mobile phones"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "Warnings are only sent to people in big cities.",
    "Warnings can be issued in stages.",
    "Alerts can be sent straight to mobile phones.",
    "The text never says warnings go only to big cities. The other two are both stated.",
    [
     "many services issue warnings in stages",
     "many services now send alerts directly to mobile phones"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a message that only says “Bad weather tomorrow”?",
    "It would be less useful than a message naming the area and the time.",
    "It would be sent as a final warning.",
    "It would be more accurate than a detailed message.",
    "Warnings “work best when they are specific”, so a vague message is less useful. The text does not link vague messages to final warnings.",
    "Warnings work best when they are specific."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "A GPS receiver finds its position by timing signals from several satellites.",
    "GPS satellites listen to the signals that phones send them.",
    "GPS works best when the receiver is inside a large building.",
    "The text says that the receiver only listens, and that signals from three satellites let it work out its position.",
    [
     "It only listens",
     "With signals from three satellites, the receiver can work out its position"
    ]
   ],
   [
    "Detail",
    "What does a GPS receiver do with the satellites’ signals?",
    "It measures how long each one took to arrive.",
    "It sends a reply so the satellite can locate it.",
    "It compares them with signals from a phone mast.",
    "The receiver “never sends a signal” and only measures arrival time. Phone masts are not mentioned.",
    "The receiver measures how long each signal took to arrive."
   ],
   [
    "Vocabulary",
    "In the text, “broadcasts” means…",
    "sends out signals for anyone to receive.",
    "records and stores for later.",
    "blocks and hides from others.",
    "The text says that each satellite broadcasts its position and the exact time, so it sends out signals that a receiver can pick up.",
    "each one continuously broadcasts its position and the exact time"
   ],
   [
    "Reference",
    "In the second paragraph, “which” refers to…",
    "the receiver’s own clock.",
    "the fourth satellite.",
    "the position on the ground.",
    "“…errors in the receiver’s own clock, which is far less accurate…” The clock is what is less accurate.",
    "errors in the receiver’s own clock, which"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much a GPS receiver costs.",
    "How many satellites orbit the Earth.",
    "Why GPS can work poorly inside buildings.",
    "The text does not give the price of a receiver. It says that about thirty satellites orbit the Earth and that weak signals make GPS work poorly indoors.",
    [
     "About thirty satellites orbit the Earth",
     "Because the signals are weak, GPS often works poorly inside buildings"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about the clocks on satellites?",
    "They are more precise than clocks in receivers.",
    "They are cheaper than clocks in receivers.",
    "They are checked by phone companies.",
    "The receiver’s clock is “far less accurate than the clocks on the satellites”, so the satellites’ clocks are more precise.",
    "which is far less accurate than the clocks on the satellites"
   ]
  ]
 },
 "5": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Headphones can cancel steady noise with an opposite sound wave.",
    "Headphones block sound only with soft ear cushions.",
    "Headphones play music louder than the noise around you.",
    "The text explains that the headphones create a sound wave that is the opposite of the noise, which works best with steady, low sounds.",
    [
     "creates a new sound wave that is the exact opposite of the noise",
     "works best with steady, low sounds"
    ]
   ],
   [
    "Detail",
    "What do the microphones on the outside of the headphones do?",
    "They detect the ambient noise around the listener.",
    "They record the music that is playing.",
    "They connect the headphones to the aircraft.",
    "The microphones “detect the ambient noise around you”. Nothing says they record music or connect to an aircraft.",
    "Tiny microphones on the outside of the headphones detect the ambient noise around you"
   ],
   [
    "Vocabulary",
    "In the text, “cancel each other out” means…",
    "remove the effect of each other.",
    "become louder together.",
    "turn into another sound.",
    "The text says that when the two waves meet, they cancel each other out, so you hear much less of the original sound.",
    "they cancel each other out"
   ],
   [
    "Reference",
    "In the first paragraph, “they” in “they cancel each other out” refers to…",
    "the two sound waves.",
    "the microphones.",
    "the engine and the train.",
    "“When the two waves meet, they cancel each other out.” “They” is the two waves: the noise and the new sound the processor creates.",
    "When the two waves meet, they cancel each other out"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "Noise-cancelling headphones make music sound clearer.",
    "Some headphones have a mode that lets outside sound in.",
    "Active noise cancelling works best with steady, low sounds.",
    "The text never says the headphones make music clearer. The other two are both stated.",
    [
     "many models include a mode that lets outside sound in",
     "works best with steady, low sounds"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about the sound of a dog barking?",
    "The headphones would reduce it less well than the hum of an engine.",
    "The headphones would remove it better than the hum of an engine.",
    "The headphones would remove all of it, as they do engine noise.",
    "Noise cancelling is “far less effective against sudden or high noises, such as a voice or a dog barking”, so a barking dog is reduced less well than a steady hum.",
    "It is far less effective against sudden or high noises, such as a voice or a dog barking"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Loud sound can damage hearing for good, so listening habits matter.",
    "Hearing loss from noise happens only to older people.",
    "Phone settings can stop all damage to your hearing.",
    "The text explains that loud sound damages the ear, that damage depends on loudness and time, and that simple rules help.",
    [
     "Very loud sound can damage these cells",
     "how loud it is and how long you listen"
    ]
   ],
   [
    "Detail",
    "What happens when the hair cells in the ear are badly damaged?",
    "They do not grow back.",
    "They grow back after a few days.",
    "They turn into new kinds of cells.",
    "The text says that once the cells are gone, they do not grow back.",
    "once they are gone, they do not grow back"
   ],
   [
    "Vocabulary",
    "In the text, “harmful” means…",
    "causing damage.",
    "very loud.",
    "very expensive.",
    "The text says that listening at a high volume for several hours a day can be harmful, so it can cause damage.",
    "can be harmful"
   ],
   [
    "Reference",
    "In the first paragraph, “they” in “once they are gone” refers to…",
    "the hair cells.",
    "the sound waves.",
    "the signals for the brain.",
    "The sentence says that loud sound can damage these cells, and once they are gone they do not grow back.",
    "Very loud sound can damage these cells, and once they are gone, they do not grow back."
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people have lost their hearing.",
    "The two things that decide how much damage a sound causes.",
    "A simple rule about the volume of a phone.",
    "The text gives the two things (how loud and how long) and the 60 percent rule, but it gives no numbers of people.",
    [
     "how loud it is and how long you listen",
     "below 60 percent"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about listening at a high volume for hours?",
    "It can harm your hearing even if you feel fine at the time.",
    "It is safe as long as the music is slow and calm.",
    "It only harms people who already have hearing problems.",
    "The text says that it can be harmful, and that people often do not notice the loss until it is serious. So you may feel fine while the damage happens.",
    [
     "listening at a high volume for several hours a day can be harmful",
     "people often do not notice it until it is serious"
    ]
   ]
  ]
 },
 "6": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Face unlock builds a 3D map of the face, but it is not perfect.",
    "Face unlock takes a normal photograph of the face.",
    "Face unlock is used only on phones for children.",
    "The text explains that the phone builds a 3D map of the face and then says that the system is not perfect.",
    [
     "to build a 3D map of the face",
     "The system is not perfect, however."
    ]
   ],
   [
    "Detail",
    "Why can a flat photograph not unlock a phone that uses this system?",
    "Because a photo has no depth for the infrared dots to measure.",
    "Because the camera cannot see photographs of faces.",
    "Because the phone only opens for moving pictures.",
    "The dots show only a flat surface on a photo, so the phone refuses to open. Nothing in the text says that the camera cannot see photographs or that movement is needed.",
    "Because a flat photo has no depth, the dots show only a flat surface, and the phone refuses to open."
   ],
   [
    "Vocabulary",
    "In the last sentence, “fooled” means…",
    "tricked into making a mistake.",
    "made to work much faster.",
    "broken beyond repair.",
    "The text says that a mask reportedly fooled the system, which means that it tricked the system into unlocking the phone.",
    "a mask that cost about $150 reportedly fooled the system"
   ],
   [
    "Reference",
    "In the second paragraph, “these users” refers to…",
    "twins, similar brothers and sisters, and children under 13.",
    "people who already use a fingerprint reader.",
    "anyone who owns an iPhone.",
    "“These users” are the people just listed, for whom the chance of a wrong match is higher: twins, similar brothers and sisters, and children under 13.",
    "The chance is higher for twins, for brothers and sisters who look similar, and for children under 13"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "The phone sends the face data to a company server to be checked.",
    "The saved face data is kept in a protected chip.",
    "Twins could unlock each other’s phones in 2017 tests.",
    "The text says that the data is kept inside the phone and never says it is sent to a server. The other two are both stated.",
    [
     "kept in a protected chip inside the phone",
     "twins could unlock each other’s phones"
    ]
   ],
   [
    "Inference",
    "What can we understand about face unlock for a ten-year-old child?",
    "It may be less reliable than it is for an adult.",
    "It is more reliable than it is for an adult.",
    "It cannot be used at all by children.",
    "Apple advises children under 13 to use a passcode, which suggests that face unlock is less reliable for them. The text does not say that it never works.",
    "for children under 13, so Apple advises these users to use a passcode"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Tap payments use radio, and phone wallets add protection, but some risks remain.",
    "Tap payments are completely safe and have no risks at all.",
    "Tap payments work only when the card touches the machine.",
    "The text explains the radio link and the extra protection, and says that the risks are smaller but real.",
    [
     "talk over a short-range radio link called NFC",
     "The risks are smaller, but they are real."
    ]
   ],
   [
    "Detail",
    "What does a phone wallet send to the shop?",
    "A substitute code that is linked to one device.",
    "The real card number in a secret code.",
    "A photograph of the card.",
    "The wallet sends a token, a substitute code linked to one device, so the shop never sees the real number.",
    "a phone wallet sends a substitute code called a token, which is linked to one device"
   ],
   [
    "Vocabulary",
    "In the text, “short-range” means…",
    "able to reach only a small distance.",
    "very fast and powerful.",
    "paid for in advance.",
    "The text says that the card and the terminal must be only a few centimeters apart, so the link reaches only a small distance.",
    "a short-range radio link called NFC"
   ],
   [
    "Reference",
    "In the second paragraph, “which” in “which is linked to one device” refers to…",
    "the token.",
    "the real card number.",
    "the shop’s system.",
    "The sentence says that the phone sends a token, which is linked to one device.",
    "a substitute code called a token, which is linked to one device"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people use contactless payments.",
    "How far apart the card and the terminal must be.",
    "What a token is.",
    "The text does not give a number of users. It says that the card and the terminal must be a few centimeters apart and that a token is a substitute code.",
    [
     "The two must be only a few centimeters apart",
     "a substitute code called a token"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a lost contactless card?",
    "It could be used for small purchases without a PIN.",
    "It cannot be used by anyone else.",
    "It is automatically blocked at once.",
    "The text says that a lost card could be used for small purchases until the limit is reached.",
    "a lost card could be used for small purchases until the limit is reached"
   ]
  ]
 },
 "7": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "A QR code has repair data, so it can often be read when damaged.",
    "QR codes were invented to be used only in shops.",
    "QR codes cannot be read if they are turned around.",
    "The text says that the pattern contains extra repair data and that how much damage a code survives depends on where the damage is.",
    [
     "The pattern also contains extra repair data",
     "How much damage a code can survive depends on where the damage is"
    ]
   ],
   [
    "Detail",
    "Why did Denso Wave invent the QR code?",
    "To track car parts in factories.",
    "To replace the telephone.",
    "To print tickets for trains.",
    "The text says it was invented “to track car parts in factories”.",
    "to track car parts in factories"
   ],
   [
    "Vocabulary",
    "In the text, “track” in “to track car parts” means…",
    "to follow and record where something is.",
    "to repair something that is broken.",
    "to paint something a new color.",
    "The QR code was invented to track car parts in factories, so that the company could follow and record where the parts were.",
    "to track car parts in factories"
   ],
   [
    "Reference",
    "In the first paragraph, “which” in “which tell the scanner the size and the direction” refers to…",
    "the large squares.",
    "the factories.",
    "the car parts.",
    "The sentence says that three corners have large squares, which tell the scanner the size and direction of the code.",
    "have large squares, which tell the scanner the size and the direction of the code"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "QR codes were first used to pay in shops.",
    "QR codes can hold more information than ordinary barcodes.",
    "The strongest setting can restore about 30 percent of the code.",
    "The text says that QR codes were invented to track car parts, and never says they were first used in shops. The other two are stated.",
    [
     "It could hold much more information than an ordinary barcode.",
     "can restore about 30 percent of the code"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a sticker on a QR code?",
    "It can be a problem if it covers the corner squares.",
    "It is always harmless if it covers less than a third.",
    "It makes the code easier to read.",
    "A sticker over the large corner squares can make a code unreadable long before a third of it is hidden.",
    "a sticker that covers the large corner squares can make a code unreadable"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main point of the text?",
    "Wireless charging is convenient but wastes some energy.",
    "Cables are not allowed in some countries.",
    "Magnets can charge a phone without coils.",
    "The text explains how the charger works, and then says that some energy is lost as heat.",
    [
     "The method is convenient, but it wastes some energy as heat",
     "How much is lost depends on how well the phone sits on the charger"
    ]
   ],
   [
    "Detail",
    "How does energy travel from the charger to the phone?",
    "Through a changing magnetic field between two coils.",
    "Through a thin cable inside the table.",
    "Through a radio signal from the battery.",
    "The charger’s coil creates a changing magnetic field, and the phone’s coil picks it up.",
    "The coil in the charger carries a changing current, which creates a changing magnetic field."
   ],
   [
    "Vocabulary",
    "In the text, “lined up” means…",
    "placed in the correct position.",
    "connected by a cable.",
    "switched off for a while.",
    "The text says that charging is less efficient if the coils are not lined up, so they must be placed in the correct position.",
    "if the coils are not lined up"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “the field creates a current in it” refers to…",
    "the coil inside the phone.",
    "the charger.",
    "the battery.",
    "The sentence says that the coil inside the phone picks up the field, and the field creates a current in it.",
    "the field creates a current in it"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How long a phone takes to charge.",
    "What a wireless charger uses to carry energy.",
    "What Qi2 uses to hold the phone in place.",
    "The text does not say how long charging takes. It mentions the two copper coils and the magnets in Qi2.",
    [
     "two coils of copper wire",
     "Qi2, uses magnets that pull the phone into the right position"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a phone that is placed badly on the charger?",
    "It will charge less efficiently.",
    "It will not charge at all.",
    "It will charge faster than usual.",
    "The text says that if the coils are not lined up, charging is less efficient.",
    "if the coils are not lined up, charging is less efficient"
   ]
  ]
 },
 "8": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "English captions can help learners, but the research is not simple.",
    "Learners should never use captions or subtitles.",
    "Subtitles in a learner’s first language are always best.",
    "The text says that learners with English captions learned more words, but the research is not simple.",
    [
     "learners who watched with English captions gained more knowledge of words",
     "The research is not simple, however."
    ]
   ],
   [
    "Detail",
    "What did learners who watched with English captions learn more about?",
    "Words, including their pronunciation and spelling.",
    "Grammar rules in their first language.",
    "The names of the actors.",
    "The study found that these learners gained more knowledge of words, including pronunciation and spelling.",
    "gained more knowledge of words, including their pronunciation and spelling"
   ],
   [
    "Vocabulary",
    "In the text, “factors” means…",
    "things that influence a result.",
    "people who study a subject.",
    "parts of a film.",
    "The text says that the benefit depends on factors such as how many words the learner already knows, so they are things that influence the result.",
    "depends on factors such as how many words the learner already knows"
   ],
   [
    "Reference",
    "In the last sentence, “them” in “without them” refers to…",
    "captions.",
    "learners.",
    "scenes.",
    "The sensible plan is to watch with captions first and then watch again without the captions.",
    "watch a scene with captions, then watch it again without them"
   ],
   [
    "Not stated",
    "Which of these is NOT true according to the text?",
    "Specially highlighted captions are clearly better than ordinary ones.",
    "Captions show the words that you hear.",
    "The benefit depends on how many words the learner already knows.",
    "The text says that one review found no clear advantage for highlighted captions. The other two statements are true.",
    [
     "one review found no clear advantage for specially highlighted captions over ordinary ones",
     "show you the words that you hear"
    ]
   ],
   [
    "Inference",
    "Why does the writer suggest watching a scene twice?",
    "To use captions for support first, then practice listening alone.",
    "To check the spelling of every word in the series.",
    "To make the series last longer on the screen.",
    "The writer warns that learners may read instead of listening, so the second viewing, without captions, practices listening.",
    "There is also a risk that learners read instead of listening."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Podcasts have become very popular, but the figures must be read carefully.",
    "Podcasts are now more popular than television in every country.",
    "Podcasts are no longer popular with young people.",
    "The text shows how the audience has grown and then says that the figures need careful reading.",
    [
     "Surveys by Edison Research in the United States show how quickly the audience has grown",
     "These figures need careful reading."
    ]
   ],
   [
    "Detail",
    "What percentage of people aged 12 and over listened to podcasts every month in 2024?",
    "47 percent.",
    "37 percent.",
    "80 percent.",
    "The text gives 37 percent for 2020, 47 percent for 2024 and 80 percent for the 2026 survey of people who had ever listened or watched.",
    "By 2024, the figure was 47 percent"
   ],
   [
    "Vocabulary",
    "In the text, “audience” means…",
    "the group of people who listen to or watch something.",
    "the company that makes a show for the radio.",
    "the place where a show is recorded each week.",
    "The audience has grown, so it means the people who listen to or watch podcasts.",
    "show how quickly the audience has grown"
   ],
   [
    "Reference",
    "In the second paragraph, “They” in “They come from surveys in one country” refers to…",
    "the figures.",
    "the podcasts.",
    "the Americans.",
    "The previous sentence says that the figures need careful reading, and then they come from surveys in one country.",
    "These figures need careful reading. They come from surveys in one country"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "Which podcast topic is the most popular.",
    "How many people listened to podcasts in 2024.",
    "Which groups of listeners were growing fastest.",
    "The text does not say which topic is the most popular. It gives the number of listeners in 2024 and says that women and older listeners were growing fastest.",
    [
     "about 135 million people",
     "growing fastest among women and older listeners"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about the number of podcast listeners in the United States?",
    "It has grown quickly in recent years.",
    "It has fallen since 2020.",
    "It has stayed the same for many years.",
    "The text gives 37 percent in 2020 and 47 percent in 2024, so the number has grown quickly.",
    [
     "In 2020, 37 percent of people aged 12 and over listened to podcasts every month",
     "By 2024, the figure was 47 percent"
    ]
   ]
  ]
 }
};
