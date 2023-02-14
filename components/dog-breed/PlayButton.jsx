export default function PlayButton({ dispatch, children }) {
    return (
        <div>
            <button
                className="bg-pink-300 hover:bg-pink-200 transition duration-200 rounded-lg text-white font-semibold py-6 px-24 w-full text-2xl"
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
