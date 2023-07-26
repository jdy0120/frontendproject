import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const baseURL = import.meta.env.VITE_API_URL;

// API 응답에 대한 인터페이스를 정의합니다.
interface ApiResponse {
  board: number[][];
}

// 기본 axios 인스턴스를 생성합니다.
const apiClient = axios.create({
  baseURL: "https://sugoku.onrender.com",
});

// API 요청 함수를 정의합니다.
export const getAxios = async (
  mode: string
): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await apiClient.get(
      `board?difficulty=${mode}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postAxios = async (
  body: AxiosRequestConfig
): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await apiClient.post(
      `${baseURL}/`,
      body
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
