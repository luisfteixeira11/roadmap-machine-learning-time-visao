import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'pt-BR',
  title: "Roadmap Machine Learning",
  description: "Um Roadmap para os que desejam entrar no campo de Machine Learning, criado pelo Time Visão da Universidade de Pernambuco.",
  head: [
    ['link', { rel: 'icon', href: '/logo.jpeg' }]
  ],
  themeConfig: {
    logo: '/logo.jpeg',
    footer: {
      message: '© 2026 Time Visão - UPE.',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Roadmap', link: '/boas-vindas' }
    ],

    sidebar: [
      {
        text: 'Sumário',
        items: [
          { text: 'Boas-vindas ao Roadmap', link: '/boas-vindas' },
          { text: 'Introdução ao Machine Learning', link: '/introducao' },
          { text: 'Fundamentos matemáticos para Machine Learning', link: '/fundamentos-matematicos' },
          { text: 'Programação fundamental', link: '/programacao-fundamental' },
          { text: 'Dados para Machine Learning', link: '/dados' },
          { text: 'Tópicos de Machine Learning', link: '/machine-learning' },
          { text: 'Recursos Adicionais', link: '/recursos-adicionais' },
          { text: 'Finalização', link: '/finalizacao' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Timevisaoupe' },
      { icon: 'instagram', link: 'https://www.instagram.com/timevisaoupe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' }
    ]
  }
})
