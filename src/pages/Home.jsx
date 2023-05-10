const Home = () => {
  return (
    <>
      <section className="py-5">
        <div className="flex flex-col px-10 gap-3 justify-center max-w-lg m-auto sm:flex-row sm:flex-wrap sm:max-w-2xl  lg:justify-normal lg:m-0 lg:w-full lg:max-w-none">
          <div className="h-60 sm:h-96 lg:h-[800px] relative">
            <div className="absolute top-0 left-0 w-full h-full text-white">
              <h2>Shop Weighlifting Equipment</h2>
            </div>
            <img
              className="w-full h-full object-cover"
              src="images/workout.avif"
              alt="Woman working out"
            />
          </div>
          <div className="h-60 sm:w-[48%] relative">
            <div className="absolute top-0 left-0 w-full h-full text-white">
              <h1>Shop Bands</h1>
            </div>
            <img
              className="w-full h-full object-cover"
              src="images/bands.avif"
              alt="Woman working out"
            />
          </div>
          <div className="h-60 sm:w-[48%] relative">
            <div className="absolute top-0 left-0 w-full h-full text-white">
              <h2>Shop Accessories</h2>
            </div>
            <img
              className="w-full h-full object-cover"
              src="images/equipment.avif"
              alt="Woman working out"
            />
          </div>
          <div className="h-60 sm:w-[48%] relative">
            <div className="absolute top-0 left-0 w-full h-full text-white">
              <h1>Shop Stretching Equipment</h1>
            </div>
            <img
              className="w-full h-full object-cover"
              src="images/stretching.avif"
              alt="Woman working out"
            />
          </div>
          <div className="h-60 sm:w-[48%] relative">
            <div className="absolute top-0 left-0 w-full h-full text-white">
              <h1>Shop Medical Equipment</h1>
            </div>
            <img
              className="w-full h-full object-cover"
              src="images/medical.avif"
              alt="Woman working out"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
