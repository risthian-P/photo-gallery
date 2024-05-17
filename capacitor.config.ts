import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000, // Duración en milisegundos
      backgroundColor: '#de0f17', // Color de fondo (opcional)
      showSpinner: true, // Mostrar un spinner (opcional)
      androidSpinnerStyle: 'small'
    }
  }
};

export default config;
