function Offer() {
  return (
    <>
      <div className="main bg-[#25262F] flex flex-col items-center justify-center p-10 w-auto">
        <div>
          <h1 className="font-semibold text-xl text-[#80DB66]">SERVICES</h1>
        </div>
        <div>
          <h3 className="text-white text-5xl font-semibold">What I Offer</h3>
        </div>
        <div className="sm:m-16 boxes grid grid-cols-2 gap-5 py-5">
          <div className=" bg-white flex flex-row gap-5 items-center rounded-xl px-10 py-10">
            <div>
              <img src="/o2.png" alt="" />
            </div>

            <div>
              <h1 className="font-semibold text-xl">Web Development</h1>
              <p className=" text-md">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className=" bg-white flex flex-row gap-5 items-center rounded-xl px-10 py-10">
            <div>
              <img src="/o3.png" alt="" />
            </div>

            <div>
              <h1 className="font-semibold text-xl">Software Development</h1>
              <p className=" text-md">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className=" bg-white flex flex-row gap-5 items-center rounded-xl px-10 py-10">
            <div>
              <img src="/o4.png" alt="" />
            </div>

            <div>
              <h1 className="font-semibold text-xl">System Development</h1>
              <p className=" text-md">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className=" bg-white flex flex-row gap-5 items-center rounded-xl px-10 py-10">
            <div>
              <img src="/o1.png" alt="" />
            </div>

            <div>
              <h1 className="font-semibold text-xl">Security Analysis</h1>
              <p className=" text-md">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Offer;
