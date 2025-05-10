import React, { useState } from 'react';
import styles from './Chatbot.module.css';

const faq = [
  { question: "How do I sell my license?", answer: "Just upload your license details and get instant valuation." },
  { question: "Is the payment secure?", answer: "Yes, all payments are 100% secure and encrypted." },
  { question: "How long does it take to get paid?", answer: "Most users receive payment within 24-48 hours." },
];

const Chatbot = () => {
  const [chat, setChat] = useState([]);

  const handleQuestionClick = (item) => {
    setChat(prev => [...prev, { type: 'user', text: item.question }, { type: 'bot', text: item.answer }]);
  };

  return (
    <div className={styles.chatbox}>
      <h3 className={styles.title}>Ask Our AI</h3>
      
      <div className={styles.chatWindow}>
        {chat.map((msg, i) => (
          <div key={i} className={msg.type === 'user' ? styles.userMsg : styles.botMsg}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        {faq.map((item, i) => (
          <button key={i} onClick={() => handleQuestionClick(item)} className={styles.questionBtn}>
            {item.question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chatbot;
