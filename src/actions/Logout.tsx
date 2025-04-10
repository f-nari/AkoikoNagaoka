'use server'
import { createClient } from "@/utils/supabase/server";
// import { redirect } from "next/navigation";

export const Logout = async () => {
    console.log('サインアウトします');
    
    const supabase = await createClient()
    const { error } = await supabase.auth.signOut()

    console.log('サインアウトされました');
    

};