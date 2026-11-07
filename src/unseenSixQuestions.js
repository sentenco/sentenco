// The standard six questions for every text, in this order: Detail, Vocabulary, Reference, Not stated, Inference, Main idea.
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
 },
 "9": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Apps choose what you see by recommendation, and some people worry about it.",
    "Apps show exactly the same rows of shows to every user.",
    "Apps choose shows only by the year in which they were made.",
    "The text explains that a recommendation system chooses shows for you, and that critics worry about an echo chamber.",
    [
     "A recommendation system chooses them for you",
     "Critics worry that this can trap viewers in an echo chamber"
    ]
   ],
   [
    "Detail",
    "By 2017, how much of what people watched came from recommendations?",
    "Nearly 80 percent.",
    "About 25 percent.",
    "Exactly 50 percent.",
    "The text says that in 2017 a company executive put the figure near 80 percent.",
    "in 2017 a company executive put the figure near 80 percent"
   ],
   [
    "Vocabulary",
    "In the text, an “echo chamber” is a place where…",
    "you only see more of the same things.",
    "you hear loud sounds from far away.",
    "you can see every kind of show.",
    "The text says that viewers in an echo chamber only see more of the same.",
    "an echo chamber, where they only see more of the same"
   ],
   [
    "Reference",
    "In the last sentence, “this” refers to…",
    "being trapped in an echo chamber.",
    "the director of a show.",
    "the number of viewers.",
    "Netflix says it adds variety to avoid the echo chamber described in the sentence before.",
    "Critics worry that this can trap viewers in an echo chamber"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much a Netflix subscription costs.",
    "What the system looks at besides viewing habits.",
    "What critics worry about.",
    "The text does not give a price. It names the other information (ratings, year, director) and the critics’ worry about an echo chamber.",
    [
     "such as their ratings, the year they were made and the director",
     "Critics worry that this can trap viewers in an echo chamber"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about Netflix’s claim?",
    "It has not been checked by outside researchers.",
    "It has been proved wrong by new tests.",
    "It is only about older shows on the service.",
    "Outside researchers have not confirmed how well the variety works, so the claim is not independently checked.",
    "outside researchers have not confirmed how well that works"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main point of the text?",
    "Streaks can help people practice, but they do not prove skill.",
    "Streaks are not allowed in most schools or classes.",
    "Apps should remove every number from their lessons.",
    "The text says that a streak measures practice, not skill.",
    "a streak measures practice, not skill"
   ],
   [
    "Detail",
    "What happens to a streak if you miss a day?",
    "It falls back to zero.",
    "It doubles.",
    "It stays the same.",
    "The text says that the number falls back to zero.",
    "If you miss a day, the number falls back to zero."
   ],
   [
    "Vocabulary",
    "In the text, “regularly” means…",
    "often and at similar times.",
    "very quickly.",
    "only at weekends.",
    "Features like streaks help learners practice again and again, so “regularly” means often and at similar times.",
    "practice more regularly"
   ],
   [
    "Reference",
    "In the second paragraph, “they” in “when they lost a streak” refers to…",
    "some learners.",
    "the apps.",
    "the days in a row.",
    "The sentence says that some learners felt frustrated when they lost a streak.",
    "some learners felt frustrated when they lost a streak"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people use language apps.",
    "What happens when you miss a day.",
    "What a streak measures.",
    "The text does not say how many people use language apps. It explains what happens when you miss a day and what a streak measures.",
    [
     "If you miss a day, the number falls back to zero",
     "a streak measures practice, not skill"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a very long streak?",
    "It does not show how well the learner can speak.",
    "It proves that the learner is fluent.",
    "It makes the learner feel less pressure.",
    "The text says that a streak measures practice, not skill, and that it cannot tell you whether you can hold a conversation.",
    [
     "a streak measures practice, not skill",
     "a streak cannot tell you whether you can hold a conversation"
    ]
   ]
  ]
 },
 "10": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Delivery drones lower parcels from the air, but noise and rules are problems.",
    "Delivery drones always land at the door of the customer.",
    "Delivery drones are quiet and need no human control.",
    "The text says that drones do not usually land, and then describes the noise and the rules.",
    [
     "A delivery drone does not usually land at your door",
     "The noise can be a problem"
    ]
   ],
   [
    "Detail",
    "How does Zipline’s drone deliver the parcel?",
    "It lowers a small device on a tether.",
    "It lands on the roof of the house.",
    "It throws the parcel from the air.",
    "The text says that the drone lowers a small device on a tether, which puts the parcel on the ground.",
    "lowers a small device on a tether"
   ],
   [
    "Vocabulary",
    "In the text, “distant” means…",
    "far away.",
    "very noisy.",
    "very small.",
    "The text says that a person often watches each flight from a distant control room, so the room is far away.",
    "often from a distant control room"
   ],
   [
    "Reference",
    "In the second paragraph, “all” in “all from 50 feet away” refers to…",
    "the three noise measurements.",
    "the three company offices.",
    "the parcels that the drones carry.",
    "The sentence gives three noise measurements, and all of them were taken from 50 feet away.",
    "Zipline’s drone measured 79 decibels, Wing’s 84 and Amazon’s 88, all from 50 feet away"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "Drones always deliver a parcel in less than ten minutes.",
    "A person usually has to watch each flight.",
    "The drones were tested for noise.",
    "The text never gives a delivery time. The other two are stated.",
    [
     "require a person to watch each flight",
     "In tests reported by Axios"
    ]
   ],
   [
    "Inference",
    "Why might neighbors complain about delivery drones?",
    "The noise can be a problem.",
    "The drones are too slow.",
    "The parcels are too big.",
    "The second paragraph begins with the noise problem and gives decibel measurements.",
    "The noise can be a problem."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Bikes pile up in some places, and companies try to move them.",
    "Riders must return bikes to the same station.",
    "Bike sharing is used only by people in New York.",
    "The text explains that bikes pile up where trips end and that companies move them or reward riders who do.",
    [
     "The problem is that people do not travel evenly",
     "To fix it, companies move bikes in vans from crowded areas to empty ones"
    ]
   ],
   [
    "Detail",
    "What does the Bike Angels program give riders?",
    "Free rides and points.",
    "A new bike.",
    "A job.",
    "The text says that it gives free rides and points to riders who bring bikes where they are needed.",
    "gives free rides and points"
   ],
   [
    "Vocabulary",
    "In the text, “pile up” means…",
    "gather in one place in large numbers.",
    "get broken and thrown away.",
    "move faster than usual.",
    "The text says that the bikes pile up where trips end, so many of them gather in one place.",
    "the bikes pile up where trips end"
   ],
   [
    "Reference",
    "In the second paragraph, “it” in “To fix it” refers to…",
    "the imbalance of bikes.",
    "the system of vans.",
    "the program in New York.",
    "The first paragraph ends by calling the problem an imbalance, and the second paragraph begins with how to fix it.",
    "To fix it, companies move bikes in vans"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many bikes a van can carry.",
    "What companies do with vans.",
    "When the Bike Angels program started.",
    "The text does not say how many bikes fit in a van. It says that vans move bikes to empty areas and that the program started in 2018.",
    [
     "companies move bikes in vans from crowded areas to empty ones",
     "which started in 2018"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about the Bike Angels program?",
    "It encourages riders to take bikes to places that need them.",
    "It makes riders pay when they leave a bike.",
    "It makes riders return bikes to the same station.",
    "The text says that some companies reward riders who take a bike to a place where it is needed, and gives Bike Angels as an example.",
    "Some also reward riders who take a bike to a place where it is needed"
   ]
  ]
 },
 "11": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "A printer can build the walls of a house, but it cost more than expected.",
    "A printer can build a whole house, including the roof and windows.",
    "A printer builds houses cheaper and faster than workers.",
    "The text says that the printer makes only the walls and that the real costs were higher than the hopes.",
    [
     "The printer makes only the walls",
     "the real costs were higher"
    ]
   ],
   [
    "Detail",
    "What does the Vulcan printer lay down?",
    "A special concrete mix in thin layers.",
    "Wooden boards that are nailed together.",
    "Metal pipes that are welded together.",
    "The text says that it lays a special concrete mix in strands about an inch thick.",
    "lays a special concrete mix in strands about an inch thick"
   ],
   [
    "Vocabulary",
    "In the text, “pushes out” means…",
    "presses and sends out.",
    "removes and throws away.",
    "holds back and stores.",
    "The printer pushes out concrete in thin layers, so it presses the concrete out through an opening.",
    "pushes out concrete in thin layers"
   ],
   [
    "Reference",
    "In the second paragraph, “its backers” are…",
    "the people who supported the project with money or ideas.",
    "the workers who laid the concrete for the walls.",
    "the neighbors who live next to the house.",
    "“Backers” are the people who supported the project, and they expected a lower cost and a shorter time.",
    "cost more than double what its backers expected"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people live in Georgetown.",
    "Which parts of the house are added in the usual way.",
    "Where ICON started printing a neighborhood.",
    "The text does not give the number of people in Georgetown. It names the parts that are added later and says that the neighborhood is in Georgetown, Texas.",
    [
     "The roof, windows, wiring and plumbing are still added in the usual way",
     "in Georgetown, Texas, in 2022"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about the company?",
    "It still believed in the technology.",
    "Its first home was a complete success.",
    "It stopped the project.",
    "The company started printing walls for a neighborhood of 100 homes, so it continued to believe in the idea.",
    "ICON started printing the walls for a neighborhood of 100 homes in Georgetown, Texas, in 2022."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Libraries of things lend objects, which saves money but brings new problems.",
    "Libraries of things sell tools to people at a low price.",
    "Libraries of things lend only books and cake pans.",
    "The text explains what a library of things is and then says that lending objects is harder than lending books.",
    [
     "A library of things lends objects instead of, or as well as, books",
     "Lending objects is harder than lending books"
    ]
   ],
   [
    "Detail",
    "What do you need to borrow an item from a library of things?",
    "A library card.",
    "A special license.",
    "A letter from a teacher.",
    "The text says that you borrow with a library card.",
    "with a library card"
   ],
   [
    "Vocabulary",
    "In the text, “replace” means…",
    "to put a new thing where an old one was.",
    "to throw something away completely.",
    "to repair something with glue and tape.",
    "A missing part that is easy to replace can be exchanged for a new one.",
    "each missing part that is easy to replace"
   ],
   [
    "Reference",
    "In the first paragraph, “them” in “bring them back by a set date” refers to…",
    "the objects that were borrowed.",
    "the library cards.",
    "the libraries.",
    "The sentence says that you can borrow objects and bring them back by a set date.",
    "bring them back by a set date"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many libraries of things exist.",
    "What the borrower needs to borrow an item.",
    "How a library charges for a missing part.",
    "The text does not say how many libraries of things exist. It says that a library card is needed and gives the charge for a missing part.",
    [
     "with a library card",
     "One library charges $1.00 for each missing part that is easy to replace"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a household that needs a ladder once a year?",
    "It could borrow one instead of buying one.",
    "It must buy one from the library.",
    "It should borrow one every single day.",
    "The text says that a household may need expensive tools only once or twice, which makes lending a good idea.",
    "a household may need them only once or twice, which makes lending a good idea"
   ]
  ]
 },
 "12": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Phones can detect an earthquake and send a very short warning.",
    "Phones can predict earthquakes many hours ahead.",
    "Phones can stop an earthquake from damaging buildings.",
    "The text explains how phone sensors detect the first waves and says that the warning is very short.",
    [
     "The motion sensors inside millions of phones work like tiny seismometers",
     "The warning is very short."
    ]
   ],
   [
    "Detail",
    "Which waves cause most of the damage?",
    "S-waves.",
    "P-waves.",
    "Radio waves.",
    "The text says that S-waves are slower and cause most of the damage.",
    "The second, S-waves, are slower and cause most of the damage."
   ],
   [
    "Vocabulary",
    "In the text, “gap” means…",
    "a difference in time between two things.",
    "a hole or crack in the ground.",
    "a sudden loud noise in the sky.",
    "The system uses the gap between the two kinds of waves, which means the time between their arrivals.",
    "uses the gap between them"
   ],
   [
    "Reference",
    "In the first paragraph, “them” in “the gap between them” refers to…",
    "the two kinds of waves.",
    "the two earthquakes.",
    "the millions of phones.",
    "The sentence names P-waves and S-waves and then says that the system uses the gap between them.",
    "Android’s Earthquake Alerts system uses the gap between them"
   ],
   [
    "Not stated",
    "Which of these is NOT true according to the text?",
    "People very close to the center get a long warning.",
    "The first alert in the Philippines came after 18.3 seconds.",
    "The motion sensors in phones work like tiny seismometers.",
    "The text says that people very close may get only a second or two. The other two statements are true.",
    [
     "people very close may get only a second or two",
     "work like tiny seismometers"
    ]
   ],
   [
    "Inference",
    "What can we understand about the system?",
    "Its warnings are short, so people must react quickly.",
    "It can predict earthquakes a week ahead.",
    "It works only in the Philippines.",
    "The warning is very short, so the time to react is only seconds.",
    "The warning is very short."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Traffic jams can start with no accident, because of how drivers react.",
    "Traffic jams are always caused by accidents or roadworks.",
    "Traffic jams can be avoided by driving much faster.",
    "The text says that a jam can start when one driver brakes too hard, and the study showed that traffic itself can be the cause.",
    [
     "with no accident to explain it",
     "sometimes the traffic itself is the cause"
    ]
   ],
   [
    "Detail",
    "What was missing from the test track?",
    "Lane changes, signs and roadworks.",
    "Cars that drive at an even speed.",
    "Drivers who brake too hard.",
    "There were no lane changes, no signs and no roadworks, but a jam still formed.",
    "There were no lane changes, no signs and no roadworks"
   ],
   [
    "Vocabulary",
    "In the text, “bottleneck” means…",
    "a narrow place that slows traffic down.",
    "a kind of tall glass container for liquids.",
    "a fast road without any traffic lights.",
    "The study showed that a jam can form without a bottleneck, a narrow place that slows traffic.",
    "a jam does not always need a bottleneck"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “with no accident to explain it” refers to…",
    "the sudden stop in traffic.",
    "the empty road.",
    "the driver behind.",
    "The sentence says that traffic suddenly stops, with no accident to explain it.",
    "with no accident to explain it"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How long the test lasted.",
    "How many cars took part in the test.",
    "Where the study was done.",
    "The text does not say how long the test lasted. It gives the number of cars and the university where the team worked.",
    [
     "They asked 22 cars to drive around a circular track",
     "a team led by Yuki Sugiyama at Nagoya University"
    ]
   ],
   [
    "Inference",
    "What can we conclude from the experiment on the circular track?",
    "A jam can form even when nothing blocks the road.",
    "A jam needs a driver who makes a mistake on purpose.",
    "A jam can form only where there are traffic signs.",
    "The text says that there were no lane changes, no signs and no roadworks, yet a jam still formed.",
    "There were no lane changes, no signs and no roadworks, yet a jam still formed."
   ]
  ]
 },
 "13": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Bees use a dance to tell others where food is.",
    "Bees use only smell to find their way back to the hive.",
    "Bees dance to show that they are ready to sleep.",
    "The text explains that the angle and length of the bee’s dance show the direction and distance of food.",
    [
     "The angle of the straight line shows the direction of the food in relation to the sun",
     "the length of the shaking shows the distance"
    ]
   ],
   [
    "Detail",
    "What does the length of the shaking show?",
    "The distance to the food.",
    "The number of bees in the hive.",
    "The time of day.",
    "The text says that the length of the shaking shows the distance.",
    "the length of the shaking shows the distance"
   ],
   [
    "Vocabulary",
    "In the text, “findings” means…",
    "the results of research.",
    "the places where bees live.",
    "the flowers that bees visit.",
    "Experiments supported his findings, so the findings are what he discovered about the dance.",
    "largely supported his findings"
   ],
   [
    "Reference",
    "In the second paragraph, “his” in “his findings” refers to…",
    "Karl von Frisch.",
    "the robobee.",
    "the honeybee.",
    "The paragraph says that Karl von Frisch worked out the meaning of the dance, and later experiments supported his findings.",
    "Later experiments, including one with a mechanical “robobee”, largely supported his findings"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "Bees dance only at night.",
    "The dance shows the direction of the food in relation to the sun.",
    "Some scientists think that smell guides the bees.",
    "The text never says when the bees dance. The other two are stated.",
    [
     "shows the direction of the food in relation to the sun",
     "Some scientists still think that smell, not the dance, guides the bees."
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest?",
    "Scientists do not agree about every detail.",
    "The dance has been proved useless.",
    "Smell is never important.",
    "Some scientists still think that smell, not the dance, guides the bees, so there is some disagreement.",
    "Some scientists still think that smell, not the dance, guides the bees."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "A rainforest helps to create its own rain, so cutting trees is risky.",
    "A rainforest needs rain from the ocean and cannot make its own.",
    "Winds in South America carry rain to every rainforest.",
    "The text says that a rainforest helps to create rain and that cutting down trees disturbs this system.",
    [
     "A rainforest does not simply wait for rain; it helps to create it",
     "The system is fragile."
    ]
   ],
   [
    "Detail",
    "How do trees put water into the air?",
    "Through their leaves.",
    "Through their roots.",
    "Through their bark only.",
    "The text says that trees release water into the air through their leaves.",
    "release it into the air through their leaves"
   ],
   [
    "Vocabulary",
    "In the text, “disturbs” means…",
    "interrupts and changes something.",
    "makes something stronger.",
    "cleans something completely.",
    "Cutting down trees disturbs the flows of moisture, so it interrupts and changes them.",
    "disturbs these flows in the dry season"
   ],
   [
    "Reference",
    "In the first paragraph, “this process” refers to…",
    "trees taking water from the ground and releasing it into the air.",
    "the work of the scientists who led the study.",
    "the winds that carry moisture across South America.",
    "The sentence before says that trees take water from the ground and release it into the air, and this process helps to start the wet season.",
    "found that this process helps to start the wet season in the southern Amazon"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many trees are cut down each year.",
    "Which region the study is about.",
    "What scientists call the moving moisture.",
    "The text does not say how many trees are cut down. It names the southern Amazon and the “flying rivers”.",
    [
     "helps to start the wet season in the southern Amazon",
     "what scientists call “flying rivers”"
    ]
   ],
   [
    "Inference",
    "What does the second paragraph suggest about cutting down trees?",
    "It could reduce the rainfall that the forest depends on.",
    "It would make the rainfall heavier.",
    "It would not change the rainfall at all.",
    "The text says that large-scale deforestation could reduce yearly rainfall in the Amazon.",
    "could reduce yearly rainfall in the Amazon by about 6 to 18 percent"
   ]
  ]
 },
 "14": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Warm water makes corals lose their algae, but some corals can recover.",
    "Corals turn white because they are dying of old age.",
    "Corals cannot live together with algae for long.",
    "The text explains bleaching and then says that corals can take back their algae and recover.",
    [
     "When the sea becomes too warm, this partnership breaks down",
     "the coral can take back its algae and recover"
    ]
   ],
   [
    "Detail",
    "What do the algae give the coral?",
    "Food and bright colors.",
    "Shade and speed.",
    "Heat only.",
    "The text says that the algae make food for the coral and give it its bright colors.",
    "The algae make food for the coral and give it its bright colors."
   ],
   [
    "Vocabulary",
    "In the text, “heat-tolerant” means…",
    "able to survive high temperatures.",
    "able to produce more heat.",
    "made from very warm water.",
    "The corals recovered while the water was still warm, because the new algae could survive the heat.",
    "They had changed to a more heat-tolerant kind of algae"
   ],
   [
    "Reference",
    "In the first paragraph, “this partnership” refers to…",
    "the coral living together with the algae.",
    "the coral and the warm sea.",
    "the algae and the sun.",
    "The text says that corals live together with algae, and when the sea becomes too warm this partnership breaks down.",
    "When the sea becomes too warm, this partnership breaks down"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many kinds of coral there are.",
    "What bleaching is.",
    "Where the scientists studied corals.",
    "The text does not say how many kinds of coral there are. It explains bleaching and names the island of Kiritimati.",
    [
     "This is called bleaching",
     "Scientists who studied the island of Kiritimati"
    ]
   ],
   [
    "Inference",
    "What do the results from Kiritimati suggest?",
    "Some corals can adapt, but human disturbance matters.",
    "Warm water is good for all corals in the sea.",
    "Corals never change the algae that live in them.",
    "Some corals recovered in warm water by changing algae, but only where there was little disturbance from local people.",
    "but only where there was little disturbance from local people"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "A sponge city tries to soak up rain, but it cannot stop every flood.",
    "A sponge city sends rain away through bigger drains.",
    "A sponge city is built only in places without rain.",
    "The text explains the sponge city idea and then gives the example of Zhengzhou, which flooded despite sponge features.",
    [
     "it lets the city soak it up",
     "even though the city had sponge features"
    ]
   ],
   [
    "Detail",
    "What happens in a normal city when a storm is very heavy?",
    "The drains cannot cope and the streets flood.",
    "The rain stops and the streets stay dry.",
    "The roofs of the houses fall down.",
    "The text says that the drains cannot cope and the streets flood.",
    "the drains cannot cope and the streets flood"
   ],
   [
    "Vocabulary",
    "In the text, “infrastructure” means…",
    "the basic systems and structures of a city.",
    "a kind of heavy rain that falls in summer.",
    "a government office that controls the water.",
    "The infrastructure of a sponge city is the gardens, paving and other structures that handle water.",
    "the infrastructure can handle only about 200 millimeters of rain in a day"
   ],
   [
    "Reference",
    "In the first paragraph, “the problem” refers to…",
    "streets flooding when the drains cannot cope.",
    "the high price of paving for all the streets.",
    "the lack of rain gardens in the city parks.",
    "The sentence before explains that drains cannot cope and the streets flood, and a sponge city tries to solve this problem.",
    "A “sponge city” tries to solve the problem differently"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much a sponge city project costs.",
    "What kind of paving a sponge city uses.",
    "Where the floods of 2021 happened.",
    "The text does not give any costs. It says that the paving lets water pass through and that Zhengzhou flooded in 2021.",
    [
     "Streets are built with paving that water can pass through",
     "In 2021, subways and highways in Zhengzhou flooded"
    ]
   ],
   [
    "Inference",
    "What does the Zhengzhou example show?",
    "Sponge features cannot stop every flood.",
    "Sponge cities never work in any place.",
    "Subways are more dangerous than highways.",
    "The city had sponge features, and still the subways and highways flooded in 2021.",
    "even though the city had sponge features"
   ]
  ]
 },
 "15": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "On the first night in a new place, half of the brain may stay on guard.",
    "People sleep better in a new place than they do at home.",
    "Both sides of the brain sleep equally deeply on the first night.",
    "The text says that on the first night one side of the brain stayed more alert, which the researchers called a night watch.",
    [
     "on the first night one side of the brain, the left, stayed more alert during deep sleep",
     "They called it a “night watch”"
    ]
   ],
   [
    "Detail",
    "Which side of the brain stayed more alert on the first night?",
    "The left side.",
    "The right side.",
    "Both sides equally.",
    "The text says that on the first night one side of the brain, the left, stayed more alert.",
    "one side of the brain, the left, stayed more alert during deep sleep"
   ],
   [
    "Vocabulary",
    "In the text, “discovered” means…",
    "found out something new.",
    "forgot something old.",
    "created something new.",
    "The researchers measured brain activity and discovered that one side stayed more alert, so they found it out.",
    "discovered that on the first night one side of the brain"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “They called it a night watch” refers to…",
    "the extra alertness of one side of the brain.",
    "the new place where people slept.",
    "the deep sleep itself.",
    "The sentence before says that one side of the brain stayed more alert, and the researchers called this a night watch.",
    "They called it a “night watch”."
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How old the volunteers were.",
    "Which year the study was done.",
    "Which university the researchers worked at.",
    "The text does not give the age of the volunteers. It says that the researchers were at Brown University in 2016.",
    "In 2016, researchers at Brown University found a possible reason."
   ],
   [
    "Inference",
    "Why does the writer mention that only healthy volunteers took part?",
    "The results may not apply to people with sleep problems.",
    "Healthy people sleep less than other people.",
    "The volunteers were paid a lot of money.",
    "The writer lists this as a limit of the study, which suggests that the results may not apply to everyone.",
    "only healthy volunteers took part"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Smell can bring back memories, but the evidence is not simple.",
    "Smell is the only sense that can bring back memories.",
    "Music brings back stronger memories than smell does.",
    "The text explains the Proust effect and then says that the full picture is less simple.",
    [
     "Popular science explains that smell signals skip the part of the brain that most other senses pass through",
     "The full picture is less simple."
    ]
   ],
   [
    "Detail",
    "What does the amygdala process?",
    "Emotion.",
    "Hearing.",
    "Vision.",
    "The text says that the amygdala processes emotion.",
    "the amygdala, which processes emotion"
   ],
   [
    "Vocabulary",
    "In the text, “skip” means…",
    "pass without stopping at.",
    "stay for a long time in.",
    "damage or break.",
    "Smell signals skip the part of the brain that most other senses pass through, so they go past it.",
    "smell signals skip the part of the brain that most other senses pass through"
   ],
   [
    "Reference",
    "In the second paragraph, “it” in “it did not confirm the strongest form of the Proust idea” refers to…",
    "the 2012 study.",
    "the Proust effect.",
    "the memory of music.",
    "The sentence says that the authors of the 2012 study said that it did not confirm the strongest form of the idea.",
    "its authors said that it did not confirm the strongest form of the Proust idea"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people took part in the studies.",
    "What the amygdala processes.",
    "Who gave the effect its name.",
    "The text does not say how many people took part. It says what the amygdala processes and that the effect is named after a French writer.",
    [
     "the amygdala, which processes emotion",
     "after the French writer who described a memory returning when he tasted a small cake"
    ]
   ],
   [
    "Inference",
    "What does the writer suggest about the Proust idea?",
    "It has not been fully proven yet.",
    "It has been proven many times.",
    "It applies only to the sense of taste.",
    "The 2012 authors said that their study did not confirm the strongest form of the idea, and very little research had tested it.",
    [
     "it did not confirm the strongest form of the Proust idea",
     "very little research had tested whether smell is really special"
    ]
   ]
  ]
 },
 "16": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Meat can be grown from cells, but it faces problems and bans.",
    "Meat grown from cells is already cheaper than farm meat.",
    "Meat grown from cells is allowed in every part of the world.",
    "The text explains how cultivated meat is made and then describes its cost, energy use and bans.",
    [
     "Lab-grown meat, also called cultivated meat, is real animal meat made without raising a whole animal",
     "in 2024 Florida and Alabama banned the sale of cultivated meat"
    ]
   ],
   [
    "Detail",
    "Where do the cells for cultivated meat come from?",
    "A living animal or a fertilized egg.",
    "A vegetable garden near the laboratory.",
    "A factory machine that makes plastic.",
    "The text says that scientists take cells from a living animal or a fertilized egg.",
    "cells from a living animal or a fertilized egg"
   ],
   [
    "Vocabulary",
    "In the text, “raising” in “raising a whole animal” means…",
    "looking after an animal as it grows.",
    "lifting an animal off the ground.",
    "buying an animal at a market.",
    "Cultivated meat is made without raising a whole animal, which means without looking after an animal as it grows.",
    "made without raising a whole animal"
   ],
   [
    "Reference",
    "In the first paragraph, “them” in “and store them” refers to…",
    "the cells.",
    "the animals.",
    "the eggs.",
    "The sentence says that scientists take cells from an animal or an egg and store them.",
    "take cells from a living animal or a fertilized egg and store them"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How lab-grown meat tastes.",
    "What the cells are fed.",
    "Which states banned the sale in 2024.",
    "The text does not say how the meat tastes. It says that the cells are fed nutrients and that Florida and Alabama banned the sale.",
    [
     "fed nutrients so that they multiply",
     "Florida and Alabama banned the sale"
    ]
   ],
   [
    "Inference",
    "What can we understand about the future of cultivated meat?",
    "It depends on cost, energy and laws.",
    "It is already sold everywhere.",
    "It uses no energy.",
    "The text mentions the cost of the first burger, the energy needed and the bans, so the future is not certain.",
    [
     "the process needs a lot of energy",
     "banned the sale of cultivated meat"
    ]
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Food dates have different meanings, and many people confuse them.",
    "Food is always safe after its best-before date.",
    "All dates on food mean that it must be thrown away.",
    "The text explains that a use-by date is about safety and a best-before date is about quality, and that people are confused.",
    [
     "not all dates mean the same",
     "The confusion matters"
    ]
   ],
   [
    "Detail",
    "What is a “use by” date about?",
    "Safety.",
    "Taste only.",
    "Price.",
    "The text says that a use-by date is about safety.",
    "a “use by” date is about safety"
   ],
   [
    "Vocabulary",
    "In the text, “rely on” means…",
    "trust to give the right answer.",
    "ignore completely.",
    "check with a machine.",
    "The text says that you cannot rely on smell or taste, so you cannot trust them to show that food is safe.",
    "You cannot rely on smell or taste"
   ],
   [
    "Reference",
    "In the second paragraph, “it” in “but it may not be at its best” refers to…",
    "the food that is past its best-before date.",
    "the label on the package of food.",
    "the survey that was done in Scotland.",
    "The sentence says that food past its best-before date is usually still safe, but it may not be at its best.",
    "Food that is past its best-before date is usually still safe, but it may not be at its best"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people get food poisoning each year.",
    "What a “use by” date is about.",
    "What the survey in Scotland found.",
    "The text does not give the number of people with food poisoning. It explains the use-by date and the Scottish survey.",
    [
     "a “use by” date is about safety",
     "21 percent of people wrongly said"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about food that is past its use-by date?",
    "It is risky to eat, even if it smells fine.",
    "It is safe to eat if it smells fine.",
    "It is safe to eat if it looks fine.",
    "The text says that food may be unsafe after the use-by date and that smell and taste cannot be trusted.",
    [
     "After the use-by date, food may be unsafe",
     "You cannot rely on smell or taste"
    ]
   ]
  ]
 },
 "17": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Translation earbuds work in steps, and mistakes can add up.",
    "Translation earbuds always give perfect translations.",
    "Translation earbuds work only with one kind of phone.",
    "The text explains the steps of translation earbuds and says that each step can make a small mistake and the mistakes add up.",
    [
     "Translation earbuds listen to a person speaking, turn the words into text, translate that text",
     "Each step can make a small mistake, and the mistakes add up"
    ]
   ],
   [
    "Detail",
    "Where does Apple say that the translation is processed?",
    "On the iPhone itself.",
    "On a server in another country.",
    "Inside the earbuds only.",
    "The text says that on its AirPods the processing happens on the iPhone itself.",
    "the processing happens on the iPhone itself"
   ],
   [
    "Vocabulary",
    "In the text, “add up” means…",
    "build together into a bigger problem.",
    "become much easier to find.",
    "disappear from the text one by one.",
    "The text says that each step can make a small mistake and the mistakes add up, so they build into a bigger problem.",
    "the mistakes add up"
   ],
   [
    "Reference",
    "In the first paragraph, “its” in “its translation is done online” refers to…",
    "Google’s Translate app.",
    "Apple’s AirPods.",
    "the iPhone.",
    "The sentence is about Google’s Translate app, and says that its translation is done online.",
    "but its translation is done online"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much translation earbuds cost.",
    "What Apple says about privacy.",
    "What can confuse the first step.",
    "The text does not give a price. It mentions privacy on the iPhone and the things that confuse the first step, such as fast speech and accents.",
    [
     "which helps to protect privacy",
     "Fast speech, strong accents, background noise and slang can all confuse the first step"
    ]
   ],
   [
    "Inference",
    "What should a traveler do before using the tool?",
    "Check which languages it supports.",
    "Buy a second pair of earbuds.",
    "Learn how to repair it.",
    "The tools support only certain languages, and the list changes often.",
    "The tools also support only certain languages, and the list changes often."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Music can give some people chills, and scientists are still studying why.",
    "Music gives chills to everyone who listens to it.",
    "Chills from music are caused by cold air in the room.",
    "The text explains what chills from music are, and says that scientists are still careful about big conclusions.",
    [
     "roughly half of people say that music gives them chills",
     "Not everyone feels chills"
    ]
   ],
   [
    "Detail",
    "What is “frisson”?",
    "A shiver, for example when listening to music.",
    "A French word for a very old song.",
    "A loud sound made at a concert.",
    "The text says that frisson is the French word for a shiver.",
    "Scientists call this feeling “frisson”, the French word for a shiver"
   ],
   [
    "Vocabulary",
    "In the text, “prediction” means…",
    "a guess about what will happen.",
    "a memory of an earlier song.",
    "a loud part of a song.",
    "The text says that the reward arrives when the prediction is right, so a prediction is a guess about what will come next.",
    "the reward arrives when the prediction is right"
   ],
   [
    "Reference",
    "In the first paragraph, “them” in “music gives them chills” refers to…",
    "roughly half of people.",
    "the French scientists.",
    "the favorite songs.",
    "The sentence says that roughly half of people say that music gives them chills.",
    "roughly half of people say that music gives them chills"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How long a person can feel chills.",
    "What the word “frisson” means.",
    "How many students were in the Harvard study.",
    "The text does not say how long chills last. It explains “frisson” and says that the Harvard study had 10 students in each group.",
    [
     "“frisson”, the French word for a shiver",
     "A Harvard study compared 10 students"
    ]
   ],
   [
    "Inference",
    "What does the second paragraph suggest about people who do not feel chills?",
    "Their brains may be connected differently.",
    "They do not like music.",
    "They have never heard a song.",
    "The text says that the group that got chills had more nerve fibers connecting the hearing and emotion parts of the brain.",
    "The group that got chills had more nerve fibers connecting the hearing parts of the brain with the parts that process emotion"
   ]
  ]
 },
 "18": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "The heartbeat starts with a natural pacemaker, and doctors can help it.",
    "The heartbeat is controlled only by the nervous system.",
    "The heartbeat gets faster when an artificial device is used.",
    "The text explains that special cells work like a natural pacemaker and that doctors can place an artificial one.",
    [
     "These cells work like a natural pacemaker",
     "doctors can place a small device, an artificial pacemaker, under the skin"
    ]
   ],
   [
    "Detail",
    "Where does the signal for each heartbeat start?",
    "In a small group of cells in the upper right part of the heart.",
    "In a large nerve that runs down from the brain.",
    "In the thick muscle at the bottom of the heart.",
    "The text says that the signal starts in a small group of cells in the upper right part of the heart.",
    "starts in a small group of cells in the upper right part of the heart"
   ],
   [
    "Vocabulary",
    "In the text, “squeeze” means…",
    "press tightly together.",
    "stretch out wide.",
    "stay completely still.",
    "The signal makes the muscle squeeze, which means that the muscle presses tightly together to push the blood.",
    "makes the muscle squeeze"
   ],
   [
    "Reference",
    "In the first paragraph, “they” in “they send out a tiny electrical signal” refers to…",
    "the cells of the sinoatrial node.",
    "the doctors who study the heart.",
    "the 100,000 beats each day.",
    "“They” refers to “these cells”, the cells of the sinoatrial node, which work like a natural pacemaker.",
    "These cells work like a natural pacemaker: they send out a tiny electrical signal"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much the heart weighs.",
    "Where the signal for each beat starts.",
    "Where an artificial pacemaker is placed.",
    "The text does not give the weight of the heart. It says where the signal starts and that an artificial pacemaker is placed under the skin.",
    [
     "The signal for each beat starts in a small group of cells in the upper right part of the heart",
     "under the skin"
    ]
   ],
   [
    "Inference",
    "Why might a doctor fit a patient with an artificial pacemaker?",
    "The heart’s own pacemaker is working too slowly.",
    "The patient wants to exercise more often.",
    "The patient has the wrong blood group.",
    "The text says that doctors place the device when the natural pacemaker works too slowly.",
    "If the natural pacemaker works too slowly, doctors can place a small device"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Matching blood types matters, and hospitals need regular donors.",
    "Every blood type can be given safely to every patient.",
    "Hospitals can make blood in a factory when they need it.",
    "The text says that blood from a wrong group can be dangerous and that hospitals depend on regular donors.",
    [
     "If a patient receives blood from a group that does not match",
     "Hospitals therefore depend on regular donors"
    ]
   ],
   [
    "Detail",
    "What do the four blood groups depend on?",
    "Small substances on the surface of red blood cells.",
    "The age of the person who gives the blood.",
    "The amount of blood in the body.",
    "The text says that the groups depend on small substances on the surface of red blood cells.",
    "depend on small substances on the surface of red blood cells"
   ],
   [
    "Vocabulary",
    "In the text, “emergencies” means…",
    "sudden dangerous situations.",
    "regular visits to the hospital.",
    "long medical studies.",
    "Hospitals keep O negative blood for emergencies, which are sudden situations in which a patient needs help at once.",
    "keep a supply of O negative blood for emergencies"
   ],
   [
    "Reference",
    "In the second paragraph, “their” in “their red cells” refers to…",
    "people with type O negative blood.",
    "the patients of any group.",
    "the hospitals.",
    "The sentence says that people with type O negative blood are called universal donors, because their red cells can be given to patients of any group.",
    "People with type O negative blood are often called universal donors, because their red cells can usually be given to patients of any group"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people give blood each year.",
    "Red cells can be kept for only a few weeks.",
    "Hospitals keep O negative blood for emergencies.",
    "The text never gives a number of donors. The other two are both stated.",
    [
     "red cells can be stored for only a few weeks",
     "hospitals keep a supply of O negative blood for emergencies"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a patient in an emergency whose blood type is unknown?",
    "Hospitals may give them O negative blood.",
    "They must wait until a factory makes their blood.",
    "Any blood group can be used safely by anyone.",
    "The text says that O negative red cells can usually be given to patients of any group, and that hospitals keep it for emergencies.",
    [
     "hospitals keep a supply of O negative blood for emergencies",
     "their red cells can usually be given to patients of any group"
    ]
   ]
  ]
 },
 "19": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Vaccines train the body to respond faster to a real germ.",
    "Vaccines give the body a real germ so that it can fight.",
    "Vaccines are needed only by people who are already ill.",
    "The text explains that a vaccine shows the immune system a harmless version of a germ, so that the body can respond faster.",
    [
     "A vaccine shows the immune system a harmless version or part of a germ",
     "the body can respond faster"
    ]
   ],
   [
    "Detail",
    "What does a vaccine show to the immune system?",
    "A harmless version or part of a germ.",
    "A new kind of medicine.",
    "A copy of the patient’s own cells.",
    "The text says that a vaccine shows the immune system a harmless version or part of a germ.",
    "A vaccine shows the immune system a harmless version or part of a germ."
   ],
   [
    "Vocabulary",
    "In the text, “boosters” are…",
    "extra doses that make protection stronger again.",
    "the first doses that children receive.",
    "tests that are done on small groups.",
    "Boosters are extra doses that are needed because protection can become weaker over time.",
    "Some vaccines need extra doses, called boosters"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “it makes antibodies” refers to…",
    "the body.",
    "the vaccine.",
    "the germ.",
    "The sentence says that the body reacts as if it were a real attack, and that it makes antibodies.",
    "it makes antibodies, and it keeps special memory cells"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people have received a vaccine.",
    "What boosters are.",
    "How new vaccines are tested.",
    "The text does not say how many people have received a vaccine. It explains boosters and the testing in several stages.",
    [
     "extra doses, called boosters",
     "it is tested in several stages"
    ]
   ],
   [
    "Inference",
    "Why might a person need a booster?",
    "Protection can become weaker over time.",
    "The first dose made the person ill.",
    "The memory cells became too strong.",
    "The text says that boosters are needed because protection can become weaker over time.",
    "because protection can become weaker over time"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main message of the text?",
    "Using antibiotics too often can make them stop working.",
    "Antibiotics are the best way to fight viruses.",
    "Bacteria are easy to kill with any medicine.",
    "The text explains that the more the medicines are used, the more chances bacteria have to become resistant, so easy infections could become dangerous again.",
    [
     "The more often the medicines are used, the more chances bacteria have to become resistant",
     "infections that are easy to treat today could become dangerous again"
    ]
   ],
   [
    "Detail",
    "Which kind of illness can antibiotics NOT cure?",
    "Illnesses caused by viruses, such as a cold.",
    "Illnesses caused by bacteria.",
    "Illnesses that start in the stomach.",
    "The text says that antibiotics do not work against viruses, so they cannot cure a cold or the flu.",
    "They do not work against viruses, so they cannot cure a cold or the flu."
   ],
   [
    "Vocabulary",
    "In the text, “resistant” bacteria are bacteria that…",
    "can survive an antibiotic.",
    "grow only in cold places.",
    "cause a cold or the flu.",
    "A few bacteria have a change that lets them survive the antibiotic. These are the resistant bacteria.",
    [
     "a few have a random change that lets them survive",
     "the resistant bacteria can become common"
    ]
   ],
   [
    "Reference",
    "In the first paragraph, “them” in “stop them from growing” refers to…",
    "bacteria.",
    "medicines.",
    "viruses.",
    "The sentence says that antibiotics kill bacteria or stop them from growing.",
    "Antibiotics are medicines that kill bacteria or stop them from growing"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How long a course of antibiotics lasts.",
    "What antibiotics do to bacteria.",
    "Which illnesses antibiotics cannot cure.",
    "The text does not say how long a course lasts. It says what antibiotics do to bacteria and that they cannot cure a cold or the flu.",
    [
     "kill bacteria or stop them from growing",
     "they cannot cure a cold or the flu"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest could happen in the future?",
    "Some infections could become hard to treat again.",
    "All infections will disappear completely.",
    "Doctors will stop treating infections.",
    "The text says that infections that are easy to treat today could become dangerous again.",
    "infections that are easy to treat today could become dangerous again"
   ]
  ]
 },
 "20": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Bacteria in the gut help the body, but we still have much to learn.",
    "Bacteria in the gut harm the body and should be removed.",
    "The gut contains ten times more bacteria than human cells.",
    "The text says that the microbes are not just passengers and that many of the results are still early.",
    [
     "These microbes are not just passengers",
     "many of the results are still early"
    ]
   ],
   [
    "Detail",
    "Where do the trillions of microorganisms of the gut microbiome live?",
    "In the large intestine.",
    "In the stomach and the throat.",
    "In the mouth and the nose.",
    "The text says that the microorganisms live inside the large intestine.",
    "Inside your large intestine live trillions of microorganisms"
   ],
   [
    "Vocabulary",
    "In the text, “passengers” means…",
    "ones that only travel along and do nothing.",
    "ones that guide others on a trip.",
    "ones that drive a vehicle.",
    "The text says that the microbes are not just passengers, which means that they do more than travel along.",
    "These microbes are not just passengers"
   ],
   [
    "Reference",
    "In the second paragraph, “They” in “They help to break down fiber” refers to…",
    "the microbes.",
    "the human cells.",
    "the vitamins.",
    "The paragraph begins with the microbes, and says that they help to break down fiber.",
    "They help to break down fiber that human cells cannot digest"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much the microbiome weighs.",
    "Where the microorganisms live.",
    "What the microbes do with fiber.",
    "The text does not say how much the microbiome weighs. It says that the microbes live in the large intestine and help to break down fiber.",
    [
     "Inside your large intestine live trillions of microorganisms",
     "They help to break down fiber that human cells cannot digest"
    ]
   ],
   [
    "Inference",
    "Why does the writer say that many of the results are “still early”?",
    "Scientists need more research before they can be sure.",
    "The microbes were discovered only last year.",
    "Most studies found no effect at all.",
    "Calling the results early suggests that more research is needed before scientists can be sure.",
    "many of the results are still early"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main point of the text?",
    "Fermented foods may contain helpful bacteria, but the benefits are not yet proven.",
    "Fermented foods are unsafe for most people and should be avoided.",
    "Yogurt is the only food that contains live probiotic bacteria.",
    "The text explains how some fermented foods contain live bacteria, and then says that research on the benefits is mixed.",
    [
     "Some fermented foods still contain live bacteria",
     "Research on benefits is mixed"
    ]
   ],
   [
    "Detail",
    "What happens to the sugar in milk when yogurt is made?",
    "Bacteria turn it into an acid.",
    "It turns into fiber.",
    "Yeasts turn it into water.",
    "The text says that bacteria turn the sugar in milk into an acid.",
    "bacteria turn the sugar in milk into an acid"
   ],
   [
    "Vocabulary",
    "In the text, “mixed” in “research on benefits is mixed” means…",
    "it shows different results.",
    "it is very old.",
    "it is perfect.",
    "The text says that research on benefits is mixed, so it does not give one clear answer.",
    "Research on benefits is mixed"
   ],
   [
    "Reference",
    "In the first paragraph, “which” in “which makes the milk thicker” refers to…",
    "the acid that the bacteria make.",
    "the sugar in the milk.",
    "the yogurt that is sold.",
    "The sentence says that bacteria turn the sugar into an acid, which makes the milk thicker and slightly sour.",
    "bacteria turn the sugar in milk into an acid, which makes the milk thicker and slightly sour"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How long it takes to make yogurt.",
    "What happens to the sugar in milk.",
    "What the word “probiotics” means.",
    "The text does not say how long yogurt takes to make. It explains what happens to the sugar and what probiotics are.",
    [
     "bacteria turn the sugar in milk into an acid",
     "Scientists use the word “probiotics” for live microorganisms that may bring a health benefit"
    ]
   ],
   [
    "Inference",
    "Why does not every fermented food count as a probiotic?",
    "Heating can destroy the live bacteria.",
    "Some foods contain no sugar at all.",
    "Only dairy foods have bacteria.",
    "A product that is heated after fermentation may contain no live bacteria.",
    "Heating destroys the bacteria, so a product that is heated after fermentation may contain none."
   ]
  ]
 },
 "21": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "DNA does not decide everything about a person.",
    "Fingerprints never change.",
    "Identical twins are always healthy.",
    "The text ends by saying that DNA is only part of the story.",
    "So DNA is only part of the story."
   ],
   [
    "Detail",
    "How do identical twins begin?",
    "As one fertilized egg that splits into two.",
    "As two eggs that grow side by side.",
    "As one egg that is copied after birth.",
    "The text says that identical twins start life as one fertilized egg that splits into two.",
    "start life as one fertilized egg that splits into two"
   ],
   [
    "Vocabulary",
    "In the text, “splits” means…",
    "divides into two parts.",
    "joins together with another egg.",
    "grows very large inside the womb.",
    "Identical twins start as one egg that splits into two, so the egg divides into two parts.",
    "one fertilized egg that splits into two"
   ],
   [
    "Reference",
    "In the second paragraph, “young ones” refers to…",
    "young twins.",
    "young fingerprints.",
    "young genes.",
    "The sentence compares older twins with young ones, so “ones” means twins.",
    "older twins often differ more than young ones"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many sets of identical twins exist.",
    "Why the fingerprints of twins are different.",
    "What can switch genes on or off.",
    "The text does not say how many sets of identical twins exist. It explains the fingerprints and says that chemical changes can switch genes on or off.",
    [
     "fingerprints are shaped in the womb",
     "small chemical changes can switch genes on or off"
    ]
   ],
   [
    "Inference",
    "What does the writer suggest about older twins?",
    "They often differ more than young twins.",
    "They become exactly the same.",
    "They stop sharing any DNA.",
    "The text says that older twins often differ more than young ones.",
    "older twins often differ more than young ones"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Old DNA can be read, but the work is difficult.",
    "Old DNA is easy to find in every kind of place.",
    "Scientists have not yet found any Neanderthal DNA.",
    "The text explains that scientists can collect and read old DNA, and then says that the work is difficult.",
    [
     "Scientists can now collect tiny pieces of this old DNA and put them together",
     "The work is difficult"
    ]
   ],
   [
    "Detail",
    "Where can DNA survive for thousands of years?",
    "In bones and teeth, especially in cold, dry places.",
    "In rivers and lakes, under running water.",
    "In old stone buildings and clay pottery.",
    "The text says that DNA can survive in bones and teeth, especially in cold, dry places.",
    "in bones and teeth it can survive for thousands of years, especially in cold, dry places"
   ],
   [
    "Vocabulary",
    "In the text, “spoil” means…",
    "to damage something so that it cannot be used properly.",
    "to keep something safe for a long time.",
    "to describe something in detail.",
    "Modern DNA can spoil old samples, so they cannot be used properly.",
    "Old samples are easy to spoil with modern DNA from the people who touch them"
   ],
   [
    "Reference",
    "In the first paragraph, “this kind of work” refers to…",
    "collecting and putting together pieces of old DNA.",
    "digging for old bones in cold, dry places.",
    "teaching students at a large university.",
    "The sentence before explains that scientists collect tiny pieces of old DNA and put them together, and Pääbo won the prize for this kind of work.",
    "In 2022, Svante Pääbo won the Nobel Prize in Physiology or Medicine for this kind of work"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How old the oldest DNA ever found is.",
    "Where DNA can survive for thousands of years.",
    "Who won the Nobel Prize in 2022.",
    "The text does not give the age of the oldest DNA. It says that DNA survives in bones and teeth and that Svante Pääbo won the Nobel Prize in 2022.",
    [
     "in bones and teeth it can survive for thousands of years",
     "In 2022, Svante Pääbo won the Nobel Prize in Physiology or Medicine"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about old DNA in a warm, wet place?",
    "It is less likely to survive for thousands of years.",
    "It survives better than in a cold place.",
    "It survives for exactly the same time.",
    "The text says that DNA survives especially in cold, dry places, so it is less likely to survive in a warm, wet place.",
    "in bones and teeth it can survive for thousands of years, especially in cold, dry places"
   ]
  ]
 },
 "22": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Jet lag happens when the body clock does not match the local time.",
    "Jet lag happens because the plane flies too high.",
    "Jet lag disappears at once after a long flight.",
    "The text says that the body clock keeps working on home time, and this mismatch is called jet lag.",
    [
     "This mismatch is called jet lag",
     "the clock keeps working on home time for a while"
    ]
   ],
   [
    "Detail",
    "What does the main body clock use to stay close to a 24-hour day?",
    "Light.",
    "Temperature changes.",
    "Sounds from outside.",
    "The text says that the main clock uses light to stay close to a 24-hour day.",
    "it uses light to stay close to a 24-hour day"
   ],
   [
    "Vocabulary",
    "In the text, “strange” in “at strange hours” means…",
    "unusual and not normal.",
    "very early only.",
    "very long and slow.",
    "The text says that jet lag can cause hunger at strange hours, which means at unusual times.",
    "hunger at strange hours"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “it uses light to stay close to a 24-hour day” refers to…",
    "the main clock.",
    "the light.",
    "the human body.",
    "The sentence says that the main clock is a tiny area in the brain, and it uses light to stay close to a 24-hour day.",
    "the main clock is a tiny area in the brain, and it uses light to stay close to a 24-hour day"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "Drinking water on the plane prevents jet lag.",
    "The body clock affects when we feel hungry.",
    "Jet lag can cause poor sleep.",
    "The text never says that water prevents jet lag. The other two are both stated.",
    [
     "when to feel hungry",
     "tiredness, poor sleep and hunger at strange hours"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a traveler who flies west?",
    "The traveler will usually find it easier to adjust.",
    "The traveler will not have jet lag at all.",
    "The traveler will feel hungry at the same hours.",
    "The text says that many travelers find flying east harder than flying west, so flying west is usually easier.",
    "Many travelers find flying east harder than flying west"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Teenagers’ body clocks run later, so early school starts are a problem.",
    "Teenagers sleep late because they do not want to study.",
    "Teenagers need less sleep than children and adults.",
    "The text says that the teenage body clock changes and that this is a problem when school starts early.",
    [
     "During the teenage years the body clock changes",
     "This is a problem when school starts early"
    ]
   ],
   [
    "Detail",
    "When does the teenage brain release melatonin, compared with childhood?",
    "Later in the evening.",
    "Earlier in the afternoon.",
    "At exactly the same time.",
    "The text says that melatonin is released later in the evening than in childhood.",
    "later in the evening than it did in childhood"
   ],
   [
    "Vocabulary",
    "In the text, “no earlier than 8:30 a.m.” means…",
    "not before 8:30 a.m.",
    "exactly at 8:30 a.m.",
    "only after 10 a.m.",
    "The text recommends that schools start no earlier than 8:30 a.m., so they should not start before that time.",
    "start no earlier than 8:30 a.m."
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “than it did in childhood” refers to…",
    "the teenage brain.",
    "the evening.",
    "the body clock.",
    "The sentence says that the brain releases melatonin later in the evening than it did in childhood.",
    "later in the evening than it did in childhood"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many hours teenagers actually sleep on average.",
    "How many hours of sleep teenagers need.",
    "What melatonin does.",
    "The text does not say how much teenagers actually sleep. It says how much they need and that melatonin helps us feel sleepy.",
    [
     "Teenagers need about eight to ten hours of sleep",
     "a hormone that helps us feel sleepy"
    ]
   ],
   [
    "Inference",
    "What does the Seattle study suggest?",
    "A later start can give teenagers more sleep.",
    "Teenagers sleep less when school starts later.",
    "Teenagers prefer to study at night.",
    "Students slept about half an hour more per night after the first lesson was moved later.",
    "students slept about half an hour more per night after the first lesson was moved later"
   ]
  ]
 },
 "23": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Plants use sunlight, water and carbon dioxide to make sugar.",
    "Plants take in sugar from the soil through their roots.",
    "Plants make food only at night when it is dark.",
    "The text explains that plants make their own food in photosynthesis, using the energy of sunlight to change water and carbon dioxide into sugar.",
    [
     "Plants make their own food in a process called photosynthesis",
     "The plant uses this energy to change the water and carbon dioxide into sugar"
    ]
   ],
   [
    "Detail",
    "How does a plant take in water?",
    "Through its roots, from the soil.",
    "Through its leaves, from the air.",
    "Through tiny holes in the stem.",
    "The text says that the roots take in water from the soil.",
    "their roots take in water from the soil"
   ],
   [
    "Vocabulary",
    "In the text, “released” means…",
    "let out into the air.",
    "taken in from the soil.",
    "stored in the leaves.",
    "The text says that oxygen is released as a waste product, so the plant lets it out into the air.",
    "Oxygen is released as a waste product"
   ],
   [
    "Reference",
    "In the first paragraph, “this energy” refers to…",
    "the energy that chlorophyll absorbs from sunlight.",
    "the energy of the water in the soil.",
    "the energy that the roots give to the leaves.",
    "The sentence before says that chlorophyll absorbs energy from sunlight, and the plant uses this energy to make sugar.",
    "A green substance called chlorophyll absorbs energy from sunlight. The plant uses this energy"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "Plants use oxygen to make sugar.",
    "Plants can store extra sugar as starch.",
    "Roots take in water from the soil.",
    "The text says that oxygen is released as a waste product, and never says that plants use it to make sugar. The other two are stated.",
    [
     "they can store extra sugar as starch",
     "their roots take in water from the soil"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a plant kept in a dark room?",
    "It cannot make sugar well.",
    "It makes more sugar than usual.",
    "It makes oxygen faster than usual.",
    "The text says that the plant needs energy from sunlight to change water and carbon dioxide into sugar.",
    [
     "absorbs energy from sunlight",
     "The plant uses this energy to change the water and carbon dioxide into sugar"
    ]
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Carnivorous plants catch insects to get nutrients that the soil lacks.",
    "Carnivorous plants eat insects instead of using sunlight.",
    "Carnivorous plants close their traps whenever it rains.",
    "The text says that carnivorous plants catch insects, and that by digesting them they get the nutrients that the soil cannot give.",
    [
     "Carnivorous plants catch and digest small animals, mostly insects",
     "By digesting insects, they get the nutrients that the soil cannot give"
    ]
   ],
   [
    "Detail",
    "How does the Venus flytrap know that an insect is inside the leaf?",
    "Tiny hairs in the leaf act as triggers.",
    "It smells the insect from far away.",
    "The leaf feels the heat of the insect’s body.",
    "The text says that tiny hairs inside the leaf act as triggers.",
    "Tiny hairs inside the leaf act as triggers"
   ],
   [
    "Vocabulary",
    "In the text, “digest” means…",
    "break down food to use it.",
    "hide from other animals.",
    "chase and follow closely.",
    "Carnivorous plants catch and digest small animals, so they break the animals down to get nutrients.",
    "catch and digest small animals"
   ],
   [
    "Reference",
    "In the first paragraph, “them” in “if an insect touches them twice” refers to…",
    "the tiny hairs.",
    "the leaves.",
    "the raindrops.",
    "The sentence says that tiny hairs act as triggers, and if an insect touches them twice, the trap closes.",
    "if an insect touches them twice within about twenty seconds"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many insects a plant eats each year.",
    "How long the trap waits for a second touch.",
    "Which nutrient the soil is missing.",
    "The text does not say how many insects a plant eats. It gives the time between touches (about twenty seconds) and names nitrogen.",
    [
     "within about twenty seconds",
     "especially nitrogen"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a raindrop that touches one hair once?",
    "The trap will probably stay open.",
    "The trap will close at once.",
    "The plant will use the water as food.",
    "The text says that the trap closes only if the hairs are touched twice, so one touch is not enough.",
    [
     "if an insect touches them twice within about twenty seconds, the trap closes",
     "avoid wasting energy on things such as raindrops"
    ]
   ]
  ]
 },
 "24": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Some animals hibernate to survive winter, but not in the same way.",
    "All animals sleep through the winter in the same way.",
    "Animals hibernate because they do not like the cold.",
    "The text says that hibernation helps animals survive when food is scarce, and that not all hibernation is the same.",
    [
     "Hibernation is a way for some animals to survive when food is scarce in winter",
     "Not all hibernation is the same"
    ]
   ],
   [
    "Detail",
    "What happens to an animal’s body during hibernation?",
    "Its temperature, heartbeat and breathing slow down.",
    "Its heart beats faster to keep it warm.",
    "It grows a thick new coat of fur.",
    "The text says that body temperature, heartbeat and breathing slow down.",
    "body temperature, heartbeat and breathing slow down"
   ],
   [
    "Vocabulary",
    "In the text, “a great deal” means…",
    "very much.",
    "for a short time.",
    "only a little.",
    "The text says that small animals cool down a great deal, so their temperature falls very much.",
    "cool down a great deal"
   ],
   [
    "Reference",
    "In the first paragraph, “which” in “which they use as fuel” refers to…",
    "the fat that they store.",
    "the food that they find in winter.",
    "the energy of the heartbeat.",
    "The sentence says that hibernators eat a lot and store fat, which they use as fuel.",
    "hibernators eat a lot and store fat, which they use as fuel"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How long a bear hibernates.",
    "What hibernators do before winter.",
    "Which animal can cool below freezing.",
    "The text does not say how long a bear hibernates. It says that hibernators eat and store fat first, and that the Arctic ground squirrel can cool below freezing.",
    [
     "Before winter, hibernators eat a lot and store fat",
     "the Arctic ground squirrel can have a body temperature below the freezing point of water"
    ]
   ],
   [
    "Inference",
    "What does the writer suggest in the last sentence?",
    "Scientists do not fully understand why hibernators wake up.",
    "Hibernators wake up only when they are hungry.",
    "Scientists have answered every question about hibernation.",
    "The text says that scientists are still studying why deep hibernators wake up, so the reason is not fully understood.",
    "scientists are still studying why"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Birds use several clues to find their way, but not all is understood.",
    "Birds find their way only by following other birds.",
    "Birds find their way by smelling the air from far away.",
    "The text says that birds use several clues, and that scientists do not yet agree on how the magnetic sense works.",
    [
     "Research suggests that they use several clues",
     "Scientists do not yet agree on exactly how this sense works"
    ]
   ],
   [
    "Detail",
    "What can the bar-tailed godwit do?",
    "Fly more than 11,000 kilometers without stopping.",
    "Fly from Alaska to Africa in a week.",
    "Live in the south Pacific all year.",
    "The text says that it can fly more than 11,000 kilometers from Alaska to the south Pacific without stopping.",
    "can fly more than 11,000 kilometers from Alaska to the south Pacific without stopping"
   ],
   [
    "Vocabulary",
    "In the text, “clues” means…",
    "signs that help you find an answer.",
    "maps that show the way.",
    "songs that birds sing.",
    "The text says that birds use several clues, such as the sun, the stars and landmarks, which help them find the way.",
    "they use several clues"
   ],
   [
    "Reference",
    "In the second paragraph, “they” in “that they use several clues” refers to…",
    "birds.",
    "scientists.",
    "clues.",
    "The sentence says that research suggests that birds use several clues to find their way.",
    "Research suggests that they use several clues"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned as a clue for birds?",
    "The temperature of the water.",
    "Landmarks such as rivers and coastlines.",
    "The position of the sun and the stars.",
    "The text never mentions water temperature as a clue. The other two are stated.",
    [
     "the position of the sun and the stars",
     "landmarks such as rivers and coastlines"
    ]
   ],
   [
    "Inference",
    "Why does the writer mention young birds that travel without adults?",
    "It suggests that some of the knowledge may be inherited.",
    "It shows that young birds learn the route from landmarks.",
    "It shows that adults never migrate.",
    "If young birds find the way alone, some of the knowledge may be inherited.",
    "Some young birds make their first journey without help from adults, which suggests that some of the knowledge about the route is inherited."
   ]
  ]
 },
 "25": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Octopuses and chameleons change color, but in different ways.",
    "Octopuses and chameleons change color only to hide.",
    "Octopuses and chameleons change color in exactly the same way.",
    "The text explains how an octopus changes color and then says that chameleons change color in a different way.",
    [
     "An octopus can change its color in less than a second",
     "Chameleons change color in a different way"
    ]
   ],
   [
    "Detail",
    "What are chromatophores?",
    "Small sacs of color in an octopus’s skin.",
    "Tiny muscles that raise bumps on the skin.",
    "Crystals in a chameleon’s skin.",
    "The text says that an octopus’s skin has thousands of small sacs of color called chromatophores.",
    "thousands of small sacs of color called chromatophores"
   ],
   [
    "Vocabulary",
    "In the text, “stretch” means…",
    "pull to make longer.",
    "cut into small pieces.",
    "press very hard.",
    "The text says that tiny muscles stretch or squeeze each sac, so they pull it longer or press it smaller.",
    "tiny muscles stretch or squeeze each sac"
   ],
   [
    "Reference",
    "In the first paragraph, “this” in “Scientists find this surprising” refers to…",
    "the octopus’s skill at looking like its surroundings.",
    "the number of small sacs in its skin.",
    "the speed of its muscles.",
    "The sentence before says that the octopus can look like a rock or seaweed, and scientists find this surprising because it seems unable to see color.",
    "Scientists find this surprising, because most octopuses seem unable to see color the way people do"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How long an octopus lives.",
    "How fast an octopus can change color.",
    "What chromatophores are.",
    "The text does not say how long an octopus lives. It says that it changes color in less than a second and explains chromatophores.",
    [
     "An octopus can change its color in less than a second",
     "Its skin has thousands of small sacs of color called chromatophores"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about chameleons?",
    "Their color change is also a way of communicating.",
    "They change color only to hide from their enemies.",
    "They never change color during a fight.",
    "The text says that many chameleons change color mainly to send signals to other chameleons, and not only to hide.",
    "Many chameleons change color mainly to send signals to other chameleons, for example during a fight, and not only to hide."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Bright colors can warn predators, and harmless animals can copy them.",
    "Bright colors always show that an animal is dangerous.",
    "Bright colors are used by animals only to attract partners.",
    "The text explains that bright colors warn predators and then says that harmless animals can copy warning colors.",
    [
     "Many animals with bright colors are warning predators",
     "Warning colors can also be copied"
    ]
   ],
   [
    "Detail",
    "Where do poison dart frogs seem to get their poison?",
    "From the insects they eat.",
    "From the plants where they sleep.",
    "They make it in their own bodies.",
    "The text says that the frogs do not make the poison themselves. They get the chemicals from the insects they eat.",
    "they get the chemicals from the insects they eat"
   ],
   [
    "Vocabulary",
    "In the text, “harmless” means…",
    "not able to cause harm.",
    "very small and quick.",
    "brightly colored.",
    "The text says that hoverflies are harmless, but they look like wasps, so birds avoid them. They cannot hurt a bird.",
    "Hoverflies are harmless, but their yellow and black stripes"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “the frogs do not make it themselves” refers to…",
    "the poison.",
    "the skin.",
    "the diet.",
    "The sentence says that the skin has strong poison, but the frogs do not make it themselves.",
    "Their skin has strong poison, but the frogs do not make it themselves"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many kinds of poison dart frog exist.",
    "Where poison dart frogs live.",
    "What the stripes of a hoverfly look like.",
    "The text does not say how many kinds of frog exist. It says where they live and that hoverflies have yellow and black stripes.",
    [
     "Poison dart frogs from Central and South America",
     "their yellow and black stripes"
    ]
   ],
   [
    "Inference",
    "When does mimicry work best?",
    "When the dangerous animals are common enough for predators to remember.",
    "When the copy looks even better than the real animal.",
    "When there are no predators nearby to look at the animal.",
    "The text says that mimicry works only if the real dangerous animals are common enough for predators to remember them.",
    "It works only if the real dangerous animals are common enough for predators to remember them."
   ]
  ]
 },
 "26": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Fungi and trees share things underground, but some stories went too far.",
    "Fungi under a forest harm the trees that grow above them.",
    "Trees send warnings to each other, and scientists agree on this.",
    "The text explains the partnership between fungi and trees, and then says that some claims were stronger than the research allowed.",
    [
     "thin threads of fungi grow around and into tree roots",
     "several of these claims were stronger than the research allowed"
    ]
   ],
   [
    "Detail",
    "What does the tree give the fungus?",
    "Sugar from photosynthesis.",
    "Water and minerals.",
    "Protection from insects.",
    "The text says that the tree gives the fungus sugar from photosynthesis. The fungus gives the tree water and minerals.",
    "the tree gives the fungus sugar from photosynthesis"
   ],
   [
    "Vocabulary",
    "In the text, “Some stories went further” means…",
    "some stories claimed more than the research showed.",
    "some stories traveled to farther forests.",
    "some stories ended earlier than before.",
    "The next sentences describe stories about mother trees that were stronger than the research allowed.",
    "Some stories went further"
   ],
   [
    "Reference",
    "In the second paragraph, “these claims” refers to…",
    "the stories that mother trees look after young trees and send warnings.",
    "the results about the water and minerals that trees take in.",
    "the 1990s research on how carbon moves through the soil.",
    "“These claims” are the stories in the previous sentences: that old mother trees look after young trees and send warnings through the fungal network.",
    "They said that old “mother trees” look after young trees and send warnings through the fungal network."
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many kinds of fungi grow in a forest.",
    "What the fungus gives the tree.",
    "When Suzanne Simard did her research.",
    "The text does not say how many kinds of fungi there are. It says that the fungus gives the tree water and minerals and that Simard worked in the 1990s.",
    [
     "The fungus helps the tree take in water and minerals",
     "In the 1990s, the researcher Suzanne Simard"
    ]
   ],
   [
    "Inference",
    "What is the view of the group of scientists in 2023?",
    "The fungi matter, but some of the stories went beyond the evidence.",
    "The fungal networks do not exist under forests at all.",
    "Old trees clearly help young trees in every forest in the world.",
    "They said that the fungi are real and important, but that several claims were stronger than the research allowed.",
    "The fungi are real and important, they argued"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Tardigrades can survive extreme conditions, but they are not indestructible.",
    "Tardigrades live only in the deep sea and cannot survive in space.",
    "Tardigrades can survive anything, including very high heat and no water.",
    "The text describes how tardigrades survive drying out and space, and then says that they are not indestructible.",
    [
     "In this state it can survive for years",
     "But the animals are not indestructible"
    ]
   ],
   [
    "Detail",
    "How big is a tardigrade?",
    "Usually less than a millimeter long.",
    "Between one and two centimeters long.",
    "About the size of a pea.",
    "The text says that tardigrades are usually less than a millimeter long.",
    "usually less than a millimeter long"
   ],
   [
    "Vocabulary",
    "In the text, “state” in “enters a state” means…",
    "a condition or situation.",
    "a country with its own laws.",
    "a quick movement of the legs.",
    "The text says that the tardigrade enters a state in which its life processes slow down, so it enters a condition.",
    "enters a state in which its life processes slow down almost to a stop"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “In this state it can survive for years” refers to…",
    "the tardigrade.",
    "the environment.",
    "the water in its body.",
    "The sentences before describe what a tardigrade does, and it can survive for years in this state.",
    "In this state it can survive for years."
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "What tardigrades eat.",
    "Where tardigrades live.",
    "When the space experiment took place.",
    "The text does not say what tardigrades eat. It says where they live and that the space experiment was in 2007.",
    [
     "They live almost everywhere, from mountains to the deep sea",
     "In 2007, scientists sent tardigrades into space on a satellite"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a tardigrade in a very dry place?",
    "It can wait for water in a dry state.",
    "It dies at once without water.",
    "It moves quickly to find water in a few minutes.",
    "The text says that a tardigrade loses most of its water and survives for years in a slowed-down state.",
    [
     "loses most of the water in its body and enters a state in which its life processes slow down almost to a stop",
     "In this state it can survive for years"
    ]
   ]
  ]
 },
 "27": {
  "A": [
   [
    "Main idea",
    "What does the story show?",
    "A change at the top of a food chain can spread, but ecosystems are complicated.",
    "Wolves always repair a damaged forest within a few years.",
    "Hunting is the main cause of drought in national parks.",
    "The last sentence says that a change at the top of a food chain can spread through an ecosystem, but that ecosystems are complicated.",
    "The story shows how a change at the top of a food chain can spread through an ecosystem"
   ],
   [
    "Detail",
    "When did the wolves disappear from Yellowstone?",
    "In the 1920s.",
    "In 1995.",
    "In the 1960s.",
    "The text says that the wolves were hunted out of the park in the 1920s.",
    "hunted out of Yellowstone National Park in the 1920s"
   ],
   [
    "Vocabulary",
    "In the text, “recovered” means…",
    "grew back after being damaged.",
    "moved to another place.",
    "became smaller than before.",
    "The text says that in some places the trees recovered, which means that they grew back after the elk ate them.",
    "In some places the trees recovered"
   ],
   [
    "Reference",
    "In the first paragraph, “them” in “where elk had eaten them for years” refers to…",
    "the young willow and aspen trees.",
    "the rivers that flow through the park.",
    "the wolves that came from Canada.",
    "The sentence says that young willow and aspen trees began to grow again where elk had eaten them for years.",
    "young willow and aspen trees began to grow again along some rivers, where elk had eaten them for years"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many elk live in Yellowstone today.",
    "How many wolves were brought back.",
    "Where the wolves came from.",
    "The text does not give today’s number of elk. It says that 31 wolves were brought back from Canada.",
    "31 wolves from Canada were brought back to the park"
   ],
   [
    "Inference",
    "What does the story suggest about the number of elk and young trees?",
    "When there are fewer elk, young trees can grow.",
    "Elk help young trees to grow faster.",
    "Trees grow only in places where there are wolves.",
    "The text says that the number of elk fell, and young trees began to grow again where the elk had eaten them.",
    "the number of elk fell, and young willow and aspen trees began to grow again along some rivers"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Sea otters protect kelp forests by eating the urchins that eat kelp.",
    "Sea otters build kelp forests on the sea floor.",
    "Sea urchins protect kelp forests from other animals.",
    "The text says that urchins eat kelp and that otters eat urchins, so a group of otters keeps the number of urchins low.",
    [
     "Sea otters eat urchins",
     "a group of otters can keep the number of urchins low"
    ]
   ],
   [
    "Detail",
    "What do kelp forests give to sea animals?",
    "Food and shelter.",
    "Warm water and sunlight.",
    "Fur and salt.",
    "The text says that kelp forests give food and shelter to many fish and other sea animals.",
    "They give food and shelter to many fish and other sea animals."
   ],
   [
    "Vocabulary",
    "In the text, “suffered” means…",
    "was harmed or damaged.",
    "grew larger and healthier.",
    "was moved to another place.",
    "When the otters almost disappeared, the kelp forests were harmed, so they suffered.",
    "kelp forests there suffered"
   ],
   [
    "Reference",
    "In the first paragraph, “they” in “they can destroy a kelp forest” refers to…",
    "the sea urchins.",
    "the kelp forests.",
    "the fish and sea animals.",
    "The sentence says that when there are too many urchins, they can destroy a kelp forest.",
    "When there are too many urchins, they can destroy a kelp forest"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many otters live on the Pacific coast.",
    "What sea urchins eat in the kelp forest.",
    "What kelp forests are and where they grow.",
    "The text does not say how many otters live on the coast. It says that urchins eat kelp and that kelp forests are underwater forests of giant seaweed.",
    [
     "Sea urchins, however, eat kelp",
     "Kelp forests are underwater forests of giant seaweed"
    ]
   ],
   [
    "Inference",
    "Why does the writer say that other factors also matter?",
    "Kelp does not always come back when otters return.",
    "Otters cannot swim in warm water at all.",
    "Urchins never eat kelp, only small fish.",
    "The text says that kelp has often come back where otters returned, but scientists say that other factors, such as water temperature, also matter.",
    "Where otters have returned, kelp has often come back, but scientists say that other factors, such as water temperature, also matter."
   ]
  ]
 },
 "28": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "A cut heals in stages, and the new skin is not as strong as before.",
    "A cut heals at once and leaves no mark on the skin.",
    "A cut heals only if it is covered with a bandage.",
    "The text describes the stages of healing and says that scar tissue is not as strong as the skin it replaced.",
    [
     "First, tiny blood cells called platelets stick together and form a clot",
     "it is not as strong as the skin it replaced"
    ]
   ],
   [
    "Detail",
    "How does scar tissue differ from the skin it replaced?",
    "It has no hair or sweat glands and is weaker.",
    "It is stronger than the skin it replaced and grows hair.",
    "It heals within a few hours and is never visible.",
    "The text says that scar tissue usually does not have hair or sweat glands, and that it is not as strong.",
    "Scar tissue usually does not have hair or sweat glands, and it is not as strong as the skin it replaced."
   ],
   [
    "Vocabulary",
    "In the text, “sore” means…",
    "painful when touched.",
    "very warm and wet.",
    "pale and dry.",
    "The text says that the area becomes red and sore for a short time, because white blood cells arrive to fight germs.",
    "the area becomes red and sore for a short time"
   ],
   [
    "Reference",
    "In the first paragraph, “which” in “which stops the bleeding” refers to…",
    "the clot.",
    "the cut.",
    "the skin.",
    "The sentence says that platelets stick together and form a clot, which stops the bleeding.",
    "stick together and form a clot, which stops the bleeding"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many stages the healing has.",
    "What collagen does.",
    "What happens to scar tissue.",
    "The text does not say how many stages healing has. It explains what collagen does and what scar tissue is like.",
    [
     "a protein called collagen helps to make the new tissue strong",
     "Scar tissue usually does not have hair or sweat glands"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about healing?",
    "It can be a slow process.",
    "It always finishes within a day.",
    "It stops after a few hours.",
    "The text says that healing can take weeks or even months.",
    "Healing can take weeks or even months."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Stem cells can become many kinds of cells, and doctors use them already.",
    "Stem cells can only make new blood cells in the bone marrow.",
    "Stem cells are already used to grow replacement tissue for everyone.",
    "The text explains that stem cells can become many types of cells, that doctors already use some, and that more treatments are being tested.",
    [
     "Stem cells are special because they can divide to make new cells",
     "Researchers now hope to grow replacement tissue for patients"
    ]
   ],
   [
    "Detail",
    "What can stem cells do?",
    "Divide to make new cells and become other cells.",
    "Fight germs in the blood and in the skin.",
    "Stop the bleeding after a cut in the skin.",
    "The text says that stem cells can divide to make new cells, and some can become many different types of cell.",
    "they can divide to make new cells, and some can become many different types of cell"
   ],
   [
    "Vocabulary",
    "In the text, “behave like” means…",
    "act in the same way as.",
    "look much bigger than.",
    "grow faster than.",
    "The text says that ordinary skin cells could be changed into cells that behave like embryonic stem cells, so they act in the same way.",
    "cells that behave like embryonic stem cells"
   ],
   [
    "Reference",
    "In the second paragraph, “these treatments” refers to…",
    "ways of growing replacement tissue for patients.",
    "transplants of bone marrow for blood diseases.",
    "tests on mice in the laboratory in Japan.",
    "The sentence says that researchers hope to grow replacement tissue, but most of these treatments are still being tested.",
    "Researchers now hope to grow replacement tissue for patients, but most of these treatments are still being tested"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many types of stem cell there are.",
    "Where adults have stem cells.",
    "When Yamanaka won the Nobel Prize.",
    "The text does not say how many types there are. It says that adults have stem cells in the bone marrow and that Yamanaka shared the Nobel Prize in 2012.",
    [
     "Adults have stem cells in places such as the bone marrow",
     "He shared the Nobel Prize for this work in 2012"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about treatments that grow replacement tissue?",
    "Most are still being tested.",
    "They are already used in every hospital.",
    "They have been proved to be unsafe.",
    "The text says that most of these treatments are still being tested and are not yet in general use.",
    "most of these treatments are still being tested and are not yet in general use"
   ]
  ]
 },
 "29": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Life near hot springs on the sea floor depends on bacteria, not sunlight.",
    "Life on the sea floor depends on plants that need sunlight.",
    "Life near hot springs cannot survive because the water is too hot.",
    "The text says that there is no sunlight at that depth and that the food chain starts with bacteria that use chemicals.",
    [
     "hot springs surrounded by crowds of animals",
     "The food chain there starts with bacteria that use chemicals from the hot water"
    ]
   ],
   [
    "Detail",
    "What did the scientists find on the sea floor in 1977?",
    "Hot springs surrounded by crowds of animals.",
    "A new kind of plant with bright flowers.",
    "A ship that had sunk many years before.",
    "The text says that they found hot springs surrounded by crowds of animals.",
    "hot springs surrounded by crowds of animals"
   ],
   [
    "Vocabulary",
    "In the text, “unexpected” means…",
    "not what the scientists thought they would find.",
    "very large and impossible to measure.",
    "dangerous and frightening to the team.",
    "The scientists did not expect hot springs and crowds of animals so deep in the sea, because there is no sunlight there.",
    "found something unexpected on the sea floor"
   ],
   [
    "Reference",
    "In the second paragraph, “them” in “the bacteria feed them” refers to…",
    "the giant tube worms.",
    "the hot springs.",
    "the chemicals.",
    "The sentence says that giant tube worms live together with bacteria inside their bodies, and the bacteria feed them.",
    "they live together with bacteria inside their bodies, and the bacteria feed them"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many kinds of animals live at the vents.",
    "How deep below the surface the vents were.",
    "What the process of making food is called.",
    "The text does not say how many kinds of animals live there. It gives the depth and says that the process is called chemosynthesis.",
    [
     "about 2,500 meters below the surface",
     "This process is called chemosynthesis"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about the food chain at the vents?",
    "It does not begin with plants.",
    "It begins with large animals.",
    "It begins with sunlight.",
    "The text says that there was no sunlight at that depth and that the food chain starts with bacteria.",
    [
     "There was no sunlight at that depth",
     "The food chain there starts with bacteria"
    ]
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Camels and kangaroo rats survive in deserts in different ways.",
    "Camels store water in their humps, and kangaroo rats drink a lot.",
    "Camels and kangaroo rats survive only near water.",
    "The text explains how camels lose water slowly and how the kangaroo rat lives without drinking.",
    [
     "Camels survive in the desert partly because their bodies lose water slowly",
     "The kangaroo rat of North American deserts can live without drinking at all"
    ]
   ],
   [
    "Detail",
    "What does a camel’s hump store?",
    "Fat, which is a source of energy.",
    "Water for the desert journey.",
    "Air for breathing.",
    "The text says that the hump stores fat, and the fat is a source of energy.",
    "the hump stores fat, and the fat is a source of energy"
   ],
   [
    "Vocabulary",
    "In the text, “available” means…",
    "possible to get or use.",
    "very hot and dry.",
    "kept far away.",
    "Camels drink a lot of water when it is available, which means when they can get it.",
    "when it is available"
   ],
   [
    "Reference",
    "In the second paragraph, “It” in “It gets most of its water from the dry seeds” refers to…",
    "the kangaroo rat.",
    "the desert.",
    "the burrow.",
    "The paragraph is about the kangaroo rat, which gets most of its water from dry seeds.",
    "It gets most of its water from the dry seeds it eats"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many days a camel can live without water.",
    "What a camel’s hump stores.",
    "When the kangaroo rat comes out.",
    "The text does not say how long a camel can live without water. It says that the hump stores fat and that the kangaroo rat comes out at night.",
    [
     "In fact, the hump stores fat",
     "comes out at night"
    ]
   ],
   [
    "Inference",
    "Why does the kangaroo rat spend the hot day in a burrow?",
    "To lose less water in the heat.",
    "To look for water underground.",
    "To hide from camels.",
    "The text says that it loses very little water, and the cool burrow helps it to avoid the hot day, so the burrow helps to save water.",
    [
     "spends the hot day in a cool underground burrow",
     "loses very little water in its waste"
    ]
   ]
  ]
 },
 "30": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Microplastics are everywhere, and their effect on health is unclear.",
    "Microplastics have been proved to be safe for our health.",
    "Microplastics come only from face scrubs and beads.",
    "The text says that scientists have found microplastics in many places and that their effect on health is still unclear.",
    [
     "Scientists have found microplastics in oceans, in drinking water and even in human blood",
     "What this means for health is still unclear"
    ]
   ],
   [
    "Detail",
    "According to the text, where do most microplastics come from?",
    "Larger plastic items that slowly break into pieces.",
    "Beads that were added to face scrubs.",
    "Synthetic clothes washed in machines.",
    "The text says “Most, however, come from larger items” such as bottles and fishing nets. Beads and clothes fibres are real sources, but they are not described as the main one.",
    "Most, however, come from larger items, such as bottles and fishing nets, that slowly break into fragments in sunlight and waves."
   ],
   [
    "Vocabulary",
    "In the text, “firm” in “firm conclusions” means…",
    "certain and reliable.",
    "hard to the touch.",
    "strict and severe.",
    "“Firm conclusions” are conclusions you can be sure of, which is why the researchers want more evidence first.",
    "before firm conclusions can be drawn"
   ],
   [
    "Reference",
    "In the first paragraph, “that” in “that slowly break into fragments” refers to…",
    "larger items such as bottles and fishing nets.",
    "tiny pieces smaller than five millimetres.",
    "face scrubs and the beads in them.",
    "The sentence says that most microplastics come from larger items, such as bottles and fishing nets, that slowly break into fragments.",
    "Most, however, come from larger items, such as bottles and fishing nets, that slowly break into fragments"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "Most microplastics are removed by water treatment plants.",
    "Microplastics have been found in human blood.",
    "Several countries have banned microbeads in cosmetics.",
    "Water treatment is never mentioned. The other two are both stated in the second paragraph.",
    [
     "even in human blood",
     "several countries have banned microbeads in cosmetics"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about countries that banned microbeads?",
    "They acted even though the evidence is not complete.",
    "They have proved that microbeads are harmful.",
    "They have removed all microplastics from the sea.",
    "The text says that more evidence is needed, and that in the meantime several countries have banned microbeads.",
    [
     "more long-term evidence is needed before firm conclusions can be drawn",
     "several countries have banned microbeads in cosmetics"
    ]
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Recycling helps, but we also need to use less plastic.",
    "Recycling plastic does not help at all.",
    "Every plastic bottle becomes a new bottle.",
    "The text says that recycling is helpful but not enough, and that people should also use less plastic.",
    [
     "recycling is helpful, but it is not enough on its own",
     "use less plastic in the first place"
    ]
   ],
   [
    "Detail",
    "Why must plastic be sorted before it is recycled?",
    "Different types cannot be melted together.",
    "Colored plastic is worth much more money.",
    "Sorting makes the plastic lighter to carry.",
    "The text says that plastic must be sorted by type because different types cannot be melted together.",
    "different types cannot be melted together"
   ],
   [
    "Vocabulary",
    "In the text, “introducing” means…",
    "starting to use for the first time.",
    "taking away completely.",
    "arguing against strongly.",
    "Several countries are introducing rules, which means that they are starting to use new rules.",
    "Several countries are now introducing rules"
   ],
   [
    "Reference",
    "In the second paragraph, “it” in “it usually loses quality” refers to…",
    "the recycled plastic.",
    "the glass or metal.",
    "the packaging.",
    "The sentence says that even when plastic is recycled, it usually loses quality.",
    "Even when plastic is recycled, it usually loses quality"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much recycled plastic costs.",
    "What a bottle may become.",
    "Which kind of bottle people can choose.",
    "The text does not give any price. It says that a bottle may become a fibre or a bench and that people can choose refillable bottles.",
    [
     "A bottle may become a fibre for clothes or a bench",
     "choosing refillable bottles"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a plastic bottle in a recycling bin?",
    "It may not become a new bottle.",
    "It will always become a new bottle.",
    "It will be sent back to the shop.",
    "Many people believe that it becomes a new bottle, but the text says that the story is more complicated. Dirty or mixed plastic can be burned or buried.",
    [
     "Many people believe that every plastic bottle they put in a recycling bin becomes a new bottle",
     "In reality, the story is more complicated"
    ]
   ]
  ]
 },
 "31": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "A girl is scared at first, but she climbs to the top by Friday.",
    "A girl decides never to climb again after Monday.",
    "A girl teaches her brother to use the climbing wall.",
    "The diary starts with Monday, when she was scared, and ends with Friday, when she reached the top.",
    [
     "I was scared today",
     "today I reached the top"
    ]
   ],
   [
    "Detail",
    "What did the writer do after climbing halfway on Monday?",
    "She had a drink.",
    "She reached the top.",
    "She went home at once.",
    "She “came down and had a hot chocolate”. Reaching the top happened on Friday, in a different diary entry.",
    "I only got halfway up before my arms hurt, so I came down and had a hot chocolate."
   ],
   [
    "Vocabulary",
    "In the diary, “proud” means…",
    "happy about something you did.",
    "tired after exercise.",
    "afraid of falling.",
    "She reached the top and took a photo to remember it, so “proud” means happy about something she did. She was scared on Monday, but proud on Friday.",
    "I felt so proud that I took a photo."
   ],
   [
    "Reference",
    "In the first paragraph, “his” in “his first time was worse” refers to…",
    "Leo’s.",
    "Sara’s.",
    "the writer’s.",
    "The sentence says that Leo told her that his first time was worse.",
    "Leo laughed, but he told me that his first time was worse"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the diary?",
    "What the writer’s favorite subject is.",
    "What the writer had after the first climb.",
    "Who gave the writer special shoes.",
    "The diary does not say anything about school subjects. It says that she had a hot chocolate and that Sara gave her special shoes.",
    [
     "so I came down and had a hot chocolate",
     "gave me special shoes"
    ]
   ],
   [
    "Inference",
    "What does the diary suggest about the writer by Friday?",
    "She has become more confident.",
    "She is afraid of the wall.",
    "She wants to stop climbing.",
    "The text says that she felt proud on Friday and that she and Leo will try a harder wall.",
    [
     "I felt so proud that I took a photo",
     "Leo and I will try a harder wall"
    ]
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the text mainly about?",
    "How climbers stay safe with a rope and a partner.",
    "How to choose a good climbing wall.",
    "How climbing shoes are made.",
    "The text explains the harness, the rope, the belayer and the checks that keep a climber safe.",
    [
     "every climber wears a harness",
     "the belayer holds the rope tight",
     "both people check the knots and the harness"
    ]
   ],
   [
    "Detail",
    "What is a harness?",
    "A strong belt around the waist and legs.",
    "A rope that goes up to the top of the wall.",
    "A special shoe that helps you climb.",
    "The text says that a harness is a strong belt that goes around the waist and legs.",
    "a strong belt that goes around the waist and legs"
   ],
   [
    "Vocabulary",
    "In the text, “tight” in “holds the rope tight” means…",
    "pulled firmly so that it cannot move.",
    "tied in a very large knot at the top.",
    "made wet and heavy by the rain.",
    "The belayer holds the rope tight, so the climber only falls a short way.",
    "holds the rope tight"
   ],
   [
    "Reference",
    "In the first paragraph, “This” in “This is a strong belt” refers to…",
    "the harness.",
    "the waist.",
    "the climbing wall.",
    "The sentence says that every climber wears a harness, and this is a strong belt.",
    "every climber wears a harness. This is a strong belt"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How tall a climbing wall usually is.",
    "Who checks the knots before a climb.",
    "When a climbing rope is replaced.",
    "The text does not say how tall a wall is. It says that both people check the knots and that old or damaged ropes are replaced.",
    [
     "both people check the knots and the harness",
     "replaced when they are old or damaged"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about an old or damaged rope?",
    "It is not used for climbing.",
    "It is used only by beginners.",
    "It is used until it breaks.",
    "The text says that climbing ropes are replaced when they are old or damaged.",
    "replaced when they are old or damaged"
   ]
  ]
 },
 "32": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Words enter a dictionary because of lasting, widespread use.",
    "Editors choose the words that they like best.",
    "Famous people decide which words are new.",
    "The text says that a word becomes a candidate when it is used by many people, in many places, over a long enough time.",
    "A word becomes a candidate when the examples show that it is used by many people, in many places, over a long enough time"
   ],
   [
    "Detail",
    "What do dictionary editors collect?",
    "Real examples of how a word is used.",
    "Votes from readers about new words.",
    "Lists of words that sound modern.",
    "The text says that editors read many kinds of writing and collect real examples, called citations.",
    "they collect real examples, called citations"
   ],
   [
    "Vocabulary",
    "In the text, “left out” means…",
    "not included.",
    "shown first.",
    "written wrongly.",
    "A joke word that disappears the next month is usually left out, which means that it is not included in the dictionary.",
    "is usually left out"
   ],
   [
    "Reference",
    "In the last sentence, the first “it” in “simply to use it” refers to…",
    "the new word.",
    "the dictionary.",
    "the next update.",
    "The writer advises people to use the word themselves, so that others begin to use it too.",
    "The best way is simply to use it, so that others begin to use it too."
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many words are added every year.",
    "What editors read to find examples.",
    "What an editor writes for a new word.",
    "The text does not say how many words are added. It names what editors read and says that an editor writes a definition.",
    [
     "Editors read newspapers, books, websites and transcripts",
     "writes a definition"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a word that many people use for many years?",
    "It may be added to a dictionary.",
    "It must be added at once.",
    "It can never be added.",
    "The text says that a word becomes a candidate when it is used by many people, in many places, over a long enough time.",
    "used by many people, in many places, over a long enough time"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Accents change over time because people copy the sounds around them.",
    "Accents stay the same for the whole life of a person.",
    "Accents change only when people move to another country.",
    "The text says that accents never stand still and that they change because people copy the sounds around them.",
    [
     "Accents never stand still",
     "people copy the sounds around them, usually without noticing"
    ]
   ],
   [
    "Detail",
    "What did the researchers measure?",
    "The vowels in the Queen’s Christmas speeches.",
    "The speed of the Queen’s speech.",
    "The words that she used most often.",
    "The text says that the researchers measured the vowels in the Queen’s Christmas speeches.",
    "researchers measured the vowels in the Queen’s Christmas speeches"
   ],
   [
    "Vocabulary",
    "In the text, “Accents never stand still” means…",
    "accents are always slowly changing.",
    "accents are always very loud.",
    "accents cannot be heard clearly.",
    "The text says that accents change over time, so they never stay still.",
    "Accents never stand still"
   ],
   [
    "Reference",
    "In the first paragraph, “her” in “her pronunciation” refers to…",
    "the Queen.",
    "a researcher.",
    "a teacher.",
    "The paragraph is about the Queen’s Christmas speeches, and her pronunciation moved a little.",
    "Over those thirty years her pronunciation moved a little toward the way most people in southern England speak"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people took part in the study.",
    "Which years the speeches covered.",
    "What the researchers measured.",
    "The text does not say how many people took part. It gives the years of the speeches and says that the researchers measured vowels.",
    [
     "from the 1950s to the 1980s",
     "researchers measured the vowels"
    ]
   ],
   [
    "Inference",
    "What does the Queen study suggest about adults and their accents?",
    "An adult’s accent can still change.",
    "Adults never change how they speak.",
    "Only young children can change accent.",
    "The study showed that even one person’s accent can change during a lifetime.",
    "even one person’s accent can change during a lifetime"
   ]
  ]
 },
 "33": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Children learn language easily, and starting early gives the best results.",
    "Children learn language easily only when they have lessons.",
    "Adults cannot learn a language after the age of 17.",
    "The text says that most children learn to speak without lessons, and that starting early makes a native-like result easier.",
    [
     "Most children learn to speak without lessons",
     "starting early makes a native-like result easier"
    ]
   ],
   [
    "Detail",
    "What do most children do without lessons?",
    "They learn to speak with quite complicated grammar.",
    "They learn to read and write well.",
    "They learn two languages at the same time.",
    "The text says that by the age of five, most children use quite complicated grammar, and nobody has taught them the rules.",
    "By the age of five, most children use quite complicated grammar, and nobody has taught them the rules."
   ],
   [
    "Vocabulary",
    "In the text, “complicated” means…",
    "having many parts, not simple.",
    "very old and well known.",
    "easy to learn quickly.",
    "The text says that children use quite complicated grammar without lessons, so the grammar has many parts and is not simple.",
    "use quite complicated grammar"
   ],
   [
    "Reference",
    "In the first paragraph, “them” in “nobody has taught them the rules” refers to…",
    "the children.",
    "the teachers.",
    "the scientists.",
    "The sentence says that most children use quite complicated grammar, and nobody has taught them the rules.",
    "most children use quite complicated grammar, and nobody has taught them the rules"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many languages a child can learn.",
    "How many people took the quiz.",
    "What the quiz tested.",
    "The text does not say how many languages a child can learn. It gives the number of people and says that the quiz tested English grammar.",
    [
     "nearly 670,000 people who took an online quiz",
     "tested the English grammar"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about an adult who starts learning a language?",
    "They can still learn, but sounding native is harder.",
    "They cannot learn the language at all after 17.",
    "They always learn faster than young children do.",
    "The text says that this does not mean that adults cannot learn, and that starting early makes a native-like result easier.",
    "This does not mean that adults cannot learn a language"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Bilingual brains use both languages, and the benefits are debated.",
    "Bilingual brains use only one language at a time.",
    "Bilingual brains are proven to be healthier than others.",
    "The text explains that both languages stay active in a bilingual brain, and then says that the question about benefits is still open.",
    [
     "both languages are partly active in the brain at the same time",
     "Today the question is still open"
    ]
   ],
   [
    "Detail",
    "What happens in the brain of a bilingual person who speaks?",
    "Both languages are partly active at the same time.",
    "Only one language is active at a time.",
    "Neither language is active until a word is chosen.",
    "The text says that both languages are partly active in the brain at the same time.",
    "both languages are partly active in the brain at the same time"
   ],
   [
    "Vocabulary",
    "In the text, “hold back” means…",
    "stop yourself from using.",
    "bring forward and show.",
    "write down slowly.",
    "To speak one language, the brain has to hold back the other, which means that it stops itself from using it.",
    "choose the right word and hold back the other"
   ],
   [
    "Reference",
    "In the first paragraph, “this daily choosing” refers to…",
    "choosing the right word and holding back the other.",
    "using only one language all day long.",
    "switching from reading to writing.",
    "The sentence before says that the brain has to choose the right word and hold back the other, and researchers think that this daily choosing exercises mental skills.",
    "Some researchers think that this daily choosing exercises a set of mental skills called executive control"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many languages the best bilingual speakers know.",
    "What executive control is called.",
    "What the early studies did not take into account.",
    "The text does not say how many languages the best bilingual speakers know. It names executive control and says what the early studies ignored.",
    [
     "a set of mental skills called executive control",
     "did not take education and other differences between groups into account"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about some of the early dementia studies?",
    "Their results may come from other differences.",
    "They were carefully designed and are fully reliable.",
    "They included only people who spoke one language.",
    "The text says that critics think many early studies did not take education and other differences into account.",
    "critics say that many of the early studies did not take education and other differences between groups into account"
   ]
  ]
 },
 "34": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Silbo is a real whistled language that was saved by teaching it.",
    "Silbo is a secret code that only farmers can understand.",
    "Silbo is a Spanish song that is sung across valleys.",
    "The text says that Silbo is not a code and that the island began to teach it in school to save it.",
    [
     "The language is called Silbo Gomero, and it is not a code",
     "the island began to teach Silbo in school in 1999"
    ]
   ],
   [
    "Detail",
    "Why did farmers on La Gomera whistle?",
    "To talk across deep valleys.",
    "To keep their animals calm.",
    "To hide their words from visitors.",
    "The text says that farmers once talked across deep valleys by whistling to each other.",
    "farmers once talked across deep valleys by whistling to each other"
   ],
   [
    "Vocabulary",
    "In the text, “intangible” means…",
    "not something you can touch.",
    "very old and valuable.",
    "owned by one family.",
    "Intangible cultural heritage means traditions, such as a language, that you cannot touch.",
    "intangible cultural heritage"
   ],
   [
    "Reference",
    "In the second paragraph, “it” in “To save it” refers to…",
    "Silbo.",
    "the island.",
    "the school.",
    "The sentence says that fewer people learned Silbo, and to save it the island began to teach it in school.",
    "To save it, the island began to teach Silbo in school in 1999"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people on the island can whistle today.",
    "Why fewer people learned Silbo.",
    "When UNESCO added Silbo to its list.",
    "The text does not say how many people can whistle. It says that roads and telephones made Silbo less necessary and that UNESCO added it in 2009.",
    [
     "roads and telephones made Silbo less necessary",
     "in 2009 UNESCO added it to its list"
    ]
   ],
   [
    "Inference",
    "What does the second paragraph suggest about Silbo before 1999?",
    "It was in danger of disappearing.",
    "It was already taught in all schools.",
    "It was spoken by most people on the island.",
    "The text says that fewer people learned it and that the island acted to save it.",
    [
     "fewer people learned it",
     "To save it"
    ]
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main point of the text?",
    "Sign languages are real languages with their own grammar.",
    "Sign languages are easier to learn than spoken ones.",
    "Sign languages are the same in every country.",
    "The text says that sign languages have their own grammar, vocabulary and accents, and gives Nicaragua as proof.",
    "Sign languages have their own grammar, their own vocabulary and their own regional accents"
   ],
   [
    "Detail",
    "What can the grammar of sign languages use that speech cannot easily use?",
    "Space, the movement of the hands and the face.",
    "Sounds that are too quiet to hear.",
    "Letters written in the air.",
    "The text lists space, the movement of the hands and the expression of the face.",
    "such as space, the movement of the hands and the expression of the face"
   ],
   [
    "Vocabulary",
    "In the text, “a language being born” means…",
    "a language starting to exist.",
    "a language dying out slowly.",
    "a language being forgotten.",
    "The text says that scientists were able to watch a language being born, so they saw a new language begin to exist.",
    "Scientists were able to watch a language being born"
   ],
   [
    "Reference",
    "In the second paragraph, “it” in “today it is called Nicaraguan Sign Language” refers to…",
    "the system of signs.",
    "the capital city.",
    "the school.",
    "The sentence says that each new group of children made the system more regular, and today it is called Nicaraguan Sign Language.",
    "Each new group of children made the system more regular, and today it is called Nicaraguan Sign Language"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people use Nicaraguan Sign Language.",
    "What the grammar of sign languages can use.",
    "Where the best proof comes from.",
    "The text does not give the number of users. It names what sign grammar uses and says that the proof comes from Nicaragua.",
    [
     "the expression of the face",
     "comes from Nicaragua"
    ]
   ],
   [
    "Inference",
    "What does the Nicaragua example suggest about deaf children who meet each other?",
    "They can create a new language together.",
    "They need hearing adults to teach them.",
    "They cannot develop any language.",
    "The text says that the children began to invent signs, and scientists watched a language being born.",
    [
     "the children began to invent signs",
     "Scientists were able to watch a language being born"
    ]
   ]
  ]
 },
 "35": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Banknotes have several features that ordinary people can check.",
    "Banknotes are made from a special kind of metal.",
    "Only banks have the tools to tell a fake note.",
    "The text says that a banknote is made to be checked quickly by ordinary people, with several features.",
    "It is made to be checked quickly by ordinary people"
   ],
   [
    "Detail",
    "What is the simple method for checking a banknote?",
    "Feel, look and tilt.",
    "Fold, tear and smell.",
    "Count, weigh and measure.",
    "The text says that a simple method is often described as feel, look and tilt.",
    "feel, look and tilt"
   ],
   [
    "Vocabulary",
    "In the text, “crisp” means…",
    "firm and fresh, not soft.",
    "dark and shiny.",
    "thick and heavy.",
    "The text says that the paper should be crisp and firm, which means firm and fresh, not soft or limp.",
    "the paper should be crisp and firm"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “so you can feel it with a finger” refers to…",
    "the raised ink.",
    "the paper.",
    "the whole note.",
    "The sentence says that in some places the ink is raised, so you can feel it with a finger.",
    "in some places the ink is raised, so you can feel it with a finger"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much it costs to print a banknote.",
    "What the paper should feel like.",
    "Where the security thread is found.",
    "The text does not give any cost. It says that the paper should feel crisp and firm and that the thread is inside the paper.",
    [
     "the paper should be crisp and firm",
     "a thin security thread inside the paper"
    ]
   ],
   [
    "Inference",
    "Why is the feel, look and tilt method useful for ordinary people?",
    "It lets them check a note quickly without tools.",
    "It needs special machines from a bank.",
    "It takes a trained expert many hours.",
    "The text says that a banknote is made to be checked quickly by ordinary people and that feel, look and tilt is a simple method.",
    [
     "It is made to be checked quickly by ordinary people",
     "a simple method is often described as feel, look and tilt"
    ]
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Banks use programs to spot stolen cards, but they cannot be perfect.",
    "Banks check every payment by calling the customer.",
    "Banks never block any payment that is really yours.",
    "The text explains how programs check payments in a few milliseconds and then says that they are not perfect.",
    [
     "the bank has only a few milliseconds to decide",
     "They are not perfect, however."
    ]
   ],
   [
    "Detail",
    "How long does the bank have to decide about a payment?",
    "A few milliseconds.",
    "A few hours.",
    "A few days.",
    "The text says that the bank has only a few milliseconds to decide.",
    "the bank has only a few milliseconds to decide"
   ],
   [
    "Vocabulary",
    "In the text, “notice” means…",
    "see or become aware of.",
    "invent or build.",
    "forget or ignore.",
    "The programs learn from past fraud, so they can notice new tricks, which means that they can see and recognize them.",
    "so they can notice new tricks"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “compare it with what they know about you” refers to…",
    "the payment.",
    "the bank.",
    "the card.",
    "The sentence says that the bank decides whether the payment is yours, and the programs compare it with what they know about you.",
    "Computer programs compare it with what they know about you"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many payments are blocked every day.",
    "How long the bank has to decide.",
    "What the programs learn from.",
    "The text does not say how many payments are blocked. It gives the few milliseconds and says that the programs learn from past cases of fraud.",
    [
     "only a few milliseconds",
     "The programs learn from millions of past cases of fraud"
    ]
   ],
   [
    "Inference",
    "What does the text suggest that banks must do?",
    "Protect customers without annoying them too often.",
    "Block every payment that looks unusual.",
    "Stop using computer programs.",
    "The text says that banks must balance two risks: letting a thief spend your money, and annoying a real customer.",
    "Banks must balance two risks"
   ]
  ]
 },
 "36": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Batteries wear out as lithium gets trapped, and heat speeds this up.",
    "Batteries wear out only because phones are used too often.",
    "Batteries last longer if they are always charged to 100 percent.",
    "The text explains that lithium gets trapped in a layer and that heat and high charge make the damage faster.",
    [
     "a little lithium is trapped in a thin layer inside the battery",
     "Heat and high charge make the damage faster"
    ]
   ],
   [
    "Detail",
    "What moves inside the battery when you charge a phone?",
    "Lithium ions.",
    "Drops of water.",
    "Tiny pieces of copper.",
    "The text says that when you charge a phone, lithium ions move from one side of the battery to the other.",
    "lithium ions move from one side of the battery to the other"
   ],
   [
    "Vocabulary",
    "In the text, “ages” in “a battery … ages much more quickly” means…",
    "gets older and wears out.",
    "becomes younger and stronger.",
    "is measured by its size.",
    "The text says that a battery stored fully charged in warm conditions ages much more quickly, so it wears out faster.",
    "ages much more quickly than one kept cool"
   ],
   [
    "Reference",
    "In the first paragraph, “they” in “when you use the phone they move back” refers to…",
    "the lithium ions.",
    "the batteries.",
    "the phones.",
    "The sentence says that lithium ions move from one side to the other, and when you use the phone they move back.",
    "lithium ions move from one side of the battery to the other, and when you use the phone they move back"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many cycles a phone battery can last.",
    "What happens to the lithium that is trapped.",
    "What kind of charging experts suggest.",
    "The text does not say how many cycles a battery lasts. It says that trapped lithium cannot be used again and that experts suggest slower charging.",
    [
     "cannot be used again",
     "use slower charging when you are not in a hurry"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a phone that is left in the sun?",
    "Its battery may wear out faster.",
    "Its battery will charge faster.",
    "Its battery will not be affected.",
    "The text says that a battery in warm conditions ages much more quickly, and that experts suggest keeping the phone out of the sun.",
    [
     "ages much more quickly than one kept cool",
     "keep your phone out of the sun"
    ]
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Lithium comes from mines and salt flats, and recycling supplies little.",
    "Lithium comes mainly from recycled phones and old batteries.",
    "Lithium is mined only in Chile and recycled in Australia.",
    "The text describes two ways of getting lithium and then says that recycling supplies only a small part.",
    [
     "The lithium in a phone battery often starts far away from the phone",
     "it supplies about three percent of the world’s lithium"
    ]
   ],
   [
    "Detail",
    "Which country mines the most lithium?",
    "Australia.",
    "Chile.",
    "China.",
    "The text says that Australia mines more lithium than any other country.",
    "Australia mines more lithium than any other country"
   ],
   [
    "Vocabulary",
    "In the text, “plays only a small part” means…",
    "is not very important so far.",
    "does everything alone.",
    "is used only by small countries.",
    "The text says that recycling could reduce the need for new mining, but today it plays only a small part, so it is not yet important.",
    "today it plays only a small part"
   ],
   [
    "Reference",
    "In the second paragraph, “it” in “it supplies about three percent” refers to…",
    "recycling.",
    "mining.",
    "lithium.",
    "The paragraph is about recycling, and according to one estimate it supplies about three percent of the world’s lithium.",
    "According to one estimate, it supplies about three percent of the world’s lithium"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much it costs to build a lithium mine.",
    "Where Chile’s lithium comes from.",
    "How much of the world’s lithium recycling supplies.",
    "The text does not give the cost of a mine. It says that Chile uses salt flats and that recycling supplies about three percent.",
    [
     "gets lithium from salty water that is pumped from under salt flats",
     "it supplies about three percent of the world’s lithium"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about the future of lithium recycling?",
    "It could grow if it becomes easier to get pure lithium.",
    "It will soon replace all mining of hard rock.",
    "It cannot ever be useful for new batteries.",
    "The text says that recycling could reduce the need for mining but that getting pure lithium out of old batteries is still difficult.",
    [
     "Recycling could reduce the need for new mining",
     "getting lithium that is pure enough for new batteries out of old ones is still difficult"
    ]
   ]
  ]
 },
 "37": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "The Mercator map shows directions well but distorts sizes.",
    "The Mercator map shows every country at its true size.",
    "The Mercator map was made to compare the size of countries.",
    "The text says that Mercator kept directions correct, but the map stretches areas far from the equator, so some places look too big.",
    [
     "The reason is the Mercator map",
     "the map stretches areas more and more as they get farther from the equator"
    ]
   ],
   [
    "Detail",
    "About how many times larger than Greenland is Africa?",
    "About fourteen times.",
    "About twice.",
    "About three times.",
    "The text says that Africa is about fourteen times larger.",
    "Africa is about fourteen times larger"
   ],
   [
    "Vocabulary",
    "In the text, “In reality” means…",
    "in fact, as it truly is.",
    "in a dream or a story.",
    "in a few years from now.",
    "The text says that Greenland looks as big as Africa on a map, but in reality Africa is about fourteen times larger, which is the true fact.",
    "In reality, Africa is about fourteen times larger"
   ],
   [
    "Reference",
    "In the first paragraph, “which” in “which was made in 1569” refers to…",
    "the Mercator map.",
    "the classroom.",
    "Greenland.",
    "The sentence says that the reason is the Mercator map, which was made in 1569 by a Flemish mapmaker.",
    "The reason is the Mercator map, which was made in 1569 by a Flemish mapmaker for sailors"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many countries use the Mercator map.",
    "When the Mercator map was made.",
    "What kind of mapmaker made it.",
    "The text does not say how many countries use the Mercator map. It gives the year 1569 and says that a Flemish mapmaker made it.",
    [
     "which was made in 1569 by a Flemish mapmaker",
     "Africa is about fourteen times larger"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about the Mercator map?",
    "It is not the best map for comparing sizes.",
    "It is the most exact map for every purpose.",
    "It is no longer useful to anyone.",
    "The text says that many mapmakers now use other maps that show sizes more fairly.",
    "many mapmakers use other maps that show sizes more fairly"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Phones send anonymous data, and apps use it to show traffic.",
    "Cameras on every street show the traffic to the app.",
    "Drivers must type the speed of their car into the app.",
    "The text says that the app uses information from phones and combines the speeds of many phones on the same road.",
    [
     "Instead, the app uses information from phones",
     "The system combines the speeds of many phones on the same road"
    ]
   ],
   [
    "Detail",
    "What do phones send to the traffic system?",
    "Anonymous data about their position and speed.",
    "Photos of the road taken by the driver.",
    "The names of the drivers who use the app.",
    "The text says that the phones send anonymous data about their position and speed.",
    "their phones send anonymous data about their position and speed"
   ],
   [
    "Vocabulary",
    "In the text, “relied on” means…",
    "depended on.",
    "paid for.",
    "got rid of.",
    "Early traffic maps relied on sensors, which means that they depended on them for information.",
    "they relied on sensors that were placed on main roads"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “the app shows it in red” refers to…",
    "the road.",
    "the phone.",
    "the speed.",
    "The sentence says that if many phones are moving slowly, the road is probably crowded, and the app shows it in red.",
    "the road is probably crowded, and the app shows it in red"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many phones are needed to show a road in red.",
    "How users can stop location sharing.",
    "What the colors of the roads show.",
    "The text does not say how many phones are needed. It says that users can switch off location sharing and that red shows a crowded road.",
    [
     "Users can switch off location sharing in their phone settings",
     "the road is probably crowded, and the app shows it in red"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about small streets in early traffic maps?",
    "Their traffic was often not shown well.",
    "They had the best traffic information.",
    "They had more sensors than the main roads.",
    "The text says that early maps relied on sensors on main roads, so many smaller streets had little information.",
    "many smaller streets had little information"
   ]
  ]
 },
 "38": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Atomic clocks count the vibrations of atoms and are extremely accurate.",
    "Atomic clocks count the swings of a pendulum very quickly.",
    "Atomic clocks are used only in watches for sports.",
    "The text explains that an atomic clock counts the vibration of atoms and says that the best clocks are very accurate.",
    [
     "An atomic clock counts something far more regular: the natural vibration of atoms",
     "The best cesium clocks are so accurate"
    ]
   ],
   [
    "Detail",
    "What does an atomic clock count?",
    "The natural vibrations of atoms.",
    "The swings of a pendulum.",
    "The shaking of a small crystal.",
    "The text says that an atomic clock counts the natural vibration of atoms.",
    "the natural vibration of atoms"
   ],
   [
    "Vocabulary",
    "In the text, “regular” in “far more regular” means…",
    "happening in the same way each time.",
    "very rare and unusual.",
    "very loud and clear.",
    "The text says that atoms vibrate in a far more regular way than a pendulum, which means that they repeat the same way each time.",
    "something far more regular"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “and then counts it” refers to…",
    "the exact frequency.",
    "the machine.",
    "the microwave.",
    "The sentence says that a machine uses microwaves to find that exact frequency and then counts it.",
    "A machine uses microwaves to find that exact frequency and then counts it"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "Who built the first atomic clock.",
    "What an ordinary clock counts.",
    "How a machine finds the frequency.",
    "The text does not say who built the first atomic clock. It says what an ordinary clock counts and how a machine finds the frequency.",
    [
     "An ordinary clock counts the swings of a pendulum",
     "A machine uses microwaves to find that exact frequency"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about two atomic clocks in different countries?",
    "They would give the same result.",
    "They would differ by a minute every year.",
    "They would need to be compared with a pendulum.",
    "The text says that because every cesium atom is the same, any atomic clock in the world can reach the same result.",
    "Because every cesium atom is the same, any atomic clock in the world can reach the same result"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "The calendar needs leap years because a year is not exactly 365 days.",
    "Leap years exist because the Sun moves backward every four years.",
    "Leap years were invented by Pope Gregory XIII in 1582.",
    "The text explains that a year is not exactly 365 days and that leap years and a later rule fix the calendar.",
    [
     "A year on Earth is not exactly 365 days",
     "a new rule was added"
    ]
   ],
   [
    "Detail",
    "How long does Earth take to go once around the Sun?",
    "About 365 days and almost six hours.",
    "Exactly 365 days.",
    "About 366 days and a few minutes.",
    "The text says that the Earth takes about 365 days and almost six hours.",
    "about 365 days and almost six hours"
   ],
   [
    "Vocabulary",
    "In the text, “out of step” means…",
    "not matching correctly.",
    "moving very fast.",
    "walking in a straight line.",
    "The text says that the calendar was about ten days out of step, so it did not match the seasons correctly.",
    "the calendar was about ten days out of step"
   ],
   [
    "Reference",
    "In the second paragraph, “it” in “Pope Gregory XIII fixed it” refers to…",
    "the problem of the calendar.",
    "the extra day in February.",
    "the year 1582.",
    "The sentence before says that the calendar was about ten days out of step, and Pope Gregory XIII fixed it.",
    "In 1582, Pope Gregory XIII fixed it"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people used the new calendar.",
    "When Gregory fixed the calendar.",
    "What happens to years that end in 00.",
    "The text does not say how many people used the new calendar. It gives the year 1582 and the rule for years that end in 00.",
    [
     "In 1582, Pope Gregory XIII fixed it",
     "A year that ends in 00 is a leap year only if it can be divided by 400"
    ]
   ],
   [
    "Inference",
    "What can we understand about the year 2100?",
    "It will not be a leap year.",
    "It will be a leap year, like 2000.",
    "It will have 367 days.",
    "The year 2100 ends in 00, and it cannot be divided by 400, so the new rule says that it is not a leap year.",
    "A year that ends in 00 is a leap year only if it can be divided by 400."
   ]
  ]
 },
 "39": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "The sea is salty because rivers bring minerals and the salt stays.",
    "The sea is salty because fish put salt into the water.",
    "The sea becomes much saltier with every year that passes.",
    "The text explains that rivers carry minerals to the sea and that the salt stays behind when water evaporates.",
    [
     "Rivers carry these dissolved minerals to the sea",
     "the salt stays behind"
    ]
   ],
   [
    "Detail",
    "Why is rain slightly acidic?",
    "It dissolves a little carbon dioxide from the air.",
    "It picks up salt from the sea.",
    "It falls through smoke from factories.",
    "The text says that rain is slightly acidic because it dissolves a little carbon dioxide from the air.",
    "it dissolves a little carbon dioxide from the air"
   ],
   [
    "Vocabulary",
    "In the text, “washes … out” means…",
    "carries away with water.",
    "puts back with force.",
    "paints over with color.",
    "The text says that rain washes tiny amounts of minerals out of the rocks, so it carries them away.",
    "washes tiny amounts of minerals out of them"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “it slowly breaks down rocks” refers to…",
    "the rain.",
    "the land.",
    "the sea.",
    "The sentence says that when the rain falls on land, it slowly breaks down rocks.",
    "When it falls on land, it slowly breaks down rocks"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How old the sea is.",
    "What makes rain slightly acidic.",
    "Where hot springs add minerals.",
    "The text does not say how old the sea is. It says what makes rain acidic and that underwater hot springs add minerals.",
    [
     "Rain is slightly acidic, because it dissolves a little carbon dioxide from the air",
     "Underwater hot springs add more minerals"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about the saltiness of the sea?",
    "It stays about the same over time.",
    "It is increasing faster every year.",
    "It will soon be too salty for fish.",
    "The text says that some minerals sink to the sea floor, and the amount of salt stays about the same.",
    "the amount of salt stays about the same"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "The Moon mainly causes the tides, and the Sun and coast change them.",
    "The Sun mainly causes the tides, and the Moon changes them.",
    "The tides are caused by wind blowing across the sea.",
    "The text says that the main cause is the Moon, that the Sun has a smaller effect, and that the shape of the coast matters too.",
    [
     "The main cause is the Moon",
     "The Sun also has an effect, though a smaller one"
    ]
   ],
   [
    "Detail",
    "How many high tides do most coasts have each day?",
    "Two.",
    "One.",
    "Four.",
    "The text says that most coasts have two high tides and two low tides every day.",
    "Most coasts have two high tides and two low tides every day."
   ],
   [
    "Vocabulary",
    "In the text, “solid” in “the solid Earth” means…",
    "hard, not liquid.",
    "very large.",
    "very old.",
    "The text compares the solid Earth with the water, which is liquid.",
    "the Moon pulls the solid Earth more strongly"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “it has two high tides” refers to…",
    "a coast.",
    "the Moon.",
    "a bulge.",
    "The sentence says that as the Earth turns, a coast passes through both bulges, and it has two high tides.",
    "As the Earth turns, a coast passes through both bulges, and it has two high tides"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How high the tide is in the open sea.",
    "Where the Bay of Fundy is.",
    "What happens at new moon and full moon.",
    "The text does not say how high the tide is in the open sea. It names the Bay of Fundy in Canada and says that the tides are stronger at new moon and full moon.",
    [
     "In the Bay of Fundy, in Canada",
     "at new moon and full moon, the tides are stronger"
    ]
   ],
   [
    "Inference",
    "What does the Bay of Fundy example suggest?",
    "The shape of a coast can make tides much bigger.",
    "The Moon is closer to Canada than to other places.",
    "Tides are always about sixteen meters high.",
    "The text says that the size of the tides depends on the shape of the coast, and gives the Bay of Fundy as an example.",
    "The size of the tides depends on the shape of the coast as well."
   ]
  ]
 },
 "40": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "The sky is blue and sunsets are red because air scatters blue light.",
    "The sky is blue because it reflects the color of the sea.",
    "Sunsets are red because the Sun becomes much hotter at night.",
    "The text explains that blue light is scattered to all parts of the sky and that at sunset most of the blue light is scattered out.",
    [
     "blue light comes to your eyes from every part of the sky",
     "most of the blue light is scattered out of the beam"
    ]
   ],
   [
    "Detail",
    "What is sunlight a mixture of?",
    "All the colors of the rainbow.",
    "Only blue and white light.",
    "Light and heat but no color.",
    "The text says that sunlight looks white, but it is a mixture of all the colors of the rainbow.",
    "it is a mixture of all the colors of the rainbow"
   ],
   [
    "Vocabulary",
    "In the text, “beam” means…",
    "a narrow stream of light.",
    "a large piece of wood.",
    "a bright star.",
    "The text says that at sunset most of the blue light is scattered out of the beam, which is the narrow stream of light from the Sun.",
    "most of the blue light is scattered out of the beam"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “When it enters the atmosphere” refers to…",
    "sunlight.",
    "the sky.",
    "the rainbow.",
    "The sentence says that sunlight is a mixture of colors, and when it enters the atmosphere it meets tiny molecules of gas.",
    "When it enters the atmosphere, it meets billions of tiny molecules of gas"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How far the Sun is from the Earth.",
    "What sunlight is a mixture of.",
    "Why a hazy sky looks paler.",
    "The text does not say how far the Sun is. It says what sunlight is a mixture of and why a hazy sky looks paler.",
    [
     "it is a mixture of all the colors of the rainbow",
     "a hazy sky often looks paler"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about a hazy sky?",
    "Dust and water drops make it look paler.",
    "It looks bluer because there is less air.",
    "It looks darker because there is more dust.",
    "The text says that dust and tiny drops of water also scatter light, which is why a hazy sky often looks paler.",
    "Dust and tiny drops of water also scatter light, which is why a hazy sky often looks paler."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "A rainbow forms when sunlight bends and reflects inside raindrops.",
    "A rainbow forms when clouds break the sunlight into colors.",
    "A rainbow is a real object that stays in one place.",
    "The text explains that sunlight bends and splits in a raindrop, reflects off the back of the drop and bends again.",
    [
     "When sunlight enters a raindrop, it bends and splits into colors",
     "The light then reflects off the back of the drop"
    ]
   ],
   [
    "Detail",
    "Where must you stand to see a rainbow?",
    "With the Sun behind you.",
    "With the Sun in front of you.",
    "Directly below the rain cloud.",
    "The text says that you must stand with the Sun behind you.",
    "you must stand with the Sun behind you"
   ],
   [
    "Vocabulary",
    "In the text, “leaves” in “as it leaves” means…",
    "goes out of the drop.",
    "falls from a tree.",
    "stays inside the drop.",
    "The light enters the raindrop, reflects, and bends again as it leaves, which means as it goes out of the drop.",
    "bends again as it leaves"
   ],
   [
    "Reference",
    "In the first paragraph, “those drops” refers to…",
    "the drops that are at the right angle to your eye.",
    "all of the raindrops that are falling in the sky.",
    "the drops that fall right in front of the Sun.",
    "The sentence before says that you see only the drops that are at the right angle to your eye, and those drops are different for each person.",
    "you see only the drops that are at the right angle to your eye. Because those drops are different for each person"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many colors a rainbow has.",
    "The angle at which red light leaves the drop.",
    "Why two people see different rainbows.",
    "The text does not give the number of colors. It gives the angle for red light and says that the drops are different for each person.",
    [
     "Red light leaves at an angle of about 42 degrees",
     "no two people see exactly the same rainbow"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about two people standing side by side?",
    "They see slightly different rainbows.",
    "They see exactly the same rainbow.",
    "They see rainbows with different colors.",
    "The text says that no two people see exactly the same rainbow, because the drops that send light to each eye are different.",
    "no two people see exactly the same rainbow"
   ]
  ]
 },
 "41": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Magma rises and erupts, and most volcanoes form where plates meet.",
    "Volcanoes erupt only in the Philippines and in Hawaii.",
    "Volcanoes form when the mantle becomes cold and hard.",
    "The text explains that magma rises to the surface and erupts, and that most volcanoes are found where two plates meet.",
    [
     "Magma is lighter than the solid rock around it, so it rises",
     "Most volcanoes are found where two of the huge plates"
    ]
   ],
   [
    "Detail",
    "Where are most volcanoes found?",
    "Where two of the Earth’s plates meet.",
    "In the middle of the oceans.",
    "At the top of the highest mountains.",
    "The text says that most volcanoes are found where two of the huge plates meet.",
    "Most volcanoes are found where two of the huge plates that make up the Earth’s surface meet."
   ],
   [
    "Vocabulary",
    "In the text, “sinks” means…",
    "goes down.",
    "melts away.",
    "turns around.",
    "The text says that one plate slides under another and sinks, which means that it goes down into the mantle.",
    "one plate slides under another and sinks into"
   ],
   [
    "Reference",
    "In the first paragraph, the second “it” in “so it rises” refers to…",
    "magma.",
    "the solid rock.",
    "the surface.",
    "The sentence says that magma is lighter than the solid rock around it, so magma rises.",
    "Magma is lighter than the solid rock around it, so it rises"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people have died in eruptions.",
    "Where the Ring of Fire is found.",
    "Which volcanoes are in the Philippines.",
    "The text does not mention deaths. It says that the Ring of Fire is around the Pacific Ocean and names Taal, Mayon and Pinatubo.",
    [
     "a belt of volcanoes and earthquakes around the Pacific Ocean",
     "including Taal, Mayon and Pinatubo"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about the volcanoes in Hawaii?",
    "They do not need two plates to meet.",
    "They form at the edge of a plate.",
    "They are the oldest in the world.",
    "The text says that a few volcanoes, such as those in Hawaii, form over hot spots, even in the middle of a plate.",
    [
     "A few volcanoes, such as those in Hawaii, form over hot spots",
     "even in the middle of a plate"
    ]
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "The Pinatubo eruption cooled the Earth for a few years.",
    "The Pinatubo eruption made the Earth much hotter.",
    "The Pinatubo eruption was the biggest in all history.",
    "The text explains that the gas from Pinatubo made drops that reflected sunlight, and the Earth cooled for some years.",
    [
     "the average temperature of the Earth fell by about half a degree Celsius",
     "The effect of the eruption did not last"
    ]
   ],
   [
    "Detail",
    "By how much did the average temperature fall?",
    "By about half a degree Celsius.",
    "By about ten degrees Celsius.",
    "By about two degrees Celsius.",
    "The text says that the average temperature of the Earth fell by about half a degree Celsius.",
    "fell by about half a degree Celsius"
   ],
   [
    "Vocabulary",
    "In the text, “huge” means…",
    "very large.",
    "very old.",
    "very dark.",
    "The text says that a huge cloud of ash rose into the sky, which means that it was very large.",
    "A huge cloud of ash"
   ],
   [
    "Reference",
    "In the text, “There” in “There the gas changed” refers to…",
    "the stratosphere.",
    "the weather.",
    "the Philippines.",
    "The sentence before says that the gas went into the stratosphere, and there the gas changed into tiny drops.",
    "into the stratosphere, high above the weather. There the gas changed into tiny drops"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people lived near Pinatubo.",
    "How long the drops stayed in the air.",
    "When the eruption happened.",
    "The text does not say how many people lived near Pinatubo. It says that the drops stayed for up to three years and that the eruption was in June 1991.",
    [
     "up to three years",
     "In June 1991"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about the cooling?",
    "It was only temporary.",
    "It was permanent.",
    "It happened only in the Philippines.",
    "The text says that the effect did not last, and temperatures returned to normal.",
    "The effect of the eruption did not last"
   ]
  ]
 },
 "42": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Capsaicin sends a false heat signal, but birds do not feel it.",
    "Chili peppers feel hot because they are warm in temperature.",
    "Birds avoid chili peppers because the peppers hurt them.",
    "The text explains that chili peppers feel hot because capsaicin sends the same signal as heat, and that birds do not react to it.",
    [
     "Chili peppers are not hot in temperature, but they feel hot",
     "the sensor sends the same signal to the brain as real heat"
    ]
   ],
   [
    "Detail",
    "What is the chemical in chili peppers that causes the feeling of heat?",
    "Capsaicin.",
    "Caffeine.",
    "Chlorophyll.",
    "The text says that the chemical that causes this is capsaicin.",
    "The chemical that causes this is capsaicin."
   ],
   [
    "Vocabulary",
    "In the text, “avoid” means…",
    "stay away from.",
    "look for.",
    "grow near.",
    "The text says that mammals avoid the peppers, which means that they stay away from them.",
    "mammals, which chew and destroy seeds, avoid the peppers"
   ],
   [
    "Reference",
    "In the second paragraph, “they” in “so they eat chili peppers” refers to…",
    "birds.",
    "sensors.",
    "scientists.",
    "The sentence says that the sensors of birds hardly react to capsaicin, so the birds eat chili peppers without discomfort.",
    "Birds are different. Their sensors react to heat but hardly react to capsaicin, so they eat chili peppers without discomfort."
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much capsaicin a chili pepper contains.",
    "What capsaicin does to the sensors.",
    "How the plant may gain from birds.",
    "The text does not give the amount of capsaicin. It says that capsaicin fits a sensor and that birds spread the seeds.",
    [
     "Capsaicin fits one of these sensors",
     "birds eat them and spread the seeds"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about the chili plant?",
    "It may gain from birds eating its peppers.",
    "It dies if birds eat its seeds.",
    "It needs mammals to eat its peppers.",
    "The text says that mammals destroy seeds and avoid the peppers, while birds eat them and spread the seeds.",
    "mammals, which chew and destroy seeds, avoid the peppers, while birds eat them and spread the seeds"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Most flavor comes from smell, so a blocked nose makes food bland.",
    "The tongue can detect many more tastes than five.",
    "A cold damages the tongue so that it cannot taste.",
    "The text explains that most flavor comes from smell and that a cold blocks the particles from the smell cells.",
    [
     "Most of what we call flavor comes from smell",
     "the particles cannot reach the smell cells"
    ]
   ],
   [
    "Detail",
    "How many basic tastes can the tongue detect?",
    "Five.",
    "Three.",
    "Eight.",
    "The text says that the tongue can detect only five basic tastes.",
    "Your tongue can detect only five basic tastes"
   ],
   [
    "Vocabulary",
    "In the text, “disappears” means…",
    "goes away.",
    "gets much stronger.",
    "changes into a taste.",
    "The text says that the detailed flavor, such as chocolate, coffee or garlic, disappears when you have a cold, so it goes away.",
    "the detailed flavor, such as chocolate, coffee or garlic, disappears"
   ],
   [
    "Reference",
    "In the last sentence, “it” in “open it again” refers to…",
    "your nose.",
    "the jelly bean.",
    "your mouth.",
    "The sentence tells you to hold your nose closed while you eat a jelly bean, and to open your nose again after a few seconds.",
    "hold your nose closed while you eat a jelly bean, and open it again after a few seconds"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many smell cells there are in the nose.",
    "What kind of food has the umami taste.",
    "How to test the idea with a jelly bean.",
    "The text does not give the number of smell cells. It names foods with the umami taste and describes the jelly bean test.",
    [
     "umami, the savory taste of foods such as meat and mushrooms",
     "hold your nose closed while you eat a jelly bean"
    ]
   ],
   [
    "Inference",
    "What does the jelly bean test suggest?",
    "The flavor returns when smell can reach the nose.",
    "A jelly bean has no taste for the tongue.",
    "The tongue alone gives all the flavor.",
    "The text says that the brain puts smell and taste together, so when your nose is open again, the flavor of the jelly bean comes back.",
    [
     "the brain puts the smell together with the taste from the tongue",
     "open it again after a few seconds"
    ]
   ]
  ]
 },
 "43": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Soreness comes from tiny damage in the muscle, not from lactic acid.",
    "Lactic acid causes soreness that stays for many days.",
    "Soreness appears right after exercise and quickly goes away.",
    "The text explains that lactic acid is a myth and that the real cause of soreness is tiny damage to the muscle fibers.",
    [
     "Many people believe that lactic acid causes this pain, but that is a myth",
     "The real cause is tiny damage to the muscle fibers"
    ]
   ],
   [
    "Detail",
    "How long after exercise does lactic acid leave the muscles?",
    "Within about an hour.",
    "After about two days.",
    "After about a week.",
    "The text says that lactic acid leaves the muscles within about an hour after exercise.",
    "Lactic acid leaves the muscles within about an hour after exercise"
   ],
   [
    "Vocabulary",
    "In the text, “lengthens” means…",
    "becomes longer.",
    "becomes weaker.",
    "stops moving.",
    "The text says that the damage happens especially when the muscle lengthens, as in walking downhill, so it becomes longer.",
    "especially when the muscle lengthens while it is working"
   ],
   [
    "Reference",
    "In the first paragraph, “that” in “but that is a myth” refers to…",
    "the idea that lactic acid causes pain.",
    "the soreness after a workout.",
    "the damage to the muscle fibers.",
    "The sentence says that many people believe that lactic acid causes the pain, but that belief is a myth.",
    "Many people believe that lactic acid causes this pain, but that is a myth."
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "Which medicine can stop the soreness.",
    "When the soreness usually reaches its peak.",
    "What happens to lactic acid after exercise.",
    "The text does not mention any medicine. It says when the soreness reaches its peak and that lactic acid leaves the muscles within an hour.",
    [
     "The soreness usually reaches its peak after one to three days",
     "Lactic acid leaves the muscles within about an hour after exercise"
    ]
   ],
   [
    "Inference",
    "What can we understand about walking downhill?",
    "It can cause soreness, because the muscle lengthens.",
    "It never causes soreness, because it is easy.",
    "It causes soreness only in the muscles of the back.",
    "The text gives walking downhill as an example of a muscle lengthening while it works, which is the main cause of the damage.",
    "especially when the muscle lengthens while it is working, as in walking downhill"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Exercise may help the brain, but more research is needed.",
    "Exercise helps the heart but does not affect the brain.",
    "Stretching is better for memory than walking is.",
    "The text says that research suggests exercise helps the brain, but that the results have limits and more studies are needed.",
    [
     "research suggests that it helps the brain too",
     "more studies are needed"
    ]
   ],
   [
    "Detail",
    "What did one group do for a year?",
    "Walked for 40 minutes, three times a week.",
    "Ran for an hour every day.",
    "Lifted weights twice a week.",
    "The text says that one group walked for 40 minutes, three times a week, for a year.",
    "One group walked for 40 minutes, three times a week, for a year."
   ],
   [
    "Vocabulary",
    "In the text, “divided” means…",
    "separated into parts.",
    "joined together.",
    "sent home.",
    "The text says that 120 adults were divided into two groups, which means that they were separated into two parts.",
    "were divided into two groups"
   ],
   [
    "Reference",
    "In the first paragraph, “it” in “while it had become smaller” refers to…",
    "the hippocampus.",
    "the study.",
    "the other group.",
    "The sentence says that the hippocampus was about two percent larger in the walkers, while it had become smaller in the other group.",
    "the hippocampus, a part of the brain that is important for memory, was about two percent larger in the walkers, while it had become smaller"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much the walkers’ blood pressure fell.",
    "What the hippocampus is important for.",
    "That the stretching group improved on one test.",
    "The text does not mention blood pressure. It says that the hippocampus is important for memory and that the stretching group improved on one test.",
    [
     "a part of the brain that is important for memory",
     "the stretching group also improved on one memory test"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about the research?",
    "Scientists do not yet know all the answers.",
    "Scientists have finished studying exercise.",
    "Exercise has been proven not to help the brain.",
    "The text says that more studies are needed to learn which kinds of exercise help most, so the research is not complete.",
    "Scientists say that more studies are needed to learn which kinds of exercise help most, and for whom."
   ]
  ]
 },
 "44": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Stars are born when gas clouds fall together and start fusion.",
    "Stars are born when planets crash into each other.",
    "Stars begin as small hot balls that slowly become cold.",
    "The text explains that a cloud of gas falls together, heats up and starts nuclear fusion, and then the star is born.",
    [
     "Stars begin in huge, cold clouds of gas and dust called nebulae",
     "hydrogen atoms begin to join together in a process called nuclear fusion"
    ]
   ],
   [
    "Detail",
    "Where do stars begin?",
    "In huge, cold clouds of gas and dust.",
    "In the centers of old galaxies.",
    "In the tails of comets.",
    "The text says that stars begin in huge, cold clouds of gas and dust called nebulae.",
    "Stars begin in huge, cold clouds of gas and dust called nebulae."
   ],
   [
    "Vocabulary",
    "In the text, “faint” means…",
    "weak and hard to see.",
    "very bright.",
    "very fast.",
    "The text says that the Orion Nebula looks like a faint patch, which means that it is weak and hard to see.",
    "a faint patch in the constellation Orion"
   ],
   [
    "Reference",
    "In the text, “there” in “planets can form there later” refers to…",
    "in the disk around the protostar.",
    "in the Orion Nebula.",
    "in the center of the star.",
    "The sentence says that leftover material forms a flat spinning disk around the protostar, and planets can form there later.",
    "Leftover material forms a flat spinning disk around it, and planets can form there later."
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many stars are born every year.",
    "What forms around a protostar.",
    "Where stars are being born today.",
    "The text does not say how many stars are born. It says that a disk forms around a protostar and that the Orion Nebula is a place of star birth today.",
    [
     "Leftover material forms a flat spinning disk around it",
     "The Orion Nebula"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a young star?",
    "It stays steady when the two forces are in balance.",
    "It disappears when gravity becomes stronger.",
    "It becomes stronger when fusion is stopped.",
    "The text says that the outward push of fusion energy balances gravity, and at that moment the star is born and can stay steady.",
    "the outward push of this energy balances gravity. At that moment, the star is born."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "How a star ends depends on its mass, and its remains can make new stars.",
    "All stars end as black holes after a supernova explosion.",
    "The Sun will explode as a supernova in five billion years.",
    "The text explains that the death of a star depends on its mass and that the material it scatters can form new stars and planets.",
    [
     "What happens next depends on the star’s mass",
     "later this material can form new stars and planets"
    ]
   ],
   [
    "Detail",
    "What will the Sun become in about five billion years?",
    "A red giant.",
    "A black hole.",
    "A supernova.",
    "The text says that in about five billion years the Sun will swell into a red giant.",
    "In about five billion years, it will swell into a red giant"
   ],
   [
    "Vocabulary",
    "In the text, “fades” means…",
    "becomes less bright.",
    "grows much larger.",
    "moves away quickly.",
    "The text says that a white dwarf slowly cools and fades, which means that it becomes less bright.",
    "which slowly cools and fades"
   ],
   [
    "Reference",
    "In the text, “which” in “which slowly cools and fades” refers to…",
    "the white dwarf.",
    "the red giant.",
    "the Sun.",
    "The sentence says that what remains is a small, hot core called a white dwarf, which slowly cools and fades.",
    "a white dwarf, about the size of the Earth, which slowly cools and fades"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How far the nearest supernova is from Earth.",
    "How big a white dwarf is.",
    "Which atoms in our bodies were made inside stars.",
    "The text does not say how far the nearest supernova is. It says how big a white dwarf is and that carbon and oxygen were made inside stars.",
    [
     "about the size of the Earth",
     "such as carbon and oxygen"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about the atoms in our bodies?",
    "Some were made inside earlier stars.",
    "All of them were made on the Earth.",
    "They came from the Moon.",
    "The text says that atoms such as carbon and oxygen in our bodies were made inside stars.",
    "Many of the atoms in our bodies, such as carbon and oxygen, were made inside stars like these."
   ]
  ]
 },
 "45": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "The Moon probably formed from material thrown out by a giant impact.",
    "The Moon was once a planet that passed near the Earth.",
    "The Moon formed from the rocks that astronauts brought back.",
    "The text explains that a planet-sized body hit the young Earth and that the material thrown into space joined together to form the Moon.",
    [
     "most astronomers favor the giant impact idea",
     "This material circled the Earth and, over time, joined together to form the Moon"
    ]
   ],
   [
    "Detail",
    "What is Theia, according to the text?",
    "A planet-sized body about the size of Mars.",
    "A rock that Apollo astronauts brought back.",
    "The name of the first crater on the Moon.",
    "The text says that Theia was a planet-sized body about the size of Mars.",
    "a planet-sized body, often called Theia and about the size of Mars"
   ],
   [
    "Vocabulary",
    "In the text, “crashed into” means…",
    "hit with great force.",
    "flew far away from.",
    "passed quietly beside.",
    "The text says that a planet-sized body crashed into the young Earth, and the collision threw hot rock into space, so it hit the Earth with great force.",
    "crashed into it"
   ],
   [
    "Reference",
    "In the text, “it” in “crashed into it” refers to…",
    "the Earth.",
    "Mars.",
    "the Moon.",
    "The sentence says that, when the Earth was still young, a planet-sized body crashed into the Earth.",
    "when the Earth was still young, a planet-sized body, often called Theia and about the size of Mars, crashed into it"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "Who first suggested the giant impact idea.",
    "How long ago the impact happened.",
    "What the Apollo astronauts brought back.",
    "The text does not say who first suggested the idea. It says when the impact happened and that Apollo astronauts brought back rocks.",
    [
     "About 4.5 billion years ago",
     "the rocks that Apollo astronauts brought back"
    ]
   ],
   [
    "Inference",
    "Why does the writer say that the idea is not perfect?",
    "The Moon’s rocks might be expected to look more different.",
    "No one has ever seen the Moon up close.",
    "Scientists have already shown that it is wrong.",
    "The text says that if the Moon came mainly from the other body, its rocks might look more different from Earth’s.",
    "its rocks might be expected to look more different"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "The same side of the Moon always faces us because of tidal locking.",
    "The far side of the Moon is always dark and gets no sunlight.",
    "The Moon does not turn at all as it goes around the Earth.",
    "The text explains that the Moon spins once in the same time it goes around the Earth, so the same side faces us, which is called tidal locking.",
    [
     "the same side always faces us",
     "This is called tidal locking"
    ]
   ],
   [
    "Detail",
    "When were the first photographs of the far side taken?",
    "In 1959.",
    "In 1859.",
    "In 1969.",
    "The text says that Luna 3 took the first photographs of the far side in 1959.",
    "until 1959, when a Soviet space probe, Luna 3, took the first photographs of it"
   ],
   [
    "Vocabulary",
    "In the text, “faces” means…",
    "is turned toward.",
    "moves away from.",
    "is hidden from.",
    "The text says that the same side always faces us, which means that it is turned toward us.",
    "the same side always faces us"
   ],
   [
    "Reference",
    "In the last sentence, “it” in “it has many more craters” refers to…",
    "the far side.",
    "the near side.",
    "the Earth.",
    "The sentence says that the far side looks different, and that it has many more craters and far fewer dark plains.",
    "It looks different too: it has many more craters and far fewer dark plains."
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How big the far side is.",
    "What the far side looks like.",
    "Who took the first photographs of it.",
    "The text does not give the size of the far side. It describes craters and plains and names the space probe Luna 3.",
    [
     "it has many more craters and far fewer dark plains",
     "a Soviet space probe, Luna 3"
    ]
   ],
   [
    "Inference",
    "What does the first paragraph suggest about other moons?",
    "Some also show the same face to their planets.",
    "They spin much faster than our Moon does.",
    "They have no gravity from their planets.",
    "The text says that many moons in the Solar System are locked to their planets in the same way as our Moon.",
    "Many moons in the Solar System are locked to their planets in the same way."
   ]
  ]
 },
 "46": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Webb looks at infrared light to see the first galaxies.",
    "Webb looks at visible light from nearby stars.",
    "Webb is a small telescope that stays close to Earth.",
    "The text explains that Webb looks mostly at infrared light, which allows it to see light from the first galaxies.",
    [
     "Webb looks mostly at infrared light",
     "light from the first galaxies has been traveling for more than 13 billion years"
    ]
   ],
   [
    "Detail",
    "How wide is Webb’s main mirror?",
    "6.5 meters.",
    "2.4 meters.",
    "15 meters.",
    "The text says that the main mirror is 6.5 meters wide.",
    "Its main mirror is 6.5 meters wide"
   ],
   [
    "Vocabulary",
    "In the text, “launched” means…",
    "sent into space.",
    "built on the ground.",
    "brought back to Earth.",
    "The text says that Webb was launched on Christmas Day in 2021, which means that it was sent into space.",
    "launched on Christmas Day in 2021"
   ],
   [
    "Reference",
    "In the text, “it” in “has stretched it” refers to…",
    "the light from the first galaxies.",
    "the expansion of the universe.",
    "the mirror of the telescope.",
    "The sentence says that the expansion of the universe has stretched the light from the first galaxies from visible light into infrared.",
    "light from the first galaxies has been traveling for more than 13 billion years, and the expansion of the universe has stretched it from visible light into infrared"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much the telescope cost.",
    "Where the telescope sits.",
    "What the mirror is covered with.",
    "The text does not give the cost. It says that the telescope sits about 1.5 million kilometers away and that the mirror is covered with gold.",
    [
     "It sits about 1.5 million kilometers from Earth",
     "covered with a thin layer of gold"
    ]
   ],
   [
    "Inference",
    "What does the sunshield suggest about the telescope?",
    "A warm telescope would work badly.",
    "It needs more sunlight to work better.",
    "The gold on the mirror keeps it warm.",
    "The text says that Webb must stay very cold to work, so it is kept in shadow by a sunshield.",
    "To work, Webb must stay very cold, so a sunshield the size of a tennis court keeps the telescope in shadow."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Astronomers use parallax to measure the distance to nearby stars.",
    "Astronomers measure the distance to stars by their colors.",
    "Astronomers use light-years because stars are quite close.",
    "The text explains that astronomers measure how a nearby star seems to shift and then use geometry to calculate the distance.",
    [
     "For nearby stars, astronomers use parallax",
     "use geometry to calculate the distance"
    ]
   ],
   [
    "Detail",
    "About how far away is Proxima Centauri?",
    "About 4.2 light-years.",
    "About 42 light-years.",
    "About 0.4 light-years.",
    "The text says that Proxima Centauri is about 4.2 light-years away.",
    "is about 4.2 light-years away"
   ],
   [
    "Vocabulary",
    "In the text, “calculate” means…",
    "work out with numbers.",
    "draw on a map.",
    "guess without measuring.",
    "The text says that astronomers use geometry to calculate the distance, which means that they work it out with numbers.",
    "use geometry to calculate the distance"
   ],
   [
    "Reference",
    "In the text, “this tiny angle” refers to…",
    "how much a nearby star seems to shift.",
    "how far light travels in one year.",
    "how the finger looks to one eye.",
    "The sentence before says that a nearby star seems to shift slightly against more distant stars, and astronomers measure this tiny angle.",
    "a nearby star seems to shift slightly against much more distant stars. Astronomers measure this tiny angle"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much money the Gaia telescope cost.",
    "When the first successful measurement was made.",
    "What the Gaia telescope measures.",
    "The text does not say how much Gaia cost. It says when the first measurement was made and that Gaia measures parallaxes.",
    [
     "The first successful measurement was made in 1838",
     "Gaia measures parallaxes for well over a billion stars"
    ]
   ],
   [
    "Inference",
    "What does the last sentence show about modern measurements?",
    "Gaia can measure parallaxes for a huge number of stars.",
    "Only a handful of stars can be measured.",
    "Parallax cannot be used from space.",
    "The text says that Gaia measures parallaxes for well over a billion stars.",
    "Gaia measures parallaxes for well over a billion stars"
   ]
  ]
 },
 "47": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "A black hole has very strong gravity, but it is dangerous only close by.",
    "A black hole pulls in everything in its galaxy like a vacuum cleaner.",
    "A black hole forms when a star becomes too cold.",
    "The text explains that nothing can escape a black hole’s gravity, but the danger exists only very close to it.",
    [
     "A black hole is a region of space where gravity is so strong that nothing can escape from it",
     "Danger exists only very close to the horizon"
    ]
   ],
   [
    "Detail",
    "How do many black holes form?",
    "A very heavy star runs out of fuel and its core collapses.",
    "Two large planets crash into each other at high speed.",
    "A galaxy begins to spin much too fast and breaks up.",
    "The text says that many black holes form when a very heavy star runs out of fuel and its core collapses.",
    "when a very heavy star runs out of fuel and its core collapses"
   ],
   [
    "Vocabulary",
    "In the text, “suddenly” means…",
    "all at once.",
    "very slowly.",
    "after a long time.",
    "The text says that if the Sun suddenly became a black hole, it would change all at once.",
    "If the Sun suddenly became a black hole"
   ],
   [
    "Reference",
    "In the text, “this boundary” refers to…",
    "the event horizon.",
    "the center of the galaxy.",
    "the surface of the Sun.",
    "The text says that the boundary around a black hole is called the event horizon, and anything that crosses this boundary cannot come back.",
    "The boundary around it is called the event horizon. Anything that crosses this boundary cannot come back."
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many black holes there are in the universe.",
    "What happens to a very heavy star at the end.",
    "How heavy our galaxy’s large black hole is.",
    "The text does not say how many black holes there are. It says how a heavy star ends and that our galaxy’s black hole has a mass of about four million Suns.",
    [
     "Many black holes form when a very heavy star runs out of fuel",
     "Our own galaxy has one with a mass of about four million Suns"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest?",
    "Only things very close to it are in danger.",
    "Everything in the galaxy is in danger.",
    "Nothing is ever in danger.",
    "The text says that danger exists only very close to the horizon.",
    "Danger exists only very close to the horizon."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Scientists took the first image of a black hole by linking telescopes.",
    "Scientists took the first image of a black hole with one small telescope.",
    "Scientists found that a black hole gives off a strong light.",
    "The text explains that scientists showed the first image of a black hole in 2019 by linking radio telescopes around the world.",
    [
     "In April 2019, scientists showed the world the first image of a black hole",
     "linked eight radio telescopes in different parts of the world"
    ]
   ],
   [
    "Detail",
    "When was the first image of a black hole shown?",
    "In April 2019.",
    "In April 2009.",
    "In April 2022.",
    "The text says that in April 2019 scientists showed the first image of a black hole.",
    "In April 2019, scientists showed the world the first image of a black hole"
   ],
   [
    "Vocabulary",
    "In the text, “photograph” means…",
    "take a picture of.",
    "walk toward.",
    "measure the weight of.",
    "The text says that to photograph something so far away, a team linked radio telescopes, so photograph means to take a picture of it.",
    "To photograph something so far away"
   ],
   [
    "Reference",
    "In the text, “its” in “its shadow” refers to…",
    "the black hole.",
    "the ring.",
    "the hot gas.",
    "The sentence says that the dark center is the shadow of the black hole.",
    "the dark center is its shadow"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How much the whole project cost.",
    "How far away the galaxy M87 is.",
    "How many telescopes were linked.",
    "The text does not say how much the project cost. It gives the distance of M87 and says that eight telescopes were linked.",
    [
     "more than 50 million light-years away",
     "linked eight radio telescopes"
    ]
   ],
   [
    "Inference",
    "What does the picture show, according to the text?",
    "The area around the black hole, not the hole itself.",
    "The light that the black hole gives off.",
    "A spacecraft near the black hole.",
    "The text says that a black hole gives off no light, and that the ring is hot gas and light bent by gravity, with a dark center that is its shadow.",
    [
     "A black hole gives off no light",
     "The ring is hot gas and light bent by the black hole’s gravity, and the dark center is its shadow"
    ]
   ]
  ]
 },
 "48": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Mars is red because of rusty dust, which may be a clue about water.",
    "Mars is red because it is much hotter than the Earth.",
    "Mars is red because of the color of the light from the Sun.",
    "The text explains that the red color comes from iron in the dust and that it may be a clue that Mars once had liquid water.",
    [
     "The color comes from dust and rocks on its surface that contain a lot of iron",
     "the red color is a clue that Mars once had liquid water on its surface"
    ]
   ],
   [
    "Detail",
    "What gives Mars its red color?",
    "Dust and rocks that contain a lot of iron.",
    "A thick red layer of gas around the planet.",
    "Red plants growing on the surface.",
    "The text says that the color comes from dust and rocks on its surface that contain a lot of iron.",
    "dust and rocks on its surface that contain a lot of iron"
   ],
   [
    "Vocabulary",
    "In the text, “fine” means…",
    "made of very small pieces.",
    "of very high quality.",
    "very hot.",
    "The text says that winds spread this fine red dust over the planet, so fine means that the dust is made of very small pieces.",
    "this fine red dust"
   ],
   [
    "Reference",
    "In the text, “this” in “If this is correct” refers to…",
    "the idea that the iron formed in the presence of water.",
    "the idea that Mars is a red dot in the night sky.",
    "the belief that the rust formed in a dry way.",
    "The sentence before says that a recent study suggests that the iron may have formed in the presence of water, and the writer says that if this is correct, the color is a clue.",
    [
     "a recent study suggests that the iron in the dust may have formed in the presence of water, long ago. If this is correct"
    ]
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many missions have visited Mars.",
    "What sometimes covers large areas.",
    "What winds on Mars do to the dust.",
    "The text does not say how many missions have visited Mars. It says that dust storms cover large areas and that winds spread the dust.",
    [
     "sometimes huge dust storms cover large areas",
     "Winds on Mars have spread this fine red dust over the whole planet"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about the recent study?",
    "It changed an earlier idea about how Mars became red.",
    "It proved that Mars still has oceans.",
    "It showed that Mars has no iron.",
    "The text says that scientists once believed that the rust formed in a dry way, but a recent study suggests that the iron formed in the presence of water.",
    "Scientists once believed that the rust formed in a dry way, but a recent study suggests"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Venus is hotter than Mercury because its thick atmosphere traps heat.",
    "Venus is hotter than Mercury because it is closer to the Sun.",
    "Venus is hotter than Mercury because it has no atmosphere.",
    "The text explains that Mercury is closer to the Sun, but Venus is hotter because carbon dioxide traps heat in a strong greenhouse effect.",
    [
     "Mercury is the closest planet to the Sun, but Venus is the hottest",
     "The carbon dioxide traps most of it, in a strong greenhouse effect"
    ]
   ],
   [
    "Detail",
    "What is the atmosphere of Venus made of?",
    "Mostly carbon dioxide.",
    "Mostly oxygen.",
    "Mostly water vapor.",
    "The text says that the atmosphere is made mostly of carbon dioxide.",
    "It is made mostly of carbon dioxide"
   ],
   [
    "Vocabulary",
    "In the text, “melt” means…",
    "turn into liquid.",
    "turn into powder.",
    "turn very hard.",
    "The text says that the surface of Venus is hot enough to melt lead, which means that lead would turn into liquid.",
    "hot enough to melt lead"
   ],
   [
    "Reference",
    "In the text, “it” in “traps most of it” refers to…",
    "the heat that tries to escape.",
    "the sunlight that reaches the ground.",
    "the atmosphere of Venus.",
    "The sentence says that the heat tries to escape as infrared light, and the carbon dioxide traps most of that heat.",
    "the heat tries to escape as infrared light. The carbon dioxide traps most of it"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many moons Venus has.",
    "How hot the surface of Venus is.",
    "What happens on the night side of Mercury.",
    "The text does not say how many moons Venus has. It gives the surface temperature of Venus and says that the night side of Mercury becomes extremely cold.",
    [
     "The surface of Venus is about 465 degrees Celsius",
     "its night side becomes extremely cold"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about Venus?",
    "It may once have been more like the Earth.",
    "It was always as hot as it is today.",
    "It never had any water.",
    "The text says that some scientists think that Venus had oceans long ago.",
    "Some scientists think that Venus had oceans long ago"
   ]
  ]
 },
 "49": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "In a solar eclipse, the Moon blocks the Sun, and only a narrow path sees totality.",
    "In a solar eclipse, the Earth blocks the light of the Moon.",
    "In a solar eclipse, the Sun becomes much smaller than the Moon.",
    "The text explains that the Moon passes between the Sun and the Earth, and that its shadow touches only a narrow path.",
    [
     "A solar eclipse happens when the Moon passes between the Sun and the Earth and blocks the sunlight",
     "The Moon’s shadow touches only a narrow path on the Earth"
    ]
   ],
   [
    "Detail",
    "What can people see during a total eclipse?",
    "The Sun’s faint outer atmosphere, the corona.",
    "The far side of the Moon, full of craters.",
    "A second, smaller Sun behind the Moon.",
    "The text says that during a total eclipse the corona becomes visible.",
    "the Sun’s faint outer atmosphere, the corona, becomes visible"
   ],
   [
    "Vocabulary",
    "In the text, “exactly” means…",
    "very precisely.",
    "very slowly.",
    "very rarely.",
    "The text says that the Moon can cover the Sun so exactly, which means very precisely, because the two look almost the same size.",
    "the Moon can cover the Sun so exactly"
   ],
   [
    "Reference",
    "In the text, “this path” refers to…",
    "the narrow path of the Moon’s shadow.",
    "the path of the Sun across the sky.",
    "the path of the Moon around the Earth.",
    "The text says that the Moon’s shadow touches only a narrow path, and people outside this path see only a partial eclipse.",
    "The Moon’s shadow touches only a narrow path on the Earth, never wider than about 270 kilometers, so people outside this path"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How often a total eclipse happens in one place.",
    "How long the dark lasts in a total eclipse.",
    "How wide the path of the shadow can be.",
    "The text does not say how often a total eclipse happens in one place. It says that the dark lasts a few minutes and that the path is never wider than about 270 kilometers.",
    [
     "day turns dark for a few minutes",
     "never wider than about 270 kilometers"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a person who sees a partial eclipse?",
    "The person should wear eclipse glasses.",
    "The person can look at the Sun safely.",
    "The person will see the corona clearly.",
    "The text says that looking at the Sun is safe only during totality, and at every other time special glasses are needed.",
    "It is safe to look at the Sun only during the short moment of totality. At every other time, you must wear special eclipse glasses."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "The Moon turns red in a lunar eclipse because Earth’s air bends red light onto it.",
    "The Moon turns red because it becomes very hot in the Earth’s shadow.",
    "The Moon disappears completely when it is in the Earth’s shadow.",
    "The text explains that the Moon turns red because the air scatters the blue light away and the red light continues to the Moon.",
    [
     "during a total lunar eclipse it usually turns a deep orange or red color",
     "the air scatters most of the blue light away, and the red light continues to the Moon"
    ]
   ],
   [
    "Detail",
    "What color does the Moon usually turn?",
    "Deep orange or red.",
    "Dark blue.",
    "Bright white.",
    "The text says that it usually turns a deep orange or red color.",
    "it usually turns a deep orange or red color"
   ],
   [
    "Vocabulary",
    "In the text, “scatters” means…",
    "sends in many directions.",
    "joins together.",
    "makes brighter.",
    "The text says that the air scatters the blue light away, which means that it sends the blue light in many directions.",
    "the air scatters most of the blue light away"
   ],
   [
    "Reference",
    "In the text, “it” in “it usually turns a deep orange or red” refers to…",
    "the Moon.",
    "the Earth.",
    "the shadow.",
    "The sentence says that you might expect the Moon to disappear, but it usually turns deep orange or red.",
    "You might expect the Moon to disappear, but during a total lunar eclipse it usually turns a deep orange or red color"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How long a lunar eclipse usually lasts.",
    "What the exact color depends on.",
    "Whether special glasses are needed.",
    "The text does not say how long a lunar eclipse lasts. It says what the color depends on and that no special glasses are needed.",
    [
     "The exact color depends on the dust, clouds and ash in the air",
     "completely safe to watch without special glasses"
    ]
   ],
   [
    "Inference",
    "What does “all the sunsets and sunrises of the world at once” suggest?",
    "The light on the Moon passed through the air at the edge of the Earth.",
    "The Moon is lit by the lights of the cities on the Earth.",
    "The Moon is lit by many different suns at once.",
    "Sunlight reaches the Moon after passing through the air around the Earth, as it does at every sunrise and sunset.",
    "the Moon is lit by all the sunsets and sunrises of the world at once"
   ]
  ]
 },
 "50": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Mixed fighting is old, from Greek pankration to Brazilian vale tudo.",
    "Mixed fighting began in the United States in the 1990s, with the UFC.",
    "The Gracie family invented pankration in ancient Greece long ago.",
    "The text explains that pankration existed in ancient Greece and that a similar contest, vale tudo, became popular in Brazil.",
    [
     "In ancient Greece, a sport called pankration was one of the events of the Olympic Games",
     "in Brazil, a similar kind of contest called vale tudo"
    ]
   ],
   [
    "Detail",
    "How did most pankration fights end?",
    "One competitor gave up.",
    "A judge counted points.",
    "The time ran out.",
    "The text says that most fights ended when one competitor gave up.",
    "Most fights ended when one competitor gave up."
   ],
   [
    "Vocabulary",
    "In the text, “popular” means…",
    "liked by many people.",
    "known by few people.",
    "banned by the law.",
    "The text says that vale tudo became popular in Brazil, which means that many people liked it.",
    "called vale tudo, or “anything goes”, became popular"
   ],
   [
    "Reference",
    "In the text, “Its” in “Its name comes from Greek words” refers to…",
    "pankration.",
    "the Olympic Games.",
    "ancient Greece.",
    "The sentence says that pankration was an Olympic sport, and its name comes from Greek words meaning “all powers”.",
    "a sport called pankration was one of the events of the Olympic Games. Its name comes from Greek words"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "Who won the first vale tudo match.",
    "Which style the Gracie family used.",
    "Where vale tudo became popular.",
    "The text does not say who won the first vale tudo match. It says that the Gracie family used Brazilian jiu-jitsu and that vale tudo was popular in Brazil.",
    [
     "their style, Brazilian jiu-jitsu",
     "in Brazil, a similar kind of contest called vale tudo"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about the Gracie family?",
    "They wanted more people to see their style.",
    "They wanted to stop vale tudo matches.",
    "They did not want to fight anymore.",
    "The text says that the contests gave the Gracies the idea of showing their style to a much larger audience.",
    "gave the Gracies the idea of showing their style to a much larger audience"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "The first UFC had few rules, and later the sport added rules and became MMA.",
    "The first UFC had many rules, weight classes and judges.",
    "The first UFC was won by the biggest fighter in the tournament.",
    "The text explains that the first UFC had almost no rules and that the sport later added rules, weight classes and judges.",
    [
     "There were no weight classes, no rounds and no judges",
     "the sport added rules, weight classes and judges"
    ]
   ],
   [
    "Detail",
    "Where and when was the first UFC held?",
    "In Denver, in 1993.",
    "In Rio de Janeiro, in 1993.",
    "In Denver, in 2003.",
    "The text says that the first UFC took place on November 12, 1993, in Denver, Colorado.",
    "On November 12, 1993, in Denver, Colorado"
   ],
   [
    "Vocabulary",
    "In the text, “victories” means…",
    "wins.",
    "losses.",
    "injuries.",
    "The text says that Royce Gracie’s victories showed fans something, and his victories were his wins.",
    "His victories showed fans that fighting on the ground mattered."
   ],
   [
    "Reference",
    "In the text, “it” in “the fighter’s corner stopping it” refers to…",
    "the fight.",
    "the corner.",
    "the knockout.",
    "The sentence says that a fight could end with a knockout, a submission or the fighter’s corner stopping the fight.",
    "A fight ended with a knockout, a submission or the fighter’s corner stopping it."
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people watched the event.",
    "How much the winner would receive.",
    "What a fighter’s corner can do.",
    "The text does not say how many people watched. It gives the prize of $50,000 and says that a fighter’s corner can stop a fight.",
    [
     "the winner would receive $50,000",
     "the fighter’s corner stopping it"
    ]
   ],
   [
    "Inference",
    "What do Royce Gracie’s wins suggest about fighters?",
    "Skill on the ground can beat larger opponents.",
    "Bigger fighters always win in a tournament.",
    "Fights on the ground are not important.",
    "The text says that Royce was smaller than many opponents but used jiu-jitsu to win, and that his wins showed that fighting on the ground mattered.",
    "who was smaller than many of his opponents but used jiu-jitsu to beat three men in one night"
   ]
  ]
 },
 "51": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "BJJ uses leverage and technique to control opponents, even larger ones.",
    "BJJ is a striking art that depends mainly on strength.",
    "BJJ was made to be used only in the first UFC events.",
    "The text explains that BJJ is based on leverage and technique more than strength, and that Royce Gracie used it to beat larger men.",
    [
     "Its main idea is leverage",
     "relied on technique and timing more than strength"
    ]
   ],
   [
    "Detail",
    "What is leverage?",
    "Using the body so that a small force has a large effect.",
    "Using a heavy weapon to hurt an opponent badly.",
    "Being much heavier and stronger than an opponent.",
    "The text says that leverage is using the body in a way that lets a small amount of force have a large effect.",
    "using the body in a way that lets a small amount of force have a large effect"
   ],
   [
    "Vocabulary",
    "In the text, “founders” means…",
    "people who start something.",
    "people who stop something.",
    "people who watch something.",
    "The text says that Helio Gracie was one of the founders of BJJ, which means that he was one of the people who started it.",
    "one of the founders of BJJ"
   ],
   [
    "Reference",
    "In the text, “he” in “he built a style” refers to…",
    "Helio Gracie.",
    "Royce Gracie.",
    "an opponent.",
    "The sentence says that Helio Gracie was said to be small and weak, and he built a style that relied on technique and timing.",
    "Helio Gracie, one of the founders of BJJ, was said to be a small and weak man, and he built a style"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many people practice BJJ today.",
    "What the guard is.",
    "Who used BJJ in the first UFC events.",
    "The text does not say how many people practice BJJ. It explains what the guard is and says that Royce Gracie used BJJ in the first UFC events.",
    [
     "the guard, a position with the legs around the opponent",
     "In the first UFC events, Royce Gracie used these ideas"
    ]
   ],
   [
    "Inference",
    "What does the writer suggest about Royce Gracie?",
    "His technique helped him beat bigger men.",
    "He was stronger than all his opponents.",
    "He avoided fighting larger men.",
    "The text says that Royce Gracie used these ideas to beat much larger men.",
    "Royce Gracie used these ideas to beat much larger men"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Wrestlers do well in MMA because they control where the fight takes place.",
    "Wrestlers do well in MMA because they are the best strikers.",
    "Wrestlers do well in MMA because the rules favor them.",
    "The text explains that wrestling teaches fighters to decide where the fight takes place, but that the advantage is smaller now.",
    [
     "wrestling teaches them to decide where the fight takes place",
     "the advantage of wrestling is smaller than in the past"
    ]
   ],
   [
    "Detail",
    "What else can a wrestler do with the same skill?",
    "Stay on his feet when he does not want to be taken down.",
    "Hit harder than most of the other fighters.",
    "Kick an opponent from a very long distance.",
    "The text says that the same skill helps him stay on his feet when he does not want to be taken down.",
    "helps him stay on his feet when he does not want to be taken down"
   ],
   [
    "Vocabulary",
    "In the text, “tire out” means…",
    "make very tired.",
    "make angry.",
    "make stronger.",
    "The text says that a wrestler can tire an opponent out with heavy pressure, which means that he makes him very tired.",
    "tire him out with heavy pressure"
   ],
   [
    "Reference",
    "In the text, “he” in “when he does not want to be taken down” refers to…",
    "the wrestler.",
    "the opponent.",
    "the referee.",
    "The sentence says that the same skill helps the wrestler stay on his feet when he does not want to be taken down.",
    "the same skill helps him stay on his feet when he does not want to be taken down"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "Which wrestler won the most UFC titles.",
    "Who Khabib fought in 2013.",
    "What wrestlers practice from a young age.",
    "The text does not say who won the most UFC titles. It says that Khabib fought Abel Trujillo in 2013 and that wrestlers practice against resisting opponents.",
    [
     "21 against Abel Trujillo in 2013",
     "wrestlers practice against resisting opponents from a young age"
    ]
   ],
   [
    "Inference",
    "Why is the advantage of wrestling smaller than in the past?",
    "Many fighters now train to defend takedowns.",
    "Takedowns are no longer allowed.",
    "Wrestlers no longer enter MMA.",
    "The text says that defending takedowns is now a skill that strikers also train.",
    "Defending takedowns is now a skill that strikers also train"
   ]
  ]
 },
 "52": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Boxing allows only fists, but Muay Thai uses eight limbs and the clinch.",
    "Boxing and Muay Thai allow exactly the same strikes.",
    "Muay Thai is a sport that uses only the legs.",
    "The text compares the two sports and explains that boxing uses only fists while Muay Thai uses eight limbs and a normal clinch.",
    [
     "In boxing, a fighter uses only the fists",
     "called the art of eight limbs"
    ]
   ],
   [
    "Detail",
    "What are the eight limbs of Muay Thai?",
    "Two fists, two elbows, two knees and two shins.",
    "Four arms and four legs.",
    "Two hands, two feet, two elbows and two heads.",
    "The text lists two fists, two elbows, two knees and two shins.",
    "two fists, two elbows, two knees and two shins"
   ],
   [
    "Vocabulary",
    "In the text, “traditional” means…",
    "passed down from long ago.",
    "invented very recently.",
    "found only in Europe.",
    "The text says that Muay Thai is the traditional sport of Thailand, which means that it comes from old customs.",
    "the traditional sport of Thailand"
   ],
   [
    "Reference",
    "In the text, “it” in “use it to throw knees” refers to…",
    "the neck.",
    "the ring.",
    "the referee.",
    "The sentence says that fighters hold each other’s neck and use the neck to throw knees and control the fight.",
    "fighters hold each other’s neck and use it to throw knees and to control the fight"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "Who won the first Muay Thai championship.",
    "How long a round usually lasts.",
    "What shape the ring has.",
    "The text does not name a champion. It says that rounds last three minutes and that the ring is square.",
    [
     "rounds of three minutes",
     "in a square ring"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about the two sports?",
    "They look different even though the ring is similar.",
    "They are fought in completely different places.",
    "They have rounds of different lengths.",
    "The text says that both sports are usually fought in a square ring with three-minute rounds, but the range of weapons makes them look very different.",
    "Both sports are usually fought in a square ring with rounds of three minutes, but the range of weapons makes them look very different."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "A knockout is caused by quick head rotation and is a sign of brain injury.",
    "A knockout happens when the brain hits the skull like a ball.",
    "A knockout is safe because the fighter wakes up quickly.",
    "The text explains that a punch that rotates the head can cause a knockout, and that doctors treat it as a sign of a concussion.",
    [
     "A punch that makes the head rotate quickly",
     "it is a sign of a brain injury called a concussion"
    ]
   ],
   [
    "Detail",
    "What is a knockout?",
    "A strike that makes a fighter lose consciousness for a short time.",
    "A strike that makes a fighter fall to one knee for a moment.",
    "A fight that ends because the last round has finished.",
    "The text says that a knockout happens when a strike makes a fighter lose consciousness for a short time.",
    "a strike makes a fighter lose consciousness for a short time"
   ],
   [
    "Vocabulary",
    "In the text, “imagine” means…",
    "think of in the mind.",
    "forget completely.",
    "see on a screen.",
    "The text says that many people imagine that the brain hits the skull like a ball, which means that they think of it in their minds.",
    "Many people imagine that the brain hits the inside of the skull like a ball"
   ],
   [
    "Reference",
    "In the text, “This” in “This is more dangerous” refers to…",
    "the quick rotation of the head.",
    "a straight blow to the face.",
    "a fighter falling down.",
    "The sentence before says that a punch that makes the head rotate quickly can twist the tissue deep inside the brain, and this is more dangerous than a straight blow.",
    "A punch that makes the head rotate quickly, for example a hook to the side of the jaw, can stretch and twist the tissue deep inside the brain. This is more dangerous"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How long a knockout usually lasts.",
    "What doctors call the injury.",
    "Which punch can twist the tissue.",
    "The text does not say how long a knockout lasts. It says that doctors call the injury a concussion and that a hook to the jaw can twist the tissue.",
    [
     "a brain injury called a concussion",
     "for example a hook to the side of the jaw"
    ]
   ],
   [
    "Inference",
    "Why do doctors take a knockout seriously?",
    "It is a sign of a brain injury called a concussion.",
    "It means that the fighter has broken a bone.",
    "It always means that the fighter cannot fight again.",
    "The text says that a knockout is a sign of a brain injury called a concussion, even if the fighter wakes up quickly.",
    "it is a sign of a brain injury called a concussion, even if the fighter wakes up within seconds"
   ]
  ]
 },
 "53": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Weight classes make fights fairer by dividing fighters by weight.",
    "Weight classes were part of the very first UFC events.",
    "Weight classes let heavy fighters choose lighter opponents.",
    "The text explains that a big difference in weight is unfair and dangerous, so combat sports divide fighters into weight classes.",
    [
     "so the fight would be unfair and often dangerous",
     "combat sports divide fighters into weight classes"
    ]
   ],
   [
    "Detail",
    "When were weight classes introduced in the UFC?",
    "In 1997, at UFC 12.",
    "In 1993, at UFC 1.",
    "In 2001, at UFC 30.",
    "The text says that weight classes were introduced in 1997, at UFC 12.",
    "they were introduced in 1997, at UFC 12"
   ],
   [
    "Vocabulary",
    "In the text, “advantage” means…",
    "a better position.",
    "a weaker position.",
    "an equal share.",
    "The text says that the heavier man would have a big advantage in strength, which means that he would be in a better position.",
    "The heavier man would have a big advantage in strength"
   ],
   [
    "Reference",
    "In the text, “they” in “they were introduced in 1997” refers to…",
    "weight classes.",
    "the first UFC events.",
    "the fighters.",
    "The sentence says that weight classes did not exist in the first UFC events, and they were introduced in 1997.",
    "Weight classes did not exist in the first UFC events, and they were introduced in 1997"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many fighters are in each class.",
    "Where the women’s classes start.",
    "What happens at a weigh-in.",
    "The text does not say how many fighters are in each class. It says where the women’s classes start and describes the weigh-in.",
    [
     "the women’s classes start at strawweight, at 115 pounds",
     "each fighter must step on a scale at an official weigh-in"
    ]
   ],
   [
    "Inference",
    "What does the first paragraph suggest about a fight without weight classes?",
    "Smaller fighters could be at risk.",
    "Heavy fighters could not enter.",
    "Every fight would be even.",
    "The text says that a much heavier man would have a big advantage, so the fight would be unfair and often dangerous.",
    "The heavier man would have a big advantage in strength, so the fight would be unfair and often dangerous."
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Fighters cut weight mostly by losing water, and doctors warn that this is risky.",
    "Fighters cut weight mostly by losing fat, and doctors say that it is safe.",
    "Fighters cut weight by eating more food after the weigh-in.",
    "The text explains that much of the lost weight is water and that doctors warn about the risk.",
    [
     "Much of this is not fat but water",
     "Doctors warn that this is risky"
    ]
   ],
   [
    "Detail",
    "About how much of their body weight do some fighters lose in two days?",
    "More than ten percent.",
    "About one percent.",
    "Exactly five percent.",
    "The text says that it is not unusual to lose more than ten percent of body weight in two days.",
    "lose more than ten percent of their body weight in two days"
   ],
   [
    "Vocabulary",
    "In the text, “not unusual” means…",
    "quite common.",
    "very dangerous.",
    "never seen.",
    "The text says that it is not unusual for fighters to lose more than ten percent of their weight, which means that it is quite common.",
    "It is not unusual for fighters to lose more than ten percent of their body weight in two days"
   ],
   [
    "Reference",
    "In the text, “this” in “Much of this is not fat” refers to…",
    "the weight that fighters lose.",
    "the weigh-in.",
    "the limit of the class.",
    "The sentence before says that fighters lose weight in the last days before the weigh-in, and much of this weight is water.",
    "so they lose weight in the last days before the weigh-in. Much of this is not fat but water."
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many fighters have been hurt by cutting weight.",
    "When fighters lose the weight.",
    "What fighters do after the weigh-in.",
    "The text does not say how many fighters have been hurt. It says when fighters lose the weight and that they drink and eat after the weigh-in.",
    [
     "in the last days before the weigh-in",
     "After the weigh-in, they drink and eat to recover."
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest?",
    "Doctors would like fighters to stop extreme dehydration.",
    "Doctors want fighters to cut even more weight.",
    "Doctors think that dehydration is healthy.",
    "The text says that medical groups have recommended ending extreme dehydration as a way to make weight.",
    "Medical groups have recommended ending extreme dehydration as a way to make weight."
   ]
  ]
 },
 "54": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "There are two kinds of chokes, and a blood choke can cause unconsciousness in seconds.",
    "There are two kinds of chokes, and both stop the breathing completely.",
    "Chokes are dangerous because the person never wakes up again.",
    "The text explains the two kinds of chokes and says that a blood choke can make a person lose consciousness within about ten seconds.",
    [
     "There are two main kinds",
     "the person can lose consciousness within about ten seconds"
    ]
   ],
   [
    "Detail",
    "What does an air choke press on?",
    "The throat.",
    "The carotid arteries.",
    "The chest.",
    "The text says that an air choke presses on the throat and blocks the airway.",
    "An air choke presses on the throat and blocks the airway"
   ],
   [
    "Vocabulary",
    "In the text, “squeeze” means…",
    "press tightly.",
    "lift up.",
    "touch lightly.",
    "The text says that in a blood choke the arms squeeze the sides of the neck, which means that they press tightly on it.",
    "the arms squeeze the sides of the neck"
   ],
   [
    "Reference",
    "In the text, “which” in “which carry blood to the brain” refers to…",
    "the two carotid arteries.",
    "the sides of the neck.",
    "the arms.",
    "The sentence says that the arms press on the two carotid arteries, which carry blood to the brain.",
    "press on the two carotid arteries, which carry blood to the brain"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many fighters have been choked unconscious.",
    "How fast a blood choke can work.",
    "What referees do when a fighter goes limp.",
    "The text does not say how many fighters have been choked unconscious. It says how fast a blood choke works and what referees do.",
    [
     "within about ten seconds",
     "referees stop the fight when a fighter goes limp"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a blood choke compared with an air choke?",
    "It can make a person unconscious much faster.",
    "It is more dangerous for the throat.",
    "It lasts for much longer.",
    "The text says that a person can stay conscious for a minute or more in an air choke, but can lose consciousness within about ten seconds in a blood choke.",
    [
     "a person can stay conscious for a minute or more",
     "the person can lose consciousness within about ten seconds"
    ]
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Judges score each round with the 10-point must system, mainly by effective fighting.",
    "Judges give the win to the fighter who is the most aggressive.",
    "Judges score only the last round of the fight.",
    "The text explains that three judges score each round with the 10-point must system and look first at effective striking and grappling.",
    [
     "three judges decide the winner by scoring each round",
     "Judges look first at effective striking and grappling"
    ]
   ],
   [
    "Detail",
    "How many points does the winner of a round receive?",
    "10.",
    "9.",
    "5.",
    "The text says that the fighter who wins a round receives 10 points.",
    "The fighter who wins a round receives 10 points"
   ],
   [
    "Vocabulary",
    "In the text, “even” means…",
    "equal.",
    "very long.",
    "stopped early.",
    "The text says that if the round is completely even, both fighters get 10, which means that the fighters are equal.",
    "If the round is completely even, both fighters get 10"
   ],
   [
    "Reference",
    "In the text, “these” in “Only when these are equal” refers to…",
    "effective striking and grappling.",
    "the three judges.",
    "the points of the round.",
    "The sentence says that judges look first at effective striking and grappling, and only when these are equal do they look at other things.",
    "Judges look first at effective striking and grappling, which means strikes that cause damage and takedowns or positions that lead to danger for the opponent. Only when these are equal"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many rounds a fight has.",
    "How defense is scored.",
    "What a 10-10 round is.",
    "The text does not say how many rounds a fight has. It says that defense alone earns no points and that an even round is 10-10.",
    [
     "Defense alone earns no points.",
     "If the round is completely even, both fighters get 10"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about a fighter who only defends?",
    "He is unlikely to win the round.",
    "He will always win the round.",
    "He gets a score of 10-8.",
    "The text says that defense alone earns no points, so a fighter who only defends is unlikely to win the round.",
    "Defense alone earns no points."
   ]
  ]
 },
 "55": {
  "A": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "A concussion is a brain injury, and repeated hits may harm the brain.",
    "A concussion is a broken skull that always causes unconsciousness.",
    "A concussion is a small problem that never needs a doctor.",
    "The text explains that a concussion is a brain injury and that repeated hits may harm the brain over time.",
    [
     "A concussion is a brain injury",
     "repeated injuries may harm the brain over time"
    ]
   ],
   [
    "Detail",
    "Which of these can be a sign of a concussion?",
    "A headache or feeling dizzy.",
    "A fever and a cough.",
    "A sore throat and a runny nose.",
    "The text lists a headache, feeling dizzy, seeing double and trouble remembering.",
    "a person may have a headache, feel dizzy, see double or have trouble remembering"
   ],
   [
    "Vocabulary",
    "In the text, “worry” means…",
    "make concerned.",
    "make happy.",
    "make tired.",
    "The text says that many hits over many years worry doctors, which means that they make them concerned.",
    "many hits over many years worry doctors"
   ],
   [
    "Reference",
    "In the text, “this reason” in “For this reason” refers to…",
    "the risk of harm from repeated injuries.",
    "the fact that the brain floats in fluid.",
    "the fact that a concussion heals with rest.",
    "The sentence before says that repeated injuries may harm the brain over time, and for this reason a fighter with signs should stop and see a doctor.",
    "repeated injuries may harm the brain over time. For this reason, a fighter who shows signs of a concussion should stop fighting and see a doctor."
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many fighters have had a concussion.",
    "What the brain floats in.",
    "What a fighter with signs should do.",
    "The text does not say how many fighters have had a concussion. It says what the brain floats in and what a fighter with signs should do.",
    [
     "floats in fluid inside the skull",
     "should stop fighting and see a doctor"
    ]
   ],
   [
    "Inference",
    "What does the text suggest about the old idea that the brain hits the skull?",
    "Newer research has replaced it.",
    "It is still the only accepted idea.",
    "Scientists never believed it.",
    "The text says that scientists used to say that, but newer research points to stretching and twisting of tissue.",
    "Scientists used to say that a concussion happens when the brain hits the skull, but newer research points to stretching and twisting"
   ]
  ],
  "B": [
   [
    "Main idea",
    "What is the main idea of the text?",
    "Doctors, referees and rules work together to protect MMA fighters.",
    "MMA has few rules because fighters protect themselves.",
    "Only the referee can protect fighters in MMA.",
    "The text explains that many rules, checks, doctors and referees exist to protect fighters.",
    [
     "MMA is a risky sport, so many rules exist to protect fighters",
     "A doctor can also stop a fight"
    ]
   ],
   [
    "Detail",
    "When must the referee stop a fight?",
    "When a fighter can no longer defend himself.",
    "When a fighter has lost the first round.",
    "When a fighter asks for some water.",
    "The text says that the referee must stop the fight if one fighter can no longer defend himself.",
    "must stop the fight if one of them can no longer defend himself"
   ],
   [
    "Vocabulary",
    "In the text, “closely” means…",
    "with great attention.",
    "from far away.",
    "without interest.",
    "The text says that the referee watches both fighters closely, which means that he watches them with great attention.",
    "watches both fighters closely"
   ],
   [
    "Reference",
    "In the text, “he” in “in which he cannot fight” refers to…",
    "the fighter.",
    "the regulator.",
    "the doctor.",
    "The sentence says that regulators give the fighter a suspension, a period in which the fighter cannot fight so that his body can recover.",
    "regulators usually give the fighter a medical suspension, a period in which he cannot fight"
   ],
   [
    "Not stated",
    "Which of these is NOT mentioned in the text?",
    "How many fighters have been banned from MMA.",
    "How long a suspension is common after a knockout.",
    "Where the referee stands during the fight.",
    "The text does not say how many fighters have been banned. It says that sixty days is common after a knockout and that the referee stands inside the cage.",
    [
     "Sixty days is common after a knockout",
     "The referee stands inside the cage"
    ]
   ],
   [
    "Inference",
    "What does the last sentence suggest about knockouts?",
    "They are serious and the body needs time to recover.",
    "They are not important if the fighter wakes up quickly.",
    "They matter only for the fighter who loses.",
    "The text says that sixty days is common after a knockout and that some fighters must pass a brain scan.",
    [
     "Sixty days is common after a knockout",
     "some fighters must pass a brain scan before they return"
    ]
   ]
  ]
 }
};
