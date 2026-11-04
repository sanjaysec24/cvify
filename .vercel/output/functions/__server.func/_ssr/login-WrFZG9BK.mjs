import { r as reactExports, d as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth } from "./router-BVzDuvzN.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { S as Sparkles, j as LoaderCircle, d as Linkedin, G as Github } from "../_libs/lucide-react.mjs";
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
function LoginPage() {
  const {
    user,
    loading,
    signInWithGoogle
  } = useAuth();
  const navigate = useNavigate();
  const [busy, setBusy] = reactExports.useState(false);
  const [err, setErr] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!loading && user) navigate({
      to: "/profile"
    });
  }, [user, loading, navigate]);
  async function handleGoogle() {
    setErr(null);
    setBusy(true);
    try {
      await signInWithGoogle();
      navigate({
        to: "/profile"
      });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Sign-in failed";
      setErr(msg);
    } finally {
      setBusy(false);
    }
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("main", { className: "flex min-h-[calc(100vh-72px)] items-center justify-center px-6 py-12", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(motion.div, { initial: {
    opacity: 0,
    y: 12
  }, animate: {
    opacity: 1,
    y: 0
  }, className: "w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-neon text-neon-foreground", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { className: "h-5 w-5", strokeWidth: 2.5 }, void 0, false, {
        fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
        lineNumber: 45,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-display text-xl font-bold", children: [
        "CVify",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-neon", children: ".AI" }, void 0, false, {
          fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
          lineNumber: 48,
          columnNumber: 18
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 py-1 pl-1 pr-3 shadow-sm", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex -space-x-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-neon text-[10px] font-bold text-neon-foreground ring-2 ring-card", children: "Y" }, void 0, false, {
          fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background ring-2 ring-card", children: "A" }, void 0, false, {
          fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-muted text-[10px] font-bold text-foreground ring-2 ring-card", children: "S" }, void 0, false, {
          fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
          lineNumber: 60,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-semibold", children: "1500+ Users" }, void 0, false, {
        fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-muted-foreground", children: "Joined recently" }, void 0, false, {
        fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
      lineNumber: 52,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "mt-4 font-display text-3xl font-bold tracking-tight", children: "Welcome back" }, void 0, false, {
      fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground", children: "Sign in to save your resumes to the cloud and access them anywhere." }, void 0, false, {
      fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
      lineNumber: 69,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { onClick: handleGoogle, disabled: busy || loading, className: "mt-8 flex w-full items-center justify-center gap-3 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold transition hover:bg-accent disabled:opacity-60", children: [
      busy ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoaderCircle, { className: "h-5 w-5 animate-spin" }, void 0, false, {
        fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
        lineNumber: 74,
        columnNumber: 19
      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("svg", { className: "h-5 w-5", viewBox: "0 0 48 48", "aria-hidden": "true", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { fill: "#FFC107", d: "M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.3 29.1 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5c10.8 0 19.5-8.7 19.5-19.5 0-1.2-.1-2.3-.4-3.5z" }, void 0, false, {
          fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { fill: "#FF3D00", d: "M6.3 14.7l6.6 4.8C14.7 15.6 19 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.3 29.1 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z" }, void 0, false, {
          fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { fill: "#4CAF50", d: "M24 43.5c5 0 9.6-1.9 13-5l-6-5.1c-2 1.4-4.4 2.2-7 2.2-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.6 39 16.3 43.5 24 43.5z" }, void 0, false, {
          fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { fill: "#1976D2", d: "M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.4l6 5.1c-.4.4 6.7-4.9 6.7-14.5 0-1.2-.1-2.3-.4-3.5z" }, void 0, false, {
          fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
          lineNumber: 78,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
        lineNumber: 74,
        columnNumber: 66
      }, this),
      "Continue with Google"
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    err && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive", children: err }, void 0, false, {
      fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
      lineNumber: 83,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "https://www.linkedin.com/in/sanjay-kumar-b-67b7b532a/", target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all hover:border-neon hover:text-neon hover:shadow-[0_0_20px_rgba(202,138,4,0.55)]", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Linkedin, { className: "h-4 w-4" }, void 0, false, {
        fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
        lineNumber: 90,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "https://github.com/sanjaysec24", target: "_blank", rel: "noopener noreferrer", "aria-label": "GitHub", className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all hover:border-neon hover:text-neon hover:shadow-[0_0_20px_rgba(202,138,4,0.55)]", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Github, { className: "h-4 w-4" }, void 0, false, {
        fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
        lineNumber: 93,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
      lineNumber: 88,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-6 text-center text-xs text-muted-foreground", children: [
      "Just exploring?",
      " ",
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/", className: "text-neon hover:underline", children: "Back to home" }, void 0, false, {
        fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
        lineNumber: 99,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
      lineNumber: 97,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/login.tsx?tsr-split=component",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
export {
  LoginPage as component
};
