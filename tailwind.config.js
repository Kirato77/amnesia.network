module.exports = {
    purge: {
        content: ['./resources/js/**/*.tsx'],

        // These options are passed through directly to PurgeCSS
        options: {
            safelist: [
                'row-span-1',
                'row-span-2',
                'row-span-3',
                'row-span-4',
                'row-span-5',
                'col-span-1',
                'col-span-2',
                'col-span-3',
                'col-span-4',
                'col-span-5',
            ],
        }
    },
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
