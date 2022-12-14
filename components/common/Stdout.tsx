export default function Stdout({ page }: { page: string }) {
  return (
    <div className="font-blue lg:text=2xl flex flex-col py-1 text-lg text-foreground md:text-xl lg:text-2xl">
      <p>
        <span className="text-red">[*]</span> Initializing page renderer: v0.1
      </p>
      <p>
        <span className="text-red">[*]</span> Loaded page: {page}
      </p>
      <p className="cursor-box">
        <span className="text-red">[*]</span> Rendering requested page...
        <em></em>
      </p>
    </div>
  );
}
