const codespaceName = (import.meta as { env: { VITE_CODESPACE_NAME?: string } }).env.VITE_CODESPACE_NAME;

export function getApiBaseUrl() {
  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api`
    : 'http://localhost:8000/api';
}
