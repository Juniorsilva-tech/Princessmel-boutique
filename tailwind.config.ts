import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f6f0e8",
        ivory: "#f8f4ee",
        cream: "#ede3d5",
        champagne: "#d9c5a9",
        brass: "#9f7c50",
        taupe: "#bba48c",
        ink: "#1f1a17",
        graphite: "#4f463d",
        mist: "#ded6cb",
      },
      boxShadow: {
        velvet: "0 24px 60px rgba(34, 24, 16, 0.08)",
        frame: "0 18px 40px rgba(68, 49, 31, 0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      letterSpacing: {
        editorial: "0.12em",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(217, 197, 169, 0.36), transparent 42%), radial-gradient(circle at bottom right, rgba(187, 164, 140, 0.24), transparent 38%)",
      },
    },
  },
  plugins: [],
};

export default config;
