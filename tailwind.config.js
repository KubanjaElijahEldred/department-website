/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5fa',
          100: '#dce8f3',
          200: '#bdd2e8',
          300: '#90b4d7',
          400: '#5c8ec2',
          500: '#3a71aa',
          600: '#2b588c',
          700: '#234672',
          800: '#1e3a5d',
          900: '#0f355c', // Target deep blue shade
        },
        accent: {
          50: '#fff9eb',
          100: '#ffebc6',
          200: '#ffd388',
          300: '#ffb54a',
          400: '#ff941a',
          500: '#fb7d04',
          600: '#df5f00',
          700: '#b94103',
          800: '#94330b',
          900: '#782c0c',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
