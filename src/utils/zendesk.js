//zendesk app framework
export const zaf = ZAFClient.init()

// async function - you are calling something and you dont when it will respond. Will not continue until await is fulfilled. 
export async function getContext() {
  const response = await zaf.context()
  return response
}

export async function getCurrentUser() {
  const response = await zaf.get('currentUser')
  return response
}
