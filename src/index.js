/**
stuiff
 * Contoso JavaScript SDK
 * Provides basic SDK functionality
 */

class ContosoSDK {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.contoso.com';
  }

  /**
   * Get the API key
   * @returns {string} The API key
   */
  getApiKey() {
    return this.apiKey;
  }

  /**
   * Set the API key
   * @param {string} apiKey - The new API key
   */
  setApiKey(apiKey) {
    this.apiKey = apiKey;
  }

  /**
   * Get the base URL
   * @returns {string} The base URL
   */
  getBaseUrl() {
    return this.baseUrl;
  }

  /**
   * Set the base URL
   * @param {string} url - The new base URL
   */
  setBaseUrl(url) {
    this.baseUrl = url;
  }

  /**
   * Check if the SDK is configured
   * @returns {boolean} True if API key is set
   */
  isConfigured() {
    return !!this.apiKey;
  }
}

module.exports = ContosoSDK;
