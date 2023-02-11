import { FaTwitter, FaFacebookF } from "react-icons/fa";
import Icon from "./Icon";

const Nav = () => (
  <header className="flex sm:flex-row flex-col justify-center sm:justify-between p-12 items-center">
    <div className="text-white font-semibold text-4xl">
      <span className="text-violet-400">{"Rain"}</span>
      <span className="gradient-text">{"blur"}</span>
    </div>
    <div className="whitespace-nowrap py-10 sm:py-0">
      <Icon icon={<FaTwitter size={45} />} />
      <Icon icon={<FaFacebookF size={45} />} />
    </div>
  </header>
);

export default Nav;
