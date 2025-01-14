import { Layout } from "antd";
import Logo from "../assets/images/Logo.png";
import BaseFontAwesomeIcon from "components/base/font-awesome-icon/BaseFontAwesomeIcon";

const { Header } = Layout;
export default function Home() {
  return (
    <Header className="sticky top-0 z-10 w-full h-24 flex items-center bg-white shadow-md px-5">
      <div className="flex flex-1 items-center justify-around">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Nhanh Organic" />
        </div>

        {/* Navigation */}
        <ul className="flex list-none m-0 p-0 gap-14">
          <li>
            <a
              href="#home"
              className="text-black text-base no-underline hover:text-green-500"
            >
              Trang chủ
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-black text-base no-underline hover:text-green-500"
            >
              Giới thiệu
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="text-black text-base no-underline hover:text-green-500"
            >
              Sản phẩm
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black text-base no-underline hover:text-green-500"
            >
              Liên hệ
            </a>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <div className="relative">
            <BaseFontAwesomeIcon icon={["fas", "cart-shopping"]} />
          </div>
          <BaseFontAwesomeIcon icon={["fas", "user"]} />

          <BaseFontAwesomeIcon icon={["fas", "magnifying-glass"]} />
        </div>
      </div>
    </Header>
  );
}
