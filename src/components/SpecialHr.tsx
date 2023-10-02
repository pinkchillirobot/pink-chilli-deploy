export const SpecialHr = ({ gapStyles = [] }: { gapStyles?: string[] }) => {
  return (
    <div className="p-2 bg-white z-[2] relative">
      {gapStyles.map((style, n) => (
        <b
          key={`block_${n}`}
          className={`${style} bg-white  w-4 h-4 absolute `}
        />
      ))}
      <hr className="bg-[transparent] border-0 border-chilli-grey border-t" />
    </div>
  );
};
