export function base64Encode (buff: string | Buffer): string {
  return Buffer.from(buff)
    .toString('base64')
    .replace(/=+$/, '') // remove padding
    .replace(/\+/g, '-') // replace '+' with '-'
    .replace(/\//g, '_') // replace '/' with '_'
}

export function safeParseJson(buff: string): JWTPayload | undefined {
  try {
    return JSON.parse(buff)
  } catch (e) {
    return undefined
  }
}

export function isEmptyString(str: string): boolean {
  return !(str.trim().length > 0)
}