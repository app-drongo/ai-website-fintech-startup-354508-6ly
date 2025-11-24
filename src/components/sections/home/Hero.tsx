'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, TrendingUp, Zap } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Smart Financial Solutions for Growing Businesses',
  subtitle: 'Streamline your finances, accelerate your growth',
  description:
    'Empower your small business with intelligent financial technology. From automated bookkeeping to real-time analytics, we provide the tools you need to make informed decisions and drive sustainable growth.',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  imageUrl:
    'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww',
  imageAlt: 'Financial dashboard showing business analytics and growth metrics',
  trustBadge: 'Trusted by 10,000+ businesses',
  features: [
    {
      icon: 'Shield',
      title: 'Bank-Grade Security',
      description: 'Your financial data is protected with enterprise-level encryption',
    },
    {
      icon: 'TrendingUp',
      title: 'Real-Time Analytics',
      description: 'Make data-driven decisions with live financial insights',
    },
    {
      icon: 'Zap',
      title: 'Automated Workflows',
      description: 'Save hours with intelligent automation and smart categorization',
    },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="h-6 w-6" />;
      case 'TrendingUp':
        return <TrendingUp className="h-6 w-6" />;
      case 'Zap':
        return <Zap className="h-6 w-6" />;
      default:
        return <Shield className="h-6 w-6" />;
    }
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
              >
                <span data-editable="trustBadge">{config.trustBadge}</span>
              </Badge>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  <span data-editable="title">{config.title}</span>
                </h1>

                <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                  <span data-editable="subtitle">{config.subtitle}</span>
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  <span data-editable="description">{config.description}</span>
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-3 pt-8">
              {config.features.map((feature, idx) => (
                <Card
                  key={idx}
                  className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-4 space-y-2">
                    <div className="text-primary">{getIcon(feature.icon)}</div>
                    <h3 className="font-semibold text-sm">
                      <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span data-editable={`features[${idx}].description`}>
                        {feature.description}
                      </span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card">
              <Image
                src={config.imageUrl}
                alt={config.imageAlt}
                data-editable-src="imageUrl"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10 pointer-events-none" />

              {/* Floating Elements */}
              <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Live Data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
