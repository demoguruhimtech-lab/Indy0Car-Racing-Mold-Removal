import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  faqs: { question: string; answer: string }[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-navy-100 overflow-hidden transition-all duration-300 hover:border-teal-200"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left group"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-display font-semibold text-navy-900 group-hover:text-teal-700 transition-colors">
              {faq.question}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <p className="px-6 pb-4 text-navy-600 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
