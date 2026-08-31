import { r as __toESM } from "../_runtime.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as applyBalanceDelta, c as formatKES, h as multiplierTier, i as Label, l as gameApi, n as Input, r as LIMITS, s as cn, t as Button } from "./mockApi-B1o43JdS.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Trophy, i as User, l as Search, o as TrendingUp, r as Users, y as Flame } from "../_libs/lucide-react.mjs";
import { a as useMockState, n as Navbar, r as useGame, t as LimitsInfo } from "./LimitsInfo-n6tW5Gg7.mjs";
import { t as Switch } from "./switch-DUbncaYe.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-Dz0KDbtf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B7c_GX39.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tierClass = {
	low: "bg-destructive/15 text-destructive",
	mid: "bg-warning/15 text-warning",
	high: "bg-primary/20 text-primary"
};
function MultiplierStrip({ history }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-9 w-full overflow-hidden rounded-xl bg-card px-2 border border-border/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-9 flex-nowrap items-center gap-1.5 overflow-hidden",
			children: history.slice(0, 30).map((crashPoint, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("shrink-0 rounded-md px-2 py-1 font-display text-xs font-bold tabular-nums", tierClass[multiplierTier(crashPoint)]),
				children: [crashPoint.toFixed(2), "x"]
			}, i))
		})
	});
}
function CrashCanvas({ phase, multiplier, countdown, roundId }) {
	const wrapRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const stateRef = (0, import_react.useRef)({
		phase,
		multiplier
	});
	stateRef.current = {
		phase,
		multiplier
	};
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let w = 0;
		let h = 0;
		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const rect = wrap.getBoundingClientRect();
			w = rect.width;
			h = rect.height;
			canvas.width = Math.max(1, Math.floor(w * dpr));
			canvas.height = Math.max(1, Math.floor(h * dpr));
			canvas.style.width = "100%";
			canvas.style.height = "100%";
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		const ro = new ResizeObserver(resize);
		ro.observe(wrap);
		resize();
		const red = "#FF002F";
		const gold = "#FFD700";
		const blue = "#00D4FF";
		const purple = "#8B5CF6";
		const grid = "rgba(255,255,255,0.05)";
		const draw = () => {
			const { phase: p, multiplier: m } = stateRef.current;
			ctx.clearRect(0, 0, w, h);
			ctx.strokeStyle = grid;
			ctx.globalAlpha = .5;
			ctx.lineWidth = 1;
			for (let i = 1; i < 6; i++) {
				const y = h / 6 * i;
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(w, y);
				ctx.stroke();
			}
			for (let i = 1; i < 8; i++) {
				const x = w / 8 * i;
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, h);
				ctx.stroke();
			}
			ctx.globalAlpha = 1;
			if (p === "waiting") {
				raf = requestAnimationFrame(draw);
				return;
			}
			const progress = Math.min(1, Math.log(Math.max(1, m)) / Math.log(12));
			const isHigh = progress > .6;
			const isVeryHigh = progress > .8;
			let color = red;
			if (p === "crashed") color = red;
			else if (isVeryHigh) color = purple;
			else if (isHigh) color = gold;
			else color = blue;
			const padX = 16;
			const padY = 18;
			const endX = padX + (w - padX * 2) * Math.min(.94, .12 + progress * .85);
			const curveH = h - padY * 2;
			const pointAt = (t) => {
				return [padX + (endX - padX) * t, h - padY - curveH * Math.pow(t, 2.1) * Math.min(1, .15 + progress)];
			};
			const grad = ctx.createLinearGradient(0, 0, 0, h);
			if (p === "crashed") {
				grad.addColorStop(0, "rgba(255, 0, 47, 0.2)");
				grad.addColorStop(1, "rgba(255, 0, 47, 0)");
			} else if (isVeryHigh) {
				grad.addColorStop(0, "rgba(139, 92, 246, 0.2)");
				grad.addColorStop(1, "rgba(139, 92, 246, 0)");
			} else if (isHigh) {
				grad.addColorStop(0, "rgba(255, 215, 0, 0.2)");
				grad.addColorStop(1, "rgba(255, 215, 0, 0)");
			} else {
				grad.addColorStop(0, "rgba(0, 212, 255, 0.2)");
				grad.addColorStop(1, "rgba(0, 212, 255, 0)");
			}
			ctx.beginPath();
			ctx.moveTo(padX, h - padY);
			for (let t = 0; t <= 1.0001; t += .02) {
				const [x, y] = pointAt(t);
				ctx.lineTo(x, y);
			}
			ctx.lineTo(endX, h - padY);
			ctx.closePath();
			ctx.fillStyle = grad;
			ctx.fill();
			ctx.beginPath();
			for (let t = 0; t <= 1.0001; t += .02) {
				const [x, y] = pointAt(t);
				if (t === 0) ctx.moveTo(x, y);
				else ctx.lineTo(x, y);
			}
			ctx.strokeStyle = color;
			ctx.lineWidth = 4;
			ctx.lineCap = "round";
			ctx.shadowColor = color;
			ctx.shadowBlur = 30;
			ctx.stroke();
			ctx.shadowBlur = 0;
			const [hx, hy] = pointAt(1);
			for (let i = 0; i < 12; i++) {
				const t = 1 - i * .025;
				if (t < 0) break;
				const [px, py] = pointAt(t);
				ctx.beginPath();
				const alpha = (1 - i / 12) * .6;
				ctx.globalAlpha = alpha;
				ctx.fillStyle = color;
				const size = 2 + (1 - i / 12) * 5;
				ctx.arc(px + (Math.random() - .5) * 4, py + (Math.random() - .5) * 4, size, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			ctx.shadowColor = color;
			ctx.shadowBlur = 50;
			ctx.beginPath();
			ctx.fillStyle = color;
			ctx.arc(hx, hy, 8, 0, Math.PI * 2);
			ctx.fill();
			ctx.shadowBlur = 0;
			ctx.beginPath();
			ctx.fillStyle = "rgba(255,255,255,0.6)";
			ctx.arc(hx - 2, hy - 2, 3, 0, Math.PI * 2);
			ctx.fill();
			raf = requestAnimationFrame(draw);
		};
		raf = requestAnimationFrame(draw);
		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrapRef,
		className: cn("relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-b from-[#12121e] to-[#0a0a12] sm:aspect-[16/8] lg:aspect-auto lg:h-[170px] xl:h-[190px]", phase === "crashed" && "animate-crash-flash"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "absolute inset-0 block"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 grid place-items-center px-4 text-center",
			children: phase === "waiting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-rise",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-display font-semibold uppercase tracking-[0.3em] text-muted-foreground",
						children: "Next round in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-5xl font-extrabold tabular-nums text-warning sm:text-6xl lg:text-3xl xl:text-4xl",
						children: [countdown.toFixed(1), "s"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs text-muted-foreground lg:mt-1",
						children: ["Round #", roundId]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("font-display text-6xl font-extrabold tabular-nums sm:text-8xl lg:text-4xl xl:text-5xl", phase === "crashed" ? "text-primary" : multiplier > 10 ? "text-purple-400 text-glow" : multiplier > 5 ? "text-warning text-glow-gold" : "text-blue-400 text-glow-blue"),
					children: [multiplier.toFixed(2), "x"]
				}),
				phase === "crashed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-sm font-bold uppercase tracking-[0.3em] text-primary animate-pulse",
					children: "Crashed"
				}),
				phase === "running" && multiplier > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs font-display font-bold uppercase tracking-widest text-warning animate-pulse",
					children: "Boosting!"
				})
			] })
		})]
	});
}
var QUICK = [
	100,
	500,
	1e3
];
function BetPanel({ index, phase, multiplier, roundId, mode, username }) {
	const isGuest = !username;
	const effectiveMode = isGuest ? "demo" : mode;
	const mockState = useMockState();
	const [stake, setStake] = (0, import_react.useState)("100");
	const [autoOn, setAutoOn] = (0, import_react.useState)(false);
	const [auto, setAuto] = (0, import_react.useState)("2.00");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [placedStake, setPlacedStake] = (0, import_react.useState)(0);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const betBox = (0, import_react.useRef)(null);
	const betRound = (0, import_react.useRef)(-1);
	const stakeNum = Number(stake);
	const stakeError = stake !== "" && (!Number.isFinite(stakeNum) || stakeNum < LIMITS.minStake || stakeNum > LIMITS.maxSinglePayout) ? `Stake must be between ${LIMITS.minStake} and ${LIMITS.maxSinglePayout.toLocaleString()} KES` : null;
	const autoNum = Number(auto);
	const autoError = autoOn && (!Number.isFinite(autoNum) || autoNum < 1.01) ? "Min 1.01x" : null;
	(0, import_react.useEffect)(() => {
		if (phase === "running" && status === "queued") {
			setStatus("active");
			betRound.current = roundId;
		}
		if (phase === "crashed" && status === "active") {
			setStatus("idle");
			toast.error(`Bet ${index} lost — crashed at ${multiplier.toFixed(2)}x`);
		}
		if (phase === "waiting" && status === "settled") setStatus("idle");
	}, [
		phase,
		multiplier,
		index,
		status,
		roundId
	]);
	(0, import_react.useEffect)(() => {
		if (status === "active" && autoOn && !autoError && multiplier >= autoNum) doCashout(Math.min(multiplier, autoNum));
	}, [multiplier]);
	async function doCashout(at) {
		if (isSubmitting || betBox.current === null) return;
		if (isGuest) {
			setIsSubmitting(true);
			try {
				const payout = Math.min(LIMITS.maxSinglePayout, Math.round(placedStake * at * 100) / 100);
				applyBalanceDelta("demo", payout);
				setStatus("settled");
				toast.success(`Cashed out @ ${at.toFixed(2)}x — KES ${formatKES(payout)} (demo)`);
			} finally {
				setIsSubmitting(false);
			}
			return;
		}
		setIsSubmitting(true);
		try {
			const result = await gameApi.cashout(betBox.current, effectiveMode);
			if (result.ok) {
				setStatus("settled");
				toast.success(`Cashed out @ ${result.multiplier.toFixed(2)}x — KES ${formatKES(result.payout)}`);
			} else toast.error(result.error || "Cashout failed");
		} catch (error) {
			toast.error("Cashout failed");
		} finally {
			setIsSubmitting(false);
		}
	}
	async function placeBet() {
		if (stakeError || !stakeNum) return;
		if (isSubmitting) return;
		setIsSubmitting(true);
		try {
			if (isGuest) {
				if (stakeNum > mockState.balances.demo) {
					toast.error("Insufficient demo balance");
					return;
				}
				applyBalanceDelta("demo", -stakeNum);
				betBox.current = index;
				setPlacedStake(stakeNum);
				setStatus("queued");
				toast.success(`Bet ${index} placed — KES ${formatKES(stakeNum)} (demo)`);
				return;
			}
			const result = await gameApi.placeBet(index, stakeNum, effectiveMode);
			if (!result.ok) {
				toast.error(result.error);
				return;
			}
			betBox.current = index;
			setPlacedStake(stakeNum);
			setStatus("queued");
			toast.success(`Bet ${index} placed — KES ${formatKES(stakeNum)}`);
		} finally {
			setIsSubmitting(false);
		}
	}
	async function cancelBet() {
		if (isGuest) {
			applyBalanceDelta("demo", placedStake);
			setStatus("idle");
			betBox.current = null;
			toast("Bet cancelled");
			return;
		}
		setStatus("idle");
		betBox.current = null;
		toast("Bet reset");
	}
	const canBet = (phase !== "running" || status === "idle") && !isSubmitting;
	let action;
	if (status === "active") action = {
		label: isSubmitting ? "Cashing out..." : `Cashout ${(placedStake * multiplier).toFixed(0)} @ ${multiplier.toFixed(2)}x`,
		onClick: () => doCashout(multiplier),
		variant: "cashout",
		disabled: isSubmitting
	};
	else if (status === "queued") action = {
		label: "Bet placed — waiting...",
		onClick: cancelBet,
		variant: "cancel",
		disabled: isSubmitting
	};
	else if (status === "settled") action = {
		label: "Cashed out",
		variant: "cancel",
		disabled: true
	};
	else if (phase === "running") action = {
		label: "Waiting for next round",
		variant: "cancel",
		disabled: true
	};
	else action = {
		label: isSubmitting ? "Placing bet..." : `Place Bet ${stakeNum ? formatKES(stakeNum) : ""}`.trim(),
		onClick: placeBet,
		variant: "primary",
		disabled: !!stakeError || !stakeNum || isSubmitting
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel-surface flex flex-col gap-2 p-3 lg:gap-1.5 lg:p-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[10px] font-display font-bold uppercase tracking-[0.2em] text-muted-foreground",
					children: ["Bet ", index]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [
						isGuest && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary",
							children: "Guest"
						}),
						!isGuest && effectiveMode === "demo" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md bg-warning/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-warning",
							children: "Demo"
						}),
						!isGuest && effectiveMode === "real" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md bg-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary",
							children: "Real"
						}),
						status !== "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary",
							children: status === "queued" ? "Queued" : status === "active" ? "Active" : "Settled"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-1.5",
				children: QUICK.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !canBet,
					onClick: () => setStake(String(q)),
					className: "rounded-xl bg-elevated py-1.5 font-display text-sm font-bold tabular-nums transition-all hover:bg-primary/10 hover:text-primary hover:scale-105 disabled:opacity-40 lg:py-1",
					children: q
				}, q))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-0.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: `stake-${index}`,
						className: "text-xs text-muted-foreground",
						children: "Stake (KES)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: `stake-${index}`,
						inputMode: "decimal",
						value: stake,
						disabled: !canBet,
						onChange: (e) => setStake(e.target.value.replace(/[^\d.]/g, "")),
						className: "h-9 bg-elevated font-display text-sm font-bold tabular-nums focus:border-primary focus:ring-primary rounded-xl lg:h-8"
					}),
					stakeError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive",
						children: stakeError
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-0.5 rounded-xl bg-elevated/60 p-2 lg:p-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
						htmlFor: `auto-${index}`,
						className: "text-xs text-muted-foreground flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-3" }), "Auto cashout"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						id: `auto-${index}`,
						checked: autoOn,
						onCheckedChange: setAutoOn,
						disabled: !canBet,
						className: "scale-75 data-[state=checked]:bg-primary"
					})]
				}), autoOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					inputMode: "decimal",
					value: auto,
					disabled: !canBet,
					onChange: (e) => setAuto(e.target.value.replace(/[^\d.]/g, "")),
					className: "h-8 bg-card font-display text-sm font-bold tabular-nums focus:border-primary focus:ring-primary rounded-xl"
				}), autoError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-destructive",
					children: autoError
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] text-muted-foreground",
					children: "Off — cash out manually during the round."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: action.onClick,
				disabled: action.disabled,
				className: cn("h-11 w-full rounded-2xl font-display text-sm font-extrabold tabular-nums transition-all lg:h-10", action.variant === "cashout" && "bg-gradient-to-r from-warning to-amber-600 text-warning-foreground hover:shadow-lg hover:shadow-warning/30 hover:scale-105", action.variant === "cancel" && "bg-elevated text-foreground hover:bg-accent", action.variant === "primary" && "bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-105"),
				children: action.label
			})
		]
	});
}
var tierText = {
	low: "text-blue-400",
	mid: "text-warning",
	high: "text-primary"
};
function LiveBetsTable({ liveBets, history }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [page, setPage] = (0, import_react.useState)(1);
	const pageSize = 8;
	const filtered = history.filter((crashPoint) => query === "" || String(crashPoint).includes(query));
	const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
	const current = filtered.slice((page - 1) * pageSize, page * pageSize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "panel-surface flex h-full min-h-0 flex-col p-3 lg:p-2.5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "live",
			className: "flex min-h-0 flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					className: "w-full bg-elevated rounded-xl p-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "live",
						className: "flex-1 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3 mr-1.5" }), " Live"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "history",
						className: "flex-1 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-3 mr-1.5" }), " History"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
					value: "live",
					className: "mt-2 min-h-0 flex-1 lg:flex lg:flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[1fr_auto_auto] gap-2 px-2 pb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Player" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right",
								children: "Box"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-20 text-right",
								children: "Amount"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-h-[280px] space-y-1 overflow-y-auto pr-1 lg:max-h-none lg:min-h-0 lg:flex-1 no-scrollbar",
						children: liveBets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "py-8 text-center text-sm text-muted-foreground",
							children: "No live bets"
						}) : liveBets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("grid grid-cols-[1fr_auto_auto] items-center gap-2 rounded-xl px-2 py-1.5 text-sm", b.cashedOutAt !== null ? "bg-primary/10 border border-primary/20" : "bg-elevated/60", b.self && "ring-2 ring-primary"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate text-muted-foreground flex items-center gap-1.5",
									children: b.self ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-bold",
										children: "You"
									})] }) : b.userId.slice(0, 8)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-right tabular-nums font-display",
									children: ["Box ", b.box]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-20 text-right tabular-nums",
									children: b.cashedOutAt !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold text-primary",
										children: [formatKES(b.payout ?? 0), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "ml-1 text-[10px] text-muted-foreground",
											children: [b.cashedOutAt.toFixed(2), "x"]
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: formatKES(b.amount)
									})
								})
							]
						}, b.key))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
					value: "history",
					className: "mt-2 min-h-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: query,
								onChange: (e) => {
									setQuery(e.target.value);
									setPage(1);
								},
								placeholder: "Search multiplier",
								className: "mb-2 h-8 bg-elevated text-sm pl-8 focus:border-primary focus:ring-primary rounded-xl"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-0.5 max-h-[280px] overflow-y-auto lg:max-h-none no-scrollbar",
							children: current.map((crashPoint, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-xl bg-elevated/60 px-3 py-1.5 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: ["#", history.length - idx]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("font-display font-bold tabular-nums", tierText[multiplierTier(crashPoint)]),
									children: [crashPoint.toFixed(2), "x"]
								})]
							}, idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center justify-between text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									disabled: page <= 1,
									onClick: () => setPage((p) => p - 1),
									className: "h-7 px-3 text-xs rounded-xl bg-elevated hover:bg-primary/10 hover:text-primary transition-colors",
									children: "Prev"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display",
									children: [
										"Page ",
										page,
										" / ",
										pages
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									disabled: page >= pages,
									onClick: () => setPage((p) => p + 1),
									className: "h-7 px-3 text-xs rounded-xl bg-elevated hover:bg-primary/10 hover:text-primary transition-colors",
									children: "Next"
								})
							]
						})
					]
				})
			]
		})
	});
}
function GamePage() {
	const game = useGame();
	const state = useMockState();
	const username = state.session?.user.username ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background lg:h-screen lg:overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 pointer-events-none hero-gradient",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative mx-auto flex w-full flex-1 max-w-[1600px] flex-col gap-3 p-3 sm:p-5 lg:min-h-0 lg:gap-2 lg:overflow-hidden lg:p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-lg font-extrabold sm:text-xl flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-5 text-primary animate-pulse-glow" }),
								"Crash ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-warning",
									children: "✦"
								}),
								" Round #",
								game.roundId
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-1.5 w-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-1.5 w-1.5 bg-success" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold uppercase tracking-widest text-success",
								children: "Live"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LimitsInfo, {})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 lg:min-h-0 lg:flex-1 lg:gap-2 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)] 2xl:grid-cols-[340px_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "order-2 lg:order-1 lg:min-h-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveBetsTable, {
							liveBets: game.liveBets,
							history: game.history
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "order-1 flex min-w-0 flex-col gap-3 lg:order-2 lg:min-h-0 lg:gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiplierStrip, { history: game.history }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrashCanvas, {
								phase: game.phase,
								multiplier: game.multiplier,
								countdown: game.countdown,
								roundId: game.roundId
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 md:grid-cols-2 lg:gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BetPanel, {
									index: 1,
									phase: game.phase,
									multiplier: game.multiplier,
									roundId: game.roundId,
									mode: state.mode,
									username
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BetPanel, {
									index: 2,
									phase: game.phase,
									multiplier: game.multiplier,
									roundId: game.roundId,
									mode: state.mode,
									username
								})]
							})
						]
					})]
				})]
			})
		]
	});
}
//#endregion
export { GamePage as component };
