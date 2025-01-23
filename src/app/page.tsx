import Image from "next/image";
import SignupForm from "./components/SignupForm";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-roboto)]">
      <div className="flex flex-col">
        <div className="items-center py-[84px] px-[50px] bg-[url(/bg-1.png)] bg-cover">
          <Image
            src={"/banner-1.png"}
            alt="Welcome to samla"
            width={559}
            height={740}
          />
        </div>
        <div className="flex flex-col pt-[60px] pb-[41px] px-[18px]">
          <div className="flex flex-col gap-[14px] items-center">
            <Image src={"/logo.svg"} alt="Samla logo" width={129} height={32} />
            <h4 className="text-[24px] font-medium">Registro</h4>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
