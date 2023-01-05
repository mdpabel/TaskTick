// @ts-nocheck
import { useState, useCallback } from 'react';

type StatusTypes = 'IDLE' | 'PENDING' | 'ERROR' | 'SUCCESS';

export const useAsync = <T>() => {
  const [status, setStatus] = useState<StatusTypes>('IDLE');
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<T | null>(null);

  const run = useCallback((promise: Promise<T>) => {
    setStatus('PENDING');
    if (!promise || !promise.then) {
      throw new Error(
        `The argument passed to useAsync().run must be a promise.`
      );
    }

    promise
      // @ts-expect-error
      .then(({ data }) => {
        console.log(data);
        setData(data);
        setStatus('SUCCESS');
      })
      .catch(({ data }) => {
        setError(data);
        setStatus('ERROR');
      });
  }, []);

  console.log(data);

  const setValue = useCallback(
    (val) => {
      if (status === 'SUCCESS') {
        setData([...data, val]);
      }
    },
    [data, status]
  );

  return {
    isSuccess: status === 'SUCCESS',
    isError: status === 'ERROR',
    isLoading: status === 'PENDING',
    isIdle: status === 'IDLE',
    data,
    error,
    run,
    setValue,
  };
};
