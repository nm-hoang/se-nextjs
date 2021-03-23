/** @format */

import axios from 'utils/services/axios'
const prefix = 'search'

class SearchEngine {
  Search = ({ query }) => {
    console.log(query)
    return axios.request({
      method: 'GET',
      url: `${prefix}?query=${query.query}&page=${
        query.page ? query.page : 1
      }&limit=${query.limit ? query.limit : 10}`,
    })
  }
}

export default SearchEngine
