const theme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin')

module.exports = {
  // purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, 
  theme: {
    screens: { // 반응형
      sm: '480px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      '2xl': '1440px',
    },
    colors: {
      'main': '#FFE462',
      'main-light': '#FFEC9B',
      'sub': '#62FFBD',
      'sub-light': '#F2FFE0',
      'black': '#212121',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '7rem',
      },
    },
    spacing: {
      'section': '100px',
      'li': '8px',
    },
    extend: { // 여러 스타일 설정
      fontFamily: {
        sans: ['pretendard', ...theme.fontFamily.sans],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents, addUtilities, addBase, theme }) {
      addComponents ({ // 컴포넌트 만들기
        
      }),
        addUtilities([ // 폰트
          {
            '.section_title': {
              'text-align': 'center',
              'font-weight': 700,
              'color': 'var(--black-color)',
              'font-size':'25px'
            }
          },
          {
            '@media (min-width: theme(screens.sm))': {
              '.section_title': {
                'font-size':'25px'
              }
            }
          },
          {
            '@media (min-width: theme(screens.md))': {
              '.section_title': {
                'font-size':'30px'
              }
            }
          },
          {
            '@media (min-width: theme(screens.lg))': {
              '.section_title': {
                'font-size':'35px'
              }
            }
          },
          {
            '@media (min-width: theme(screens.2xl))': {
              '.section_title': {
                'font-size':'45px'
              }
            }
          },
      ])
    }),
  ],
};
