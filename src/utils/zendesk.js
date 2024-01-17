//zendesk app framework
export const zaf = ZAFClient.init()

export function calculateWindowHeight() {
  zaf.invoke('resize', { height: document.getElementById('customer-lookup').clientHeight })
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
  const response = await zaf.get('ticket.customField:custom_field_24908186');
  return response['ticket.customField:custom_field_24908186']
}
