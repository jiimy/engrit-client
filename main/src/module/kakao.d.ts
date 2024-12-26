declare global {
  interface Window {
    // Kakao: KakaoSDK;
    Kakao: any;
  }
  interface KakaoSDK {
    init: (key: string) => void;
    isInitialized: () => boolean;
    Auth: {
      authorize: (options: {
        redirectUri: string;
        scope: string;
        serviceTerms: string;
      }) => void;
    };
  }
}

export {};
