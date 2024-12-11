// import React from "react";

// const Multibtns = () => {
//   return (
//     <div className="grid grid-cols-3 gap-8 w-20 m-5 h-20 ">
//       <button className="bg-blue-500  w-20 "> Join Telegram </button>
//       <button className="border-s-white w-full bg-white text-white">
//         Hindi Movies
//       </button>
//       <button className="bg-white w-full"> Punjabi Movies </button>
//       <button className="bg-white w-20 "> 480p Movies </button>
//       <button className="bg-white w-20 "> 720p Movies</button>
//       <button className="bg-white w-auto ">1080p Movies </button>
//       <button className="bg-white w-auto ">Netflix</button>
//       <button className="bg-white w-auto ">Hindi Series </button>
//       <button className="bg-white w-auto "> 18+ Movies</button>
//     </div>
//   );
// };

// export default Multibtns;
// import React from "react";

// const Multibtns = () => {
//   return (
//     <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 sm:gap-x-2 lg:gap-x-1 w-full m-5 h-20   ">
//       <button className="bg-blue-500 w-28"> Join Telegram </button>
//       <button className="border-s-white w-28 bg-white text-black">
//         Hindi Movies
//       </button>
//       <button className="bg-white w-28"> Punjabi Movies </button>
//       <button className="bg-white w-28"> 480p Movies </button>
//       <button className="bg-white w-28"> 720p Movies</button>
//       <button className="bg-white w-28">1080p Movies </button>
//       <button className="bg-white w-28">Netflix</button>
//       <button className="bg-white w-28">Hindi Series </button>
//       <button className="bg-white w-28"> 18+ Movies</button>
//     </div>
//   );
// };

// export default Multibtns;

import React from "react";

const Multibtns = () => {
  return (
    <div className="flex flex-col gap-4 mt-5 ">
      <div className="ROw1 flex gap-3  justify-center  ">
        <a href="https://t.me/c/1444399121/23416">
          <button className="bg-blue-500 w-28"> Join Telegram </button>{" "}
        </a>
        <button className="border-s-white w-28 bg-white">Hindi Movies</button>
        <button className="bg-white w-28  "> Punjabi Movies </button>
      </div>
      <div className="ROw2 flex  gap-3 justify-center ">
        <button className="bg-white w-28"> 480p Movies </button>
        <button className="bg-white w-28"> 720p Movies</button>
        <button className="bg-white w-28">1080p Movies </button>
      </div>
      <div className="ROw3 flex gap-3 justify-center flex-wrap ">
        <button className="bg-white w-28  ">Netflix</button>
        <button className="bg-white w-28">Hindi Series </button>
        <button className="bg-white w-40">Hindi Dubbed Series </button>
        <button className="bg-white w-28"> 18+ Movies</button>
      </div>
    </div>
  );
};

export default Multibtns;
