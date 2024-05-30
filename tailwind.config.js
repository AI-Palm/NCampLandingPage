const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      listStyleType: {
        'small-disc': 'disc',
      },
      fontSize: {
        'xs-marker': '0.5rem',
      },
      screens: {
        "2xl": "1400px",

        "-xl": { max: "1279px" },

        "-lg": { max: "1023px" },

        "-md": { max: "767px" },

        "-sm": { max: "639px" },
        "sm-bw": { min: "640px", max: "767px" },
        "md-bw": { min: "768px", max: "1279px" },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: [...fontFamily.sans],
        appleR00: ["Apple", "sans-serif"],
        rokaf: ["RokafSans", "sans-serif"],
        appleB00: ["AppleB00", "sans-serif"],
        appleEB00: ["AppleEB00", "sans-serif"],
        appleM00: ["AppleM00", "sans-serif"],
      },
      fontSize: {
        xss: ["8px", "9.5px"],
        title: ["50px", "24px"],
        subtitle: ["25px", "35px"],
        step: ["20px", "28px"],
        description: ["20px", "35px"],
        sec2mdtime: ["16px", "35px"],
        sec2mddesc: ["16px", "28px"],
        textsmall135: ["13.5px", "20px"],
        textsmall13: ["13px", "20px"],
        textsmall12: ["12px", "17px"],
        textsmall16height28: ["16px", "28px"],
        text30heightnormal: ["30px", "normal"],
        text22heightnormal: ["22px", "normal"],
        text20heightnormal: ["20px", "normal"],
        text17heightnormal: ["17px", "normal"],
        text16heightnormal: ["16px", "normal"],

        textsmall12space1dot2: ['12px', {
          lineHeight: '17px',
          letterSpacing: '-1.2px',
          fontWeight: '400',
        }],

        'list-disc-sm': '0.5rem',


      },
      backgroundImage: (theme) => ({
        "gradient-custom":
          "linear-gradient(to bottom, #FF9900 0%, rgba(0,0,0,1) 20%)",
      }),
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.list-small-disc': {
          'list-style-type': 'disc',
        },
        
        '.li-small::marker': {
          'font-size': '0.8rem', // Small size for the marker
        },
      });
    },
  ],
};
