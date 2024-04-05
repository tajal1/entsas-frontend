import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="px-2 md:px-12 mx-auto grid md:grid-cols-4 grid-cols-2 gap-7 container">
        <div>
          <p className="text-[.625rem] mb-6">HELP</p>
          <div className="text-[.875rem] flex flex-col gap-5">
            <p>
              Our Client Advisors are available to assist you <br /> by phone at
              &nbsp;
              <span className="leading-5 border-b border-b-black">
                <Link href={"/"}>+1.866.VUITTON</Link>
              </span>{" "}
              . You can also <br />{" "}
              <span className="border-b border-b-black">
                <Link href={"/"}>chat</Link>
              </span>
              or
              <span className="border-b border-b-black">
                <Link href={"/"}>email us</Link>
              </span>
              .{" "}
            </p>
            <p>
              {" "}
              <Link href={"/faq"}>FAQs</Link>
            </p>
            <p>
              {" "}
              <Link href={"/"}>Product Care</Link>
            </p>
            <p>
              {" "}
              <Link href="/">Stores</Link>
            </p>
          </div>
        </div>

        <div>
          <p className="text-[.625rem] mb-6">SERVICES</p>
          <div className="text-[.875rem] flex flex-col gap-5">
            <p>
              <Link href={"/"}>Repairs</Link>
            </p>
            <p>
              <Link href={"/"}>Personalization</Link>
            </p>
            <p>
              <Link href={"/"}>Art of Gifting</Link>
            </p>
            <p>
              <Link href={"/"}>Download our Apps</Link>
            </p>
          </div>
        </div>

        <div>
          <p className="text-[.625rem] mb-6">ABOUT LOUIS VUITTON</p>
          <div className="text-[.875rem] flex flex-col gap-5">
            <p>
              <Link href={"/"}>Fashion Shows</Link>
            </p>
            <p>
              <Link href={"/"}>Art &amp; Culture</Link>
            </p>
            <p>
              <Link href={"/"}>La Maison</Link>
            </p>
            <p>
              <Link href={"/"}>Sustainability</Link>
            </p>
            <p>
              <Link href={"/"}>Latest News</Link>
            </p>
            <p>
              <Link href={"/"}>Careers</Link>
            </p>
            <p>
              <Link href={"/"}>Foundation Louis Vuition</Link>
            </p>
          </div>
        </div>

        <div>
          <p className="text-[.625rem] mb-6">EMAIL SIGN-UP</p>
          <p className="text-[.875rem] mb-5">
            <span className="border-b border-b-black">
              <Link href="/">Sign up</Link>
            </span>{" "}
            for Louis Vuitton emails and receive the latest news from the
            Maison, including exclusive online pre-launches and new collections.
          </p>
          <Link href="/">Follow Us</Link>
        </div>
      </div>

      <hr className="my-10" />

      <div className="px-2 md:px-12 mx-auto container">
        <div className="flex justify-between lg:flex-row flex-col-reverse items-center gap-5 text-[.875rem]">
          <div>
            <p className="flex gap-2">
              <span>Ship to: </span>
              <Image
                src="https://us.louisvuitton.com/flags/us.svg"
                alt="Flag"
                height={12}
                width={16}
              />
              <span className="border-b border-b-black">
                <Link href={"/"}>United States</Link>
              </span>{" "}
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap md:flex-row justify-center md:justify-start gap-5 md:gap-7">
            <Link href={"/"}>Sitemap</Link>
            <Link href={"/"}>Legal Notice</Link>
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>California Supply Chains Act</Link>
            <Link href={"/"}>Do Not Sell or Share My Personal Information</Link>
            <Link href={"/"}>Accessibility</Link>
          </div>
        </div>
      </div>

      <p className="hidden lg:block text-center font-extrabold mt-10 text-[24px] container">
        LOUIS VUITTON
      </p>
    </div>
  );
};

export default Footer;
