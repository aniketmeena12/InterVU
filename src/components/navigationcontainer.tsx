import { MainRoutes } from "@/lib/helpers"
import { cn } from "@/lib/utils"
import { NavLink } from "react-router-dom"

interface NavigationContainerProps {
    isMobile?: boolean
}
const NavigationContainer = ({isMobile = false}: NavigationContainerProps) => {
  return (
    <ul className={cn("flex items-center gap-6 " , isMobile && "items-start flex-col gap-8  ")}>
      {MainRoutes.map(route => (
        <li key={route.href}>
          <NavLink
            to={route.href}
            className={({ isActive }) =>
              cn("text-base text-white", isActive && "text-white font-semibold")
            }
          >
            {route.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default NavigationContainer
