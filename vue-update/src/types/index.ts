export interface ExamInfo {
  subject: string;
  className: string;
  questionCount: number;
  duration: number;
  schedule: string;
  supervisor: string;
}

export interface QuestionOption {
  key: string;
  value: string;
}

export interface Question {
  question: string;
  options: QuestionOption[];
}
