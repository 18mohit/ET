export default function SuratSection() {
  return (
    <section className="w-full py-20 px-6 sm:px-10 bg-primary">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-20 items-center">

        {/* Left */}
        <div className="border-l border-white/20 pl-7">
          <p className="text-[11px] tracking-[3px] uppercase text-white/50 mb-4 font-normal">
            Surat, India
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white leading-tight font-normal">
            Heart of India&apos;s{" "}
            <em className="italic text-white/70">Textile Industry</em>
          </h2>
        </div>

        {/* Right */}
        <div>
          <p className="text-sm font-light leading-[1.9] text-white/60 mb-5">
            Based in Surat — India&apos;s textile capital — ELEVEN TEN draws from a rich legacy of craftsmanship. Our location gives us direct access to the finest raw materials, skilled artisans, and world-class infrastructure.
          </p>
          <p className="text-sm font-light leading-[1.9] text-white/60 mb-7">
            Every thread we make is part of a larger story: contributing to a global textile ecosystem while upholding quality and sustainability.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Raw Materials", "Skilled Craft", "Sustainability"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] tracking-[1.5px] uppercase text-white/60 px-3 py-1.5 border border-white/20 rounded-full font-normal"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}