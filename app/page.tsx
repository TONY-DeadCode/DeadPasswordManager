import Image from "next/image";
import Line from "./components/Line";
import Link from "next/link";
export default function Home() {
  return (
    <div className="container">
      <div className="box">
        <Link href={"/settings"} className="box-button">
          <div className="icon-box">
            <Image
              src={"/static/Settings.svg"}
              width={30}
              height={28}
              alt="Settings"
            />
          </div>
          <Line />
          <div>Settings</div>
        </Link>
        <Link href={"/passwords"} className="box-button">
          <div className="icon-box">
            <Image
              src={"/static/Password.svg"}
              width={30}
              height={28}
              alt="Settings"
            />
          </div>
          <Line />
          <div>Passwords</div>
        </Link>
        <Link href={"/passwords"} className="box-button">
          <div className="icon-box">
            <Image
              src={"/static/Authy.svg"}
              width={30}
              height={28}
              alt="Settings"
            />
          </div>
          <Line />
          <div>Authy</div>
        </Link>
      </div>
    </div>
  );
}
