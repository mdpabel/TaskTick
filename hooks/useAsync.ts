import { useState, useCallback } from 'react';

type StatusTypes = 'IDLE' | 'PENDING' | 'ERROR' | 'SUCCESS';

export const useAsync = <T = { data: any }, E = { data: any }>() => {
  const [status, setStatus] = useState<StatusTypes>('IDLE');
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const run = useCallback((promise: () => Promise<T>) => {
    setStatus('PENDING');
    promise()
      .then(async (res) => {
        setData(res);
        setStatus('SUCCESS');
      })
      .catch((err) => {
        setError(err);
        setStatus('ERROR');
      });
  }, []);

  return {
    isSuccess: status === 'SUCCESS',
    isError: status === 'ERROR',
    isLoading: status === 'PENDING',
    isIdle: status === 'IDLE',
    data,
    error,
    run,
  };
};
