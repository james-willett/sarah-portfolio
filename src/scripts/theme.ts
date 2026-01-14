/**
 * Theme management utilities for dark/light mode
 *
 * Features:
 * - Detect system preference (prefers-color-scheme)
 * - Load saved preference from localStorage
 * - Toggle between dark and light modes
 * - Apply 'dark' class to document.documentElement
 * - Persist theme choice to localStorage
 */

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/**
 * Get the current theme from localStorage or system preference
 */
export function getTheme(): Theme {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return 'light';
  }

  // Check localStorage first
  const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  // Fall back to system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

/**
 * Set the theme and persist to localStorage
 */
export function setTheme(theme: Theme): void {
  // Update localStorage
  localStorage.setItem(STORAGE_KEY, theme);

  // Apply or remove 'dark' class on document element
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): Theme {
  const currentTheme = getTheme();
  const newTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  return newTheme;
}

/**
 * Initialize theme on page load
 * This should be called as early as possible to prevent flash of wrong theme
 */
export function initTheme(): void {
  const theme = getTheme();
  setTheme(theme);
}

/**
 * Listen for system theme preference changes
 * Updates theme automatically if user hasn't set a manual preference
 */
export function watchSystemTheme(): void {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  mediaQuery.addEventListener('change', (e) => {
    // Only auto-update if user hasn't manually set a preference
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (!savedTheme) {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    }
  });
}
