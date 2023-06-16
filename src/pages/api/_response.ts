import { IResponse } from "../../../models/response";

// All api responses should return either success or failed 
// for consistency

export function success<T = any>(data: T): IResponse<T> {
  return response<T>(true, data, "")
}

export function failed<T = any>(errorMessage: string): IResponse<T> {
  return response<T>(false, undefined, errorMessage)
}

function response<T = any>(successful: boolean, data: T | undefined, errorMessage: string): IResponse<T> {
  return {
    successful,
    data,
    errorMessage,
  }
}
