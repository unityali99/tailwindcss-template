import { FaTwitter, FaFacebookF } from "react-icons/fa";
import Icon from "./Icon";

const Nav = () => (
  <header className="flex justify-between p-12 items-center">
    <div className="text-white font-semibold text-4xl">
      <span className="text-violet-400">{"Rain"}</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-pink-500 to-violet-500">
        {"blur"}
      </span>
    </div>
    <div className="text-white">
      <Icon icon={<FaTwitter size={45} />} />
      <Icon icon={<FaFacebookF size={45} />} />
    </div>
  </header>
);

export default Nav;
