import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Polkadot Cloud Docs',
  theme: { 
    colorScheme: 'light',
    accentColor: '#552bbf',
  },
  socials: [
    { 
      icon: 'github', 
      link: 'https://github.com/polkadot-cloud', 
    }
  ], 
  logoUrl: {
    light: '/logo-light.svg',
    dark: '/logo-dark.svg',
  },
  sidebar: [
    {
      text: 'Introduction',
      link: '/',
    },
    {
      text: 'Developer Console',
      collapsed: false,
      items: [
        {
          text: 'Overview',
          link: '/console',
        },
        {
          text: 'Basics',
          collapsed: false,
          items: [
            {
              text: 'Interface Overview',
              link: '/console/basics/interface-overview',
            },
            {
              text: 'Connecting to a Chain',
              link: '/console/basics/connecting-to-chain',
            },
            {
              text: 'Workspaces',
              link: '/console/basics/workspaces',
            },
          ],
        },
        {
          text: 'Adding Resources',
          collapsed: false,
          items: [
            {
              text: 'Add a Chain',
              link: '/console/resources',
            },
          ],
        },
        {
          text: 'Core Development',
          collapsed: true,
          items: [
            {
              text: 'Installation',
              link: '/console/development',
            },
          ],
        },
      ],
    }, {
      text: 'Contribution Program',
      link: '/contributing',
    }
  ],
  topNav: [ 
        { 
          text: 'Developer Console', 
          link: '/console', 
        }, 
        { 
          text: 'Contributing', 
          link: '/contributing', 
        }, 
    { text: 'Blog', link: '/blog', match: '/blog' }, 
  ], 
})
