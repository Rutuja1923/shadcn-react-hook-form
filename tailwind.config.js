export default {
  // safelist: [
  //   // Text colors
  //   "text-primary-dark",
  //   "text-primary-light",
  //   "text-secondary-dark",
  //   "text-secondary-light",

  //   // Backgrounds
  //   "bg-primary-dark",
  //   "bg-primary-light",
  //   "bg-secondary-dark",
  //   "bg-secondary-light",

  //   // Borders
  //   "border-primary-dark",
  //   "border-primary-light",
  //   "border-secondary-dark",
  //   "border-secondary-light",

  //   // Add other utilities like border, ring, etc. as needed
  // ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          dark: "var(--primary-dark)",
          light: "var(--primary-light)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          dark: "var(--secondary-dark)",
          light: "var(--secondary-light)",
        },
      },
    },
  },
};
