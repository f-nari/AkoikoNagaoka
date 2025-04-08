"use client"

import { useEffect, useState } from "react";
import type { HeaderItemsType } from "../Header";
import Link from "next/link";

type HeaderItemsProps = {
    headeritems: HeaderItemsType[];
    user_name: string;
};

const HeaderItems = ({ headeritems, user_name }: HeaderItemsProps) => {
    // const pathname = usePathname()

    const [mountedPath, setMountedPath] = useState<string | null>(null)

    useEffect(() => {
        setMountedPath(window.location.pathname)
    }, [])

    return (
        <div>
            <div className='border-b border-gray-300 flex justify-center '>
                <div className='flex justify-around w-full  mt-5  '>
                    <div>
                        {/* {headeritems.map((item) => {
                        return <a className={`pt-2 px-4  w-30 mr-5 rounded-t-sm text-center hover:bg-gray-100 ${pathname === item.url ? "bg-gray-200 border-b-4 border-b-green-500" : ''}`} key={item.url} href={item.url}>
                            {item.displayname}
                        </a>
                    })} */}
                        {mountedPath &&
                            headeritems.map((item) => {
                                const isActive = mountedPath === item.url;
                                return (
                                    <Link key={item.url} href={item.url} className={`pt-2 px-4 w-30 mr-5 rounded-t-sm text-center hover:bg-gray-100 ${isActive ? "bg-gray-200 border-b-4 border-b-green-500" : ""}`}>
                                      {item.displayname}
                                  </Link>
                                );
                            })}
                    </div>
                    <div>{user_name}さん　こんにちは</div>
                </div>

            </div>
        </div>
    )
}

export default HeaderItems