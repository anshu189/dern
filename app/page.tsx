import { Button } from "@nextui-org/button";
import { WelcomeScreen } from "./components/Welcome/welcome";

export default function Home() {
  return (
    <WelcomeScreen />
    // <div className="flex flex-col min-h-screen items-center justify-center">
    //   <h1 className="text-[10vw] leading-snug font-bold black"><span className="green">D</span><span className="gold">ERN</span></h1>
    //   <p className="black text-4xl font-medium"><span className="">Dump</span> Waste & <span className="">Earn</span> Coins</p>
    //   <div className="flex items-center justify-center gap-4 mt-10">
    //     <Button color="success" variant="flat" radius="sm" className="font-semibold text-md">Dump Waste</Button>
    //     <Button color="warning" variant="light" radius="sm" className="font-medium text-md">How it works?</Button>
    //   </div>
    // </div>
  );
}
