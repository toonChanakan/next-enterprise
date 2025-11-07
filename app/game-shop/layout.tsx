'use client';

import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { CardTitle } from "@/components/components/ui/card";
import { Bell, ShoppingBagIcon, UserCircle, Star, BookmarkIcon } from "lucide-react"
import { Toggle } from "@/components/components/ui/toggle";
import { ITEMS_GAMES } from 'lp-items-shop'

function parseSold(sold: string): number {
    const num = parseFloat(sold)
    if (sold.toLowerCase().includes("k")) return num * 1000
    if (sold.toLowerCase().includes("m")) return num * 1000000
    return num
}

export default function Layout({ children }: { children: React.ReactNode }) {
    const hotGames = [...ITEMS_GAMES]
        .sort((a, b) => parseSold(b.sold) - parseSold(a.sold))
        .slice(0, 4)

    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(prev => !prev);

    return (
            <div className="h-screen w-screen overflow-hidden">
                <SidebarProvider>
                    <div className="flex h-[calc(100vh-64px)] w-full">
                        <aside
                            className={`relative flex flex-col transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'}`}
                        >
                            <div className="relative flex-1 h-full">
                                <SidebarTrigger
                                    onClick={toggleSidebar}
                                    className="absolute top-2 right-2 z-50"
                                />
                                <AppSidebar/>
                            </div>
                        </aside>
                        <div className="flex overflow-hidden flex-1 h-full border border-black-400 rounded-xl m-8 backdrop-blur-md bg-white/5">
                            <main className="flex-1 p-6 overflow-auto h-full scrollbar-hide">
                                {children}
                            </main>
                            <aside className="w-64 border-l border h-full">
                                    <div className="flex justify-end items-center h-15 border-b px-4 space-x-4">
                                        <Bell/>
                                        <ShoppingBagIcon/>
                                        <UserCircle/>
                                    </div>
                                    <div className="px-4 py-2 h-[calc(100%-2rem)] overflow-x-auto scrollbar-hide">
                                        <p className="font-bold text-lg">Hottest Games!</p>
                                        {hotGames.map((game) => (
                                            <div
                                                key={game.id}
                                                className="relative rounded-lg mx-4 my-8"
                                            >
                                                <div className="absolute left-1/2 -translate-x-1/2 -top-3 backdrop-blur-md rounded-full shadow-lg border border-white/30">
                                                    <div className="rounded-full">
                                                        <p className="text-2xl">🔥</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="h-60 flex flex-col justify-between border rounded-lg w-full bg-cover bg-center"
                                                    style={{
                                                        backgroundImage: `url(${game.picture})`,
                                                    }}
                                                >
                                                    <div className="h-full overflow-hidden flex justify-end items-start">
                                                        <div className="w-8 h-8 border rounded-sm m-2 flex justify-center items-center backdrop-blur-md bg-white/20">
                                                            <Toggle className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500">
                                                                <BookmarkIcon />
                                                            </Toggle>
                                                        </div>
                                                    </div>

                                                    <div className="h-26 py-2 px-4 rounded-lg space-y-2 backdrop-blur-md bg-white/20 border">
                                                        <CardTitle className="text-sm flex justify-between items-center truncate w-full">
                                                            {game.name}
                                                        </CardTitle>
                                                        <div className="border-b border-gray-300 flex justify-between items-center text-lg w-full pb-2">
                                                            {game.price}
                                                            <div className="flex gap-2">
                                                                {game.platform.map((p, idx) => (
                                                                    <div
                                                                        key={idx}
                                                                        className="h-6 w-6 flex justify-center items-center rounded-sm overflow-hidden"
                                                                    >
                                                                        <img src={p} alt="" className="w-full h-full object-cover" />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-start items-center gap-2 text-xs">
                                                            <h3 className="flex items-center gap-1">
                                                                <ShoppingBagIcon size={16} strokeWidth={1} />
                                                                {game.sold}
                                                            </h3>
                                                            <h3 className="flex items-center gap-1">
                                                                <Star size={16} strokeWidth={1} />
                                                                {game.ratting}/5.0
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                            </aside>
                        </div>
                    </div>
                </SidebarProvider>
            </div>
    );
}
