import { Compass, ShoppingCart, BookIcon, Newspaper, VideoIcon, MessageSquare, Gamepad, } from "lucide-react"
import { Switch } from "@/components/components/ui/switch"
import Link from "next/link"
import { useState } from "react";

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

// Menu items.
const items = [
    {
        title: "Discover",
        // url: "",
        icon: Compass,
    },
    {
        title: "Shop",
        // url: "",
        icon: ShoppingCart,
    },
    {
        title: "My Library",
        // url: "",
        icon: BookIcon,
    },
    {
        title: "News & Event",
        // url: "",
        icon: Newspaper,
    },
]
const itemsSo = [
    {
        title: "Live Streaming",
        // url: "",
        icon: VideoIcon,
    },
    {
        title: "Community",
        // url: "",
        icon: MessageSquare,
    },
]

export function AppSidebar() {
    const defaultItem = items[0] || { title: "", /*url: "",*/ icon: Compass };
    const [activeItem, setActiveItem] = useState<string>(defaultItem.title);

    return (
        <Sidebar className="!border-none !border-r-0 !shadow-none">
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
                                            <button
                                                // href={item.url}
                                                onClick={() => setActiveItem(item.title)}
                                                className={`flex items-center space-x-2 px-2 py-1 rounded transition-all
                                                    ${activeItem === item.title ? "border-2 backdrop-blur-md bg-white/20" : ""}`}
                                            >
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </button>
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
                                            <button
                                                // href={item.url}
                                                onClick={() => setActiveItem(item.title)}
                                                className={`flex items-center space-x-2 px-2 py-1 rounded transition-all
                                                    ${activeItem === item.title ? "border-2 backdrop-blur-md bg-white/20" : ""}`}
                                            >
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </button>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </div>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="mb-4 p-4 flex items-center justify-center"><Switch /></SidebarFooter>
        </Sidebar>
    )
}