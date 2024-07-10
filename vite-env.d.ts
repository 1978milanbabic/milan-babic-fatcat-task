/// <reference types="vite/client" />

declare const __CWD__: string;

interface ImportMetaEnv {
  readonly VITE_USERS_API_URL: string;
  readonly VITE_POSTS_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
