const Carousel = () => {
  return (
    <div className="flex h-[25rem] w-[60rem] flex-col items-center justify-center bg-gray-300">
      <div className="flex flex-row gap-14">
        <div className="h-[21rem] w-[15rem] rounded-3xl bg-white"></div>
        <div className="flex h-[21rem] w-[23rem] items-center justify-center rounded-3xl bg-white text-3xl text-black">
          {" "}
          Carousel
        </div>
        <div className="h-[21rem] w-[15rem] rounded-3xl bg-white"></div>
      </div>
    </div>
  );
};

export default Carousel;
