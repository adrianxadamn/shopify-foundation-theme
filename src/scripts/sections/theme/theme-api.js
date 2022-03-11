import Cookies from 'universal-cookie'
import axios from 'axios'
import https from 'https'
import { _buildHeaders } from '@scripts/utils'

const cookies = new Cookies()
const agent = new https.Agent({ rejectUnauthorized: false })

const cookieOptions = {
  path: '/'
}

window.addEventListener('DOMContentLoaded', async(event) => {
  await cookies.set('ss_api_url', window.Scoutside.api.base_url, cookieOptions)
  await cookies.set('ss_api_key', window.Scoutside.api.api_key, cookieOptions)
  await cookies.set('ss_customer_token', window.Scoutside.api.customer_token, cookieOptions)
  const baseUrl = window.Scoutside.api.base_url
  const headers = await _buildHeaders()
  const customer = await window.btoa(window.Scoutside.customer.shopify_id)
  const tokenData = await axios.get(`${baseUrl}/customer/token`, { 
    headers, params: { customer }, customerhttpsAgent: agent
  })
  const { token, error } = tokenData.data
  if(token) {
    await cookies.set('ss_access_token', token, cookieOptions)
  }
})