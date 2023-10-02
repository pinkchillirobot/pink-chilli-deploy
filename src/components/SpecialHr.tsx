export const SpecialHr = ({ gapStyles = [] }: { gapStyles?: string[] }) => {
  return (
    <div className="p-2 bg-white z-[2] relative">
      {gapStyles.map((style, n) => (
        <div
          key={`block_${n}`}
          className={`${style} absolute top-0 left-0 w-full h-full grid h-4 px-4 `}
        >
          <div className="col-start-2 col-span-3 text-center">
            <b className={"inline-block w-4 h-4 bg-white"} />
          </div>
        </div>
      ))}
      <hr className="bg-[transparent] border-0 border-chilli-grey border-t" />
    </div>
  );
};
