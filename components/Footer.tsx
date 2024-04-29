import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex flex-col md:flex-row justify-between items-center gap-2 flex-wrap bg-[#fffaf5] h-[10%]">
      <p className="text-base font-bold text-[#0F2C58]">@2024 Anime Avenue</p>
      <Image
        src="/logo2.png"
        alt="logo"
        width={47}
        height={44}
        className="object-contain "
      />
      {/* <div className="flex items-center gap-6 bg-[#0F2C58] px-2 py-1 rounded-md">
        <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div> */}
    </footer>
  );
}

export default Footer;
