import { makeExplainer } from "./explainerKit.js";

// Gazette explainers, batch 2: tech and nature. Facts come from the sources listed in each entry's references.

export const EXPLAINERS_2 = [
  makeExplainer({
    slug: "how-face-unlock-works",
    emoji: "🙂",
    variant: "tech",
    topicLabel: "Digital & Tech",
    title: "How Face Unlock Knows It Is You",
    dek: "Your phone does not take a photo of your face. It measures its shape in 3D, and that is both its strength and its weakness.",
    plain: [
      "Face unlock does not take a normal photo. The phone sends out many tiny invisible dots of light onto your face. A camera reads the dots and makes a 3D map of your face.",
      "The phone keeps your map safe inside the phone. When you look at the phone, it checks the new map. If it is the same, the phone opens.",
      "A flat photo does not work, because it has no shape. But twins and brothers or sisters can sometimes open each other's phones. So a passcode is still important.",
    ],
    polished: [
      "When you look at your phone and it unlocks, it is not simply taking a photo. On an iPhone with Face ID, a projector sends a grid of tiny, invisible infrared dots onto your face, and an infrared camera reads them to build a 3D map of its shape.[1] The phone compares this map with the one you saved when you set it up, and it unlocks only if they match well enough.[1] The information is encrypted and kept in a protected chip inside the phone.[1][3]",
      "Because the system measures {{depth|noun|the distance from the front of something to the back}}, a flat photo cannot fool it: the dots would show only a flat surface.[1] But it is not perfect. Apple says the chance that a random person could unlock your phone is about one in a million, and that the chance is higher for twins, for brothers and sisters who look like you, and for children under 13. For those people, Apple recommends using a passcode.[3] In 2017, media tests showed that twins could unlock each other's phones, and a 10-year-old reportedly unlocked his mother's.[2]",
      "Face unlock is convenient and fairly secure for most people, but it is not a perfect lock. Your face is not a secret, and you cannot change it like a {{password|noun|a secret word or number that lets you into something}}, so a strong passcode is still an important back-up.",
    ],
    precise: [
      "When a phone unlocks the moment you look at it, it is not merely taking a photograph. On an iPhone with Face ID, a projector casts a grid of tiny, invisible infrared dots across the face, and an infrared camera reads them to construct a three-dimensional map of its contours.[1] The phone compares this map with the one stored during set-up and unlocks only if the two correspond closely enough.[1] The data is encrypted and held in a protected chip within the device.[1][3]",
      "Because the system measures {{depth|noun|distance from the front of an object to its back}}, a flat photograph cannot deceive it, as the dots would reveal only a flat surface.[1] Yet it is not infallible. Apple puts the probability that a random person could unlock a phone at roughly one in a million, but concedes that the figure is different for twins, for siblings who resemble the owner and for children under 13, and it advises such users to rely on a passcode.[3] In 2017, media tests showed that twins could unlock each other's phones, and a ten-year-old reportedly opened his mother's.[2]",
      "Face unlock is convenient and reasonably secure for most people, but it is not a perfect lock. A face is not a secret, and unlike a {{password|noun|a confidential combination of characters used to gain access}} it cannot be changed, which is why a strong passcode remains an important safeguard.",
    ],
    references: [
      { domain: "en.wikipedia.org", name: "Wikipedia", headline: "Face ID" },
      { domain: "macworld.com", name: "Macworld", headline: "iPhone X Face ID security fails: tricked by 10-year-old, 3D-printed mask and twins" },
      { domain: "bgr.com", name: "BGR", headline: "Apple Finally Answers All Your Questions About How Face ID Works" },
    ],
    guide: [
      { q: "Do you use face unlock, a fingerprint or a passcode? Which do you think is the safest, and why?", follow: ["What would you do if someone who looks like you could open your phone?"] },
      { q: "The article says you cannot change your face like a password. Why can that be a problem for security?", follow: [] },
      { q: "Should phones keep face information on the device only, or is it acceptable to store it online? Explain your opinion.", follow: ["Who would you trust with a map of your face?"] },
    ],
  }),

  makeExplainer({
    slug: "how-streaming-apps-choose-what-you-watch",
    emoji: "📺",
    variant: "tech",
    topicLabel: "Digital & Tech",
    title: "How Streaming Apps Choose What You Watch Next",
    dek: "Most of what people watch on some services comes from suggestions, and the system behind them is simpler, and riskier, than it looks.",
    plain: [
      "When you open a streaming app, the shows on your screen are not the same for everybody. A computer chooses them for you.",
      "The computer looks at what you watched. It also looks at what people like you watched. If they liked a film, it may show you the film.",
      "This is useful, but there is a problem. You may only see things like the ones you know. Sometimes it is good to try something new.",
    ],
    polished: [
      "When you open a streaming app, the rows of shows on your screen are not the same for everyone. They are chosen for you by a {{recommendation|noun|a suggestion about what is good or suitable}} system. Netflix said in 2012 that about 75 percent of what people watch comes from some kind of recommendation,[2] and in 2017 a company executive put the figure near 80 percent.[1][3]",
      "The main idea is simple: people with similar viewing habits probably have similar tastes. If many people who watched the same series as you also loved a certain film, the system will probably suggest that film to you. It also uses information about the shows themselves, such as the ratings, the year they were made and the director.[2]",
      "There is a risk, though. If the system only shows you more of what you already like, you may never discover anything different, a problem often called an {{echo chamber|noun|a situation where you only meet ideas or choices that match your own}}. Netflix says it adds variety to avoid this, but outside researchers have not confirmed how well it works.[1] A recommendation is a guess about you, not an order, and the best way to find something new may be to try a show you would normally skip.",
    ],
    precise: [
      "When a streaming app opens, the rows of titles on the screen are not the same for every viewer; they are selected by a {{recommendation|noun|a system that suggests content a user is likely to enjoy}} engine. Netflix stated in 2012 that about 75 percent of what its subscribers watched came from some form of recommendation,[2] and in 2017 a company executive put the figure at nearly 80 percent.[1][3]",
      "The underlying assumption is straightforward: viewers with similar histories probably share similar tastes. If many people who watched the same series as you went on to enjoy a particular film, the system will probably suggest that film to you. It also draws on information about the programmes themselves, such as their ratings, year of production and director.[2]",
      "The approach carries a risk. A system that keeps serving more of what you already enjoy may leave you in an {{echo chamber|noun|an environment in which a person encounters only familiar ideas or choices}}, never meeting anything unfamiliar. Netflix says it builds variety into its suggestions to prevent this, but independent researchers have not verified how effective that is.[1] A recommendation is a prediction about you, not an instruction, and the surest way to find something new may be to try a programme you would normally skip.",
    ],
    references: [
      { domain: "mobilesyrup.com", name: "MobileSyrup", headline: "80 percent of Netflix shows discovered through recommendations" },
      { domain: "cnn.com", name: "CNN", headline: "Inside Netflix's popular recommendation algorithm" },
      { domain: "etcentric.org", name: "ETCentric", headline: "Netflix Viewing Activity Is Largely Recommendation Driven" },
    ],
    guide: [
      { q: "How often do you watch something because an app suggested it? Do you usually enjoy it?", follow: ["When did a suggestion surprise you in a good way?"] },
      { q: "The article says recommendations can keep us inside an 'echo chamber'. What could you do to discover different shows, music or videos?", follow: [] },
      { q: "Is it a problem that a computer knows so much about your tastes? What information would you be happy or unhappy to share?", follow: ["Should apps explain why they suggest something?"] },
    ],
  }),

  makeExplainer({
    slug: "how-wireless-charging-works",
    emoji: "🔋",
    variant: "tech",
    topicLabel: "Digital & Tech",
    title: "How Wireless Charging Works, and Why It Wastes Energy",
    dek: "No cable, but not magic: two coils pass energy through the air, and some of it is always lost as heat.",
    plain: [
      "A wireless charger has no cable. But energy still has to go from the charger to the phone. It travels through the air with a magnet field.",
      "The charger has a coil of wire. The phone has a coil, too. When the coils are close, the phone can take the energy and charge its battery.",
      "Some energy is lost as heat. If the phone is in the wrong place, more energy is lost. New chargers use small magnets to hold the phone in the right place.",
    ],
    polished: [
      "A wireless charger has no cable, but electricity still has to travel from the charger to the phone. It does this with two coils of copper wire. The coil in the charger carries a changing current, which creates a changing magnetic field. The coil inside the phone picks up this field, which creates a current in it, and the phone changes that current into the kind it needs to charge the battery.[1] This is called {{inductive|adjective|working by using a magnetic field to move energy from one coil to another}} charging, and the most common standard is called Qi.[1]",
      "The system is convenient, but it wastes energy. Some of the energy is lost as heat in the coils and during the conversion steps.[1][2] How much is lost depends a lot on how well the phone sits on the charger. If the coils are not lined up, charging is less efficient.[2] The coils must also be close together, within a few centimeters, so the phone cannot be far from the charger.[1]",
      "A newer version of the standard, Qi2, adds magnets that snap the phone into the right position, which helps to reduce wasted energy.[3] Even so, a cable is usually the more efficient way to charge. Wireless charging makes most sense when convenience matters more than speed, for example on a bedside table or in a car.",
    ],
    precise: [
      "A wireless charger has no cable, yet energy must still travel from the charger to the phone, and it does so through two coils of copper wire. The coil in the charger carries an alternating current, which produces a fluctuating magnetic field. The coil inside the phone intercepts this field, which induces a current in it, and the phone converts that current into the form required to charge the battery.[1] The principle is known as {{inductive|adjective|relating to the transfer of energy between coils by means of a magnetic field}} charging, and the most widespread standard is called Qi.[1]",
      "The arrangement is convenient but {{inefficient|adjective|wasting some energy or resources}}. Some energy is dissipated as heat in the coils and during the conversion steps.[1][2] The amount depends heavily on how well the phone is positioned: if the coils are misaligned, efficiency drops.[2] The coils must also sit close together, within a few centimetres, so the phone cannot be placed at a distance.[1]",
      "A newer version of the standard, Qi2, adds magnets that draw the phone into the correct position, which helps to limit wasted energy.[3] Even so, a cable is generally the more efficient way to charge. Wireless charging makes most sense when convenience outweighs speed, such as on a bedside table or in a car.",
    ],
    references: [
      { domain: "scienceabc.com", name: "Science ABC", headline: "How Does Qi Wireless Inductive Charging Work?" },
      { domain: "evezone.evetech.co.za", name: "EveZone", headline: "Wireless charging efficiency and power loss" },
      { domain: "meter.net", name: "Meter.net", headline: "Wireless charging: What are its benefits, limitations, and where is it heading?" },
    ],
    guide: [
      { q: "Do you use wireless charging? If not, would you? What would make it worth it for you?", follow: ["Where would be the best place for a charging pad in your home?"] },
      { q: "The article says wireless charging wastes some energy as heat. If millions of people used it, why might that matter?", follow: [] },
      { q: "Many products are made more convenient but less efficient. Can you think of another example? Is the convenience worth it?", follow: ["Who should decide: customers, companies or governments?"] },
    ],
  }),

  makeExplainer({
    slug: "how-qr-codes-work",
    emoji: "🔳",
    variant: "tech",
    topicLabel: "Digital & Tech",
    title: "How QR Codes Work, and How Scammers Use Them",
    dek: "A black-and-white square can survive scratches and stains, but your eyes cannot tell a real code from a fake one.",
    plain: [
      "A QR code is a square made of black and white dots. A phone camera can read it very fast. A Japanese company made the first QR code in 1994 to track car parts.",
      "A QR code can still work when it is dirty or torn. It has extra information inside, so the phone can fix small problems.",
      "But you cannot read a QR code with your eyes. A criminal can put a false code on top of a real one. Check for a sticker, and check the web address.",
    ],
    polished: [
      "A QR code is a square pattern of black and white dots that a phone camera can read in a moment. The Japanese company Denso Wave created it in 1994 to track car parts in factories, because it could hold much more information than an ordinary barcode.[1] Three of the corners have large squares that tell the scanner the size and direction of the code, so it can be read from almost any angle.[1]",
      "QR codes can still be read when part of them is dirty or damaged. The data is stored together with extra repair information, using a mathematical method called Reed-Solomon coding, so that missing parts can be rebuilt. The strongest setting can restore up to about 30 percent of the code, but how much damage a code survives depends on where the damage is.[1]",
      "The same simplicity creates a risk. People cannot read a QR code with their eyes, so they cannot tell a real code from a {{fake|adjective|made to look real in order to trick people}} one. The FBI has warned that criminals sometimes stick a false code over a real one, and the FTC has reported fake codes on parking meters.[2][3] Before you scan, look for a sticker on top, check the web address that opens, and be careful if a site asks for a password or payment details.[2]",
    ],
    precise: [
      "A QR code is a square pattern of black and white modules that a phone camera can read in an instant. The Japanese company Denso Wave developed it in 1994 to track car parts in factories, because it could store far more information than a conventional barcode.[1] Three of its corners carry large squares that tell the scanner the size and orientation of the code, so it can be read from almost any angle.[1]",
      "A QR code can still be read when part of it is dirty or damaged. The data is stored alongside redundant repair information, produced by a mathematical method called Reed-Solomon coding, which allows missing sections to be reconstructed. The most robust setting can restore up to about 30 percent of the code, although the damage a code survives depends on where it occurs.[1]",
      "The same simplicity creates a {{vulnerability|noun|a weakness that can be used to cause harm}}. The human eye cannot read a QR code, so it cannot tell a genuine one from a malicious one. The FBI has warned that criminals sometimes stick a false code over a legitimate one, and the FTC has reported fake codes on parking meters.[2][3] Before scanning, check for a sticker placed on top, examine the web address that opens, and be wary if a site asks for a password or payment details.[2]",
    ],
    references: [
      { domain: "maketecheasier.com", name: "MakeTechEasier", headline: "How QR Codes Survive Damage" },
      { domain: "ic3.gov", name: "FBI Internet Crime Complaint Center", headline: "Cybercriminals Tampering with QR Codes to Steal Victim Funds" },
      { domain: "consumer.ftc.gov", name: "Federal Trade Commission", headline: "Scammers hide harmful links in QR codes to steal your information" },
    ],
    guide: [
      { q: "Where do you scan QR codes most often (menus, tickets, posters)? Have you ever thought about who made the code?", follow: ["What would you check before scanning a code on a parking meter?"] },
      { q: "The article says our eyes cannot tell a real QR code from a fake one. What other things online are hard to check with our eyes?", follow: [] },
      { q: "Should businesses be responsible for protecting their QR codes from stickers and tampering? What could they do?", follow: ["How could a restaurant check its codes every day?"] },
    ],
  }),

  makeExplainer({
    slug: "how-a-house-is-3d-printed",
    emoji: "🏠",
    variant: "work",
    topicLabel: "Society & Issues",
    title: "How a House Is 3D-Printed, and What the Printer Cannot Do",
    dek: "A giant printer can build the walls of a house in about a day, but the roof, the windows and the real cost are still a challenge.",
    plain: [
      "A 3D printer for houses is very big. It pushes out wet concrete in thin lines. The lines go on top of each other and make a wall.",
      "The printer makes only the walls. People still make the roof, the windows and the pipes in the usual way.",
      "Printed houses can be fast to build. But they are not always cheap. In Texas, a company is printing the walls for a neighborhood of 100 homes.",
    ],
    polished: [
      "A 3D-printed house is built by a giant printer that squeezes out concrete in thin layers, a little like toothpaste. The company ICON uses a printer called Vulcan, which lays a special concrete mix in strands about an inch thick, and the layers build up into walls.[1] In 2018, a demonstration house in Austin, Texas, cost about $10,000 to print, and the company hoped to bring the price down to about $4,000.[2]",
      "But printing is only part of the work. The printer makes just the walls. The roof, windows, wiring and plumbing are still added in the usual way.[3] The real costs have also been higher than the early hopes: The Real Deal reported that the first fully permitted 3D-printed home took twice as long and cost more than double what its backers expected.[3] Because the technology is new, there is also little long-term information about how these walls will {{age|verb|to change over time and become older}}.",
      "Even so, the idea is spreading. In Georgetown, Texas, ICON started printing the walls for a neighborhood of 100 homes in 2022, and it aims to be the largest 3D-printed community in the world.[1] For now, printed houses show that building can be faster and use less labor, but they have not yet made homes cheap for everyone.",
    ],
    precise: [
      "A 3D-printed house is built by a gigantic printer that extrudes concrete in thin layers, much like toothpaste. The company ICON uses a printer called Vulcan, which lays down a specially formulated concrete in strands roughly an inch thick, and the layers accumulate into walls.[1] In 2018, a demonstration house in Austin, Texas, cost about $10,000 to print, and the company hoped to bring the price down to around $4,000.[2]",
      "Printing, however, is only part of the work. The machine produces just the walls; the roof, windows, wiring and plumbing are still installed by conventional methods.[3] The real costs have also exceeded early hopes: The Real Deal reported that the first fully permitted 3D-printed home took twice as long and cost more than double what its backers had expected.[3] Because the technology is so new, there is also little {{long-term|adjective|continuing over many years}} evidence of how the walls will age.",
      "Even so, the idea is gaining ground. In Georgetown, Texas, ICON began printing the walls for a neighbourhood of 100 homes in 2022 and aims to create the largest 3D-printed community in the world.[1] For now, printed homes show that construction can be faster and less labour-intensive, but they have not yet made housing {{affordable|adjective|cheap enough for ordinary people to buy}} for everyone.",
    ],
    references: [
      { domain: "humanprogress.org", name: "HumanProgress", headline: "World's largest 3D-printed neighborhood nears completion" },
      { domain: "bgr.com", name: "BGR", headline: "This $10,000 3D Printed House Can Be Built In 24 Hours And Is Bigger Than A Studio Apartment" },
      { domain: "therealdeal.com", name: "The Real Deal", headline: "3D-printed housing's promise" },
    ],
    guide: [
      { q: "Would you live in a 3D-printed house? What would you want to know about it first?", follow: ["Would a printed house feel different to you from a normal one?"] },
      { q: "The article says printed homes have not been as cheap as hoped. Why do new technologies often cost more than people expect?", follow: [] },
      { q: "Could 3D printing help solve housing shortages in your country? What other things would have to change?", follow: ["Who should pay for the first homes?"] },
    ],
  }),

  makeExplainer({
    slug: "why-coral-reefs-turn-white",
    emoji: "🪸",
    variant: "planet",
    topicLabel: "Nature & Science",
    title: "Why Coral Reefs Turn White, and Whether They Can Recover",
    dek: "Bleaching is a coral's emergency reaction to hot water. New research suggests that some reefs can survive, but only if we leave them alone.",
    plain: [
      "A coral is an animal. Tiny plants called algae live inside it. The algae make food for the coral and give it color.",
      "When the sea is too hot, the coral pushes out the algae. The coral turns white. This is called bleaching. A white coral has little food.",
      "If the sea gets cool again, the coral can take new algae and live. But if the heat lasts too long, many corals die. Scientists found some corals that changed to better algae.",
    ],
    polished: [
      "Corals are animals, but they live in a partnership with tiny algae that grow inside their bodies. The algae make food for the coral and give it its bright colors.[1] When the sea becomes too warm, this partnership breaks down. The coral pushes out the algae, turns white and has much less food. This is called bleaching.[1]",
      "A bleached coral is not dead, but it is in danger. If the water cools within a few weeks, the coral can take back its algae and recover.[1] But long periods of heat can kill large numbers of corals. Pollution and other kinds of stress can add to the damage.[1]",
      "Scientists have found some hope. A study of Kiritimati, an island in the Pacific, looked at the 2015–2016 heatwave and found that some corals recovered while the water was still warm. They did it by changing to a more heat-tolerant kind of algae, but only where there was little {{disturbance|noun|something that interrupts or damages a natural place}} from local people.[2] That is good news, but it does not mean that reefs are safe. Reefs in Florida were still struggling long after a record heatwave in 2023.[3]",
    ],
    precise: [
      "Corals are animals, but they live in partnership with microscopic algae that grow inside their tissue. The algae supply the coral with food and give it its vivid colours.[1] When the sea becomes too warm, the partnership breaks down: the coral expels the algae, turns white and is left with far less food. This is known as bleaching.[1]",
      "A bleached coral is not dead, but it is in {{jeopardy|noun|a situation in which something is likely to be harmed or lost}}. If the water cools within a few weeks, the coral can take its algae back and recover.[1] Prolonged heat, however, can kill corals in large numbers, and pollution and other stresses can compound the damage.[1]",
      "Scientists have found grounds for cautious hope. A study of Kiritimati, an island in the Pacific, examined the 2015–2016 heatwave and found that some corals recovered while the water was still warm. They did so by switching to a more heat-tolerant species of algae, but only where local human disturbance was low.[2] That is encouraging, but it does not mean reefs are safe: reefs in Florida were still struggling long after a record heatwave in 2023.[3]",
    ],
    references: [
      { domain: "oceanservice.noaa.gov", name: "NOAA Ocean Service", headline: "What is coral bleaching?" },
      { domain: "repository.library.noaa.gov", name: "NOAA Institutional Repository", headline: "Dynamic symbioses reveal pathways to coral survival through prolonged heatwaves" },
      { domain: "enca.com", name: "eNCA", headline: "Florida coral reef still struggling after 2023 heatwave" },
    ],
    guide: [
      { q: "Have you seen a coral reef, in person or on screen? What did it look like, and what lived there?", follow: ["What would be lost if a reef disappeared?"] },
      { q: "The study found that corals recovered only where there was little local human disturbance. What could people near a reef do to protect it?", follow: [] },
      { q: "Some corals survived the heat by changing their algae. Does that make the problem smaller, or can we not rely on it? Explain.", follow: ["What else would you want scientists to find out?"] },
    ],
  }),
];
