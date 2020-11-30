export interface DefaultResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T;
}
