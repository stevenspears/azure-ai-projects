import { TextAnalyticsClient, AzureKeyCredential } from '@azure/ai-text-analytics';

const endpoint = import.meta.env.VITE_AZURE_ENDPOINT;
const apiKey = import.meta.env.VITE_AZURE_API_KEY;

if (!endpoint || !apiKey) {
  throw new Error("Azure endpoint or API key is missing in environment variables");
}

const client = new TextAnalyticsClient(endpoint, new AzureKeyCredential(apiKey));

export const analyzeSentiment = async (text: string) => {
  const [result] = await client.analyzeSentiment([text]);
  return result;
};
