'use server'

import { supabase } from "../../lib/supabase";

export type dataTypes = {
    title: string,
    id: string,
    address: string,
    created_data: string,
    image_url:string,
    tatami?: boolean,
    holiday?: string,
    toilet?: boolean,
    wash?: boolean
  }

export const foodDataGetActions = async() => {
    const { data, error } = await supabase.from('fooddatas').select();
    const fooddatas: dataTypes[] = await data as dataTypes[]
    return fooddatas
}

export const foodDataGetActionsWithID = async(foodid:string) => {
  const { data, error } = await supabase.from('fooddatas').select().eq('id',foodid);
  return data

}