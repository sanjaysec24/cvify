import { r as reactExports, d as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth, g as getDb } from "./router-BVzDuvzN.mjs";
import { j as listResumes, c as calculateAtsScore, S as STORAGE_KEY, s as saveResume, k as deleteResumeById, m as submitFeedback } from "./resume-store-34Rd8upt.mjs";
import { d as doc, b as getDoc, s as setDoc, a as serverTimestamp } from "../_libs/firebase__firestore.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase.mjs";
import { j as LoaderCircle, i as Check, T as TriangleAlert, s as Mail, w as Calendar, S as Sparkles, U as User, F as FileText, x as Activity, y as MessageSquare, z as Pencil, X, H as Save, t as Phone, u as MapPin, B as Briefcase, d as Linkedin, G as Github, J as ListChecks, K as Inbox, p as Eye, N as Trash2, O as Send } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
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
function tsToDate(t) {
  if (!t) return null;
  const v = t;
  if (typeof v?.toDate === "function") return v.toDate();
  return null;
}
async function getOrCreateUserProfile(seed) {
  const ref = doc(getDb(), "users", seed.uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const d = snap.data();
    return {
      uid: seed.uid,
      name: d.name ?? seed.name,
      email: d.email ?? seed.email,
      photoURL: d.photoURL ?? seed.photoURL,
      phone: d.phone ?? "",
      location: d.location ?? "",
      role: d.role ?? "",
      bio: d.bio ?? "",
      linkedin: d.linkedin ?? "",
      github: d.github ?? "",
      lastLogin: tsToDate(d.lastLogin),
      updatedAt: tsToDate(d.updatedAt)
    };
  }
  const fresh = {
    uid: seed.uid,
    name: seed.name,
    email: seed.email,
    photoURL: seed.photoURL,
    phone: "",
    location: "",
    role: "",
    bio: "",
    linkedin: "",
    github: ""
  };
  await setDoc(
    ref,
    { ...fresh, createdAt: serverTimestamp(), updatedAt: serverTimestamp() },
    { merge: true }
  );
  return { ...fresh, lastLogin: null, updatedAt: /* @__PURE__ */ new Date() };
}
async function updateUserProfile(uid, patch) {
  await setDoc(
    doc(getDb(), "users", uid),
    { ...patch, uid, updatedAt: serverTimestamp() },
    { merge: true }
  );
}
const TABS = [{
  id: "info",
  label: "Profile Info",
  icon: User
}, {
  id: "resumes",
  label: "My Resumes",
  icon: FileText
}, {
  id: "activity",
  label: "Activity",
  icon: Activity
}, {
  id: "feedback",
  label: "Feedback",
  icon: MessageSquare
}];
function ProfilePage() {
  const {
    user,
    loading: authLoading
  } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = reactExports.useState("info");
  const [profile, setProfile] = reactExports.useState(null);
  const [profileLoading, setProfileLoading] = reactExports.useState(true);
  const [resumes, setResumes] = reactExports.useState(null);
  const [loadingResumes, setLoadingResumes] = reactExports.useState(true);
  const [deleteId, setDeleteId] = reactExports.useState(null);
  const [toast, setToast] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!authLoading && !user) navigate({
      to: "/login"
    });
  }, [authLoading, user, navigate]);
  reactExports.useEffect(() => {
    if (!user) return;
    let cancelled = false;
    setProfileLoading(true);
    getOrCreateUserProfile({
      uid: user.uid,
      name: user.displayName ?? "",
      email: user.email ?? "",
      photoURL: user.photoURL ?? ""
    }).then((p) => {
      if (!cancelled) setProfile(p);
    }).catch((e) => console.warn("profile load failed", e)).finally(() => {
      if (!cancelled) setProfileLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [user]);
  reactExports.useEffect(() => {
    if (!user) return;
    let cancelled = false;
    setLoadingResumes(true);
    listResumes(user.uid).then((items) => {
      if (!cancelled) setResumes(items);
    }).catch((e) => {
      console.warn("listResumes failed", e);
      if (!cancelled) setResumes([]);
    }).finally(() => {
      if (!cancelled) setLoadingResumes(false);
    });
    return () => {
      cancelled = true;
    };
  }, [user]);
  function showToast(kind, msg) {
    setToast({
      kind,
      msg
    });
    setTimeout(() => setToast(null), 2800);
  }
  async function handleDelete(id) {
    if (!confirm("Delete this resume? This cannot be undone.")) return;
    setDeleteId(id);
    try {
      await deleteResumeById(id);
      setResumes((r) => r ? r.filter((x) => x.id !== id) : r);
      showToast("ok", "Resume deleted");
    } catch (e) {
      console.warn("delete failed", e);
      showToast("err", "Failed to delete resume");
    } finally {
      setDeleteId(null);
    }
  }
  function handleEdit(item) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(item.resumeData));
    } catch {
    }
    navigate({
      to: "/builder"
    });
  }
  async function handleNewResume() {
    if (!user) return;
    const blank = {
      name: profile?.name ?? user.displayName ?? "",
      email: user.email ?? "",
      phone: profile?.phone ?? "",
      location: profile?.location ?? "",
      role: profile?.role ?? "",
      summary: profile?.bio ?? "",
      linkedin: profile?.linkedin ?? "",
      github: profile?.github ?? "",
      skills: [],
      projects: [],
      experience: [],
      education: [],
      template: "modern",
      sectionOrder: ["summary", "skills", "projects", "experience", "education"],
      primaryColor: "#CA8A04",
      secondaryColor: "#FACC15",
      showIcons: true
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(blank));
      await saveResume(user.uid, blank);
    } catch {
    }
    navigate({
      to: "/builder"
    });
  }
  if (authLoading || !user) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("main", { className: "flex min-h-[calc(100vh-72px)] items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" }, void 0, false, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 160,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 159,
      columnNumber: 12
    }, this);
  }
  const totalResumes = resumes?.length ?? 0;
  const lastEdited = resumes?.[0]?.updatedAt ?? null;
  const avgStrength = resumes && resumes.length ? Math.round(resumes.reduce((sum, r) => sum + calculateAtsScore(r.resumeData).score, 0) / resumes.length) : 0;
  const joined = user.metadata?.creationTime ? new Date(user.metadata.creationTime) : null;
  const lastLogin = user.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime) : null;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("main", { className: "mx-auto max-w-6xl px-4 py-10 lg:px-8", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AnimatePresence, { children: toast && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(motion.div, { initial: {
      opacity: 0,
      y: -10
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -10
    }, className: `fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg ${toast.kind === "ok" ? "bg-neon text-neon-foreground" : "bg-destructive text-destructive-foreground"}`, children: [
      toast.kind === "ok" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "mr-1.5 inline h-4 w-4" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 183,
        columnNumber: 36
      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TriangleAlert, { className: "mr-1.5 inline h-4 w-4" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 183,
        columnNumber: 82
      }, this),
      toast.msg
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 173,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 172,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(motion.section, { initial: {
      opacity: 0,
      y: 12
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "glass relative overflow-hidden rounded-3xl border border-border p-6 sm:p-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-neon/20 blur-3xl" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 196,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center gap-6 sm:flex-row sm:items-center", children: [
        profile?.photoURL || user.photoURL ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: profile?.photoURL || user.photoURL, alt: profile?.name ?? user.displayName ?? "Profile", referrerPolicy: "no-referrer", className: "h-24 w-24 rounded-full border-2 border-neon object-cover shadow-glow" }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 198,
          columnNumber: 49
        }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex h-24 w-24 items-center justify-center rounded-full bg-neon text-3xl font-bold text-neon-foreground", children: (profile?.name ?? user.displayName ?? user.email ?? "U").charAt(0).toUpperCase() }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 198,
          columnNumber: 264
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 text-center sm:text-left", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "font-display text-3xl font-bold tracking-tight", children: profile?.name || user.displayName || "Welcome" }, void 0, false, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 203,
            columnNumber: 13
          }, this),
          profile?.role && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm font-medium text-neon", children: profile.role }, void 0, false, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 206,
            columnNumber: 31
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 flex flex-col items-center gap-1.5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Mail, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
                lineNumber: 209,
                columnNumber: 17
              }, this),
              " ",
              user.email
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
              lineNumber: 208,
              columnNumber: 15
            }, this),
            joined && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Calendar, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
                lineNumber: 212,
                columnNumber: 19
              }, this),
              " Joined",
              " ",
              joined.toLocaleDateString(void 0, {
                year: "numeric",
                month: "short",
                day: "numeric"
              })
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
              lineNumber: 211,
              columnNumber: 26
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 207,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 202,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { onClick: handleNewResume, className: "inline-flex items-center gap-2 rounded-full bg-neon px-5 py-2.5 text-sm font-semibold text-neon-foreground shadow-glow transition hover:opacity-90", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 223,
            columnNumber: 13
          }, this),
          " New Resume"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 222,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 197,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Stat, { label: "Resumes", value: totalResumes.toString() }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 229,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Stat, { label: "Avg. ATS Score", value: resumes && resumes.length ? `${avgStrength}%` : "—" }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 230,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Stat, { label: "Last Edited", value: lastEdited ? lastEdited.toLocaleDateString(void 0, {
          month: "short",
          day: "numeric"
        }) : "—" }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 231,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 228,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 189,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 flex flex-wrap gap-2 border-b border-border", children: TABS.map((t) => {
      const Icon = t.icon;
      const active = tab === t.id;
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { onClick: () => setTab(t.id), className: `relative inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold transition ${active ? "text-neon" : "text-muted-foreground hover:text-foreground"}`, children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Icon, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 244,
          columnNumber: 15
        }, this),
        t.label,
        active && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(motion.span, { layoutId: "profile-tab-underline", className: "absolute -bottom-px left-0 right-0 h-0.5 bg-neon" }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 246,
          columnNumber: 26
        }, this)
      ] }, t.id, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 243,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 239,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6", children: [
      tab === "info" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ProfileInfoTab, { profile, loading: profileLoading, onSaved: (p) => {
        setProfile(p);
        showToast("ok", "Profile updated successfully");
      }, onError: (m) => showToast("err", m) }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 252,
        columnNumber: 28
      }, this),
      tab === "resumes" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ResumesTab, { loading: loadingResumes, resumes, deleteId, onEdit: handleEdit, onDelete: handleDelete }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 257,
        columnNumber: 31
      }, this),
      tab === "activity" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ActivityTab, { totalResumes, avgStrength, lastEdited, lastLogin, joined }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 259,
        columnNumber: 32
      }, this),
      tab === "feedback" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FeedbackTab, { user: {
        uid: user.uid,
        name: profile?.name ?? user.displayName ?? "",
        email: user.email ?? ""
      }, onResult: (ok) => showToast(ok ? "ok" : "err", ok ? "Thanks for the feedback!" : "Could not send feedback") }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 261,
        columnNumber: 32
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 251,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
    lineNumber: 170,
    columnNumber: 10
  }, this);
}
function ProfileInfoTab({
  profile,
  loading,
  onSaved,
  onError
}) {
  const [editing, setEditing] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState(profile);
  const [errors, setErrors] = reactExports.useState({});
  reactExports.useEffect(() => {
    setForm(profile);
  }, [profile]);
  const dirty = reactExports.useMemo(() => {
    if (!form || !profile) return false;
    return form.name !== profile.name || form.phone !== profile.phone || form.location !== profile.location || form.role !== profile.role || form.bio !== profile.bio || form.linkedin !== profile.linkedin || form.github !== profile.github;
  }, [form, profile]);
  if (loading || !form || !profile) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-20 animate-pulse rounded-2xl border border-border bg-muted/40" }, i, false, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 296,
      columnNumber: 32
    }, this)) }, void 0, false, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 295,
      columnNumber: 12
    }, this);
  }
  function update(k, v) {
    setForm((f) => f ? {
      ...f,
      [k]: v
    } : f);
  }
  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (form.phone && !/^[\d+\-()\s]{6,}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    if (form.linkedin && !/^https?:\/\//i.test(form.linkedin)) e.linkedin = "Must start with http(s)://";
    if (form.github && !/^https?:\/\//i.test(form.github)) e.github = "Must start with http(s)://";
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  async function handleSave() {
    if (!form) return;
    if (!validate()) return;
    setSaving(true);
    try {
      await updateUserProfile(form.uid, {
        uid: form.uid,
        name: form.name.trim(),
        email: form.email,
        photoURL: form.photoURL,
        phone: form.phone.trim(),
        location: form.location.trim(),
        role: form.role.trim(),
        bio: form.bio.trim(),
        linkedin: form.linkedin.trim(),
        github: form.github.trim()
      });
      onSaved({
        ...form,
        updatedAt: /* @__PURE__ */ new Date()
      });
      setEditing(false);
    } catch (e) {
      console.warn("save profile failed", e);
      onError("Could not save profile. Check your connection.");
    } finally {
      setSaving(false);
    }
  }
  function handleCancel() {
    setForm(profile);
    setErrors({});
    setEditing(false);
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "rounded-3xl border border-border bg-card p-6 sm:p-8", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "font-display text-xl font-bold tracking-tight", children: "Personal details" }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 351,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground", children: "Keep your info up to date — it auto-fills new resumes." }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 352,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 350,
        columnNumber: 9
      }, this),
      !editing ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { onClick: () => setEditing(true), className: "inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:bg-accent", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pencil, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 357,
          columnNumber: 13
        }, this),
        " Edit Profile"
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 356,
        columnNumber: 21
      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { onClick: handleCancel, disabled: saving, className: "inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:bg-accent disabled:opacity-60", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 360,
            columnNumber: 15
          }, this),
          " Cancel"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 359,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { onClick: handleSave, disabled: saving || !dirty, className: "inline-flex items-center gap-1.5 rounded-full bg-neon px-4 py-2 text-sm font-semibold text-neon-foreground shadow-glow transition hover:opacity-90 disabled:opacity-50", children: [
          saving ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoaderCircle, { className: "h-4 w-4 animate-spin" }, void 0, false, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 363,
            columnNumber: 25
          }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Save, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 363,
            columnNumber: 72
          }, this),
          "Save changes"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 362,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 358,
        columnNumber: 23
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 349,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-5 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Field, { label: "Full Name", icon: User, editing, value: form.name, error: errors.name, onChange: (v) => update("name", v), placeholder: "Jane Doe" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 370,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Field, { label: "Email", icon: Mail, editing: false, value: form.email, readOnlyHint: "from Google" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 371,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Field, { label: "Phone Number", icon: Phone, editing, value: form.phone, error: errors.phone, onChange: (v) => update("phone", v), placeholder: "+1 555 123 4567" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 372,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Field, { label: "Location", icon: MapPin, editing, value: form.location, onChange: (v) => update("location", v), placeholder: "San Francisco, CA" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 373,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Field, { label: "Role / Title", icon: Briefcase, editing, value: form.role, onChange: (v) => update("role", v), placeholder: "Senior Frontend Engineer" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 374,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Field, { label: "LinkedIn", icon: Linkedin, editing, value: form.linkedin, error: errors.linkedin, onChange: (v) => update("linkedin", v), placeholder: "https://linkedin.com/in/your-handle", link: true }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 375,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Field, { label: "GitHub", icon: Github, editing, value: form.github, error: errors.github, onChange: (v) => update("github", v), placeholder: "https://github.com/your-handle", link: true }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 376,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 369,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-5", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ListChecks, { className: "h-3.5 w-3.5" }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 381,
          columnNumber: 11
        }, this),
        " Bio / About"
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 380,
        columnNumber: 9
      }, this),
      editing ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("textarea", { value: form.bio, onChange: (e) => update("bio", e.target.value), rows: 4, maxLength: 400, placeholder: "A short, punchy description of who you are and what you build.", className: "w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/30" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 383,
        columnNumber: 20
      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "rounded-2xl border border-dashed border-border bg-background/50 px-4 py-3 text-sm text-muted-foreground", children: form.bio || "No bio yet. Click Edit Profile to add one." }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 383,
        columnNumber: 365
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 379,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
    lineNumber: 348,
    columnNumber: 10
  }, this);
}
function Field({
  label,
  icon: Icon,
  editing,
  value,
  onChange,
  error,
  placeholder,
  readOnlyHint,
  link
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Icon, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 412,
        columnNumber: 9
      }, this),
      " ",
      label,
      readOnlyHint && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "ml-1 rounded bg-muted px-1.5 py-0.5 text-[10px] font-normal normal-case tracking-normal", children: readOnlyHint }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 413,
        columnNumber: 26
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 411,
      columnNumber: 7
    }, this),
    editing && onChange ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { value, onChange: (e) => onChange(e.target.value), placeholder, className: `w-full rounded-xl border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 ${error ? "border-destructive focus:border-destructive focus:ring-destructive/30" : "border-border focus:border-neon focus:ring-neon/30"}` }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 418,
        columnNumber: 11
      }, this),
      error && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 inline-flex items-center gap-1 text-xs text-destructive", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TriangleAlert, { className: "h-3 w-3" }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 420,
          columnNumber: 15
        }, this),
        " ",
        error
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 419,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 417,
      columnNumber: 30
    }, this) : link && value ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: value, target: "_blank", rel: "noreferrer", className: "block truncate rounded-xl border border-dashed border-border bg-background/50 px-3 py-2.5 text-sm text-neon hover:underline", children: value }, void 0, false, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 422,
      columnNumber: 31
    }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "truncate rounded-xl border border-dashed border-border bg-background/50 px-3 py-2.5 text-sm text-muted-foreground", children: value || "—" }, void 0, false, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 424,
      columnNumber: 16
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
    lineNumber: 410,
    columnNumber: 10
  }, this);
}
function ResumesTab({
  loading,
  resumes,
  deleteId,
  onEdit,
  onDelete
}) {
  if (loading) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-44 animate-pulse rounded-2xl border border-border bg-muted/40" }, i, false, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 447,
      columnNumber: 29
    }, this)) }, void 0, false, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 446,
      columnNumber: 12
    }, this);
  }
  if (!resumes || resumes.length === 0) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-card/50 px-6 py-16 text-center", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 text-neon", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Inbox, { className: "h-7 w-7" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 453,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 452,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "mt-4 font-display text-xl font-bold", children: "No resumes yet" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 455,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 max-w-sm text-sm text-muted-foreground", children: "Start building your first ATS-friendly resume in minutes." }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 456,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/builder", className: "mt-5 inline-flex items-center gap-1.5 rounded-full bg-neon px-5 py-2.5 text-sm font-semibold text-neon-foreground shadow-glow hover:opacity-90", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 460,
          columnNumber: 11
        }, this),
        " Start Building"
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 459,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 451,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: resumes.map((r) => {
    const ats = calculateAtsScore(r.resumeData).score;
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(motion.article, { initial: {
      opacity: 0,
      y: 8
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "group relative flex flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:border-neon hover:shadow-glow", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neon/10 text-neon", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FileText, { className: "h-5 w-5" }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 476,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 475,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "truncate font-semibold", children: r.title }, void 0, false, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 479,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-muted-foreground", children: [
            "Template: ",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "capitalize", children: r.template }, void 0, false, {
              fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
              lineNumber: 481,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 480,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 478,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "rounded-full bg-neon/10 px-2 py-0.5 text-[10px] font-bold text-neon", children: [
          ats,
          "%"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 484,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 474,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-xs text-muted-foreground", children: [
        "Last edited:",
        " ",
        r.updatedAt ? r.updatedAt.toLocaleString(void 0, {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit"
        }) : "Just now"
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 489,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { onClick: () => onEdit(r), className: "inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-xs font-semibold text-background transition hover:opacity-90", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pencil, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 501,
            columnNumber: 17
          }, this),
          " Edit"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 500,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { onClick: () => onEdit(r), className: "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold transition hover:bg-accent", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Eye, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 504,
            columnNumber: 17
          }, this),
          " View"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 503,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { onClick: () => onDelete(r.id), disabled: deleteId === r.id, className: "ml-auto inline-flex items-center gap-1.5 rounded-full border border-destructive/40 px-3 py-1.5 text-xs font-semibold text-destructive transition hover:bg-destructive/10 disabled:opacity-60", children: [
          deleteId === r.id ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }, void 0, false, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 507,
            columnNumber: 38
          }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 507,
            columnNumber: 89
          }, this),
          "Delete"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 506,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 499,
        columnNumber: 13
      }, this)
    ] }, r.id, true, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 467,
      columnNumber: 14
    }, this);
  }) }, void 0, false, {
    fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
    lineNumber: 464,
    columnNumber: 10
  }, this);
}
function ActivityTab({
  totalResumes,
  avgStrength,
  lastEdited,
  lastLogin,
  joined
}) {
  const items = [{
    label: "Total Resumes",
    value: totalResumes.toString(),
    icon: FileText
  }, {
    label: "Average ATS Score",
    value: totalResumes ? `${avgStrength}%` : "—",
    icon: Sparkles
  }, {
    label: "Last Resume Edit",
    value: lastEdited ? lastEdited.toLocaleString() : "—",
    icon: Pencil
  }, {
    label: "Last Login",
    value: lastLogin ? lastLogin.toLocaleString() : "—",
    icon: Activity
  }, {
    label: "Member Since",
    value: joined ? joined.toLocaleDateString() : "—",
    icon: Calendar
  }];
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "grid gap-4 sm:grid-cols-2", children: items.map((it) => {
    const Icon = it.icon;
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-5", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-neon/10 text-neon", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Icon, { className: "h-5 w-5" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 561,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 560,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", children: it.label }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 564,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-display text-lg font-bold", children: it.value }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 567,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 563,
        columnNumber: 13
      }, this)
    ] }, it.label, true, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 559,
      columnNumber: 14
    }, this);
  }) }, void 0, false, {
    fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
    lineNumber: 556,
    columnNumber: 10
  }, this);
}
function FeedbackTab({
  user,
  onResult
}) {
  const [fb, setFb] = reactExports.useState("");
  const [sending, setSending] = reactExports.useState(false);
  const [sent, setSent] = reactExports.useState(false);
  const [fbErr, setFbErr] = reactExports.useState(null);
  const MAX = 500;
  async function handleSubmit(e) {
    e.preventDefault();
    const message = fb.trim();
    if (message.length < 4) {
      setFbErr("Please write a bit more (min 4 characters).");
      return;
    }
    setFbErr(null);
    setSending(true);
    try {
      await submitFeedback({
        userId: user.uid,
        name: user.name,
        email: user.email,
        message
      });
      setFb("");
      setSent(true);
      onResult(true);
      setTimeout(() => setSent(false), 2500);
    } catch (e2) {
      console.warn("feedback failed", e2);
      setFbErr("Could not send feedback. Please try again.");
      onResult(false);
    } finally {
      setSending(false);
    }
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "rounded-3xl border border-border bg-card p-6 sm:p-8", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-neon/10 text-neon", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MessageSquare, { className: "h-4 w-4" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 623,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 622,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "font-display text-xl font-bold tracking-tight", children: "Share your feedback" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 625,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 621,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm text-muted-foreground", children: "Found a bug or have an idea? We read every message." }, void 0, false, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 627,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleSubmit, className: "mt-5 flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("textarea", { value: fb, onChange: (e) => setFb(e.target.value.slice(0, MAX)), rows: 5, placeholder: "Tell us what you think…", className: "w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/30" }, void 0, false, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 632,
        columnNumber: 9
      }, this),
      fbErr && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "inline-flex items-center gap-1.5 text-xs text-destructive", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TriangleAlert, { className: "h-3.5 w-3.5" }, void 0, false, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 634,
          columnNumber: 13
        }, this),
        " ",
        fbErr
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 633,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-muted-foreground", children: [
          fb.length,
          "/",
          MAX
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 637,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "submit", disabled: sending || sent || fb.trim().length < 4, className: "inline-flex items-center gap-2 rounded-full bg-neon px-5 py-2.5 text-sm font-semibold text-neon-foreground shadow-glow transition hover:opacity-90 disabled:opacity-60", children: [
          sending ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoaderCircle, { className: "h-4 w-4 animate-spin" }, void 0, false, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 641,
            columnNumber: 24
          }, this) : sent ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 641,
            columnNumber: 78
          }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Send, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
            lineNumber: 641,
            columnNumber: 110
          }, this),
          sent ? "Thanks!" : "Send feedback"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
          lineNumber: 640,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
        lineNumber: 636,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 631,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
    lineNumber: 620,
    columnNumber: 10
  }, this);
}
function Stat({
  label,
  value
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-background/60 px-4 py-3", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", children: label }, void 0, false, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 659,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-0.5 font-display text-xl font-bold", children: value }, void 0, false, {
      fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
      lineNumber: 662,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/profile.tsx?tsr-split=component",
    lineNumber: 658,
    columnNumber: 10
  }, this);
}
export {
  ProfilePage as component
};
