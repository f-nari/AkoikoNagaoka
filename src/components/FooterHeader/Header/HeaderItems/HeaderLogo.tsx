import Image from "next/image"
// import {a,ko,i,na,ga,o,ka} from '../../../../picture/a.png'
//のちのち考える
import a from '../../../../picture/a.png'
import ko from '../../../../picture/ko.png'
import i from '../../../../picture/i.png'
import na from '../../../../picture/na.png'
import ga from '../../../../picture/ga.png'
import o from '../../../../picture/o.png'
import ka from '../../../../picture/ka.png'

const HeaderLogo = () => {
    return (
        <div>
            <div className='flex justify-center h-30'>
                <Image src={a} alt=""   className="w-auto h-auto object-cover"></Image>
                <Image src={ko} alt=""   className="w-auto h-auto object-cover"></Image>
                <Image src={i} alt=""   className="w-auto h-auto object-cover"></Image>
                <Image src={ko} alt=""   className="w-auto h-auto object-cover"></Image>
                <Image src={na} alt=""   className="w-auto h-auto object-cover"></Image>
                <Image src={ga} alt=""   className="w-auto h-auto object-cover"></Image>
                <Image src={o} alt=""   className="w-auto h-auto object-cover"></Image>
                <Image src={ka} alt=""   className="w-auto h-auto object-cover"></Image>
            </div>
        </div>
    )
}

export default HeaderLogo