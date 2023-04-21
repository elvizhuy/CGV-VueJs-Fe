import axios from 'axios'
const baseDomain = "http://localhost:3456"
const baseUrl = `${baseDomain}/api/v1`

export default axios.create({
    baseUrl
})
