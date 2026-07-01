const STORAGE_AVAILABLE = (() => {
  if (typeof window === 'undefined') return false;
  try {
    const k = '__ce_probe__';
    window.localStorage.setItem(k, '1');
    window.localStorage.removeItem(k);
    return true;
  } catch {
    return false;
  }
})();

const memoryFallback = new Map<string, string>();

export function getStorage<T>(key: string, fallback: T): T {
  try {
    const raw = STORAGE_AVAILABLE
      ? window.localStorage.getItem(key)
      : memoryFallback.get(key) ?? null;
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function setStorage<T>(key: string, value: T): void {
  try {
    const raw = JSON.stringify(value);
    if (STORAGE_AVAILABLE) window.localStorage.setItem(key, raw);
    else memoryFallback.set(key, raw);
  } catch {
    /* swallow */
  }
}

export const STORAGE_KEYS = {
  uiPrefs: 'ce_ui_prefs',
  visitCount: 'ce_visit_count',
} as const;

export interface UIPrefs {
  theme: 'light';
  reducedMotion: boolean;
  lastVisitedSection:
    | 'hero'
    | 'about'
    | 'metodo'
    | 'services'
    | 'projetos'
    | 'planos'
    | 'avaliacoes'
    | 'contato';
  visitedAt: string;
}

export const defaultUIPrefs: UIPrefs = {
  theme: 'light',
  reducedMotion: false,
  lastVisitedSection: 'hero',
  visitedAt: new Date(0).toISOString(),
};
