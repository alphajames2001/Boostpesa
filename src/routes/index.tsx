// ===== index.tsx ===== (updated with icons)
import { createFileRoute } from "@tanstack/react-router";
import { Zap, Flame } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { MultiplierStrip } from "@/components/MultiplierStrip";
import { CrashCanvas } from "@/components/CrashCanvas";
import { BetPanel } from "@/components/BetPanel";
import { LiveBetsTable } from "@/components/LiveBetsTable";
import { LimitsInfo } from "@/components/LimitsInfo";
import { useGame, useMockState } from "@/lib/hooks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PlayPesa — Casino Crash Betting" },
      {
        name: "description",
        content:
          "PlayPesa crash: watch the multiplier climb, cash out before it crashes. Instant M-Pesa deposits and withdrawals in Kenya.",
      },
      { property: "og:title", content: "PlayPesa — Casino Crash Betting" },
      {
        property: "og:description",
        content:
          "Watch the multiplier climb and cash out before the crash. Dual bets, auto-cashout and instant M-Pesa payouts.",
      },
    ],
  }),
  component: GamePage,
});

function GamePage() {
  const game = useGame();
  const state = useMockState();
  const username = state.session?.user.username ?? null;

  return (
    <div className="flex min-h-screen flex-col bg-background lg:h-screen lg:overflow-hidden">
      {/* Decorative casino-style background accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-warning/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-destructive/3 rounded-full blur-3xl"></div>
      </div>
      
      <Navbar />
      <main className="relative mx-auto flex w-full flex-1 max-w-[1600px] flex-col gap-3 p-3 sm:p-5 lg:min-h-0 lg:gap-2 lg:overflow-hidden lg:p-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-lg font-extrabold sm:text-xl flex items-center gap-2">
              <Flame className="size-5 text-warning" />
              Crash <span className="text-warning">✦</span> Round #{game.roundId}
            </h1>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-success">Live</span>
            </div>
          </div>
          <LimitsInfo />
        </div>

        <div className="grid gap-3 lg:min-h-0 lg:flex-1 lg:gap-2 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)] 2xl:grid-cols-[340px_minmax(0,1fr)]">
          <div className="order-2 lg:order-1 lg:min-h-0">
            <LiveBetsTable liveBets={game.liveBets} history={game.history} />
          </div>

          <div className="order-1 flex min-w-0 flex-col gap-3 lg:order-2 lg:min-h-0 lg:gap-2">
            <MultiplierStrip history={game.history} />
            <CrashCanvas
              phase={game.phase}
              multiplier={game.multiplier}
              countdown={game.countdown}
              roundId={game.roundId}
            />
            <div className="grid gap-3 md:grid-cols-2 lg:gap-2">
              <BetPanel
                index={1}
                phase={game.phase}
                multiplier={game.multiplier}
                roundId={game.roundId}
                mode={state.mode}
                username={username}
              />
              <BetPanel
                index={2}
                phase={game.phase}
                multiplier={game.multiplier}
                roundId={game.roundId}
                mode={state.mode}
                username={username}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}