import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route$7 } from "./login-C_ts3pde.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { _ as House, t as Zap, u as RefreshCw } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cgi5N1gP.js
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var styles_default = "/assets/styles-Cn7L1EKl.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-8xl font-display font-bold text-primary animate-glow-pulse",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-2xl font-display text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-purple-600 px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4 mr-2" }), "Go home"]
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-16 text-warning mx-auto mb-4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-display font-bold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-purple-600 px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4 mr-2" }), "Try again"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-2xl border border-border bg-elevated px-6 py-3 text-sm font-bold text-foreground transition-all hover:bg-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4 mr-2" }), "Go home"]
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "BoostPesa — High-Energy Crash Betting" },
			{
				name: "description",
				content: "BoostPesa is a high-energy crash betting game with instant M-Pesa deposits and withdrawals in Kenya."
			},
			{
				name: "author",
				content: "BoostPesa"
			},
			{
				property: "og:title",
				content: "BoostPesa — High-Energy Crash Betting"
			},
			{
				property: "og:description",
				content: "BoostPesa is a high-energy crash betting game with instant M-Pesa deposits and withdrawals in Kenya."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#FF002F"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Orbitron:wght@400;500;600;700;800;900&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			position: "top-center",
			theme: "dark",
			richColors: true
		})]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-B7c_GX39.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "BoostPesa — High-Energy Crash Betting" },
		{
			name: "description",
			content: "BoostPesa crash: watch the multiplier climb, cash out before it crashes. Instant M-Pesa deposits and withdrawals in Kenya."
		},
		{
			property: "og:title",
			content: "BoostPesa — High-Energy Crash Betting"
		},
		{
			property: "og:description",
			content: "Watch the multiplier climb and cash out before the crash. Dual bets, auto-cashout and instant M-Pesa payouts."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./forgot-password-3dSlLlBj.mjs");
var Route$4 = createFileRoute("/forgot-password")({
	head: () => ({ meta: [
		{ title: "Reset password — BoostPesa" },
		{
			name: "description",
			content: "Reset your BoostPesa password using an SMS one-time code sent to your phone."
		},
		{
			property: "og:title",
			content: "Reset password — BoostPesa"
		},
		{
			property: "og:description",
			content: "Reset your BoostPesa password using an SMS one-time code sent to your phone."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./profile-DWa-femI.mjs");
var Route$3 = createFileRoute("/profile")({
	head: () => ({ meta: [
		{ title: "Profile & safer play — BoostPesa" },
		{
			name: "description",
			content: "Manage your BoostPesa account, switch between demo and real mode, and set deposit limits, session reminders and self-exclusion."
		},
		{
			property: "og:title",
			content: "Profile & safer play — BoostPesa"
		},
		{
			property: "og:description",
			content: "Manage your account, switch demo/real mode and set responsible-gambling controls."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./signup-B54pFxD5.mjs");
var Route$2 = createFileRoute("/signup")({
	head: () => ({ meta: [
		{ title: "Create account — BoostPesa" },
		{
			name: "description",
			content: "Open a BoostPesa account in seconds and start playing crash with M-Pesa deposits."
		},
		{
			property: "og:title",
			content: "Create account — BoostPesa"
		},
		{
			property: "og:description",
			content: "Open a BoostPesa account in seconds and start playing crash with M-Pesa deposits."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var BASE_URL = "https://dopesabet.com";
var Route$1 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "always",
				priority: "1.0"
			},
			{
				path: "/wallet",
				changefreq: "weekly",
				priority: "0.7"
			},
			{
				path: "/profile",
				changefreq: "monthly",
				priority: "0.5"
			},
			{
				path: "/login",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/signup",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/forgot-password",
				changefreq: "yearly",
				priority: "0.3"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter = () => import("./wallet-D6NpwIuE.mjs");
var Route = createFileRoute("/wallet")({
	head: () => ({ meta: [
		{ title: "Wallet — BoostPesa M-Pesa deposits & withdrawals" },
		{
			name: "description",
			content: "Top up via M-Pesa STK push, withdraw to your phone, and review your BoostPesa transaction history."
		},
		{
			property: "og:title",
			content: "Wallet — BoostPesa M-Pesa deposits & withdrawals"
		},
		{
			property: "og:description",
			content: "Top up via M-Pesa STK push, withdraw to your phone, and review your transaction history."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	ForgotPasswordRoute: Route$4.update({
		id: "/forgot-password",
		path: "/forgot-password",
		getParentRoute: () => Route$6
	}),
	LoginRoute: Route$7.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$6
	}),
	ProfileRoute: Route$3.update({
		id: "/profile",
		path: "/profile",
		getParentRoute: () => Route$6
	}),
	SignupRoute: Route$2.update({
		id: "/signup",
		path: "/signup",
		getParentRoute: () => Route$6
	}),
	SitemapDotxmlRoute: Route$1.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$6
	}),
	WalletRoute: Route.update({
		id: "/wallet",
		path: "/wallet",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
