interface ResponseError {
	statusCode: number,
    message: string
}

interface GenericResponse<T>{
    data?: T,
    error?: ResponseError
}
export type{
    ResponseError,
    GenericResponse
}