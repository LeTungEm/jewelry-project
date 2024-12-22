import Image from "next/image";

export default function Header() {
    return (
      <div className="sticky top-0 right-0 left-0 z-50">
        <div className="flex gap-2 flex-wrap justify-between bg-[var(--blue)] text-white py-2 px-[10%]">
            <div className="flex items-center [&>*]:mr-2">
                <Image
                    className="inline-block"
                    src="/images/VN_logo.png"
                    alt="viet nam logo"
                    width={16}
                    height={16}
                    priority
                />
                <span>
                    VIỆT NAM
                </span>
                <span>|</span>
                <Image
                    className="inline-block"
                    src="/images/Dis.png"
                    alt="viet nam logo"
                    width={16}
                    height={16}
                    priority
                />
                <span>
                    Thông tin khuyến mãi mới nhất
                </span>
            </div>
            <div className="flex items-center [&>*]:mr-2">
                <Image
                    className="inline-block"
                    src="/images/Vector.png"
                    alt="viet nam logo"
                    width={16}
                    height={16}
                    priority
                />
                <span>
                    Chúng tôi
                </span>
                <span>|</span>
                <Image
                    className="inline-block"
                    src="/images/Location.png"
                    alt="viet nam logo"
                    width={16}
                    height={16}
                    priority
                />
                <span>
                    Cửa hàng
                </span>
                <span>|</span>
                <Image
                    className="inline-block"
                    src="/images/Sup.png"
                    alt="viet nam logo"
                    width={16}
                    height={16}
                    priority
                />
                <span>
                    19008888
                </span>
            </div>
        </div>
        <div className="flex gap-2 flex-wrap justify-between bg-[var(--bright-blue)] py-2 px-[10%]">
            <div className="flex w-2/3">
                <Image
                    className="inline-block mr-10"
                    src="/images/logo.png"
                    alt="viet nam logo"
                    width={100}
                    height={100}
                    priority
                />
                <span className="whitespace-nowrap text-[var(--black)] border-[var(--blue)] border-2 py-1 px-5 mr-5">
                    Becom a Partner
                </span>
                <div className="flex w-full items-center px-2 bg-white">
                    <input className="w-full focus:outline-0" type="text" />
                    <Image
                        className="inline-block ml-2 cursor-pointer"
                        src="/images/Timkiem.png"
                        alt="viet nam logo"
                        width={22}
                        height={22}
                        priority
                    />
                </div>
            </div>
            <div className="flex items-center [&>*]:mr-2">
                <Image
                    className="inline-block"
                    src="/images/Signin.png"
                    alt="viet nam logo"
                    width={22}
                    height={22}
                    priority
                />
                <span className="text-[var(--blue)]">|</span>
                <Image
                    className="inline-block"
                    src="/images/Love.png"
                    alt="viet nam logo"
                    width={22}
                    height={22}
                    priority
                />
                <span className="text-[var(--blue)]">|</span>
                <Image
                    className="inline-block"
                    src="/images/Cart.png"
                    alt="viet nam logo"
                    width={22}
                    height={22}
                    priority
                />
                <span className="text-[var(--black)] ">Cart $0.00</span>
            </div>
        </div>
        <nav className="bg-white py-2 px-[10%]">
        <ul className='text-[var(--black)] uppercase flex justify-between gap-1'>
          <li>TRANG SỨC</li>
          <li>TRANG SỨC CƯỚI</li>
          <li>TRANG SỨC KIM CƯƠNG</li>
          <li>TRANG SỨC KIM CƯƠNG</li>
          <li>TRANG SỨC KIM CƯƠNG</li>
          <li>TRANG SỨC THƯƠNG HIỆU</li>
        </ul>
      </nav>
      </div>
    );
  }