import { r as __toESM } from "../_runtime.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as formatKES, f as isValidKenyanLocal, i as Label, n as Input, p as localPart, r as LIMITS, s as cn, t as Button, v as walletApi } from "./mockApi-B1o43JdS.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as ChevronDown, D as CircleArrowDown, E as CircleArrowUp, O as ChevronUp, S as Clock, T as CircleCheckBig, b as Crown, j as Check, n as Wallet, v as History, w as CircleX, x as Coins } from "../_libs/lucide-react.mjs";
import { a as useMockState, i as useHydrated, n as Navbar, t as LimitsInfo } from "./LimitsInfo-n6tW5Gg7.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-Dz0KDbtf.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wallet-D6NpwIuE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
function PhoneField({ id, label, value, onChange, disabled, helperText }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: id,
				className: "text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-12 items-stretch overflow-hidden rounded-2xl bg-elevated border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex items-center border-r border-border/50 px-3 text-sm font-semibold text-muted-foreground",
					children: "+254"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id,
					inputMode: "numeric",
					value,
					onChange: (e) => onChange(e.target.value.replace(/\D/g, "").slice(0, 9)),
					disabled,
					className: "h-full flex-1 rounded-none border-0 bg-transparent focus:ring-0",
					placeholder: "7XXXXXXXX or 1XXXXXXXX",
					autoComplete: "tel-national"
				})]
			}),
			helperText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: helperText
			})
		]
	});
}
function WalletPage() {
	const state = useMockState();
	const hydrated = useHydrated();
	const isGuest = !state.session;
	const defaultPhone = localPart(state.session?.user.phone);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-5xl space-y-4 p-3 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-2xl font-extrabold flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "size-6 text-warning" }), "Wallet"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LimitsInfo, { label: "View limits" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => walletApi.setMode("demo"),
						className: cn("panel-surface p-5 text-left transition-all hover:scale-[1.02]", state.mode === "demo" ? "ring-2 ring-primary shadow-lg shadow-primary/20" : "hover:bg-elevated/40"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-4 text-warning" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground",
									children: isGuest ? "Demo (Guest)" : "Demo balance"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-3xl font-extrabold tabular-nums text-warning",
								children: hydrated ? `KES ${formatKES(state.balances.demo)}` : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: state.mode === "demo" ? "Active for betting" : "Tap to switch"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => walletApi.setMode("real"),
						disabled: isGuest,
						className: cn("panel-surface p-5 text-left transition-all hover:scale-[1.02]", isGuest && "opacity-50 cursor-not-allowed", state.mode === "real" ? "ring-2 ring-primary shadow-lg shadow-primary/20" : "hover:bg-elevated/40"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground",
									children: "Real balance"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-3xl font-extrabold tabular-nums text-primary",
								children: hydrated ? `KES ${formatKES(state.balances.real)}` : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: isGuest ? "Sign in to access real balance" : state.mode === "real" ? "Active for betting" : "Tap to switch"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					defaultValue: "deposit",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "w-full bg-elevated rounded-2xl p-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "deposit",
									className: "flex-1 data-[state=active]:bg-primary data-[state=active]:text-white rounded-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleArrowDown, { className: "size-3 mr-1.5" }), " Deposit"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "withdraw",
									className: "flex-1 data-[state=active]:bg-primary data-[state=active]:text-white rounded-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleArrowUp, { className: "size-3 mr-1.5" }), " Withdraw"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "history",
									className: "flex-1 data-[state=active]:bg-primary data-[state=active]:text-white rounded-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "size-3 mr-1.5" }), " Transactions"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "deposit",
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DepositForm, { defaultPhone })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "withdraw",
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WithdrawForm, {
								balance: state.balances.real,
								isGuest,
								defaultPhone
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "history",
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionList, {})
						})
					]
				})
			]
		})]
	});
}
var DEPOSIT_POLL_INTERVAL_MS = 3e3;
var DEPOSIT_POLL_MAX_ATTEMPTS = 30;
function DepositForm({ defaultPhone }) {
	const [phone, setPhone] = (0, import_react.useState)(defaultPhone);
	const [amount, setAmount] = (0, import_react.useState)("500");
	const [stage, setStage] = (0, import_react.useState)("idle");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [txId, setTxId] = (0, import_react.useState)(null);
	const amt = Number(amount);
	const invalid = !Number.isFinite(amt) || amt < LIMITS.minDeposit || amt > LIMITS.maxSinglePayout;
	const phoneInvalid = !isValidKenyanLocal(phone);
	async function start() {
		setError(null);
		if (phoneInvalid) {
			setError("Enter a valid M-Pesa number (07... or 01...)");
			return;
		}
		setSubmitting(true);
		const res = await walletApi.depositInitiate(`254${phone}`, amt);
		if (!res.ok) {
			setSubmitting(false);
			setError(res.error);
			return;
		}
		setTxId(res.transactionId);
		setStage("pushed");
		setTimeout(() => setStage("polling"), 900);
		for (let attempt = 1; attempt <= DEPOSIT_POLL_MAX_ATTEMPTS; attempt++) {
			await sleep(DEPOSIT_POLL_INTERVAL_MS);
			const s = await walletApi.depositStatus(res.transactionId);
			if (s.status !== "pending") {
				setStage(s.status === "success" ? "success" : "failed");
				setSubmitting(false);
				s.status === "success" ? toast.success(`Deposit of KES ${formatKES(amt)} confirmed`) : toast.error("Deposit failed or was cancelled");
				return;
			}
		}
		setStage("failed");
		setSubmitting(false);
		toast.error("Deposit timed out. Check your M-Pesa messages, or try again.");
	}
	const busy = submitting || stage === "pushed" || stage === "polling";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel-surface space-y-4 p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneField, {
				id: "dphone",
				label: "M-Pesa phone number",
				value: phone,
				onChange: setPhone,
				disabled: busy,
				helperText: phone !== "" && phoneInvalid ? "Enter a valid number (07... or 01...)" : void 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "damount",
						className: "text-muted-foreground",
						children: "Amount (KES)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "damount",
						inputMode: "decimal",
						value: amount,
						onChange: (e) => setAmount(e.target.value.replace(/[^\d]/g, "")),
						disabled: busy,
						className: "h-12 bg-elevated font-display text-lg font-bold tabular-nums border-border focus:border-primary focus:ring-primary rounded-2xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"Min ",
							LIMITS.minDeposit.toLocaleString(),
							" · Max ",
							LIMITS.maxSinglePayout.toLocaleString(),
							" KES"
						]
					}),
					invalid && amount !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive",
						children: "Amount outside deposit limits"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-2",
				children: [
					200,
					500,
					1e3,
					5e3
				].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setAmount(String(q)),
					disabled: busy,
					className: "rounded-2xl bg-elevated py-2 text-sm font-bold tabular-nums transition-all hover:bg-primary/10 hover:text-primary hover:scale-105 disabled:opacity-40",
					children: q
				}, q))
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-destructive",
				children: error
			}),
			submitting && stage === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-elevated p-4 text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 animate-pulse rounded-full bg-primary" }), "Sending STK push..."]
				})
			}),
			stage !== "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-elevated p-4 text-sm",
				children: [
					stage === "pushed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "STK push sent — check your phone and enter your M-Pesa PIN." }),
					stage === "polling" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 animate-pulse rounded-full bg-primary" }), "Waiting for M-Pesa confirmation..."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: ["Expect a prompt from ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-primary",
									children: "GROVER COMMERCE"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Please stay on this page until the transaction finishes processing."
							})
						]
					}),
					stage === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-semibold text-success flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "size-4" }), " Deposit confirmed and credited."]
					}),
					stage === "failed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-semibold text-destructive flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-4" }), " Deposit failed. No funds were taken."]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: start,
				disabled: busy || invalid || phoneInvalid,
				className: "h-12 w-full font-display font-extrabold bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary/30 transition-all rounded-2xl",
				children: busy ? "Processing..." : "Send STK push"
			})
		]
	});
}
function WithdrawForm({ balance, isGuest, defaultPhone }) {
	const [amount, setAmount] = (0, import_react.useState)("500");
	const [phone, setPhone] = (0, import_react.useState)(defaultPhone);
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const amt = Number(amount);
	const gateFailed = balance < LIMITS.minDeposit || isGuest;
	const phoneInvalid = !isValidKenyanLocal(phone);
	async function submit() {
		setError(null);
		if (phoneInvalid) {
			setError("Enter a valid M-Pesa number to withdraw to (07... or 01...)");
			return;
		}
		setLoading(true);
		const res = await walletApi.withdraw(amt, `254${phone}`);
		setLoading(false);
		if (!res.ok) return setError(res.error);
		toast.success(`Withdrawal of KES ${formatKES(amt)} sent to M-Pesa`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel-surface space-y-4 p-5",
		children: [
			isGuest && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-2xl bg-warning/15 p-3 text-sm text-warning border border-warning/20",
				children: "Sign in to withdraw real money. This is a demo account."
			}),
			!isGuest && gateFailed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-2xl bg-destructive/10 p-3 text-sm text-destructive border border-destructive/20",
				children: [
					"Minimum balance of KES ",
					LIMITS.minDeposit,
					" required to withdraw."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "wamount",
						className: "text-muted-foreground",
						children: "Amount (KES)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "wamount",
						inputMode: "decimal",
						value: amount,
						onChange: (e) => setAmount(e.target.value.replace(/[^\d]/g, "")),
						className: "h-12 bg-elevated font-display text-lg font-bold tabular-nums border-border focus:border-primary focus:ring-primary rounded-2xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"Min ",
							LIMITS.minDeposit.toLocaleString(),
							" · Max ",
							LIMITS.maxWithdraw.toLocaleString(),
							" KES"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneField, {
				id: "wphone",
				label: "Withdraw to M-Pesa number",
				value: phone,
				onChange: setPhone,
				helperText: phone !== "" && phoneInvalid ? "Enter a valid number (07... or 01...)" : "Defaults to your signup number, but you can send to a different one"
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-destructive",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: submit,
				disabled: loading || gateFailed || phoneInvalid,
				className: "h-12 w-full font-display font-extrabold bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary/30 transition-all rounded-2xl",
				children: loading ? "Sending..." : "Withdraw to M-Pesa"
			})
		]
	});
}
var TYPES = [
	{
		value: "all",
		label: "All types"
	},
	{
		value: "deposit",
		label: "Deposit"
	},
	{
		value: "withdrawal",
		label: "Withdrawal"
	}
];
function TransactionList() {
	const [type, setType] = (0, import_react.useState)("all");
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [loadError, setLoadError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		setLoading(true);
		setLoadError(null);
		walletApi.transactions().then((res) => {
			if (cancelled) return;
			if (res.success && res.data) {
				let filtered = res.data;
				if (type !== "all") filtered = res.data.filter((t) => t.Type === type);
				setItems(filtered);
			} else setLoadError(res.error || "Failed to load transactions");
		}).catch(() => {
			if (!cancelled) setLoadError("Failed to load transactions");
		}).finally(() => {
			if (!cancelled) setLoading(false);
		});
		return () => {
			cancelled = true;
		};
	}, [type]);
	const getStatusStyle = (status) => {
		switch (status) {
			case "completed": return {
				icon: CircleCheckBig,
				color: "text-success",
				label: "Completed"
			};
			case "pending": return {
				icon: Clock,
				color: "text-warning",
				label: "Pending"
			};
			case "rejected":
			case "failed": return {
				icon: CircleX,
				color: "text-destructive",
				label: "Failed"
			};
			default: return {
				icon: Clock,
				color: "text-muted-foreground",
				label: status
			};
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel-surface space-y-3 p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate text-sm text-muted-foreground",
					children: [items.length, " transactions"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: type,
					onValueChange: (v) => {
						setType(v);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "w-36 shrink-0 bg-elevated border-border focus:border-primary focus:ring-primary rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						className: "bg-[#12121e] border-border",
						children: TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: t.value,
							children: t.label
						}, t.value))
					})]
				})]
			}),
			loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-8 text-center text-sm text-muted-foreground",
				children: "Loading..."
			}),
			!loading && loadError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-8 text-center text-sm text-destructive",
				children: loadError
			}),
			!loading && !loadError && items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-8 text-center text-sm text-muted-foreground",
				children: "No transactions yet."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-1.5",
				children: items.map((t) => {
					const isCredit = t.Type === "deposit";
					const statusInfo = getStatusStyle(t.Status);
					const StatusIcon = statusInfo.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl bg-elevated/60 p-3 border border-border/30",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 min-w-0",
							children: [isCredit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleArrowDown, { className: "size-4 text-success shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleArrowUp, { className: "size-4 text-destructive shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-sm font-semibold capitalize",
									children: [t.Type, t.MpesaReceipt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [" · ", t.MpesaReceipt]
									}) : null]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: new Date(t.CreatedAt).toLocaleString("en-KE")
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shrink-0 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: cn("font-display font-bold tabular-nums", isCredit ? "text-success" : "text-foreground"),
								children: [isCredit ? "+" : "−", formatKES(t.Amount)]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-end gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { className: cn("size-3", statusInfo.color) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("text-[10px] uppercase tracking-widest", statusInfo.color),
									children: statusInfo.label
								})]
							})]
						})]
					}, t.ID);
				})
			})
		]
	});
}
//#endregion
export { WalletPage as component };
