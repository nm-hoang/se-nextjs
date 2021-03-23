/** @format */

import SearchResult from 'components/searchResult'
import MainLayout from 'components/MainLayout'

const Search = (props) => {
  const content = <SearchResult />

  return (
    <>
      <MainLayout content={content} />
    </>
  )
}

export default Search
