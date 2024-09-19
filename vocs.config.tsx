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
    light: '/svg/logo-light.svg',
    dark: '/svg/logo-dark.svg',
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
          link: '/console/overview',
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
              text: 'Settings',
              collapsed: false,
              items: [
                {
                  text: 'Tabs',
                  link: '/console/basics/settings/tabs',
                },
                {
                  text: 'Tags',
                  link: '/console/basics/settings/tags',
                },
                {
                  text: 'Workspaces',
                  link: '/console/basics/settings/workspaces',
                },
              ],
            },
          ],
        },
        {
          text: 'Adding Resources',
          collapsed: false,
          items: [
            {
              text: 'Add a Chain',
              link: '/console/resources/adding-a-chain',
            },
          ],
        },
        {
          text: 'Core Development',
          collapsed: true,
          items: [
            {
              text: 'Installation',
              link: '/console/development/installation',
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
          link: '/console/overview', 
        }, 
        { 
          text: 'Contributing', 
          link: '/contributing', 
        }, 
    { text: 'Blog', link: '/blog', match: '/blog' }, 
    { 
      text: 'Portal', 
      link: 'https://polkadot.cloud', 
    }
  ],
})
