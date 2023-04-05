import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      content: {}
    }
  },
  getters: {
    // all these getters will have their type inferred automatically
    getNav() {
      return this.content.nav
    },
    getContent() {
      return this.content
    }
  },
  actions: {
    //write function that takes a lang and runs one of the setContent functions
    async setContent(lang) {
      if (lang === 'et') await this.setContentEt()
      else if (lang === 'ru') await this.setContentRu()
      else if (lang === 'zh') await this.setContentZh()
      else if (lang === 'de') await this.setContentDe()
      else if (lang === 'vi') await this.setContentVi()
      else await this.setContentEn()
    },
    async setContentEn() {
      this.content = await (await import('@/data/en.json')).default
    },
    async setContentEt() {
      this.content = await (await import('@/data/et.json')).default
    },
    async setContentRu() {
      this.content = await (await import('@/data/ru.json')).default
    },
    async setContentZh() {
      this.content = await (await import('@/data/zh.json')).default
    },
    async setContentDe() {
      this.content = await (await import('@/data/de.json')).default
    },
    async setContentVi() {
      this.content = await (await import('@/data/vi.json')).default
    }
  }
})
