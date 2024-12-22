import Image from "next/image";

export default function ServiceSTN() {
    return (
      <div>
        <div className="text-center mb-10">
          <h2 className="text-4xl">Dịch Vụ</h2>
          <p>Thế giới lấp lánh của những quý cô hiện đại</p>
        </div>

        {/* start service */}
        <div className="grid grid-cols-3 gap-16 items-center mb-10">
          <div className="text-center">
            <Image
              className="justify-self-center !relative !w-[5vw] mb-5"
              src="/images/service/1.png"
              alt="File icon"
              layout="fill"
            />    
            <h2 className="font-bold text-lg">Giao hàng miễn phí toàn quốc</h2>
            <p>Giao hàng nhanh trên toàn quốc
            miễn phí hoàn toàn</p>
            <span>Khám phá ngay &gt;</span>
          </div>
          <div className="text-center">
            <Image
              className="justify-self-center !relative !w-[5vw] mb-5"
              src="/images/service/2.png"
              alt="File icon"
              layout="fill"
            />    
            <h2 className="font-bold text-lg">Chế độ thu đổi hấp dẫn!</h2>
            <p>Thu đổi nhanh chóng với chính sách hấp dẫn và nhiều ưu đãi.</p>
            <span>Khám phá ngay &gt;</span>
          </div>
          <div className="text-center">
            <Image
              className="justify-self-center !relative !w-[5vw] mb-5"
              src="/images/service/3.png"
              alt="File icon"
              layout="fill"
            />    
            <div>
              <h2 className="font-bold text-lg">Bảo hành trọn đời</h2>
              <p>Miễn phí bảo hành trọn đời cho tất cả trang sức đã mua tại của hàng</p>
              <span>Khám phá ngay &gt;</span>
            </div>
          </div>
        </div>
        {/* end service */}
      </div>
    );
  }



