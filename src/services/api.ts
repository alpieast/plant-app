import { Category, Question } from "../types";

const BASE_URL = "https://dummy-api-jtg6bessta-ey.a.run.app";

export class ApiService {
  static async getCategories(): Promise<Category[]> {
    try {
      const response = await fetch(`${BASE_URL}/getCategories`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }

  static async getQuestions(): Promise<Question[]> {
    try {
      const response = await fetch(`${BASE_URL}/getQuestions`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Error fetching questions:", error);
      throw error;
    }
  }
}
