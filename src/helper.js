export const GenerateRandomString = (len) => len > 4
  ? GenerateRandomString(len - 4).concat(Math.random().toString(36).substring(1, 5))
  : Math.random().toString(36).substring(1, len) // can generate upto 5 charrs
