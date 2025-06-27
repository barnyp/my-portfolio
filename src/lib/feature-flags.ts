/**
 * Feature flags utility to conditionally enable/disable features
 * particularly useful for testing environments and E2E testing
 * 
 * @module feature-flags
 */

/**
 * Type for supported environment values
 */
type Environment = 'development' | 'test' | 'production';

/**
 * Environment-based feature flag configuration
 */
interface FeatureFlags {
  /**
   * When true, bypasses reCAPTCHA verification in the contact form
   * Only enabled in test environments
   */
  bypassRecaptcha: boolean;
  
  /**
   * When true, uses mock email service instead of actual nodemailer
   * Only enabled in test environments
   */
  useMockEmailService: boolean;
  
  /**
   * When true, adds test-specific attributes to key UI elements
   * for easier E2E test selection
   */
  enableTestAttributes: boolean;
}

/**
 * Gets the current environment
 * @returns The current environment type
 */
export const getEnvironment = (): Environment => {
  if (process.env.NODE_ENV === 'production') {
    return 'production';
  } else if (
    process.env.NODE_ENV === 'test' ||
    process.env.NEXT_PUBLIC_TEST_MODE === 'true' ||
    process.env.PLAYWRIGHT === 'true' ||
    process.env.JEST_WORKER_ID !== undefined
  ) {
    return 'test';
  } else {
    return 'development';
  }
};

/**
 * Determines if the code is running in a test environment
 * @returns true if running in a test environment, false otherwise
 */
export const isTestEnvironment = (): boolean => {
  return getEnvironment() === 'test';
};

/**
 * Feature flags configuration based on environment
 */
export const featureFlags: FeatureFlags = {
  bypassRecaptcha: isTestEnvironment(),
  useMockEmailService: isTestEnvironment(),
  enableTestAttributes: isTestEnvironment(),
};

/**
 * Type for component sections used in testing
 */
export type TestableComponent = 
  | 'navbar'
  | 'footer'
  | 'blog'
  | 'contact'
  | 'portfolio'
  | 'services'
  | 'skills'
  | 'testimonials'
  | 'about'
  | 'theme-toggle'
  | string;

/**
 * Get test data attributes if test attributes are enabled
 * @param component The component or element being tested
 * @param id Optional specific identifier for the component instance
 * @returns Object with data-testid attribute or empty object
 */
export const getTestAttributes = (component: TestableComponent, id?: string | number): Record<string, string> => {
  if (!featureFlags.enableTestAttributes) {
    return {};
  }
  
  const testId = id !== undefined ? `${component}-${id}` : component;
  return { 'data-testid': testId };
};

/**
 * Utility to add test IDs to array items
 * @param component The base component name
 * @param index The array index
 * @returns The test attributes object
 */
export const getTestAttributesForItem = (component: TestableComponent, index: number): Record<string, string> => {
  return getTestAttributes(component, index);
};


export default featureFlags;
