import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const customDarkTheme = {
  dark: true,
  colors: {
    background: '#0F172A',
    surface: '#1E293B',
    'surface-variant': '#334155',
    primary: '#6366F1',
    'primary-darken-1': '#4F46E5',
    secondary: '#06B6D4',
    'secondary-darken-1': '#0891B2',
    accent: '#F43F5E',
    error: '#EF4444',
    info: '#3B82F6',
    success: '#10B981',
    warning: '#F59E0B',
  },
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customDarkTheme',
    themes: {
      customDarkTheme,
    },
  },
})
