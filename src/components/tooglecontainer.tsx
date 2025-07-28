import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import NavigationContainer from "./navigationcontainer";


const ToogleContainer = () => {
  
  return (
<Sheet>
  <SheetTrigger className="block md:hidden"><Menu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle/>
    </SheetHeader>
    <nav className=" p-4 py-2 gap-6 flex flex-col items-start">
        <NavigationContainer isMobile/>
          
    </nav>
  </SheetContent>
</Sheet>
  )
}

export default  ToogleContainer

