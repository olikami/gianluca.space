module.exports = {
  plugins: [
  	require('tailwindcss'),
    require('autoprefixer')({
    	browserlist: [
    		'defaults',
		]
    }),
  ]
}