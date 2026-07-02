import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  retries: 2,
  workers: 1,
  timeout: 5 * 1000,
  expect: {
    timeout: 5000
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
