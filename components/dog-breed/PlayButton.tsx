export default function PlayButton({
  dispatch,
  children,
}: {
  dispatch: React.Dispatch<any>;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        className="w-full rounded-lg bg-pink-300 px-24 py-6 text-2xl font-semibold text-white transition duration-200 hover:bg-pink-200"
        onClick={() => {
          dispatch({
            type: "startPlaying",
          });
        }}
      >
        {children}
      </button>
    </div>
  );
}
