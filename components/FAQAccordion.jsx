'use client';
import { useState } from 'react';

export default function FAQAccordion({ faqs }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="faq-section section-gray">
            <div className="container">
                <div className="section-header">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, i) => (
                        <div key={i} className={`faq-item ${activeIndex === i ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => toggle(i)}>
                                <span>{faq.question}</span>
                                <span className="faq-toggle">+</span>
                            </div>
                            <div className="faq-answer" style={{ maxHeight: activeIndex === i ? '500px' : '0' }}>
                                <div className="faq-answer-inner">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
