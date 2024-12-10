import Image from "next/image";
import SlideShowCPN from '@/components/library/SlideShowCPN';
import ProductCardCPN from '@/components/library/ProductCardCPN';


export default function Home() {
  return (
    <div>
      <SlideShowCPN/>
      {/* start advance */}
      <div className="flex gap-5 justify-between items-center py-5 px-[10%]">
        <div className="text-center">
          <Image
            className="justify-self-center !relative !w-[5vw] mb-5"
            src="/images/advance/Vector.png"
            alt="File icon"
            layout="fill"
          />             
          <h2 className="font-bold">Free Shipping</h2>
          <p>Free shipping for orders over $130</p>                               
        </div>
        <div className="text-center">
          <Image
            className="justify-self-center !relative !w-[5vw] mb-5"
            src="/images/advance/Vector1.png"
            alt="File icon"
            layout="fill"
          />    
          <h2 className="font-bold">Money Guarantee</h2>
          <p>within 30 days for an excahnge</p>
        </div>
        <div className="text-center">
          <Image
            className="justify-self-center !relative !w-[5vw] mb-5"
            src="/images/advance/Vector2.png"
            alt="File icon"
            layout="fill"
          />    
          <h2 className="font-bold">Money Guarantee</h2>
          <p>within 30 days for an excahnge</p>
        </div>
        <div className="text-center">
          <Image
            className="justify-self-center !relative !w-[8vw] mb-5"
            src="/images/advance/Vector3.png"
            alt="File icon"
            layout="fill"
          />    
          <div>
            <h2 className="font-bold">Flexible Payment</h2>
            <p>Pay with multiple Credit cards</p>
          </div>
        </div>
      </div>
      {/* end advance */}


      {/* start introduction */}
      <div className="bg-[var(--blue)] flex justify-between px-[10%] h-[55vh]">
        <div className="flex justify-center items-center w-1/3">
          <div className="text-white">
            <h2 className="text-5xl uppercase">TRANG SỨC HOT</h2>
            <p className="my-10">Những bộ sưu tập trang sức mang đậm chất riêng của những nhà thiết kế uy tín sẽ đem đến cảm...</p>
            <span>Khám phá ngay &gt;</span>
          </div>
        </div>
        <div className="flex">
          <Image
            className="!relative !w-[18vw] py-10 px-5"
            src="/images/HinhL.png"
            alt="File icon"
            layout="fill"
            objectFit="cover"
          />   
          <Image
            className="!relative !w-[18vw]"
            src="/images/HinhN.png"
            alt="File icon"
            layout="fill"
            objectFit="cover"
          />     
        </div>
      </div>
      {/* end introduction */}


      {/* start colection */}
      <div className="px-[10%] py-5">
        <div className="flex gap-x-5">
          <div className="w-3/5">
            <div>
              <Image
                className="!relative !w-[100%]"
                src="/images/colection1/1.png"
                alt="File icon"
                layout="fill"
                objectFit="contain"
              />
              <Image
                className="!relative !w-[100%]"
                src="/images/colection1/2.png"
                alt="File icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-3 gap-5 w-full">
              <ProductCardCPN product={"/images/products/1.png"}/>
              <ProductCardCPN product={"/images/products/1.png"}/>
              <ProductCardCPN product={"/images/products/1.png"}/>
              <ProductCardCPN product={"/images/products/1.png"}/>
              <ProductCardCPN product={"/images/products/1.png"}/>
              <ProductCardCPN product={"/images/products/1.png"}/>
            </div>
            <div className="flex justify-center mt-5">
              <span className="border py-1 px-3">Xem thêm</span>
            </div>
          </div>
        </div>

        <div className="my-5">
          <Image
            className="!relative !w-[100%]"
            src="/images/colection2/1.png"
            alt="File icon"
            layout="fill"
            objectFit="contain"
          />
          <div className="grid grid-cols-4 gap-5 w-full">
            <ProductCardCPN product={"/images/products/2.png"}/>
            <ProductCardCPN product={"/images/products/2.png"}/>
            <ProductCardCPN product={"/images/products/2.png"}/>
            <ProductCardCPN product={"/images/products/2.png"}/>
          </div>
          <div className="flex justify-center mt-5">
            <span className="border py-1 px-3">Xem thêm</span>
          </div>
        </div>
        

        <div className="flex gap-x-5">
          <div className="w-3/5">
            <div>
              <Image
                className="!relative !w-[100%]"
                src="/images/colection3/1.png"
                alt="File icon"
                layout="fill"
                objectFit="contain"
              />
              <Image
                className="!relative !w-[100%]"
                src="/images/colection3/2.png"
                alt="File icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-3 gap-5 w-full">
              <ProductCardCPN product={"/images/products/1.png"}/>
              <ProductCardCPN product={"/images/products/1.png"}/>
              <ProductCardCPN product={"/images/products/1.png"}/>
              <ProductCardCPN product={"/images/products/1.png"}/>
              <ProductCardCPN product={"/images/products/1.png"}/>
              <ProductCardCPN product={"/images/products/1.png"}/>
            </div>
            <div className="flex justify-center mt-5">
              <span className="border py-1 px-3">Xem thêm</span>
            </div>
          </div>
        </div>
      </div>
      {/* end colection */}
    
    </div>
  );
}
