export const zaf = ZAFClient.init()

export async function getContext() {
  const response = await zaf.context()
  return response
}

export async function getCurrentUser() {
  const response = await zaf.get('currentUser')
  return response
}
