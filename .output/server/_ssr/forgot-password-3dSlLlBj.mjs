import { r as __toESM } from "../_runtime.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AuthShell } from "./login-C_ts3pde.mjs";
import { i as Label, n as Input, o as authApi, t as Button } from "./mockApi-B1o43JdS.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { P as ArrowLeft, d as Phone, g as Key, h as Lock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-password-3dSlLlBj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ForgotPasswordPage() {
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)("phone");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [otp, setOtp] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function submit(e) {
		e.preventDefault();
		setError(null);
		setLoading(true);
		if (step === "phone") {
			const res = await authApi.forgotPassword(phone);
			setLoading(false);
			if (!res.ok) return setError(res.error);
			toast.success(`Code sent by SMS (mock: ${res.otpHint})`);
			return setStep("otp");
		}
		if (step === "otp") {
			const res = await authApi.verifyOtp(otp);
			setLoading(false);
			if (!res.ok) return setError(res.error);
			return setStep("password");
		}
		if (password !== confirm) {
			setLoading(false);
			return setError("Passwords do not match");
		}
		const res = await authApi.resetPassword(password);
		setLoading(false);
		if (!res.ok) return setError(res.error);
		toast.success("Password updated — you can log in now");
		navigate({ to: "/login" });
	}
	const copy = {
		phone: {
			title: "Forgot password",
			sub: "Enter the phone number on your account.",
			icon: Phone
		},
		otp: {
			title: "Verify your phone",
			sub: `We sent a 6-digit code to ${phone}.`,
			icon: Key
		},
		password: {
			title: "Set a new password",
			sub: "Choose a password of at least 8 characters.",
			icon: Lock
		}
	}[step];
	copy.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: copy.title,
		subtitle: copy.sub,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/login",
			className: "font-semibold text-primary hover:underline flex items-center gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3" }), "Back to log in"]
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1.5",
					children: [
						"phone",
						"otp",
						"password"
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1 flex-1 rounded-full ${[
						"phone",
						"otp",
						"password"
					].indexOf(step) >= i ? "bg-primary" : "bg-elevated"}` }, s))
				}),
				step === "phone" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "phone",
						className: "text-muted-foreground",
						children: "Phone number"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "phone",
							inputMode: "tel",
							placeholder: "254712345678",
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							className: "h-12 bg-elevated border-border focus:border-primary focus:ring-primary rounded-2xl pl-9"
						})]
					})]
				}),
				step === "otp" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "otp",
						className: "text-muted-foreground",
						children: "6-digit code"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "otp",
							inputMode: "numeric",
							maxLength: 6,
							value: otp,
							onChange: (e) => setOtp(e.target.value.replace(/\D/g, "")),
							className: "h-12 bg-elevated border-border focus:border-primary focus:ring-primary rounded-2xl text-center font-display text-xl font-extrabold tracking-[0.5em] pl-9"
						})]
					})]
				}),
				step === "password" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "new",
						className: "text-muted-foreground",
						children: "New password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "new",
							type: "password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							className: "h-12 bg-elevated border-border focus:border-primary focus:ring-primary rounded-2xl pl-9"
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "confirm",
							type: "password",
							value: confirm,
							onChange: (e) => setConfirm(e.target.value),
							className: "h-12 bg-elevated border-border focus:border-primary focus:ring-primary rounded-2xl pl-9"
						})]
					})]
				})] }),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-destructive",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: loading,
					className: "h-12 w-full font-display font-extrabold bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary/30 transition-all rounded-2xl",
					children: loading ? "Please wait..." : step === "password" ? "Update password" : "Continue"
				})
			]
		})
	});
}
//#endregion
export { ForgotPasswordPage as component };
