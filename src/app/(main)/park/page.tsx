import { parkDataGetActions } from '@/actions/dataGetActions'
import Card from '@/components/Card/Card'
import React from 'react'

const parkPage = async() => {

  const datas = await parkDataGetActions()
  return (
    <div className='mt-3'>
      <Card datas={datas}></Card>
    </div>
  )
}

export default parkPage