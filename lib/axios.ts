import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const instance = axios.create({
	withCredentials: false,
});

export const HTTP = {
	get: <ResponseType>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> =>
		instance.get(url, options),
	post: <ParamsType, ResponseType>(
		url: string,
		params?: ParamsType,
		options?: AxiosRequestConfig,
	): Promise<AxiosResponse<ResponseType>> => instance.post(url, params, options),
	delete: <ResponseType>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> =>
		instance.delete(url, options),
	put: <ParamsType, ResponseType>(
		url: string,
		params?: ParamsType,
		options?: AxiosRequestConfig,
	): Promise<AxiosResponse<ResponseType>> => instance.put(url, params, options),
};
