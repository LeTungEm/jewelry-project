import Image from "next/image";

export default function ProductCardCPN({product}) {
    return (
        <div className="relative text-center py-2 bg-gradient-to-b from-transparent from-50% to-[#CCDFF0]">
            <Image
                className="!relative justify-self-center self-start p-10 !h-fit !w-[100%]"
                src={product}
                alt="File icon"
                layout="fill"
                objectFit="cover"
            />
            <svg className="absolute top-5 right-5 stroke-black stroke-[1.6] hover:fill-red-600 hover:stroke-red-600" xmlns="http://www.w3.org/2000/svg" width="33" height="30" viewBox="0 0 33 30" fill="none">
                <path d="M16.3918 4.49954L16.459 4.43155L16.5744 4.54826L17.1384 3.87165C18.7066 1.99038 21.0489 0.8 23.6645 0.8C28.37 0.8 32.2 4.66061 32.2 9.44208C32.2 12.1792 30.9443 14.6166 28.985 16.2002C27.8666 17.1041 24.5647 20.4469 21.5968 23.5026C20.1003 25.0434 18.6711 26.5298 17.6161 27.6308C17.1427 28.1249 16.7446 28.5415 16.4494 28.8506L3.84691 16.0645L3.82433 16.0416L3.79999 16.0206C1.96425 14.4354 0.8 12.0778 0.8 9.44208C0.8 4.66061 4.63002 0.8 9.33553 0.8C11.932 0.8 14.2591 1.97308 15.8271 3.83058L16.3918 4.49954Z"/>
            </svg>
            <div className="px-3">
                <h1>Nhẫn kim cương vàng trắng 14K</h1>
                <h2>My First Diamon - MFDB52689</h2>
                <h2 className="text-lg text-[var(--blue)] font-bold">19.945.000đ</h2>
            </div>
        </div>
    );
  }