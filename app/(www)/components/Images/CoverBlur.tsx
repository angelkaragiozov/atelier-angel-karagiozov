import React from'react';
import { getPlaiceholder } from 'plaiceholder';
import Image from 'next/image';


export default async function blur({ src }: { src: string }) {
 
    const buffer = await fetch(src).then( async (res) => {
        return Buffer.from(await res.arrayBuffer())
    }) 

    const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className='relative w-full h-screen'>
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover', // cover, contain, none
        }}

        placeholder="blur"
        blurDataURL={base64}
        priority
      />
    </div>
  );
}

