import { useEffect, useMemo, useState } from 'react'

export const usePagination = (data, volume = 6) => {
  const totalPages = useMemo(() => Math.floor(data.length / volume), [
    volume,
    data.length
  ])
  const [page, setPage] = useState(0)
  const [iterator, setIterator] = useState([])

  useEffect(() => {
    const array = Array.from(Array(totalPages).keys())
    array.shift()
    array.push(array.length + 1)
    setIterator(array)
  }, [data])

  const slicedData = useMemo(
    () => data.slice(page * volume, page * volume + volume),
    [volume, page, data]
  )

  return { data: slicedData, page, totalPages, setPage, iterator }
}
