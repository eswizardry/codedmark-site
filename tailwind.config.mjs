/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        'icon-bg': 'var(--icon-bg)',
        green: {
          DEFAULT: 'var(--green)',
          ink: 'var(--green-ink)',
          bright: 'var(--green-bright)',
          wash: 'var(--green-wash)',
        },
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        card: 'var(--card)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        border: {
          DEFAULT: 'var(--border)',
          strong: 'var(--border-strong)',
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", 'system-ui', 'sans-serif'],
        mono: ["'JetBrains Mono'", 'ui-monospace', 'monospace'],
        thai: ["'IBM Plex Sans Thai'", 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: 'var(--shadow)',
      },
    },
  },
  plugins: [],
};
