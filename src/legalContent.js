import { SUPPORT_EMAIL } from "./siteConfig.js";
// Content for the legal pages (src/LegalPage.jsx). Kept as structured data,
// separate from layout, so the three documents can share one page shell.
// Drafted as a solid starting point grounded in what Sentenco actually does —
// not a substitute for review by a Philippine lawyer before Sentenco accepts
// real payments.

export const LEGAL_UPDATED = "August 22, 2026";

export const LEGAL_DOCS = [
  { key: "terms", label: "Terms of Service" },
  { key: "privacy", label: "Privacy Policy" },
  { key: "refund", label: "Refund & Cancellation" },
];

export const TERMS_CONTENT = {
  title: "Terms of Service",
  intro:
    "These Terms govern your use of Sentenco, a platform for English teachers offering lesson content, a teacher community, and AI-powered tools. By creating an account or using Sentenco, you agree to these Terms.",
  sections: [
    {
      heading: "1. Who can use Sentenco",
      body: [
        "Sentenco is built for English teachers and prospective teachers. You must be at least 18 years old, or the age of legal majority where you live, to create an account.",
        "You're responsible for keeping your account credentials secure and for all activity under your account. Tell us right away if you think someone else has access to it.",
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
      heading: "3. Billing and subscriptions",
      body: [
        "Paid plans are billed on a recurring basis through our payment processor. By subscribing, you authorize us to charge your chosen payment method each billing period until you cancel.",
        "Prices shown as \"Early Adopter Price\" reflect our current introductory rate. If you subscribe at that rate, it stays your rate for as long as your subscription stays active without a gap — we're not going to raise the price out from under an existing subscriber. New subscribers after early access ends may see a different price.",
        "See our Refund & Cancellation Policy for how billing periods, cancellations, and refunds work.",
      ],
    },
    {
      heading: "4. The Homeroom community",
      body: [
        "Homeroom and the Community feed let you post, comment, and interact with other teachers. You keep ownership of what you post, but you give Sentenco permission to store, display, and distribute it within the app so the community feature works.",
        "Don't post anything illegal, harassing, hateful, sexually explicit, or that infringes someone else's rights. Don't spam, impersonate others, or share a student's personal information.",
        "We can remove content or suspend accounts that break these rules, at our discretion, with or without notice depending on severity.",
      ],
    },
    {
      heading: "5. AI-powered tools",
      body: [
        "The Dictionary, Grammar Checker, and Translator are AI-generated and can be wrong, incomplete, or miss context. Review their output before using it with students. They're a teaching aid, not a substitute for your own judgment.",
        "Don't use these tools to generate content that violates section 4's rules, or to attempt to extract, abuse, or overload the underlying AI service.",
      ],
    },
    {
      heading: "6. Lesson content and intellectual property",
      body: [
        "Curriculum, articles, lesson plans, and other content Sentenco provides belong to Sentenco or our licensors. You may use them for your own teaching, including with your students. You may not resell, redistribute, or republish them as your own product.",
        "Sentenco's name, logo, and branding are ours. Don't use them without permission.",
      ],
    },
    {
      heading: "7. Termination",
      body: [
        "You can stop using Sentenco and delete your account at any time. We can suspend or terminate accounts that violate these Terms, don't pay for a paid plan, or for other legitimate business reasons, with notice where practical.",
      ],
    },
    {
      heading: "8. Disclaimers and limitation of liability",
      body: [
        "Sentenco is provided \"as is.\" We don't guarantee it will be uninterrupted, error-free, or that AI-generated content will always be accurate. To the extent allowed by law, Sentenco isn't liable for indirect, incidental, or consequential damages arising from your use of the app.",
        "Nothing here limits liability that can't be limited under Philippine law.",
      ],
    },
    {
      heading: "9. Changes to these Terms",
      body: [
        "We may update these Terms as Sentenco grows. We'll post the updated version here with a new \"last updated\" date. Continuing to use Sentenco after changes take effect means you accept them.",
      ],
    },
    {
      heading: "10. Governing law",
      body: ["These Terms are governed by the laws of the Republic of the Philippines."],
    },
    {
      heading: "11. Contact",
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
        "Account information: your email address, and any name, country, years-teaching, and profile photo you choose to add.",
        "Content you create: community posts, comments, likes, and any images or files you upload to the Community feed.",
        "Private messages: the content of any 1:1 messages you send through Convo. These aren't end-to-end encrypted — the other participant can read them, and so can Sentenco, for support, moderation, or legal purposes.",
        "File Cabinet uploads: lesson materials and credentials you choose to store, including anything you mark private.",
        "Mentor program information: if you apply to become a mentor, the details in your application, like your experience, specialty, and any documents you attach.",
        "Usage information: your subscription plan, and activity we use to unlock features, like your post/comment/like counts for the day.",
        "AI tool inputs: words, sentences, or passages you submit to the Dictionary, Grammar Checker, or Translator, so we can send them to our AI provider and return a result.",
      ],
    },
    {
      heading: "2. How we use your information",
      body: [
        "To provide the service: run your dashboard, the Homeroom community, curriculum access, and the AI tools.",
        "To personalize your experience, like showing your name and badge on your posts, and unlocking Teacher's Desk once you're active for the day.",
        "To process payments once billing is live, through our payment processor.",
        "To improve Sentenco, for example caching common dictionary lookups so they're faster and cheaper for everyone.",
      ],
    },
    {
      heading: "3. Who we share information with",
      body: [
        "We don't sell your personal information. We share it only with the service providers Sentenco runs on:",
        "Supabase, for authentication, our database, and file storage.",
        "Anthropic, whose Claude models power the Dictionary, Grammar Checker, and Translator, meaning the text you submit to those tools is sent to Anthropic for processing.",
        "PayMongo, our payment processor, for billing once subscriptions go live. PayMongo handles your payment details directly, Sentenco does not store your card or e-wallet information.",
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
        "We keep your account information, messages, and File Cabinet uploads for as long as your account is active. If you delete your account, we'll delete or anonymize your personal information within a reasonable period, except where we need to keep it for legal or legitimate business reasons, like unresolved billing.",
      ],
    },
    {
      heading: "6. Your rights",
      body: [
        "Under the Philippine Data Privacy Act of 2012, you have the right to access, correct, and request deletion of your personal information, to object to certain processing, and to file a complaint with the National Privacy Commission.",
        "You can update most of your information yourself from Profile settings, or email us to make a request.",
      ],
    },
    {
      heading: "7. Cookies and local storage",
      body: [
        "Sentenco uses your browser's local storage to keep you signed in and to remember small preferences, like your display name, translation language pair, and recent AI-tool lookups. We don't use third-party advertising trackers.",
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
    "This policy covers how billing, cancellation, and refunds work for Sentenco Pro and Pro+ subscriptions.",
  sections: [
    {
      heading: "1. Billing cycle",
      body: [
        "Paid plans are billed monthly and renew automatically on the same date each month, until you cancel.",
      ],
    },
    {
      heading: "2. Cancelling your subscription",
      body: [
        "You can cancel anytime from your account settings. Cancelling stops future renewals, you'll keep your current plan's access until the end of the billing period you already paid for, then your account moves to the Free plan.",
        "We don't prorate or refund the unused portion of a billing period when you cancel partway through, except as described below.",
      ],
    },
    {
      heading: "3. Refunds",
      body: [
        "Because Pro and Pro+ unlock digital content and AI tools immediately, we generally don't offer refunds once a billing period has started and the plan has been used.",
        "If you were charged in error, charged twice for the same period, or a technical issue on our end prevented you from accessing what you paid for, contact us and we'll make it right, including a refund where appropriate.",
      ],
    },
    {
      heading: "4. Price changes",
      body: [
        "If you subscribe at our Early Adopter Price, that rate stays yours for as long as your subscription remains active without a gap in coverage. Price increases apply to new subscribers going forward, not to your existing subscription.",
        "If we ever need to change the price for existing subscribers, we'll give advance notice before it takes effect on your next billing cycle.",
      ],
    },
    {
      heading: "5. How to request a refund",
      body: ["Email " + SUPPORT_EMAIL + " with your account email and the reason for your request. We aim to respond within a few business days."],
    },
  ],
};
