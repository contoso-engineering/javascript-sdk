/**
 * Tests for Contoso JavaScript SDK
 */

const ContosoSDK = require('../src/index');

describe('ContosoSDK', () => {
  describe('constructor', () => {
    test('should create an instance with an API key', () => {
      const sdk = new ContosoSDK('test-api-key');
      expect(sdk).toBeInstanceOf(ContosoSDK);
      expect(sdk.getApiKey()).toBe('test-api-key');
    });

    test('should create an instance without an API key', () => {
      const sdk = new ContosoSDK();
      expect(sdk).toBeInstanceOf(ContosoSDK);
      expect(sdk.getApiKey()).toBeUndefined();
    });

    test('should set default base URL', () => {
      const sdk = new ContosoSDK('test-api-key');
      expect(sdk.getBaseUrl()).toBe('https://api.contoso.com');
    });
  });

  describe('getApiKey', () => {
    test('should return the API key', () => {
      const sdk = new ContosoSDK('my-api-key');
      expect(sdk.getApiKey()).toBe('my-api-key');
    });

    test('should return undefined when no API key is set', () => {
      const sdk = new ContosoSDK();
      expect(sdk.getApiKey()).toBeUndefined();
    });
  });

  describe('setApiKey', () => {
    test('should update the API key', () => {
      const sdk = new ContosoSDK('old-key');
      sdk.setApiKey('new-key');
      expect(sdk.getApiKey()).toBe('new-key');
    });

    test('should set API key when none was provided initially', () => {
      const sdk = new ContosoSDK();
      sdk.setApiKey('new-key');
      expect(sdk.getApiKey()).toBe('new-key');
    });
  });

  describe('getBaseUrl', () => {
    test('should return the base URL', () => {
      const sdk = new ContosoSDK('test-key');
      expect(sdk.getBaseUrl()).toBe('https://api.contoso.com');
    });
  });

  describe('setBaseUrl', () => {
    test('should update the base URL', () => {
      const sdk = new ContosoSDK('test-key');
      sdk.setBaseUrl('https://custom.contoso.com');
      expect(sdk.getBaseUrl()).toBe('https://custom.contoso.com');
    });

    test('should handle different URL formats', () => {
      const sdk = new ContosoSDK('test-key');
      sdk.setBaseUrl('http://localhost:3000');
      expect(sdk.getBaseUrl()).toBe('http://localhost:3000');
    });
  });

  describe('isConfigured', () => {
    test('should return true when API key is set', () => {
      const sdk = new ContosoSDK('test-key');
      expect(sdk.isConfigured()).toBe(true);
    });

    test('should return false when API key is not set', () => {
      const sdk = new ContosoSDK();
      expect(sdk.isConfigured()).toBe(false);
    });

    test('should return false when API key is empty string', () => {
      const sdk = new ContosoSDK('');
      expect(sdk.isConfigured()).toBe(false);
    });

    test('should return true after setting API key', () => {
      const sdk = new ContosoSDK();
      expect(sdk.isConfigured()).toBe(false);
      sdk.setApiKey('new-key');
      expect(sdk.isConfigured()).toBe(true);
    });
  });
});
