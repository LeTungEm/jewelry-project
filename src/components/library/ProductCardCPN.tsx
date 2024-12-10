import Image from "next/image";

export default function ProductCardCPN({product}) {
    return (
        <div className="text-center py-2 bg-gradient-to-b from-transparent to-[#CCDFF0]">
            <Image
                className="!relative justify-self-center self-start !h-fit !w-[100%]"
                src={product}
                alt="File icon"
                layout="fill"
                objectFit="cover"
            />
            <div className="px-3">
                <h1 className="text-[var(--black)]">Nhẫn kim cương vàng trắng 14K</h1>
                <h2 className="text-[var(--black)]">My First Diamon - MFDB52689</h2>
                <h2 className="text-lg text-[var(--blue)] font-bold">19.945.000đ</h2>
            </div>
        </div>
    );
  }