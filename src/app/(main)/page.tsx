import Card from '@/components/Card/Card'
import React from 'react'
import { foodDataGetActions } from '@/actions/dataGetActions'


const foodPage = async () => {
  const datas = await foodDataGetActions()
  return (
    <div className='mt-3'>
        <Card datas={datas}></Card>
    </div>
  )
}

export default foodPage

