import { safeParseJson } from '../util.ts'

export function secureInputFromJws(token: string): string {
  return token.split(".", 2).join(".")
}

export function signatureFromJws(token: string): string {
  return token.split(".")[2]
}

function payloadFromJws(token: string): string {
  const payload = token.split(".")[1]
  return Buffer.from(payload, "base64url").toString("utf8")
}

function headerFromJws(token: string): string {
  const header = token.split(".")[0]
  return Buffer.from(header, "base64url").toString("utf8")
}

export function jwsDecode(token: string): JWTDecoded | undefined {
  const header = safeParseJson(headerFromJws(token))
  if (!header) return

  const payload = safeParseJson(payloadFromJws(token))
  if (!payload) return

  return {
    header: header,
    payload: payload,
    signature: signatureFromJws(token)
  }
}