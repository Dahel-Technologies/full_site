export type SupportedCurrency = "NGN" | "USD" | "EUR" | "GBP" | "GHS";

const EU_COUNTRIES = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", 
  "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", 
  "PL", "PT", "RO", "SK", "SI", "ES", "SE"
]);

export function detectCurrencySync(): SupportedCurrency {
  if (typeof window === "undefined") return "USD";

  try {
    const saved = localStorage.getItem("dahel_preferred_currency") as SupportedCurrency | null;
    if (saved && ["NGN", "USD", "EUR", "GBP", "GHS"].includes(saved)) {
      return saved;
    }

    const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || "").toLowerCase();
    const lang = (navigator.language || "").toLowerCase();

    // 1. Timezone checks
    if (tz.includes("lagos") || tz.includes("nigeria")) return "NGN";
    if (tz.includes("accra") || tz.includes("ghana")) return "GHS";
    if (tz.includes("london") || tz.includes("belfast")) return "GBP";

    const euCities = [
      "paris", "berlin", "madrid", "rome", "amsterdam", "brussels",
      "vienna", "dublin", "lisbon", "warsaw", "stockholm", "copenhagen",
      "helsinki", "athens", "prague", "budapest", "bucharest"
    ];
    if (euCities.some((city) => tz.includes(city))) return "EUR";

    // 2. Language tag checks
    if (lang.endsWith("-ng")) return "NGN";
    if (lang.endsWith("-gh")) return "GHS";
    if (lang.endsWith("-gb")) return "GBP";
    if (["de", "fr", "es", "it", "nl", "pt"].some((l) => lang.startsWith(l))) return "EUR";

    // Default global currency
    return "USD";
  } catch {
    return "USD";
  }
}

export async function detectCurrencyAsync(): Promise<SupportedCurrency> {
  // First check if user explicitly set a preference
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("dahel_preferred_currency") as SupportedCurrency | null;
    if (saved && ["NGN", "USD", "EUR", "GBP", "GHS"].includes(saved)) {
      return saved;
    }
  }

  // Fast heuristic
  const fallback = detectCurrencySync();

  try {
    // Lightweight, fast, free IP geo lookup with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const res = await fetch("https://api.country.is/", {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const country = (data.country || "").toUpperCase();

      if (country === "NG") return "NGN";
      if (country === "GH") return "GHS";
      if (country === "GB") return "GBP";
      if (EU_COUNTRIES.has(country)) return "EUR";
      return "USD";
    }
  } catch {
    // Fall back smoothly to timezone heuristic
  }

  return fallback;
}

export function savePreferredCurrency(curr: SupportedCurrency) {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("dahel_preferred_currency", curr);
    } catch {
      // Ignore storage errors
    }
  }
}
