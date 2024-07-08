/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, BookmarkIcon } from "@radix-ui/react-icons";
import { useTopAiring } from "../hooks/useTopAiring";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

const Homepage = () => {
  const { data: topAiring, isLoading } = useTopAiring();

  return (
    <>
      <div className="mt-[-5rem] relative  min-h-screen w-auto">
        <video
          autoPlay
          loop
          muted
          className="z-10  min-h-screen min-w-screen overflow-y-hidden brightness-[.25]	"
        >
          <source
            className="flamer w-screen"
            src="videoplayback.mp4"
            type="video/mp4"
          />
        </video>
        <div className="z-80 absolute left-0 inset-60 flex flex-col justify-left ml-4">
          <div className="text-foreground text-3xl md:text-6xl font-bold text-left uppercase">
            One Piece
          </div>
          <div className="font-light text-white my-4 md:text-md dark:text-neutral-200 py-4 inline-block text-foreground rounded-lg bg-[#423428]/70 px-3 py-1 text-sm dark:bg-gray-800 w-1/2">
            The story follows Monkey D. Luffy, a young pirate with the ability
            to stretch his body like rubber, as he sets out to find the
            legendary treasure "One Piece" and become the Pirate King, inspired
            by his hero "Red-Haired" Shanks. Along his journey, he assembles a
            diverse crew known as the Straw Hat Pirates.
          </div>

          <div className="flex justify-left items-center gap-4">
            <Button
              variant={"expandIcon"}
              iconPlacement="right"
              Icon={ArrowRightIcon}
              className="bg-foreground dark:bg-white rounded-full w-fit text-black dark:text-black px-4 py-2"
            >
              Watch One Piece
            </Button>

            <Button
              variant={"expandIcon"}
              iconPlacement="right"
              Icon={BookmarkIcon}
              className="bg-orange-900 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
            >
              To Watch Later
            </Button>
          </div>
        </div>
      </div>

      {/* special */}

      <div className="flex flex-col ml-7 relative">
        <section className="py-4 md:py-16 lg:py-8">
          <div className="container px-4 sm:px-6 md:px-8">
            <h1 className="text-foreground text-xl md:text-2xl font-bold mt-[-12rem] mb-4">
              Special for you
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="relative group h-full">
                  <img
                    src="/images/aot.png"
                    alt="Movie Poster"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover brightness-90 group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <iframe
                        className="w-full h-full object-cover"
                        src="https://www.youtube-nocookie.com/embed/E7WytLM2KvY?controls=0&autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h2 className="text-2xl font-bold text-white">
                      Attack on Titan
                    </h2>
                    <p className="text-gray-300 mt-2">
                      An anime series made by Toriyama
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="relative group h-full">
                  <img
                    src="/images/naruto.png"
                    alt="Movie Poster"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover brightness-90 group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <iframe
                        className="w-full h-full object-cover"
                        src="https://www.youtube-nocookie.com/embed/zVgKnfN9i34?controls=0&autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h2 className="text-2xl font-bold text-white">
                      Naruto Shippuden{" "}
                    </h2>
                    <p className="text-gray-300 mt-2">
                      An anime series made by Toriyama
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="relative group h-full">
                  <img
                    src="/images/onepiece.png"
                    alt="Movie Poster"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover brightness-90 group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <iframe
                        className="w-full h-full object-cover"
                        src="https://www.youtube-nocookie.com/embed/eacDqj2C-IA?controls=0&autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h2 className="text-2xl font-bold text-white">
                      One Piece{" "}
                    </h2>
                    <p className="text-gray-300 mt-2">
                      An anime series made by Toriyama
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* top airing */}
      <div className="flex flex-col ml-7 relative">
        <section className="py-4 md:py-16 lg:py-8">
          <div className="container px-4 sm:px-6 md:px-8">
            <h1 className="text-foreground text-xl md:text-2xl font-bold mb-4">
              Top Airing
            </h1>
            {isLoading ? (
              <>Loading Anime...</>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {topAiring?.data.results.map(
                  (anime: {
                    image: string | undefined;
                    title:
                      | string
                      | number
                      | boolean
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined;
                  }) => (
                    <>
                      <div className="relative w-full max-w-2xl mx-auto">
                        <div className="relative group h-full">
                          <img
                            src={anime.image}
                            alt="Movie Poster"
                            width={1200}
                            height={600}
                            className="w-full h-full object-cover brightness-90 group-hover:brightness-75 transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="relative w-full h-full rounded-lg overflow-hidden">
                              <iframe
                                className="w-full h-full object-cover"
                                src="https://www.youtube-nocookie.com/embed/E7WytLM2KvY?controls=0&autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              ></iframe>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h2 className="text-2xl font-bold text-white">
                              {anime.title}
                            </h2>
                            {/* <p className="text-gray-300 mt-2">
                        An anime series made by Toriyama
                      </p> */}
                          </div>
                        </div>
                      </div>
                    </>
                  )
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};
export default Homepage;
