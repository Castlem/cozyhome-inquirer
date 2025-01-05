import { create } from 'zustand'

interface HomeStore {
  answers: Record<string, string | number>;
  setAnswer: (questionId: string, value: string | number) => void;
}

export const useHomeStore = create<HomeStore>((set) => ({
  answers: {},
  setAnswer: (questionId, value) => 
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: value,
      },
    })),
}));