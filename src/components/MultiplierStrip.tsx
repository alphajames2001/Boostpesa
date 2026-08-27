import { multiplierTier } from "@/lib/mockApi";
import { cn } from "@/lib/utils";

const tierClass = {
  low: "bg-destructive/15 text-destructive",
  mid: "bg-warning/15 text-warning",
  high: "bg-primary/20 text-primary",
} as const;

export function MultiplierStrip({ history }: { history: number[] }) {
  return (
    <div className="h-9 w-full overflow-hidden rounded-xl bg-card px-2 border border-border/50">
      <div className="flex h-9 flex-nowrap items-center gap-1.5 overflow-hidden">
        {history.slice(0, 30).map((crashPoint, i) => (
          <span
            key={i}
            className={cn(
              "shrink-0 rounded-md px-2 py-1 font-display text-xs font-bold tabular-nums",
              tierClass[multiplierTier(crashPoint)],
            )}
          >
            {crashPoint.toFixed(2)}x
          </span>
        ))}
      </div>
    </div>
  );
}