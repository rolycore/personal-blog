// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
      dark: {
        primary: '#1E88E5',
        secondary: '#757575',
        accent: '#FF4081',
        error: '#D32F2F',
        info: '#1976D2',
        success: '#388E3C',
        warning: '#FBC02D',
      },
    },
  },
  breakpoint: {
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920,
    },
    scrollBarWidth: 24,
  },
})