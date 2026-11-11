import { SUPPORT_EMAIL } from "./siteConfig.js";
// Content for the legal pages (src/LegalPage.jsx). Kept as structured data,
// separate from layout, so the three documents can share one page shell.
// Drafted as a solid starting point grounded in what Sentenco actually does —
// not a substitute for review by a Philippine lawyer before Sentenco accepts
// real payments.

export const LEGAL_UPDATED = "November 11, 2026";

export const LEGAL_DOCS = [
  { key: "terms", label: "Terms of Service" },
  { key: "privacy", label: "Privacy Policy" },
  { key: "refund", label: "Refund & Cancellation" },
];

export const TERMS_CONTENT = {
  title: "Terms of Service",
  intro:
    "These Terms govern your use of Sentenco, a platform for English teachers offering lesson content, a teacher community, and teaching tools. By creating an account or using Sentenco, you agree to these Terms.",
  sections: [
    {
      heading: "1. Who can use Sentenco",
      body: [
        "Sentenco is built for English teachers and prospective teachers. You must be at least 18 years old, or the age of legal majority where you live, to create an account.",
        "You're responsible for keeping your account credentials secure and for all activity under your account. Tell us right away if you think someone else has access to it.",
        "One account is for one person. Don't share your login with other teachers or let others use your account. Sentenco allows one active login per account at a time, so when you log in on a new device, any other device signed in to your account is signed out. We may suspend or end accounts that are shared, including paid ones, and a school or group that wants several teachers to use Sentenco should ask us about separate accounts for each teacher.",
      ],
    },
    {
      heading: "2. Plans and what they include",
      body: [
        "Sentenco offers a Free plan and paid Pro and Pro+ plans, described on the Subscription page. Features available to you depend on your current plan and, for the Free plan, on your recent activity in the Homeroom community (Teacher's Desk unlocks for the day once you've posted, commented, or liked a few times).",
        "We may add, change, or retire features over time. If a change meaningfully reduces what's included in a paid plan you're already on, we'll let you know.",
      ],
    },
    {
      heading: "3. Paying for Pro and Pro+",
      body: [
        "Pro and Pro+ are sold as passes: you pay once for 1 month (30 days) or 1 year (365 days). Prices are in Philippine pesos and are shown on the Subscription page before you pay.",
        "Payments are made on the secure payment page of Maya, our payment processor, using the Maya app, QR Ph, or a credit or debit card. Your plan turns on as soon as Maya confirms the payment.",
        "Passes don't renew by themselves and we never charge you automatically. To keep your plan, you buy another pass. If you buy one before your current pass of the same plan ends, the new one starts when the current one ends, so you don't lose any days.",
        "Prices shown as \"Early adopter price\" are our current introductory rate. If you bought a pass at that rate, you can keep buying passes at that rate for as long as you renew before your current pass ends. If your pass ends and you don't renew, the price at the time you come back applies.",
        "If you need an official receipt for a payment, email us with your account email and the payment date.",
        "See our Refund & Cancellation Policy for how passes, renewals, and refunds work.",
      ],
    },
    {
      heading: "4. Free trial and promo codes",
      body: [
        "Free trial. Each account can start one free trial, lasting 7 days, that gives access to Pro+ features. No payment method is needed to start it. The trial begins when you choose to start it and ends automatically after 7 days. We won't charge you when it ends and it doesn't turn into a paid subscription unless you choose to subscribe. When it ends, your account returns to the Free plan. Your account and anything you've posted or saved stay, but features that need Pro or Pro+ lock again.",
        "Fair use during the trial. To keep the service available for everyone, features that use AI may be limited to a set number of requests per day while you are on a trial. We may change that limit.",
        "Promo codes. We may give promo codes to selected teachers or groups. A code gives access to the plan and for the length of time stated when it is created, and starts when you redeem it. Codes may have an expiry date and a limit on how many times they can be used. A code can be redeemed once per account, is for the person it was given to, can't be sold or transferred, and has no cash value.",
        "If you have more than one trial, code, or pass active at the same time, the one that gives you the highest plan applies. A trial or code doesn't add days to a paid pass, and it doesn't replace one.",
        "We may end trial or promo access early, and cancel a code, if we find it was obtained or used in a way that goes against these Terms, for example by creating several accounts to get repeated trials, or by sharing or selling a code.",
        "We may change, pause, or stop offering free trials and promo codes at any time. Changes don't affect access you have already started, except as described above.",
      ],
    },
    {
      heading: "5. The Homeroom community",
      body: [
        "Homeroom and the Community feed let you post, comment, and interact with other teachers. You keep ownership of what you post, but you give Sentenco permission to store, display, and distribute it within the app so the community feature works.",
        "Don't post anything illegal, harassing, hateful, sexually explicit, or that infringes someone else's rights. Don't spam, impersonate others, or share a student's personal information.",
        "We can remove content or suspend accounts that break these rules, at our discretion, with or without notice depending on severity.",
        "Following and connecting. You can follow a teacher to see their posts in your Homeroom, and send a connection request. A connection needs the other teacher to accept. Don't send repeated or unwanted requests or messages.",
        "Message requests. A message to a teacher you aren't connected with, and don't follow each other, arrives as a request until they accept or decline. Until they accept, you can send only one message. If a teacher declines, don't try to contact them again by other means in Sentenco.",
        "Blocking. You can block any teacher. Blocking hides each of you from the other and stops messages, follows, and connection requests between you. Don't try to get around a block, for example by making another account to contact someone who blocked you.",
        "Reporting. You can report a post, comment, or profile if it breaks these rules. Reports are private. We review them and may remove content, warn, or suspend or end accounts. Only authors can delete their own posts and comments. We remove other people's content only after a report. Reports made in bad faith, such as to harass someone, can lead to action against the reporter.",
        "Group chats. People in a group chat can see everything shared in it. Be respectful, and don't add people who don't want to be there.",
      ],
    },
    {
      heading: "6. Features that use AI",
      body: [
        "Some Sentenco features, such as translation in the Teacher Board, use AI to produce text. AI output can be wrong, incomplete, or miss context. Review it before using it with students. It's a teaching aid, not a substitute for your own judgment.",
        "Don't use these features to generate content that breaks section 5's rules, or to try to extract, abuse, or overload the underlying AI service.",
      ],
    },
    {
      heading: "7. Lesson content and intellectual property",
      body: [
        "Curriculum, articles, lesson plans, and other content Sentenco provides belong to Sentenco or our licensors. You may use them for your own teaching, including with your students. You may not resell, redistribute, or republish them as your own product.",
        "Sentenco's name, logo, and branding are ours. Don't use them without permission.",
      ],
    },
    {
      heading: "8. Termination",
      body: [
        "You can stop using Sentenco and delete your account at any time. We can suspend or terminate accounts that violate these Terms, don't pay for a paid plan, or for other legitimate business reasons, with notice where practical.",
      ],
    },
    {
      heading: "9. Disclaimers and limitation of liability",
      body: [
        "Sentenco is provided \"as is.\" We don't guarantee it will be uninterrupted, error-free, or that AI-generated content will always be accurate. To the extent allowed by law, Sentenco isn't liable for indirect, incidental, or consequential damages arising from your use of the app.",
        "Nothing here limits liability that can't be limited under Philippine law.",
      ],
    },
    {
      heading: "10. Changes to these Terms",
      body: [
        "We may update these Terms as Sentenco grows. We'll post the updated version here with a new \"last updated\" date. Continuing to use Sentenco after changes take effect means you accept them.",
      ],
    },
    {
      heading: "11. Governing law",
      body: ["These Terms are governed by the laws of the Republic of the Philippines."],
    },
    {
      heading: "12. Contact",
      body: ["Questions about these Terms? Reach us at " + SUPPORT_EMAIL + "."],
    },
  ],
};

export const PRIVACY_CONTENT = {
  title: "Privacy Policy",
  intro:
    "This Privacy Policy explains what information Sentenco collects, how we use it, and the choices you have. Sentenco is intended for use by adult teachers, not directly by children.",
  sections: [
    {
      heading: "1. Information we collect",
      body: [
        "Account information: your email address, and any name, age, years of teaching, profile photo, cover photo, age groups you teach, areas of expertise, and country you choose to add. If you sign up through a company or school group, we also record which group you belong to.",
        "Content you create: community posts, comments, likes, and any images or files you upload to the Community feed.",
        "Private messages: the content of messages you send through Convo, in one-to-one chats and group chats, including any custom lesson you share in a chat. These aren't end-to-end encrypted. The other people in the chat can read them, and so can Sentenco, for support, moderation, or legal purposes.",
        "File Cabinet uploads: lesson materials and credentials you choose to store, including anything you mark private.",
        "Mentor program information: if you apply to become a mentor, the details in your application, like your experience, specialty, and any documents you attach.",
        "Usage information: your plan, and activity we use to unlock features, like your post/comment/like counts for the day. We also keep the notifications shown to you in the app, such as replies, new followers, and connection requests.",
        "Follows and connections: the teachers you follow, the teachers who follow you, and your connection requests and connections. We use them to show your counts, the \"Following\" label on posts, and your Your network page. When you follow a teacher or send a connection request, that teacher gets a notification with your name.",
        "Blocks: the teachers you block. A teacher you block isn't told. They simply stop seeing your posts and profile and can't message, follow, or connect with you.",
        "Reports: when you report a post, comment, or profile, we store who made the report, what was reported, the reason you chose, any note you wrote, and a copy of the reported text as it was at the time, so we can review it even if it is later deleted. We don't tell the reported teacher who reported them.",
        "Saved posts: the posts you save are listed in your account. They are private to you, and nobody else can see what you saved.",
        "Pinned post and edits: if you pin one of your posts, it shows first on your profile. If you edit a post, we show it as edited.",
        "Message requests: if you message a teacher you aren't connected with and don't follow each other, your first message is held as a request that they can accept or decline. They can read that first message before they decide.",
        "Login records: a random code for the device you last logged in on, and the time it was last active, so we can keep to one active login per account.",
        "Trial and promo code records: when you start a free trial, when it ends, any promo code you redeem and when, and a daily count of how many times you use features that use AI while on a trial, so we can apply the trial limit.",
        "Payment records: for each pass you buy, the plan and length you chose, the amount, the date, whether the payment went through, the reference number Maya gives it, and when your pass starts and ends. We also record which reminder emails we've sent you about your pass ending. Maya handles your card, e-wallet, and bank details. We never see or store them.",
        "Teaching tools you save: items you choose to save in the Syllabus maker, Slides, the Spin the Wheel lists, and Letter Board, which are stored in your account so you can open them again.",
        "Custom Lesson requests and lessons: if you request a Custom Lesson, the details you type into the form, such as the topic, level, lesson length, the student's language, any notes, and an optional student name. We also record which lessons belong to which teacher, and which lessons a teacher has chosen to share in a Homeroom post.",
        "Student information: Sentenco is for teachers, not children, and we don't knowingly collect information directly from children. If you type a student's details into a tool, like a first name in a Custom Lesson request, those details are stored with your account. Please use only what you need, preferably a first name or nickname, and make sure you have the permission of the student, or the parent or guardian of a student who is a minor.",
        "AI feature inputs: text you submit to a feature that uses AI, such as translation in the Teacher Board, so we can send it to our AI provider and return a result.",
      ],
    },
    {
      heading: "2. How we use your information",
      body: [
        "To provide the service: run your dashboard, the Homeroom community, curriculum access, and the features that use AI.",
        "To personalize your experience, like showing your name and badge on your posts, and unlocking Teacher's Desk once you're active for the day.",
        "To run free trials and promo codes: to start and end your access on the right dates, to stop a trial or code being used more than allowed, and to limit AI-tool use during a trial.",
        "To keep Custom Lessons private to the teacher they belong to, and to open a lesson for other teachers only when its owner chooses to share it.",
        "To handle payments: to send you to Maya's payment page, check with Maya that your payment went through and the amount is right, turn on your plan for the right dates, and email you shortly before your pass ends, and on the day it ends, so you can renew if you want to.",
        "To keep Sentenco safe: to review reports, remove content, and suspend accounts that break our rules, and to apply blocks and message requests.",
        "To suggest teachers you may know: we compare age groups, areas of expertise, school, and connections in common, and show you a few teachers you could follow or connect with. You can hide any suggestion.",
        "To show your network: your follower, following, and connection counts, and the \"Following\" label on posts from teachers you follow.",
        "To improve Sentenco, for example caching common results so they're faster and cheaper for everyone.",
      ],
    },
    {
      heading: "3. Who we share information with",
      body: [
        "We don't sell your personal information. We share it only with the service providers Sentenco runs on:",
        "Supabase, for authentication, our database, and file storage. Account emails, such as sign-in confirmation and password reset, are sent through this service.",
        "Vercel, which hosts the Sentenco website and the server code that connects to the AI service and to Maya.",
        "Cloudflare, which manages our domain and forwards emails sent to our support address, and Google, whose Gmail receives that support mail. Anything you email to us is handled by these providers.",
        "Anthropic, whose Claude models power Sentenco's features that use AI, meaning the text you submit to those features is sent to Anthropic for processing.",
        "Maya (Maya Philippines), our payment processor. You pay on Maya's own page, and Maya handles your card, e-wallet, or bank details directly. We send Maya your email address, the pass you chose, its price, and a payment reference number, and Maya tells us whether the payment went through. No payments are taken during the free trial.",
        "Resend, which sends emails from Sentenco, such as the reminder before your pass ends. It receives your email address and the content of the email.",
        "Other teachers can see what you choose to make visible in the Community, such as your name, photo, cover photo, badge, age, years of teaching, age groups, areas of expertise, school or company name, and posts. Other teachers can see how many followers, accounts followed, and connections you have, but not who they are. Only you can see your own lists. A Custom Lesson you share in a Homeroom post can be opened by teachers who can see that post, and a Custom Lesson you share in a chat can be opened by the people in that chat.",
        "We may also disclose information if required by law.",
      ],
    },
    {
      heading: "4. Where your data is processed",
      body: [
        "Our service providers may process and store data outside the Philippines. By using Sentenco, you consent to this transfer, which is necessary to provide the service.",
      ],
    },
    {
      heading: "5. Data retention",
      body: [
        "We keep your account information, messages, File Cabinet uploads, saved teaching tools, Custom Lesson requests, and trial and promo code records for as long as your account is active. If you delete your account, we'll delete or anonymize your personal information within a reasonable period, except where we need to keep it for legal or legitimate business reasons, like unresolved payments.",
        "Payment records are kept for as long as Philippine tax and accounting rules require, even after you delete your account.",
        "Reports, and the copy of the reported text, are kept for as long as we need them to handle safety issues, even if the post is deleted or the account is closed. Your follows, connections, and blocks are deleted with your account.",
      ],
    },
    {
      heading: "6. Your rights",
      body: [
        "Under the Philippine Data Privacy Act of 2012, you have the right to access, correct, and request deletion of your personal information, to object to certain processing, and to file a complaint with the National Privacy Commission.",
        "You can update most of your information yourself from your profile, or email us to make a request.",
        "You can delete your account yourself: open your profile, tap the pencil, and choose Delete my account. We then remove your account, profile, posts, comments, messages, follows, connections, blocks, and saved posts right away. Reports are kept, without your name attached.",
      ],
    },
    {
      heading: "7. Cookies and local storage",
      body: [
        "Sentenco uses your browser's local storage and session storage to keep you signed in and to remember small things on your own device, like your display name, your translation languages, recent AI-tool lookups, Letter Board settings, medals earned in some lessons, notes you type in a Relay lesson during a session, and whether you have dismissed a notice. This stays in your browser and isn't sent to us. We don't use third-party advertising trackers.",
      ],
    },
    {
      heading: "8. Security",
      body: [
        "We use reasonable technical and organizational measures to protect your information. No system is perfectly secure, and we can't guarantee absolute security.",
      ],
    },
    {
      heading: "9. Changes to this policy",
      body: [
        "We may update this Privacy Policy from time to time. We'll post changes here with a new \"last updated\" date.",
      ],
    },
    {
      heading: "10. Contact",
      body: [
        "Questions about this Privacy Policy, or requests about your data, can be sent to " + SUPPORT_EMAIL + ".",
      ],
    },
  ],
};

export const REFUND_CONTENT = {
  title: "Refund & Cancellation Policy",
  intro:
    "This policy covers how payments, renewals, and refunds work for Sentenco Pro and Pro+ passes.",
  sections: [
    {
      heading: "1. How passes work",
      body: [
        "A pass is a one-time payment for 1 month (30 days) or 1 year (365 days) of Pro or Pro+. It starts as soon as Maya confirms your payment. If you already have a pass of the same plan, the new one starts when that one ends.",
        "We don't save your card and we never charge you automatically. Nothing renews unless you choose to pay again.",
      ],
    },
    {
      heading: "2. Renewing or stopping",
      body: [
        "There's nothing to cancel. To keep your plan, buy another pass on the Subscription page. We email you a few days before your pass ends, and on the day it ends, as a reminder.",
        "If you don't renew, your account moves to the Free plan when your pass ends. Your account, posts, and saved work stay. Features that need Pro or Pro+ lock again until you buy a new pass.",
        "Stopping early doesn't give back the unused days of a pass, except as described below.",
      ],
    },
    {
      heading: "3. Refunds",
      body: [
        "Because Pro and Pro+ unlock digital lessons and tools right away, we generally don't refund a pass once it has started and been used.",
        "We will make it right, including a full refund where appropriate, if you were charged in error, charged twice for the same pass, paid but your plan didn't turn on and we couldn't fix it, or a problem on our side kept you from using what you paid for.",
        "Refunds go back through Maya to the way you paid. Depending on your bank or e-wallet, it can take several business days to show. When a pass is refunded, the access it gave ends.",
      ],
    },
    {
      heading: "4. Price changes",
      body: [
        "If you bought a pass at our Early adopter price, you can keep buying passes at that price for as long as you renew before your current pass ends. If your pass ends and you don't renew, the price at the time you come back applies.",
        "A price change never affects a pass you have already paid for. If we change prices, we'll show the new price on the Subscription page before you pay.",
      ],
    },
    {
      heading: "5. Free trials and promo codes",
      body: [
        "Free trials and promo codes are free, so there is nothing to refund. When one ends, you are not charged and your account returns to the Free plan unless you have a paid pass.",
      ],
    },
    {
      heading: "6. How to request a refund",
      body: ["Email " + SUPPORT_EMAIL + " with your account email, the payment date and amount, and the reason for your request. We aim to respond within a few business days."],
    },
  ],
};
