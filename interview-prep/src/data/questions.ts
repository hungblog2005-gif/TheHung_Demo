export type Question = {
  id: string;
  category: 'general' | 'leadership' | 'strategy' | 'ops';
  translations: {
    en: { question: string; answer: string };
    vi: { question: string; answer: string };
    ko: { question: string; answer: string };
  };
};

export const interviewQuestions: Question[] = [
  {
    id: '1',
    category: 'general',
    translations: {
      en: {
        question: "Tell me about yourself and your professional background.",
        answer: "Focus on the 'Present-Past-Future' formula. Briefly describe your current role, key past achievements relevant to the position, and why you are excited about this future opportunity."
      },
      vi: {
        question: "Hãy giới thiệu về bản thân và nền tảng chuyên môn của bạn.",
        answer: "Sử dụng công thức 'Hiện tại - Quá khứ - Tương lai'. Mô tả ngắn gọn vai trò hiện tại, các thành tích chính trong quá khứ liên quan đến vị trí này và lý do bạn hào hứng với cơ hội tương lai này."
      },
      ko: {
        question: "자기소개와 전문적인 배경에 대해 말씀해 주세요.",
        answer: "'현재-과거-미래' 공식을 활용하세요. 현재 역할, 해당 직무와 관련된 주요 과거 성과, 그리고 이 기회에 대해 기대하는 이유를 간결하게 설명하세요."
      }
    }
  },
  {
    id: '2',
    category: 'leadership',
    translations: {
      en: {
        question: "How do you handle conflict within your team?",
        answer: "Describe a specific situation using the STAR method (Situation, Task, Action, Result). Emphasize active listening, objectivity, and finding a win-win solution that aligns with business goals."
      },
      vi: {
        question: "Bạn xử lý xung đột trong nhóm như thế nào?",
        answer: "Mô tả một tình huống cụ thể bằng phương pháp STAR (Tình huống, Nhiệm vụ, Hành động, Kết quả). Nhấn mạnh vào việc lắng nghe tích cực, sự khách quan và tìm kiếm giải pháp đôi bên cùng có lợi, phù hợp với mục tiêu kinh doanh."
      },
      ko: {
        question: "팀 내 갈등을 어떻게 해결하시나요?",
        answer: "STAR 기법(Situation, Task, Action, Result)을 사용하여 구체적인 사례를 설명하세요. 경청, 객관성, 그리고 비즈니스 목표에 부합하는 윈윈(win-win) 솔루션을 찾는 과정을 강조하세요."
      }
    }
  },
  {
    id: '3',
    category: 'strategy',
    translations: {
      en: {
        question: "Where do you see this company's industry heading in the next 5 years?",
        answer: "Demonstrate market research. Discuss trends like AI integration, sustainability, or shifting consumer behaviors. Link these trends back to how you can help the company adapt and grow."
      },
      vi: {
        question: "Bạn thấy ngành của công ty này sẽ đi về đâu trong 5 năm tới?",
        answer: "Thể hiện kết quả nghiên cứu thị trường. Thảo luận về các xu hướng như tích hợp AI, phát triển bền vững hoặc sự thay đổi hành vi người tiêu dùng. Kết nối các xu hướng này với việc bạn có thể giúp công ty thích nghi và phát triển như thế nào."
      },
      ko: {
        question: "향후 5년 동안 이 회사가 속한 산업이 어떻게 변화할 것이라고 생각하시나요?",
        answer: "시장 조사 결과를 보여주세요. AI 통합, 지속 가능성, 소비자 행동 변화와 같은 트렌드를 논의하고, 이러한 트렌드 속에서 회사가 어떻게 적응하고 성장할 수 있도록 도울 것인지 연결하여 설명하세요."
      }
    }
  },
  {
    id: '4',
    category: 'ops',
    translations: {
      en: {
        question: "Can you describe a time you optimized a business process to improve efficiency?",
        answer: "Quantify your results. 'I reduced processing time by 20%' is better than 'I made it faster'. Explain the bottleneck, the tool or method used for optimization, and the final impact on the bottom line."
      },
      vi: {
        question: "Bạn có thể mô tả một lần bạn tối ưu hóa quy trình kinh doanh để cải thiện hiệu quả?",
        answer: "Đưa ra các con số định lượng. 'Tôi đã giảm thời gian xử lý xuống 20%' sẽ tốt hơn là 'Tôi làm cho nó nhanh hơn'. Giải thích điểm nghẽn, công cụ hoặc phương pháp tối ưu hóa đã sử dụng và tác động cuối cùng đến kết quả kinh doanh."
      },
      ko: {
        question: "비즈니스 프로세스를 최적화하여 효율성을 개선했던 경험을 설명해 주시겠습니까?",
        answer: "결과를 수치화하세요. '처리 시간을 20% 단축했습니다'가 '더 빠르게 만들었습니다'보다 훨씬 효과적입니다. 병목 구간, 최적화에 사용한 도구나 방법, 그리고 최종적으로 비즈니스 성과에 미친 영향에 대해 설명하세요."
      }
    }
  }
];
