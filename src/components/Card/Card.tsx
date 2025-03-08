import { dataTypes } from "@/actions/dataGetActions"
import CardItems from "./CardItems/CardItems"


const Card = ({datas}:{datas:dataTypes[]} ) => {
    
    return (
        <div className="grid grid-cols-5 gap-4">
            {datas.map((data)=>{
                return <CardItems data={data} key = {data.id}></CardItems>
            })}
            

        </div>
    )
}

export default Card