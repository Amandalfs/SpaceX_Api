export interface HttpResponse {
    statusCode: number,
    body,
}

export interface HttpRequest {
    query?: {
        search?: string,
        limit?: number,
        result?: string | null,
    },
    body?: {
        page?: number
    },
}