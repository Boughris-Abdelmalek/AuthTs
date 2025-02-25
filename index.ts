import { base64Encode } from './util.ts'
import { signToken } from './token/jwt.ts'
import { generateJwks } from './token/jwk.ts'

const incomingToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYXVkIjoiYXVkaWVuY2UiLCJhZG1pbiI6dHJ1ZX0.J5Pc-gsaJ7YfIX96vimIatH7sZLqL80c1WfvAFcrJdLE9QJUJOMGibt9vNdhtOopmgSydUpXNzu_bph-jLh50I6vehzlc7W3LJSk9PKQGlz3fMHeQiAIbmysHPYJhJtZtyFA9xtOUu9ZwKvMtDwe91ee6gZyBpuonqDmvez9pwNMlRxs_DlCX88g12rmKAKQ4SlVnpRPeGXZWspScqHTKt5-Tad6PwunEWbRBKuKXF1OZllI99n_GflJu3Lpl7PL7d1P9pOUayayzrRItL-iXrOaSYL1WrGSbQDg8_o0V9icu8Wf2qUFlRwd4hYUtX09pDi948Yzvb1s-lBJy83fhQ`





// Secret (private key)
export const privateKey = await Bun.file('./keys/rsa-key.pem').text()
const publicKey = await Bun.file('./keys/rsa.pem').text()

// const token = createToken(josePayload, privateKey)
// console.log('token: ', token)
