import React from 'react'
import { usePagination } from '../hooks/usePagination';
import MyButton from '../UI/button/MyButton'
import Pagination from '../UI/pagination/Pagination'

const PostPagination = ({totalPages, page, changePage}) => {
 let pagesArray = usePagination(totalPages);

  return (
   <Pagination>
   {pagesArray.map((p) => (
     <MyButton pagination current={page === p} key={p} onClick={() => changePage(p)}>{p}</MyButton>
   ))}
 </Pagination>
  )
}

export default PostPagination