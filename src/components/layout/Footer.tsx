'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  // Company Information
  companyName: 'FinFlow',
  tagline: 'Empowering small businesses with smart financial technology solutions',

  // Company Links
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],

  // Legal Links
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security', href: '/security' },
  ],

  // Social Links
  socialLinks: [
    { platform: 'Facebook', href: 'https://facebook.com/finflow', icon: 'facebook' },
    { platform: 'Twitter', href: 'https://twitter.com/finflow', icon: 'twitter' },
    { platform: 'LinkedIn', href: 'https://linkedin.com/company/finflow', icon: 'linkedin' },
  ],

  // Contact Information
  contactEmail: 'hello@finflow.com',
  contactPhone: '+1 (555) 123-4567',
  contactAddress: '123 Financial District, San Francisco, CA 94105',

  // Legal Text
  legalText:
    '© 2024 FinFlow Inc. All rights reserved. FinFlow is a registered trademark. FDIC insured up to $250,000.',

  // Certifications
  certifications: ['SOC 2 Type II Certified', 'PCI DSS Compliant', 'Bank-level Security'],

  // Newsletter
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest fintech insights and product updates',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook':
        return <Facebook className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      default:
        return <Mail className="h-5 w-5" />;
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
  };

  return (
    <section id="footer" className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-primary">
                  <span data-editable="companyName">{config.companyName}</span>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span data-editable="tagline">{config.tagline}</span>
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span data-editable="contactEmail">{config.contactEmail}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span data-editable="contactPhone">{config.contactPhone}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span data-editable="contactAddress">{config.contactAddress}</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {config.companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-sm text-muted-foreground hover:text-primary justify-start"
                      onClick={() => navigate(link.href)}
                      data-editable-href={`companyLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {config.legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-sm text-muted-foreground hover:text-primary justify-start"
                      onClick={() => navigate(link.href)}
                      data-editable-href={`legalLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="space-y-3"
                data-form-id="69248a32bf9881884ee4a96a"
              >
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  data-editable="newsletterPlaceholder"
                />
                <Button type="submit" size="sm" className="w-full">
                  <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
                </Button>
              </form>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Legal Text */}
            <div className="text-sm text-muted-foreground">
              <span data-editable="legalText">{config.legalText}</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {config.socialLinks.map((social, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0 text-muted-foreground hover:text-primary hover:bg-accent"
                  onClick={() => window.open(social.href, '_blank')}
                  data-editable-href={`socialLinks[${idx}].href`}
                  data-href={social.href}
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.icon)}
                </Button>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {config.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                >
                  <span data-editable={`certifications[${idx}]`}>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
