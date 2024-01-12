import { AppConfig } from "../utils/AppConfig";

const Logo = () => {
  return (
    <div className={`inline-flex items-center`}>
      <img className="w-10 h-10 mr-2" src={`/favicon.svg`} alt="logo"></img>

      <span className="text-[#150F37] font-semibold text-xl">
        {AppConfig.site_name}
      </span>
    </div>
  );
};

export { Logo };
