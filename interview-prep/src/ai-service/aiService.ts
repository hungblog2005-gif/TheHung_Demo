import { GoogleGenerativeAI } from '@google/generative-ai';
import { AIRequest, AIAnalysisResponse } from './types';
import { KV_TRAINING_SYSTEM_PROMPT } from './prompts';

// Use the Gemini API Key from environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export const analyzeAnswer = async (request: AIRequest): Promise<AIAnalysisResponse> => {
  console.log('KV-Training AI (Gemini) is analyzing your answer...', request);

  if (!genAI) {
    console.error('VITE_GEMINI_API_KEY is missing in .env file');
    return getMockResponse();
  }

  try {
    // Initialize the model with the system prompt
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: KV_TRAINING_SYSTEM_PROMPT
    });

    const prompt = `Question: ${request.question}\nUser Answer: ${request.userAnswer}\nTarget Language: ${request.language}\n\nPlease provide the analysis in the requested JSON format.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Extract JSON from potential markdown blocks (e.g., ```json ... ```)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('AI returned non-JSON response');
    }

    const parsedResponse = JSON.parse(jsonMatch[0]);
    return parsedResponse as AIAnalysisResponse;
  } catch (error) {
    console.error('Gemini AI Service Error:', error);

    // Fallback to mock data to prevent app crash
    console.warn('Falling back to mock response due to AI error.');
    return getMockResponse();
  }
};

function getMockResponse(): AIAnalysisResponse {
  return {
    score: 75,
    strengths: {
      vi: ["Giải thích kỹ thuật rõ ràng", "Hiểu rõ yêu cầu cốt lõi"],
      en: ["Clear technical explanation", "Good understanding of the core requirement"],
      ko: ["기술적인 설명이 명확함", "핵심 요구사항에 대한 이해도가 높음"]
    },
    improvements: {
      vi: ["Tone giọng hơi quá trực tiếp đối với quản lý người Hàn", "Thiếu đề cập rõ ràng đến tinh thần làm việc nhóm/phối hợp"],
      en: ["Tone is a bit too direct for a Korean manager", "Lack of explicit mention of teamwork/collaboration"],
      ko: ["한국인 관리자에게는 말투가 다소 너무 직설적임", "팀워크 및 협력에 대한 명시적인 언급이 부족함"]
    },
    culturalAnalysis: {
      vi: "Trong văn hóa Hàn Quốc, việc nhấn mạnh 'Chúng tôi' (우리) thay vì 'Tôi' (나) là rất quan trọng. Câu trả lời hiện tại quá tập trung vào thành tích cá nhân.",
      en: "In Korean culture, emphasizing 'We' (우리) over 'I' (나) is crucial. The current answer focuses too much on individual achievement.",
      ko: "한국 문화에서는 '나'보다 '우리'를 강조하는 것이 매우 중요합니다. Hiện tại 답변은 개인의 성과에 너무 집중되어 있습니다."
    },
    suggestedAnswer: {
      vi: "Tôi đã nỗ lực hoàn thành dự án đúng hạn bằng cách phối hợp chặt chẽ với các đồng nghiệp để đảm bảo chất lượng tốt nhất.",
      en: "I strived to complete the project on time by coordinating closely with colleagues to ensure the highest quality.",
      ko: "동료들과 긴밀히 협력하여 최고의 품질을 확보함으로써 프로젝트를 기한 내에 완수하기 위해 노력했습니다."
    },
    toneSuggestions: "Use more humble and respectful language. Avoid using 'I' too frequently when describing team success.",
    workplaceTips: [
      "Always acknowledge the support of your team.",
      "Use 'Honorifics' (존댓말) consistently in Korean interviews."
    ]
  };
}
