import Link from "next/link";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  const links1 = [
    { linkTitle: "ANMELDEN", url: "login" },
    { linkTitle: "REGISTRIEREN", url: "registration/dealer" },
    { linkTitle: "VORTEILE", url: "#" },
    { linkTitle: "PREISE", url: "#" },
    { linkTitle: "HILFE", url: "#" },
    { linkTitle: "WERBUNG", url: "#" },
  ];
  const links2 = [
    { linkTitle: "KONTAKT", url: "#" },
    { linkTitle: "JOBS", url: "#" },
    { linkTitle: "PRESSE", url: "#" },
    { linkTitle: "AGB", url: "#" },
    { linkTitle: "DSGVO", url: "#" },
    { linkTitle: "IMPRESSUM", url: "#" },
  ];
  const links3 = [
    { linkTitle: "FAHRZEUG HÄNDLER", url: "#" },
    { linkTitle: "KREDITVERMITTLER", url: "#" },
    { linkTitle: "VERSICHERUNGSMAKLER", url: "#" },
    { linkTitle: "ZULASSUNGSSTELLEN", url: "#" },
    { linkTitle: "WERKSTÄTTEN", url: "#" },
    { linkTitle: "AUTOAUFBEREITUNG", url: "#" },
  ];
  const links4 = [
    { linkTitle: "NOVA RECHNER", url: "#" },
    { linkTitle: "DIGITALE VIGNETTE", url: "#" },
    { linkTitle: "AUTOMARKEN", url: "#" },
    { linkTitle: "FAHRSCHULEN", url: "#" },
    { linkTitle: "KFZ VORSCHRIFTEN", url: "#" },
    { linkTitle: "KFZ KAUFVERTRAG", url: "#" },
  ];
  const links5 = [
    { linkTitle: "EGIGANT", url: "#" },
    { linkTitle: "AUTOGIGANT", url: "#" },
    { linkTitle: "IMMOGIGANT", url: "#" },
    { linkTitle: "GASTROGIGANT", url: "#" },
    { linkTitle: "HOSTINGGIGANT", url: "#" },
    { linkTitle: "GIGANT SHOP", url: "#" },
  ];
  return (
    <footer className="lg:px-6 md:!px-0">
      <div className="bg-theme-gray-6">
        <div className="w-10/12 max-w-ag-container lg:w-full mx-auto shadow-1">
          <div className="flex md:flex-col justify-between bg-theme-gray-4 p-6">
            <FooterLinks title="HÄNDLERBEREICH" links={links1} />
            <FooterLinks title="ÜBER UNS" links={links2} />
            <FooterLinks title="KOOPERATIONEN" links={links3} />
            <FooterLinks title="LINKS" links={links4} />
            <FooterLinks title="GIGANT WORLD" links={links5} />
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="w-10/12 max-w-ag-container lg:w-full mx-auto shadow-1 lg:px-6">
          <div className="flex justify-between md:flex-col lg:justify-around items-start xl:items-center py-4 md:py-8 bg-black">
            <div className="flex w-1/2 lg:w-auto md:mr-auto items-start lg:flex-col lg:items-start">
              <Link href="/">
                <div className="md:w-full">
                  <img
                    className="cursor-pointer w-60 lg:mr-auto xl:w-32 2xl:w-40"
                    src="/images/icons/footer-logo.png"
                  />
                  <p className="text-xs text-white mt-2">
                    A COMPANY OF THE GIGANT GROUP
                  </p>
                </div>
              </Link>
              <div className="flex flex-col justify-between lg:border-0 border-l border-footer-border lg:mr-auto lg:pt-4 ml-4 pl-4 text-white text-xs lg:ml-0 lg:pl-0">
                <h4 className="text-base font-bold">GIGANT WORLD</h4>
                <div className="mt-1">
                  <Link href="https://www.egigant.at">
                    <a className="flex items-center text-13 mb-1" target='_blank' rel='noreferer'>
                      <img
                        className="mr-1"
                        src="/images/icons/footer-link-expand.png"
                      />
                      E GIGANT.
                    </a>
                  </Link>
                  <Link href="https://www.immo-gigant.at">
                    <a className="flex items-center text-13 mb-1" target='_blank' rel='noreferer'>
                      <img
                        className="mr-1"
                        src="/images/icons/footer-link-expand.png"
                      />
                      IMMO GIGANT.
                    </a>
                  </Link>
                  <Link href="https://www.gastrogigant.at">
                    <a className="flex items-center text-13 mb-1" target='_blank' rel='noreferer'>
                      <img
                        className="mr-1"
                        src="/images/icons/footer-link-expand.png"
                      />
                      GASTRO GIGANT.
                    </a>
                  </Link>
                  <Link href="https://www.hosting-gigant.at">
                    <a className="flex items-center text-13 mb-1" target='_blank' rel='noreferer'>
                      <img
                        className="mr-1"
                        src="/images/icons/footer-link-expand.png"
                      />
                      HOSTING GIGANT.
                    </a>
                  </Link>
                  <Link href="https://www.gigant.shop">
                    <a className="flex items-center text-13" target='_blank' rel='noreferer'>
                      <img
                        className="mr-1"
                        src="/images/icons/footer-link-expand.png"
                      />
                      GIGANT SHOP.
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-1/2 lg:w-auto md:mr-auto md:mt-10 pl-10 lg:pl-0 lg:flex-col lg:items-start">
              <div className="lg:mb-8 md:!mb-0 text-white xl:text-xs">
                <p className="text-base tracking-wide">
                  Jetzt App kostenlos downloaden!
                </p>
                <div className="flex mt-2 items-center justify-between">
                  <img className="" src="/images/icons/google-play.png" />
                  <img className="" src="/images/icons/app-store.png" />
                </div>
              </div>
              <div className="md:items-start md:mt-8">
                <h4 className="font-bold text-white">
                  <span className="text-theme-yellow-2">EINFACH</span>GIGANTISCH
                  <span className="text-theme-yellow-2">.</span>
                </h4>
                <div className="flex mt-2">
                  <button className="w-8 xl:w-8 rounded-full overflow-hidden hover:opacity-90 ease-linear duration-300">
                    <img src="/images/icons/facebook.png" />
                  </button>
                  <button className="w-8 xl:w-8 ml-3 rounded-full overflow-hidden hover:opacity-90 ease-linear duration-300">
                    <img src="/images/icons/instagram.png" />
                  </button>
                  <button className="w-8 xl:w-8 ml-3 rounded-full overflow-hidden hover:opacity-90 ease-linear duration-300">
                    <img src="/images/icons/youtube.png" />
                  </button>
                  <button className="w-8 xl:w-8 ml-3 rounded-full overflow-hidden hover:opacity-90 ease-linear duration-300">
                    <img src="/images/icons/tiktok.png" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-10/12 max-w-ag-container lg:w-full mx-auto shadow-1">
          <div className="flex items-center justify-between py-2 text-white text-13 bg-black border-t border-theme-gray-3 leading-5 xl:flex-wrap md:justify-center">
            <p className="md:px-2">© 2022 AUTO GIGANT.</p>
            <p className="flex items-center md:px-2">MADE WITH<img src="/images/icons/copyright-fav.png"/>IN AUSTRIA</p>
            <p className="md:px-2">IMPRESSUM</p>
            <p className="md:px-2">DATENSCHUTZ</p>
            <p className="md:px-2">COOKIE HINWEISE</p>
            <p className="md:px-2">NUTZUNGSBEDINGNUNGEN</p>
            <p className="md:px-2">KONTAKT</p>
            <p className="flex items-center"><img className="w-4 mr-1 md:px-2" src="/images/icons/copyright-world.png"/>DEUTSCH | ÖSTERREICH</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
