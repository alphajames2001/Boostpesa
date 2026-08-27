import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formatKES, multiplierTier, type LiveBet } from "@/lib/mockApi";
import { cn } from "@/lib/utils";
import { Users, Search, User, Trophy } from "lucide-react";

const tierText = {
  low: "text-blue-400",
  mid: "text-warning",
  high: "text-primary",
} as const;

export function LiveBetsTable({
  liveBets,
  history,
}: {
  liveBets: LiveBet[];
  history: number[];
}) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const filtered = history.filter(
    (crashPoint) => query === "" || String(crashPoint).includes(query),
  );
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="panel-surface flex h-full min-h-0 flex-col p-3 lg:p-2.5">
      <Tabs defaultValue="live" className="flex min-h-0 flex-1 flex-col">
        <TabsList className="w-full bg-elevated rounded-xl p-1">
          <TabsTrigger value="live" className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg">
            <Users className="size-3 mr-1.5" /> Live
          </TabsTrigger>
          <TabsTrigger value="history" className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg">
            <Trophy className="size-3 mr-1.5" /> History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="mt-2 min-h-0 flex-1 lg:flex lg:flex-col">
          <div className="grid grid-cols-[1fr_auto_auto] gap-2 px-2 pb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <span>Player</span>
            <span className="text-right">Box</span>
            <span className="w-20 text-right">Amount</span>
          </div>
          <div className="max-h-[280px] space-y-1 overflow-y-auto pr-1 lg:max-h-none lg:min-h-0 lg:flex-1 no-scrollbar">
            {liveBets.length === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">No live bets</p>
            ) : (
              liveBets.map((b) => (
                <div
                  key={b.key}
                  className={cn(
                    "grid grid-cols-[1fr_auto_auto] items-center gap-2 rounded-xl px-2 py-1.5 text-sm",
                    b.cashedOutAt !== null ? "bg-primary/10 border border-primary/20" : "bg-elevated/60",
                    b.self && "ring-2 ring-primary",
                  )}
                >
                  <span className="truncate text-muted-foreground flex items-center gap-1.5">
                    {b.self ? (
                      <>
                        <User className="size-3 text-primary" />
                        <span className="text-primary font-bold">You</span>
                      </>
                    ) : (
                      b.userId.slice(0, 8)
                    )}
                  </span>
                  <span className="text-right tabular-nums font-display">Box {b.box}</span>
                  <span className="w-20 text-right tabular-nums">
                    {b.cashedOutAt !== null ? (
                      <span className="font-bold text-primary">
                        {formatKES(b.payout ?? 0)}
                        <span className="ml-1 text-[10px] text-muted-foreground">{b.cashedOutAt.toFixed(2)}x</span>
                      </span>
                    ) : (
                      <span className="text-muted-foreground">{formatKES(b.amount)}</span>
                    )}
                  </span>
                </div>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-2 min-h-0 flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search multiplier"
              className="mb-2 h-8 bg-elevated text-sm pl-8 focus:border-primary focus:ring-primary rounded-xl"
            />
          </div>
          <div className="space-y-0.5 max-h-[280px] overflow-y-auto lg:max-h-none no-scrollbar">
            {current.map((crashPoint, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-xl bg-elevated/60 px-3 py-1.5 text-sm"
              >
                <span className="text-muted-foreground">#{history.length - idx}</span>
                <span
                  className={cn(
                    "font-display font-bold tabular-nums",
                    tierText[multiplierTier(crashPoint)],
                  )}
                >
                  {crashPoint.toFixed(2)}x
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <Button
              size="sm"
              variant="secondary"
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="h-7 px-3 text-xs rounded-xl bg-elevated hover:bg-primary/10 hover:text-primary transition-colors"
            >
              Prev
            </Button>
            <span className="font-display">
              Page {page} / {pages}
            </span>
            <Button
              size="sm"
              variant="secondary"
              disabled={page >= pages}
              onClick={() => setPage((p) => p + 1)}
              className="h-7 px-3 text-xs rounded-xl bg-elevated hover:bg-primary/10 hover:text-primary transition-colors"
            >
              Next
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}