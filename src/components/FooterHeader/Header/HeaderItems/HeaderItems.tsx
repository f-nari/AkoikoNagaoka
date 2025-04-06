"use client"

import { User } from "@supabase/supabase-js";
import type { HeaderItemsType } from "../Header";
import { usePathname } from "next/navigation";

type HeaderItemsProps = {
    headeritems: HeaderItemsType[];
    user_name: string;
  };

const HeaderItems = ({ headeritems, user_name }: HeaderItemsProps) => {
    const pathname = usePathname()
    console.log('usernameです');
    console.log(user_name);
    

    return (
        <div>
            <div className='border-b border-gray-300 flex justify-center '>
                <div>{user_name}</div>
                <div className='flex justify-center w-4/5 mt-5  '>
                    {headeritems.map((item) => {
                        return <a className={`pt-1 w-20 mr-2 rounded-t-sm text-center hover:bg-gray-100 ${pathname === item.url ? "bg-gray-200 border-b-4 border-b-green-500" : ''}`} key={item.url} href={item.url}>
                            {item.displayname}
                        </a>
                    })}
                </div>
            </div>
        </div>
    )
}

export default HeaderItems