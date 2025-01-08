import { Plus, X } from "lucide-react";
import { useState } from "react";

export default function FaqItem({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2">
          {/* FAQ Question Button */}
          <button
            className="w-full bg-[#2d2c2c] hover:bg-[#444444] p-6 text-left flex justify-between items-center"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-lg md:text-2xl font-semibold">{faq.question}</span>
            {openIndex === index ? (
              <X className="h-6 w-6" />
            ) : (
              <Plus className="h-6 w-6" />
            )}
          </button>

          {/* FAQ Answer (shown when expanded) */}
          {openIndex === index && (
            <div className="bg-[#2d2c2c] mt-px p-6 text-lg font-semibold md:text-xl">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
