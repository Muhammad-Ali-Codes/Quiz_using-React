export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A database",
      "A backend framework",
      "A JavaScript library for building UI",
      "A programming language"
    ],
    correctAnswer: "A JavaScript library for building UI"
  },
  {
    id: 2,
    question: "Who developed React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    correctAnswer: "Facebook"
  },
  {
    id: 3,
    question: "What is JSX?",
    options: [
      "A CSS framework",
      "A syntax extension for JavaScript",
      "A database language",
      "A browser API"
    ],
    correctAnswer: "A syntax extension for JavaScript"
  },
  {
    id: 4,
    question: "Which hook is used to manage state?",
    options: ["useEffect", "useRef", "useState", "useMemo"],
    correctAnswer: "useState"
  },
  {
    id: 5,
    question: "What is a React component?",
    options: [
      "A reusable piece of UI",
      "A database table",
      "A server",
      "A CSS file"
    ],
    correctAnswer: "A reusable piece of UI"
  },
  {
    id: 6,
    question: "Which hook is used for side effects?",
    options: ["useState", "useEffect", "useContext", "useCallback"],
    correctAnswer: "useEffect"
  },
  {
    id: 7,
    question: "Props are used to:",
    options: [
      "Store data in component",
      "Pass data from parent to child",
      "Update DOM directly",
      "Handle routing"
    ],
    correctAnswer: "Pass data from parent to child"
  },
  {
    id: 8,
    question: "Can props be modified inside a component?",
    options: ["Yes", "No", "Sometimes", "Only in class components"],
    correctAnswer: "No"
  },
  {
    id: 9,
    question: "What is Virtual DOM?",
    options: [
      "A real DOM copy",
      "A database",
      "A lightweight copy of real DOM",
      "A browser feature"
    ],
    correctAnswer: "A lightweight copy of real DOM"
  },
  {
    id: 10,
    question: "Which method renders React to DOM?",
    options: [
      "renderApp()",
      "ReactDOM.render()",
      "mount()",
      "start()"
    ],
    correctAnswer: "ReactDOM.render()"
  },
  {
    id: 11,
    question: "useContext is used for:",
    options: [
      "Styling",
      "API calls",
      "Global state sharing",
      "Routing"
    ],
    correctAnswer: "Global state sharing"
  },
  {
    id: 12,
    question: "React Router is used for:",
    options: [
      "State management",
      "Navigation",
      "Styling",
      "API handling"
    ],
    correctAnswer: "Navigation"
  },
  {
    id: 13,
    question: "Which attribute is used instead of class in JSX?",
    options: ["class", "className", "css", "style"],
    correctAnswer: "className"
  },
  {
    id: 14,
    question: "What is a controlled component?",
    options: [
      "Component without state",
      "Form element controlled by React state",
      "Redux component",
      "Stateless component"
    ],
    correctAnswer: "Form element controlled by React state"
  },
  {
    id: 15,
    question: "useEffect with empty dependency array runs:",
    options: [
      "On every render",
      "Only once on mount",
      "On state change",
      "On unmount"
    ],
    correctAnswer: "Only once on mount"
  },
  {
    id: 16,
    question: "Why is key used in React lists?",
    options: [
      "Styling",
      "Routing",
      "Performance optimization",
      "State update"
    ],
    correctAnswer: "Performance optimization"
  },
  {
    id: 17,
    question: "Lifting state up means:",
    options: [
      "Deleting state",
      "Moving state to parent component",
      "Using Redux",
      "Resetting state"
    ],
    correctAnswer: "Moving state to parent component"
  },
  {
    id: 18,
    question: "Which hook is used to access DOM elements?",
    options: ["useState", "useEffect", "useRef", "useContext"],
    correctAnswer: "useRef"
  },
  {
    id: 19,
    question: "React Fragment is used to:",
    options: [
      "Handle API",
      "Wrap multiple elements without extra DOM",
      "Add styles",
      "Manage state"
    ],
    correctAnswer: "Wrap multiple elements without extra DOM"
  },
  {
    id: 20,
    question: "Which is NOT a React hook?",
    options: ["useState", "useEffect", "useClass", "useRef"],
    correctAnswer: "useClass"
  }

]
