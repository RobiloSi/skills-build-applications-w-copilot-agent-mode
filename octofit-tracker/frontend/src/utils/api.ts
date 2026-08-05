// For Codespaces, define VITE_CODESPACE_NAME in .env.local so the frontend can
// build the correct API base URL. When the env var is missing, the app falls
// back safely to localhost instead of constructing an invalid Codespaces URL.
const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

export function getApiBaseUrl() {
  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api`
    : 'http://localhost:8000/api';
}

function extractArray<T>(payload: unknown): T[] {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && typeof payload === 'object') {
    const record = payload as Record<string, unknown>;
    if (Array.isArray(record.data)) {
      return record.data as T[];
    }
    if (Array.isArray(record.items)) {
      return record.items as T[];
    }
    if (Array.isArray(record.results)) {
      return record.results as T[];
    }
  }

  return [];
}

export async function fetchArray<T>(endpoint: string): Promise<T[]> {
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const response = await fetch(`${getApiBaseUrl()}${path}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.status}`);
  }

  const payload = await response.json();
  return extractArray<T>(payload);
}
