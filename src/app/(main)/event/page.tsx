import { eventDataGetActions } from '@/actions/dataGetActions'
import Card from '@/components/Card/Card'
import React from 'react'

const EventPage = async() => {

  const datas = await eventDataGetActions()
  return (
    <div className='mt-3'>
      <Card datas={datas}></Card>
    </div>
  )
}

export default EventPage