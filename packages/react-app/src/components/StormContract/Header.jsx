import "./Header.css";
import { ReactComponent as ProfileIcon } from "assets/svg/profile-icon.svg";
import { ReactComponent as ArbolLogo } from "assets/svg/arbol-logo.svg";

export default function Header() {
  return (
    <header>
      <a href="/">
        <ArbolLogo />
        <h1>Mangrove</h1>
      </a>

      <div className="profile">
        Administrator
        <ProfileIcon />
      </div>
    </header>
  );
}
