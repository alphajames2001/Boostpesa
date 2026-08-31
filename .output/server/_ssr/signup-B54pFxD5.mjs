import { r as __toESM } from "../_runtime.mjs";
import { n as CheckboxIndicator, p as require_jsx_runtime, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AuthShell } from "./login-C_ts3pde.mjs";
import { f as isValidKenyanLocal, i as Label, n as Input, o as authApi, s as cn, t as Button } from "./mockApi-B1o43JdS.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { T as CircleCheckBig, h as Lock, i as User, j as Check, p as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-B54pFxD5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
function SignupPage() {
	const navigate = useNavigate();
	const [form, setForm] = (0, import_react.useState)({
		username: "",
		email: "",
		phone: "",
		password: "",
		confirm: ""
	});
	const [terms, setTerms] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const set = (k) => (e) => setForm((f) => ({
		...f,
		[k]: e.target.value
	}));
	const setPhone = (e) => {
		const digits = e.target.value.replace(/\D/g, "").slice(0, 9);
		setForm((f) => ({
			...f,
			phone: digits
		}));
	};
	const phoneValid = isValidKenyanLocal(form.phone);
	async function submit(e) {
		e.preventDefault();
		setError(null);
		if (form.username.length < 3) return setError("Username must be at least 3 characters");
		if (form.username.length > 30) return setError("Username must be less than 30 characters");
		if (!form.email || !form.email.includes("@")) return setError("Enter a valid email address");
		if (!phoneValid) return setError("Enter a valid M-Pesa number (07... or 01...)");
		if (form.password.length < 8) return setError("Password must be at least 8 characters");
		if (form.password !== form.confirm) return setError("Passwords do not match");
		if (!terms) return setError("You must accept the terms to continue");
		setLoading(true);
		const res = await authApi.signup({
			username: form.username,
			email: form.email,
			phone: `254${form.phone}`,
			password: form.password
		});
		setLoading(false);
		if (!res.ok) return setError(res.error);
		toast.success("Account created — KES 50,000 demo balance added");
		navigate({ to: "/" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Create your account",
		subtitle: "You must be 18+ to play. Demo balance included.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Already registered?",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				className: "font-semibold text-primary hover:underline",
				children: "Log in"
			})
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "username",
							className: "text-muted-foreground",
							children: "Username"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "username",
								value: form.username,
								onChange: set("username"),
								className: "h-12 bg-elevated border-border focus:border-primary focus:ring-primary rounded-2xl pl-9",
								placeholder: "Choose a unique username",
								autoComplete: "username"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-muted-foreground",
							children: "3-30 characters, letters and numbers only"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "email",
						className: "text-muted-foreground",
						children: "Email address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							type: "email",
							value: form.email,
							onChange: set("email"),
							className: "h-12 bg-elevated border-border focus:border-primary focus:ring-primary rounded-2xl pl-9",
							placeholder: "your@email.com",
							autoComplete: "email"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "phone",
							className: "text-muted-foreground",
							children: "M-Pesa phone number"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-12 items-stretch overflow-hidden rounded-2xl bg-elevated border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex items-center border-r border-border/50 px-3 text-sm font-semibold text-muted-foreground",
								children: "+254"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "phone",
								inputMode: "numeric",
								value: form.phone,
								onChange: setPhone,
								className: "h-full flex-1 rounded-none border-0 bg-transparent focus:ring-0",
								placeholder: "7XXXXXXXX or 1XXXXXXXX",
								autoComplete: "tel-national"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-muted-foreground",
							children: "Used for M-Pesa deposits and withdrawals — you can use a different number later"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "password",
							className: "text-muted-foreground",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "password",
								type: "password",
								value: form.password,
								onChange: set("password"),
								className: "h-12 bg-elevated border-border focus:border-primary focus:ring-primary rounded-2xl pl-9",
								autoComplete: "new-password",
								placeholder: "Min 8 characters"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "confirm",
							className: "text-muted-foreground",
							children: "Confirm password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "confirm",
								type: "password",
								value: form.confirm,
								onChange: set("confirm"),
								className: "h-12 bg-elevated border-border focus:border-primary focus:ring-primary rounded-2xl pl-9",
								autoComplete: "new-password",
								placeholder: "Confirm your password"
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-start gap-3 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
						checked: terms,
						onCheckedChange: (v) => setTerms(v === true),
						className: "mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary rounded"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I am 18 or older and accept the Terms & Conditions and Privacy Policy." })]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-destructive",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: loading,
					className: "h-12 w-full font-display font-extrabold bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary/30 transition-all rounded-2xl",
					children: loading ? "Creating..." : "Create account"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rounded-2xl bg-elevated p-3 text-xs text-muted-foreground border border-border/50",
					children: [
						"By creating an account, you get:",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] text-muted-foreground/70",
							children: [
								"• KES 50,000 demo balance to practice",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"• Real money play with M-Pesa deposits",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"• Provably fair crash game"
							]
						})
					]
				})
			]
		})
	});
}
//#endregion
export { SignupPage as component };
