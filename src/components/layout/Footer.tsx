import Image from "next/image";

export default function Footer() {
    return (
      <footer className="text-[var(--black)] bg-[var(--bright-blue)] py-[2%]">
        <div className="flex justify-between px-[10%]">
            <ul className="leading-8">
                <li className="text-lg">SẢN PHẨM</li>
                <li>Trang sức</li>
                <li>Trang sức cưới</li>
                <li>Trang sức kim cương</li>
                <li>Trang sức cho nam</li>
                <li>Trang sức cho nữ</li>
                <li>Trang sức thiết kế cá nhân</li>
            </ul>
            <ul className="leading-8">
                <li className="text-lg">LIÊN HỆ MUA HÀNG</li>
                <li>1900 888 888</li>
                <li>0999 999 999</li>
                <li>Góp ý & Khiếu nại</li>
                <li>1900 888 888 (phím 1)</li>
                <li>support@khieunai.vn</li>
            </ul>
            <ul className="leading-8">
                <li className="text-lg">CHÍNH SÁCH</li>
                <li>Chính sách giao hàng</li>
                <li>Chính sách bảo hành</li>
                <li>Chính sách đổi trả</li>
            </ul>
            <div>
                <h2 className="text-lg mb-2">KẾT NỐI VỚI CHÚNG TÔI</h2>
                <div className="flex gap-5">
                    <Image
                        className="!relative !w-8 !h-8"
                        src="/images/icon/facebook.png"
                        alt="File icon"
                        layout="fill"
                        objectFit="contain"
                    />
                    <Image
                        className="!relative !w-8 !h-8"
                        src="/images/icon/instagram.png"
                        alt="File icon"
                        layout="fill"
                        objectFit="contain"
                    />
                    <Image
                        className="!relative !w-8 !h-8"
                        src="/images/icon/youtube.png"
                        alt="File icon"
                        layout="fill"
                        objectFit="contain"
                    />
                    <Image
                        className="!relative !w-8 !h-8"
                        src="/images/icon/email.png"
                        alt="File icon"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
        </div>
        <hr className="border-[var(--light-blue)] my-5"/>
        <div className="flex gap-5 justify-between px-[10%]">
            <div className="flex flex-col gap-y-1">
                <h2 className="text-2xl">Nhận tư vấn từ chúng tôi!</h2>
                <p>Đăng ký ngay bên dưới để nhận được sự hỗ trợ từ chúng tôi.</p>
                <div className="flex gap-5">
                    <input placeholder="Họ và tên" className="p-2 w-full focus:outline-0" type="text" />
                    <input placeholder="Email" className="p-2 w-full focus:outline-0" type="text" />
                    <button className="text-white whitespace-nowrap bg-[var(--blue)] p-2">Nhận tư vấn</button>
                </div>
            </div>
            <Image
                className="!relative !w-[30%]"
                src="/images/Logo.png"
                alt="File icon"
                layout="fill"
                objectFit="contain"
            />
        </div>
      </footer>
    );
  }