export const tailwindcssConfig = `const lynxPreset = require("@lynx-js/tailwind-preset");

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // Optional, JIT is default in Tailwind 3+
  presets: [lynxPreset],

  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/lynx-max-ui/src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      // Primary scale
      primary: {
        50: "#e0f7ff",
        100: "#b3ecff",
        200: "#80e1ff",
        300: "#4dd6ff",
        400: "#26ccff",
        500: "#1fb6ff", // DEFAULT
        600: "#009ee0",
        700: "#007bb3",
        800: "#005d80",
        900: "#00394d",
        DEFAULT: "#1fb6ff",
      },

      // Secondary scale
      secondary: {
        50: "#f3f0ff",
        100: "#e0d9ff",
        200: "#c2b4ff",
        300: "#a38fff",
        400: "#8c72ff",
        500: "#7e5bef", // DEFAULT
        600: "#5a32b9",
        700: "#46268c",
        800: "#331a66",
        900: "#1f0d33",
        DEFAULT: "#7e5bef",
      },

      // Success scale
      success: {
        50: "#e6f9f0",
        100: "#ccf3e1",
        200: "#99e6c3",
        300: "#66d9a4",
        400: "#33cc86",
        500: "#13ce66", // DEFAULT
        600: "#0e9f4f",
        700: "#0a7039",
        800: "#054f27",
        900: "#022f14",
        DEFAULT: "#13ce66",
      },

      // Warning scale
      warning: {
        50: "#fff8e1",
        100: "#ffecb3",
        200: "#ffe180",
        300: "#ffd64d",
        400: "#ffcc26",
        500: "#ffc82c", // DEFAULT
        600: "#e0ac00",
        700: "#b38600",
        800: "#806000",
        900: "#4d3b00",
        DEFAULT: "#ffc82c",
      },

      // Error scale
      error: {
        50: "#ffeaea",
        100: "#ffc9c9",
        200: "#ff9999",
        300: "#ff6666",
        400: "#ff4d4f",
        500: "#ff4d4f", // DEFAULT
        600: "#d9363e",
        700: "#b02a31",
        800: "#661519",
        900: "#330a0d",
        DEFAULT: "#ff4d4f",
      },

      // Info scale
      info: {
        50: "#e6f2ff",
        100: "#b3d9ff",
        200: "#80bfff",
        300: "#4da6ff",
        400: "#1a8cff",
        500: "#409eff", // DEFAULT
        600: "#337ecc",
        700: "#266699",
        800: "#194d66",
        900: "#0d333d",
        DEFAULT: "#409eff",
      },

      // Neutral (gray) scale
      neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },

      // Tailwind-like base colors (basic blue, green, etc.)
      blue: {
        400: "#1fb6ff",
        500: "#1fb6ff", // matches primary
      },
      purple: {
        400: "#7e5bef",
        500: "#7e5bef",
      },
      pink: {
        400: "#ff49db",
        500: "#ff49db",
      },
      orange: {
        400: "#ff7849",
        500: "#ff7849",
      },
      green: {
        400: "#13ce66",
        500: "#13ce66",
      },
      yellow: {
        400: "#ffc82c",
        500: "#ffc82c",
      },

      // Existing grays
      gray: {
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d3dce6", // from gray-light
        400: "#8492a6",
        500: "#273444", // from gray-dark
      },

      // Transparent / current / base
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      black: "#000",
    },

    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      serif: ["Georgia", "ui-serif"],
      mono: ["SFMono-Regular", "ui-monospace"],
    },

    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "4rem", // 64px
    },

    spacing: {
      px: "1px",
      0: "0px",
      1: "0.25rem", // 4px
      2: "0.5rem", // 8px
      3: "0.75rem", // 12px
      4: "1rem", // 16px
      5: "1.25rem", // 20px
      6: "1.5rem", // 24px
      8: "2rem", // 32px
      10: "2.5rem", // 40px
      12: "3rem", // 48px
      16: "4rem", // 64px
      20: "5rem", // 80px
      24: "6rem", // 96px
      32: "8rem", // 128px
    },

    borderRadius: {
      none: "0",
      sm: "0.125rem", // 2px
      DEFAULT: "0.25rem", // 4px
      md: "0.375rem", // 6px
      lg: "0.5rem", // 8px
      xl: "0.75rem", // 12px
      "2xl": "1rem", // 16px
      "3xl": "1.5rem", // 24px
      full: "9999px",
    },

    extend: {
      // Add shadows, animations, etc. here if needed
    },
  },

  plugins: [],
};
` 