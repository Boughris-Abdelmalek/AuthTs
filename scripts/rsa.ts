import { generateKeyPairSync } from 'crypto'

async function generatePrivateKeyStub () {
  const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
    }
  })

  await Bun.write('./keys/rsa-key.pem', privateKey)
  await Bun.write('./keys/rsa.pem', publicKey)
}

generatePrivateKeyStub().catch(e => console.error(e))