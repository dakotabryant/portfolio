import React, { Component } from 'react';
import contactQuestions, {
  developerQuestions,
  mentorQuestions,
} from '../content/contactForm';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      questions: [...contactQuestions],
      currentQuestionIndex: 0,
    };
  }
  render() {
    const { questions, currentQuestionIndex } = this.state;
    return (
      <div>
        {questions.map(question => {
          return question.question;
        })}
      </div>
    );
  }
}

export default ContactForm;
