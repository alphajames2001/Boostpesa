import { r as __toESM } from "../_runtime.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as formatKES, f as isValidKenyanLocal, g as profileApi, i as Label, m as maskPhone, n as Input, o as authApi, p as localPart, s as cn, t as Button, v as walletApi } from "./mockApi-B1o43JdS.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { M as Bell, N as Ban, b as Crown, c as Settings, d as Phone, m as LogOut, n as Wallet, s as Shield, x as Coins } from "../_libs/lucide-react.mjs";
import { a as useMockState, i as useHydrated, n as Navbar, t as LimitsInfo } from "./LimitsInfo-n6tW5Gg7.mjs";
import { t as Switch } from "./switch-DUbncaYe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-DWa-femI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const state = useMockState();
	const hydrated = useHydrated();
	const navigate = useNavigate();
	const user = state.session?.user;
	const rg = state.responsible;
	const [limitInput, setLimitInput] = (0, import_react.useState)(rg.depositLimit ? String(rg.depositLimit) : "");
	const [phoneInput, setPhoneInput] = (0, import_react.useState)("");
	const [phoneDirty, setPhoneDirty] = (0, import_react.useState)(false);
	const [savingPhone, setSavingPhone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!phoneDirty) setPhoneInput(localPart(user?.phone));
	}, [user?.phone, phoneDirty]);
	const phoneValid = isValidKenyanLocal(phoneInput);
	async function savePhone() {
		if (!phoneValid) {
			toast.error("Enter a valid M-Pesa number (07... or 01...)");
			return;
		}
		setSavingPhone(true);
		const res = await authApi.updatePhone(`254${phoneInput}`);
		setSavingPhone(false);
		if (!res.ok) {
			toast.error(res.error);
			return;
		}
		setPhoneDirty(false);
		toast.success("Phone number updated");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl space-y-4 p-3 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-2xl font-extrabold flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-6 text-primary" }), "Profile"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LimitsInfo, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "panel-surface p-5",
					children: hydrated && user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-purple-600 font-display text-lg font-extrabold uppercase text-white shadow-lg shadow-primary/20",
							children: user.username.slice(0, 2)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate font-display text-xl font-extrabold flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-4 text-warning" }),
										"@",
										user.username
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										"Role: ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold capitalize text-primary",
											children: user.role
										}),
										user.canDebug && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 text-warning",
											children: "(debug)"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3" }), user.phone ? `M-Pesa: ${maskPhone(user.phone)}` : "No M-Pesa number on file"]
								})
							]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "You are browsing as a guest. Log in to place bets and manage your wallet."
					})
				}),
				hydrated && user && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel-surface space-y-3 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-base font-extrabold flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-primary" }), "M-Pesa number"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Used to prefill deposits and withdrawals — you can still send to a different number on either form."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "pphone",
								className: "text-muted-foreground",
								children: "Phone number"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-11 flex-1 items-stretch overflow-hidden rounded-2xl bg-elevated border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex items-center border-r border-border/50 px-3 text-sm font-semibold text-muted-foreground",
										children: "+254"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "pphone",
										inputMode: "numeric",
										value: phoneInput,
										onChange: (e) => {
											setPhoneDirty(true);
											setPhoneInput(e.target.value.replace(/\D/g, "").slice(0, 9));
										},
										className: "h-full flex-1 rounded-none border-0 bg-transparent focus:ring-0",
										placeholder: "7XXXXXXXX or 1XXXXXXXX",
										autoComplete: "tel-national"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									className: "h-11 rounded-2xl bg-elevated hover:bg-primary/10 hover:text-primary transition-colors",
									onClick: savePhone,
									disabled: savingPhone || !phoneValid,
									children: savingPhone ? "Saving..." : "Save"
								})]
							}),
							phoneInput !== "" && !phoneValid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-destructive",
								children: "Enter a valid number (07... or 01...)"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-base font-extrabold flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "size-4 text-warning" }), "Play mode"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-sm text-muted-foreground",
							children: "Demo balance is play money and never pays out."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-2 sm:grid-cols-2",
							children: ["demo", "real"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => walletApi.setMode(m),
								className: cn("rounded-2xl bg-elevated p-4 text-left transition-all hover:scale-[1.02]", state.mode === m ? "ring-2 ring-primary shadow-lg shadow-primary/20" : "hover:bg-accent"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [m === "demo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-4 text-warning" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-widest text-muted-foreground",
										children: m
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-extrabold tabular-nums",
									children: hydrated ? `KES ${formatKES(state.balances[m])}` : "—"
								})]
							}, m))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel-surface space-y-4 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-base font-extrabold flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-4 text-success" }), "Responsible gambling"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Tools to keep your play under control."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "dlimit",
								className: "text-muted-foreground",
								children: "Daily deposit limit (KES)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "dlimit",
									inputMode: "decimal",
									placeholder: "No limit set",
									value: limitInput,
									onChange: (e) => setLimitInput(e.target.value.replace(/[^\d]/g, "")),
									className: "h-11 bg-elevated border-border focus:border-primary focus:ring-primary rounded-2xl"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									className: "h-11 rounded-2xl bg-elevated hover:bg-primary/10 hover:text-primary transition-colors",
									onClick: () => {
										profileApi.updateResponsible({ depositLimit: limitInput ? Number(limitInput) : null });
										toast.success(limitInput ? `Deposit limit set to KES ${limitInput}` : "Deposit limit removed");
									},
									children: "Save"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "size-4 text-destructive" }),
							label: "Self-exclusion",
							hint: "Blocks all betting and deposits for 30 days.",
							checked: rg.selfExcluded,
							onChange: (v) => {
								profileApi.updateResponsible({ selfExcluded: v });
								toast(v ? "Self-exclusion enabled" : "Self-exclusion disabled");
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4 text-warning" }),
							label: "Session reminders",
							hint: "Get a reminder every 60 minutes of play.",
							checked: rg.sessionReminder,
							onChange: (v) => profileApi.updateResponsible({ sessionReminder: v })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					className: "h-12 w-full font-display font-bold rounded-2xl bg-elevated hover:bg-destructive/10 hover:text-destructive transition-colors flex items-center gap-2",
					onClick: async () => {
						await authApi.logout();
						navigate({ to: "/login" });
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), "Log out"]
				})
			]
		})]
	});
}
function ToggleRow({ icon, label, hint, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl bg-elevated/60 p-4 border border-border/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 min-w-0",
			children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: hint
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			checked,
			onCheckedChange: onChange,
			className: "data-[state=checked]:bg-primary"
		})]
	});
}
//#endregion
export { ProfilePage as component };
