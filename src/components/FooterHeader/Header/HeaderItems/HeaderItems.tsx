"use client"
import type { HeaderItemsType } from "../Header";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Logout } from "@/actions/Logout";

type HeaderItemsProps = {
    headeritems: HeaderItemsType[];
    user_name: string;
};

const HeaderItems = ({ headeritems, user_name }: HeaderItemsProps) => {
    const pathname = usePathname()
    // const Logout = async () => {
    //     try {
    //         console.log('ログアウトボタンが押されました');
    //         const supabase = await createClient()
    //         const { error } = await supabase.auth.signOut()
    //         console.log('ログアウト完了');

    //     } catch (error) {
    //         console.log('errorです',error);
            
    //     }

    // }


    return (
        <div>
            <div className='border-b border-gray-300 flex justify-center '>
                <div className='flex justify-around w-full  mt-5  '>
                    <div>
                        {headeritems.map((item) => {
                            return <Link key={item.url} href={item.url} className={`pt-2 px-4 w-30 mr-5 rounded-t-sm text-center hover:bg-gray-100  ${pathname === item.url ? "bg-gray-200 border-b-4 border-b-green-500" : ''}`}>
                                {item.displayname}
                            </Link>
                        })}
                    </div>
                    <div>{user_name}さん　こんにちは</div>
                    <form action={Logout}>
                        <button type="submit" className="hover:bg-gray-100 cursor-pointer">ログアウト</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default HeaderItems