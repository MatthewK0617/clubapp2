import { React, useContext } from "react";
// import axios from "axios";
import { Link } from "@reach/router";
import Navigation from "./Navigation/Navigation";
import SearchBar from "./SearchBar/SearchBar";
import AppContext from "./AppContext";
// import { Transition } from "react-transition-group";


function Directory() {
  let {index, setIndex, clubs, setClubs} = useContext(AppContext);

  let onClickCard = (i) => {
    index = i;
    setIndex(index);
  };

  const mapDataSet = clubs.map((data, i) => (
    <div key={i} class="z-0 w-full lg:w-1/3 md:px-4 lg:px-6 py-5">
      <div
        class="z-0 bg-snow shadow-xl hover:z-0 hover:opacity-60 active:ring-2 active:ring-majorelleblue cursor-pointer"
        onClick={(_) => {
          onClickCard(i);
        }}
      >
        <Link to="/test">
          <div class="">
            <img
              src="https://media.istockphoto.com/photos/non-profit-picture-id500073478?k=6&m=500073478&s=612x612&w=0&h=COeazXKP3eBv8eLGPhPsOkpt3xcC6qcDBd4KDD2efdE="
              alt=""
              class="h-56 w-full border-white"
            />
          </div>
          <div class="px-4 py-4 md:px-10">
            <h1 class="font-bold text-lg">
              {data.name} {i}
            </h1>
            <p class="py-4">{data.Description}</p>
            <div class="flex flex-wrap pt-8">
              <div class="w-full md:w-1/3 text-sm font-medium">
                {/* NOVEMBER 1,2019 */}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  ));

  return (
    <div class="bg-aliceblue h-auto">
      <div class="z-20 bg-ivory fixed">
        <Navigation />
      </div>
      <div class="z-10 flex h-100 fixed bg-ivory w-full shadow-2xl">
        <div class="inline text-4xl font-black text-gray-900 py-5 px-5 mx-24 md:px-4 flex-1 self-center">
          Clubs
        </div>
        <Link
          to="/signUp"
          class="inline text-4x1 font-normal text-gray-900 py-3 px-5 md:px-4 self-center justify-self-end hover:bg-mbpurple focus:ring-2 focus:ring-blue-600 rounded-lg"
        >
          Sign Up
        </Link>
        <Link
          to="/signIn"
          class="inline text-2x1 font-normal text-gray-500 py-3 px-5 md:px-4 self-center justify-self-end hover:bg-mbpurple focus:ring-2 focus:ring-blue-600 rounded-lg"
        >
          Sign In
        </Link>
      </div>
      <div class="container mx-auto">
        <hr class="w-0.5" />
        <div class="container flex flex-wrap px-6 pt-20">{mapDataSet}</div>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default Directory;
