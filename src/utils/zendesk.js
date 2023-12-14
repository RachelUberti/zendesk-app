//zendesk app framework
export const zaf = ZAFClient.init()

// don't need async becausee we're not responsible for the invokation of it / don't care about response  
export function calculateWindowHeight() {
  zaf.invoke('resize', { height: document.getElementById('customer-lookup').clientHeight })
}

// async function - you are calling something and you dont when it will respond. Will not continue until await is fulfilled. 
export async function getContext() {
  const response = await zaf.context()
  return response
}

export async function getCurrentUser() {
  const response = await zaf.get('currentUser')
  return response
}
