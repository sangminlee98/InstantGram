"use client";

import axios, { AxiosError } from "axios";
import { SWRConfig } from "swr";

type SWRConfigContextProps = {
  children: React.ReactNode;
};

export default function SWRConfigContext({ children }: SWRConfigContextProps) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
}

const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    const error = err as AxiosError;
    console.error(error);
    return Promise.reject(error);
  }
};
