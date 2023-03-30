export const sendEmail = (name: string, email: string, organization: string, country: string, message: string, type: string) => {
  fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify({ name, email, organization, country, message, type }),
    headers: {
      'content-type': 'application/json'
    }
  });
}