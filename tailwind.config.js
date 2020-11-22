module.exports = {
  purge: [
      './resources/js/**/*.tsx'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        height: {
            "min-content": "min-content"
        },
        fontFamily: {
            'inter': ['Inter', 'sans-serif'],
            'mono': ['JetBrains Mono', 'sans-serif'],
        }
    },
  },
  variants: {
    extend: {
        display: ['dark'],
        rotate: ['hover']
    },
  },
  plugins: [],
}
