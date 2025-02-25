import crypto, { type VerifyJsonWebKeyInput } from 'crypto'
import { secureInputFromJws, signatureFromJws } from './jws.ts'

const ALG = 'RSA-SHA256'

export function signToken (payload: string, privateKey: string): string {
  const buff = Buffer.from(payload)

  const signer = crypto.createSign(ALG)
  signer.update(buff)

  return signer.sign(privateKey, 'base64url')
}

export function verifyToken (token: string, publicKey: VerifyJsonWebKeyInput): boolean {
  const signature = signatureFromJws(token)
  const input = secureInputFromJws(token)

  const verifier = crypto.createVerify(ALG)
  verifier.update(input)

  return verifier.verify(publicKey, signature, "base64url")
}