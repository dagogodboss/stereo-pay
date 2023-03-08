export interface ExceptionResponse {
  readonly status: string;
  readonly statusCode: number;

  readonly error: string;

  readonly message: unknown;

  readonly messages: unknown[];
}
