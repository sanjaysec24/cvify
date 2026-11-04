import { d as jsxDevRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, H as HeadContent, S as Scripts, O as Outlet, l as lazyRouteComponent, d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as GoogleAuthProvider, s as setPersistence, o as onAuthStateChanged, g as getAuth, a as signOut, b as signInWithPopup, c as browserLocalPersistence } from "../_libs/firebase__auth.mjs";
import { c as getApps, g as getApp, i as initializeApp } from "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import { s as setDoc, d as doc, a as serverTimestamp, g as getFirestore } from "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { S as Sparkles, a as Sun, M as Moon, C as ChevronDown, U as User, F as FileText, b as FileCheckCorner, L as LogOut, X, c as Menu, d as Linkedin, G as Github } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/firebase__util.mjs";
import "../_libs/firebase__component.mjs";
import "../_libs/idb.mjs";
import "../_libs/firebase__webchannel-wrapper.mjs";
import "../_libs/@grpc/grpc-js.mjs";
import "process";
import "tls";
import "fs";
import "os";
import "net";
import "events";
import "http2";
import "http";
import "url";
import "dns";
import "zlib";
import "../_libs/@grpc/proto-loader.mjs";
import "path";
import "../_libs/lodash.camelcase.mjs";
import "../_libs/protobufjs.mjs";
import "../_libs/protobufjs__aspromise.mjs";
import "../_libs/protobufjs__base64.mjs";
import "../_libs/protobufjs__eventemitter.mjs";
import "../_libs/protobufjs__float.mjs";
import "../_libs/protobufjs__utf8.mjs";
import "../_libs/protobufjs__pool.mjs";
import "../_libs/long.mjs";
import "../_libs/protobufjs__codegen.mjs";
import "../_libs/protobufjs__fetch.mjs";
import "../_libs/protobufjs__path.mjs";
import "../_libs/re2js.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-yZ4n3zEm.css";
const ThemeContext = reactExports.createContext({
  theme: "dark",
  toggle: () => {
  }
});
function ThemeProvider({ children }) {
  const [theme, setTheme] = reactExports.useState("dark");
  reactExports.useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("theme");
    const initial = stored ?? "dark";
    setTheme(initial);
  }, []);
  reactExports.useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
    }
  }, [theme]);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    ThemeContext.Provider,
    {
      value: { theme, toggle: () => setTheme((t) => t === "dark" ? "light" : "dark") },
      children
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/components/theme-provider.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
const useTheme = () => reactExports.useContext(ThemeContext);
const firebaseConfig = {
  apiKey: void 0,
  authDomain: void 0,
  projectId: void 0,
  storageBucket: void 0,
  messagingSenderId: void 0,
  appId: void 0,
  measurementId: void 0
};
let app = null;
let _auth = null;
let _db = null;
function ensureApp() {
  if (typeof window === "undefined") {
    throw new Error("Firebase can only be used in the browser");
  }
  if (!app) {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  }
  return app;
}
function getFirebaseAuth() {
  if (!_auth) _auth = getAuth(ensureApp());
  return _auth;
}
function getDb() {
  if (!_db) _db = getFirestore(ensureApp());
  return _db;
}
new GoogleAuthProvider();
const Ctx = reactExports.createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const auth = getFirebaseAuth();
    setPersistence(auth, browserLocalPersistence).catch(() => {
    });
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);
  async function signInWithGoogle() {
    getFirebaseAuth();
    const result = await signInWithPopup();
    const u = result.user;
    try {
      await setDoc(
        doc(getDb(), "users", u.uid),
        {
          uid: u.uid,
          name: u.displayName ?? "",
          email: u.email ?? "",
          photoURL: u.photoURL ?? "",
          lastLogin: serverTimestamp()
        },
        { merge: true }
      );
    } catch (e) {
      console.warn("Failed to upsert user doc:", e);
    }
  }
  async function logout() {
    await signOut(getFirebaseAuth());
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Ctx.Provider, { value: { user, loading, signInWithGoogle, logout }, children }, void 0, false, {
    fileName: "/app/applet/src/components/auth-provider.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
function useAuth() {
  const ctx = reactExports.useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
function Navbar() {
  const { theme, toggle } = useTheme();
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = reactExports.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  async function handleLogout() {
    setOpen(false);
    setMobileMenuOpen(false);
    await logout();
    navigate({ to: "/" });
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("header", { className: "sticky top-0 z-50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "glass border-b border-border/50", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/", className: "flex items-center gap-2 group", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          motion.div,
          {
            whileHover: { rotate: 12 },
            className: "flex h-9 w-9 items-center justify-center rounded-xl bg-neon text-neon-foreground",
            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { className: "h-5 w-5", strokeWidth: 2.5 }, void 0, false, {
              fileName: "/app/applet/src/components/navbar.tsx",
              lineNumber: 51,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/navbar.tsx",
            lineNumber: 47,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-display text-lg font-bold tracking-tight", children: [
          "CVify",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-neon dark:text-neon", children: ".AI" }, void 0, false, {
            fileName: "/app/applet/src/components/navbar.tsx",
            lineNumber: 54,
            columnNumber: 20
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/navbar.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/navbar.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("nav", { className: "hidden items-center gap-8 text-sm font-medium md:flex", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Link,
          {
            to: "/",
            activeOptions: { exact: true },
            className: "hover:text-neon transition-colors",
            activeProps: { className: "text-neon font-semibold" },
            children: "Home"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/navbar.tsx",
            lineNumber: 60,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Link,
          {
            to: "/builder",
            className: "hover:text-neon transition-colors",
            activeProps: { className: "text-neon font-semibold" },
            children: "Builder"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/navbar.tsx",
            lineNumber: 68,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Link,
          {
            to: "/ats-checker",
            className: "hover:text-neon transition-colors",
            activeProps: { className: "text-neon font-semibold" },
            children: "ATS Checker"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/navbar.tsx",
            lineNumber: 75,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "/#features", className: "hover:text-neon transition-colors", children: "Features" }, void 0, false, {
          fileName: "/app/applet/src/components/navbar.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/navbar.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "button",
          {
            onClick: toggle,
            "aria-label": "Toggle theme",
            className: "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all",
            children: theme === "dark" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sun, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/components/navbar.tsx",
              lineNumber: 93,
              columnNumber: 35
            }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Moon, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/components/navbar.tsx",
              lineNumber: 93,
              columnNumber: 65
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/navbar.tsx",
            lineNumber: 88,
            columnNumber: 13
          },
          this
        ),
        loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-9 w-24 animate-pulse rounded-full bg-muted" }, void 0, false, {
          fileName: "/app/applet/src/components/navbar.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this) : user ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { ref, className: "relative", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              onClick: () => setOpen((v) => !v),
              className: "flex items-center gap-2 rounded-full border border-border bg-card pl-1 pr-3 py-1 hover:bg-accent transition",
              "aria-haspopup": "menu",
              "aria-expanded": open,
              children: [
                user.photoURL ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "img",
                  {
                    src: user.photoURL,
                    alt: user.displayName ?? "Profile",
                    referrerPolicy: "no-referrer",
                    className: "h-7 w-7 rounded-full object-cover"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/navbar.tsx",
                    lineNumber: 107,
                    columnNumber: 21
                  },
                  this
                ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-neon text-neon-foreground text-xs font-bold", children: (user.displayName ?? user.email ?? "U").charAt(0).toUpperCase() }, void 0, false, {
                  fileName: "/app/applet/src/components/navbar.tsx",
                  lineNumber: 114,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "hidden sm:inline text-sm font-medium max-w-[120px] truncate", children: user.displayName?.split(" ")[0] ?? "Account" }, void 0, false, {
                  fileName: "/app/applet/src/components/navbar.tsx",
                  lineNumber: 118,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { className: "h-4 w-4 opacity-60" }, void 0, false, {
                  fileName: "/app/applet/src/components/navbar.tsx",
                  lineNumber: 121,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/navbar.tsx",
              lineNumber: 100,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AnimatePresence, { children: open && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            motion.div,
            {
              initial: { opacity: 0, y: -6 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -6 },
              transition: { duration: 0.12 },
              className: "absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-border bg-popover shadow-xl z-50",
              role: "menu",
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-b border-border px-4 py-3", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "truncate text-sm font-semibold", children: user.displayName ?? "User" }, void 0, false, {
                    fileName: "/app/applet/src/components/navbar.tsx",
                    lineNumber: 134,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "truncate text-xs text-muted-foreground", children: user.email }, void 0, false, {
                    fileName: "/app/applet/src/components/navbar.tsx",
                    lineNumber: 137,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/navbar.tsx",
                  lineNumber: 133,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Link,
                  {
                    to: "/profile",
                    onClick: () => setOpen(false),
                    className: "flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-accent",
                    role: "menuitem",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(User, { className: "h-4 w-4" }, void 0, false, {
                        fileName: "/app/applet/src/components/navbar.tsx",
                        lineNumber: 145,
                        columnNumber: 25
                      }, this),
                      " My Profile"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/navbar.tsx",
                    lineNumber: 139,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Link,
                  {
                    to: "/builder",
                    onClick: () => setOpen(false),
                    className: "flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-accent",
                    role: "menuitem",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FileText, { className: "h-4 w-4" }, void 0, false, {
                        fileName: "/app/applet/src/components/navbar.tsx",
                        lineNumber: 153,
                        columnNumber: 25
                      }, this),
                      " My Resume"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/navbar.tsx",
                    lineNumber: 147,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Link,
                  {
                    to: "/ats-checker",
                    onClick: () => setOpen(false),
                    className: "flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-accent",
                    role: "menuitem",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FileCheckCorner, { className: "h-4 w-4 text-neon" }, void 0, false, {
                        fileName: "/app/applet/src/components/navbar.tsx",
                        lineNumber: 161,
                        columnNumber: 25
                      }, this),
                      " ATS Checker"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/navbar.tsx",
                    lineNumber: 155,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "button",
                  {
                    onClick: handleLogout,
                    className: "flex w-full items-center gap-2 px-4 py-2.5 text-sm text-destructive hover:bg-accent",
                    role: "menuitem",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LogOut, { className: "h-4 w-4" }, void 0, false, {
                        fileName: "/app/applet/src/components/navbar.tsx",
                        lineNumber: 168,
                        columnNumber: 25
                      }, this),
                      " Logout"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/navbar.tsx",
                    lineNumber: 163,
                    columnNumber: 23
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/navbar.tsx",
              lineNumber: 125,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/components/navbar.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/navbar.tsx",
          lineNumber: 99,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Link,
          {
            to: "/login",
            className: "hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity",
            children: "Sign in"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/navbar.tsx",
            lineNumber: 175,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "button",
          {
            onClick: () => setMobileMenuOpen((v) => !v),
            className: "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card md:hidden hover:bg-accent transition",
            "aria-label": "Toggle menu",
            children: mobileMenuOpen ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/components/navbar.tsx",
              lineNumber: 189,
              columnNumber: 33
            }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Menu, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/components/navbar.tsx",
              lineNumber: 189,
              columnNumber: 61
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/navbar.tsx",
            lineNumber: 184,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/navbar.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/navbar.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.2 },
        className: "border-t border-border/50 bg-background/95 px-6 py-4 md:hidden",
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("nav", { className: "flex flex-col gap-3 text-sm font-medium", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Link,
            {
              to: "/",
              activeOptions: { exact: true },
              onClick: () => setMobileMenuOpen(false),
              className: "rounded-xl px-3 py-2 hover:bg-accent transition-colors",
              activeProps: { className: "bg-neon/15 text-neon font-semibold" },
              children: "Home"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/navbar.tsx",
              lineNumber: 205,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Link,
            {
              to: "/builder",
              onClick: () => setMobileMenuOpen(false),
              className: "rounded-xl px-3 py-2 hover:bg-accent transition-colors",
              activeProps: { className: "bg-neon/15 text-neon font-semibold" },
              children: "Resume Builder"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/navbar.tsx",
              lineNumber: 214,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Link,
            {
              to: "/ats-checker",
              onClick: () => setMobileMenuOpen(false),
              className: "rounded-xl px-3 py-2 hover:bg-accent transition-colors",
              activeProps: { className: "bg-neon/15 text-neon font-semibold" },
              children: "ATS Checker"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/navbar.tsx",
              lineNumber: 222,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "a",
            {
              href: "/#features",
              onClick: () => setMobileMenuOpen(false),
              className: "rounded-xl px-3 py-2 hover:bg-accent transition-colors",
              children: "Features"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/navbar.tsx",
              lineNumber: 230,
              columnNumber: 17
            },
            this
          ),
          !user && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Link,
            {
              to: "/login",
              onClick: () => setMobileMenuOpen(false),
              className: "mt-2 inline-flex items-center justify-center rounded-full bg-neon px-4 py-2.5 text-sm font-bold text-neon-foreground",
              children: "Sign in"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/navbar.tsx",
              lineNumber: 238,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/navbar.tsx",
          lineNumber: 204,
          columnNumber: 15
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/navbar.tsx",
        lineNumber: 197,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/components/navbar.tsx",
      lineNumber: 195,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/navbar.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/navbar.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
const LINKEDIN = "https://www.linkedin.com/in/sanjay-kumar-b-67b7b532a/";
const GITHUB = "https://github.com/sanjaysec24";
function Footer() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("footer", { className: "mt-16 border-t border-border/60 bg-background/60", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-6 w-6 items-center justify-center rounded-md bg-neon text-neon-foreground", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { className: "h-3.5 w-3.5", strokeWidth: 2.5 }, void 0, false, {
        fileName: "/app/applet/src/components/footer.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/footer.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
        "Built by ",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-semibold text-foreground", children: "Zyphra community" }, void 0, false, {
          fileName: "/app/applet/src/components/footer.tsx",
          lineNumber: 15,
          columnNumber: 22
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/footer.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/footer.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "a",
        {
          href: LINKEDIN,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "LinkedIn",
          className: "group flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-all hover:border-neon hover:text-neon hover:shadow-[0_0_18px_rgba(202,138,4,0.5)]",
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Linkedin, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/components/footer.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/footer.tsx",
          lineNumber: 20,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "a",
        {
          href: GITHUB,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "GitHub",
          className: "group flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-all hover:border-neon hover:text-neon hover:shadow-[0_0_18px_rgba(202,138,4,0.5)]",
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Github, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/components/footer.tsx",
            lineNumber: 36,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/footer.tsx",
          lineNumber: 29,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/footer.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " CVify.AI — All rights reserved."
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/footer.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/footer.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/footer.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "font-display text-7xl font-bold", children: "404" }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground", children: "Page not found." }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "a",
      {
        href: "/",
        className: "mt-6 inline-flex rounded-full bg-neon px-4 py-2 text-sm font-semibold text-neon-foreground",
        children: "Go home"
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 14,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
const Route$5 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CVify.AI — Build ATS-Friendly Resumes in Minutes" },
      {
        name: "description",
        content: "Smart AI-powered resume builder for students and freshers. Get ATS scores, AI suggestions, and instant PDF download."
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("head", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(HeadContent, {}, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("body", { children: [
      children,
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Scripts, {}, void 0, false, {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
function RootComponent() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ThemeProvider, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AuthProvider, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-screen flex-col bg-background text-foreground", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Navbar, {}, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Outlet, {}, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 74,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Footer, {}, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 72,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 71,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
const $$splitComponentImporter$4 = () => import("./index-aiulEIli.mjs");
const Route$4 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "CVify.AI — Build ATS-Friendly Resumes in Minutes"
    }, {
      name: "description",
      content: "Smart AI-powered resume builder for students. Real-time ATS scoring, role-based skill suggestions, instant PDF export."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./ats-checker-4enX1Gmy.mjs");
const Route$3 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "ATS Resume Checker — Coming Soon | CVify.AI"
    }, {
      name: "description",
      content: "We're building a smarter ATS experience to help you understand resume compatibility, identify missing skills, and stand out to recruiters."
    }, {
      property: "og:title",
      content: "ATS Resume Checker — Coming Soon | CVify.AI"
    }, {
      property: "og:description",
      content: "Something powerful is coming. Intelligent ATS scanning, job description matching, and actionable keyword analysis."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./builder-QN6w0ZdS.mjs");
const Route$2 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Resume Builder — CVify.AI"
    }, {
      name: "description",
      content: "Step-by-step AI resume builder with live preview, ATS scoring, and PDF download."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./login-WrFZG9BK.mjs");
const Route$1 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Sign in — CVify.AI"
    }, {
      name: "description",
      content: "Sign in to CVify.AI to save and sync your resumes across devices."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./profile-CxvlcEwY.mjs");
const Route = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Your Profile — CVify.AI"
    }, {
      name: "description",
      content: "Your CVify dashboard — manage profile details, saved resumes, activity, and share feedback."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const AtsCheckerRoute = Route$3.update({
  id: "/ats-checker",
  path: "/ats-checker",
  getParentRoute: () => Route$5
});
const BuilderRoute = Route$2.update({
  id: "/builder",
  path: "/builder",
  getParentRoute: () => Route$5
});
const LoginRoute = Route$1.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$5
});
const ProfileRoute = Route.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  AtsCheckerRoute,
  BuilderRoute,
  LoginRoute,
  ProfileRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  const errorMessage = error instanceof Error ? error.message : String(error ?? "");
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/router.tsx",
            lineNumber: 20,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/router.tsx",
        lineNumber: 12,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/router.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }, void 0, false, {
      fileName: "/app/applet/src/router.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }, void 0, false, {
      fileName: "/app/applet/src/router.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    errorMessage && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("pre", { className: "mt-4 max-h-40 overflow-auto rounded-md bg-muted p-3 text-left font-mono text-xs text-destructive", children: errorMessage }, void 0, false, {
      fileName: "/app/applet/src/router.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/router.tsx",
          lineNumber: 37,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/router.tsx",
          lineNumber: 46,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/router.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/router.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/router.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  getDb as g,
  router as r,
  useAuth as u
};
