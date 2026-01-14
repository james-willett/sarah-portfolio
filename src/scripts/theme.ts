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
 * Get the current theme from localStorage
 * Sarah's design is light-themed by default, so we default to light
 * unless the user has explicitly chosen dark mode
 */
export function getTheme(): Theme {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return 'light';
  }

  // Check localStorage for explicit user preference
  const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  // Default to light mode (Sarah's design is light-themed)
  // Do NOT follow system preference automatically
  return 'light';
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
 * NOTE: Since Sarah's design defaults to light mode, we no longer
 * automatically follow system preference changes. The user must
 * explicitly toggle the theme using the ThemeToggle button.
 *
 * This function is kept for potential future use but currently
 * does not auto-update the theme.
 */
export function watchSystemTheme(): void {
  // System preference watching is disabled by default
  // Sarah's design is light-themed and we want to respect that
  // Users can still toggle to dark mode manually if desired
}
