/** @format */

import useChangeMeta from 'components/common/hooks/useChangeMeta'
import MainLayout from 'components/MainLayout'
import ListSearch from 'components/searchResult'

const listsearch = () => {
  // useChangeMeta('Hotel')
  const content = (
    <div>
      <ListSearch />
    </div>
  )

  return (
    <div>
      {/* <MainLayout content={content} /> */}
      {content}
    </div>
  )
}

export default listsearch
