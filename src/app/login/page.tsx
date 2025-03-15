'use client'
import { supabase } from "../../../lib/supabase"

const LoginPage = () => {
    const LoginChack = () => {
        supabase.auth.signInWithOAuth({
            provider: 'google',
        })
    }


    return (
        <div>
            <div>ログインページの作成
                ログイン機能を作成しようかと思ったけど、まずは、googleのプラットフォームで登録が必要みたいなので、登録して、supabaseにつなぎます
            </div>
            <button onClick={() => LoginChack()} >googleでログイン</button>
        </div>

    )
}

export default LoginPage