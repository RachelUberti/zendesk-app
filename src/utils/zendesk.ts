const zaf = ZAFClient.init()

export function calculateWindowHeight() {
  zaf.invoke('resize', { height: document.getElementById('customer-lookup')?.clientHeight })
}

export async function getContext() {
  const response = await zaf.context()
  return response
}

export async function getCurrentUser() {
  const response = await zaf.get('currentUser')
  return response
}

export async function getCrn() {
  // Potential TODO: Implement Zendesk Oauth/Authentication for backend calls to fetch token info
  // const options = { url: `http://localhost:8888/api/crn?crn=C-123456`, type: "GET", cors: true, headers: { Authorization: "Bearer 112312312312312321312", }};
  // zaf.request(options).then((response) => {  console.log(response);});
  const response = await zaf.get('ticket.customField:custom_field_24908186');
  return response['ticket.customField:custom_field_24908186']
}
