'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  brandName: 'FinTech Pro',
  brandTagline: 'Smart Financial Solutions',
  navItems: [
    { label: 'Home', href: '#hero' },
    { label: 'Features', href: '#features' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaText: 'Get Started',
  ctaHref: '/contact',
  showBrandIcon: true,
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
    setIsMobileMenuOpen(false);
  };

  return (
    <section
      id="navigation"
      className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            {config.showBrandIcon && (
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <TrendingUp className="h-5 w-5" />
              </div>
            )}
            <div className="flex flex-col">
              <span
                className="text-lg font-bold text-foreground cursor-pointer hover:text-primary transition-colors"
                onClick={() => handleNavClick('#hero')}
                data-editable="brandName"
              >
                {config.brandName}
              </span>
              <span
                className="text-xs text-muted-foreground hidden sm:block"
                data-editable="brandTagline"
              >
                {config.brandTagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {config.navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-editable-href={`navItems[${idx}].href`}
                data-href={item.href}
              >
                <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={handleCTAClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground hover:text-primary hover:bg-accent"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card text-card-foreground w-80">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <div className="flex items-center space-x-3">
                    {config.showBrandIcon && (
                      <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span
                        className="text-lg font-bold text-card-foreground"
                        data-editable="brandName"
                      >
                        {config.brandName}
                      </span>
                      <span className="text-xs text-muted-foreground" data-editable="brandTagline">
                        {config.brandTagline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4 py-6 flex-1">
                  {config.navItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-lg font-medium text-card-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-accent"
                      data-editable-href={`navItems[${idx}].href`}
                      data-href={item.href}
                    >
                      <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                    </button>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="pt-6 border-t border-border">
                  <Button
                    onClick={handleCTAClick}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    data-editable-href="ctaHref"
                    data-href={config.ctaHref}
                  >
                    <span data-editable="ctaText">{config.ctaText}</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
}
