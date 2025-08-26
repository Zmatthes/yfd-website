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
				'water-reveal': {
					'0%': { 
						clipPath: 'circle(0% at 50% 0%)',
						filter: 'blur(2px) grayscale(100%)'
					},
					'20%': { 
						clipPath: 'circle(15% at 50% 0%)',
						filter: 'blur(1px) grayscale(80%)'
					},
					'40%': { 
						clipPath: 'circle(35% at 50% 0%)',
						filter: 'blur(0.5px) grayscale(60%)'
					},
					'60%': { 
						clipPath: 'circle(55% at 50% 0%)',
						filter: 'blur(0px) grayscale(40%)'
					},
					'80%': { 
						clipPath: 'circle(75% at 50% 0%)',
						filter: 'blur(0px) grayscale(20%)'
					},
					'100%': { 
						clipPath: 'circle(100% at 50% 0%)',
						filter: 'blur(0px) grayscale(0%)'
					}
				},
				'water-splash': {
					'0%': { 
						transform: 'translateX(-50%) translateY(-200px) scale(0)',
						opacity: '0'
					},
					'10%': { 
						transform: 'translateX(-50%) translateY(-8px) scale(0.5)',
						opacity: '0.8'
					},
					'30%': { 
						transform: 'translateX(-50%) translateY(-8px) scale(1.2)',
						opacity: '0.6'
					},
					'100%': { 
						transform: 'translateX(-50%) translateY(200px) scale(0.3)',
						opacity: '0'
					}
				},
				'water-drop-1': {
					'0%': { transform: 'translateX(-50%) translateY(0px)', opacity: '0' },
					'20%': { opacity: '0.7' },
					'100%': { transform: 'translateX(-30px) translateY(300px)', opacity: '0' }
				},
				'water-drop-2': {
					'0%': { transform: 'translateX(-50%) translateY(0px)', opacity: '0' },
					'25%': { opacity: '0.6' },
					'100%': { transform: 'translateX(20px) translateY(280px)', opacity: '0' }
				},
				'water-drop-3': {
					'0%': { transform: 'translateX(-50%) translateY(0px)', opacity: '0' },
					'15%': { opacity: '0.5' },
					'100%': { transform: 'translateX(-10px) translateY(320px)', opacity: '0' }
				},
				'water-stream-1': {
					'0%': { height: '0px', opacity: '0' },
					'30%': { height: '80px', opacity: '0.6' },
					'100%': { height: '80px', opacity: '0' }
				},
				'water-stream-2': {
					'0%': { height: '0px', opacity: '0' },
					'35%': { height: '64px', opacity: '0.5' },
					'100%': { height: '64px', opacity: '0' }
				},
				'water-stream-3': {
					'0%': { height: '0px', opacity: '0' },
					'25%': { height: '96px', opacity: '0.7' },
					'100%': { height: '96px', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'shine': 'shine 2s ease-in-out infinite',
				'water-reveal': 'water-reveal 4s ease-out 1s 1 forwards',
				'water-splash': 'water-splash 4s ease-out 1s 1',
				'water-drop-1': 'water-drop-1 3s ease-out 1.5s 1',
				'water-drop-2': 'water-drop-2 3.2s ease-out 1.7s 1',
				'water-drop-3': 'water-drop-3 2.8s ease-out 1.3s 1',
				'water-stream-1': 'water-stream-1 3s ease-out 2s 1',
				'water-stream-2': 'water-stream-2 3.2s ease-out 2.2s 1',
				'water-stream-3': 'water-stream-3 2.8s ease-out 1.8s 1'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
