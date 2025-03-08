import { dataTypes } from "@/actions/dataGetActions"
import Image from "next/image"

const Detail = ({ data }: { data: dataTypes }) => {
        return (
            <div>
                <div className=" flex h-screen">
                    <div className="flex-3/5">
                        {/* 画像を固定の高さにして、縦横比に関係なく見切れないように調整 */}
                        <div className="mt-20 bg-gray-100">
                            <div className="relative w-full h-[600px]"> {/* 高さを固定 */}
                                <Image
                                    src={data.image_url}
                                    layout="fill"
                                    objectFit="cover" // 画像が親要素を完全に覆うように調整
                                    objectPosition="center" // 画像の中央を表示
                                    className="rounded-2xl"
                                    alt="Image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 ml-5 flex-2/5 flex-col">
                        <div className="font-bold text-5xl">{data.title}</div>
                        <div>
                            <div className="grid grid-cols-[20%_80%] border border-gray-400 mt-8">
                                <div className="border border-gray-400 px-4 py-2 bg-gray-200">住所</div>
                                <div className="border border-gray-400 px-4 py-2">{data.address}</div>
                                <div className="border border-gray-400 px-4 py-2 bg-gray-200">定休日</div>
                                <div className="border border-gray-400 px-4 py-2">{data.holiday}</div>
                                <div className="border border-gray-400 px-4 py-2 bg-gray-200">座敷</div>
                                <div className="border border-gray-400 px-4 py-2">{data.tatami ? "あり" : "なし"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
export default Detail