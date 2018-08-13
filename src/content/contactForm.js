export default [
  {
    question: 'What do they call you?',
    subtext: '(Looking for your name here...)',
    type: 'input',
    name: 'name',
  },
  {
    question: "What's your email?",
    type: 'input',
    name: 'email',
    placeholder: 'kungfury@gmail.com',
  },
  {
    question:
      'Are you looking for someone to knock out your projects, or are you for a programming mentor?',
    options: ['Badass Developer', 'Badass Mentor'],
    type: 'radio',
    name: 'job-preference',
  },
];

export const developerQuestions = [
  {
    question:
      'Okay great, briefly tell me about your project you want to get done. Any details you can provide here are helpful, but we can always cirlce up on the finer details.',
    type: 'text-area',
    name: 'project-description',
    path: 'developer',
  },
  {
    question:
      'How quickly are you wanting this done? Are we talking DEFCON 1 here?',
    type: 'input',
    path: 'developer',
  },
  {
    question:
      "Finally, what's your estimated budget for the project? It's okay if you don't have one, just put $1 million as a placeholder. Trust me.",
    type: 'input',
    path: 'developer',
  },
];

export const mentorQuestions = [
  {
    question:
      'Okay great! Tell me briefly about your goals. Are you looking to create an app? Looking to land a job as a developer? Just looking for an awesome hobby that makes you look super smart?',
    type: 'text-area',
    path: 'mentor',
  },
  {
    question:
      "Cool. Got any sort of timeline in mind? Let's be real, this is a challenging but rewarding thing to undertake. It takes time to nourish, so keep that in mind.",
    type: 'input',
    path: 'mentor',
  },
  {
    question:
      'Last question. If we decide to partner, are you willing to put your all in to learning this craft? As I mentioned before, this is tough. No teaching will ever be the secret sauce unless you put forth the effort to get it done. Are you willing to do that?',
    type: 'checkbox',
    label: "Yup, I'm in.",
    path: 'mentor',
  },
];
