'use server'

import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/client";

export type dataTypes = {
  title: string,
  id: string,
  address: string,
  created_data: string,
  image_url: string,
  tatami?: boolean,
  holiday?: string,
  toilet?: boolean,
  wash?: boolean,
  url?:string
}

const supabase  = createClient()

export const foodDataGetActions = async () => {
  const { data, error } = await supabase.from('fooddatas').select();
  const fooddata: dataTypes[] = await data as dataTypes[]
  const fooddatas = fooddata.map((data) => ({...data,url:'food'}))
  return fooddatas
}

export const parkDataGetActions = async () => {
  const { data, error } = await supabase.from('parkdatas').select();
  const parkdata: dataTypes[] = await data as dataTypes[]
  const parkdatas = parkdata.map((data) => ({...data,url:'park'}))
  return parkdatas
}

export const eventDataGetActions = async () => {
  const { data, error } = await supabase.from('eventdatas').select();
  const eventdata: dataTypes[] = await data as dataTypes[]
  const eventdatas = eventdata.map((data) => ({...data,url:'event'}))
  return eventdatas
}

//詳細画面で店の情報を見るときの関数
export const foodDataGetActionsWithID = async (foodid: string) => {
  const { data, error } = await supabase.from('fooddatas').select().eq('id', foodid);
  return data
}

//詳細画面で公園の情報を見るときの関数
export const parkDataGetActionsWithID = async (parkid: string) => {
  const { data, error } = await supabase.from('parkdatas').select().eq('id', parkid);
  return data
}

//詳細画面でイベントの情報を見るときの関数
export const eventDataGetActionsWithID = async (eventid: string) => {
  const { data, error } = await supabase.from('eventdatas').select().eq('id', eventid);
  return data
}



//foodデータベースにつながるアクションズを書く
export const foodDataAdd = async (FormData: FormData) => {
  try {
    //まず、ファイルをストレージにアップロード。
    const file = await FormData.get('image')
    if (!(file instanceof File)) {
      console.error("⚠️ 画像ファイルが取得できませんでした");
      return;
    }

    console.log("📂 取得したファイル:", file);
    const filePath = file.name
    const { error } = await supabase.storage
      .from('foodImages')
      .upload(filePath, file)

    if (error) {
      console.error("❌ 画像アップロード失敗:", error.message);
      return;
    }
    console.log("✅ 画像アップロード成功:");

    const { data } = supabase.storage.from('foodImages').getPublicUrl(filePath)
    const imageUrl = data.publicUrl
    console.log(imageUrl);

    const today = new Date()
    const { } = await supabase.from('fooddatas').insert({
      title: FormData.get('title'),
      address: FormData.get('address'),
      created_date: today,
      tatami: FormData.get('tatami'),
      holiday: FormData.get('holiday'),
      image_url: imageUrl,
    })

  } catch (error) {
    console.log('エラーが出ました', error);

  }

}

export const parkDataAdd = async (FormData: FormData) => {
  try {
    //まず、ファイルをストレージにアップロード。
    const file = await FormData.get('image')
    if (!(file instanceof File)) {
      console.error("⚠️ 画像ファイルが取得できませんでした");
      return;
    }

    console.log("📂 取得したファイル:", file);
    const filePath = file.name
    const { error } = await supabase.storage
      .from('parkimages')
      .upload(filePath, file)

    if (error) {
      console.error("❌ 画像アップロード失敗:", error.message);
      return;
    }
    console.log("✅ 画像アップロード成功:");

    const { data } = supabase.storage.from('parkimages').getPublicUrl(filePath)
    const imageUrl = data.publicUrl
    console.log(imageUrl);

    const today = new Date()
    const { } = await supabase.from('parkdatas').insert({
      title: FormData.get('title'),
      address: FormData.get('address'),
      created_date: today,
      toilet: FormData.get('toilet'),
      wash: FormData.get('wash'),
      image_url: imageUrl,
    })

  } catch (error) {
    console.log('エラーが出ました', error);

  }

}

export const eventDataAdd = async (FormData: FormData) => {
  try {
    //まず、ファイルをストレージにアップロード。
    const file = await FormData.get('image')
    if (!(file instanceof File)) {
      console.error("⚠️ 画像ファイルが取得できませんでした");
      return;
    }

    console.log("📂 取得したファイル:", file);
    const filePath = file.name
    const { error } = await supabase.storage
      .from('eventimages')
      .upload(filePath, file)

    if (error) {
      console.error("❌ 画像アップロード失敗:", error.message);
      return;
    }
    console.log("✅ 画像アップロード成功:");

    const { data } = supabase.storage.from('eventimages').getPublicUrl(filePath)
    const imageUrl = data.publicUrl
    console.log(imageUrl);

    const today = new Date()
    const { } = await supabase.from('eventdatas').insert({
      title: FormData.get('title'),
      address: FormData.get('address'),
      created_date: today,
      image_url: imageUrl,
    })

  } catch (error) {
    console.log('エラーが出ました', error);

  }

}