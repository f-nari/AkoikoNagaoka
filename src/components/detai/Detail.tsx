import { dataTypes } from "@/actions/dataGetActions"
import Image from "next/image"

const Detail = ({ data }: { data: dataTypes }) => {
    // console.log('これがデータ詳細ページに渡されているdataです',data);
    
    return (
        <div className="flex h-screen p-5 gap-5">
            {/* 画像エリア */}
            <div className="flex-[60%]">
                <div className="bg-gray-100 rounded-2xl overflow-hidden">
                    <div className="relative w-full h-[600px]">
                        <Image
                            src={data.image_url}
                            layout="fill"
                            objectFit="contain" // 縦横比を保持して画像を収める
                            className="rounded-2xl"
                            alt={data.title}
                        />
                    </div>
                </div>
            </div>

            {/* 詳細情報エリア */}
            <div className="flex-[40%] flex flex-col">
                {/* タイトル */}
                <h1 className="font-bold text-4xl text-center mb-6">{data.title}</h1>

                {/* 詳細情報テーブル */}
                <div className="grid grid-cols-2 border border-gray-300 rounded-lg overflow-hidden">
                    <div className="bg-gray-200 px-4 py-3 font-semibold border-r border-b border-gray-300">住所</div>
                    <div className="px-4 py-3 border-b border-gray-300">{data.address}</div>

                    {data.url === 'food' && (<>
                        <div className="bg-gray-200 px-4 py-3 font-semibold border-r border-b border-gray-300">定休日</div>
                        <div className="px-4 py-3 border-b border-gray-300">{data.holiday || "なし"}</div>

                        <div className="bg-gray-200 px-4 py-3 font-semibold border-r border-gray-300">座敷</div>
                        <div className="px-4 py-3">{data.tatami ? "あり" : "なし"}</div>
                    </>)}

                    {data.url === 'park' &&(<>
                    <div className="bg-gray-200 px-4 py-3 font-semibold border-r border-b border-gray-300">手洗い場</div>
                    <div className="px-4 py-3 border-b border-gray-300">{data.wash || "なし"}</div>

                    <div className="bg-gray-200 px-4 py-3 font-semibold border-r border-gray-300">トイレ</div>
                    <div className="px-4 py-3">{data.toilet ? "あり" : "なし"}</div>
                    </>)}
                </div>
            </div>
        </div>

    );
};

export default Detail