import { privateKey } from '../index.ts'
import { generateJwks } from '../token/jwk.ts'

async function writeJwk () {
  const jwk = await generateJwks(privateKey, 'sig')

  return Bun.write('./jwk.json', JSON.stringify(jwk))
}

writeJwk().catch(console.error)