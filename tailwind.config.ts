import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#101124", violet: "#7657ff", lavender: "#eeeaff" }, boxShadow: { soft: "0 18px 60px rgba(31, 24, 74, .08)" } } }, plugins: [] };
export default config;
