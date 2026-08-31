import { r as __toESM } from "../_runtime.mjs";
import { p as require_jsx_runtime, u as Slot } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mockApi-B1o43JdS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var KENYAN_LOCAL_RE = /^[71]\d{8}$/;
function isValidKenyanLocal(local) {
	return KENYAN_LOCAL_RE.test(local);
}
function localPart(phone) {
	if (!phone) return "";
	const digits = phone.replace(/\D/g, "");
	return (digits.startsWith("254") ? digits.slice(3) : digits).slice(0, 9);
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var API_URL = "http://localhost:8080";
var ApiClient = class {
	token = null;
	constructor() {
		if (typeof window !== "undefined") this.token = localStorage.getItem("dotpesa_token");
	}
	setToken(token) {
		this.token = token;
		if (typeof window !== "undefined") localStorage.setItem("dotpesa_token", token);
	}
	clearToken() {
		this.token = null;
		if (typeof window !== "undefined") localStorage.removeItem("dotpesa_token");
	}
	getToken() {
		return this.token;
	}
	async request(endpoint, options = {}) {
		const url = `${API_URL}${endpoint}`;
		const headers = {
			"Content-Type": "application/json",
			...options.headers
		};
		if (this.token) headers["Authorization"] = `Bearer ${this.token}`;
		try {
			const response = await fetch(url, {
				...options,
				headers
			});
			const data = await response.json();
			if (!response.ok) {
				if (response.status === 401) {
					this.clearToken();
					if (typeof window !== "undefined" && !window.location.pathname.includes("/login")) window.location.href = "/login";
				}
				return {
					success: false,
					error: data.error || "Request failed",
					code: data.code
				};
			}
			return data;
		} catch (error) {
			console.error("[API] Request error:", error);
			return {
				success: false,
				error: error instanceof Error ? error.message : "Network error"
			};
		}
	}
	get(endpoint) {
		return this.request(endpoint, { method: "GET" });
	}
	post(endpoint, body) {
		return this.request(endpoint, {
			method: "POST",
			body: body ? JSON.stringify(body) : void 0
		});
	}
	patch(endpoint, body) {
		return this.request(endpoint, {
			method: "PATCH",
			body: body ? JSON.stringify(body) : void 0
		});
	}
	delete(endpoint) {
		return this.request(endpoint, { method: "DELETE" });
	}
};
var api = new ApiClient();
var authApi$1 = {
	async signup(data) {
		const response = await api.post("/api/auth/signup", data);
		if (response.success && response.data) api.setToken(response.data.token);
		return response;
	},
	async login(data) {
		const response = await api.post("/api/auth/login", data);
		if (response.success && response.data) api.setToken(response.data.token);
		return response;
	},
	async adminLogin(data) {
		const response = await api.post("/api/auth/admin/login", data);
		if (response.success && response.data) api.setToken(response.data.token);
		return response;
	},
	logout() {
		api.clearToken();
	},
	async getProfile() {
		return api.get("/api/auth/profile");
	},
	async updateUsername(username) {
		return api.patch("/api/auth/profile", { username });
	},
	async updatePhone(phone) {
		return api.patch("/api/auth/profile", { phone });
	},
	async requestPasswordReset(email) {
		return api.post("/api/auth/password-reset/request", { email });
	}
};
var WALLET_LIMITS = {
	minDepositKES: 200,
	maxWithdrawalKES: 1e5,
	minBetKES: 10,
	maxCashoutKES: 1e6
};
var walletApi$1 = {
	async getBalance() {
		return api.get("/api/wallet/balance");
	},
	async getTransactions() {
		return api.get("/api/wallet/transactions");
	},
	async depositInitiate(data) {
		return api.post("/api/wallet/deposit/mpesa", data);
	},
	async withdraw(data) {
		return api.post("/api/wallet/withdraw", data);
	}
};
var influencerApi = {
	async getMockMpesaBalance() {
		return api.get("/api/influencer/mpesa/balance");
	},
	async withdrawToMockMpesa(amount) {
		return api.post("/api/influencer/withdraw", { amount });
	},
	async withdrawFromMockMpesa(amount) {
		return api.post("/api/influencer/mpesa/withdraw", { amount });
	},
	async getTransactions() {
		return api.get("/api/influencer/transactions");
	}
};
var gameApi$1 = {
	async getState() {
		return api.get("/api/game/state");
	},
	async getHistory() {
		return api.get("/api/game/history");
	},
	async placeBet(data) {
		return api.post("/api/game/bet", data);
	},
	async cashout(box) {
		return api.post("/api/game/cashout", { box });
	},
	async getRoundDebug() {
		return api.get("/api/game/admin/round-debug");
	}
};
var state = {
	session: null,
	mode: "demo",
	balances: {
		demo: 5e4,
		real: 0
	},
	transactions: [],
	responsible: {
		depositLimit: null,
		selfExcluded: false,
		sessionReminder: true
	}
};
var MIN_BOTS = 20;
var BOT_NAMES = [
	"LuckyPlayer7",
	"CryptoKing",
	"MpesaMaster",
	"CrashHunter",
	"HighRoller99",
	"BetQueen",
	"ProfitMaker",
	"RiskTaker",
	"MoneyMagnet",
	"JackpotSeeker",
	"ApexGambler",
	"CasinoPro",
	"BetSlayer",
	"WinningEdge",
	"FortuneChaser",
	"MegaStack",
	"GoldRush",
	"DiamondHands",
	"WolfOfWallSt",
	"MoonShot",
	"ThunderBets",
	"LightningCash",
	"StormChaser",
	"HurricaneBets",
	"TornadoWin",
	"AceHigh",
	"KingOfBets",
	"QueenOfSpades",
	"RoyalFlush",
	"StraightFlush",
	"FullHouse",
	"FourOfAKind",
	"ThreeOfAKind",
	"TwoPair",
	"OnePair",
	"HighCard",
	"DealerBot",
	"RNGesus",
	"ProvablyFair",
	"BlockchainBet",
	"CryptoPesa",
	"BitcoinBoss",
	"EthereumElite",
	"SolanaSage",
	"PolygonPro",
	"CardanoKing",
	"AvalancheAce",
	"FantomFlyer",
	"NearNoble",
	"CosmosCrusher",
	"KenyaKing",
	"NairobiNoble",
	"MombasaMaverick",
	"KisumuKnight",
	"EldoretEagle",
	"ThikaTiger",
	"NakuruNinja",
	"MalindiMystic",
	"DianiDiamond",
	"LamuLegend",
	"SafariSam",
	"MaasaiMara",
	"Kilimanjaro",
	"Serengeti",
	"VictoriaFalls",
	"Zambezi",
	"Okavango",
	"Namib",
	"Kalahari",
	"SaharaSun",
	"DesertStorm",
	"OasisFinder",
	"MirageChaser",
	"DuneRider",
	"CamelKing",
	"SavannaSprint",
	"JungleJump",
	"RainforestRumble",
	"CanyonCrusher",
	"DeltaDash",
	"WaveRider",
	"TideChaser",
	"CurrentSurfer",
	"DeepDiver",
	"CoralReef",
	"StarGazer",
	"NebulaNavigator",
	"GalaxyGambler",
	"CosmicCrash",
	"AstroBet",
	"MeteorMania",
	"CometChaser",
	"AsteroidAce",
	"OrbitKing",
	"SaturnSage",
	"NeptuneNoble",
	"UranusUniverse",
	"PlutoPlayer",
	"MercuryMaster",
	"VenusVibe",
	"MarsMarauder",
	"JupiterJoker",
	"SolarSurfer",
	"LunarLucky",
	"StellarStar",
	"AlphaWolf",
	"BetaBear",
	"GammaGorilla",
	"DeltaDragon",
	"EpsilonEagle",
	"ZetaZebra",
	"EtaElephant",
	"ThetaTiger",
	"IotaIguana",
	"KappaKoala",
	"LambdaLion",
	"MuMoose",
	"NuNarwhal",
	"XiXerus",
	"OmicronOctopus",
	"PiPanther",
	"RhoRhino",
	"SigmaShark",
	"TauTurtle",
	"UpsilonUnicorn",
	"ZeusBet",
	"AthenaAce",
	"ApolloApex",
	"HermesHigh",
	"AresRisk",
	"PoseidonProfit",
	"HadesHighRoller",
	"HeraHunter",
	"DemeterDiamond",
	"DionysusDare",
	"OdinOdds",
	"ThorThunder",
	"LokiLucky",
	"FreyaFortune",
	"BaldurBet",
	"TyrTitan",
	"HeimdallHigh",
	"SkadiSkill",
	"FreyjaFlush",
	"NjordNoble",
	"KenteKing",
	"AshantiAce",
	"ZuluZeal",
	"XhosaXpert",
	"YorubaYolo",
	"IgboIcon",
	"HausaHigh",
	"BerberBet",
	"NubianNoble",
	"MaliMystic",
	"SonghaiStar",
	"GhanaGold",
	"BeninBronze",
	"DahomeyDiamond",
	"KongoKing",
	"LubaLegend",
	"LundaLucky",
	"BembaBold",
	"ChewaChampion",
	"ShonaShark",
	"PixelPro",
	"ByteBet",
	"CacheCash",
	"KernelKing",
	"DataDare",
	"CloudChaser",
	"ServerSage",
	"FirewallFlyer",
	"RouterRider",
	"GatewayGambler",
	"AlgorithmAce",
	"CodeCrusher",
	"ScriptSurfer",
	"BinaryBoss",
	"HexHunter",
	"NodeNoble",
	"PackagePro",
	"StreamStar",
	"BufferBet",
	"CacheCrusher",
	"ZigZagZephyr",
	"QuantumQuest",
	"NovaNexus",
	"VortexVibe",
	"EclipseEdge",
	"PhantomPulse",
	"RadiantRush",
	"ShadowStrike",
	"TitanTact",
	"VelocityVault",
	"ZenithZest",
	"ApexAurora",
	"BlitzBolt",
	"CrimsonCrown",
	"DriftDynamo",
	"EchoEmber",
	"FrostFury",
	"GlimmerGhost",
	"HaloHavoc",
	"InfernoIris",
	"JadeJaguar",
	"KarmaKnight",
	"LunarLynx",
	"MysticMirage",
	"NebulaNova",
	"ObsidianOmen",
	"PrismPhantom",
	"QuakeQuasar",
	"RavenReign",
	"SableSage",
	"TempestTide",
	"UmbraUnity",
	"ViperVengeance",
	"WraithWarden",
	"XenonXplorer",
	"YukiYokai",
	"ZenithZodiac"
];
var bots = [];
var gameInterval = null;
var gameState = {
	phase: "waiting",
	roundId: 1,
	multiplier: 1,
	countdown: 5,
	history: [
		1.02,
		1.45,
		2.1,
		1.08,
		3.5,
		1.15,
		1.67,
		4.2,
		1.03,
		1.89
	],
	liveBets: []
};
var authApi = {
	async login(email, password) {
		const result = await authApi$1.login({
			email,
			password
		});
		if (result.success && result.data) {
			state.session = {
				token: result.data.token,
				user: result.data.user
			};
			state.mode = "demo";
			await refreshBalances();
			startBalancePolling();
			notifyListeners();
			return {
				ok: true,
				session: state.session
			};
		}
		return {
			ok: false,
			error: result.error || "Login failed"
		};
	},
	async signup(data) {
		const result = await authApi$1.signup(data);
		if (result.success && result.data) {
			state.session = {
				token: result.data.token,
				user: result.data.user
			};
			state.mode = "demo";
			await refreshBalances();
			startBalancePolling();
			notifyListeners();
			return {
				ok: true,
				session: state.session
			};
		}
		return {
			ok: false,
			error: result.error || "Signup failed"
		};
	},
	async adminLogin(email, password) {
		const result = await authApi$1.adminLogin({
			email,
			password
		});
		if (result.success && result.data) {
			state.session = {
				token: result.data.token,
				user: result.data.user
			};
			state.mode = "real";
			await refreshBalances();
			startBalancePolling();
			notifyListeners();
			return {
				ok: true,
				session: state.session
			};
		}
		return {
			ok: false,
			error: result.error || "Login failed"
		};
	},
	logout() {
		authApi$1.logout();
		state.session = null;
		state.balances = {
			demo: 5e4,
			real: 0
		};
		state.mode = "demo";
		notifyListeners();
		return { ok: true };
	},
	me() {
		return state.session;
	},
	async updatePhone(phone) {
		const result = await authApi$1.updatePhone(phone);
		if (result.success) {
			if (state.session) {
				state.session = {
					...state.session,
					user: {
						...state.session.user,
						phone
					}
				};
				notifyListeners();
			}
			return { ok: true };
		}
		return {
			ok: false,
			error: result.error || "Failed to update phone number"
		};
	},
	async forgotPassword(email) {
		const result = await authApi$1.requestPasswordReset(email);
		return result.success ? { ok: true } : {
			ok: false,
			error: result.error || "Failed to send reset email"
		};
	},
	async verifyOtp(_code) {
		return {
			ok: false,
			error: "OTP verification not available — password reset uses an email link"
		};
	},
	async resetPassword(_password) {
		return {
			ok: false,
			error: "Password reset not available here — follow the link in the reset email"
		};
	}
};
var walletApi = {
	async depositInitiate(phone, amount) {
		const result = await walletApi$1.depositInitiate({
			phone,
			amount
		});
		if (result.success && result.data) return {
			ok: true,
			transactionId: result.data.transactionId
		};
		return {
			ok: false,
			error: result.error || "Deposit failed"
		};
	},
	async depositStatus(transactionId) {
		const result = await walletApi$1.getTransactions();
		if (result.success && result.data) {
			const tx = result.data.find((t) => t.ID === transactionId);
			if (tx?.Status === "completed") return { status: "success" };
			if (tx?.Status === "rejected") return { status: "failed" };
		}
		return { status: "pending" };
	},
	async withdraw(amount, phone) {
		if (state.session?.user.role === "influencer") {
			const result = await influencerApi.withdrawToMockMpesa(amount);
			if (result.success && result.data) {
				applyBalanceDelta("real", -amount);
				return { ok: true };
			}
			return {
				ok: false,
				error: result.error || "Withdrawal failed"
			};
		}
		const result = await walletApi$1.withdraw({
			amount,
			phone
		});
		if (result.success) return { ok: true };
		return {
			ok: false,
			error: result.error || "Withdrawal failed"
		};
	},
	transactions() {
		return walletApi$1.getTransactions();
	},
	setMode(mode) {
		state.mode = mode;
		if (typeof window !== "undefined") localStorage.setItem("dotpesa_mode", mode);
		notifyListeners();
	},
	mode() {
		return state.mode;
	},
	limits: () => ({
		minDeposit: WALLET_LIMITS.minDepositKES,
		maxWithdraw: WALLET_LIMITS.maxWithdrawalKES,
		minStake: WALLET_LIMITS.minBetKES,
		maxSinglePayout: WALLET_LIMITS.maxCashoutKES
	})
};
var gameApi = {
	async placeBet(box, amount, mode) {
		if (!state.session) {
			if (state.balances.demo < amount) return {
				ok: false,
				error: "Insufficient demo balance"
			};
			applyBalanceDelta("demo", -amount);
			return {
				ok: true,
				betId: `guest_${Date.now()}_${box}`
			};
		}
		const result = await gameApi$1.placeBet({
			box,
			amount,
			currency: mode
		});
		if (result.success && result.data) {
			applyBalanceDelta(mode, -amount);
			return {
				ok: true,
				betId: result.data.betId
			};
		}
		return {
			ok: false,
			error: result.error || "Bet failed"
		};
	},
	async cashout(box, mode) {
		if (!state.session) return {
			ok: true,
			payout: 0,
			multiplier: 0
		};
		const result = await gameApi$1.cashout(box);
		if (result.success && result.data) {
			applyBalanceDelta(mode, result.data.payout);
			return {
				ok: true,
				payout: result.data.payout,
				multiplier: result.data.multiplier
			};
		}
		return {
			ok: false,
			error: result.error || "Cashout failed"
		};
	}
};
var profileApi = {
	responsible: () => state.responsible,
	updateResponsible(patch) {
		state.responsible = {
			...state.responsible,
			...patch
		};
		if (typeof window !== "undefined") localStorage.setItem("dotpesa_responsible", JSON.stringify(state.responsible));
		notifyListeners();
	}
};
var listeners = /* @__PURE__ */ new Set();
function subscribeState(fn) {
	listeners.add(fn);
	return () => {
		listeners.delete(fn);
	};
}
function notifyListeners() {
	listeners.forEach((fn) => fn());
}
function getState() {
	if (typeof window !== "undefined") {
		const savedMode = localStorage.getItem("dotpesa_mode");
		if (savedMode && (savedMode === "demo" || savedMode === "real")) state.mode = savedMode;
		const savedResponsible = localStorage.getItem("dotpesa_responsible");
		if (savedResponsible) try {
			state.responsible = JSON.parse(savedResponsible);
		} catch {}
	}
	return state;
}
function applyBalanceDelta(mode, delta) {
	state.balances[mode] = Math.max(0, Math.round((state.balances[mode] + delta) * 100) / 100);
	notifyListeners();
}
async function refreshBalances() {
	if (!state.session) {
		state.balances = {
			demo: 5e4,
			real: 0
		};
		notifyListeners();
		return;
	}
	try {
		const [profileRes, walletRes] = await Promise.all([authApi$1.getProfile(), walletApi$1.getBalance()]);
		let changed = false;
		if (profileRes.success && profileRes.data) {
			const demo = profileRes.data.demoBalance ?? 0;
			if (demo !== state.balances.demo) {
				state.balances.demo = demo;
				changed = true;
			}
		}
		if (walletRes.success && walletRes.data) {
			const real = walletRes.data.realBalance ?? 0;
			if (real !== state.balances.real) {
				state.balances.real = real;
				changed = true;
			}
		}
		if (changed) notifyListeners();
	} catch (error) {
		console.error("[Balance] Failed to refresh balances:", error);
	}
}
var pollingStarted = false;
function startBalancePolling() {
	if (pollingStarted || typeof window === "undefined") return;
	pollingStarted = true;
	setInterval(refreshBalances, 3e4);
	window.addEventListener("visibilitychange", () => {
		if (document.visibilityState === "visible") refreshBalances();
	});
	window.addEventListener("focus", () => refreshBalances());
}
var authInitStarted = false;
function initAuth() {
	if (authInitStarted || typeof window === "undefined") return;
	authInitStarted = true;
	const token = api.getToken();
	if (!token) {
		state.session = null;
		state.mode = "demo";
		state.balances = {
			demo: 5e4,
			real: 0
		};
		notifyListeners();
		initBots();
		return;
	}
	authApi$1.getProfile().then((result) => {
		if (result.success && result.data) {
			const profile = result.data;
			state.session = {
				token,
				user: {
					id: profile.id,
					username: profile.username,
					displayName: profile.displayName,
					phone: profile.phone,
					role: profile.role,
					canDebug: profile.canDebug
				}
			};
			state.mode = "demo";
			state.balances.demo = profile.demoBalance ?? 0;
			state.balances.real = profile.realBalance ?? 0;
			refreshBalances();
			startBalancePolling();
		} else {
			api.clearToken();
			state.session = null;
			state.mode = "demo";
			state.balances = {
				demo: 5e4,
				real: 0
			};
		}
		notifyListeners();
		initBots();
	}).catch(() => {
		api.clearToken();
		state.session = null;
		state.mode = "demo";
		state.balances = {
			demo: 5e4,
			real: 0
		};
		notifyListeners();
		initBots();
	});
}
if (typeof window !== "undefined") {
	initAuth();
	startGameLoop();
}
function initBots() {
	const numBots = Math.floor(Math.random() * 81) + MIN_BOTS;
	const shuffledNames = [...BOT_NAMES].sort(() => Math.random() - .5);
	bots = [];
	for (let i = 0; i < numBots && i < shuffledNames.length; i++) bots.push({
		id: `bot_${Date.now()}_${i}`,
		name: shuffledNames[i],
		active: true,
		box: Math.random() > .5 ? 1 : 2,
		amount: 0,
		cashedOutAt: null,
		hasBetThisRound: false
	});
	console.log(`[Bots] Initialized ${bots.length} bots`);
}
function getRandomBetAmount() {
	const weights = [
		10,
		20,
		50,
		100,
		200,
		500,
		1e3,
		2e3,
		5e3
	];
	const probabilities = [
		.25,
		.2,
		.15,
		.12,
		.1,
		.08,
		.05,
		.03,
		.02
	];
	let rand = Math.random();
	let cumulative = 0;
	for (let i = 0; i < weights.length; i++) {
		cumulative += probabilities[i];
		if (rand < cumulative) return weights[i];
	}
	return 100;
}
function getRandomCashoutMultiplier() {
	const weights = [
		1.05,
		1.1,
		1.2,
		1.5,
		2,
		3,
		5,
		10
	];
	const probabilities = [
		.25,
		.2,
		.15,
		.12,
		.1,
		.08,
		.05,
		.05
	];
	let rand = Math.random();
	let cumulative = 0;
	for (let i = 0; i < weights.length; i++) {
		cumulative += probabilities[i];
		if (rand < cumulative) return weights[i];
	}
	return 1.5;
}
function getRandomBox() {
	return Math.random() > .5 ? 1 : 2;
}
function processBotBets() {
	if (gameState.phase === "waiting") {
		bots.forEach((bot) => {
			bot.hasBetThisRound = false;
			bot.cashedOutAt = null;
			bot.amount = 0;
		});
		return;
	}
	if (gameState.phase === "running") {
		const availableBots = bots.filter((b) => !b.hasBetThisRound);
		const numToBet = Math.floor(Math.random() * Math.min(availableBots.length, 30)) + 5;
		for (let i = 0; i < numToBet && i < availableBots.length; i++) {
			const bot = availableBots[i];
			const amount = getRandomBetAmount();
			const box = getRandomBox();
			bot.hasBetThisRound = true;
			bot.amount = amount;
			bot.box = box;
			bot.cashedOutAt = null;
			gameState.liveBets.push({
				key: `bot_${bot.id}_${Date.now()}`,
				userId: bot.name,
				box,
				amount,
				cashedOutAt: null,
				payout: null,
				self: false
			});
		}
		const activeBets = gameState.liveBets.filter((bet) => bet.cashedOutAt === null && bet.userId !== "You");
		const numToCashout = Math.floor(Math.random() * Math.min(activeBets.length, 15)) + 3;
		for (let i = 0; i < numToCashout && i < activeBets.length; i++) {
			const bet = activeBets[i];
			const cashoutMultiplier = getRandomCashoutMultiplier();
			if (gameState.multiplier >= cashoutMultiplier) {
				const payout = Math.round(bet.amount * cashoutMultiplier * 100) / 100;
				bet.cashedOutAt = cashoutMultiplier;
				bet.payout = payout;
				const bot = bots.find((b) => b.name === bet.userId);
				if (bot) bot.cashedOutAt = cashoutMultiplier;
			}
		}
		notifyListeners();
	}
	if (gameState.phase === "crashed") {
		gameState.liveBets.forEach((bet) => {
			if (bet.cashedOutAt === null && bet.userId !== "You") {
				bet.cashedOutAt = 0;
				bet.payout = 0;
			}
		});
		notifyListeners();
	}
}
function startGameLoop() {
	if (gameInterval) return;
	gameInterval = setInterval(() => {
		switch (gameState.phase) {
			case "waiting":
				gameState.countdown -= .1;
				if (gameState.countdown <= 0) {
					gameState.phase = "running";
					gameState.multiplier = 1;
					gameState.countdown = 0;
					gameState.liveBets = [];
					setTimeout(() => processBotBets(), 100);
				}
				break;
			case "running":
				const increment = .02 + Math.random() * .03;
				gameState.multiplier = Math.round((gameState.multiplier + increment) * 100) / 100;
				if (Math.random() < .3) processBotBets();
				const crashPoint = 1.5 + Math.random() * 18.5;
				if (gameState.multiplier >= crashPoint) {
					gameState.phase = "crashed";
					gameState.history.unshift(gameState.multiplier);
					if (gameState.history.length > 50) gameState.history.pop();
					processBotBets();
					setTimeout(() => {
						gameState.phase = "waiting";
						gameState.countdown = 5 + Math.random() * 3;
						gameState.roundId++;
						gameState.liveBets = [];
						bots.forEach((bot) => {
							bot.hasBetThisRound = false;
							bot.cashedOutAt = null;
							bot.amount = 0;
						});
						notifyListeners();
					}, 3e3);
				}
				break;
			case "crashed": break;
		}
		notifyListeners();
	}, 100);
}
if (typeof window !== "undefined") setInterval(() => {
	if (gameState.phase === "running" && bots.length > 0) {
		const activeBots = bots.filter((b) => !b.hasBetThisRound);
		if (activeBots.length > 0 && Math.random() < .2) {
			const numNew = Math.floor(Math.random() * Math.min(activeBots.length, 5)) + 1;
			for (let i = 0; i < numNew && i < activeBots.length; i++) {
				const bot = activeBots[i];
				const amount = getRandomBetAmount();
				const box = getRandomBox();
				bot.hasBetThisRound = true;
				bot.amount = amount;
				bot.box = box;
				gameState.liveBets.push({
					key: `bot_${bot.id}_${Date.now()}`,
					userId: bot.name,
					box,
					amount,
					cashedOutAt: null,
					payout: null,
					self: false
				});
				notifyListeners();
			}
		}
	}
}, 2e3);
function formatKES(n) {
	return new Intl.NumberFormat("en-KE", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(n);
}
function multiplierTier(m) {
	if (m < 2) return "low";
	if (m <= 10) return "mid";
	return "high";
}
function maskPhone(phone) {
	if (!phone) return "";
	return `${phone.slice(0, 4)}***${phone.slice(-2)}`;
}
var LIMITS = {
	minStake: WALLET_LIMITS.minBetKES,
	minDeposit: WALLET_LIMITS.minDepositKES,
	maxWithdraw: WALLET_LIMITS.maxWithdrawalKES,
	maxSinglePayout: WALLET_LIMITS.maxCashoutKES
};
//#endregion
export { subscribeState as _, applyBalanceDelta as a, formatKES as c, getState as d, isValidKenyanLocal as f, profileApi as g, multiplierTier as h, Label as i, gameApi as l, maskPhone as m, Input as n, authApi as o, localPart as p, LIMITS as r, cn as s, Button as t, gameApi$1 as u, walletApi as v };
