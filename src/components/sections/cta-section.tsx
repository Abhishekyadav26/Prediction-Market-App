import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gradients } from "@/lib/gradient-utils";

export function CTASection() {
  return (
    <section className={`py-20 ${gradients.cta} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">Ready to Start Trading?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">
          Join our community of traders and start making predictions today. Get
          access to exclusive markets and trading features.
        </p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="mt-8 bg-white hover:bg-white/90 text-primary"
        >
          Create Account
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}