import { useState } from "react";
import "./FAQ.css";
import { faqs } from "../../../data/faq";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq">

      <div className="faq-header">
        <span className="faq-tag">❓ FAQ</span>

        <h2>Frequently Asked Questions</h2>

        <p>
          Find answers to the most common questions about CropBridge.
        </p>
      </div>

      <div className="faq-container">

        {faqs.map((faq) => (

          <div className="faq-item" key={faq.id}>

            <div
              className="faq-question"
              onClick={() => toggleFAQ(faq.id)}
            >

              <h3>{faq.question}</h3>

              {activeId === faq.id ? <FaMinus /> : <FaPlus />}

            </div>

            {activeId === faq.id && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}

          </div>

        ))}

      </div>

    </section>
  );
};

export default FAQ;