function Offer() {
  return (
    <>
      <div
        id="services"
        className="main bg-[#25262F] flex flex-col items-center justify-center p-8 lg:p-16 w-auto"
      >
        <div className="text-center">
          <h1 className="font-semibold text-lg lg:text-xl text-[#80DB66]">
            SERVICES
          </h1>
        </div>
        <div className="text-center mt-2">
          <h3 className="text-white text-3xl lg:text-5xl font-semibold">
            What I Offer
          </h3>
        </div>
        <div className="sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 py-5">
          <div className="bg-white flex flex-col sm:flex-row gap-5 items-center rounded-xl px-5 py-5 lg:px-10 lg:py-10">
            <div>
              <img src="/o2.png" alt="Web Development" />
            </div>
            <div>
              <h1 className="font-semibold text-lg lg:text-xl">
                Web Development
              </h1>
              <p className="text-sm lg:text-md">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col sm:flex-row gap-5 items-center rounded-xl px-5 py-5 lg:px-10 lg:py-10">
            <div>
              <img src="/o3.png" alt="Software Development" />
            </div>
            <div>
              <h1 className="font-semibold text-lg lg:text-xl">
                Software Development
              </h1>
              <p className="text-sm lg:text-md">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col sm:flex-row gap-5 items-center rounded-xl px-5 py-5 lg:px-10 lg:py-10">
            <div>
              <img src="/o4.png" alt="System Development" />
            </div>
            <div>
              <h1 className="font-semibold text-lg lg:text-xl">
                System Development
              </h1>
              <p className="text-sm lg:text-md">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col sm:flex-row gap-5 items-center rounded-xl px-5 py-5 lg:px-10 lg:py-10">
            <div>
              <img src="/o1.png" alt="Security Analysis" />
            </div>
            <div>
              <h1 className="font-semibold text-lg lg:text-xl">
                Security Analysis
              </h1>
              <p className="text-sm lg:text-md">
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
