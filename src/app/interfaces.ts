export interface Card {
  id: number,
  title?: string,
  price?: number,
  image?: string,
  images?: string[],
  description?: string
}

export interface DeleteResponse {
  id: number,
  deleted: boolean
}
