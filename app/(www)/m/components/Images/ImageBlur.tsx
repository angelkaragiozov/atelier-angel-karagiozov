import React from "react";
import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";

export default async function blur({ src }: { src: string }) {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div>
      <Image
        src={src}
        width={1024}
        height={800}
        alt=""
        placeholder="blur"
        blurDataURL={base64}
      />
    </div>
  );
}
