"use client";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#242424] text-white">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>

      <div className="bg-[#242424] border-t py-4 border-gray-600 flex justify-between items-center text-[14px] px-7">
        <div className="flex justify-center items-center gap-10 text-white">
          <p>Services</p>
          <p>Faqs</p>
          <p>My Account</p>
          <p>Privacy</p>
        </div>
        <p className="text-white">© 2022 Copyrights, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
