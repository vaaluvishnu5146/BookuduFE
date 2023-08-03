import jwt_decode from "jwt-decode";

export function decodeToken(token = "") {
  let decoded;
  if (token) {
    decoded = jwt_decode(token);
  }
  return decoded;
}
