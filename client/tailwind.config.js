import plugin from 'tailwindcss/plugin';

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: withOpacity('--color-primary'),
      },
      body: {
        DEFAULT: withOpacity('--color-text'),
        300: 'var(--color-text-300)',
        700: 'var(--color-text-700)',
      },
      background: {
        DEFAULT: withOpacity('--color-background'),
      },
      border: {
        DEFAULT: withOpacity('--color-border'),
      },
      white: {
        DEFAULT: '#EBECEC',
        pure: '#FFFFFF',
      },
      black: {
        DEFAULT: '#000000',
      },
      grey: {
        DEFAULT: '#EBECEC4D',
        dark: '#646464',
        light: 'rgba(245, 245, 245, 0.5)',
      },
      green: {
        DEFAULT: '#01C36D',
        light: '#01C36D33',
        dark: '#1B3C37',
      },
      red: {
        DEFAULT: '#FF5863',
        light: '#FF586333',
        dark: '#4D2635',
      },
      yellow: {
        DEFAULT: '#ECC347',
        light: '#ECC34733',
      },
      blue: {
        DEFAULT: '#5698FF',
        light: '#5698FF63',
      },
      transparent: 'transparent',
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(
        {
          '.scrollbar-hide': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
          '.scrollbar-default': {
            '-ms-overflow-style': 'auto',
            'scrollbar-width': 'auto',
            '&::-webkit-scrollbar': {
              display: 'block',
            },
          },
          '.scrollbar-custom': {
            '&::-webkit-scrollbar': {
              width: '12px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#4A5568',
              borderRadius: '6px',
              border: '3px solid transparent',
              backgroundClip: 'content-box',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
          },
        },
        ['responsive']
      );
    }),
  ],
};

export default config;
