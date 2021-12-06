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

export const postSalsa = async (body) => {
  const res = await axios.post(BASE_URL, { fields: body }, config)
  return res.data
}

export const deleteSalsa = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}}`, config)
  return res.data
}