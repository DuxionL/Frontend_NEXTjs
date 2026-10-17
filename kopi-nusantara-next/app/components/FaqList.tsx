"use client";

import { useState } from "react";

type FaqData = {
  question: string;
  answer: string;
};

export default function FaqList({ items }: { items: FaqData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="faq-item" key={item.question}>
            <div
              className={`faq-question${isOpen ? " active" : ""}`}
              onClick={() => toggle(index)}
            >
              {item.question}
              <span className="faq-icon">+</span>
            </div>
            <div className={`faq-answer${isOpen ? " open" : ""}`}>
              <div className="faq-answer-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}