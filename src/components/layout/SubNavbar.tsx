import Image from "next/image";

export default function SubNavbar() {
    return (
      <div className="bg-[var(--blue)] text-white">
        <div className="flex flex-wrap justify-around">
            <div className="[&>*]:mr-2">
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
            <div className="[&>*]:mr-2">
                <span>
                    Chúng tôi
                </span>
                <span>|</span>
                <span>
                    Cửa hàng
                </span>
                <span>|</span>
                <span>
                    19008888
                </span>
            </div>
        </div>
        <div>.</div>
      </div>
    );
  }