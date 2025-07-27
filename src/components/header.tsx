import { cn } from "@/lib/utils";
import Container from "./container";
import LogoContainer from "./logocontainer";
import NavigationContainer from "./navigationcontainer";
import ProfileContainer from "./profilecontainer";
import ToogleContainer from "./tooglecontainer";
  
const Header = () => {
  return (
    <>
   <header className={cn("w-full h-16  duration-150 transition-all ease-in-out bg-black " )}>
     <Container>
      <div className="flex items-center gap-6 w-full">
        <LogoContainer/>
        <nav className={"hidden md:flex items-center gap-3"}>
          <NavigationContainer/>            
        </nav>
        <div className="ml-auto flex items-center gap-6">
          <ProfileContainer/>
          <ToogleContainer/>
        </div>
      </div>
     </Container>
   </header>
   <div className="w-full border-t border-gray-500" />
   </>
  )
}

export default Header
