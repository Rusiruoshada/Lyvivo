const decodeJWT = (token:string)=> {
  if (token ===  null || '') {
    return 'invalid'
  }
  
  // Split the JWT into its 3 parts
  const parts = token?.split('.');

  if (parts.length !== 3) {
    throw new Error('Invalid JWT');
  }

  // Base64URL decode the payload (the second part)
  const payload = parts[1];

  // Add padding for base64 decoding if necessary
  const padding = '='.repeat((4 - (payload?.length % 4)) % 4);
  const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
  const decoded = JSON.parse(atob(base64 + padding));

  return decoded;
}

export default decodeJWT
