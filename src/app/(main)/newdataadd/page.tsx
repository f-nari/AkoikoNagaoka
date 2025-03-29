'use client'
import { useRef, useState } from "react"
import { foodDataAdd } from "@/actions/dataGetActions";

const NewDataAddpage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  //これは、formのselectの値によって、formの行く先が変わるのでその関数
  const newDataAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formdata = new FormData(e.currentTarget)
    const selectedType = formdata.get("type") as string; // ✅ formData から取得
    switch (selectedType) {
      case '飲食店':
        // console.log('飲食店の登録に移ります');
        await foodDataAdd(formdata)

        break;
      case '公園':
        break;
      case 'イベント':
        break;
    }

    formRef.current?.reset()
  }

  const [typeValue, setTypeValue] = useState<string>('飲食店')
  return (
    <div className="flex justify-center">
      <form onSubmit={newDataAdd} ref = {formRef}className="mt-5 p-6 border rounded-lg shadow-md w-full max-w-md bg-white">
        {/* 種類選択 */}
        <div className="mb-4">
          <label htmlFor="type" className="block font-semibold">種類</label>
          <select
            name="type"
            id="type"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTypeValue(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="飲食店">飲食店</option>
            <option value="公園">公園</option>
            <option value="イベント">イベント</option>
          </select>
        </div>

        {/* 共通の入力フィールド */}
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="title" className="font-semibold">タイトル名</label>
          <input type="text" name="title" id="title" className="border p-2 rounded w-full" />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="address" className="font-semibold">住所</label>
          <input type="text" name="address" id="address" className="border p-2 rounded w-full" />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="image" className="font-semibold">画像</label>
          <input type="file" name="image" id="image" className="border p-2 rounded w-full" />
        </div>

        {/* 飲食店向けの追加フィールド */}
        {typeValue === '飲食店' && (
          <>
            <div className="flex items-center gap-2 mb-4">
              <input type="checkbox" name="tatami" id="tatami" className="border" />
              <label htmlFor="tatami" className="font-semibold">座敷あり</label>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="holiday" className="font-semibold">定休日</label>
              <input type="text" name="holiday" id="holiday" className="border p-2 rounded w-full" />
            </div>
          </>
        )}

        {/* 公園向けの追加フィールド */}
        {typeValue === '公園' && (
          <>
            <div className="flex items-center gap-2 mb-4">
              <input type="checkbox" name="toilet" id="toilet" className="border" />
              <label htmlFor="toilet" className="font-semibold">トイレあり</label>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <input type="checkbox" name="wash" id="wash" className="border" />
              <label htmlFor="wash" className="font-semibold">手洗い場あり</label>
            </div>
          </>
        )}

        {/* 登録ボタン */}
        <button type="submit" className="cursor-pointer w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition">
          登録
        </button>
      </form>
    </div>

  )
}

export default NewDataAddpage

