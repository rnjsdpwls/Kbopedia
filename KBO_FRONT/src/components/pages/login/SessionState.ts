import { atom } from 'recoil';

export interface User {
  properties: {
    nickname: string;
    // 다른 사용자 관련 속성들을 추가할 수 있습니다.
  };
  // 여기에 다른 필요한 사용자 관련 정보를 추가할 수 있습니다.
}

export interface SessionState {
  isAuthenticated: boolean;
  user: User | null;
}

export const sessionState = atom<SessionState>({
  key: 'sessionState',
  default: {
    isAuthenticated: false,
    user: null,
  },
});
