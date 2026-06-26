import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout: 10 * 1000,
  use: {
    browserName: 'chromium',
    headless: false
  }

});
