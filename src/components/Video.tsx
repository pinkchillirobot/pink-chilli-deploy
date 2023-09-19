export const Video = () => {
  return (
    <section
      id="video"
      className="relative w-full py-2 border-chilli-grey border-x px-4"
    >
      <iframe
        src="https://www.youtube.com/embed/HO6cbtdmkIc?si=vxEyMSeh37rMXGGL"
        className="w-full aspect-video"
        title="Video"
        frameBorder="0"
      />
    </section>
  );
};
