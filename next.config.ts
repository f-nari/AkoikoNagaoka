import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
//画像を参照するときに少しいじった。ここからーーーーーーーーーーーーーーーー
  images: {
    domains: ['eocnddzzyxsfrtfbhohb.supabase.co'], 
  }
  //ーーーーーーーーーーーーーここを追加
};

export default nextConfig;
