'use client'
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { dataTypes, parkDataGetActionsWithID } from "@/actions/dataGetActions"
import Detail from "@/components/detai/Detail"

const ParkDetailPage = () => {
    //のちのち関数化できるかも。この一連の流れ
    const router = usePathname() 
    const parkId = router.split('/').pop() as string;
    const [parkdatas, setParkdatas] = useState<dataTypes[]>([])

    useEffect(() => {
        if (parkId) {
            const fetchdata = async () => {
                const data = await parkDataGetActionsWithID(parkId) as dataTypes[];
                setParkdatas(data)
            }
            fetchdata()
        } else {
            console.log(`{foodと一致するデータがありませんでした ${parkId}}`);
        }
    }, [parkId])

    console.log('これがデータ取得したID',parkdatas);

    return (
        <div className=" w-4/5 ">
            {parkdatas.map((data)=> {
                return <Detail key={data.id} data={data}></Detail>
            })}
        </div>
    )
}

export default ParkDetailPage
