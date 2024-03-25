import Nav from "@/components/layout/Nav";
import { Icons } from "@/components/icons";
import SearchBar from "@/components/search/SearchBar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden border-b border-slate-200 ">
      <Icons.SearchBg />
      <Nav />
      <div className="container relative">
        <div className="px-6 py-20 ">
          <div className="flex h-full w-full flex-col items-center gap-5">
            <Icons.Sparkles className=" h-16 w-16" />
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Magic Search
            </h1>
            <p className="max-w-xl text-center text-lg text-slate-100 ">
              Search for your favorite Apple products and discover new ones.
            </p>
          </div>
          <div className="mx-auto flex w-full max-w-2xl flex-col pt-16">
            <SearchBar />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
