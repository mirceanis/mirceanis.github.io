/**
 * Convert an uncompressed secp256k1 public key (hex) to JWK format.
 *
 * Uncompressed key = 0x04 || x (32 bytes) || y (32 bytes) = 65 bytes total.
 * JWK needs x and y as base64url-encoded 32-byte big-endian unsigned integers.
 */

const publicKeyHex =
  "04460b35cdc4d2b9c9d36c48fda03e001b524afaef39cf66542338ee54f70f041bc76b71daba6c712e9cebb68429eebfca90390df4b8660786b6c272faa6e82085"

const toBase64url = (buf: Buffer): string =>
  buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")

const raw = Buffer.from(publicKeyHex, "hex")

if (raw.length !== 65 || raw[0] !== 0x04) {
  console.error("Expected 65-byte uncompressed key starting with 0x04")
  process.exit(1)
}

const x = toBase64url(raw.subarray(1, 33))
const y = toBase64url(raw.subarray(33, 65))

const jwk = { kty: "EC", crv: "secp256k1", x, y }

console.log(JSON.stringify(jwk, null, 2))
