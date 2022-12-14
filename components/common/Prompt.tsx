export default function Prompt({ exec }: { exec: string }) {
  return (
    <p className="text-left text-[19px] md:text-xl lg:text-2xl">
      <span className="text-green">guest@</span>
      <span>syed-cf</span>
      <span className="px-1 text-green">{"~>"}</span>
      <span className="px-2 text-blue">{"./" + exec}</span>
    </p>
  );
}
