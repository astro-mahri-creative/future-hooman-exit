import { useState } from 'react';

// Basic stub: allows one submission per session
export function useDeviceFingerprint() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const canSubmit = !hasSubmitted;
  const recordSubmission = () => setHasSubmitted(true);

  return { canSubmit, recordSubmission };
}
