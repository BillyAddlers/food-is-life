export default {
    target: 'static',
    // We're using github pages, so we set base route to sub pages on the github pages.
    router: {
        base: '/food-is-life'
    },
    //
    buildModules: ['@nuxt/typescript-build'],
    srcDir: 'src',
    components: true,
    head: {
        title: 'Food is Life',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width-device-width, initial-scale=1'
            }
        ],
        link: [{
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootswatch@5.1.1/dist/darkly/bootstrap.min.css',
            crossorigin: 'anonymous'
        }],
        script: [{
            src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.1/js/bootstrap.bundle.min.js',
            crossorigin: 'anonymous',
            defer: true,
            body: true
        }, ]
    }
}