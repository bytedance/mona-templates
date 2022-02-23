declare namespace NodeJS {
  interface ProcessEnv {
    MONA_TARGET: 'mini' | 'plugin' | 'web';
  }
}
