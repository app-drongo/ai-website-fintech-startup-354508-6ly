'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  CreditCard,
  Users,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  title: 'Powerful Features for Modern Finance',
  subtitle:
    'Everything your business needs to manage finances efficiently and scale with confidence',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  features: [
    {
      id: 'analytics',
      icon: 'BarChart3',
      title: 'Advanced Analytics',
      description: 'Real-time insights and reporting to make data-driven financial decisions',
      benefits: ['Custom dashboards', 'Automated reports', 'Predictive analytics'],
    },
    {
      id: 'security',
      icon: 'Shield',
      title: 'Bank-Grade Security',
      description: 'Enterprise-level security with 256-bit encryption and compliance standards',
      benefits: ['SOC 2 compliant', 'Multi-factor auth', 'Data encryption'],
    },
    {
      id: 'automation',
      icon: 'Zap',
      title: 'Smart Automation',
      description: 'Automate repetitive tasks and streamline your financial workflows',
      benefits: ['Invoice automation', 'Payment scheduling', 'Expense tracking'],
    },
    {
      id: 'payments',
      icon: 'CreditCard',
      title: 'Seamless Payments',
      description: 'Accept payments globally with multiple payment methods and currencies',
      benefits: ['Global payments', 'Low fees', 'Instant transfers'],
    },
    {
      id: 'growth',
      icon: 'TrendingUp',
      title: 'Growth Tools',
      description: 'Scale your business with advanced financial planning and forecasting',
      benefits: ['Cash flow forecasting', 'Budget planning', 'Growth metrics'],
    },
    {
      id: 'team',
      icon: 'Users',
      title: 'Team Collaboration',
      description: 'Work together with role-based access and approval workflows',
      benefits: ['Role permissions', 'Approval flows', 'Team insights'],
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      BarChart3,
      Shield,
      Zap,
      CreditCard,
      TrendingUp,
      Users,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || BarChart3;
    return <IconComponent className="h-8 w-8" />;
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="features" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
          <Button
            size="lg"
            onClick={handleCTAClick}
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.features.map((feature, idx) => (
            <Card
              key={feature.id}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    {getIcon(feature.icon)}
                  </div>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Feature
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIdx) => (
                    <li key={benefitIdx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span data-editable={`features[${idx}].benefits[${benefitIdx}]`}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted text-muted-foreground rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ready to transform your business finances?
            </h3>
            <p className="text-lg mb-6">
              Join thousands of businesses already using our platform to grow faster.
            </p>
            <Button
              size="lg"
              onClick={handleCTAClick}
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <span data-editable="ctaText">{config.ctaText}</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
