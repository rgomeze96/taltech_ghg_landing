import { Icons } from "./icons";

export function Navbar() {
  return (
    <header className="top-0 z-40 w-full bg-primary drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="ml-0 mr-0 flex h-10 items-center bg-primary-foreground">
        <div className="relative flex h-full min-w-[180px] items-center justify-center bg-green">
          <h4 className="font-extrabold text-primary-foreground px-5">
            GHG Tools
          </h4>
          <div className="absolute top-full">
            <Icons.NotchDown />
          </div>
        </div>
        <div className="mr-8 flex flex-1 items-center justify-end text-primary">
          <button className="ml-6" type="button">
            <a target="_blank" rel="noreferrer">
              <Icons.HelpCircleFilled />
            </a>
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Button
          </button>
        </div>
      </div>
      <div className="ml-0 mr-0 flex h-16 items-center">
        <div className="ml-8">
          <img src="/taltech.png" width={61} height={34} alt="TalTech logo" />
        </div>
        <div className="mr-8 flex flex-1 items-center justify-end text-secondary-foreground ">
          <div className="mr-12 border-l">
            <Icons.TallinnaTehnikaulikool />
          </div>
        </div>
      </div>
    </header>
  );
}
