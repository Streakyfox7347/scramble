
import React, { useState } from 'react';
import PageContainer from '@/components/layout/PageContainer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Scramble?",
      answer: "Scramble is a community platform connecting golfers with golf courses. Our mission is to create a network that opens doors to other courses and provides discounted green fees through member connections."
    },
    {
      question: "How do I join Scramble?",
      answer: "To join Scramble, simply click the 'Join Now' button in the navigation menu or visit our signup page. Complete the registration form with your details, and you'll be part of our golfing community."
    },
    {
      question: "What benefits do members receive?",
      answer: "Members receive access to discounted green fees at partner courses, invitations to exclusive events, the ability to connect with other golfers, and access to member-only resources and content."
    },
    {
      question: "How do I find courses in my area?",
      answer: "Visit our Courses page where you can search for courses by name or location. You can also view courses on our interactive map to find options near you."
    },
    {
      question: "Can I add my local course to the directory?",
      answer: "Yes! We encourage members to help grow our community. You can add a course by visiting the 'Add Course' page and filling out the required information."
    },
    {
      question: "How do I connect with other golfers?",
      answer: "Visit our Members page to browse profiles of other golfers. You can filter members by location, handicap, or other criteria to find potential playing partners."
    },
    {
      question: "Are there any membership fees?",
      answer: "Scramble offers both free and premium membership tiers. Basic membership is free, while premium members enjoy additional benefits for a monthly or annual fee."
    }
  ];

  return (
    <PageContainer>
      <section className="py-16 bg-scramble-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/80 mb-8">
              Find answers to commonly asked questions about Scramble
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-scramble-dark-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-700">
                  <AccordionTrigger className="text-white hover:text-scramble-mint font-medium py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 text-center">
              <p className="text-white/80 mb-4">
                Can't find the answer you're looking for?
              </p>
              <a href="/support" className="text-scramble-mint hover:underline">
                Visit our Support page for additional help
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default FAQ;
