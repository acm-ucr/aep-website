const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-aep-blue-400 flex w-3/4 items-center gap-1 p-10">
      <div className="bg-aep-blue-200 w-1/2 p-5 text-left">{props.text1}</div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-aep-blue-200 w-full p-5 text-left">
          {props.text2}
        </div>
        <div className="bg-aep-blue-200 w-full p-5 text-left">
          {props.text3}
        </div>
      </div>
    </div>
  );
};
export default Example;
