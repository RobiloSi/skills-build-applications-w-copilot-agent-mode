export function getApiBaseUrl(codespaceName?: string) {
  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
}

export function getAllowedOrigins(codespaceName?: string) {
  const origins = [
    'http://localhost:5173',
    'https://localhost:5173',
    'http://127.0.0.1:5173',
    'https://127.0.0.1:5173'
  ];

  if (codespaceName) {
    origins.push(`https://${codespaceName}-5173.app.github.dev`);
    origins.push(`https://${codespaceName}-8000.app.github.dev`);
  }

  return origins;
}
