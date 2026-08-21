/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0038FF",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#0038FF",
          700: "#0234D5",
          800: "#1e40af",
          900: "#0f172a"
        },
        primary: "#0038FF",
        "primary-hover": "#0234D5",
        surface: "#ffffff",
        "surface-subtle": "#f8fafc",
        "on-surface": "#0f172a",
        "on-surface-variant": "#475569",
        "outline-variant": "#e2e8f0"
      },
      borderRadius: {
        'sm': '6px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px'
      },
      spacing: {
        "container-max": "1280px",
        "gutter": "24px",
        "margin-mobile": "16px",
        "margin-desktop": "48px"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
}
