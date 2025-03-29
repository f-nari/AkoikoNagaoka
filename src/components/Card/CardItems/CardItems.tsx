import { dataTypes } from '@/actions/dataGetActions'
import Image from 'next/image'
import Link from 'next/link'

const CardItems = ({ data }: { data: dataTypes }) => {
    return (
        <div className="bg-amber-50 w-56 h-60 rounded-2xl flex flex-col shadow-md p-3">
            {/* 画像エリア */}
            <div className="flex-grow">
                <Image
                    src={data.image_url}
                    width={224}
                    height={160}
                    className="rounded-2xl w-56 h-40 object-cover"
                    alt={data.title}
                />
            </div>

            {/* テキスト＆ボタンエリア */}
            <div className="flex justify-between items-center mt-3">
                <div className="w-24 text-center">
                    <div className="text-[15px] truncate font-bold">{data.title}</div>
                    <p className="text-[13px]">
                        座敷 <span className={data.tatami ? "text-orange-500 font-bold" : "text-gray-500"}>{data.tatami ? 'あり' : 'なし'}</span>
                    </p>
                </div>

                {/* 詳細ボタン */}
                <Link
                    href={`/food/${data.id}`}
                    className="text-sm px-2 py-2 font-bold bg-[#eb6100] hover:bg-[#f56500] text-white rounded-full transition duration-300"
                >
                    詳細へ
                </Link>
            </div>
        </div>

    )
}

export default CardItems