export interface HttpResponse {
    statusCode: number,
    body,
}

export interface HttpRequest {
    query?,
    body?,
}