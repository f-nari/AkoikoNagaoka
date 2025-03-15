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


//新規登録画面を作成する。
//新規登録画面作成後、その画面で公園と、イベントを登録する。それで一旦終了かな。

//新規登録画面を作成するときは、githubからブランチを切って行う