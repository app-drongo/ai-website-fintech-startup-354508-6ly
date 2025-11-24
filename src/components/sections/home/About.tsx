'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Shield, Users, ArrowRight, Target, Award, Zap } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_ABOUT = {
  title: 'Revolutionizing Finance Through Innovation',
  subtitle:
    "We're building the future of financial technology with cutting-edge solutions that empower businesses and individuals to achieve their financial goals.",
  description:
    'Founded by industry veterans with decades of experience in fintech, we combine deep financial expertise with modern technology to deliver solutions that are both powerful and accessible.',
  ctaText: 'Learn More About Us',
  ctaHref: '/company',
  secondaryCtaText: 'View Our Story',
  secondaryCtaHref: '/story',
  stats: [
    { label: 'Years of Experience', value: '15+', icon: 'award' },
    { label: 'Clients Served', value: '10K+', icon: 'users' },
    { label: 'Transactions Processed', value: '$2B+', icon: 'trending' },
  ],
  values: [
    {
      title: 'Security First',
      description:
        'Bank-grade security and compliance standards protect every transaction and data point.',
      icon: 'shield',
    },
    {
      title: 'Innovation Driven',
      description: 'We leverage cutting-edge technology to solve complex financial challenges.',
      icon: 'zap',
    },
    {
      title: 'Customer Focused',
      description: 'Every decision we make is guided by our commitment to customer success.',
      icon: 'target',
    },
  ],
  badge: 'About Our Company',
} as const;

type AboutProps = Partial<typeof DEFAULT_ABOUT>;

export default function About(props: AboutProps) {
  const config = { ...DEFAULT_ABOUT, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      award: Award,
      users: Users,
      trending: TrendingUp,
      shield: Shield,
      zap: Zap,
      target: Target,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Award;
    return <IconComponent className="h-6 w-6" />;
  };

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="about" className="bg-background text-foreground py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <span data-editable="badge">{config.badge}</span>
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span data-editable="title">{config.title}</span>
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>

            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              <span data-editable="description">{config.description}</span>
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {config.stats.map((stat, idx) => (
              <Card key={idx} className="bg-card text-card-foreground border-border">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-primary">{getIcon(stat.icon)}</div>
                  <div className="text-3xl font-bold mb-2">
                    <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {config.values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                    {getIcon(value.icon)}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  <span data-editable={`values[${idx}].title`}>{value.title}</span>
                </h3>
                <p className="text-muted-foreground">
                  <span data-editable={`values[${idx}].description`}>{value.description}</span>
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
