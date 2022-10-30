import { useMemo } from "react"

export const usePagination = (totalPages) => {
 const result = []
 useMemo(() => {
  for(let i = 0; i < totalPages; i++) {
   result.push(i + 1)
  }
 }, [totalPages, result])
 return result
}