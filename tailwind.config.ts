
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
				// Cyberpunk colors
				cyber: {
					black: '#0d0d0d',
					darkblue: '#0f1035',
					blue: '#00fff9',
					purple: '#d946ef',
					pink: '#ff00f5',
					yellow: '#fcee09',
					red: '#ff003c',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
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
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-5px, 5px)' },
					'40%': { transform: 'translate(-5px, -5px)' },
					'60%': { transform: 'translate(5px, 5px)' },
					'80%': { transform: 'translate(5px, -5px)' },
				},
				'glow': {
					'0%, 100%': {
						textShadow: '0 0 10px rgba(0, 255, 249, 0.7), 0 0 20px rgba(0, 255, 249, 0.5), 0 0 30px rgba(0, 255, 249, 0.3)',
					},
					'50%': {
						textShadow: '0 0 15px rgba(0, 255, 249, 0.9), 0 0 25px rgba(0, 255, 249, 0.7), 0 0 35px rgba(0, 255, 249, 0.5)',
					}
				},
				'scanline': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 2s infinite',
				'glow': 'glow 2s infinite',
				'scanline': 'scanline 4s linear infinite',
				'float': 'float 5s ease-in-out infinite',
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(0, 255, 249, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 249, 0.1) 1px, transparent 1px)',
				'cyber-city': 'url("/cyber-city-bg.jpg")',
			},
			fontFamily: {
				'cyber': ['BlenderPro', 'Orbitron', 'sans-serif'],
				'glitch': ['Cyberpunk', 'sans-serif'],
			},
			boxShadow: {
				'neon-blue': '0 0 5px #00fff9, 0 0 10px #00fff9',
				'neon-pink': '0 0 5px #ff00f5, 0 0 10px #ff00f5',
				'neon-yellow': '0 0 5px #fcee09, 0 0 10px #fcee09',
				'neon-red': '0 0 5px #ff003c, 0 0 10px #ff003c',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
