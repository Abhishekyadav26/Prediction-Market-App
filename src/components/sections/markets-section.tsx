import { BarChart2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { gradients } from "@/lib/gradient-utils";

const categories = ['Politics', 'Sports', 'Crypto', 'Entertainment'];

export function MarketsSection() {
  return (
    <section className={`py-20 ${gradients.markets} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Popular Markets
          </h2>
          <p className="mt-4 text-muted-foreground">
            Discover trending prediction markets across various categories
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <MarketCard key={category} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketCard({ category }: { category: string }) {
  return (
    <Card className="group cursor-pointer backdrop-blur-sm bg-white/50 dark:bg-white/5 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="p-6">
        <BarChart2 className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
        <h3 className="text-lg font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {category}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Trade on {category.toLowerCase()} outcomes
        </p>
      </div>
    </Card>
  );
}