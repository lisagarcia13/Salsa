import axios from 'axios'

export const BASE_URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/salsa`

export const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
    }
}

export const getSalsa = async () => {
  const res = await axios.get(BASE_URL, config)
  return res.data.records
}