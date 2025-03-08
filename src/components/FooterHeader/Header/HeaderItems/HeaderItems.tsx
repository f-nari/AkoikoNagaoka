"use client"

import Link from "next/link"
import type { HeaderItemsType } from "../Header";
import { usePathname } from "next/navigation";

const HeaderItems = ({ headeritems }: { headeritems: HeaderItemsType[] }) => {
    const pathname = usePathname()
    
    return (
        <div>
            <div className='border-b border-gray-300 flex justify-center '>
                <div className='flex justify-center w-4/5 mt-5  '>
                    {headeritems.map((item) => {
                        return <div className={`pt-1 w-20 mr-2 rounded-t-sm text-center hover:bg-gray-100 ${pathname === item.url ? "bg-gray-200 border-b-4 border-b-green-500" : ''}`}key={item.url}> <Link href={item.url}  >{item.displayname}</Link></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default HeaderItems