import { Info } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LIMITS } from "@/lib/mockApi";

const rows: [string, string][] = [
  ["Min deposit", `KES ${LIMITS.minDeposit.toLocaleString()}`],
  ["Min stake", `KES ${LIMITS.minStake.toLocaleString()}`],
  ["Max single payout", `KES ${LIMITS.maxSinglePayout.toLocaleString()}`],
  ["Max withdrawal", `KES ${LIMITS.maxWithdraw.toLocaleString()}`],
];

export function LimitsInfo({ label = "Limits" }: { label?: string }) {
  return (
    <Popover>
      <PopoverTrigger className="inline-flex items-center gap-1.5 rounded-full bg-elevated px-3 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary hover:ring-1 hover:ring-primary/30">
        <Info className="size-3.5" /> {label}
      </PopoverTrigger>
      <PopoverContent align="end" className="w-64 border-primary/20">
        <p className="mb-2 font-display text-sm font-bold text-primary">Platform limits</p>
        <dl className="space-y-1.5 text-xs">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-3">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="tabular-nums font-semibold text-primary">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">
          Limits are enforced server-side. Contact support for adjustments.
        </p>
      </PopoverContent>
    </Popover>
  );
}