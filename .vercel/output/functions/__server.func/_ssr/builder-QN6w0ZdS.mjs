import { r as reactExports, d as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as useSensors, d as useSensor, D as DndContext, e as closestCenter, P as PointerSensor } from "../_libs/dnd-kit__core.mjs";
import { S as SortableContext, v as verticalListSortingStrategy, a as arrayMove, u as useSortable } from "../_libs/dnd-kit__sortable.mjs";
import { C as CSS } from "../_libs/dnd-kit__utilities.mjs";
import { C as COLOR_PRESETS, D as DEFAULT_SECTION_ORDER, l as loadResume, S as STORAGE_KEY, s as saveResume, c as calculateAtsScore, a as completionPercent, R as ROLE_SKILLS, b as ROLES, d as SECTION_LABELS, e as DEMO_DATA, i as isValidUrl, f as improveBullet, g as shortUrl, h as ensureProtocol } from "./resume-store-34Rd8upt.mjs";
import { j as jsPDF } from "../_libs/jspdf.mjs";
import { h as html2canvas } from "../_libs/html2canvas.mjs";
import { u as useAuth } from "./router-BVzDuvzN.mjs";
import "../_libs/firebase__firestore.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase.mjs";
import { U as User, f as Wrench, g as FolderGit2, B as Briefcase, h as GraduationCap, i as Check, S as Sparkles, W as WandSparkles, j as LoaderCircle, T as TriangleAlert, X, k as LayoutTemplate, P as Palette, I as Image, l as Plus, m as Globe, d as Linkedin, G as Github, E as ExternalLink, n as ArrowLeft, A as ArrowRight, D as Download, o as GripVertical, p as Eye, q as ZoomOut, r as ZoomIn, s as Mail, t as Phone, u as MapPin, v as UserRound } from "../_libs/lucide-react.mjs";
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
import "../_libs/dnd-kit__accessibility.mjs";
import "../_libs/fflate.mjs";
import "../_libs/fast-png.mjs";
import "../_libs/iobuffer.mjs";
import "../_libs/pako.mjs";
import "fs";
import "path";
import "../_libs/dompurify.mjs";
import "../_libs/canvg.mjs";
import "../_libs/core-js.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/raf.mjs";
import "../_libs/performance-now.mjs";
import "../_libs/rgbcolor.mjs";
import "../_libs/svg-pathdata.mjs";
import "../_libs/stackblur-canvas.mjs";
import "../_libs/firebase__util.mjs";
import "../_libs/firebase__component.mjs";
import "../_libs/idb.mjs";
import "../_libs/firebase__webchannel-wrapper.mjs";
import "../_libs/@grpc/grpc-js.mjs";
import "process";
import "tls";
import "os";
import "net";
import "events";
import "http2";
import "http";
import "url";
import "dns";
import "zlib";
import "../_libs/@grpc/proto-loader.mjs";
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
const SECTION_TITLE = {
  summary: "Summary",
  skills: "Skills",
  projects: "Projects",
  experience: "Experience",
  education: "Education"
};
const SECTION_ICON = {
  summary: UserRound,
  skills: Wrench,
  projects: FolderGit2,
  experience: Briefcase,
  education: GraduationCap
};
const ResumePreview = reactExports.forwardRef(({ data }, ref) => {
  const Tpl = pickTemplate(data.template);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      ref,
      "data-resume-root": true,
      "data-template": data.template,
      className: "resume-container pdf-page mx-auto overflow-hidden shadow-2xl",
      style: {
        width: "794px",
        height: "1123px",
        minWidth: "794px",
        maxWidth: "794px",
        minHeight: "1123px",
        maxHeight: "1123px",
        backgroundColor: "#ffffff",
        color: "#111827",
        fontFamily: "Inter, sans-serif",
        lineHeight: 1.5,
        boxSizing: "border-box",
        position: "relative",
        breakInside: "avoid",
        pageBreakInside: "avoid"
      },
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tpl, { data }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/components/resume-preview.tsx",
      lineNumber: 47,
      columnNumber: 5
    },
    void 0
  );
});
ResumePreview.displayName = "ResumePreview";
function pickTemplate(id) {
  switch (id) {
    case "sidebar":
      return SidebarTemplate;
    case "creative":
      return CreativeTemplate;
    case "classic":
      return ClassicTemplate;
    case "minimal":
      return MinimalTemplate;
    case "compact":
      return CompactTemplate;
    case "modern":
    default:
      return ModernTemplate;
  }
}
function Photo({
  src,
  size = 84,
  ring = "#e5e7eb"
}) {
  if (!src) return null;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "img",
    {
      src,
      alt: "Profile",
      style: {
        width: size,
        height: size,
        borderRadius: "9999px",
        objectFit: "cover",
        border: `3px solid ${ring}`,
        flexShrink: 0
      }
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/components/resume-preview.tsx",
      lineNumber: 106,
      columnNumber: 5
    },
    this
  );
}
function ContactRow({
  data,
  color = "#4b5563",
  linkColor
}) {
  const lc = linkColor ?? color;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "4px 14px",
        fontSize: 12,
        color,
        lineHeight: 1.5
      },
      children: [
        data.email && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "a",
          {
            href: `mailto:${data.email}`,
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color,
              textDecoration: "none"
            },
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Mail, { style: { width: 12, height: 12 } }, void 0, false, {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 153,
                columnNumber: 11
              }, this),
              data.email
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 143,
            columnNumber: 9
          },
          this
        ),
        data.phone && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Phone, { style: { width: 12, height: 12 } }, void 0, false, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 159,
            columnNumber: 11
          }, this),
          data.phone
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/resume-preview.tsx",
          lineNumber: 158,
          columnNumber: 9
        }, this),
        data.location && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { style: { width: 12, height: 12 } }, void 0, false, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 165,
            columnNumber: 11
          }, this),
          data.location
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/resume-preview.tsx",
          lineNumber: 164,
          columnNumber: 9
        }, this),
        data.linkedin && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "a",
          {
            href: ensureProtocol(data.linkedin),
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: lc,
              textDecoration: "none"
            },
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Linkedin, { style: { width: 12, height: 12 } }, void 0, false, {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 182,
                columnNumber: 11
              }, this),
              shortUrl(data.linkedin)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 170,
            columnNumber: 9
          },
          this
        ),
        data.github && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "a",
          {
            href: ensureProtocol(data.github),
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: lc,
              textDecoration: "none"
            },
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Github, { style: { width: 12, height: 12 } }, void 0, false, {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 199,
                columnNumber: 11
              }, this),
              shortUrl(data.github)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 187,
            columnNumber: 9
          },
          this
        ),
        data.website && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "a",
          {
            href: ensureProtocol(data.website),
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: lc,
              textDecoration: "none"
            },
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Globe, { style: { width: 12, height: 12 } }, void 0, false, {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 216,
                columnNumber: 11
              }, this),
              shortUrl(data.website)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 204,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/resume-preview.tsx",
      lineNumber: 132,
      columnNumber: 5
    },
    this
  );
}
function ProjectLinks({ p, color }) {
  if (!p.github && !p.demo) return null;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      style: { marginTop: 4, display: "flex", flexWrap: "wrap", gap: "2px 14px", fontSize: 11.5 },
      children: [
        p.github && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "a",
          {
            href: ensureProtocol(p.github),
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              color,
              textDecoration: "none",
              fontWeight: 500
            },
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Github, { style: { width: 11, height: 11 } }, void 0, false, {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 244,
                columnNumber: 11
              }, this),
              " GitHub: ",
              shortUrl(p.github)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 231,
            columnNumber: 9
          },
          this
        ),
        p.demo && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "a",
          {
            href: ensureProtocol(p.demo),
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              color,
              textDecoration: "none",
              fontWeight: 500
            },
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ExternalLink, { style: { width: 11, height: 11 } }, void 0, false, {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 261,
                columnNumber: 11
              }, this),
              " Live: ",
              shortUrl(p.demo)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 248,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/resume-preview.tsx",
      lineNumber: 227,
      columnNumber: 5
    },
    this
  );
}
function SectionTitle({
  id,
  color,
  showIcons,
  underline = true,
  size = 13
}) {
  const Icon = SECTION_ICON[id];
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "h2",
      {
        style: {
          fontSize: size,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          margin: 0
        },
        children: [
          showIcons && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Icon, { style: { width: 14, height: 14 } }, void 0, false, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 297,
            columnNumber: 23
          }, this),
          SECTION_TITLE[id]
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 284,
        columnNumber: 7
      },
      this
    ),
    underline && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { height: 2, background: color, marginTop: 4, width: 32, borderRadius: 2 } }, void 0, false, {
      fileName: "/app/applet/src/components/resume-preview.tsx",
      lineNumber: 301,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/resume-preview.tsx",
    lineNumber: 283,
    columnNumber: 5
  }, this);
}
function renderBody(id, data, opts = {}) {
  const fs = opts.compact ? 12 : 13;
  const sub = opts.compact ? 11 : 12;
  switch (id) {
    case "summary":
      return data.summary ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { style: { fontSize: fs, lineHeight: 1.55, color: "#374151", margin: 0 }, children: data.summary }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 317,
        columnNumber: 9
      }, this) : null;
    case "skills":
      return data.skills.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 }, children: data.skills.map((s) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "span",
        {
          style: {
            fontSize: sub,
            padding: "3px 9px",
            borderRadius: 4,
            background: "#f3f4f6",
            border: "1px solid #e5e7eb",
            color: "#1f2937"
          },
          children: s
        },
        s,
        false,
        {
          fileName: "/app/applet/src/components/resume-preview.tsx",
          lineNumber: 325,
          columnNumber: 13
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 323,
        columnNumber: 9
      }, this) : null;
    case "projects":
      return data.projects.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: data.projects.map((p, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { style: { fontSize: fs + 1, fontWeight: 600, margin: 0, color: "#111827" }, children: p.title || "Untitled Project" }, void 0, false, {
          fileName: "/app/applet/src/components/resume-preview.tsx",
          lineNumber: 346,
          columnNumber: 15
        }, this),
        p.description && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { style: { fontSize: fs, lineHeight: 1.55, color: "#374151", margin: "3px 0 0" }, children: p.description }, void 0, false, {
          fileName: "/app/applet/src/components/resume-preview.tsx",
          lineNumber: 350,
          columnNumber: 17
        }, this),
        p.tech && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { style: { fontSize: sub, color: "#4b5563", margin: "3px 0 0" }, children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { style: { fontWeight: 600 }, children: "Tech:" }, void 0, false, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 356,
            columnNumber: 19
          }, this),
          " ",
          p.tech
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/resume-preview.tsx",
          lineNumber: 355,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ProjectLinks, { p, color: opts.color ?? data.primaryColor ?? "#111827" }, void 0, false, {
          fileName: "/app/applet/src/components/resume-preview.tsx",
          lineNumber: 359,
          columnNumber: 15
        }, this)
      ] }, i, true, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 345,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 343,
        columnNumber: 9
      }, this) : null;
    case "experience":
      return data.experience.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: data.experience.map((e, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 12
            },
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { style: { fontSize: fs + 1, fontWeight: 600, margin: 0, color: "#111827" }, children: [
                e.role,
                e.company && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { style: { fontWeight: 400, color: "#4b5563" }, children: [
                  " — ",
                  e.company
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/resume-preview.tsx",
                  lineNumber: 380,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 377,
                columnNumber: 17
              }, this),
              e.duration && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { style: { fontSize: sub, color: "#6b7280", whiteSpace: "nowrap" }, children: e.duration }, void 0, false, {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 384,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 369,
            columnNumber: 15
          },
          this
        ),
        e.description && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { style: { fontSize: fs, lineHeight: 1.55, color: "#374151", margin: "3px 0 0" }, children: e.description }, void 0, false, {
          fileName: "/app/applet/src/components/resume-preview.tsx",
          lineNumber: 390,
          columnNumber: 17
        }, this)
      ] }, i, true, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 368,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 366,
        columnNumber: 9
      }, this) : null;
    case "education":
      return data.education.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: data.education.map((e, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 12
          },
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { style: { fontSize: fs + 1, fontWeight: 600, margin: 0, color: "#111827" }, children: e.school }, void 0, false, {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 412,
                columnNumber: 17
              }, this),
              e.degree && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { style: { fontSize: fs, color: "#374151", margin: "2px 0 0" }, children: e.degree }, void 0, false, {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 416,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 411,
              columnNumber: 15
            }, this),
            e.year && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { style: { fontSize: sub, color: "#6b7280", whiteSpace: "nowrap" }, children: e.year }, void 0, false, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 420,
              columnNumber: 17
            }, this)
          ]
        },
        i,
        true,
        {
          fileName: "/app/applet/src/components/resume-preview.tsx",
          lineNumber: 402,
          columnNumber: 13
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 400,
        columnNumber: 9
      }, this) : null;
  }
}
function ModernTemplate({ data }) {
  const c = data.primaryColor;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { padding: "44px 52px", fontFamily: "Inter, sans-serif" }, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "header",
      {
        style: {
          display: "flex",
          gap: 20,
          alignItems: "center",
          paddingBottom: 14,
          borderBottom: `3px solid ${c}`
        },
        children: [
          data.photo && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Photo, { src: data.photo, ring: c }, void 0, false, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 446,
            columnNumber: 24
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "h1",
              {
                style: {
                  fontSize: 32,
                  fontWeight: 800,
                  lineHeight: 1.1,
                  margin: 0,
                  color: "#111827",
                  letterSpacing: "-0.02em"
                },
                children: data.name || "Your Name"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 448,
                columnNumber: 11
              },
              this
            ),
            data.role && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { style: { margin: "4px 0 0", fontSize: 14, fontWeight: 500, color: c }, children: data.role }, void 0, false, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 461,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ContactRow, { data }, void 0, false, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 466,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 465,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 447,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 437,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { marginTop: 18, display: "flex", flexDirection: "column", gap: 16 }, children: data.sectionOrder.map((id) => {
      const body = renderBody(id, data);
      if (!body) return null;
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SectionTitle, { id, color: c, showIcons: data.showIcons }, void 0, false, {
          fileName: "/app/applet/src/components/resume-preview.tsx",
          lineNumber: 476,
          columnNumber: 15
        }, this),
        body
      ] }, id, true, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 475,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "/app/applet/src/components/resume-preview.tsx",
      lineNumber: 470,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/resume-preview.tsx",
    lineNumber: 436,
    columnNumber: 5
  }, this);
}
function SidebarTemplate({ data }) {
  const sidebarIds = ["skills", "education"];
  const mainIds = data.sectionOrder.filter((id) => !sidebarIds.includes(id));
  const c = data.primaryColor;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", height: "100%", width: "100%" }, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "aside",
      {
        style: {
          width: 270,
          minWidth: 270,
          maxWidth: 270,
          flexShrink: 0,
          background: c,
          color: "#ffffff",
          padding: "36px 24px",
          boxSizing: "border-box",
          overflow: "hidden"
        },
        children: [
          data.photo && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", justifyContent: "center", marginBottom: 18 }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Photo, { src: data.photo, size: 108, ring: "#ffffff" }, void 0, false, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 509,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 508,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "h1",
            {
              style: {
                fontSize: 26,
                fontWeight: 800,
                lineHeight: 1.15,
                margin: 0,
                color: "#ffffff",
                letterSpacing: "-0.01em"
              },
              children: data.name || "Your Name"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 512,
              columnNumber: 9
            },
            this
          ),
          data.role && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "p",
            {
              style: {
                margin: "6px 0 0",
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(255,255,255,0.9)"
              },
              children: data.role
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 525,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              style: {
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 12.5,
                color: "rgba(255,255,255,0.95)"
              },
              children: [
                data.email && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "a",
                  {
                    href: `mailto:${data.email}`,
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      color: "inherit",
                      textDecoration: "none"
                    },
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Mail, { style: { width: 13, height: 13, flexShrink: 0 } }, void 0, false, {
                        fileName: "/app/applet/src/components/resume-preview.tsx",
                        lineNumber: 557,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { style: { wordBreak: "break-all" }, children: data.email }, void 0, false, {
                        fileName: "/app/applet/src/components/resume-preview.tsx",
                        lineNumber: 558,
                        columnNumber: 15
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/resume-preview.tsx",
                    lineNumber: 547,
                    columnNumber: 13
                  },
                  this
                ),
                data.phone && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 7 }, children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Phone, { style: { width: 13, height: 13, flexShrink: 0 } }, void 0, false, {
                    fileName: "/app/applet/src/components/resume-preview.tsx",
                    lineNumber: 563,
                    columnNumber: 15
                  }, this),
                  data.phone
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/resume-preview.tsx",
                  lineNumber: 562,
                  columnNumber: 13
                }, this),
                data.location && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 7 }, children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { style: { width: 13, height: 13, flexShrink: 0 } }, void 0, false, {
                    fileName: "/app/applet/src/components/resume-preview.tsx",
                    lineNumber: 569,
                    columnNumber: 15
                  }, this),
                  data.location
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/resume-preview.tsx",
                  lineNumber: 568,
                  columnNumber: 13
                }, this),
                data.linkedin && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "a",
                  {
                    href: ensureProtocol(data.linkedin),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      color: "inherit",
                      textDecoration: "none",
                      wordBreak: "break-all"
                    },
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Linkedin, { style: { width: 13, height: 13, flexShrink: 0 } }, void 0, false, {
                        fileName: "/app/applet/src/components/resume-preview.tsx",
                        lineNumber: 587,
                        columnNumber: 15
                      }, this),
                      shortUrl(data.linkedin)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/resume-preview.tsx",
                    lineNumber: 574,
                    columnNumber: 13
                  },
                  this
                ),
                data.github && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "a",
                  {
                    href: ensureProtocol(data.github),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      color: "inherit",
                      textDecoration: "none",
                      wordBreak: "break-all"
                    },
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Github, { style: { width: 13, height: 13, flexShrink: 0 } }, void 0, false, {
                        fileName: "/app/applet/src/components/resume-preview.tsx",
                        lineNumber: 605,
                        columnNumber: 15
                      }, this),
                      shortUrl(data.github)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/resume-preview.tsx",
                    lineNumber: 592,
                    columnNumber: 13
                  },
                  this
                ),
                data.website && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "a",
                  {
                    href: ensureProtocol(data.website),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      color: "inherit",
                      textDecoration: "none",
                      wordBreak: "break-all"
                    },
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Globe, { style: { width: 13, height: 13, flexShrink: 0 } }, void 0, false, {
                        fileName: "/app/applet/src/components/resume-preview.tsx",
                        lineNumber: 623,
                        columnNumber: 15
                      }, this),
                      shortUrl(data.website)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/resume-preview.tsx",
                    lineNumber: 610,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 536,
              columnNumber: 9
            },
            this
          ),
          data.skills.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { marginTop: 26 }, children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "h2",
              {
                style: {
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  margin: "0 0 10px",
                  color: "#ffffff"
                },
                children: "Skills"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 630,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 }, children: data.skills.map((s) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "span",
              {
                style: {
                  fontSize: 12,
                  padding: "4px 10px",
                  borderRadius: 5,
                  background: "rgba(255,255,255,0.18)",
                  color: "#ffffff",
                  fontWeight: 500
                },
                children: s
              },
              s,
              false,
              {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 644,
                columnNumber: 17
              },
              this
            )) }, void 0, false, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 642,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 629,
            columnNumber: 11
          }, this),
          data.education.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { marginTop: 26 }, children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "h2",
              {
                style: {
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  margin: "0 0 10px",
                  color: "#ffffff"
                },
                children: "Education"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 663,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: data.education.map((e, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "p",
                {
                  style: {
                    fontSize: 13.5,
                    fontWeight: 600,
                    margin: 0,
                    color: "#ffffff",
                    lineHeight: 1.3
                  },
                  children: e.school
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/resume-preview.tsx",
                  lineNumber: 678,
                  columnNumber: 19
                },
                this
              ),
              e.degree && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { style: { fontSize: 12, margin: "3px 0 0", color: "rgba(255,255,255,0.9)" }, children: e.degree }, void 0, false, {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 690,
                columnNumber: 21
              }, this),
              e.year && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "p",
                {
                  style: { fontSize: 11.5, margin: "2px 0 0", color: "rgba(255,255,255,0.75)" },
                  children: e.year
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/resume-preview.tsx",
                  lineNumber: 695,
                  columnNumber: 21
                },
                this
              )
            ] }, i, true, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 677,
              columnNumber: 17
            }, this)) }, void 0, false, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 675,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 662,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 494,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "main",
      {
        style: {
          width: 524,
          minWidth: 524,
          maxWidth: 524,
          flexShrink: 0,
          padding: "36px 32px",
          color: "#111827",
          boxSizing: "border-box",
          overflow: "hidden"
        },
        children: mainIds.map((id) => {
          const body = renderBody(id, data);
          if (!body) return null;
          return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { style: { marginBottom: 18 }, children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SectionTitle, { id, color: c, showIcons: data.showIcons, size: 14 }, void 0, false, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 724,
              columnNumber: 15
            }, this),
            body
          ] }, id, true, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 723,
            columnNumber: 13
          }, this);
        })
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 707,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/resume-preview.tsx",
    lineNumber: 493,
    columnNumber: 5
  }, this);
}
function CreativeTemplate({ data }) {
  const c = data.primaryColor;
  const tint = hexWithAlpha(c, 0.08);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { background: tint, padding: 24, fontFamily: "Inter, sans-serif" }, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "header",
      {
        style: {
          background: "#ffffff",
          borderRadius: 18,
          padding: 20,
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
          display: "flex",
          gap: 16,
          alignItems: "center"
        },
        children: [
          data.photo && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Photo, { src: data.photo, ring: c }, void 0, false, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 752,
            columnNumber: 24
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "h1",
              {
                style: {
                  fontSize: 30,
                  fontWeight: 800,
                  margin: 0,
                  color: "#111827",
                  letterSpacing: "-0.02em"
                },
                children: data.name || "Your Name"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 754,
                columnNumber: 11
              },
              this
            ),
            data.role && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { style: { margin: "4px 0 0", fontSize: 14, fontWeight: 600, color: c }, children: data.role }, void 0, false, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 766,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { marginTop: 10 }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ContactRow, { data }, void 0, false, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 771,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 770,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 753,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              style: {
                background: c,
                color: "#ffffff",
                padding: "5px 12px",
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase"
              },
              children: "CV"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 774,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 741,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { marginTop: 14, display: "flex", flexDirection: "column", gap: 12 }, children: data.sectionOrder.map((id) => {
      const body = renderBody(id, data);
      if (!body) return null;
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "section",
        {
          style: {
            background: "#ffffff",
            borderRadius: 16,
            padding: 18,
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
          },
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SectionTitle, { id, color: c, showIcons: data.showIcons, underline: false }, void 0, false, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 803,
              columnNumber: 15
            }, this),
            body
          ]
        },
        id,
        true,
        {
          fileName: "/app/applet/src/components/resume-preview.tsx",
          lineNumber: 794,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, false, {
      fileName: "/app/applet/src/components/resume-preview.tsx",
      lineNumber: 789,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/resume-preview.tsx",
    lineNumber: 740,
    columnNumber: 5
  }, this);
}
function ClassicTemplate({ data }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { padding: "48px 56px", fontFamily: "'Times New Roman', serif", color: "#000000" }, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("header", { style: { textAlign: "center", marginBottom: 14 }, children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { style: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "0.04em" }, children: (data.name || "Your Name").toUpperCase() }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 819,
        columnNumber: 9
      }, this),
      data.role && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { style: { margin: "4px 0 0", fontSize: 13, fontStyle: "italic" }, children: data.role }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 823,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { style: { margin: "6px 0 0", fontSize: 12 }, children: [data.email, data.phone, data.location].filter(Boolean).join("  |  ") }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 825,
        columnNumber: 9
      }, this),
      (data.linkedin || data.github || data.website) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { style: { margin: "3px 0 0", fontSize: 12 }, children: [
        data.linkedin && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "a",
          {
            href: ensureProtocol(data.linkedin),
            style: { color: "#000", textDecoration: "underline" },
            children: shortUrl(data.linkedin)
          },
          "li",
          false,
          {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 832,
            columnNumber: 17
          },
          this
        ),
        data.github && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "a",
          {
            href: ensureProtocol(data.github),
            style: { color: "#000", textDecoration: "underline" },
            children: shortUrl(data.github)
          },
          "gh",
          false,
          {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 841,
            columnNumber: 17
          },
          this
        ),
        data.website && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "a",
          {
            href: ensureProtocol(data.website),
            style: { color: "#000", textDecoration: "underline" },
            children: shortUrl(data.website)
          },
          "w",
          false,
          {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 850,
            columnNumber: 17
          },
          this
        )
      ].filter(Boolean).reduce(
        (acc, el, i) => i === 0 ? [el] : [...acc, "  |  ", el],
        []
      ) }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 829,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/resume-preview.tsx",
      lineNumber: 818,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { height: 1, background: "#000", margin: "8px 0 14px" } }, void 0, false, {
      fileName: "/app/applet/src/components/resume-preview.tsx",
      lineNumber: 867,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: data.sectionOrder.map((id) => {
      const body = renderBody(id, data, { color: "#000" });
      if (!body) return null;
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "h2",
          {
            style: {
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "0 0 4px",
              color: "#000"
            },
            children: SECTION_TITLE[id]
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 874,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { height: 1, background: "#000", marginBottom: 8 } }, void 0, false, {
          fileName: "/app/applet/src/components/resume-preview.tsx",
          lineNumber: 886,
          columnNumber: 15
        }, this),
        body
      ] }, id, true, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 873,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "/app/applet/src/components/resume-preview.tsx",
      lineNumber: 868,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/resume-preview.tsx",
    lineNumber: 817,
    columnNumber: 5
  }, this);
}
function MinimalTemplate({ data }) {
  const c = data.primaryColor;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { padding: "60px 72px", fontFamily: "Inter, sans-serif" }, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("header", { style: { textAlign: "center", marginBottom: 26 }, children: [
      data.photo && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", justifyContent: "center", marginBottom: 12 }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Photo, { src: data.photo, size: 88, ring: c }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 905,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 904,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "h1",
        {
          style: {
            fontSize: 30,
            fontWeight: 300,
            letterSpacing: "0.18em",
            margin: 0,
            color: "#111827",
            textTransform: "uppercase"
          },
          children: data.name || "Your Name"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/resume-preview.tsx",
          lineNumber: 908,
          columnNumber: 9
        },
        this
      ),
      data.role && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { style: { margin: "8px 0 0", fontSize: 13, color: c, letterSpacing: "0.06em" }, children: data.role }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 921,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", justifyContent: "center", marginTop: 12 }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { height: 1, width: 56, background: c } }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 926,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 925,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { marginTop: 12, display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ContactRow, { data }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 929,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 928,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/resume-preview.tsx",
      lineNumber: 902,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 22 }, children: data.sectionOrder.map((id) => {
      const body = renderBody(id, data);
      if (!body) return null;
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { textAlign: "center", marginBottom: 10 }, children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "h2",
            {
              style: {
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                margin: 0,
                color: "#111827"
              },
              children: SECTION_TITLE[id]
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 939,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { height: 1, width: 28, background: c, margin: "6px auto 0" } }, void 0, false, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 951,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/resume-preview.tsx",
          lineNumber: 938,
          columnNumber: 15
        }, this),
        body
      ] }, id, true, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 937,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "/app/applet/src/components/resume-preview.tsx",
      lineNumber: 932,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/resume-preview.tsx",
    lineNumber: 901,
    columnNumber: 5
  }, this);
}
function CompactTemplate({ data }) {
  const c = data.primaryColor;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { padding: "28px 36px", fontFamily: "Inter, sans-serif" }, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "header",
      {
        style: {
          display: "flex",
          gap: 14,
          alignItems: "center",
          paddingBottom: 8,
          borderBottom: `2px solid ${c}`
        },
        children: [
          data.photo && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Photo, { src: data.photo, size: 64, ring: c }, void 0, false, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 977,
            columnNumber: 24
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: 6
                },
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "h1",
                    {
                      style: {
                        fontSize: 24,
                        fontWeight: 800,
                        margin: 0,
                        color: "#111827",
                        letterSpacing: "-0.02em"
                      },
                      children: data.name || "Your Name"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/resume-preview.tsx",
                      lineNumber: 988,
                      columnNumber: 13
                    },
                    this
                  ),
                  data.role && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { style: { margin: 0, fontSize: 12, fontWeight: 600, color: c }, children: data.role }, void 0, false, {
                    fileName: "/app/applet/src/components/resume-preview.tsx",
                    lineNumber: 1e3,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/resume-preview.tsx",
                lineNumber: 979,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { marginTop: 4 }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ContactRow, { data }, void 0, false, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 1004,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/resume-preview.tsx",
              lineNumber: 1003,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 978,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 968,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { marginTop: 10, display: "flex", flexDirection: "column", gap: 9 }, children: data.sectionOrder.map((id) => {
      const body = renderBody(id, data, { compact: true });
      if (!body) return null;
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          SectionTitle,
          {
            id,
            color: c,
            showIcons: data.showIcons,
            underline: false,
            size: 11
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/resume-preview.tsx",
            lineNumber: 1014,
            columnNumber: 15
          },
          this
        ),
        body
      ] }, id, true, {
        fileName: "/app/applet/src/components/resume-preview.tsx",
        lineNumber: 1013,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "/app/applet/src/components/resume-preview.tsx",
      lineNumber: 1008,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/resume-preview.tsx",
    lineNumber: 967,
    columnNumber: 5
  }, this);
}
function hexWithAlpha(hex, alpha) {
  const m = hex.replace("#", "");
  const r = parseInt(m.substring(0, 2), 16);
  const g = parseInt(m.substring(2, 4), 16);
  const b = parseInt(m.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
async function exportResumePdf(name) {
  const node = document.querySelector("[data-resume-root]");
  if (!node) throw new Error("Resume preview not found");
  const transformedAncestors = [];
  let pAnc = node.parentElement;
  while (pAnc && pAnc !== document.body) {
    const t = pAnc.style.transform;
    if (t && t.includes("scale")) {
      transformedAncestors.push({ el: pAnc, transform: t, marginBottom: pAnc.style.marginBottom });
      pAnc.style.transform = "none";
      pAnc.style.marginBottom = "0px";
    }
    pAnc = pAnc.parentElement;
  }
  document.documentElement.classList.add("pdf-exporting");
  await new Promise((r) => requestAnimationFrame(() => r(null)));
  const sanitizeColors = (clonedDoc) => {
    const UNSUPPORTED = /(oklch|oklab|color\(|color-mix|lch|lab|hwb)\(/i;
    const PROPS = [
      "color",
      "backgroundColor",
      "borderTopColor",
      "borderRightColor",
      "borderBottomColor",
      "borderLeftColor",
      "outlineColor",
      "fill",
      "stroke"
    ];
    const toRgb = (value) => {
      const probe = clonedDoc.createElement("span");
      probe.style.color = value;
      clonedDoc.body.appendChild(probe);
      const resolved = clonedDoc.defaultView?.getComputedStyle(probe).color || "";
      probe.remove();
      return resolved && !UNSUPPORTED.test(resolved) ? resolved : null;
    };
    clonedDoc.querySelectorAll("*").forEach((el) => {
      const cs = clonedDoc.defaultView?.getComputedStyle(el);
      if (!cs) return;
      for (const prop of PROPS) {
        const val = cs[prop];
        if (val && UNSUPPORTED.test(val)) {
          const rgb = toRgb(val);
          el.style[prop] = rgb ?? (prop === "color" ? "#111111" : "transparent");
        }
      }
      if (cs.backgroundImage && UNSUPPORTED.test(cs.backgroundImage)) {
        el.style.backgroundImage = "none";
      }
    });
    const root = clonedDoc.querySelector("[data-resume-root]");
    if (root) {
      root.style.width = "794px";
      root.style.height = "1123px";
      root.style.minWidth = "794px";
      root.style.maxWidth = "794px";
      root.style.minHeight = "1123px";
      root.style.maxHeight = "1123px";
      root.style.overflow = "hidden";
      root.style.boxShadow = "none";
      root.style.margin = "0";
      root.style.transform = "none";
    }
  };
  try {
    const canvas = await html2canvas(node, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      logging: false,
      width: 794,
      height: 1123,
      windowWidth: 794,
      windowHeight: 1123,
      onclone: (clonedDoc) => sanitizeColors(clonedDoc)
    });
    const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, pageW, pageH);
    const nodeRect = node.getBoundingClientRect();
    const mmPerPx = pageW / 794;
    const anchors = Array.from(node.querySelectorAll("a[href]"));
    for (const a of anchors) {
      const r = a.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      const x = (r.left - nodeRect.left) * mmPerPx;
      const y = (r.top - nodeRect.top) * mmPerPx;
      const w = r.width * mmPerPx;
      const h = r.height * mmPerPx;
      pdf.link(x, y, w, h, { url: a.href });
    }
    pdf.save(`${name || "resume"}.pdf`);
  } finally {
    document.documentElement.classList.remove("pdf-exporting");
    for (const t of transformedAncestors) {
      t.el.style.transform = t.transform;
      t.el.style.marginBottom = t.marginBottom;
    }
  }
}
const STEPS = [
  { id: 1, label: "Basics", icon: User },
  { id: 2, label: "Skills", icon: Wrench },
  { id: 3, label: "Projects", icon: FolderGit2 },
  { id: 4, label: "Experience", icon: Briefcase },
  { id: 5, label: "Education", icon: GraduationCap }
];
const initial = {
  name: "",
  email: "",
  phone: "",
  location: "",
  role: "",
  summary: "",
  skills: [],
  projects: [],
  experience: [],
  education: [],
  template: "modern",
  sectionOrder: DEFAULT_SECTION_ORDER,
  photo: void 0,
  primaryColor: COLOR_PRESETS[0].primary,
  secondaryColor: COLOR_PRESETS[0].secondary,
  showIcons: true
};
const TEMPLATES = [
  { id: "modern", label: "Modern", desc: "Clean & professional" },
  { id: "sidebar", label: "Sidebar", desc: "Photo sidebar" },
  { id: "creative", label: "Creative", desc: "Card style" },
  { id: "classic", label: "Classic ATS", desc: "Pure B&W" },
  { id: "minimal", label: "Minimal", desc: "Centered & airy" },
  { id: "compact", label: "Compact", desc: "One-page dense" }
];
function Builder() {
  const [step, setStep] = reactExports.useState(1);
  const [data, setData] = reactExports.useState(initial);
  const [hydrated, setHydrated] = reactExports.useState(false);
  const [skillInput, setSkillInput] = reactExports.useState("");
  const [improvingIdx, setImprovingIdx] = reactExports.useState(null);
  const [downloading, setDownloading] = reactExports.useState(false);
  const [success, setSuccess] = reactExports.useState(false);
  const [zoom, setZoom] = reactExports.useState(0.78);
  const previewWrapRef = reactExports.useRef(null);
  const fileInputRef = reactExports.useRef(null);
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [cloudStatus, setCloudStatus] = reactExports.useState("idle");
  const saveTimer = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!authLoading && !user) navigate({ to: "/login" });
  }, [authLoading, user, navigate]);
  reactExports.useEffect(() => {
    if (!user) return;
    let cancelled = false;
    (async () => {
      try {
        const cloud = await loadResume(user.uid);
        if (cancelled) return;
        if (cloud) {
          setData((d) => ({ ...d, ...cloud, sectionOrder: cloud.sectionOrder ?? d.sectionOrder }));
        } else {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (raw) {
            const parsed = JSON.parse(raw);
            setData((d) => ({
              ...d,
              ...parsed,
              sectionOrder: parsed.sectionOrder ?? d.sectionOrder
            }));
          }
        }
      } catch (e) {
        console.warn("Failed to load resume:", e);
      } finally {
        if (!cancelled) setHydrated(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user]);
  reactExports.useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
    }
    if (!user) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    setCloudStatus("saving");
    saveTimer.current = setTimeout(async () => {
      try {
        await saveResume(user.uid, data);
        setCloudStatus("saved");
      } catch (e) {
        console.warn("Cloud save failed:", e);
        setCloudStatus("error");
      }
    }, 1200);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [data, hydrated, user]);
  const { suggestions, warnings } = calculateAtsScore(data);
  completionPercent(data);
  const suggestedSkills = data.role ? ROLE_SKILLS[data.role] ?? [] : [];
  const update = (key, value) => setData((d) => ({ ...d, [key]: value }));
  const addSkill = (s) => {
    const v = s.trim();
    if (!v || data.skills.includes(v)) return;
    update("skills", [...data.skills, v]);
    setSkillInput("");
  };
  const improveProject = async (i) => {
    setImprovingIdx(i);
    await new Promise((r) => setTimeout(r, 700));
    setData((d) => {
      const projects = [...d.projects];
      projects[i] = { ...projects[i], description: improveBullet(projects[i].description) };
      return { ...d, projects };
    });
    setImprovingIdx(null);
  };
  const downloadPdf = async () => {
    setDownloading(true);
    try {
      await new Promise((r) => setTimeout(r, 200));
      await exportResumePdf(data.name);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2200);
    } catch (e) {
      console.error("PDF export failed", e);
    } finally {
      setDownloading(false);
    }
  };
  const onPhoto = (file) => {
    if (!file.type.startsWith("image/")) return;
    if (file.size > 2 * 1024 * 1024) {
      alert("Image is larger than 2MB. Please pick a smaller photo.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => update("photo", reader.result);
    reader.readAsDataURL(file);
  };
  const loadDemo = () => setData({
    ...DEMO_DATA,
    template: data.template,
    sectionOrder: data.sectionOrder,
    primaryColor: data.primaryColor,
    secondaryColor: data.secondaryColor,
    showIcons: data.showIcons,
    photo: data.photo
  });
  const resetAll = () => {
    if (confirm("Clear all resume data?")) setData(initial);
  };
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));
  const onDragEnd = (e) => {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    const oldIdx = data.sectionOrder.indexOf(active.id);
    const newIdx = data.sectionOrder.indexOf(over.id);
    update("sectionOrder", arrayMove(data.sectionOrder, oldIdx, newIdx));
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-[1400px] px-4 py-8 lg:px-8", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-6 grid gap-4 lg:grid-cols-[1fr_auto]", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "glass rounded-2xl p-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: STEPS.map((s, i) => {
        const Icon = s.icon;
        const active = step === s.id;
        const done = step > s.id;
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-1 items-center", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              onClick: () => setStep(s.id),
              className: `flex items-center gap-2 rounded-xl px-3 py-2 transition-all ${active ? "bg-neon text-neon-foreground shadow-glow" : done ? "text-foreground" : "text-muted-foreground"}`,
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "div",
                  {
                    className: `flex h-7 w-7 items-center justify-center rounded-lg ${active ? "bg-neon-foreground/10" : done ? "bg-neon/20 text-neon" : "bg-muted"}`,
                    children: done ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 288,
                      columnNumber: 31
                    }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Icon, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 288,
                      columnNumber: 63
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 279,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "hidden text-sm font-semibold sm:inline", children: s.label }, void 0, false, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 290,
                  columnNumber: 21
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 269,
              columnNumber: 19
            },
            this
          ),
          i < STEPS.length - 1 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              className: `mx-1 h-0.5 flex-1 rounded ${done ? "bg-neon" : "bg-border"}`
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 293,
              columnNumber: 21
            },
            this
          )
        ] }, s.id, true, {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 268,
          columnNumber: 17
        }, this);
      }) }, void 0, false, {
        fileName: "/app/applet/src/components/builder.tsx",
        lineNumber: 262,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/builder.tsx",
        lineNumber: 261,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Link,
        {
          to: "/ats-checker",
          className: "group flex items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3 text-xs font-semibold hover:border-neon hover:text-neon hover:shadow-soft transition-all",
          title: "Scan your resume against ATS & Job Descriptions",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex h-7 w-7 items-center justify-center rounded-lg bg-neon/15 text-neon group-hover:bg-neon group-hover:text-neon-foreground transition-colors", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 309,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 308,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-bold text-foreground group-hover:text-neon", children: "ATS Checker" }, void 0, false, {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 312,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-muted-foreground", children: "Match with Job Description →" }, void 0, false, {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 313,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 311,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 303,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/app/applet/src/components/builder.tsx",
        lineNumber: 302,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/builder.tsx",
      lineNumber: 260,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-4 flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          onClick: loadDemo,
          className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold hover:bg-accent hover:text-accent-foreground transition-colors",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(WandSparkles, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 325,
              columnNumber: 11
            }, this),
            " Try Demo Resume"
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 321,
          columnNumber: 9
        },
        this
      ),
      user && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "span",
        {
          className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold ${cloudStatus === "saving" ? "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400" : cloudStatus === "saved" ? "border-neon/30 bg-neon/10 text-neon" : cloudStatus === "error" ? "border-destructive/30 bg-destructive/10 text-destructive" : "border-border bg-muted text-muted-foreground"}`,
          title: "Auto-saving to your Google account",
          children: [
            cloudStatus === "saving" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoaderCircle, { className: "h-3 w-3 animate-spin" }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 340,
              columnNumber: 42
            }, this),
            cloudStatus === "saved" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "h-3 w-3" }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 341,
              columnNumber: 41
            }, this),
            cloudStatus === "error" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TriangleAlert, { className: "h-3 w-3" }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 342,
              columnNumber: 41
            }, this),
            cloudStatus === "saving" ? "Saving…" : cloudStatus === "saved" ? "Saved to cloud" : cloudStatus === "error" ? "Save failed" : "Cloud sync"
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 328,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          onClick: resetAll,
          className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold hover:bg-accent hover:text-accent-foreground transition-colors",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 356,
              columnNumber: 11
            }, this),
            " Reset"
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 352,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "input",
          {
            type: "checkbox",
            checked: data.showIcons,
            onChange: (e) => update("showIcons", e.target.checked),
            className: "accent-current"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 359,
            columnNumber: 11
          },
          this
        ),
        "Section icons"
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/builder.tsx",
        lineNumber: 358,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/builder.tsx",
      lineNumber: 320,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-4 glass rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LayoutTemplate, { className: "h-3.5 w-3.5 text-neon" }, void 0, false, {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 372,
          columnNumber: 11
        }, this),
        " Template"
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/builder.tsx",
        lineNumber: 371,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-3 gap-2 sm:grid-cols-6", children: TEMPLATES.map((t) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          onClick: () => update("template", t.id),
          className: `group relative rounded-xl border-2 p-3 text-left transition-all ${data.template === t.id ? "border-neon bg-neon/10 shadow-glow" : "border-border bg-background hover:border-neon/50"}`,
          title: t.desc,
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-bold", children: t.label }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 386,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-0.5 text-[10px] text-muted-foreground", children: t.desc }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 387,
              columnNumber: 15
            }, this),
            data.template === t.id && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-neon text-neon-foreground", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "h-3 w-3" }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 390,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 389,
              columnNumber: 17
            }, this)
          ]
        },
        t.id,
        true,
        {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 376,
          columnNumber: 13
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/components/builder.tsx",
        lineNumber: 374,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Palette, { className: "h-3.5 w-3.5 text-neon" }, void 0, false, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 400,
            columnNumber: 13
          }, this),
          " Color Theme"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 399,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap items-center gap-2", children: [
          COLOR_PRESETS.map((p) => {
            const active = data.primaryColor.toLowerCase() === p.primary.toLowerCase();
            return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                onClick: () => {
                  update("primaryColor", p.primary);
                  update("secondaryColor", p.secondary);
                },
                className: `flex items-center gap-1.5 rounded-full border-2 px-2.5 py-1 text-xs font-semibold transition-all ${active ? "border-foreground" : "border-border hover:border-foreground/50"}`,
                title: p.name,
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "span",
                    {
                      className: "h-3.5 w-3.5 rounded-full border border-black/10",
                      style: { background: p.primary }
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 417,
                      columnNumber: 19
                    },
                    this
                  ),
                  p.name
                ]
              },
              p.name,
              true,
              {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 406,
                columnNumber: 17
              },
              this
            );
          }),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "flex items-center gap-1.5 rounded-full border-2 border-border px-2.5 py-1 text-xs font-semibold cursor-pointer hover:border-foreground/50", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "span",
              {
                className: "h-3.5 w-3.5 rounded-full border border-black/10",
                style: { background: data.primaryColor }
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 426,
                columnNumber: 15
              },
              this
            ),
            "Custom",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "input",
              {
                type: "color",
                value: data.primaryColor,
                onChange: (e) => update("primaryColor", e.target.value),
                className: "h-0 w-0 opacity-0"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 431,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 425,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 402,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/builder.tsx",
        lineNumber: 398,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/builder.tsx",
      lineNumber: 370,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "glass rounded-3xl p-6 lg:p-8", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -16 },
            transition: { duration: 0.25 },
            children: [
              step === 1 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(StepWrap, { title: "Basic Information", desc: "Let's start with the essentials.", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-5 flex items-center gap-4 rounded-2xl border border-border bg-background/50 p-4", children: [
                  data.photo ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "img",
                    {
                      src: data.photo,
                      alt: "profile",
                      className: "h-16 w-16 rounded-full object-cover border-2 border-neon"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 458,
                      columnNumber: 23
                    },
                    this
                  ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-border bg-muted text-muted-foreground", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Image, { className: "h-6 w-6" }, void 0, false, {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 465,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 464,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm font-semibold", children: "Profile photo" }, void 0, false, {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 469,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-muted-foreground", children: "Optional. Shown on Sidebar / Modern / Creative templates." }, void 0, false, {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 470,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 flex gap-2", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "input",
                        {
                          ref: fileInputRef,
                          type: "file",
                          accept: "image/*",
                          className: "hidden",
                          onChange: (e) => {
                            const f = e.target.files?.[0];
                            if (f) onPhoto(f);
                            e.target.value = "";
                          }
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/components/builder.tsx",
                          lineNumber: 474,
                          columnNumber: 25
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "button",
                        {
                          onClick: () => fileInputRef.current?.click(),
                          className: "inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-xs font-semibold text-background hover:opacity-90",
                          children: [
                            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "h-3.5 w-3.5" }, void 0, false, {
                              fileName: "/app/applet/src/components/builder.tsx",
                              lineNumber: 489,
                              columnNumber: 27
                            }, this),
                            " ",
                            data.photo ? "Change" : "Upload"
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/app/applet/src/components/builder.tsx",
                          lineNumber: 485,
                          columnNumber: 25
                        },
                        this
                      ),
                      data.photo && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "button",
                        {
                          onClick: () => update("photo", void 0),
                          className: "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-accent",
                          children: [
                            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-3.5 w-3.5" }, void 0, false, {
                              fileName: "/app/applet/src/components/builder.tsx",
                              lineNumber: 496,
                              columnNumber: 29
                            }, this),
                            " Remove"
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/app/applet/src/components/builder.tsx",
                          lineNumber: 492,
                          columnNumber: 27
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 473,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 468,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 456,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Field,
                    {
                      label: "Full Name",
                      value: data.name,
                      onChange: (v) => update("name", v),
                      placeholder: "Adithya Sivakumar"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 504,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Field,
                    {
                      label: "Email",
                      value: data.email,
                      onChange: (v) => update("email", v),
                      placeholder: "adithya@email.com"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 510,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Field,
                    {
                      label: "Phone",
                      value: data.phone,
                      onChange: (v) => update("phone", v),
                      placeholder: "+91 98765 43210"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 516,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Field,
                    {
                      label: "Location",
                      value: data.location,
                      onChange: (v) => update("location", v),
                      placeholder: "Chennai, India"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 522,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 503,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Target Role" }, void 0, false, {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 530,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "select",
                    {
                      value: data.role,
                      onChange: (e) => update("role", e.target.value),
                      className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/30",
                      children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "", children: "Select a role…" }, void 0, false, {
                          fileName: "/app/applet/src/components/builder.tsx",
                          lineNumber: 538,
                          columnNumber: 23
                        }, this),
                        ROLES.map((r) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { children: r }, r, false, {
                          fileName: "/app/applet/src/components/builder.tsx",
                          lineNumber: 540,
                          columnNumber: 25
                        }, this))
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 533,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 529,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Summary" }, void 0, false, {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 545,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "textarea",
                    {
                      value: data.summary,
                      onChange: (e) => update("summary", e.target.value),
                      placeholder: "Final-year CS student passionate about building scalable web apps…",
                      rows: 3,
                      className: "w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/30"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 548,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 544,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Globe, { className: "h-3.5 w-3.5 text-neon" }, void 0, false, {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 560,
                      columnNumber: 23
                    }, this),
                    " Professional Links"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 559,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      UrlField,
                      {
                        icon: Linkedin,
                        label: "LinkedIn",
                        value: data.linkedin ?? "",
                        onChange: (v) => update("linkedin", v),
                        placeholder: "https://linkedin.com/in/yourname"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/components/builder.tsx",
                        lineNumber: 563,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      UrlField,
                      {
                        icon: Github,
                        label: "GitHub",
                        value: data.github ?? "",
                        onChange: (v) => update("github", v),
                        placeholder: "https://github.com/yourname"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/components/builder.tsx",
                        lineNumber: 570,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      UrlField,
                      {
                        icon: Globe,
                        label: "Portfolio / Website",
                        value: data.website ?? "",
                        onChange: (v) => update("website", v),
                        placeholder: "https://yourname.dev"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/components/builder.tsx",
                        lineNumber: 577,
                        columnNumber: 23
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 562,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 558,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 454,
                columnNumber: 17
              }, this),
              step === 2 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(StepWrap, { title: "Skills", desc: "Add skills relevant to your target role.", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "input",
                    {
                      value: skillInput,
                      onChange: (e) => setSkillInput(e.target.value),
                      onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), addSkill(skillInput)),
                      placeholder: "Type a skill and press Enter",
                      className: "flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/30"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 592,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "button",
                    {
                      onClick: () => addSkill(skillInput),
                      className: "rounded-xl bg-foreground px-4 text-background hover:opacity-90",
                      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "h-4 w-4" }, void 0, false, {
                        fileName: "/app/applet/src/components/builder.tsx",
                        lineNumber: 605,
                        columnNumber: 23
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 601,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 591,
                  columnNumber: 19
                }, this),
                data.skills.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 flex flex-wrap gap-2", children: data.skills.map((s) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  motion.span,
                  {
                    layout: true,
                    initial: { scale: 0.8, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    className: "inline-flex items-center gap-1.5 rounded-full bg-neon px-3 py-1 text-xs font-semibold text-neon-foreground",
                    children: [
                      s,
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "button",
                        {
                          onClick: () => update(
                            "skills",
                            data.skills.filter((x) => x !== s)
                          ),
                          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-3 w-3" }, void 0, false, {
                            fileName: "/app/applet/src/components/builder.tsx",
                            lineNumber: 628,
                            columnNumber: 29
                          }, this)
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/components/builder.tsx",
                          lineNumber: 620,
                          columnNumber: 27
                        },
                        this
                      )
                    ]
                  },
                  s,
                  true,
                  {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 612,
                    columnNumber: 25
                  },
                  this
                )) }, void 0, false, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 610,
                  columnNumber: 21
                }, this),
                suggestedSkills.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { className: "h-3.5 w-3.5 text-neon" }, void 0, false, {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 638,
                      columnNumber: 25
                    }, this),
                    " AI Suggested for ",
                    data.role
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 637,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-2", children: suggestedSkills.filter((s) => !data.skills.includes(s)).map((s) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "button",
                    {
                      onClick: () => addSkill(s),
                      className: "rounded-full border border-dashed border-neon/60 px-3 py-1 text-xs font-medium text-foreground hover:bg-neon hover:text-neon-foreground transition-colors",
                      children: [
                        "+ ",
                        s
                      ]
                    },
                    s,
                    true,
                    {
                      fileName: "/app/applet/src/components/builder.tsx",
                      lineNumber: 644,
                      columnNumber: 29
                    },
                    this
                  )) }, void 0, false, {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 640,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 636,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 590,
                columnNumber: 17
              }, this),
              step === 3 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(StepWrap, { title: "Projects", desc: "Showcase what you've built.", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
                data.projects.map((p, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "div",
                  {
                    className: "rounded-2xl border border-border bg-background/50 p-4",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          "input",
                          {
                            value: p.title,
                            onChange: (e) => {
                              const ps = [...data.projects];
                              ps[i] = { ...ps[i], title: e.target.value };
                              update("projects", ps);
                            },
                            placeholder: "Project name",
                            className: "flex-1 bg-transparent text-base font-semibold focus:outline-none"
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/builder.tsx",
                            lineNumber: 667,
                            columnNumber: 27
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          "button",
                          {
                            onClick: () => update(
                              "projects",
                              data.projects.filter((_, x) => x !== i)
                            ),
                            className: "text-muted-foreground hover:text-destructive",
                            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
                              fileName: "/app/applet/src/components/builder.tsx",
                              lineNumber: 686,
                              columnNumber: 29
                            }, this)
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/builder.tsx",
                            lineNumber: 677,
                            columnNumber: 27
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/builder.tsx",
                        lineNumber: 666,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "textarea",
                        {
                          value: p.description,
                          onChange: (e) => {
                            const ps = [...data.projects];
                            ps[i] = { ...ps[i], description: e.target.value };
                            update("projects", ps);
                          },
                          rows: 3,
                          placeholder: "What did you build? What was the impact?",
                          className: "mt-2 w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-neon focus:outline-none"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/components/builder.tsx",
                          lineNumber: 689,
                          columnNumber: 25
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "input",
                        {
                          value: p.tech ?? "",
                          onChange: (e) => {
                            const ps = [...data.projects];
                            ps[i] = { ...ps[i], tech: e.target.value };
                            update("projects", ps);
                          },
                          placeholder: "Tech stack — e.g. React, Node.js, PostgreSQL",
                          className: "mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-neon focus:outline-none"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/components/builder.tsx",
                          lineNumber: 700,
                          columnNumber: 25
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 grid gap-2 sm:grid-cols-2", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          UrlField,
                          {
                            icon: Github,
                            label: "GitHub",
                            value: p.github ?? "",
                            onChange: (v) => {
                              const ps = [...data.projects];
                              ps[i] = { ...ps[i], github: v };
                              update("projects", ps);
                            },
                            placeholder: "https://github.com/you/project",
                            compact: true
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/builder.tsx",
                            lineNumber: 711,
                            columnNumber: 27
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          UrlField,
                          {
                            icon: ExternalLink,
                            label: "Live Demo",
                            value: p.demo ?? "",
                            onChange: (v) => {
                              const ps = [...data.projects];
                              ps[i] = { ...ps[i], demo: v };
                              update("projects", ps);
                            },
                            placeholder: "https://project.vercel.app",
                            compact: true
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/builder.tsx",
                            lineNumber: 723,
                            columnNumber: 27
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/builder.tsx",
                        lineNumber: 710,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "button",
                        {
                          onClick: () => improveProject(i),
                          disabled: improvingIdx === i || !p.description,
                          className: "mt-3 inline-flex items-center gap-1.5 rounded-full bg-neon px-3 py-1.5 text-xs font-semibold text-neon-foreground hover:opacity-90 disabled:opacity-50",
                          children: [
                            improvingIdx === i ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }, void 0, false, {
                              fileName: "/app/applet/src/components/builder.tsx",
                              lineNumber: 742,
                              columnNumber: 29
                            }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { className: "h-3.5 w-3.5" }, void 0, false, {
                              fileName: "/app/applet/src/components/builder.tsx",
                              lineNumber: 744,
                              columnNumber: 29
                            }, this),
                            "Improve with AI"
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/app/applet/src/components/builder.tsx",
                          lineNumber: 736,
                          columnNumber: 25
                        },
                        this
                      )
                    ]
                  },
                  i,
                  true,
                  {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 662,
                    columnNumber: 23
                  },
                  this
                )),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "button",
                  {
                    onClick: () => update("projects", [
                      ...data.projects,
                      { title: "", description: "", tech: "", github: "", demo: "" }
                    ]),
                    className: "flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border py-4 text-sm font-medium text-muted-foreground hover:border-neon hover:text-neon transition-colors",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "h-4 w-4" }, void 0, false, {
                        fileName: "/app/applet/src/components/builder.tsx",
                        lineNumber: 759,
                        columnNumber: 23
                      }, this),
                      " Add Project"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 750,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 660,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 659,
                columnNumber: 17
              }, this),
              step === 4 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(StepWrap, { title: "Experience", desc: "Internships and jobs (optional).", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
                data.experience.map((e, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "div",
                  {
                    className: "rounded-2xl border border-border bg-background/50 p-4 space-y-2",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          "input",
                          {
                            value: e.role,
                            onChange: (ev) => {
                              const a = [...data.experience];
                              a[i] = { ...a[i], role: ev.target.value };
                              update("experience", a);
                            },
                            placeholder: "Role",
                            className: "flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-neon"
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/builder.tsx",
                            lineNumber: 774,
                            columnNumber: 27
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          "button",
                          {
                            onClick: () => update(
                              "experience",
                              data.experience.filter((_, x) => x !== i)
                            ),
                            className: "text-muted-foreground hover:text-destructive",
                            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
                              fileName: "/app/applet/src/components/builder.tsx",
                              lineNumber: 793,
                              columnNumber: 29
                            }, this)
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/builder.tsx",
                            lineNumber: 784,
                            columnNumber: 27
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/builder.tsx",
                        lineNumber: 773,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-2 sm:grid-cols-2", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          "input",
                          {
                            value: e.company,
                            onChange: (ev) => {
                              const a = [...data.experience];
                              a[i] = { ...a[i], company: ev.target.value };
                              update("experience", a);
                            },
                            placeholder: "Company",
                            className: "rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-neon"
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/builder.tsx",
                            lineNumber: 797,
                            columnNumber: 27
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          "input",
                          {
                            value: e.duration,
                            onChange: (ev) => {
                              const a = [...data.experience];
                              a[i] = { ...a[i], duration: ev.target.value };
                              update("experience", a);
                            },
                            placeholder: "Jun 2024 – Present",
                            className: "rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-neon"
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/builder.tsx",
                            lineNumber: 807,
                            columnNumber: 27
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/builder.tsx",
                        lineNumber: 796,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "textarea",
                        {
                          value: e.description,
                          onChange: (ev) => {
                            const a = [...data.experience];
                            a[i] = { ...a[i], description: ev.target.value };
                            update("experience", a);
                          },
                          rows: 2,
                          placeholder: "Key achievements…",
                          className: "w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-neon"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/components/builder.tsx",
                          lineNumber: 818,
                          columnNumber: 25
                        },
                        this
                      )
                    ]
                  },
                  i,
                  true,
                  {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 769,
                    columnNumber: 23
                  },
                  this
                )),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "button",
                  {
                    onClick: () => update("experience", [
                      ...data.experience,
                      { role: "", company: "", duration: "", description: "" }
                    ]),
                    className: "flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border py-4 text-sm font-medium text-muted-foreground hover:border-neon hover:text-neon transition-colors",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "h-4 w-4" }, void 0, false, {
                        fileName: "/app/applet/src/components/builder.tsx",
                        lineNumber: 840,
                        columnNumber: 23
                      }, this),
                      " Add Experience"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 831,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 767,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 766,
                columnNumber: 17
              }, this),
              step === 5 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(StepWrap, { title: "Education", desc: "Your academic background.", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
                data.education.map((e, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "div",
                  {
                    className: "rounded-2xl border border-border bg-background/50 p-4 space-y-2",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          "input",
                          {
                            value: e.school,
                            onChange: (ev) => {
                              const a = [...data.education];
                              a[i] = { ...a[i], school: ev.target.value };
                              update("education", a);
                            },
                            placeholder: "School / University",
                            className: "flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-neon"
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/builder.tsx",
                            lineNumber: 855,
                            columnNumber: 27
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          "button",
                          {
                            onClick: () => update(
                              "education",
                              data.education.filter((_, x) => x !== i)
                            ),
                            className: "text-muted-foreground hover:text-destructive",
                            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
                              fileName: "/app/applet/src/components/builder.tsx",
                              lineNumber: 874,
                              columnNumber: 29
                            }, this)
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/builder.tsx",
                            lineNumber: 865,
                            columnNumber: 27
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/builder.tsx",
                        lineNumber: 854,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-2 sm:grid-cols-2", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          "input",
                          {
                            value: e.degree,
                            onChange: (ev) => {
                              const a = [...data.education];
                              a[i] = { ...a[i], degree: ev.target.value };
                              update("education", a);
                            },
                            placeholder: "B.Sc. Computer Science",
                            className: "rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-neon"
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/builder.tsx",
                            lineNumber: 878,
                            columnNumber: 27
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          "input",
                          {
                            value: e.year,
                            onChange: (ev) => {
                              const a = [...data.education];
                              a[i] = { ...a[i], year: ev.target.value };
                              update("education", a);
                            },
                            placeholder: "2022 – 2026",
                            className: "rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-neon"
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/builder.tsx",
                            lineNumber: 888,
                            columnNumber: 27
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/builder.tsx",
                        lineNumber: 877,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  i,
                  true,
                  {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 850,
                    columnNumber: 23
                  },
                  this
                )),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "button",
                  {
                    onClick: () => update("education", [
                      ...data.education,
                      { school: "", degree: "", year: "" }
                    ]),
                    className: "flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border py-4 text-sm font-medium text-muted-foreground hover:border-neon hover:text-neon transition-colors",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "h-4 w-4" }, void 0, false, {
                        fileName: "/app/applet/src/components/builder.tsx",
                        lineNumber: 910,
                        columnNumber: 23
                      }, this),
                      " Add Education"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/builder.tsx",
                    lineNumber: 901,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 848,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 847,
                columnNumber: 17
              }, this)
            ]
          },
          step,
          true,
          {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 446,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 445,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              onClick: () => setStep((s) => Math.max(1, s - 1)),
              disabled: step === 1,
              className: "inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-accent disabled:opacity-40",
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 924,
                  columnNumber: 15
                }, this),
                " Back"
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 919,
              columnNumber: 13
            },
            this
          ),
          step < STEPS.length ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              onClick: () => setStep((s) => Math.min(STEPS.length, s + 1)),
              className: "inline-flex items-center gap-1.5 rounded-full bg-neon px-5 py-2 text-sm font-semibold text-neon-foreground hover:opacity-90 hover:shadow-glow transition-all",
              children: [
                "Next ",
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 931,
                  columnNumber: 22
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 927,
              columnNumber: 15
            },
            this
          ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              onClick: downloadPdf,
              disabled: downloading,
              className: "inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background hover:opacity-90 disabled:opacity-50",
              children: [
                downloading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoaderCircle, { className: "h-4 w-4 animate-spin" }, void 0, false, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 940,
                  columnNumber: 19
                }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Download, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 942,
                  columnNumber: 19
                }, this),
                "Download Resume"
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 934,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 918,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 rounded-2xl border border-border bg-background/40 p-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(GripVertical, { className: "h-3.5 w-3.5 text-neon" }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 952,
              columnNumber: 15
            }, this),
            " Reorder Sections (drag)"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 951,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DndContext, { sensors, collisionDetection: closestCenter, onDragEnd, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SortableContext, { items: data.sectionOrder, strategy: verticalListSortingStrategy, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: data.sectionOrder.map((id) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SortableRow, { id, label: SECTION_LABELS[id] }, id, false, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 958,
            columnNumber: 21
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 956,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 955,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 954,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 950,
          columnNumber: 11
        }, this),
        warnings.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 rounded-2xl border border-destructive/40 bg-destructive/5 p-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-destructive", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TriangleAlert, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 968,
              columnNumber: 17
            }, this),
            " Weak Resume Detector"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 967,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "space-y-1 text-sm text-foreground/80", children: warnings.map((w) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: [
            "⚠ ",
            w
          ] }, w, true, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 972,
            columnNumber: 19
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 970,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 966,
          columnNumber: 13
        }, this),
        suggestions.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 rounded-2xl border border-border bg-background/40 p-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { className: "h-3.5 w-3.5 text-neon" }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 981,
              columnNumber: 17
            }, this),
            " Suggestions to Improve Score"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 980,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "space-y-1 text-sm text-muted-foreground", children: suggestions.map((s) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: [
            "• ",
            s
          ] }, s, true, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 985,
            columnNumber: 19
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 983,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 979,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/builder.tsx",
        lineNumber: 444,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:sticky lg:top-24 lg:h-fit", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-2 flex items-center justify-between rounded-full border border-border bg-background px-3 py-1.5 text-xs", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-1.5 font-semibold text-muted-foreground", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Eye, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 997,
              columnNumber: 15
            }, this),
            " Live Preview"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 996,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                onClick: () => setZoom((z) => Math.max(0.4, +(z - 0.1).toFixed(2))),
                className: "flex h-6 w-6 items-center justify-center rounded-full border border-border hover:bg-accent",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ZoomOut, { className: "h-3.5 w-3.5" }, void 0, false, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 1004,
                  columnNumber: 17
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 1e3,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "w-10 text-center font-mono", children: [
              Math.round(zoom * 100),
              "%"
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 1006,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                onClick: () => setZoom((z) => Math.min(1.4, +(z + 0.1).toFixed(2))),
                className: "flex h-6 w-6 items-center justify-center rounded-full border border-border hover:bg-accent",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ZoomIn, { className: "h-3.5 w-3.5" }, void 0, false, {
                  fileName: "/app/applet/src/components/builder.tsx",
                  lineNumber: 1011,
                  columnNumber: 17
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 1007,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 999,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 995,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { ref: previewWrapRef, className: "rounded-3xl bg-muted/40 p-4 lg:p-6 overflow-auto", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.96 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.3 },
            className: "origin-top",
            style: { transform: `scale(${zoom})`, marginBottom: `${-(1 - zoom) * 100}%` },
            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ResumePreview, { data }, void 0, false, {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 1025,
              columnNumber: 15
            }, this)
          },
          data.template,
          false,
          {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 1017,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 1016,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "button",
          {
            onClick: downloadPdf,
            disabled: downloading,
            className: "mt-4 hidden lg:inline-flex w-full items-center justify-center gap-2 rounded-full bg-neon px-5 py-3 text-sm font-bold text-neon-foreground hover:opacity-90 hover:shadow-glow disabled:opacity-50 transition-all",
            children: [
              downloading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoaderCircle, { className: "h-4 w-4 animate-spin" }, void 0, false, {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 1034,
                columnNumber: 15
              }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Download, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/app/applet/src/components/builder.tsx",
                lineNumber: 1036,
                columnNumber: 15
              }, this),
              "Download as PDF"
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 1028,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/builder.tsx",
        lineNumber: 993,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/builder.tsx",
      lineNumber: 442,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AnimatePresence, { children: success && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 40, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 40, scale: 0.9 },
        className: "fixed bottom-8 left-1/2 z-50 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-neon px-5 py-3 text-sm font-bold text-neon-foreground shadow-glow",
        children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 1051,
            columnNumber: 13
          }, this),
          " Resume downloaded successfully!"
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/builder.tsx",
        lineNumber: 1045,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/components/builder.tsx",
      lineNumber: 1043,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/builder.tsx",
    lineNumber: 258,
    columnNumber: 5
  }, this);
}
function SortableRow({ id, label }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      ref: setNodeRef,
      style,
      ...attributes,
      ...listeners,
      className: "flex cursor-grab items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:border-neon active:cursor-grabbing",
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(GripVertical, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
          fileName: "/app/applet/src/components/builder.tsx",
          lineNumber: 1076,
          columnNumber: 7
        }, this),
        label
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/builder.tsx",
      lineNumber: 1069,
      columnNumber: 5
    },
    this
  );
}
function StepWrap({
  title,
  desc,
  children
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-bold", children: title }, void 0, false, {
      fileName: "/app/applet/src/components/builder.tsx",
      lineNumber: 1093,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm text-muted-foreground", children: desc }, void 0, false, {
      fileName: "/app/applet/src/components/builder.tsx",
      lineNumber: 1094,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6", children }, void 0, false, {
      fileName: "/app/applet/src/components/builder.tsx",
      lineNumber: 1095,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/builder.tsx",
    lineNumber: 1092,
    columnNumber: 5
  }, this);
}
function Field({
  label,
  value,
  onChange,
  placeholder
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: label }, void 0, false, {
      fileName: "/app/applet/src/components/builder.tsx",
      lineNumber: 1113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "input",
      {
        value,
        onChange: (e) => onChange(e.target.value),
        placeholder,
        className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/30 transition-colors"
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/builder.tsx",
        lineNumber: 1116,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/builder.tsx",
    lineNumber: 1112,
    columnNumber: 5
  }, this);
}
function UrlField({
  icon: Icon,
  label,
  value,
  onChange,
  placeholder,
  compact
}) {
  const valid = isValidUrl(value);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "mb-1 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", children: label }, void 0, false, {
      fileName: "/app/applet/src/components/builder.tsx",
      lineNumber: 1144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "div",
      {
        className: `flex items-center gap-2 rounded-xl border bg-background px-3 ${compact ? "py-1.5" : "py-2.5"} focus-within:border-neon focus-within:ring-2 focus-within:ring-neon/30 ${valid ? "border-border" : "border-destructive"}`,
        children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Icon, { className: "h-4 w-4 shrink-0 text-muted-foreground" }, void 0, false, {
            fileName: "/app/applet/src/components/builder.tsx",
            lineNumber: 1150,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "input",
            {
              value,
              onChange: (e) => onChange(e.target.value),
              placeholder,
              className: "w-full bg-transparent text-sm focus:outline-none",
              inputMode: "url"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/builder.tsx",
              lineNumber: 1151,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/builder.tsx",
        lineNumber: 1147,
        columnNumber: 7
      },
      this
    ),
    !valid && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-[11px] font-medium text-destructive", children: "Enter a valid URL starting with http:// or https://" }, void 0, false, {
      fileName: "/app/applet/src/components/builder.tsx",
      lineNumber: 1160,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/builder.tsx",
    lineNumber: 1143,
    columnNumber: 5
  }, this);
}
const SplitComponent = Builder;
export {
  SplitComponent as component
};
