import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const _buildHeaders = async() => ({
  "X-Api-Key": await cookies.get('ss_api_key'),
  "X-Api-Customer-Token": await cookies.get('ss_customer_token'),
  "X-Api-Access-Token": await cookies.get('ss_access_token')
})