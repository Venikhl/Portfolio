import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { languages } from './i18n'
import { defaultLocale } from './i18n'
import {createI18n, useI18n} from 'vue-i18n'

// const localeStorageLang = localeStorage.getItem('lang')

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    // locale: localeStorageLang || defaultLocale,
    fallbackLocale: 'en',
    messages
})

createApp(App, {
    setup() {
        const {t} = useI18n()
        return {t}
    }
}).use(i18n).mount('#app')
