'use client'
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { dataTypes, foodDataGetActionsWithID } from "@/actions/dataGetActions"
import Detail from "@/components/detai/Detail"

const FoodDetailPage = () => {
    const router = usePathname() //これが遅い。useeffectの方が早い
    const foodId = router.split('/').pop() as string;
    const [fooddatas, setFooddatas] = useState<dataTypes[]>([])

    useEffect(() => {
        if (foodId) {
            const fetchdata = async () => {
                const data = await foodDataGetActionsWithID(foodId) as dataTypes[];
                setFooddatas(data)
            }
            fetchdata()
        } else {
            console.log(`{foodと一致するデータがありませんでした ${foodId}}`);
        }
    }, [foodId])

    return (
        <div className=" w-4/5 ">
            {fooddatas.map((data)=> {
                return <Detail key={data.id} data={data}></Detail>
            })}
        </div>
    )
}

export default FoodDetailPage
