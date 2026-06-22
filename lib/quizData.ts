export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
}

export interface Level {
  code: string;
  name: string;
  description: string;
  suggestion: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Choose the correct sentence:",
    options: [
      "She go to school every day.",
      "She goes to school every day.",
      "She going to school every day.",
      "She goed to school every day.",
    ],
    correctIndex: 1,
  },
  {
    id: 2,
    text: "What is the opposite of 'happy'?",
    options: ["Glad", "Excited", "Sad", "Tired"],
    correctIndex: 2,
  },
  {
    id: 3,
    text: "Fill in the blank: 'I _____ in Cairo for five years.'",
    options: ["live", "lived", "have lived", "was living"],
    correctIndex: 2,
  },
  {
    id: 4,
    text: "Which word means 'very tired'?",
    options: ["Exhausted", "Bored", "Confused", "Anxious"],
    correctIndex: 0,
  },
  {
    id: 5,
    text: "Choose the correct question form:",
    options: [
      "Where you are going?",
      "Where are you going?",
      "Where do you going?",
      "Where going are you?",
    ],
    correctIndex: 1,
  },
  {
    id: 6,
    text: "What does 'negotiate' mean?",
    options: [
      "To argue loudly",
      "To discuss to reach an agreement",
      "To refuse an offer",
      "To ignore a problem",
    ],
    correctIndex: 1,
  },
  {
    id: 7,
    text: "Choose the sentence that is grammatically correct:",
    options: [
      "If I would have more time, I would travel.",
      "If I have more time, I would travel.",
      "If I had more time, I would travel.",
      "If I has more time, I would travel.",
    ],
    correctIndex: 2,
  },
  {
    id: 8,
    text: "Read the sentence and answer: 'Despite the heavy rain, the match continued.' What does 'despite' mean here?",
    options: ["Because of", "After", "Even though there was", "Unless"],
    correctIndex: 2,
  },
  {
    id: 9,
    text: "Which option correctly uses a relative clause?",
    options: [
      "The book who I read was amazing.",
      "The book which I read was amazing.",
      "The book what I read was amazing.",
      "The book whom I read was amazing.",
    ],
    correctIndex: 1,
  },
  {
    id: 10,
    text: "What is the most appropriate word? 'The professor's lecture was _____ — full of nuance and rarely heard perspectives.'",
    options: ["nice", "good", "enlightening", "okay"],
    correctIndex: 2,
  },
];

const LEVELS: Level[] = [
  {
    code: "A1",
    name: "Beginner",
    description:
      "You're just getting started with English. That's a great place to begin!",
    suggestion:
      "We'll build your foundation step by step — alphabet, greetings, and basic vocabulary.",
  },
  {
    code: "A2",
    name: "Elementary",
    description:
      "You can handle simple conversations and understand basic phrases.",
    suggestion:
      "You're ready to expand your vocabulary and start forming more complete sentences.",
  },
  {
    code: "B1",
    name: "Intermediate",
    description:
      "You can communicate in familiar situations and understand the main points of clear speech.",
    suggestion:
      "You're ready for conversational lessons and more complex grammar structures.",
  },
  {
    code: "B2",
    name: "Upper Intermediate",
    description:
      "You can understand the main ideas of complex texts and interact fluently.",
    suggestion:
      "IELTS/TOEFL prep or Business English are excellent next steps for you.",
  },
  {
    code: "C1",
    name: "Advanced",
    description:
      "You express yourself fluently and spontaneously without much searching for words.",
    suggestion:
      "We'll refine your writing, sharpen your academic or professional English, and polish your style.",
  },
  {
    code: "C2",
    name: "Proficient",
    description:
      "You have near-native command of English — nuanced, precise, and natural.",
    suggestion:
      "We can focus on advanced writing, debate, or specialised English for your field.",
  },
];

export function getLevel(score: number): Level {
  if (score <= 1) return LEVELS[0];
  if (score <= 3) return LEVELS[1];
  if (score <= 5) return LEVELS[2];
  if (score <= 7) return LEVELS[3];
  if (score <= 9) return LEVELS[4];
  return LEVELS[5];
}
