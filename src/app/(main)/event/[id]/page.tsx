'use client'
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { dataTypes, eventDataGetActionsWithID, } from "@/actions/dataGetActions"
import Detail from "@/components/detai/Detail"

const EventDetailPage = () => {
    //のちのち関数化できるかも。この一連の流れ
    const router = usePathname() 
    const eventId = router.split('/').pop() as string;
    const [parkdatas, setParkdatas] = useState<dataTypes[]>([])

    useEffect(() => {
        if (eventId) {
            const fetchdata = async () => {
                const data = await eventDataGetActionsWithID(eventId) as dataTypes[];
                setParkdatas(data)
            }
            fetchdata()
        } else {
            console.log(`{foodと一致するデータがありませんでした ${eventId}}`);
        }
    }, [eventId])

    return (
        <div className=" w-4/5 ">
            {parkdatas.map((data)=> {
                return <Detail key={data.id} data={data}></Detail>
            })}
        </div>
    )
}

export default EventDetailPage