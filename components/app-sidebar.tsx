import { Compass, ShoppingCart, BookIcon, Newspaper, VideoIcon, MessageSquare , Gamepad, } from "lucide-react"
import { Switch } from "@/components/components/ui/switch"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter
} from "@/components/components/ui/sidebar"
import { use } from "react"

// Menu items.
const items = [
    {
        title: "Discover",
        url: "#",
        icon: Compass,
    },
    {
        title: "Shop",
        url: "#",
        icon: ShoppingCart,
    },
    {
        title: "My Library",
        url: "#",
        icon: BookIcon,
    },
    {
        title: "News & Event",
        url: "#",
        icon: Newspaper,
    },
]
const itemsSo = [
    {
        title: "Live Streaming",
        url: "#",
        icon: VideoIcon,
    },
    {
        title: "Community",
        url: "#",
        icon: MessageSquare,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <div className="flex items-center px-4 py-3 text-xl font-bold space-x-2 mb-10">
                        <Gamepad />
                        <h2>GamerPlaza</h2>
                    </div>
                    <div className="mb-4 px-2">
                        <SidebarGroupLabel>Games</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title} className="ml-2 mb-3">
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </div>
                    <div className="mb-4 px-2">
                        <SidebarGroupLabel>Social</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {itemsSo.map((item) => (
                                    <SidebarMenuItem key={item.title} className="ml-2 mb-3">
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </div>

                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="mb-15 p-4 flex items-center justify-center"><Switch/></SidebarFooter>
        </Sidebar>
    )
}