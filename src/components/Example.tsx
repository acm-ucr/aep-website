const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="bg-aep-blue-400 flex w-2/3 flex-col items-center gap-10 rounded-xl p-10">
      <div className="bg-aep-red-100 w-1/2 p-5 text-center text-2xl">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-aep-red-200 w-full rounded-full p-5 text-center text-2xl">
          {props.text2}
        </div>
        <div className="bg-aep-red-200 w-full rounded-full p-5 text-center text-2xl">
          {props.text3}
        </div>
      </div>
      <div className="bg-aep-red-400 w-1/2 p-5 text-center text-2xl text-white">
        {props.text4}
      </div>
    </div>
  );
};
export default Example;
