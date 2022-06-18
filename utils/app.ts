
export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'Nuxt 3 Bootstrap5',
    author: {
      name: 'Shady Tawfik',
      link: 'https://github.com/ModernAmusements',
    },
  }
  useState('app', () => app)

  return {
    app
  }
}

export default {
  head() {
    return {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        },
      ]
    }
  }
}