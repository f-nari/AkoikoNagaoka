import Image from 'next/image';
import testPicture from '../../picture/test.png'
import Card from '@/components/Card/Card';

export default async function Home() {

  return (
    <div className=''>
      <div className='flex justify-center '>
        <Image
          src={testPicture}
          width={500}
          height={500}
          alt="Picture of the author"
          className='mt-5 mb-5'
        />
      </div>
      <div className='flex justify-center '>
        <div className=' h-screen  '>
          <div className='mt-5 ml-3 mb-5'>
            おすすめ
          </div>
          <div>
            {/* <Card></Card> */}
          </div>
        </div>
      </div>

    </div>
  );
}

