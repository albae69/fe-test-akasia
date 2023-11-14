/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/screens/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        thin: 'PlusJakartaSans-Thin',
        light: 'PlusJakartaSans-Light',
        italic: 'PlusJakartaSans-Italic',
        regular: 'PlusJakartaSans-Regular',
        med: 'PlusJakartaSans-Medium',
        semibold: 'PlusJakartaSans-SemiBold',
        bold: 'PlusJakartaSans-Bold',
        extrabold: 'PlusJakartaSans-ExtraBold',
        black: 'PlusJakartaSans-Black',
      },
    },
  },
  plugins: [],
};
