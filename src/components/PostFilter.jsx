import React from 'react'
import MyInput from '../UI/input/MyInput'
import MySelect from '../UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
     <MyInput
        style={{width: '30%'}}
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
        placeholder="Поиск..."
      />
      <MySelect
        defaultValue={"Сортировка"}
        options={[
          { value: "title", name: "По заголовку" },
          { value: "body", name: "По описанию" },
        ]}
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
      />
    </div>
  )
}

export default PostFilter