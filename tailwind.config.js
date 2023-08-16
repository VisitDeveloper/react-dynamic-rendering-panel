/** @type {import('tailwindcss').Config} */

const {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  colors: defaultColors,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fontSize: defaultFontSize
  // eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
} = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors :{
        ...defaultColors,
        ...{
          Blue900 :'#081B23',
          Blue800:'#0E2D39',
          Blue700:'#143F51',
          Blue600:'#195167',
          Blue500:'#1C5A73',
          Blue400:'#2E657C',
          Blue300:'#608B9D',
          Blue200:'#8DACB9',
          Blue100:'#BBCDD5',
          Blue50:'#E8EEF1',


          Green900 :'#0A1711',
          Green800:'#11251C',
          Green700:'#183528',
          Green600:'#1F4333',
          Green500:'#224B39',
          Green400:'#335848',
          Green300:'#648174',
          Green200:'#91A59C',
          Green100:'#BDC9C4',
          Green50:'#E9EDEB',

          Gray900 :'#343434',
          Gray800:'#575757',
          Gray700:'#797979',
          Gray600:'#9C9C9C',
          Gray500:'#9B9B9B',
          Gray400:'#B0B0B0',
          Gray300:'#C5C5C5',
          Gray200:'#D6D6D6',
          Gray100:'#E6E6E6',
          Gray50:'#FFFFFF',

          Error900 :'#400000',
          Error800:'#6A0000',
          Error700:'#950000',
          Error600:'#BF0000',
          Error500:'#D40000',
          Error400:'#D31414',
          Error300:'#E14C4C',
          Error200:'#E97F7F',
          Error100:'#F2B2B2',
          Error50:'#FBE5E5',

          Success900 :'#002D29',
          Success800:'#004B44',
          Success700:'#00695F',
          Success600:'#00877B',
          Success500:'#009688',
          Success400:'#149B8F',
          Success300:'#4CB5AB',
          Success200:'#7FCAC3',
          Success100:'#B2DFDB',
          Success50:'#E5F4F3',

          Warning900 :'#4D3C00',
          Warning800:'#806400',
          Warning700:'#B38C00',
          Warning600:'#E6B300',
          Warning500:'#FFC700',
          Warning400:'#FAC714',
          Warning300:'#FFD84C',
          Warning200:'#FFE37F',
          Warning100:'#FFEEB2',
          Warning50:'#FFF9E5',

          Info900 :'#123344',
          Info800:'#1D5570',
          Info700:'#29779D',
          Info600:'#3498CA',
          Info500:'#3AA9E0',
          Info400:'#48ACDE',
          Info300:'#75C3E9',
          Info200:'#9CD4EF',
          Info100:'#C4E5F6',
          Info50:'#EBF6FC',

          white: "#FFFFFF",
          black: "#000000",
        }
      },
      fontFamily: {
        primary: 'FarhangFont',
        nastaliq: 'NastaliqFont',
        farhangFaNum: 'FarhangDot1FaNum'
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      //   fing : "url('/image/fing.png')",
      // },
      // boxShadow: {
      //   primary: '4px 4px 16px 0px #0000001A',
      //   '6xl': '0px 0px 20px 20px #0000001A',
      //   contactus: '-20px 0px 250px -20px #00A3FF33',
      //   contactuss: '-20px 0px 250px -20px #70707033'
      // }
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
  plugins: [require("tailwindcss-dir")(), require("tailwindcss-rtl")],
}