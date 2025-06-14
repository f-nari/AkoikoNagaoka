// server側で実装したい名残。結局クライアント側で実装することにした。
//これを使うときは、ページ名をroute.tsに変えること
// import { supabase } from '@/utils/supabase/client'
import { NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions
// import { supabase } from '../../../utils/supabase/middleware'
import { createClient } from "@/utils/supabase/server";
export async function GET(request: Request) {
  const supabase = await createClient()
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
      const isLocalEnv = process.env.NODE_ENV === 'development'
      if (isLocalEnv) {
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        return NextResponse.redirect(`${origin}${next}`)
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`)
      } else {
        return NextResponse.redirect(`${origin}${next}`)
      }
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}