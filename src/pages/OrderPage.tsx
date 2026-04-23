import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Star, Zap } from "lucide-react";

/* ─── Your WhatsApp number (with country code, no + or spaces) ─── */
const WHATSAPP_NUMBER = "7905954971"; // <-- APNA NUMBER YAHAN DALEIN

/* ─── Packages ─── */
const PACKAGES = [
  {
    id: "starter",
    name: "STARTER",
    price: "₹399",
    tag: null,
    features: ["Clean Structure", "ATS Optimized", "24H Delivery"],
    color: "#1565C0",
  },
  {
    id: "executive",
    name: "EXECUTIVE",
    price: "₹999",
    tag: "BEST VALUE",
    features: ["ATS DNA Mapping", "Cover Letter Free", "Priority Delivery"],
    color: "#1565C0",
  },
];

const OrderPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    jobRole: "",
    experience: "",
    package: "executive",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())       e.name       = "Name is required";
    if (!form.email.trim())      e.email      = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter valid email";
    if (!form.jobRole.trim())    e.jobRole    = "Target job role is required";
    if (!form.experience.trim()) e.experience = "Years of experience is required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }

    const selectedPkg = PACKAGES.find((p) => p.id === form.package);

    /* Build WhatsApp message */
    const msg = [
      `🚀 *New Resume Order — ResumeWale*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📧 *Email:* ${form.email}`,
      `💼 *Target Job Role:* ${form.jobRole}`,
      `📅 *Experience:* ${form.experience}`,
      `📦 *Package:* ${selectedPkg?.name} (${selectedPkg?.price})`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    setSubmitted(true);

    setTimeout(() => {
      window.open(url, "_blank");
    }, 800);
  };

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div style={styles.page}>
        <div style={styles.successBox}>
          <div style={styles.successIcon}><CheckCircle2 size={52} color="#22c55e" /></div>
          <h2 style={styles.successTitle}>Order Confirmed!</h2>
          <p style={styles.successSub}>Redirecting you to WhatsApp to finalize your document details…</p>
          <button style={styles.backBtn} onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  /* ── Main form ── */
  return (
    <div style={styles.page}>
      {/* Back button */}
      <button style={styles.backLink} onClick={() => navigate(-1)}>
        <ArrowLeft size={16} />
        <span>Back</span>
      </button>

      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerBadge}>
            <Star size={12} fill="#fff" />
            <span>Trusted by 5000+ Professionals</span>
          </div>
          <h1 style={styles.title}>Launch Your Career.</h1>
          <p style={styles.subtitle}>
            Fill the details below to engineer your growth.
            No complex forms, just results.
          </p>
        </div>

        {/* Form */}
        <div style={styles.formCard}>

          {/* Row 1 */}
          <div style={styles.row}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>YOUR NAME</label>
              <input
                style={{ ...styles.input, ...(errors.name ? styles.inputError : {}) }}
                placeholder="Aditya Verma"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              {errors.name && <span style={styles.errorText}>{errors.name}</span>}
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>EMAIL ID</label>
              <input
                style={{ ...styles.input, ...(errors.email ? styles.inputError : {}) }}
                placeholder="aditya@gmail.com"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && <span style={styles.errorText}>{errors.email}</span>}
            </div>
          </div>

          {/* Target Job Role */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>TARGET JOB ROLE</label>
            <input
              style={{ ...styles.input, ...(errors.jobRole ? styles.inputError : {}) }}
              placeholder="e.g. Sales Manager, Java Developer"
              value={form.jobRole}
              onChange={(e) => handleChange("jobRole", e.target.value)}
            />
            {errors.jobRole && <span style={styles.errorText}>{errors.jobRole}</span>}
          </div>

          {/* Years of Experience */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>YEARS OF EXPERIENCE</label>
            <input
              style={{ ...styles.input, ...(errors.experience ? styles.inputError : {}) }}
              placeholder="e.g. Fresher, 5 Years"
              value={form.experience}
              onChange={(e) => handleChange("experience", e.target.value)}
            />
            {errors.experience && <span style={styles.errorText}>{errors.experience}</span>}
          </div>

          {/* Package selection */}
          <div style={{ marginTop: "8px" }}>
            <label style={styles.label}>CHOOSE PACKAGE</label>
            <div style={styles.packages}>
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => handleChange("package", pkg.id)}
                  style={{
                    ...styles.pkgCard,
                    ...(form.package === pkg.id ? styles.pkgCardActive : {}),
                  }}
                >
                  {/* Best value tag */}
                  {pkg.tag && (
                    <div style={styles.pkgTag}>{pkg.tag}</div>
                  )}

                  <h3 style={{
                    ...styles.pkgName,
                    color: form.package === pkg.id ? "#1565C0" : "#1a1a1a",
                  }}>
                    {pkg.name}
                  </h3>
                  <p style={{
                    ...styles.pkgPrice,
                    color: form.package === pkg.id ? "#1565C0" : "#555",
                  }}>
                    {pkg.price} ONLY
                  </p>

                  <div style={styles.pkgDivider} />

                  <ul style={styles.pkgFeatures}>
                    {pkg.features.map((f) => (
                      <li key={f} style={{
                        ...styles.pkgFeatureItem,
                        color: form.package === pkg.id ? "#1565C0" : "#444",
                      }}>
                        <span style={styles.bullet}>•</span> {f}
                      </li>
                    ))}
                  </ul>

                  {/* Selected indicator */}
                  {form.package === pkg.id && (
                    <div style={styles.selectedDot} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button style={styles.submitBtn} onClick={handleSubmit}>
            <Zap size={16} fill="#fff" />
            CONFIRM ORDER
          </button>

          <p style={styles.disclaimer}>
            YOU WILL BE REDIRECTED TO WHATSAPP TO FINALIZE YOUR DOCUMENT DETAILS.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ─── Styles ─── */
const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#ffffff",
    fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif",
    paddingTop: "80px",
    paddingBottom: "60px",
    position: "relative",
  },
  backLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    position: "absolute",
    top: "24px",
    left: "24px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#666",
    fontSize: "13px",
    fontWeight: 500,
  },
  wrapper: {
    maxWidth: "780px",
    margin: "0 auto",
    padding: "0 20px",
  },
  header: {
    marginBottom: "36px",
  },
  headerBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "4px 12px",
    background: "#1565C0",
    borderRadius: "20px",
    color: "#fff",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    marginBottom: "14px",
  },
  title: {
    fontSize: "clamp(32px, 5vw, 52px)",
    fontWeight: 900,
    color: "#0a0a0a",
    letterSpacing: "-1px",
    lineHeight: 1.1,
    margin: "0 0 12px",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
  },
  subtitle: {
    fontSize: "14px",
    color: "#666",
    lineHeight: 1.6,
    margin: 0,
  },
  formCard: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    color: "#555",
  },
  input: {
    border: "none",
    borderBottom: "1.5px solid #d1d5db",
    outline: "none",
    padding: "10px 0",
    fontSize: "14px",
    color: "#1a1a1a",
    background: "transparent",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  },
  inputError: {
    borderBottomColor: "#ef4444",
  },
  errorText: {
    fontSize: "11px",
    color: "#ef4444",
    marginTop: "2px",
  },
  packages: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginTop: "10px",
  },
  pkgCard: {
    position: "relative",
    border: "1.5px solid #e5e7eb",
    borderRadius: "8px",
    padding: "20px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    background: "#fff",
    overflow: "hidden",
  },
  pkgCardActive: {
    border: "2px solid #1565C0",
    boxShadow: "0 0 0 4px rgba(21,101,192,0.08)",
  },
  pkgTag: {
    position: "absolute",
    top: "0",
    right: "0",
    background: "#1565C0",
    color: "#fff",
    fontSize: "9px",
    fontWeight: 800,
    letterSpacing: "0.1em",
    padding: "4px 10px",
    borderBottomLeftRadius: "8px",
  },
  pkgName: {
    fontSize: "18px",
    fontWeight: 900,
    margin: "0 0 4px",
    letterSpacing: "-0.3px",
    fontFamily: "'Montserrat', 'Inter', sans-serif",
  },
  pkgPrice: {
    fontSize: "12px",
    fontWeight: 700,
    margin: 0,
    letterSpacing: "0.04em",
  },
  pkgDivider: {
    height: "1px",
    background: "#f0f0f0",
    margin: "14px 0",
  },
  pkgFeatures: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  pkgFeatureItem: {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.03em",
  },
  bullet: {
    marginRight: "4px",
  },
  selectedDot: {
    position: "absolute",
    bottom: "14px",
    right: "14px",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#1565C0",
  },
  submitBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: "100%",
    maxWidth: "340px",
    margin: "8px auto 0",
    padding: "16px 24px",
    background: "#1565C0",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: 800,
    letterSpacing: "0.12em",
    cursor: "pointer",
    transition: "opacity 0.2s, transform 0.15s",
    fontFamily: "inherit",
  },
  disclaimer: {
    textAlign: "center",
    fontSize: "10px",
    color: "#999",
    letterSpacing: "0.06em",
    margin: 0,
  },
  /* Success screen */
  successBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    gap: "16px",
    padding: "40px 20px",
    textAlign: "center",
  },
  successIcon: {
    animation: "pulse 1s ease infinite",
  },
  successTitle: {
    fontSize: "32px",
    fontWeight: 900,
    color: "#0a0a0a",
    margin: 0,
    fontFamily: "'Montserrat', 'Inter', sans-serif",
  },
  successSub: {
    fontSize: "14px",
    color: "#666",
    maxWidth: "320px",
    lineHeight: 1.6,
    margin: 0,
  },
  backBtn: {
    marginTop: "12px",
    padding: "10px 24px",
    background: "#1565C0",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: "0.04em",
    fontFamily: "inherit",
  },
};

/* Responsive: stack 2-col to 1-col on mobile */
const styleEl = document.createElement("style");
styleEl.innerHTML = `
  @media (max-width: 600px) {
    .order-row    { grid-template-columns: 1fr !important; }
    .order-pkgs   { grid-template-columns: 1fr !important; }
  }
  .submit-btn:hover { opacity: 0.88; transform: translateY(-1px); }
  input:focus { border-bottom-color: #1565C0 !important; }
`;
if (typeof document !== "undefined" && !document.getElementById("order-page-styles")) {
  styleEl.id = "order-page-styles";
  document.head.appendChild(styleEl);
}

export default OrderPage;
