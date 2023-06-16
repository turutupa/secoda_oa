export interface IResponse<T = any> {
  successful: boolean,
  data: T | undefined,
  errorMessage: string,
}
