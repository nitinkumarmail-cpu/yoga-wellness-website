"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
const faqs = [
  [
    "Do I need previous yoga experience?",
    "No. Sessions begin with your current comfort, experience and goals. Beginners are warmly welcomed.",
  ],
  [
    "How long is a session?",
    "Most sessions are planned for 45–60 minutes. The final length is agreed during your consultation.",
  ],
  [
    "What should I wear and bring?",
    "Choose comfortable clothing that lets you move easily. We’ll confirm any simple equipment before you begin.",
  ],
  [
    "Are online sessions available?",
    "Yes. Online sessions can be shaped around your space and available equipment.",
  ],
  [
    "How do booking and cancellation work?",
    "Send an enquiry to discuss availability. Final booking and cancellation terms will be confirmed before payment or scheduling.",
  ],
];
export function FAQ() {
  return (
    <Accordion.Root type="single" collapsible className="faq">
      {faqs.map(([q, a], i) => (
        <Accordion.Item value={`${i}`} key={q}>
          <Accordion.Header>
            <Accordion.Trigger>
              {q}
              <ChevronDown />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>{a}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
