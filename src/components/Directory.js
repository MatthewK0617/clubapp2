import React from "react";
import { Link } from "@reach/router";

function Directory() {

    let onSelectHandler = () => {

    }

  return (
    <section class="bg-blue-200 py-12 h-screen">
        <div class="container mx-auto">
            <div>
                <h1 class="text-4xl font-black text-gray-900 pb-6 px-6 md:px-12">
                    test
                </h1>
            </div>
            <div class="flex flex-wrap px-6">
                <div class="w-full lg:w-1/2 md:px-4 lg:px-6 py-5">
                    <div class="bg-white hover:shadow-xl">
                        <div class="">
                            <img src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
                                class="h-56 w-full border-white border-8 hover:opacity-25" />
                        </div>
                        <div class="px-4 py-4 md:px-10">
                            <h1 class="font-bold text-lg">
                                Tech Club
                            </h1>
                            <p class="py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas sapiente
                                voluptate
                                earum natus facilis dolor deserunt dolorum tempora obcaecati consequatur rem, vel
                                distinctio
                                perferendis tempore nemo sequi eos accusantium.
                            </p>
                            <div class="flex flex-wrap pt-8">
                                <div class="w-full md:w-1/3 text-sm font-medium">
                                    {/* NOVEMBER 1,2019 */}
                                </div>
                                <div class="2/3">
                                    <div class="text-sm font-medium">
                                        SHARE:
                                        <a href="" class="text-blue-700 px-1 ">
                                            FACEBOOK
                                        </a>
                                        <a href="" class="text-blue-500 px-1 ">
                                            TWITTER
                                        </a>
                                        <a href="" class="text-red-600 px-1 ">
                                            GOOGLE+
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2  md:px-4 lg:px-6 py-5">
                    <div class="bg-white hover:shadow-xl">
                        <div class="">
                            <img src="https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""
                                class="h-56 w-full border-white border-8 hover:opacity-25" />
                        </div>
                        <div class="px-4 py-4 md:px-10">
                            <h1 class="font-bold text-lg">
                                Writer's Block
                            </h1>
                            <p class="py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas sapiente
                                voluptate
                                earum natus facilis dolor deserunt dolorum tempora obcaecati consequatur rem, vel
                                distinctio
                                perferendis tempore nemo sequi eos accusantium.
                            </p>
                            <div class="flex flex-wrap pt-8">
                                <div class="w-full md:w-1/3 text-sm font-medium">
                                    {/* NOVEMBER 1,2019 */}
                                </div>
                                <div class="md:2/3">
                                    <div class="text-sm font-medium">
                                        SHARE:
                                        <a href="" class="text-blue-700 px-1 ">
                                            FACEBOOK
                                        </a>
                                        <a href="" class="text-blue-500 px-1 ">
                                            TWITTER
                                        </a>
                                        <a href="" class="text-red-600 px-1 ">
                                            GOOGLE+
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
}

export default Directory;
