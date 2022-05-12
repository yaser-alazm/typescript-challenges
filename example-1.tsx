import React from 'react'

interface TableProps<TItem> {
  items: TItem[]
  renderItem: (item: TItem) => React.ReactNode
}

export const Table = <TItem,>(props: TableProps<TItem>) => {
  return null
}

export const Component = () => {
  return (
    <>
      <Table
        items={[{id: '1', name: 'Yaser'}]}
        renderItem={(item) => {
          return null
        }}
      ></Table>
      <Table
        items={[{id: '1', username: 'Yaser'}]}
        renderItem={(item) => {
          return null
        }}
      ></Table>
    </>
  )
}
