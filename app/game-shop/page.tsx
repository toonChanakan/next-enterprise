'use client'

import { useState } from 'react'
import { Button } from "@/components/components/ui/button";
import { Card, CardTitle } from "@/components/components/ui/card";
import { CircleArrowLeft, CircleArrowRight, BookmarkIcon, Search, CirclePlay, CirclePause } from "lucide-react"
import { Toggle } from "@/components/components/ui/toggle";
import { ITEMS_TAGS, ITEMS_GAMES, ITEMS_GAMES_TRAILER } from 'lp-items-shop'
import { useHorizontalScroll } from "@/components/role";

export default function Web() {
  const [playing, setPlaying] = useState(false)
  const [selectedGame, setSelectedGame] = useState(
    ITEMS_GAMES_TRAILER.find((game) => game.id === 2)!
  )

  const {
    scrollRef: genreRef,
    canScrollLeft: canScrollGenresLeft,
    canScrollRight: canScrollGenresRight,
    scrollLeft: scrollGenresLeft,
    scrollRight: scrollGenresRight,
  } = useHorizontalScroll();

  const {
    scrollRef: gameRef,
    canScrollLeft: canScrollGamesLeft,
    canScrollRight: canScrollGamesRight,
    scrollLeft: scrollGamesLeft,
    scrollRight: scrollGamesRight,
  } = useHorizontalScroll();

  return (
    <div className="space-y-4">
      <div className="flex items-center border  rounded-xl px-4 py-2 w-80 text-gray-400">
        <Search />
        <i className="fa-solid fa-magnifying-glass mr-3 text-gray-400"></i>
        <input
          type="text"
          placeholder="Search for games"
          className="bg-transparent outline-none w-full text-sm text-gray-200 placeholder-gray-500"
        />
      </div>
      <div className="flex justify-between items-center h-86">
        <Card className="w-full h-full p-8" style={{
          backgroundImage: `url(${selectedGame.blackg})`,
        }}>
          <div className="space-y-2">
            <h1 className="w-42 h-26 flex justify-center items-center">
              <img src={selectedGame.icons} alt="" className='w-full h-full object-cover' />
            </h1>
            <h2 className="font-bold">AVAILABLE PER-ORDER</h2>
            <h3 className="w-80 h-25">{selectedGame.description}</h3>
            <div className="flex gap-4 mt-4">
              <Button>PRE-ORDER NOW</Button>
              <button onClick={() => setPlaying(!playing)} className="flex items-center gap-2">
                {playing ? <CirclePause /> : <CirclePlay />}
                {playing ? 'PAUSE' : 'TRAILER'}
              </button>
            </div>
          </div>
        </Card>
        <div className="h-full w-80 ml-8 space-y-2">
          {ITEMS_GAMES_TRAILER.map((game1) => (
            <button key={game1.id || game1.name} onClick={() => setSelectedGame(game1)} className="flex h-20 w-full border rounded-lg p-3 space-x-3  backdrop-blur-md bg-white/5 border">
              <div className="border rounded-lg h-full w-14"><img src={game1.picture} alt="" className="w-full h-full object-cover rounded-sm" /></div>
              <div className="w-full h-full flex justify-start items-center text-sm">{game1.name}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="my-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-bold">Game genres</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollGenresLeft(240)}
              disabled={!canScrollGenresLeft}
              className={`p-2 rounded-full transition ${canScrollGenresLeft ? "opacity-100 hover:bg-muted" : "opacity-30"
                }`}
            >
              <CircleArrowLeft />
            </button>
            <button
              onClick={() => scrollGenresRight(240)}
              disabled={!canScrollGenresRight}
              className={`p-2 rounded-full transition ${canScrollGenresRight ? "opacity-100 hover:bg-muted" : "opacity-30"
                }`}
            >
              <CircleArrowRight />
            </button>
          </div>
        </div>
        <div
          ref={genreRef}
          className="flex gap-8 overflow-x-auto scroll-smooth py-2 px-1 flex-nowrap scrollbar-hide"
        >
          {ITEMS_TAGS.map((item) => {
            const Icon = item.icons;
            return (
              <div key={item.id} className="flex-shrink-0">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-bold">Game Page</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollGamesLeft(240)}
              disabled={!canScrollGamesLeft}
              className={`p-2 rounded-full transition ${canScrollGamesLeft ? "opacity-100 hover:bg-muted" : "opacity-30"
                }`}
            >
              <CircleArrowLeft />
            </button>
            <button
              onClick={() => scrollGamesRight(240)}
              disabled={!canScrollGamesRight}
              className={`p-2 rounded-full transition ${canScrollGamesRight ? "opacity-100 hover:bg-muted" : "opacity-30"
                }`}
            >
              <CircleArrowRight />
            </button>
          </div>
        </div>
        <div ref={gameRef}
          className="flex gap-8 overflow-x-auto scroll-smooth py-2 px-1 flex-nowrap scrollbar-hide">
          <div className="grid grid-rows-2 auto-cols-[13rem] gap-4 grid-flow-col min-w-max">
            {ITEMS_GAMES.map((game) => (
              <div
                key={game.id}
                className="w-52 flex-shrink-0"
              >
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
                    <div className="flex justify-between items-center text-lg w-full pb-2">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
