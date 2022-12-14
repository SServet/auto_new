import Link from "next/link";
import { useState } from "react";
import Checkbox from "./ui/Checkbox";
import Input from "./ui/Input";

export default function Login() {
  const [passWordSave, setPasswordSave] = useState(false);
  return (
    <>
      <div className="bg-theme-gray-3 overflow-hidden lg:px-6 md:!px-0">
        <div className="relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6">
          <div className="w-1/2 lg:w-full mr-3 flex flex-col text-theme-gray-4 text-base md:text-xs lg:flex-col">
            <div className="p-6 rounded-10 bg-theme-gray-4">
              <div className="mt-2">
                <h3 className="text-3xl md:text-xl font-bold">Einloggen</h3>
                <p className="mt-1">
                  Um fortzufahren, musst du eingeloggt sein.
                </p>
              </div>

              <div className="mt-6">
                <Input placeholder="E-Mail-Adresse" inputType="email" />
                <Input placeholder="Passwort" inputType="password" />
                <div className="flex justify-between mt-4">
                  <div className="flex items-center" onClick={() => setPasswordSave(!passWordSave)}>
                    <Checkbox label='Eingeloggt bleiben' />
                  </div>
                  <Link href="/reset-password">
                    <a className="text-theme-blue">Passwort vergessen?</a>
                  </Link>
                </div>
                <div className="flex items-end justify-between mt-10 sm:flex-col">
                  <button className="w-1/2 sm:w-full sm:mb-4 sm:mr-0 mr-2 inline-block px-10 py-3 sm:px-4 sm:text-sm rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-300 hover:bg-theme-yellow-3">
                    Einloggen
                  </button>
                  <Link href="/registration/user">
                    <div className="w-1/2 sm:w-full sm:mb-4 sm:ml-0 ml-2 flex items-center cursor-pointer text-13">
                      <img
                        className="opacity-50 mr-2"
                        src="/images/icons/login-user.png"
                      />
                      <div>
                        <p>Du bist noch nicht registriert?</p>
                        <p className="text-theme-blue">
                          Jetzt neu registrieren
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center items-ceter mt-7 bg-theme-gray-4 p-4 rounded-10 text-sm sm:flex-col">
              <button className="w-1/2 sm:w-full sm:mb-4 mr-2 sm:mr-0 inline-block px-10 sm:px-4 sm:text-sm py-3 rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-300 hover:bg-theme-yellow-3">
                Als H??ndler einlogen
              </button>
              <div className="w-1/2 ml-2 sm:w-full sm:ml-0">
                <p>Haben Sie Fragen?</p>
                <p>Wir helfen Ihnen gerne weiter.</p>
                <a
                  href="/#"
                  target="_blank"
                  rel="noreferer"
                  className="underline text-theme-blue"
                >
                  Kontaktformular
                </a>
              </div>
            </div>
          </div>
          <div className="relative w-1/2 lg:w-auto lg:ml-0 lg:mt-4 ml-3">
            <img className="w-full" src="/images/login-car.png" />
            <div className="absolute top-8 left-8">
              <p className="px-2 table text-black text-2xl bg-theme-yellow-2  font-bold">
                Mehr
              </p>
              <p className="px-2 table mt-1 text-black text-2xl bg-theme-yellow-2 font-bold">
                als nur eine
              </p>
              <p className="px-2 table mt-1 text-black text-2xl bg-theme-yellow-2 font-bold">
                Auto Suchmaschine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
