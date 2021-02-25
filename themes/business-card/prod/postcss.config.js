module.exports = {
  plugins: [
  	require('tailwindcss'),
    require('@fullhuman/postcss-purgecss')({
    	content: ['./**/*.html',],
        extractors: [
            {
                extractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
                extensions: ['html'],
            },
        ],
        whitelist: ['p']
        keyframe: true
    }),
    require('autoprefixer')({
    	browserlist: [
    		'defaults',
    		'cover 99.5% in CH',
    		'IE 10' // Chose your fights wisely.
		]
    }),
    require('cssnano')({
        preset: 'default',
    }),
  ]
}