declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      JWR_SECRETE: string;
      COOKIES_NAME: string;
    }
  }
}

export {};
