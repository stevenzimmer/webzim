import { ReactNode } from "react";
import Meta from "./meta";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  // const { data: session, status } = useSession();
  // const { SignInModal, setShowSignInModal } = useSignInModal();
  // const scrolled = useScroll(50);

  return (
    <>
      <Meta {...meta} />
      {/* <SignInModal /> */}
      <div className=" " >
      {/* <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Logo icon"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Web Dev Zim</p>
          </Link>
          <div>
            <AnimatePresence>
              {!session && status !== "loading" ? (
                <motion.button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => setShowSignInModal(true)}
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                  Sign In
                </motion.button>
              ) : (
                <UserDropdown />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div> */}
      <div className="flex w-screen flex-col items-center justify-center py-12">
        {children}
      </div>
     
    </div>
  
    </>
  );
}
