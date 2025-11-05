"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/components/lib/utils"
import { Sun, Moon } from "lucide-react"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const [checked, setChecked] = React.useState(false)

  return (
    <div
      className={cn(
        "relative flex items-center rounded-lg p-1 w-[170px] h-10 select-none transition-colors duration-300",
        checked ? "bg-gray-800" : "bg-gray-200",
        className
      )}
    >
      <div
        className={cn(
          "absolute top-[4px] bottom-[4px] w-[82px] rounded-md transition-all duration-300 pointer-events-none",
          checked ? "left-[85px] bg-gray-600" : "left-[4px] bg-white"
        )}
      ></div>

      <div
        className={cn(
          "flex flex-1 items-center justify-center gap-1 z-10 text-sm font-medium transition-colors pointer-events-none",
          checked ? "text-gray-400" : "text-black"
        )}
      >
        <Sun className="h-4 w-4" />
        Light
      </div>

      <div
        className={cn(
          "flex flex-1 items-center justify-center gap-1 z-10 text-sm font-medium transition-colors pointer-events-none",
          checked ? "text-white" : "text-gray-400"
        )}
      >
        <Moon className="h-4 w-4" />
        Dark
      </div>

      <SwitchPrimitive.Root
        checked={checked}
        onCheckedChange={setChecked}
        className="absolute inset-0 cursor-pointer z-20"
        {...props}
      >
        <SwitchPrimitive.Thumb className="hidden" />
      </SwitchPrimitive.Root>
    </div>
  )
}

export { Switch }
