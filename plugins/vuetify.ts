// plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          dark: true,
          colors: {
            background: '#0B0F19',
            surface: '#121829',
            'surface-bright': '#1A2237',
            'surface-variant': '#1E2A3E',
            primary: '#6C5CE7',
            'primary-darken-1': '#5A4BD1',
            secondary: '#00CEC9',
            'secondary-darken-1': '#00B5B0',
            accent: '#FD79A8',
            error: '#FF6B6B',
            warning: '#FDCB6E',
            info: '#74B9FF',
            success: '#00B894',
            'on-background': '#E2E8F0',
            'on-surface': '#CBD5E1',
          },
        },
        light: {
          dark: false,
          colors: {
            background: '#F1F5F9',
            surface: '#FFFFFF',
            'surface-bright': '#F8FAFC',
            'surface-variant': '#E2E8F0',
            primary: '#6C5CE7',
            'primary-darken-1': '#5A4BD1',
            secondary: '#00B894',
            'secondary-darken-1': '#009D80',
            accent: '#FD79A8',
            error: '#E74C3C',
            warning: '#F39C12',
            info: '#3498DB',
            success: '#27AE60',
            'on-background': '#1E293B',
            'on-surface': '#334155',
          },
        },
      },
    },
    defaults: {
      VBtn: {
        variant: 'flat',
        rounded: 'lg',
      },
      VCard: {
        rounded: 'xl',
        elevation: 0,
      },
      VTextField: {
        variant: 'outlined',
        density: 'comfortable',
        rounded: 'lg',
        color: 'primary',
      },
      VSelect: {
        variant: 'outlined',
        density: 'comfortable',
        rounded: 'lg',
        color: 'primary',
      },
      VChip: {
        rounded: 'lg',
      },
    },
  })

  app.vueApp.use(vuetify)
})
