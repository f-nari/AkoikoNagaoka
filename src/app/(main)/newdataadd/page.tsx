'use client'

import { supabase } from "../../../../lib/supabase"
import { useState } from "react"
import { foodDataAdd } from "@/actions/dataGetActions";

const NewDataAddpage = () => {
  //これは、formのselectの値によって、formの行く先が変わるのでその関数
  const newDataAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formdata = new FormData(e.currentTarget)    
    const selectedType = formdata.get("type") as string; // ✅ formData から取得
    switch (selectedType) {
      case '飲食店':
        console.log('飲食店の登録に移ります');
        await foodDataAdd(formdata)
        break;
      case '公園':
        break;

      case 'イベント':
        break;
    }
  }

  

  const [typeValue, setTypeValue] = useState<string>('飲食店')
  return (
    <div>
      <form onSubmit={newDataAdd} className="mt-5">
        <div>
          <select name="type" id="type" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTypeValue(e.target.value)}>種類
            <option value="飲食店">飲食店</option>
            <option value="公園">公園</option>
            <option value="イベント">イベント</option>
          </select>
        </div>
        <div className="flex-col flex gap-2">
          <label htmlFor="title">タイトル名</label>
          <input type="text" name="title" id="title" className="border" />
        </div>
        <div className="flex-col flex gap-2">
          <label htmlFor="address">住所</label>
          <input type="text" name="address" id="address" className="border" />
        </div>
        <div className="flex-col flex gap-2">
          <label htmlFor="image">画像</label>
          <input type="file" name="image" id="image" className="border" />
        </div>
        {/* typevalueの値により、出現するinputを制御する */}
        {typeValue === '飲食店' && (
          <>
            <div className="flex-col flex gap-2">
              <label htmlFor="tatami">座敷</label>
              <input type="checkbox" name="tatami" id="" className="border" />
            </div>
            <div className="flex-col flex gap-2">
              <label htmlFor="holiday">定休日</label>
              <input type="text" name="holiday" id="holiday" className="border" />
            </div>
          </>
        )}
        {typeValue === '公園' && (
          <>
            <div className="flex-col flex gap-2">
              <label htmlFor="toilet">トイレ</label>
              <input type="checkbox" name="toilet" id="" className="border" />
            </div>
            <div className="flex-col flex gap-2">
              <label htmlFor="wash">手洗い場</label>
              <input type="checkbox" name="wash" id="wash" className="border" />
            </div>
          </>
        )}
        <button type='submit' className="border mt-5" >登録</button>
      </form>
    </div>
  )
}

export default NewDataAddpage

