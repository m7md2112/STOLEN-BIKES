import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";

interface UseAxiosOptions {
  url: string;
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH" | "HEAD" | "OPTIONS";
  payload?: unknown;
  params?: unknown;
  customHeader?: Record<string, string>;
  useBaseUrl?: boolean;
}

interface UseAxiosResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  refetch: () => void;
  sendRequest: (requestData: unknown, param?: unknown) => Promise<unknown>;
}

const useAxios = <T>({
  url,
  method,
  payload,
  params,
  customHeader,
  useBaseUrl,
}: UseAxiosOptions): UseAxiosResponse<T> => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [reload, setReload] = useState<number>(0);
  const baseUrl = "https://bikeindex.org/api/v3/";

  const sendRequest = async (requestData: unknown, param?: unknown) => {
    const controller = new AbortController();

    try {
      setLoading(true);

      const config: AxiosRequestConfig = {
        baseURL: useBaseUrl === true ? baseUrl : undefined,
        url,
        method,
        headers: customHeader,
        params: param,
        data: requestData,
        signal: controller.signal,
      };

      const response = await axios.request(config);
      setData(response.data);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      setError(axiosError.message);
    } finally {
      setLoading(false);
    }
  };

  const refetch = useCallback(() => setReload((prev) => prev + 1), []);

  useEffect(() => {
    if (method !== "POST") {
      const controller = new AbortController();

      const fetchData = async () => {
        try {
          const config: AxiosRequestConfig = {
            baseURL: useBaseUrl === true ? baseUrl : undefined,
            url,
            method,
            headers: customHeader,
            params,
            data: payload,
            signal: controller.signal,
          };

          const response = await axios.request(config);
          setData(response.data);
        } catch (error) {
          if (axios.isAxiosError(error) && error.message !== "canceled") {
            const axiosError = error as AxiosError;
            setError(axiosError.message);
          }
        } finally {
          setLoading(false);
        }
      };

      fetchData();

      return () => {
        controller.abort();
      };
    }
  }, [reload]);

  return {
    data,
    error,
    loading,
    refetch,
    sendRequest,
  };
};

export default useAxios;
