// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'Locale Workflows',
    description: 'Learn about workflow in Locale to automate your tasks and procecess with AI.',
    image: 'https://docs.locale.ai/cover.png',
    socials: {
      twitter: 'localeai',
      github: 'localeai/docs',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docs',
      owner: 'localeai',
      edit: false
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: false
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
