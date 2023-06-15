export interface ResponseDataType<T> {
	status: 'success' | 'fail';
	message: string | null;
	resultData: T;
}
