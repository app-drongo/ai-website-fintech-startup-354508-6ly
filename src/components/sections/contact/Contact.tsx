'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const DEFAULT_CONTACT = {
  title: 'Get in Touch',
  subtitle:
    "Ready to transform your business finances? Let's discuss how our fintech solutions can help your small business thrive.",
  formTitle: 'Send us a message',
  formDescription: "Fill out the form below and we'll get back to you within 24 hours.",
  nameLabel: 'Full Name',
  namePlaceholder: 'Enter your full name',
  emailLabel: 'Email Address',
  emailPlaceholder: 'Enter your business email',
  phoneLabel: 'Phone Number',
  phonePlaceholder: 'Enter your phone number',
  subjectLabel: 'Subject',
  subjectPlaceholder: 'Select a subject',
  messageLabel: 'Message',
  messagePlaceholder: 'Tell us about your business needs and how we can help...',
  submitText: 'Send Message',
  successMessage: "Message sent successfully! We'll get back to you within 24 hours.",
  contactInfo: [
    {
      icon: 'Mail',
      title: 'Email Us',
      value: 'hello@fintech.com',
      description: "We'll respond within 24 hours",
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: 'MapPin',
      title: 'Visit Us',
      value: '123 Financial District, NY 10004',
      description: 'Schedule an appointment',
    },
  ],
  subjectOptions: [
    'General Inquiry',
    'Product Demo',
    'Partnership Opportunity',
    'Technical Support',
    'Billing Question',
  ],
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after success message
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail':
        return <Mail className="h-6 w-6" />;
      case 'Phone':
        return <Phone className="h-6 w-6" />;
      case 'MapPin':
        return <MapPin className="h-6 w-6" />;
      default:
        return <Mail className="h-6 w-6" />;
    }
  };

  return (
    <section id="contact" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            <span data-editable="title">{config.title}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <Card className="bg-card text-card-foreground shadow-lg border-border/50">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold">
                <span data-editable="formTitle">{config.formTitle}</span>
              </CardTitle>
              <p className="text-muted-foreground">
                <span data-editable="formDescription">{config.formDescription}</span>
              </p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground">
                    <span data-editable="successMessage">{config.successMessage}</span>
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-form-id="69248a31bf9881884ee4a967"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        <span data-editable="nameLabel">{config.nameLabel}</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={config.namePlaceholder}
                        value={formData.name}
                        onChange={e => handleInputChange('name', e.target.value)}
                        required
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        <span data-editable="emailLabel">{config.emailLabel}</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={config.emailPlaceholder}
                        value={formData.email}
                        onChange={e => handleInputChange('email', e.target.value)}
                        required
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        <span data-editable="phoneLabel">{config.phoneLabel}</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={config.phonePlaceholder}
                        value={formData.phone}
                        onChange={e => handleInputChange('phone', e.target.value)}
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        <span data-editable="subjectLabel">{config.subjectLabel}</span>
                      </Label>
                      <Select
                        value={formData.subject}
                        onValueChange={value => handleInputChange('subject', value)}
                      >
                        <SelectTrigger className="bg-background border-border focus:border-primary">
                          <SelectValue placeholder={config.subjectPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {config.subjectOptions.map((option, idx) => (
                            <SelectItem key={idx} value={option}>
                              <span data-editable={`subjectOptions[${idx}]`}>{option}</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      <span data-editable="messageLabel">{config.messageLabel}</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={config.messagePlaceholder}
                      value={formData.message}
                      onChange={e => handleInputChange('message', e.target.value)}
                      required
                      rows={5}
                      className="bg-background border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 h-12"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        <span data-editable="submitText">{config.submitText}</span>
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {config.contactInfo.map((info, idx) => (
              <Card
                key={idx}
                className="bg-muted/50 text-muted-foreground border-border/50 hover:bg-muted/70 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-xl shadow-sm">
                      {getIcon(info.icon)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2 text-lg">
                        <span data-editable={`contactInfo[${idx}].title`}>{info.title}</span>
                      </h3>
                      <p className="text-lg font-medium text-foreground mb-1">
                        <span data-editable={`contactInfo[${idx}].value`}>{info.value}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span data-editable={`contactInfo[${idx}].description`}>
                          {info.description}
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
