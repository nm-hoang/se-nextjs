import { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const useChangeMeta = (title) => {
  const context = useContext(GlobalContext)
  const { meta, setMeta } = context

  useEffect(() => {
    setMeta({ ...meta, title: `${title} | Hotel Booking`})
  }, [])

  return !!context
}

export default useChangeMeta