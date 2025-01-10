import { faqs } from "../data";
import FAQItem from "./FaqItem";


export default function FAQ() {
  return (
    <div className="bg-black text-white py-16">
      <h2 className="text-3xl md:text-3xl font-bold mb-8">
        Frequently Asked Questions
      </h2>

      {/* FAQ */}
        <FAQItem faqs={faqs} />
    </div>
  );
}
