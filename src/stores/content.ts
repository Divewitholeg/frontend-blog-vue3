import type { Content } from './../types/index'
import type { Button } from './../types/index'
import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      content: {} as Content
    }
  },
  getters: {
    // all these getters will have their type inferred automatically
    getNav(): Button[] {
      return this.content.nav
    },
    getContent(): Content {
      return this.content
    }
  },
  actions: {
    //write function that takes a lang and runs one of the setContent functions
    async setContent(lang: string): Promise<void> {
      if (lang === 'et') await this.setContentEt()
      else if (lang === 'ru') await this.setContentRu()
      else if (lang === 'zh') await this.setContentZh()
      else if (lang === 'de') await this.setContentDe()
      else if (lang === 'vi') await this.setContentVi()
      else await this.setContentEn()
    },
    async setContentEn(): Promise<void> {
      this.content = await (await import('@/data/en.json')).default
    },
    async setContentEt(): Promise<void> {
      this.content = await (await import('@/data/et.json')).default
    },
    async setContentRu(): Promise<void> {
      this.content = await (await import('@/data/ru.json')).default
    },
    async setContentZh(): Promise<void> {
      this.content = await (await import('@/data/zh.json')).default
    },
    async setContentDe(): Promise<void> {
      this.content = await (await import('@/data/de.json')).default
    },
    async setContentVi(): Promise<void> {
      this.content = await (await import('@/data/vi.json')).default
    }
  }
})
