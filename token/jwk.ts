import crypto from 'crypto'
import { isEmptyString } from '../util.ts'

// we use the private key pem to generate a public jwk
export async function generateJwks (pk: string, use: string, kid?: string) {
  const jwk = crypto.createPublicKey(pk)
    .export({ format: 'jwk' })

  if (!isEmptyString(use)) {
    jwk['use'] = use
  }

  if (kid && !isEmptyString(kid)) {
    jwk['kid'] = kid
  }

  return jwk
}