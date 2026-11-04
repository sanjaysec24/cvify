import { ROLE_SKILLS, ROLES, improveBullet } from "./resume";

export type ATSFormattingCheck = {
  id: string;
  label: string;
  status: "pass" | "warning" | "fail";
  detail: string;
};

export type ATSStrength = {
  title: string;
  detail: string;
};

export type ATSImprovementArea = {
  title: string;
  detail: string;
  priority: "high" | "medium" | "low";
};

export type ATSRecommendation = {
  category: "keywords" | "formatting" | "impact" | "content";
  action: string;
  impact: string;
};

export type AnalyzedResume = {
  rawText: string;
  jobDescription?: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  detectedRole: string | null;
  hasSummary: boolean;
  hasSkillsSection: boolean;
  hasProjectsSection: boolean;
  hasExperienceSection: boolean;
  hasEducationSection: boolean;
  skills: string[];
  matchedKeywords: string[];
  missingKeywords: string[];
  keywordMatchPct: number;
  wordCount: number;
  bullets: string[];
  weakBullets: string[];
  improvedBullets: { original: string; improved: string }[];
  score: number;
  suggestions: string[];
  warnings: string[];
  // Enhanced ATS Analysis fields:
  jobTitle?: string;
  jobKeywords: string[];
  formattingChecks: ATSFormattingCheck[];
  readabilityScore: number;
  metricsScore: number;
  strengths: ATSStrength[];
  areasToImprove: ATSImprovementArea[];
  recommendations: ATSRecommendation[];
  scoreBreakdown: {
    keywordMatch: number;
    formatting: number;
    contentStructure: number;
    impactMetrics: number;
  };
};

const SECTION_KEYWORDS = {
  summary: ["summary", "profile", "objective", "about me", "professional summary"],
  skills: ["skills", "technical skills", "technologies", "tech stack", "core competencies"],
  projects: ["projects", "personal projects", "selected projects", "academic projects"],
  experience: [
    "experience",
    "work experience",
    "employment",
    "internship",
    "professional experience",
  ],
  education: ["education", "academic", "qualification", "degrees"],
};

function hasSection(text: string, words: string[]): boolean {
  const lower = text.toLowerCase();
  return words.some((w) => new RegExp(`(^|\\n|\\s)${w}\\b`, "i").test(lower));
}

function extractEmail(text: string): string | null {
  const m = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  return m ? m[0] : null;
}

function extractPhone(text: string): string | null {
  const m = text.match(/(\+?\d[\d\s().-]{8,}\d)/);
  return m ? m[0].trim() : null;
}

function extractName(text: string): string | null {
  // Heuristic: first non-empty line with 2-4 capitalized words, no email/phone
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  for (const line of lines.slice(0, 8)) {
    if (line.includes("@") || /\d{3,}/.test(line)) continue;
    const words = line.split(/\s+/);
    if (words.length < 2 || words.length > 5) continue;
    const allCapsLike = words.every((w) => /^[A-Z][a-zA-Z'’-]+$/.test(w) || /^[A-Z]+$/.test(w));
    if (allCapsLike) return line;
  }
  return null;
}

// Comprehensive catalog of common tech and industry skills
const COMMON_INDUSTRY_KEYWORDS = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "Go",
  "Golang",
  "Rust",
  "PHP",
  "HTML",
  "HTML5",
  "CSS",
  "CSS3",
  "Sass",
  "Tailwind CSS",
  "Bootstrap",
  "React",
  "React.js",
  "Next.js",
  "Vue",
  "Vue.js",
  "Nuxt.js",
  "Angular",
  "Svelte",
  "Node.js",
  "Express",
  "Express.js",
  "NestJS",
  "FastAPI",
  "Django",
  "Flask",
  "Spring Boot",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "NoSQL",
  "Redis",
  "SQLite",
  "DynamoDB",
  "GraphQL",
  "REST API",
  "RESTful",
  "Microservices",
  "WebSockets",
  "Kafka",
  "RabbitMQ",
  "Git",
  "GitHub",
  "GitLab",
  "CI/CD",
  "Docker",
  "Kubernetes",
  "Linux",
  "Bash",
  "Shell",
  "AWS",
  "Amazon Web Services",
  "GCP",
  "Google Cloud",
  "Azure",
  "Cloudflare",
  "Terraform",
  "Ansible",
  "Prometheus",
  "Grafana",
  "Datadog",
  "Jest",
  "Cypress",
  "Playwright",
  "Mocha",
  "Unit Testing",
  "Integration Testing",
  "TDD",
  "Agile",
  "Scrum",
  "Jira",
  "System Design",
  "Distributed Systems",
  "OOP",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "PyTorch",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "NLP",
  "Computer Vision",
  "Tableau",
  "Power BI",
  "Data Analysis",
  "ETL",
  "Figma",
  "UI/UX",
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Redux",
  "Zustand",
  "Webpack",
  "Vite",
  "Performance Optimization",
  "SEO",
  "Accessibility",
  "WCAG",
];

function extractKeywordsFromJD(jdText: string): string[] {
  const lower = jdText.toLowerCase();
  const found = new Set<string>();

  // Check known industry keywords
  for (const kw of COMMON_INDUSTRY_KEYWORDS) {
    const escaped = kw.replace(/[.+*?^${}()|[\]\\]/g, "\\$&");
    if (new RegExp(`\\b${escaped}\\b`, "i").test(lower)) {
      found.add(kw);
    }
  }

  // Check ROLE_SKILLS
  for (const role of ROLES) {
    for (const skill of ROLE_SKILLS[role] || []) {
      const escaped = skill.replace(/[.+*?^${}()|[\]\\]/g, "\\$&");
      if (new RegExp(`\\b${escaped}\\b`, "i").test(lower)) {
        found.add(skill);
      }
    }
  }

  // Also check common capitalized acronyms and compound phrases
  const acronymMatches = jdText.match(/\b[A-Z]{2,6}\b/g) || [];
  const skipWords = new Set([
    "THE",
    "AND",
    "FOR",
    "ARE",
    "WITH",
    "NOT",
    "YOU",
    "OUR",
    "WHO",
    "CAN",
    "WILL",
    "JOB",
    "ROLE",
  ]);
  for (const ac of acronymMatches) {
    if (!skipWords.has(ac) && ac.length >= 2) {
      found.add(ac);
    }
  }

  return Array.from(found);
}

function detectRoleAndSkills(text: string): {
  role: string | null;
  skills: string[];
  matched: string[];
  missing: string[];
  pct: number;
} {
  const lower = text.toLowerCase();
  let bestRole: string | null = null;
  let bestMatched: string[] = [];
  let bestMissing: string[] = [];
  let bestPct = 0;
  let bestCount = 0;
  const allFound = new Set<string>();

  for (const role of ROLES) {
    const target = ROLE_SKILLS[role];
    const matched = target.filter((s) =>
      new RegExp(`\\b${s.replace(/[.+*?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(lower),
    );
    matched.forEach((s) => allFound.add(s));
    if (matched.length > bestCount) {
      bestCount = matched.length;
      bestRole = role;
      bestMatched = matched;
      bestMissing = target.filter((s) => !matched.includes(s));
      bestPct = Math.round((matched.length / target.length) * 100);
    }
  }

  // Also check general industry keywords
  for (const kw of COMMON_INDUSTRY_KEYWORDS) {
    if (new RegExp(`\\b${kw.replace(/[.+*?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(lower)) {
      allFound.add(kw);
    }
  }

  return {
    role: bestCount >= 2 ? bestRole : null,
    skills: Array.from(allFound),
    matched: bestMatched,
    missing: bestMissing,
    pct: bestPct,
  };
}

function extractBullets(text: string): string[] {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  const bullets: string[] = [];
  for (const line of lines) {
    const cleaned = line.replace(/^[•\-*●▪►◦·]\s*/, "");
    if (cleaned !== line && cleaned.length > 10) bullets.push(cleaned);
    else if (
      line.length > 35 &&
      line.length < 240 &&
      /[a-z]/.test(line) &&
      !/@/.test(line) &&
      !line.includes("http")
    ) {
      bullets.push(line);
    }
  }
  return bullets.slice(0, 40);
}

const WEAK_VERBS = [
  "worked on",
  "helped",
  "did",
  "made",
  "responsible for",
  "involved in",
  "assisted",
  "participated",
  "handled",
  "worked with",
];

function isWeak(bullet: string): boolean {
  const lower = bullet.toLowerCase();
  if (bullet.length < 50) return true;
  if (!/\d/.test(bullet)) return true; // no metric
  if (WEAK_VERBS.some((v) => lower.startsWith(v) || lower.includes(` ${v} `))) return true;
  return false;
}

export function analyzeResumeText(rawText: string, jobDescription?: string): AnalyzedResume {
  const text = rawText.replace(/\u00a0/g, " ");
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  const name = extractName(text);
  const email = extractEmail(text);
  const phone = extractPhone(text);

  const hasSummary = hasSection(text, SECTION_KEYWORDS.summary);
  const hasSkillsSection = hasSection(text, SECTION_KEYWORDS.skills);
  const hasProjectsSection = hasSection(text, SECTION_KEYWORDS.projects);
  const hasExperienceSection = hasSection(text, SECTION_KEYWORDS.experience);
  const hasEducationSection = hasSection(text, SECTION_KEYWORDS.education);

  const baseAnalysis = detectRoleAndSkills(text);
  const lowerText = text.toLowerCase();

  let targetKeywords: string[] = [];
  let matchedKeywords: string[] = [];
  let missingKeywords: string[] = [];
  let keywordMatchPct = 0;
  let jobTitle: string | undefined = undefined;

  const hasJD = !!(jobDescription && jobDescription.trim().length >= 30);

  if (hasJD) {
    targetKeywords = extractKeywordsFromJD(jobDescription);
    // Detect job title heuristic if present
    const firstLine = jobDescription.split("\n")[0].trim();
    if (firstLine.length < 60 && !firstLine.includes(".")) {
      jobTitle = firstLine;
    }

    matchedKeywords = targetKeywords.filter((kw) =>
      new RegExp(`\\b${kw.replace(/[.+*?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(lowerText),
    );
    missingKeywords = targetKeywords.filter((kw) => !matchedKeywords.includes(kw));
    keywordMatchPct =
      targetKeywords.length > 0
        ? Math.round((matchedKeywords.length / targetKeywords.length) * 100)
        : baseAnalysis.pct;
  } else {
    targetKeywords = baseAnalysis.matched.concat(baseAnalysis.missing);
    matchedKeywords = baseAnalysis.matched;
    missingKeywords = baseAnalysis.missing;
    keywordMatchPct = baseAnalysis.pct;
  }

  const bullets = extractBullets(text);
  const weakBullets = bullets.filter(isWeak).slice(0, 6);
  const improvedBullets = weakBullets.map((b) => ({ original: b, improved: improveBullet(b) }));

  // Quantified metrics analysis
  const quantifiedBullets = bullets.filter((b) =>
    /\d+%?|\$\d+|\b\d+\s*(users|clients|customers|ms|seconds|hours|days|x|fold|stars|k|m)\b/i.test(
      b,
    ),
  );
  const metricsScore =
    bullets.length > 0 ? Math.round((quantifiedBullets.length / bullets.length) * 100) : 0;

  // Readability analysis
  let readabilityScore = 80;
  if (wordCount < 250) readabilityScore -= 25;
  else if (wordCount > 850) readabilityScore -= 15;
  if (bullets.length === 0) readabilityScore -= 20;
  if (weakBullets.length > 3) readabilityScore -= 10;
  readabilityScore = Math.max(30, Math.min(100, readabilityScore));

  // Formatting and structural checks
  const formattingChecks: ATSFormattingCheck[] = [
    {
      id: "contact-info",
      label: "Contact Information",
      status: name && email && phone ? "pass" : email ? "warning" : "fail",
      detail:
        name && email && phone
          ? "Name, email, and phone number clearly detected."
          : "Missing essential contact elements (name, email, or phone).",
    },
    {
      id: "section-headers",
      label: "Standard Section Headings",
      status:
        hasSkillsSection && (hasExperienceSection || hasProjectsSection) && hasEducationSection
          ? "pass"
          : "warning",
      detail:
        hasSkillsSection && hasExperienceSection && hasEducationSection
          ? "Essential sections (Skills, Experience, Education) detected with standard ATS headers."
          : "Some standard section headings appear to be missing or named non-standardly.",
    },
    {
      id: "word-count",
      label: "Resume Length & Word Count",
      status:
        wordCount >= 300 && wordCount <= 800
          ? "pass"
          : wordCount >= 200 && wordCount <= 950
            ? "warning"
            : "fail",
      detail:
        wordCount >= 300 && wordCount <= 800
          ? `Optimal word count (${wordCount} words) suitable for a clean 1-page ATS format.`
          : wordCount < 300
            ? `Word count (${wordCount} words) is thin. Expand on project impact and technologies.`
            : `Word count (${wordCount} words) is quite dense. Consider trimming to 1 focused page.`,
    },
    {
      id: "bullet-structure",
      label: "Bullet Point Formatting",
      status: bullets.length >= 4 ? "pass" : bullets.length >= 2 ? "warning" : "fail",
      detail:
        bullets.length >= 4
          ? `Identified ${bullets.length} distinct bullet points for easy ATS machine parsing.`
          : "Very few bullet points detected. Large paragraph blocks reduce ATS parse quality.",
    },
    {
      id: "quantified-impact",
      label: "Measurable Impact & Metrics",
      status:
        quantifiedBullets.length >= 3 ? "pass" : quantifiedBullets.length >= 1 ? "warning" : "fail",
      detail:
        quantifiedBullets.length >= 3
          ? `Strong quantified impact detected in ${quantifiedBullets.length} bullet points.`
          : "Most bullet points lack numbers, percentages, or measurable outcomes.",
    },
  ];

  // Strengths
  const strengths: ATSStrength[] = [];
  if (name && email) {
    strengths.push({
      title: "Clean Contact Details",
      detail: `Successfully parsed candidate name and contact information (${email}).`,
    });
  }
  if (baseAnalysis.skills.length >= 6) {
    strengths.push({
      title: "Solid Technical Vocabulary",
      detail: `Detected ${baseAnalysis.skills.length} recognized technical and domain skill keywords.`,
    });
  }
  if (hasSkillsSection && hasEducationSection) {
    strengths.push({
      title: "ATS-Standard Section Hierarchy",
      detail: "Clean layout structure with recognized headings for education and skills.",
    });
  }
  if (quantifiedBullets.length >= 2) {
    strengths.push({
      title: "Data-Driven Achievements",
      detail: `Included quantifiable metrics in ${quantifiedBullets.length} project or work descriptions.`,
    });
  }
  if (hasJD && matchedKeywords.length >= 4) {
    strengths.push({
      title: "Strong Job Keyword Alignment",
      detail: `Directly matches ${matchedKeywords.length} technical keywords specified in the job description.`,
    });
  }
  if (wordCount >= 320 && wordCount <= 780) {
    strengths.push({
      title: "Optimal Single-Page Density",
      detail: `Concise ${wordCount} words allows human recruiters to scan within 6 seconds.`,
    });
  }

  // Areas to improve
  const areasToImprove: ATSImprovementArea[] = [];
  if (hasJD && missingKeywords.length > 0) {
    areasToImprove.push({
      title: `Missing ${missingKeywords.length} Target Keywords`,
      detail: `Job description emphasizes keywords not found in resume: ${missingKeywords.slice(0, 5).join(", ")}.`,
      priority: "high",
    });
  } else if (!hasJD && baseAnalysis.missing.length > 0 && baseAnalysis.role) {
    areasToImprove.push({
      title: `Missing Core ${baseAnalysis.role} Keywords`,
      detail: `Industry standard expects: ${baseAnalysis.missing.slice(0, 4).join(", ")}.`,
      priority: "high",
    });
  }

  if (quantifiedBullets.length < 2) {
    areasToImprove.push({
      title: "Lack of Quantifiable Results",
      detail:
        "Recruiters and ATS favor bullet points with metrics (%, $, scale, users, performance gain).",
      priority: "high",
    });
  }

  if (weakBullets.length > 0) {
    areasToImprove.push({
      title: "Passive or Vague Action Verbs",
      detail: `Found ${weakBullets.length} bullets starting with weak phrases like 'worked on' or 'helped'.`,
      priority: "medium",
    });
  }

  if (!hasSummary) {
    areasToImprove.push({
      title: "Missing Professional Summary",
      detail:
        "A 2-3 line summary hook at the top helps contextualize your background for ATS parsers.",
      priority: "medium",
    });
  }

  if (!hasProjectsSection && !hasExperienceSection) {
    areasToImprove.push({
      title: "Missing Experience / Projects Section",
      detail:
        "Neither a standard Projects nor Work Experience section could be clearly identified.",
      priority: "high",
    });
  }

  // Recommendations
  const recommendations: ATSRecommendation[] = [];
  if (missingKeywords.length > 0) {
    recommendations.push({
      category: "keywords",
      action: `Weave key missing terms (${missingKeywords.slice(0, 4).join(", ")}) into your Skills and Project descriptions.`,
      impact: "+15 to +25 ATS Score boost",
    });
  }
  recommendations.push({
    category: "impact",
    action:
      "Use Google's XYZ formula: 'Accomplished [X], as measured by [Y], by doing [Z]' in your top 3 bullets.",
    impact: "+10 ATS Score boost & higher interview callback rate",
  });
  if (weakBullets.length > 0) {
    recommendations.push({
      category: "content",
      action:
        "Replace passive phrases with impactful verbs: 'Architected', 'Engineered', 'Optimized', 'Spearheaded'.",
      impact: "+8 ATS Score boost",
    });
  }
  if (!hasSummary) {
    recommendations.push({
      category: "formatting",
      action:
        "Add a crisp 2-sentence Professional Summary outlining your primary stack and target career level.",
      impact: "+6 ATS Score boost",
    });
  }

  // Scoring weights
  // 1. Keyword match (35%)
  const keywordScore = Math.min(100, Math.round(keywordMatchPct));
  // 2. Formatting & Sections (25%)
  let formatScore = 0;
  if (name) formatScore += 15;
  if (email) formatScore += 15;
  if (phone) formatScore += 10;
  if (hasSkillsSection) formatScore += 20;
  if (hasExperienceSection || hasProjectsSection) formatScore += 25;
  if (hasEducationSection) formatScore += 15;
  formatScore = Math.min(100, formatScore);

  // 3. Impact & metrics (20%)
  const impactScore = Math.min(
    100,
    Math.round(
      quantifiedBullets.length >= 3
        ? 100
        : quantifiedBullets.length === 2
          ? 80
          : quantifiedBullets.length === 1
            ? 55
            : 30,
    ),
  );

  // 4. Content length & readability (20%)
  const contentScore = Math.min(100, readabilityScore);

  const totalScore = Math.round(
    keywordScore * 0.35 + formatScore * 0.25 + impactScore * 0.2 + contentScore * 0.2,
  );

  const finalScore = Math.max(10, Math.min(99, totalScore));

  const suggestions: string[] = recommendations.map((r) => r.action);
  const warnings: string[] = areasToImprove.map((a) => a.title);

  return {
    rawText: text,
    jobDescription: hasJD ? jobDescription : undefined,
    name,
    email,
    phone,
    detectedRole: baseAnalysis.role,
    hasSummary,
    hasSkillsSection,
    hasProjectsSection,
    hasExperienceSection,
    hasEducationSection,
    skills: baseAnalysis.skills,
    matchedKeywords,
    missingKeywords: missingKeywords.slice(0, 15),
    keywordMatchPct,
    wordCount,
    bullets,
    weakBullets,
    improvedBullets,
    score: finalScore,
    suggestions: suggestions.slice(0, 6),
    warnings,
    jobTitle,
    jobKeywords: targetKeywords,
    formattingChecks,
    readabilityScore,
    metricsScore,
    strengths,
    areasToImprove,
    recommendations,
    scoreBreakdown: {
      keywordMatch: keywordScore,
      formatting: formatScore,
      contentStructure: contentScore,
      impactMetrics: impactScore,
    },
  };
}

export async function extractTextFromFile(
  file: File,
  ocrFallback?: (file: File) => Promise<string>,
): Promise<string> {
  const name = file.name.toLowerCase();
  if (name.endsWith(".pdf") || file.type === "application/pdf") {
    const native = await extractPdf(file);
    // Quality check — if native extraction has readable text, return it.
    const letters = (native.match(/[a-zA-Z]/g) ?? []).length;
    if (native.trim().length >= 100 && letters >= 40) return native;

    // If native extraction is sparse (e.g. scanned image PDF) and an OCR fallback is provided:
    if (ocrFallback) {
      try {
        const ocrText = await ocrFallback(file);
        if (ocrText && ocrText.trim().length > native.trim().length) return ocrText;
      } catch (e) {
        console.warn("OCR fallback failed:", e);
        if (native.trim().length > 0) return native;
        throw e;
      }
    }
    return native;
  }
  if (name.endsWith(".docx")) return extractDocx(file);
  if (name.endsWith(".txt")) return file.text();
  throw new Error("Unsupported file. Please upload a PDF resume file.");
}

async function extractPdf(file: File): Promise<string> {
  try {
    const pdfjs = await import("pdfjs-dist");
    const workerUrl = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
    pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

    const buf = await file.arrayBuffer();
    const doc = await pdfjs.getDocument({ data: buf }).promise;
    let text = "";
    for (let i = 1; i <= doc.numPages; i++) {
      const page = await doc.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map((it) => ("str" in it ? it.str : ""));
      text += strings.join(" ") + "\n";
    }
    return text;
  } catch (e) {
    console.warn("Native PDF parse failed:", e);
    return "";
  }
}

export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + chunk)));
  }
  return btoa(binary);
}

async function extractDocx(file: File): Promise<string> {
  // @ts-expect-error - mammoth browser bundle ships without types
  const mammoth = await import("mammoth/mammoth.browser.js");
  const buf = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer: buf });
  return result.value as string;
}
