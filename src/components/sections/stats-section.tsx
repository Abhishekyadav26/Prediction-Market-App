import { gradients } from "@/lib/gradient-utils";

export function StatsSection() {
  return (
    <section className={`py-16 ${gradients.stats} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <StatItem value="$50M+" label="Trading Volume" />
          <StatItem value="100K+" label="Active Traders" />
          <StatItem value="95%" label="Resolution Accuracy" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-xl">
      <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="mt-2 text-muted-foreground">{label}</div>
    </div>
  );
}