// A1 Kids digital storybook, Book 19: "A Trip to the Zoo"
// Static content -- no Supabase, mirrors the pattern in storybookData13.js
// through storybookData18.js. Seventh book in the Kids age track. Same
// simplified vocabulary/sentence length and 3+3 True/False and
// Build-a-Sentence pattern.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook19/cover.jpg";

export const STORYBOOK_TITLE = "A Trip to the Zoo";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Nora and her little brother Finn standing at the zoo entrance holding Dad's hands, a big colorful zoo map sign and animal statues visible behind them.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Nora", role: "The narrator, a young girl", look: "Dark hair in a braid, green T-shirt, curious and adventurous expression." },
  { name: "Dad", role: "Nora and Finn's father", look: "Short hair, sun hat, camera around his neck, patient and cheerful." },
  { name: "Finn", role: "Nora's little brother", look: "Short blond hair, striped shirt, easily excitable and sometimes a little nervous." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Going to the Zoo",
    image: null,
    imageNote: "Nora, Finn, and Dad walking through the big front gate of the zoo, holding tickets, a colorful map sign showing animal paths nearby.",
    story:
      "Today, Dad takes my little brother Finn and me to the zoo. I feel very excited because I have never been to a zoo before. We buy our tickets and walk through the big front gate. A map shows us where all the animals live in the zoo. “Which animal do you want to see first, Nora?” Dad asks me. “I want to see the lions!” I say with excitement. Finn holds Dad's hand tightly because he feels a little nervous. We walk down the path, ready for a fun day of animals.",
    questions: [
      { text: "Who takes Nora and Finn to the zoo?", answer: "Dad." },
      { text: "What do they use to see where the animals live?", answer: "A map." },
      { text: "Which animal does Nora want to see first?", answer: "The lions." },
    ],
    trueFalse: [
      { text: "Dad takes them to the zoo.", answer: true },
      { text: "They have no map at the zoo.", answer: false },
      { text: "Nora wants to see the lions first.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today, Dad takes my little brother Finn and me to the zoo.",
        jumbled: ["Dad", "my", "to", "Finn", "Today,", "and", "takes", "brother", "me", "the", "little", "zoo."],
      },
      {
        target: "I feel very excited because I have never been to a zoo before.",
        jumbled: ["zoo", "have", "I", "I", "excited", "a", "feel", "been", "never", "before.", "because", "very", "to"],
      },
      {
        target: "A map shows us where all the animals live in the zoo.",
        jumbled: ["where", "map", "live", "zoo.", "shows", "us", "A", "the", "the", "all", "in", "animals"],
      },
      {
        target: "“Which animal do you want to see first, Nora?” Dad asks me.",
        jumbled: ["Nora?”", "“Which", "me.", "asks", "see", "want", "animal", "do", "to", "Dad", "first,", "you"],
      },
      {
        target: "We walk down the path, ready for a fun day of animals.",
        jumbled: ["a", "path,", "down", "of", "day", "We", "ready", "walk", "the", "for", "animals.", "fun"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a place you want to visit.",
    mySentenceExample: "I want to visit the zoo.",
  },
  {
    number: 2,
    title: "The Lion's Roar",
    image: null,
    imageNote: "A large golden lion lying in the sun behind glass, mouth open mid-roar, Nora smiling with excitement and Finn jumping slightly beside her.",
    story:
      "We walk to the big lion area and look through the glass. A huge, golden lion lies in the warm sun nearby. Suddenly, the lion opens his mouth and lets out a loud roar! Finn jumps a little, but I feel excited instead of scared. “That was so loud!” I say with a big smile. “I saw you were not scared at all, Nora,” Dad says proudly. The lion's mane looks soft and fluffy in the sunlight. Dad tells us that lions roar to talk to other lions far away. We watch the lion for a long time before moving on. Seeing a real lion roar is amazing.",
    questions: [
      { text: "What does the lion do suddenly?", answer: "Lets out a loud roar." },
      { text: "How does Finn react?", answer: "He jumps a little." },
      { text: "Why do lions roar, according to Dad?", answer: "To talk to other lions far away." },
    ],
    trueFalse: [
      { text: "The lion roars loudly.", answer: true },
      { text: "Finn feels nothing at all.", answer: false },
      { text: "Dad says lions roar to talk to other lions.", answer: true },
    ],
    buildSentence: [
      {
        target: "We walk to the big lion area and look through the glass.",
        jumbled: ["and", "look", "glass.", "lion", "area", "big", "to", "We", "walk", "through", "the", "the"],
      },
      {
        target: "Suddenly, the lion opens his mouth and lets out a loud roar!",
        jumbled: ["the", "and", "Suddenly,", "loud", "opens", "roar!", "mouth", "out", "his", "a", "lion", "lets"],
      },
      {
        target: "“I saw you were not scared at all, Nora,” Dad says proudly.",
        jumbled: ["you", "saw", "proudly.", "says", "Dad", "all,", "were", "at", "not", "Nora,”", "scared", "“I"],
      },
      {
        target: "Dad tells us that lions roar to talk to other lions far away.",
        jumbled: ["lions", "to", "that", "roar", "away.", "other", "Dad", "to", "tells", "far", "lions", "us", "talk"],
      },
      {
        target: "We watch the lion for a long time before moving on.",
        jumbled: ["moving", "long", "the", "before", "time", "lion", "for", "on.", "watch", "We", "a"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a wild animal.",
    mySentenceExample: "The lion has a loud roar.",
  },
  {
    number: 3,
    title: "Funny Monkeys",
    image: null,
    imageNote: "Several monkeys swinging between branches, one hanging upside down making a funny face, Finn laughing hard nearby, a baby monkey clinging to its mother.",
    story:
      "Next, we walk over to the monkey area of the zoo. Many small monkeys swing and jump from branch to branch. One monkey hangs upside down and makes a funny face at us. Finn laughs so hard that he almost falls down. A baby monkey holds tightly onto its mother's back. “Look at that one, Nora!” Dad says, pointing. The monkeys chase each other and play games together. “They are so funny!” Finn says, laughing again and again. We stay and watch the monkeys play for many minutes. The monkey area is Finn's favorite part of the zoo so far.",
    questions: [
      { text: "What do the monkeys do?", answer: "Swing and jump from branch to branch." },
      { text: "What does one monkey do that makes Finn laugh?", answer: "Hangs upside down and makes a funny face." },
      { text: "What does a baby monkey do?", answer: "Holds tightly onto its mother's back." },
    ],
    trueFalse: [
      { text: "The monkeys swing from branches.", answer: true },
      { text: "Finn does not laugh at all.", answer: false },
      { text: "A baby monkey holds onto its mother.", answer: true },
    ],
    buildSentence: [
      {
        target: "Next, we walk over to the monkey area of the zoo.",
        jumbled: ["to", "the", "zoo.", "we", "walk", "the", "of", "Next,", "monkey", "over", "area"],
      },
      {
        target: "One monkey hangs upside down and makes a funny face at us.",
        jumbled: ["a", "funny", "makes", "and", "monkey", "face", "hangs", "us.", "down", "upside", "at", "One"],
      },
      {
        target: "A baby monkey holds tightly onto its mother's back.",
        jumbled: ["monkey", "holds", "mother's", "its", "A", "tightly", "back.", "baby", "onto"],
      },
      {
        target: "“They are so funny!” Finn says, laughing again and again.",
        jumbled: ["again", "funny!”", "are", "and", "“They", "says,", "so", "laughing", "again.", "Finn"],
      },
      {
        target: "The monkey area is Finn's favorite part of the zoo so far.",
        jumbled: ["is", "area", "of", "the", "monkey", "The", "favorite", "far.", "part", "Finn's", "zoo", "so"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something funny you saw.",
    mySentenceExample: "I laugh when the monkeys play.",
  },
  {
    number: 4,
    title: "Feeding the Giraffes",
    image: null,
    imageNote: "Nora holding up a leaf toward a tall giraffe bending its long neck down, Finn nearby laughing while feeding another giraffe, a zookeeper watching and smiling.",
    story:
      "At the giraffe area, a zookeeper gives us small leaves to feed them. “Hold the leaf up high, Nora, and the giraffe will reach it,” she says. A tall giraffe walks slowly toward me with gentle eyes. I hold the leaf up, and the giraffe's long tongue takes it softly. “Its tongue feels funny!” I say, laughing with surprise. Finn feeds a giraffe too, and he giggles happily. The giraffe's neck is much taller than I ever imagined. Feeding a real giraffe is the most exciting thing today. I want to feed the giraffes again before we leave.",
    questions: [
      { text: "What does the zookeeper give them?", answer: "Small leaves to feed the giraffes." },
      { text: "What does the giraffe use to take the leaf?", answer: "Its long tongue." },
      { text: "How does Nora feel about the giraffe's tongue?", answer: "Surprised -- she says it feels funny." },
    ],
    trueFalse: [
      { text: "They feed the giraffes leaves.", answer: true },
      { text: "The giraffe has a short neck.", answer: false },
      { text: "Nora says the tongue feels funny.", answer: true },
    ],
    buildSentence: [
      {
        target: "At the giraffe area, a zookeeper gives us small leaves to feed them.",
        jumbled: ["us", "to", "giraffe", "At", "leaves", "feed", "gives", "the", "area,", "small", "zookeeper", "them.", "a"],
      },
      {
        target: "“Hold the leaf up high, Nora, and the giraffe will reach it,” she says.",
        jumbled: ["will", "“Hold", "leaf", "up", "the", "giraffe", "Nora,", "reach", "she", "says.", "the", "it,”", "and", "high,"],
      },
      {
        target: "I hold the leaf up, and the giraffe's long tongue takes it softly.",
        jumbled: ["takes", "the", "the", "leaf", "I", "giraffe's", "tongue", "it", "softly.", "and", "up,", "long", "hold"],
      },
      {
        target: "The giraffe's neck is much taller than I ever imagined.",
        jumbled: ["much", "taller", "imagined.", "I", "than", "The", "is", "giraffe's", "neck", "ever"],
      },
      {
        target: "Feeding a real giraffe is the most exciting thing today.",
        jumbled: ["giraffe", "Feeding", "most", "real", "is", "today.", "thing", "exciting", "a", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeding an animal.",
    mySentenceExample: "I like to feed the giraffes.",
  },
  {
    number: 5,
    title: "The Sleepy Elephant",
    image: null,
    imageNote: "A large gray elephant standing quietly under a shady tree, flapping its ears slowly, Nora, Finn, and Dad watching quietly nearby.",
    story:
      "We walk to the biggest area in the whole zoo, the elephants. A huge, gray elephant stands quietly under a big shady tree. “Why is the elephant not moving?” Finn asks with curious eyes. “I think the elephant is sleeping, Nora,” Dad says with a smile. The elephant flaps its big ears slowly, even while it sleeps. Its long trunk swings gently from side to side in the breeze. We watch quietly so we do not wake the sleepy elephant. After a while, the elephant opens its eyes and looks at us. Seeing such a huge, gentle animal makes me feel amazed.",
    questions: [
      { text: "What animal is the biggest in the zoo?", answer: "The elephant." },
      { text: "What does Finn ask about the elephant?", answer: "Why is it not moving?" },
      { text: "What does the elephant do with its ears?", answer: "Flaps them slowly." },
    ],
    trueFalse: [
      { text: "The elephant is very big.", answer: true },
      { text: "Dad says the elephant is dancing.", answer: false },
      { text: "The elephant flaps its ears.", answer: true },
    ],
    buildSentence: [
      {
        target: "We walk to the biggest area in the whole zoo, the elephants.",
        jumbled: ["to", "walk", "zoo,", "area", "the", "the", "elephants.", "the", "We", "biggest", "in", "whole"],
      },
      {
        target: "A huge, gray elephant stands quietly under a big shady tree.",
        jumbled: ["under", "a", "quietly", "stands", "shady", "tree.", "gray", "elephant", "big", "huge,", "A"],
      },
      {
        target: "“I think the elephant is sleeping, Nora,” Dad says with a smile.",
        jumbled: ["a", "with", "sleeping,", "says", "is", "smile.", "“I", "elephant", "Dad", "Nora,”", "the", "think"],
      },
      {
        target: "Its long trunk swings gently from side to side in the breeze.",
        jumbled: ["to", "gently", "long", "from", "swings", "breeze.", "in", "trunk", "Its", "the", "side", "side"],
      },
      {
        target: "The elephant opens its eyes and looks at us.",
        jumbled: ["eyes", "opens", "elephant", "its", "looks", "and", "us.", "The", "at"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a big animal.",
    mySentenceExample: "The elephant is very big and gray.",
  },
  {
    number: 6,
    title: "Finn Gets Scared",
    image: null,
    imageNote: "A colorful peacock with its tail spread, Finn hiding behind Dad's leg looking startled, Nora holding Finn's hand pointing at the peacock's feathers.",
    story:
      "Near the bird area, a large peacock suddenly makes a loud, strange sound. Finn jumps and grabs Dad's leg tightly, feeling scared. “It's okay, Finn, that is just how peacocks talk,” Dad says gently. Finn hides his face for a moment, breathing quickly. “Good thinking, Nora,” Dad says, as I hold Finn's hand and say, “Look, its feathers are so pretty.” Finn slowly looks up and sees the peacock's colorful blue and green tail. He smiles a little and lets go of Dad's leg. “It's pretty, but still loud,” Finn says, feeling braver now. We stay a little longer until Finn feels completely calm.",
    questions: [
      { text: "What sound scares Finn?", answer: "A peacock's loud, strange sound." },
      { text: "What does Finn do when he feels scared?", answer: "Grabs Dad's leg." },
      { text: "What helps Finn feel braver?", answer: "Looking at the peacock's pretty feathers." },
    ],
    trueFalse: [
      { text: "A peacock makes a loud sound.", answer: true },
      { text: "Finn feels nothing when he hears it.", answer: false },
      { text: "The peacock's feathers help Finn feel braver.", answer: true },
    ],
    buildSentence: [
      {
        target: "Near the bird area, a large peacock suddenly makes a loud, strange sound.",
        jumbled: ["suddenly", "large", "strange", "area,", "makes", "peacock", "bird", "a", "the", "loud,", "Near", "sound.", "a"],
      },
      {
        target: "“It's okay, Finn, that is just how peacocks talk,” Dad says gently.",
        jumbled: ["gently.", "Finn,", "talk,”", "“It's", "Dad", "says", "peacocks", "just", "okay,", "is", "that", "how"],
      },
      {
        target: "“Good thinking, Nora,” Dad says, as I hold Finn's hand and say, “Look, its feathers are so pretty.”",
        jumbled: ["as", "are", "its", "Nora,”", "thinking,", "pretty.”", "“Good", "and", "Finn's", "so", "I", "says,", "say,", "hold", "feathers", "hand", "Dad", "“Look,"],
      },
      {
        target: "Finn slowly looks up and sees the peacock's colorful blue and green tail.",
        jumbled: ["and", "Finn", "up", "the", "colorful", "peacock's", "blue", "and", "sees", "green", "looks", "tail.", "slowly"],
      },
      {
        target: "“It's pretty, but still loud,” Finn says, feeling braver now.",
        jumbled: ["now.", "braver", "Finn", "“It's", "but", "still", "feeling", "pretty,", "says,", "loud,”"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling scared and then feeling better.",
    mySentenceExample: "I feel scared, but then I feel better.",
  },
  {
    number: 7,
    title: "The Penguin House",
    image: null,
    imageNote: "Nora and Finn pressing their hands against cold glass watching black and white penguins swim fast underwater, one baby penguin following its mother on the ice.",
    story:
      "Inside a cool, icy building, we find the penguin area. Many black-and-white penguins waddle around on the ice. Some penguins jump into the water and swim very fast. “They swim like little rockets!” I say, laughing at how quick they are. “You're right, Nora,” Dad laughs. Finn presses his hand against the cold glass to feel the chill. A baby penguin follows its mother closely across the ice. We watch the penguins slide on their bellies down a small hill. The penguin house is cold, but it is so much fun. Finn says the penguins are his new favorite animal.",
    questions: [
      { text: "What color are the penguins?", answer: "Black and white." },
      { text: "What do some penguins do in the water?", answer: "Swim very fast." },
      { text: "What does a baby penguin do?", answer: "Follows its mother closely across the ice." },
    ],
    trueFalse: [
      { text: "The penguins are black and white.", answer: true },
      { text: "The penguins cannot swim at all.", answer: false },
      { text: "A baby penguin follows its mother.", answer: true },
    ],
    buildSentence: [
      {
        target: "Inside a cool, icy building, we find the penguin area.",
        jumbled: ["a", "building,", "find", "Inside", "cool,", "icy", "we", "area.", "the", "penguin"],
      },
      {
        target: "“They swim like little rockets!” I say, laughing at how quick they are.",
        jumbled: ["laughing", "little", "like", "at", "they", "quick", "rockets!”", "how", "are.", "“They", "say,", "I", "swim"],
      },
      {
        target: "Finn presses his hand against the cold glass to feel the chill.",
        jumbled: ["chill.", "the", "presses", "hand", "to", "cold", "the", "his", "feel", "Finn", "glass", "against"],
      },
      {
        target: "We watch the penguins slide on their bellies down a small hill.",
        jumbled: ["a", "the", "watch", "small", "bellies", "on", "penguins", "down", "hill.", "their", "We", "slide"],
      },
      {
        target: "The penguin house is cold, but it is so much fun.",
        jumbled: ["fun.", "much", "it", "is", "cold,", "The", "but", "penguin", "so", "is", "house"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about penguins or cold places.",
    mySentenceExample: "Penguins live in cold places.",
  },
  {
    number: 8,
    title: "A Yummy Picnic Lunch",
    image: null,
    imageNote: "Nora, Finn, and Dad sitting at a shady picnic table eating sandwiches, a curious squirrel approaching nearby, birds flying overhead.",
    story:
      "At noon, we find a shady table for a picnic lunch. Dad opens our basket with sandwiches, fruit, and cold juice. “Here you go, Nora,” he says, handing me a sandwich. “I'm so hungry after all that walking!” I say happily. We eat our sandwiches while watching birds fly above the trees. Finn shares his cookies with me, and I share my grapes with him. A friendly squirrel comes close, hoping for a small snack too. We watch the squirrel and laugh at how brave it is. After lunch, we feel ready to see more animals. A picnic at the zoo makes the day even more special.",
    questions: [
      { text: "What does Dad bring in the basket?", answer: "Sandwiches, fruit, and cold juice." },
      { text: "Who do they watch while eating?", answer: "Birds flying above the trees." },
      { text: "What comes close during lunch?", answer: "A friendly squirrel." },
    ],
    trueFalse: [
      { text: "Dad brings sandwiches and fruit.", answer: true },
      { text: "They eat lunch inside a building.", answer: false },
      { text: "A squirrel comes close during lunch.", answer: true },
    ],
    buildSentence: [
      {
        target: "At noon, we find a shady table for a picnic lunch.",
        jumbled: ["lunch.", "table", "for", "a", "we", "picnic", "find", "noon,", "shady", "At", "a"],
      },
      {
        target: "“Here you go, Nora,” he says, handing me a sandwich.",
        jumbled: ["Nora,”", "go,", "“Here", "says,", "sandwich.", "he", "you", "a", "handing", "me"],
      },
      {
        target: "Finn shares his cookies with me, and I share my grapes with him.",
        jumbled: ["Finn", "I", "shares", "him.", "me,", "share", "my", "with", "with", "his", "cookies", "grapes", "and"],
      },
      {
        target: "A friendly squirrel comes close, hoping for a small snack too.",
        jumbled: ["A", "too.", "small", "a", "squirrel", "for", "snack", "friendly", "hoping", "close,", "comes"],
      },
      {
        target: "A picnic at the zoo makes the day even more special.",
        jumbled: ["at", "the", "picnic", "special.", "the", "A", "makes", "day", "zoo", "more", "even"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a picnic.",
    mySentenceExample: "I like to eat a picnic outside.",
  },
  {
    number: 9,
    title: "The Butterfly Garden",
    image: null,
    imageNote: "Nora standing very still with an orange butterfly on her shoulder, Finn holding out his hand with a small blue butterfly resting on his finger, colorful flowers all around.",
    story:
      "Our last stop is a warm, colorful butterfly garden. Hundreds of butterflies fly gently all around the flowers. A bright orange butterfly lands softly on my shoulder. “Don't move, Nora, it likes you!” Finn whispers with a big smile. I stay very still and watch the butterfly's delicate wings. Finn holds out his hand, hoping a butterfly will land on him too. Soon, a small blue butterfly rests gently on his finger. We both smile with wonder at the beautiful butterflies around us. The butterfly garden feels like a magical, colorful dream.",
    questions: [
      { text: "Where do they go last?", answer: "The butterfly garden." },
      { text: "What lands on Nora's shoulder?", answer: "A bright orange butterfly." },
      { text: "What lands on Finn's finger?", answer: "A small blue butterfly." },
    ],
    trueFalse: [
      { text: "They visit a butterfly garden.", answer: true },
      { text: "No butterflies land on them.", answer: false },
      { text: "A blue butterfly lands on Finn's finger.", answer: true },
    ],
    buildSentence: [
      {
        target: "Our last stop is a warm, colorful butterfly garden.",
        jumbled: ["last", "warm,", "butterfly", "Our", "stop", "colorful", "is", "garden.", "a"],
      },
      {
        target: "Hundreds of butterflies fly gently all around the flowers.",
        jumbled: ["fly", "around", "butterflies", "of", "Hundreds", "the", "all", "flowers.", "gently"],
      },
      {
        target: "“Don't move, Nora, it likes you!” Finn whispers with a big smile.",
        jumbled: ["big", "likes", "you!”", "Nora,", "it", "a", "smile.", "whispers", "with", "“Don't", "Finn", "move,"],
      },
      {
        target: "Finn holds out his hand, hoping a butterfly will land on him too.",
        jumbled: ["holds", "on", "too.", "land", "out", "hand,", "will", "his", "butterfly", "Finn", "hoping", "him", "a"],
      },
      {
        target: "We both smile with wonder at the beautiful butterflies around us.",
        jumbled: ["butterflies", "wonder", "with", "at", "We", "beautiful", "both", "us.", "the", "smile", "around"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about butterflies or flowers.",
    mySentenceExample: "I like to watch butterflies fly.",
  },
  {
    number: 10,
    title: "Goodbye, Zoo Animals!",
    image: null,
    imageNote: "Nora and Finn waving goodbye near the zoo exit at sunset, each holding a small stuffed animal from the gift shop, Dad smiling beside them.",
    story:
      "As the sun begins to set, it is time to leave the zoo. I feel a little sad because today was so much fun. We walk past the lions, monkeys, and giraffes one last time. “Bye, elephant! Bye, penguins!” Finn shouts happily at the animals. Dad buys us each a small stuffed animal from the gift shop. I choose a soft giraffe, and Finn chooses a fluffy penguin. “This was the best day ever,” I tell Dad with a big smile. “I'm so glad you liked it, Nora,” Dad says, hugging me. On the way home, Finn and I talk about all our favorite animals. I cannot wait to visit the zoo again someday.",
    questions: [
      { text: "Why does Nora feel a little sad?", answer: "Because it is time to leave the zoo." },
      { text: "What does Dad buy them?", answer: "A small stuffed animal each." },
      { text: "What do Nora and Finn talk about on the way home?", answer: "All their favorite animals." },
    ],
    trueFalse: [
      { text: "Nora feels sad because the day is ending.", answer: true },
      { text: "Dad buys them nothing.", answer: false },
      { text: "They talk about their favorite animals.", answer: true },
    ],
    buildSentence: [
      {
        target: "It is time to leave the zoo.",
        jumbled: ["to", "It", "zoo.", "the", "is", "leave", "time"],
      },
      {
        target: "We walk past the lions, monkeys, and giraffes one last time.",
        jumbled: ["time.", "walk", "lions,", "one", "giraffes", "last", "and", "monkeys,", "the", "We", "past"],
      },
      {
        target: "Dad buys us each a small stuffed animal from the gift shop.",
        jumbled: ["stuffed", "Dad", "us", "the", "shop.", "each", "a", "from", "buys", "animal", "small", "gift"],
      },
      {
        target: "“This was the best day ever,” I tell Dad with a big smile.",
        jumbled: ["day", "big", "ever,”", "best", "tell", "a", "I", "the", "“This", "Dad", "was", "smile.", "with"],
      },
      {
        target: "On the way home, Finn and I talk about all our favorite animals.",
        jumbled: ["Finn", "On", "our", "about", "talk", "the", "animals.", "all", "I", "home,", "way", "favorite", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite animal.",
    mySentenceExample: "My favorite animal is the giraffe.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
