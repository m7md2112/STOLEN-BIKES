import axios, { AxiosError } from "axios";
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
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [reload, setReload] = useState<number>(0);
  const baseUrl = "https://bikeindex.org/api/v3/";

  const sendRequest = async (requestData: unknown, param?: unknown) => {
    const controller = new AbortController();

    try {
      setLoading(true);

      const response = await axios.request({
        baseURL: useBaseUrl ? baseUrl : undefined,
        url,
        method,
        headers: customHeader,
        params: param,
        data: requestData,
        signal: controller.signal,
      });

      setData(response.data);
      return response.data;
    } catch (error) {
      setError((error as AxiosError).message);
    } finally {
      setLoading(false);
    }
  };

  const refetch = useCallback(() => {
    setError(null);
    setLoading(true);
    setReload((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (method !== "POST") {
      setLoading(true);
      const controller = new AbortController();
      const fetchData = async () => {
        try {
          const response = await axios.request({
            baseURL: useBaseUrl ? baseUrl : undefined,
            url,
            method,
            headers: customHeader,
            params,
            data: payload,
            signal: controller.signal,
          });

          setData(response.data);
        } catch (error) {
          if (
            axios.isAxiosError(error) &&
            (error as AxiosError).message !== "canceled"
          ) {
            setError((error as AxiosError).message);
          }
        } finally {
          setLoading(false);
        }
      };

      fetchData();

      return () => controller.abort();
    }
  }, [reload]);

  return { data, error, loading, refetch, sendRequest };
};

export default useAxios;
