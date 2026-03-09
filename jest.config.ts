import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest', // Use ts-jest preset to enable TypeScript support
  testEnvironment: 'node', // Set the test environment to Node.js
  verbose: true, // Enable verbose output to show individual test results
}

export default config
