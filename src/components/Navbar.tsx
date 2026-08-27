import { Link, useNavigate } from "@tanstack/react-router";
import { Wallet, User as UserIcon, LogOut, Menu, Crown, Users, Zap, TrendingUp } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useHydrated, useMockState, useGame } from "@/lib/hooks";
import { authApi, formatKES, walletApi } from "@/lib/mockApi";

export function Navbar() {
  const state = useMockState();
  const game = useGame();
  const hydrated = useHydrated();
  const navigate = useNavigate();
  
  const balance = state.balances?.[state.mode] ?? 0;
  const user = hydrated ? state.session?.user : null;
  const isGuest = !user;
  const activeBets = game.liveBets?.length || 0;

  return (
    <header className="sticky top-0 z-40 border-b border-primary/20 bg-[#0a0a12]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-3 px-3 sm:px-5">
        <Link to="/" className="shrink-0">
          <Logo className="h-7 sm:h-8" />
        </Link>

        {/* Live indicator with active bet count */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-success">Live</span>
          <span className="text-[10px] text-muted-foreground">|</span>
          <span className="text-[10px] font-bold text-warning flex items-center gap-1">
            <Users className="size-3" />
            {activeBets} bets
          </span>
        </div>

        <div className="ml-auto flex min-w-0 items-center gap-2 sm:gap-3">
          {/* Balance with gold accent */}
          <div className="flex min-w-0 items-center gap-2 rounded-full border border-warning/20 bg-elevated/80 px-3 py-1.5 backdrop-blur">
            <TrendingUp className="size-3.5 text-warning" />
            <span className="truncate font-display text-sm font-bold tabular-nums text-warning">
              {hydrated ? `KES ${formatKES(balance)}` : "—"}
            </span>
            {hydrated && isGuest && (
              <span className="rounded bg-primary/20 px-1.5 text-[9px] font-bold uppercase tracking-widest text-primary">
                Guest
              </span>
            )}
            {hydrated && !isGuest && state.mode === "demo" && (
              <span className="rounded bg-primary/20 px-1.5 text-[9px] font-bold uppercase tracking-widest text-primary">
                Demo
              </span>
            )}
          </div>

          <Button 
            asChild 
            size="sm" 
            className="hidden font-bold sm:inline-flex bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all rounded-2xl px-5"
          >
            <Link to="/wallet">
              <Wallet className="size-4 mr-1.5" />
              Deposit
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Account menu"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-r from-primary to-purple-600 text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
              >
                {user ? (
                  <span className="font-display text-sm font-extrabold uppercase">
                    {(user.username || "U").slice(0, 2)}
                  </span>
                ) : (
                  <Menu className="size-4" />
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 border-primary/20 bg-[#12121e]">
              <DropdownMenuLabel className="truncate font-display">
                {user ? (
                  <span className="text-primary flex items-center gap-1.5">
                    <Crown className="size-3.5 text-warning" />
                    @{user.username}
                  </span>
                ) : (
                  "Guest — not signed in"
                )}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/wallet" className="cursor-pointer">
                  <Wallet className="mr-2 size-4" /> Wallet
                </Link>
              </DropdownMenuItem>
              {user && (
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer">
                    <UserIcon className="mr-2 size-4" /> Profile
                  </Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              {user && (
                <DropdownMenuItem
                  className="cursor-pointer"
                  onSelect={() => {
                    const nextMode = state.mode === "demo" ? "real" : "demo";
                    walletApi.setMode(nextMode);
                  }}
                >
                  <Zap className="mr-2 size-4 text-warning" />
                  Switch to {state.mode === "demo" ? "Real" : "Demo"} mode
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              {user ? (
                <DropdownMenuItem
                  className="cursor-pointer text-destructive"
                  onSelect={async () => {
                    await authApi.logout();
                    navigate({ to: "/" });
                  }}
                >
                  <LogOut className="mr-2 size-4" /> Log out
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem asChild>
                  <Link to="/login" className="cursor-pointer text-primary">
                    Log in
                  </Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}