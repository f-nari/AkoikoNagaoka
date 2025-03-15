'use server'

import { supabase } from "../../lib/supabase";

export type dataTypes = {
  title: string,
  id: string,
  address: string,
  created_data: string,
  image_url: string,
  tatami?: boolean,
  holiday?: string,
  toilet?: boolean,
  wash?: boolean
}

export const foodDataGetActions = async () => {
  const { data, error } = await supabase.from('fooddatas').select();
  const fooddatas: dataTypes[] = await data as dataTypes[]
  return fooddatas
}

export const foodDataGetActionsWithID = async (foodid: string) => {
  const { data, error } = await supabase.from('fooddatas').select().eq('id', foodid);
  return data
}

//foodデータベースにつながるアクションズを書く

export const foodDataAdd = async (FormData: FormData) => {
  try {
    //まず、ファイルをストレージにアップロード。
    console.log('これからimageの情報を取得します');
    console.log(FormData.get('image'));

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
    const {  } = await supabase.from('fooddatas').insert({
      title: FormData.get('title'),
      address: FormData.get('address'),
      created_date: today,
      tatami: FormData.get('tatami'),
      holiday: FormData.get('holiday'),
      image_url:imageUrl,
    })

  } catch (error) {
    console.log('エラーが出ました', error);

  }

}

export const parkDataAdd = async (FormData: FormData) => {
  const today = new Date()
  const { error } = await supabase.from('parkdatas').insert({
    title: FormData.get('title'),
    address: FormData.get('address'),
    created_date: today,
    toilet: FormData.get('toilet'),
    wash: FormData.get('wash')
  })




}
