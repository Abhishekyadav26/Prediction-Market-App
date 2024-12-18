import { Brain, TrendingUp, Users2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { gradients } from "@/lib/gradient-utils";

const features = [
  {
    icon: TrendingUp,
    title: "Real-Time Markets",
    description: "Trade on events as they unfold with our lightning-fast market updates and real-time price feeds.",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get advanced analytics and predictions powered by our sophisticated machine learning algorithms.",
  },
  {
    icon: Users2,
    title: "Community Wisdom",
    description: "Tap into the collective intelligence of thousands of traders to make better predictions.",
  },
];

export function FeaturesSection() {
  return (
    <section className={`py-20 ${gradients.features} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Our Platform
          </h2>
          <p className="mt-4 text-muted-foreground">
            Experience the future of prediction markets with our cutting-edge features
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description }: {
  icon: typeof TrendingUp;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-white/5 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
      <Icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}