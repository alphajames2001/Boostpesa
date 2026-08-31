import { r as __toESM } from "../_runtime.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Logo } from "./Logo-B-OUHQbS.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as subscribeState, c as formatKES, d as getState, o as authApi, r as LIMITS, s as cn, t as Button, u as gameApi$1, v as walletApi } from "./mockApi-B1o43JdS.mjs";
import { C as Circle, b as Crown, f as Menu, i as User, j as Check, k as ChevronRight, m as LogOut, n as Wallet, o as TrendingUp, r as Users, s as Shield, t as Zap } from "../_libs/lucide-react.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { i as Trigger$1, n as Portal, r as Root2$1, t as Content2$1 } from "../_libs/radix-ui__react-popover.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LimitsInfo-n6tW5Gg7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var WS_URL = "http://localhost:8080".replace(/^http/, "ws") + "/ws";
var SocketClient = class {
	socket = null;
	listeners = /* @__PURE__ */ new Map();
	reconnectAttempts = 0;
	reconnectTimer = null;
	explicitlyClosed = false;
	connect(_token) {
		if (this.socket && (this.socket.readyState === WebSocket.OPEN || this.socket.readyState === WebSocket.CONNECTING)) return;
		this.explicitlyClosed = false;
		this.open();
	}
	open() {
		this.socket = new WebSocket(WS_URL);
		this.socket.onopen = () => {
			console.log("[Socket] Connected");
			this.reconnectAttempts = 0;
		};
		this.socket.onclose = () => {
			console.log("[Socket] Disconnected");
			if (!this.explicitlyClosed) this.scheduleReconnect();
		};
		this.socket.onerror = (err) => {
			console.error("[Socket] Connection error:", err);
		};
		this.socket.onmessage = (msg) => {
			let envelope;
			try {
				envelope = JSON.parse(msg.data);
			} catch {
				return;
			}
			if (!envelope.event) return;
			this.emit(envelope.event, envelope.data);
		};
	}
	scheduleReconnect() {
		if (this.reconnectAttempts >= 5) return;
		const delay = Math.min(1e3 * 2 ** this.reconnectAttempts, 1e4);
		this.reconnectAttempts += 1;
		this.reconnectTimer = setTimeout(() => this.open(), delay);
	}
	disconnect() {
		this.explicitlyClosed = true;
		if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
		if (this.socket) {
			this.socket.close();
			this.socket = null;
		}
	}
	on(event, callback) {
		if (!this.listeners.has(event)) this.listeners.set(event, /* @__PURE__ */ new Set());
		this.listeners.get(event).add(callback);
	}
	off(event, callback) {
		this.listeners.get(event)?.delete(callback);
	}
	emit(event, data) {
		this.listeners.get(event)?.forEach((cb) => cb(data));
	}
	get isConnected() {
		return this.socket?.readyState === WebSocket.OPEN;
	}
};
var socketClient = new SocketClient();
var emptySnapshot = {
	phase: "waiting",
	roundId: 0,
	multiplier: 1,
	countdown: 0,
	history: [],
	liveBets: []
};
var BOT_NAMES = [
	"Wanjiru",
	"KevoBet",
	"MamaPesa",
	"Trader",
	"Mwangi",
	"Nairobi",
	"CashOut",
	"BetaKE",
	"Maisha",
	"DiamondD",
	"Otieno",
	"PesaPlug",
	"SkyRckt",
	"Candle",
	"RiskyB",
	"Jambo",
	"FastKE",
	"NightOwl",
	"Sunrise",
	"Bonga"
];
var BOT_AMOUNTS = [
	50,
	100,
	100,
	200,
	200,
	500,
	500,
	1e3,
	2e3,
	5e3
];
var BOT_GROWTH_PER_SEC = .09;
function randomBotAmount() {
	return BOT_AMOUNTS[Math.floor(Math.random() * BOT_AMOUNTS.length)];
}
function randomBotTarget() {
	const t = 1 + -Math.log(Math.random()) * .8;
	return Math.min(Math.max(t, 1.05), 15);
}
function randomBotName(used) {
	let name = BOT_NAMES[Math.floor(Math.random() * BOT_NAMES.length)];
	let tries = 0;
	while (used.has(name) && tries < 10) {
		name = BOT_NAMES[Math.floor(Math.random() * BOT_NAMES.length)] + Math.floor(Math.random() * 90 + 10);
		tries++;
	}
	used.add(name);
	return name;
}
/** Reactive access to session/wallet/mode state. */
function useMockState() {
	const [, force] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		return subscribeState(() => force((n) => n + 1));
	}, []);
	return getState();
}
/** Reactive access to the live round via the plain-WebSocket broadcast. */
function useGame() {
	const [snap, setSnap] = (0, import_react.useState)(emptySnapshot);
	const countdownTimer = (0, import_react.useRef)(null);
	const botTimers = (0, import_react.useRef)([]);
	const activeBotBets = (0, import_react.useRef)([]);
	const clearBotTimers = () => {
		botTimers.current.forEach(clearTimeout);
		botTimers.current = [];
	};
	(0, import_react.useEffect)(() => {
		socketClient.connect();
		async function loadInitialState() {
			try {
				const response = await gameApi$1.getState();
				if (response.success && response.data) setSnap((prev) => ({
					...prev,
					phase: response.data.phase,
					roundId: response.data.id,
					multiplier: response.data.multiplier,
					countdown: response.data.countdown
				}));
			} catch (error) {
				console.error("[Game] Failed to load initial state:", error);
			}
		}
		loadInitialState();
		const onWaiting = (data) => {
			if (countdownTimer.current) clearInterval(countdownTimer.current);
			setSnap((prev) => ({
				...prev,
				phase: "waiting",
				roundId: data.id,
				countdown: data.countdown,
				multiplier: 1,
				liveBets: []
			}));
			clearBotTimers();
			activeBotBets.current = [];
			{
				const usedNames = /* @__PURE__ */ new Set();
				const botCount = 8 + Math.floor(Math.random() * 18);
				for (let i = 0; i < botCount; i++) {
					const delay = Math.random() * Math.max(data.countdown - 1, 1) * 1e3;
					const timer = setTimeout(() => {
						const box = Math.random() < .5 ? 1 : 2;
						const name = randomBotName(usedNames);
						const amount = randomBotAmount();
						const key = `bot:${data.id}:${name}:${box}`;
						activeBotBets.current.push({
							key,
							box,
							amount
						});
						setSnap((prev) => {
							if (prev.roundId !== data.id) return prev;
							return {
								...prev,
								liveBets: [{
									key,
									userId: name,
									box,
									amount,
									cashedOutAt: null,
									payout: null,
									self: false
								}, ...prev.liveBets]
							};
						});
					}, delay);
					botTimers.current.push(timer);
				}
			}
			let remaining = data.countdown;
			countdownTimer.current = setInterval(() => {
				remaining -= 1;
				setSnap((prev) => prev.phase === "waiting" ? {
					...prev,
					countdown: Math.max(0, remaining)
				} : prev);
				if (remaining <= 0 && countdownTimer.current) {
					clearInterval(countdownTimer.current);
					countdownTimer.current = null;
				}
			}, 1e3);
		};
		const onStarted = (data) => {
			if (countdownTimer.current) {
				clearInterval(countdownTimer.current);
				countdownTimer.current = null;
			}
			setSnap((prev) => ({
				...prev,
				phase: "running",
				roundId: data.id,
				multiplier: 1
			}));
			activeBotBets.current.forEach((bet) => {
				if (Math.random() < .25) return;
				const target = randomBotTarget();
				const msUntilTarget = Math.log(target) / BOT_GROWTH_PER_SEC * 1e3;
				const timer = setTimeout(() => {
					setSnap((cur) => {
						if (cur.roundId !== data.id || cur.phase !== "running") return cur;
						return {
							...cur,
							liveBets: cur.liveBets.map((b) => b.key === bet.key ? {
								...b,
								cashedOutAt: target,
								payout: bet.amount * target
							} : b)
						};
					});
				}, msUntilTarget);
				botTimers.current.push(timer);
			});
		};
		const onTick = (data) => {
			setSnap((prev) => ({
				...prev,
				multiplier: data.multiplier
			}));
		};
		const onCrashed = (data) => {
			clearBotTimers();
			setSnap((prev) => {
				if (prev.roundId === data.id && prev.history[0] === data.crashPoint) return {
					...prev,
					phase: "crashed",
					multiplier: data.crashPoint
				};
				return {
					...prev,
					phase: "crashed",
					multiplier: data.crashPoint,
					history: [data.crashPoint, ...prev.history].slice(0, 50)
				};
			});
		};
		const onBetPlaced = (data) => {
			const currentUserId = getState().session?.user.id;
			const key = `${data.userId}:${data.box}`;
			setSnap((prev) => ({
				...prev,
				liveBets: [{
					key,
					userId: data.userId,
					box: data.box,
					amount: data.amount,
					cashedOutAt: null,
					payout: null,
					self: data.userId === currentUserId
				}, ...prev.liveBets.filter((b) => b.key !== key)]
			}));
		};
		const onCashout = (data) => {
			const key = `${data.userId}:${data.box}`;
			setSnap((prev) => ({
				...prev,
				liveBets: prev.liveBets.map((bet) => bet.key === key ? {
					...bet,
					cashedOutAt: data.multiplier,
					payout: data.payout
				} : bet)
			}));
		};
		socketClient.on("round:waiting", onWaiting);
		socketClient.on("round:started", onStarted);
		socketClient.on("round:tick", onTick);
		socketClient.on("round:crashed", onCrashed);
		socketClient.on("bet:placed", onBetPlaced);
		socketClient.on("bet:cashout", onCashout);
		return () => {
			if (countdownTimer.current) clearInterval(countdownTimer.current);
			clearBotTimers();
			socketClient.off("round:waiting", onWaiting);
			socketClient.off("round:started", onStarted);
			socketClient.off("round:tick", onTick);
			socketClient.off("round:crashed", onCrashed);
			socketClient.off("bet:placed", onBetPlaced);
			socketClient.off("bet:cashout", onCashout);
		};
	}, []);
	return snap;
}
/** Avoids SSR/hydration mismatch for localStorage-backed UI. */
function useHydrated() {
	return (0, import_react.useSyncExternalStore)(() => () => {}, () => true, () => false);
}
function Navbar() {
	const state = useMockState();
	const game = useGame();
	const hydrated = useHydrated();
	const navigate = useNavigate();
	const balance = state.balances?.[state.mode] ?? 0;
	const user = hydrated ? state.session?.user : null;
	const isGuest = !user;
	const activeBets = game.liveBets?.length || 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-primary/20 bg-[#0a0a12]/95 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-[1600px] items-center gap-3 px-3 sm:px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-7 sm:h-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-success" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold uppercase tracking-widest text-success",
							children: "Live"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground",
							children: "|"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] font-bold text-warning flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3" }),
								activeBets,
								" bets"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex min-w-0 items-center gap-2 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-2 rounded-full border border-warning/20 bg-elevated/80 px-3 py-1.5 backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-3.5 text-warning" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate font-display text-sm font-bold tabular-nums text-warning",
									children: hydrated ? `KES ${formatKES(balance)}` : "—"
								}),
								hydrated && isGuest && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded bg-primary/20 px-1.5 text-[9px] font-bold uppercase tracking-widest text-primary",
									children: "Guest"
								}),
								hydrated && !isGuest && state.mode === "demo" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded bg-primary/20 px-1.5 text-[9px] font-bold uppercase tracking-widest text-primary",
									children: "Demo"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden font-bold sm:inline-flex bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all rounded-2xl px-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/wallet",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "size-4 mr-1.5" }), "Deposit"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Account menu",
								className: "grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-r from-primary to-purple-600 text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30",
								children: user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm font-extrabold uppercase",
									children: (user.username || "U").slice(0, 2)
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "w-56 border-primary/20 bg-[#12121e]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
									className: "truncate font-display",
									children: user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-primary flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-3.5 text-warning" }),
											"@",
											user.username
										]
									}) : "Guest — not signed in"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/wallet",
										className: "cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "mr-2 size-4" }), " Wallet"]
									})
								}),
								user && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/profile",
										className: "cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mr-2 size-4" }), " Profile"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								user && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									className: "cursor-pointer",
									onSelect: () => {
										const nextMode = state.mode === "demo" ? "real" : "demo";
										walletApi.setMode(nextMode);
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "mr-2 size-4 text-warning" }),
										"Switch to ",
										state.mode === "demo" ? "Real" : "Demo",
										" mode"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									className: "cursor-pointer text-destructive",
									onSelect: async () => {
										await authApi.logout();
										navigate({ to: "/" });
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 size-4" }), " Log out"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/login",
										className: "cursor-pointer text-primary",
										children: "Log in"
									})
								})
							]
						})] })
					]
				})
			]
		})
	});
}
var Popover = Root2$1;
var PopoverTrigger = Trigger$1;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2$1.displayName;
var rows = [
	["Min deposit", `KES ${LIMITS.minDeposit.toLocaleString()}`],
	["Min stake", `KES ${LIMITS.minStake.toLocaleString()}`],
	["Max single payout", `KES ${LIMITS.maxSinglePayout.toLocaleString()}`],
	["Max withdrawal", `KES ${LIMITS.maxWithdraw.toLocaleString()}`]
];
function LimitsInfo({ label = "Limits" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverTrigger, {
		className: "inline-flex items-center gap-1.5 rounded-full bg-elevated px-3 py-1 text-xs font-semibold text-muted-foreground transition-all hover:text-primary hover:ring-1 hover:ring-primary/30 hover:scale-105",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-3.5" }),
			" ",
			label
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
		align: "end",
		className: "w-64 border-primary/20 bg-[#12121e]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 font-display text-sm font-bold text-primary",
				children: "Platform limits"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "space-y-1.5 text-xs",
				children: rows.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted-foreground",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "tabular-nums font-semibold text-warning",
						children: v
					})]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[10px] leading-relaxed text-muted-foreground",
				children: "Limits are enforced server-side. Contact support for adjustments."
			})
		]
	})] });
}
//#endregion
export { useMockState as a, useHydrated as i, Navbar as n, useGame as r, LimitsInfo as t };
