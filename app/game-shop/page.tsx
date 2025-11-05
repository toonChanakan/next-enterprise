import { Metadata } from "next"
import { Button } from "@/components/components/ui/button";
import { Card, CardTitle } from "@/components/components/ui/card";
import { CircleArrowLeft, CircleArrowRight, ShoppingBagIcon, Star, BookmarkIcon, Search } from "lucide-react"
import { Toggle } from "@/components/components/ui/toggle";

export default function Web() {
  return (
    <div className="space-y-8">
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
        <Card className="w-full h-full p-8">
          <div className="space-y-2">
            <h1 className="w-42 h-26 flex justify-center items-center border">logo</h1>
            <h2 className="font-bold">AVAILABLE PER-ORDER</h2>
            <h3 className="w-80">Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal,
              sacrifice and survival, nad the lure of absolute power.</h3>
            <div className="flex gap-4 mt-4">
              <Button>PRE-ORDER NOW</Button>
              <Button>TRAILER</Button>
            </div>
          </div>
        </Card>
        <div className="h-full w-80 ml-8 space-y-4">
          <Card>
            <div className="flex border h-full">
              <div className="border">picture</div>
              <p>game1</p>
            </div>
          </Card>
          <Card>
            game2
          </Card>
          <Card>
            game3
          </Card>
          <Card>
            game4
          </Card>
        </div>
      </div>
      <div className="my-8">
        <div className="flex justify-between items-center space-y-6">
          <p className="text-xl font-bold">
            Game genresS
          </p>
          <div className="flex flex-col-2 gap-5">
            <CircleArrowLeft />
            <CircleArrowRight />
          </div>
        </div>
        <Button>Buy Now</Button>
      </div>
      <div>
        <div className="flex justify-between items-center space-y-6">
          <p className="text-xl font-bold">
            Top 20 free games
          </p>
          <div className="flex flex-col-2 gap-5">
            <CircleArrowLeft />
            <CircleArrowRight />
          </div>
        </div>
        <div className="w-50">
          <div className="h-60 flex flex-col justify-between border rounded-lg overflow-hidden">
            <div className="h-full overflow-hidden flex justify-end items-start">
              <div className="w-8 h-8 border rounded-sm m-2 flex justify-center items-center">
                <Toggle className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500">
                  <BookmarkIcon />
                </Toggle>
              </div>
            </div>
            <div className="bg-gray-200 h-26 py-2 px-4 rounded-lg space-y-2">
              <CardTitle className="text-sm">Game Title</CardTitle>
              <div className="flex justify-between items-center text-lg w-full pb-2">
                price
                <div className="flex gap-2">
                  <p>x</p>
                  <p>w</p>
                  <p>p</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
