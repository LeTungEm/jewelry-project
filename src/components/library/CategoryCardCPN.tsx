import Image from "next/image";

export default function CategoryCardCPN({category}) {
    return (
        <div className="text-center py-2">
            <div className="bg-gradient-to-b from-transparent to-[#CCDFF0]">
                <Image
                    className="!relative justify-self-center self-start p-10 !h-fit !w-[100%]"
                    src={category.image}
                    alt="File icon"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="px-3">
                <h1>{category.name}</h1>
            </div>
        </div>
    );
  }