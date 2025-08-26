import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-accent': 'var(--gradient-accent)'
			},
			boxShadow: {
				'luxury': 'var(--shadow-luxury)',
				'card': 'var(--shadow-card)',
				'glow': 'var(--shadow-glow)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)'
			},
			fontFamily: {
				'display': ['Oswald', 'Inter', 'system-ui', 'sans-serif'],
				'body': ['Oswald', 'Inter', 'system-ui', 'sans-serif'],
				'logo': ['Bebas Neue', 'Impact', 'Arial Black', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '0.8' }
				},
				'shine': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'pressure-wash': {
					'0%': { 
						clipPath: 'inset(0 100% 0 0)',
						filter: 'blur(1px) grayscale(1) brightness(0.4)'
					},
					'20%': { 
						clipPath: 'inset(0 80% 0 0)',
						filter: 'blur(0.8px) grayscale(0.8) brightness(0.6)'
					},
					'40%': { 
						clipPath: 'inset(0 60% 0 0)',
						filter: 'blur(0.5px) grayscale(0.6) brightness(0.8)'
					},
					'60%': { 
						clipPath: 'inset(0 40% 0 0)',
						filter: 'blur(0.3px) grayscale(0.4) brightness(0.9)'
					},
					'80%': { 
						clipPath: 'inset(0 20% 0 0)',
						filter: 'blur(0.1px) grayscale(0.2) brightness(1)'
					},
					'100%': { 
						clipPath: 'inset(0 0% 0 0)',
						filter: 'blur(0px) grayscale(0) brightness(1)'
					}
				},
				'spray-sweep': {
					'0%': { transform: 'translateX(-100%) skewX(-15deg)' },
					'100%': { transform: 'translateX(100%) skewX(-15deg)' }
				},
				'spray-particles': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '0.8' }
				},
				'drip': {
					'0%': { transform: 'translateY(0px) scale(1)', opacity: '0.8' },
					'50%': { transform: 'translateY(20px) scale(0.8)', opacity: '0.6' },
					'100%': { transform: 'translateY(40px) scale(0.4)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'shine': 'shine 2s ease-in-out infinite',
				'pressure-wash': 'pressure-wash 4s ease-out 1s 1 forwards',
				'spray-sweep': 'spray-sweep 4s ease-out 1s 1',
				'spray-particles': 'spray-particles 0.5s ease-in-out infinite',
				'drip': 'drip 2s ease-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
