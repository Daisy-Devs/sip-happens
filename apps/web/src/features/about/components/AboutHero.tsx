
export default function AboutHero() {
  return (
    <div
      className="relative h-[95vh] w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/about/bgAbout.png')" }}
    >
      <div className="absolute inset-0 bg-[#231005]/40 mix-blend-multiply" />
      <div className="relative z-10 text-center max-w-3xl px-4 text-white">
        <h1 className="text-4xl md:text-4xl headline-xl mb-4 tracking-wide">
          Crafting Moments, One Sip at a Time
        </h1>
        <p className="text-sm md:text-base text-stone-200 body-md max-w-xl mx-auto leading-relaxed">
          Welcome to Sip Happens, where passion for exceptional coffee meets a
          warm, welcoming community space.
        </p>
      </div>
    </div>
  );
}
