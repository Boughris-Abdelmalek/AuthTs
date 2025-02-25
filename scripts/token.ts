import { base64Encode } from '../util.ts'
import { signToken } from '../token/jwt.ts'
import { privateKey } from '../index.ts'

// Header
const joseHeader = {
  'alg': 'RS256',
  'typ': 'JWT'
}

// Payload
const josePayload: JWTPayload = {
  'sub': '1234567890',
  'name': 'John Doe',
  'aud': 'audience',
  'admin': true
}

function createToken (payload: JWTPayload, privateKey: string): string {
  const encodedHeader = base64Encode(JSON.stringify(joseHeader))
  const encodedPayload = base64Encode(JSON.stringify(payload))

  const dataToSign = `${encodedHeader}.${encodedPayload}`

  const signature = signToken(dataToSign, privateKey)

  return `${dataToSign}.${signature}`
}

const token = createToken(josePayload, privateKey)
Bun.write("./token.txt", token).catch(console.error)