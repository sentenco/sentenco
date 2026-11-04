// Unseen Reading Parts 6 to 9. Each question is [text, kind, prompt, right answer, wrong, wrong, explanation, evidence].
// Each matching list is [word, definition], five words per text, all taken from that text.

export const UNSEEN_PARTS_1 = [
  {
    part: 6,
    slug: "unseen-reading-part-6",
    theme: "Security Check",
    blurb: "face unlock, contactless payment",
    texts: {
      A: {
        title: "Why a Photo Cannot Unlock Your Phone",
        text:
          "On many phones, face unlock does not take a normal photograph. A projector sends out a grid of tiny infrared dots, and an infrared camera uses them to build a 3D map of the face. Because a flat photo has no depth, the dots show only a flat surface, and the phone refuses to open. The new map is compared with the one saved during set-up, and the saved data is encrypted and kept in a protected chip inside the phone.\n\nThe system is not perfect, however. Apple says that the chance of a random person unlocking an iPhone with Face ID is about one in a million, compared with one in 50,000 for its fingerprint reader. The chance is higher for twins, for brothers and sisters who look similar, and for children under 13, so Apple advises these users to use a passcode. In 2017, media tests showed that twins could unlock each other’s phones, and a mask that cost about $150 reportedly fooled the system.",
      },
      B: {
        title: "Paying With a Tap",
        text:
          "When you pay with a tap, the card and the payment terminal talk over a short-range radio link called NFC. The two must be only a few centimeters apart. A contactless card has no battery: the terminal’s electromagnetic field gives its chip just enough power to reply with the payment information.\n\nPhones add extra protection. Instead of your real card number, a phone wallet sends a substitute code called a token, which is linked to one device, so the shop never sees the real number. This limits the damage if the shop’s system is hacked. The risks are smaller, but they are real. Most countries allow small payments without a PIN, so a lost card could be used for small purchases until the limit is reached. The limit differs from one country and bank to another.",
      },
    },
    items: [
      ["A", "Detail", "Why can a flat photograph not unlock a phone that uses this system?", "Because a photo has no depth for the infrared dots to measure.", "Because the camera cannot see photographs of faces.", "Because the phone only opens for moving pictures.", "The dots show only a flat surface on a photo, so the phone refuses to open. Nothing in the text says that the camera cannot see photographs or that movement is needed.", "Because a flat photo has no depth, the dots show only a flat surface, and the phone refuses to open."],
      ["A", "Reference", "In the second paragraph, “these users” refers to…", "twins, similar brothers and sisters, and children under 13.", "people who already use a fingerprint reader.", "anyone who owns an iPhone.", "“These users” are the people just listed, for whom the chance of a wrong match is higher: twins, similar brothers and sisters, and children under 13.", "The chance is higher for twins, for brothers and sisters who look similar, and for children under 13"],
      ["A", "Not stated", "Which of these is NOT mentioned in the text?", "The phone sends the face data to a company server to be checked.", "The saved face data is kept in a protected chip.", "Twins could unlock each other’s phones in 2017 tests.", "The text says that the data is kept inside the phone and never says it is sent to a server. The other two are both stated.", ["kept in a protected chip inside the phone", "twins could unlock each other’s phones"]],
      ["A", "Inference", "What can we understand about face unlock for a ten-year-old child?", "It may be less reliable than it is for an adult.", "It will never work.", "It is safer than a passcode.", "Apple advises children under 13 to use a passcode, which suggests that face unlock is less reliable for them. The text does not say that it never works.", "for children under 13, so Apple advises these users to use a passcode"],
      ["B", "Reason", "Why does a contactless card not need a battery?", "The terminal’s electromagnetic field gives its chip enough power.", "It takes energy from the phone in your pocket.", "It uses the heat of the owner’s hand.", "The text says that the terminal’s field powers the chip, so the card can reply without a battery of its own.", "the terminal’s electromagnetic field gives its chip just enough power to reply with the payment information"],
      ["B", "Detail", "What does a phone wallet send to the shop?", "A substitute code that is linked to one device.", "The real card number in a secret code.", "A photograph of the card.", "The wallet sends a token, a substitute code linked to one device, so the shop never sees the real number.", "a phone wallet sends a substitute code called a token, which is linked to one device"],
      ["B", "Word in context", "In the text, “hacked” means…", "broken into by someone who wants to steal information.", "checked by a bank.", "closed for repairs.", "“Hacked” here means that someone has broken into the shop’s system. That is why the substitute code limits the damage.", "This limits the damage if the shop’s system is hacked."],
      ["B", "Main idea", "What is the main idea of the second paragraph?", "Phone wallets add protection, but some risks remain.", "Contactless cards are safer than phones.", "Shops should stop accepting small payments.", "The paragraph describes the extra protection that phones give, and then says that the risks are smaller but still real.", ["Phones add extra protection.", "The risks are smaller, but they are real."]],
    ],
    matches: {
      A: [
        ["depth", "the distance from the front of something to the back"],
        ["encrypted", "changed into a secret code so that others cannot read it"],
        ["chance", "how likely it is that something will happen"],
        ["compared", "looked at together to see how things are alike or different"],
        ["reportedly", "according to what people say, but not proved"],
      ],
      B: [
        ["terminal", "a machine where you pay or put in information"],
        ["substitute", "something used in place of something else"],
        ["linked", "connected to something"],
        ["hacked", "broken into by someone who wants to steal information"],
        ["limit", "the highest amount that is allowed"],
      ],
    },
  },

  {
    part: 7,
    slug: "unseen-reading-part-7",
    theme: "Everyday Tech",
    blurb: "QR codes, wireless charging",
    texts: {
      A: {
        title: "Why a Damaged QR Code Can Still Be Read",
        text:
          "The QR code was invented in 1994 by Denso Wave, a company in the Toyota group, to track car parts in factories. It could hold much more information than an ordinary barcode. Three of its corners have large squares, which tell the scanner the size and the direction of the code, so it can be read from almost any angle.\n\nThe pattern also contains extra repair data, produced by a mathematical method called Reed-Solomon coding. The strongest of its four settings can restore about 30 percent of the code, but this figure is often misunderstood. How much damage a code can survive depends on where the damage is: a sticker that covers the large corner squares can make a code unreadable long before a third of it is hidden.",
      },
      B: {
        title: "Wireless Charging: Where Does the Energy Go?",
        text:
          "A wireless charger has no cable, but electricity still has to travel from the charger to the phone. It does this with two coils of copper wire. The coil in the charger carries a changing current, which creates a changing magnetic field. The coil inside the phone picks up the field, and the field creates a current in it. The phone then changes this current into the kind that the battery needs.\n\nThe method is convenient, but it wastes some energy as heat, in the coils and in the conversion steps. How much is lost depends on how well the phone sits on the charger: if the coils are not lined up, charging is less efficient. A newer version of the standard, called Qi2, uses magnets that pull the phone into the right position.",
      },
    },
    items: [
      ["A", "Detail", "Why did Denso Wave invent the QR code?", "To track car parts in factories.", "To replace the telephone.", "To print tickets for trains.", "The text says it was invented “to track car parts in factories”.", "to track car parts in factories"],
      ["A", "Purpose", "What is the job of the three large squares in the corners?", "They tell the scanner the size and direction of the code.", "They store the repair data.", "They show the name of the company.", "The squares tell the scanner the size and direction of the code. The repair data is a separate part of the pattern.", "which tell the scanner the size and the direction of the code"],
      ["A", "Not stated", "Which of these is NOT mentioned in the text?", "QR codes were first used to pay in shops.", "QR codes can hold more information than ordinary barcodes.", "The strongest setting can restore about 30 percent of the code.", "The text says that QR codes were invented to track car parts, and never says they were first used in shops. The other two are stated.", ["It could hold much more information than an ordinary barcode.", "can restore about 30 percent of the code"]],
      ["A", "Inference", "What does the text suggest about a sticker on a QR code?", "It can be a problem if it covers the corner squares.", "It is always harmless if it covers less than a third.", "It makes the code easier to read.", "A sticker over the large corner squares can make a code unreadable long before a third of it is hidden.", "a sticker that covers the large corner squares can make a code unreadable"],
      ["B", "Detail", "How does energy travel from the charger to the phone?", "Through a changing magnetic field between two coils.", "Through a thin cable inside the table.", "Through a radio signal from the battery.", "The charger’s coil creates a changing magnetic field, and the phone’s coil picks it up.", "The coil in the charger carries a changing current, which creates a changing magnetic field."],
      ["B", "Reason", "Why is charging less efficient when the phone is placed badly?", "The two coils are not lined up.", "The battery becomes too cold.", "The magnets are switched off.", "The text says that if the coils are not lined up, charging is less efficient.", "if the coils are not lined up, charging is less efficient"],
      ["B", "Word in context", "In the text, “convenient” means…", "easy and useful to use.", "cheap to repair.", "dangerous for children.", "The sentence says the method is convenient but wastes some energy, so “convenient” is a good point, easy and useful.", "The method is convenient, but it wastes some energy as heat"],
      ["B", "Main idea", "What is the main point of the text?", "Wireless charging is convenient but wastes some energy.", "Cables are not allowed in some countries.", "Magnets can charge a phone without coils.", "The text explains how the charger works, and then says that some energy is lost as heat.", ["The method is convenient, but it wastes some energy as heat", "How much is lost depends on how well the phone sits on the charger"]],
    ],
    matches: {
      A: [
        ["ordinary", "usual, not special or different"],
        ["direction", "the way something is facing or moving"],
        ["restore", "to bring something back to its earlier condition"],
        ["unreadable", "impossible to read"],
        ["damage", "harm that is done to something"],
      ],
      B: [
        ["copper", "a reddish-brown metal that carries electricity well"],
        ["convenient", "easy to use and saving time"],
        ["efficient", "working well without wasting energy"],
        ["standard", "an agreed set of rules that everyone follows"],
        ["position", "the place where something is"],
      ],
    },
  },

  {
    part: 8,
    slug: "unseen-reading-part-8",
    theme: "Learning English With Media",
    blurb: "subtitles, podcasts",
    texts: {
      A: {
        title: "Should You Turn the Subtitles On?",
        text:
          "Watching series in English is a popular way to practice, but should you switch the subtitles on? Subtitles in the same language as the sound, often called captions, show you the words that you hear, so you can connect the sound of a word with its spelling. In one study, learners who watched with English captions gained more knowledge of words, including their pronunciation and spelling, than learners who watched with subtitles in their first language.\n\nThe research is not simple, however. The benefit depends on factors such as how many words the learner already knows, and one review found no clear advantage for specially highlighted captions over ordinary ones. There is also a risk that learners read instead of listening. A sensible plan is to watch a scene with captions, then watch it again without them.",
      },
      B: {
        title: "How Podcasts Became Part of Everyday Life",
        text:
          "A podcast is an audio show that you can listen to whenever you like, and many now include video. Surveys by Edison Research in the United States show how quickly the audience has grown. In 2020, 37 percent of people aged 12 and over listened to podcasts every month. By 2024, the figure was 47 percent, about 135 million people, and the audience was growing fastest among women and older listeners.\n\nThe 2026 survey found that 80 percent of Americans had listened to or watched a podcast at some time, a record high. These figures need careful reading. They come from surveys in one country, and download numbers do not show whether people actually listened to an episode, in part or in full.",
      },
    },
    items: [
      ["A", "Detail", "What did learners who watched with English captions learn more about?", "Words, including their pronunciation and spelling.", "Grammar rules in their first language.", "The names of the actors.", "The study found that these learners gained more knowledge of words, including pronunciation and spelling.", "gained more knowledge of words, including their pronunciation and spelling"],
      ["A", "Reference", "In the last sentence, “them” in “without them” refers to…", "captions.", "learners.", "scenes.", "The sensible plan is to watch with captions first and then watch again without the captions.", "watch a scene with captions, then watch it again without them"],
      ["A", "Not true", "Which of these is NOT true according to the text?", "Specially highlighted captions are clearly better than ordinary ones.", "Captions show the words that you hear.", "The benefit depends on how many words the learner already knows.", "The text says that one review found no clear advantage for highlighted captions. The other two statements are true.", ["one review found no clear advantage for specially highlighted captions over ordinary ones", "show you the words that you hear"]],
      ["A", "Inference", "Why does the writer suggest watching a scene twice?", "To use captions for support first and then to practice listening alone.", "To count the words in the scene.", "To compare two different series.", "The writer warns that learners may read instead of listening, so the second viewing, without captions, practices listening.", "There is also a risk that learners read instead of listening."],
      ["B", "Detail", "What percentage of people aged 12 and over listened to podcasts every month in 2024?", "47 percent.", "37 percent.", "80 percent.", "The text gives 37 percent for 2020, 47 percent for 2024 and 80 percent for the 2026 survey of people who had ever listened or watched.", "By 2024, the figure was 47 percent"],
      ["B", "Reason", "Why does the writer say that the figures need careful reading?", "They come from surveys in one country.", "They were written by a podcast company.", "They are older than the first podcast.", "The text says that the figures come from surveys in one country, and that download numbers do not show real listening.", "They come from surveys in one country"],
      ["B", "Word in context", "In the text, “audience” means…", "the group of people who listen to or watch something.", "a large room where shows are held.", "a company that makes shows.", "The audience has grown, so it means the people who listen to or watch podcasts.", "show how quickly the audience has grown"],
      ["B", "Text structure", "What does the writer do in the second paragraph?", "Gives a newer result and then warns about its limits.", "Explains how to make a podcast.", "Compares audio shows with video shows.", "The paragraph reports the 2026 survey and then says that the figures need careful reading.", ["The 2026 survey found", "These figures need careful reading."]],
    ],
    matches: {
      A: [
        ["pronunciation", "the way a word is said"],
        ["advantage", "something good that helps you more than others"],
        ["highlighted", "made easier to notice, for example with a color"],
        ["sensible", "practical and reasonable"],
        ["review", "a report that looks at many earlier studies"],
      ],
      B: [
        ["audio", "sound that you listen to"],
        ["survey", "a set of questions asked to many people"],
        ["record", "the highest or best that has ever been measured"],
        ["figure", "a number"],
        ["episode", "one show in a series"],
      ],
    },
  },

  {
    part: 9,
    slug: "unseen-reading-part-9",
    theme: "Apps That Shape Habits",
    blurb: "streaming recommendations, app streaks",
    texts: {
      A: {
        title: "How Streaming Apps Decide What You See",
        text:
          "When you open a streaming app, the rows of shows are not the same for everyone. A recommendation system chooses them for you. Netflix said in 2012 that about 75 percent of what people watch comes from some kind of recommendation, and in 2017 a company executive put the figure near 80 percent.\n\nThe main idea is simple: people with similar viewing habits probably have similar tastes. The system also looks at information about the shows, such as their ratings, the year they were made and the director. Critics worry that this can trap viewers in an echo chamber, where they only see more of the same. Netflix says it adds variety to avoid this, but outside researchers have not confirmed how well that works.",
      },
      B: {
        title: "The Streak Counter: Habit or Pressure?",
        text:
          "Many language apps count your streak, the number of days in a row that you have practiced. If you miss a day, the number falls back to zero. Duolingo says the streak is designed to keep learners motivated. Small studies suggest that features like streaks can help learners practice more regularly.\n\nHowever, a thesis on students of English found mixed results: some learners felt frustrated when they lost a streak, or felt pressure from competition. The biggest limit is that a streak measures practice, not skill. So far, the evidence comes mostly from small studies, and a streak cannot tell you whether you can hold a conversation.",
      },
    },
    items: [
      ["A", "Detail", "By 2017, how much of what people watched came from recommendations?", "Nearly 80 percent.", "About 25 percent.", "Exactly 50 percent.", "The text says that in 2017 a company executive put the figure near 80 percent.", "in 2017 a company executive put the figure near 80 percent"],
      ["A", "Reason", "Why does the system suggest a film to you?", "People with similar viewing habits probably have similar tastes.", "Every viewer receives the same list.", "The film was made in the year you were born.", "The system assumes that people who watch similar things like similar things.", "people with similar viewing habits probably have similar tastes"],
      ["A", "Reference", "In the last sentence, “this” refers to…", "being trapped in an echo chamber.", "the director of a show.", "the number of viewers.", "Netflix says it adds variety to avoid the echo chamber described in the sentence before.", "Critics worry that this can trap viewers in an echo chamber"],
      ["A", "Inference", "What does the last sentence suggest about Netflix’s claim?", "It has not been checked by outside researchers.", "It has been proved wrong.", "It is only about older shows.", "Outside researchers have not confirmed how well the variety works, so the claim is not independently checked.", "outside researchers have not confirmed how well that works"],
      ["B", "Detail", "What happens to a streak if you miss a day?", "It falls back to zero.", "It doubles.", "It stays the same.", "The text says that the number falls back to zero.", "If you miss a day, the number falls back to zero."],
      ["B", "Reason", "Why did some learners in the thesis feel stressed?", "They lost a streak or felt pressure from competition.", "The app was too cheap.", "They studied too many languages.", "The thesis found that some learners felt frustrated when they lost a streak, or felt pressure from competition.", "some learners felt frustrated when they lost a streak, or felt pressure from competition"],
      ["B", "Word in context", "In the text, “regularly” means…", "often and at similar times.", "very quickly.", "only at weekends.", "Features like streaks help learners practice again and again, so “regularly” means often and at similar times.", "practice more regularly"],
      ["B", "Main idea", "What is the main point of the text?", "Streaks can help people practice, but they do not prove that someone can speak.", "Streaks are not allowed in schools.", "Apps should remove all numbers.", "The text says that a streak measures practice, not skill.", "a streak measures practice, not skill"],
    ],
    matches: {
      A: [
        ["recommendation", "a suggestion about what is good or suitable"],
        ["viewers", "people who watch something"],
        ["ratings", "scores that show how good people think something is"],
        ["variety", "a number of different kinds of things"],
        ["researchers", "people who study something carefully to learn facts"],
      ],
      B: [
        ["streak", "a number of things happening one after another"],
        ["motivated", "wanting to do something and keep trying"],
        ["frustrated", "annoyed because you cannot do what you want"],
        ["competition", "a situation where people try to be better than others"],
        ["thesis", "a long piece of writing based on research"],
      ],
    },
  },
];
