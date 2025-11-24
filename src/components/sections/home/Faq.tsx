'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, HelpCircle, Shield, CreditCard, Users } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FAQ = {
  title: 'Frequently Asked Questions',
  subtitle: 'Get answers to common questions about our financial services',
  ctaText: 'Still have questions? Contact us',
  ctaHref: '/contact',
  faqs: [
    {
      id: 'security',
      icon: 'Shield',
      question: 'How secure is my financial data?',
      answer:
        'We use bank-level encryption and comply with SOC 2 Type II standards. Your data is protected with 256-bit SSL encryption and stored in secure, audited data centers. We never store your banking credentials - all connections are read-only through secure APIs.',
    },
    {
      id: 'fees',
      icon: 'CreditCard',
      question: 'What are your fees and pricing?',
      answer:
        'We offer transparent, competitive pricing with no hidden fees. Our basic plan starts at $9.99/month with premium features available. Transaction fees are clearly disclosed upfront, and we never charge surprise fees or penalties.',
    },
    {
      id: 'support',
      icon: 'Users',
      question: 'What kind of customer support do you provide?',
      answer:
        'Our dedicated support team is available 24/7 via chat, email, and phone. We also offer comprehensive documentation, video tutorials, and a community forum. Premium customers get priority support with dedicated account managers.',
    },
  ],
} as const;

type FaqProps = Partial<typeof DEFAULT_FAQ>;

export default function Faq(props: FaqProps) {
  const config = { ...DEFAULT_FAQ, ...props };
  const navigate = useSmartNavigation();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const getIcon = (iconName: string) => {
    const icons = {
      Shield: Shield,
      CreditCard: CreditCard,
      Users: Users,
      HelpCircle: HelpCircle,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || HelpCircle;
    return <IconComponent className="h-5 w-5" />;
  };

  const handleContactClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="faq" className="bg-background text-foreground py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {config.faqs.map((faq, idx) => {
            const isOpen = openItems.has(faq.id);

            return (
              <Card
                key={faq.id}
                className="bg-card text-card-foreground border-border hover:bg-accent/5 transition-colors duration-200"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/10 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 p-2 bg-primary/10 text-primary rounded-lg">
                        {getIcon(faq.icon)}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold">
                        <span data-editable={`faqs[${idx}].question`}>{faq.question}</span>
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200"
                    >
                      <div className="pl-16">
                        <p className="text-muted-foreground leading-relaxed">
                          <span data-editable={`faqs[${idx}].answer`}>{faq.answer}</span>
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-muted/50 text-muted-foreground rounded-2xl p-8 sm:p-10">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 text-primary rounded-full">
                <HelpCircle className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              Need More Help?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Our support team is here to help you with any questions about our financial services.
            </p>
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
