const { REACT_APP_8BASE_API_ENDPOINT: workspace } = process.env;

export const WebhooksAPI = {
  async getProductImage(query: string): Promise<string | null> {
    const queryWithoutSpaces = query.replace(/\s/g, '_');
    const response = await fetch(`${workspace}/webhook/${queryWithoutSpaces}/get-product-image`);

    const { image } = await response.json();
    return image;
  }
};