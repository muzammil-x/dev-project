function FunFacts() {
  return (
    <>
      <div className="bg-[#25262F] text-white h-[600px] w-full flex flex-row">
        <div className="w-1/2 px-24 py-32">
          <h1 className="text-[#80DB66] font-semibold ">FUN FACTS</h1>
          <h1 className="text-3xl font-bold mt-3">
            I Develop System that Works
          </h1>
          <p className="mt-6">
            Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini
            hoye khbor nio na sit volup sundori toma amar tumi nili mar tatem
            accusantium dolore.
          </p>
        </div>
        <div className="sm:grid sm:grid-cols-2  w-1/2 px-16 py-36   ">
          <div className=" flex justify-center items-center space-x-4 border-[1px] border-[#bcc7d3] rounded-lg p-7 lg:p-5 lg:m-2  ml-[15px] mr-[15px]  m-2   ">
            <div className="text-[#80DB66] text-[62px] font-bold">12</div>
            <div>
              <div className="text-white text-xl">Years of </div>
              <div className="text-white text-xl"> Experience</div>
            </div>
          </div>

          <div className=" flex justify-center items-center space-x-4    border-[1px] border-[#bcc7d3] rounded-lg p-7 lg:p-5 lg:m-2    ml-[15px] mr-[15px] m-2">
            <div className="text-[#80DB66] text-[62px] font-bold">2k</div>
            <div>
              <div className="text-white text-xl">Total </div>
              <div className="text-white text-xl"> Clients</div>
            </div>
          </div>

          <div className=" flex justify-center items-center space-x-4 border-[1px] border-[#bcc7d3] rounded-lg p-7 lg:p-5 lg:m-2  ml-[15px] mr-[15px] m-2">
            <div className="text-[#80DB66] text-[62px] font-bold">4k</div>
            <div>
              <div className="text-white text-xl">Projects </div>
              <div className="text-white text-xl"> Completed</div>
            </div>
          </div>

          <div className=" flex justify-center items-center space-x-4 border-[1px] border-[#bcc7d3] rounded-lg p-7 lg:p-5 lg:m-2  ml-[15px] mr-[15px] m-2">
            <div className="text-[#80DB66] text-[62px] font-bold">30</div>
            <div>
              <div className="text-white text-xl">Digital </div>
              <div className="text-white text-xl"> Products</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FunFacts;

// function FunFacts() {
//   function StatCard({ number, text }) {
//     return (
//       <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
//         <p className="text-3xl font-bold text-green-600">{number}</p>
//         <p>{text}</p>
//       </div>
//     );
//   }
//   return (
//     <>
//       <div className="main flex  bg-[#25262F]">
//         <div className="">
//           <div className="text-green-600">FUN FACTS </div>
//           <div className="text-white font-bold">
//             I Develop System that Works
//           </div>
//           <div className="text-gray-300">
//             Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini
//             hoye khbor nio na sit volup sundori toma amar tumi nili mar tatem
//             accusantium dolore.
//           </div>
//         </div>
//         <div className="2">
//           <div className="grid grid-cols-2 gap-4">
//             <StatCard number="12" text="Years of Experience" />
//             <StatCard number="2k" text="Total Clients" />
//             <StatCard number="4k" text="Projects Completed" />
//             <StatCard number="30" text="Digital Products" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default FunFacts;
