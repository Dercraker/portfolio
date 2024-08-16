export const Noise = () => {
  return (
    <div
      className="absolute inset-0 size-full scale-[1.2] opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    ></div>
  );
};
