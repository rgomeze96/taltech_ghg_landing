/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "769px",
      md: "1025px",
      lg: "1367px",
    },
    extend: {
      backgroundImage: {
        "grey-background-banner": "url('/grey-background-banner.jpg')",
      },
      fontFamily: {
        proximaRegular: 'Proxima-Nova-Regular',
        proximaBold: 'Proxima-Nova-Bold',
        proximaExtrabold: 'Proxima-Nova-Extra-Bold',
        proximalight: 'Proxima-Nova-Light',
      },
      colors: {
        "blue-sarv": "hsl(var(--blue-sarv))",
        "pink-ehea": "hsl(var(--pink-ehea))",
        "green-okas": "hsl(var(--green-okas))",
        "blue-sarv-dark": "hsl(var(--blue-sarv-dark))",
        "pink-ehea-dark": "hsl(var(--pink-ehea-dark))",
        "green-okas-dark": "hsl(var(--green-okas-dark))",

        "purple-our-support": "hsl(var(--purple-our-support))",
        border: "hsl(var(--border))",
        green: "hsl(var(--green))",
        "grey-lighten": "hsl(var(--grey-lighten))",
        overlay: "hsl(var(--overlay))",
        loader: {
          light: "hsl(var(--loader-light))",
          dark: "hsl(var(--loader-dark))",
        },
        "text-regular": "hsl(var(--text-regular))",
        "text-regular-lighten": "hsl(var(--text-regular-lighten))",
        "select-item-hover": "hsl(var(--select-item-hover))",
        "select-content-popover": "hsl(var(--select-content-popover))",
        input: {
          DEFAULT: "hsl(var(--input))",
          hover: "hsl(var(--input-hover))",
          focus: "hsl(var(--input-focus))",
          disabled: "hsl(var(--input-disabled))",
        },
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        "banner-primary": "hsl(var(--banner-primary))",
        "banner-primary-foreground": "hsl(var(--banner-primary-foreground))",
        "banner-secondary": "hsl(var(--banner-secondary))",
        "banner-secondary-foreground":
          "hsl(var(--banner-secondary-foreground))",
        "banner-border": "hsl(var(--banner-border))",

        "lollipop-value": "hsl(var(--lollipop-value))",
        "lollipop-label": "hsl(var(--lollipop-label))",
        "lollipop-line": "hsl(var(--lollipop-line))",

        "bar-axis-label": "hsl(var(--bar-axis-label))",
        "bar-label": "hsl(var(--bar-label))",

        "proportional-area-chart-primary":
          "hsl(var(--proportional-area-chart-primary))",
        "proportional-area-chart-secondary":
          "hsl(var(--proportional-area-chart-secondary))",

        "graph-tooltip": "hsl(var(--graph-tooltip))",
        "graph-tooltip-foreground": "hsl(var(--graph-tooltip-foreground))",
        emission: {
          DEFAULT: "hsl(var(--emission))",
          foreground: {
            DEFAULT: "hsl(var(--emission-foreground))",
            muted: "hsl(var(--emission-foreground-muted))",
          },
          secondary: {
            DEFAULT: "hsl(var(--emission-secondary))",
          },
        },
        accuracy: {
          low: {
            gradient: {
              from: "hsl(var(--accuracy-low-gradient-from))",
              to: "hsl(var(--accuracy-low-gradient-to))",
            },
          },
          medium: {
            gradient: {
              from: "hsl(var(--accuracy-medium-gradient-from))",
              to: "hsl(var(--accuracy-medium-gradient-to))",
            },
          },
          high: {
            gradient: {
              from: "hsl(var(--accuracy-high-gradient-from))",
              to: "hsl(var(--accuracy-high-gradient-to))",
            },
          },
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: {
            DEFAULT: "hsl(var(--primary-hover))",
            foreground: "hsl(var(--primary-hover-foreground))",
          },
          disabled: {
            DEFAULT: "hsl(var(--primary-disabled))",
            foreground: "hsl(var(--primary-disabled-foreground))",
          },
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          hover: {
            DEFAULT: "hsl(var(--secondary-hover))",
            foreground: "hsl(var(--secondary-hover-foreground))",
          },
          disabled: {
            DEFAULT: "hsl(var(--secondary-disabled))",
            foreground: "hsl(var(--secondary-disabled-foreground))",
          },
        },
        light: {
          DEFAULT: "hsl(var(--light))",
          foreground: "hsl(var(--light-foreground))",
          hover: {
            DEFAULT: "hsl(var(--light-hover))",
            foreground: "hsl(var(--light-hover-foreground))",
          },
          disabled: {
            DEFAULT: "hsl(var(--light-disabled))",
            foreground: "hsl(var(--light-disabled-foreground))",
          },
        },
        outline: {
          DEFAULT: "hsl(var(--outline))",
          foreground: "hsl(var(--outline-foreground))",
          hover: {
            DEFAULT: "hsl(var(--outline-hover))",
            foreground: "hsl(var(--outline-hover-foreground))",
          },
          active: {
            DEFAULT: "hsl(var(--outline-active))",
            foreground: "hsl(var(--outline-active-foreground))",
          },
          disabled: {
            DEFAULT: "hsl(var(--outline-disabled))",
            foreground: "hsl(var(--outline-disabled-foreground))",
          },
        },
        link: {
          DEFAULT: "hsl(var(--link))",
          hover: "hsl(var(--link-hover))",
          active: "hsl(var(--link-active))",
          disabled: "hsl(var(--link-disabled))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
          menu: {
            DEFAULT: "hsl(var(--popover-menu))",
            foreground: "hsl(var(--popover-menu-foreground))",
            border: "hsl(var(--popover-menu-border))",
          },
        },
        tooltip: {
          DEFAULT: "hsl(var(--tooltip))",
          foreground: "hsl(var(--tooltip-foreground))",
        },
      },
      boxShadow: {
        light: "1px 2px 5px rgba(0, 0, 0, 0.1)",
        strong: "3px 2px 8px rgba(0, 0, 0, 0.1)",
        soft: "6px 6px 20px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
        xs: "1px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-grow-shrink": {
          "0%, 100%": {
            opacity: 0,
            transform: "scale(0)",
          },
          "20%, 80%": {
            opacity: 1,
          },
          "50%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "loader-box": "fade-grow-shrink 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
