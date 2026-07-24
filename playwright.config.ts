import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  retries: 0,
  workers: 1,
  timeout: 20 * 1000,
  expect: {
    timeout: 20000
  },

  projects: 
  [
    {
      name: "chrome",
      use: {
      browserName: 'chromium',
      headless: false,
      screenshot: 'only-on-failure',
      trace: 'retain-on-failure',
      launchOptions: {
      args: ['--start-maximized'],
      },
      viewport: null,
      ignoreHTTPSErrors: true
      }
    },
    {
      name: "webkit",
      use: {
      browserName: 'webkit',
      headless: false,
      screenshot: 'only-on-failure',
      trace: 'retain-on-failure'
  
    }

    }

  ]

});
