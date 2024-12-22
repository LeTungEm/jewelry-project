import Image from "next/image";
import SlideShowCPN from '@/components/library/SlideShowCPN';
import ProductCardCPN from '@/components/library/ProductCardCPN';
import CategoryCardCPN from '@/components/library/CategoryCardCPN';
import ServiceSTN from '@/components/section/ServiceSTN';


export default function Home() {
   
  const categories1 = [
    {
      name: "Nhẫn kim cương",
      image: "/images/products/1.png"
    },
    {
      name: "Bông tai",
      image: "/images/products/2.png"
    },
    {
      name: "Lắc tai",
      image: "/images/products/3.png"
    },
    {
      name: "Vòng cổ",
      image: "/images/products/1.png"
    },
    {
      name: "Mặt dây cổ",
      image: "/images/products/3.png"
    }
  ];

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
          <h2 className="font-bold text-lg">Free Shipping</h2>
          <p>Free shipping for orders over $130</p>                               
        </div>
        <div className="text-center">
          <Image
            className="justify-self-center !relative !w-[5vw] mb-5"
            src="/images/advance/Vector1.png"
            alt="File icon"
            layout="fill"
          />    
          <h2 className="font-bold text-lg">Money Guarantee</h2>
          <p>within 30 days for an excahnge</p>
        </div>
        <div className="text-center">
          <Image
            className="justify-self-center !relative !w-[5vw] mb-5"
            src="/images/advance/Vector2.png"
            alt="File icon"
            layout="fill"
          />    
          <h2 className="font-bold text-lg">Money Guarantee</h2>
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
            <h2 className="font-bold text-lg">Flexible Payment</h2>
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
        {/* colection 1 */}
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

        {/* colection 2 */}
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
        
        {/* colection 3 */}
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


      {/* start introduction */}
      <div className="mb-5">
        <div className="bg-[var(--blue)] flex justify-between px-[10%] h-[55vh]">
          <div className="flex">
            <Image
              className="!relative"
              src="/images/intro4.png"
              alt="File icon"
              layout="fill"
              objectFit="cover"
            />     
            <Image
              className="!relative !w-[18vw] py-10 -ml-10"
              src="/images/intro3.png"
              alt="File icon"
              layout="fill"
              objectFit="cover"
            />   
          </div>
          <div className="flex justify-end items-center w-1/3">
            <div className="text-white">
              <h2 className="lg:whitespace-nowrap text-5xl uppercase">TRANG SỨC CƯỚI</h2>
              <p className="my-10 w-2/3">Những bộ sưu tập trang sức mang đậm chất riêng của những nhà thiết kế uy tín sẽ đem đến cảm...</p>
              <span>Khám phá ngay &gt;</span>
            </div>
          </div>
        </div>
        <div className="px-[10%]">
          <div className="grid grid-cols-4 gap-5 w-full">
            <ProductCardCPN product={"/images/products/3.png"}/>
            <ProductCardCPN product={"/images/products/3.png"}/>
            <ProductCardCPN product={"/images/products/3.png"}/>
            <ProductCardCPN product={"/images/products/3.png"}/>
          </div>
          <div className="flex justify-center mt-5">
            <span className="border py-1 px-3">Xem thêm</span>
          </div>
        </div>
      </div>
      {/* end introduction */}

      {/* start introduction */}
      <div className="mb-5">
        <div className="bg-[var(--blue)] flex justify-between px-[10%] h-[55vh]">
          <div className="flex justify-center items-center">
            <div className="text-white">
              <h2 className="text-5xl uppercase">SẢN PHẨM KHUYẾN MÃI</h2>
              <p className="my-10 w-2/3">Những bộ sưu tập trang sức mang đậm chất riêng của những nhà thiết kế uy tín sẽ đem đến cảm...</p>
              <span>Khám phá ngay &gt;</span>
            </div>
          </div>
          <div className="flex">
            <Image
              className="!relative !w-[18vw] py-10 z-[1] -mr-10"
              src="/images/intro5.png"
              alt="File icon"
              layout="fill"
              objectFit="cover"
            />   
            <Image
              className="!relative z-0"
              src="/images/intro6.png"
              alt="File icon"
              layout="fill"
              objectFit="cover"
            />     
          </div>
        </div>
        <div className="px-[10%]">
          <div className="grid grid-cols-4 gap-5 w-full">
            <ProductCardCPN product={"/images/products/3.png"}/>
            <ProductCardCPN product={"/images/products/3.png"}/>
            <ProductCardCPN product={"/images/products/3.png"}/>
            <ProductCardCPN product={"/images/products/3.png"}/>
          </div>
          <div className="flex justify-center mt-5">
            <span className="border py-1 px-3">Xem thêm</span>
          </div>
        </div>
      </div>
      {/* end introduction */}


      <div className="bg-[url('/images/KimCuong.png')] bg-cover bg-center flex justify-start items-center mx-[10%] h-[55vh] mb-5">
        <div className="pl-[10%] w-1/3">
            <h2 className="lg:whitespace-nowrap text-5xl uppercase">KIM CƯƠNG GIA</h2>
            <p className="my-10 w-2/3">Kim cương thiên nhiên GIA được tuyển chọn dành riêng cho bạn...</p>
            <span>Khám phá ngay &gt;</span>
          </div>
        
      </div>

      <div className="bg-[url('/images/Thietke.png')] bg-cover bg-center flex justify-end items-center mx-[10%] h-[55vh] mb-5">
        <div className="pr-[10%]">
          <h2 className="lg:whitespace-nowrap w-1/3 text-5xl uppercase">BẠN MUỐN THIẾT KẾ RIÊNG</h2>
          <p className="my-10 w-2/3">Khám phá dịch vụ thiết kế riêng miễn phí của chúng tôi nhé!</p>
          <span>Khám phá ngay &gt;</span>
        </div>
      </div>
      <div className="px-[10%]">
        <div className="text-center mb-10">
          <h2 className="text-2xl">Có thể bạn đang tìm!</h2>
          <p>Thế giới lấp lánh của những quý cô hiện đại</p>
        </div>
        <div className="grid grid-cols-5 gap-5 w-full mb-10">
          {
            categories1.map(category => <CategoryCardCPN key={category.name} category={category}/>)
          }
        </div>

        <ServiceSTN/>

        <div className="grid grid-cols-3 gap-5 mb-10">
          <div>
            <Image
              className="justify-self-center !relative !w-full !h-fit mb-5"
              src="/images/colection4/1.png"
              alt="File icon"
              layout="fill"
              objectFit="contain"
            />
            <h2 className="font-bold text-lg">TRANG SỨC HOT</h2>
            <p>Những bộ sưu tập giá mang đậm chất riêng của...</p>
            <span>Khám phá ngay &gt;</span>
          </div>
          <div>
            <Image
              className="justify-self-center !relative !w-full !h-fit mb-5"
              src="/images/colection4/2.png"
              alt="File icon"
              layout="fill"
              objectFit="contain"
            />
            <h2 className="font-bold text-lg">TRANG SỨC HOT</h2>
            <p>Những bộ sưu tập giá mang đậm chất riêng của...</p>
            <span>Khám phá ngay &gt;</span>
          </div>
          <div>
            <Image
              className="justify-self-center !relative !w-full !h-fit mb-5"
              src="/images/colection4/3.png"
              alt="File icon"
              layout="fill"
              objectFit="contain"
            />
            <h2 className="font-bold text-lg">TRANG SỨC HOT</h2>
            <p>Những bộ sưu tập giá mang đậm chất riêng của...</p>
            <span>Khám phá ngay &gt;</span>
          </div>
        </div>
        
        <div className="flex items-center gap-5">
          <Image
            className="justify-self-center !relative !w-1/2 !h-fit mb-5"
            src="/images/colection4/1.png"
            alt="File icon"
            layout="fill"
            objectFit="contain"
          />
          <div className="pr-[10%]">
            <h2 className="lg:whitespace-nowrap w-1/3 text-5xl uppercase">Hệ thống cửa hàng</h2>
            <p className="my-10 w-2/3">Thế giới trang sức cùng không gian mua sắm tuyệt vời đang chờ bạn ghé thăm.</p>
            <span>Tìm cửa hàng gần bạn &gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
