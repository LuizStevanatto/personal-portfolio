import ProfilePic from "../public/perfil.png";
import { useTheme } from "../services/theme/ThemeContext";

import ProfileCV from "../public/documents/CV_Luiz_Stevanatto_Neto_Mar_23.pdf";
import ProfileCVEng from "../public/documents/CV_Luiz_Stevanatto_Neto_Fev_23_Eng.pdf";

export function Header() {
  const { changeTheme, theme } = useTheme();

  return (
    <header className="relative pt-14 max-w-screen-lg mx-6 lg:mx-auto">
      <i
        onClick={changeTheme}
        className={`${
          theme === "light" ? "ri-moon-line" : "ri-sun-line"
        } absolute top-6 right-0 text-xl cursor-pointer duration-300 text-title-color dark:text-dark-title-color`}
      />
      <div className="grid gap-6 gap-y-8">
        <div className="grid text-center">
          <div className="grid place-items-center mb-3 justify-self-center w-32 h-32 rounded-full border-[3.5px] border-first-color">
            <div className="w-28 h-28 rounded-full bg-gradient-to-b from-first-color to-first-color-satured overflow-hidden flex items-end justify-center">
              <img src={ProfilePic} className=" object-cover" alt="" />
            </div>
          </div>

          <h2 className="text-2xl text-title-color dark:text-dark-title-color">
            Luiz Stevanatto
          </h2>
          <h3 className="text-xs font-medium mb-4 text-text-color dark:text-dark-text-color">
            FullStack developer
          </h3>

          <ul className="flex justify-center gap-x-3">
            <a
              href="https://www.instagram.com/luiz_stevanatto/"
              target="_blank"
            >
              <i className="ri-instagram-line ri-lg font-xl text-title-color dark:text-dark-title-color duration-300 hover:text-first-color" />
            </a>
            <a
              href="https://www.linkedin.com/in/luiz-stevanatto-neto-882899193/"
              target="_blank"
            >
              <i className="ri-linkedin-box-line ri-lg font-xl text-title-color dark:text-dark-title-color duration-300 hover:text-first-color" />
            </a>
            <a href="https://github.com/LuizStevanatto" target="_blank">
              <i className="ri-github-line ri-lg font-xl text-title-color dark:text-dark-title-color duration-300 hover:text-first-color" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5519991291264&text=Hello"
              target="_blank"
            >
              <i className="ri-whatsapp-line ri-lg font-xl text-title-color dark:text-dark-title-color duration-300 hover:text-first-color" />
            </a>
            <a href="https://discord.gg/zUyDCseCx5" target="_blank">
              <i className="ri-discord-line ri-lg font-xl text-title-color dark:text-dark-title-color duration-300 hover:text-first-color" />
            </a>
          </ul>
        </div>

        <div className="grid grid-cols-[repeat(3,max-content)] justify-center gap-x-4 xsm:gap-x-12 gap-6">
          <div className="text-center">
            <h3 className="mb-1 text-base text-title-color dark:text-dark-title-color">
              3
            </h3>
            <p className="font-medium text-sm text-text-color dark:text-dark-text-color">
              Years of <br /> work
            </p>
          </div>
          <div className="text-center">
            <h3 className="mb-1 text-base text-title-color dark:text-dark-title-color">
              +10
            </h3>
            <p className="font-medium text-sm text-text-color dark:text-dark-text-color">
              Completed <br /> projects
            </p>
          </div>
          <div className="text-center">
            <h3 className="mb-1 text-base text-title-color dark:text-dark-title-color">
              10
            </h3>
            <p className="font-medium text-sm text-text-color dark:text-dark-text-color">
              Satisfied <br /> customers
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-10 items-center justify-center">
          <div className="flex flex-col gap-y-4 xsm:flex-row items-center justify-center gap-x-4">
            <a download="" href={ProfileCV} className="button font-medium w-72">
              Download CV - Portug??s
              <i className="ri-download-line ri-lg" />
            </a>
          </div>
          <div className="flex flex-col gap-y-4 xsm:flex-row items-center justify-center gap-x-4">
            <a
              download=""
              href={ProfileCVEng}
              className="button font-medium w-72"
            >
              Download CV - English
              <i className="ri-download-line ri-lg" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
