// tailwind.config.js or tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'card-in': {
          '0%': { opacity: '0', transform: 'translateY(1.5rem) translateX(var(--x,0))' },
          '100%': { opacity: '1', transform: 'translateY(0) translateX(0)' },
        },
        'background-move': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'card-in': 'card-in 0.7s ease-out forwards',
        'bg-move-slow': 'background-move 6s ease infinite',
      },
    },
  },
  plugins: [],
};
