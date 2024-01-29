import axios from "axios"
import { Company } from "../types/company";

export async function fetchCustomerByCrn(crn: string): Promise<Company> {
  const res = await axios.get(`http://localhost:8888/api/crn?crn=${crn}`)
  return res.data
}

export async function fetchCustomersBySearch(searchTerm: string): Promise<Company[]> {
  const res = await axios.get(`http://localhost:8888/api/customer-list?searchTerm=${searchTerm}`);
  return res.data
}
