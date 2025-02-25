type JWTPayload = {
  [key: string]: string | boolean
}

type JWTDecoded = {
  header: JWTPayload,
  payload: JWTPayload,
  signature: string
}