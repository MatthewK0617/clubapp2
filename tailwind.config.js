module.exports = {
  purge: ['./src/components/ProfilePage', './src/components/SignUp', './src/components/SignIn'], // look into this
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      tealblue: '#4E8098',
      palecerulean: '#90C2E7',
      queenblue: '#4D7298',
      babyblue: '#A3D5FF',
      aliceblue: '#F0F8FF',
      azure: '#F0FFFF',
      ivory: '#FFFFF0',
      snow: '#FFFAFA',
      mbpurple: '#B8B8FF',
      black: '#000000',
      paradisepink: '#EA526F',
      majorelleblue: '#574AE2',
      green: "#00cc00",
      red: "#ff0000",
      blue1: "#0099ff",
    }
  },
  variants: {
    extend: {
      ringWidth: ['active'],
      ringColor: ['active'],
    },
  },
  plugins: [],
}
