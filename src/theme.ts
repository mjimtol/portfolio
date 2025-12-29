// theme.ts
// Utilidad para gestionar el tema claro/oscuro en la web Astro

export type Theme = 'light' | 'dark';

export function getCurrentTheme(): Theme {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    // Preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  return 'light';
}

export function setTheme(theme: Theme) {
  if (typeof window !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}

export function toggleTheme() {
  const current = getCurrentTheme();
  const next = current === 'light' ? 'dark' : 'light';
  setTheme(next);
}
