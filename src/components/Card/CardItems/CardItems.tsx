import { dataTypes } from '@/actions/dataGetActions'
import Image from 'next/image'
import Link from 'next/link'

const CardItems = ({ data }: { data: dataTypes }) => {
    return (
        <div>
            <div className="bg-amber-50 w-56 h-60 rounded-2xl">
                <div className="pt-3">
                    <Image
                        src={data.image_url}
                        width={224} // w-56 (14rem = 224px)
                        height={160} // h-60 (15rem = 240px) の80%程度にする
                        className="rounded-2xl w-56 h-40 object-cover"
                        alt=""
                    />
                </div>
                <div className="flex justify-around mt-6 ">
                    <div className="">
                        {data.title}
                    </div>
                    <div>
                        <Link href={`/food/${data.id}`} className="text-sm px-2 py-2 font-bold bg-[#eb6100]  hover:bg-[#f56500] text-white rounded-[100vh]">詳細へ</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItems