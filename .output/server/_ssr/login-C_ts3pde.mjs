import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Logo } from "./Logo-B-OUHQbS.mjs";
import { f as lazyRouteComponent, h as Link, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-C_ts3pde.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./login--FDh1JU4.mjs");
var Route = createFileRoute("/login")({
	head: () => ({ meta: [
		{ title: "Log in — BoostPesa" },
		{
			name: "description",
			content: "Sign in to your BoostPesa account to play crash and manage your M-Pesa wallet."
		},
		{
			property: "og:title",
			content: "Log in — BoostPesa"
		},
		{
			property: "og:description",
			content: "Sign in to your BoostPesa account to play crash and manage your M-Pesa wallet."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function AuthShell({ title, subtitle, children, footer }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-8" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel-surface p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-2xl font-extrabold text-primary",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-6 mt-1 text-sm text-muted-foreground",
							children: subtitle
						}),
						children
					]
				}),
				footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: footer
				})
			]
		})
	});
}
//#endregion
export { Route as n, AuthShell as t };
