import Header from "../layout/header";

export default function HomeScreen() {
  return (
    <div className="max-w-[800px]">
      <Header>Dog breed guessing game</Header>

      <div className="my-12 px-12 text-left">
        <p className="mb-2 text-xl font-semibold text-white md:text-2xl">
          Rules:
        </p>
        <ul className="list-disc pl-8 text-white">
          <li>Choose the dog that corresponds to the breed.</li>
          <li>You&apos;ll have 30 seconds to pick as many dog breeds.</li>
          <li>You&apos;re allowed three incorrect guesses.</li>
          <li>
            If you guess three right in a row the timer will increment 5
            seconds.
          </li>
          <li>Your high score will be saved.</li>
        </ul>
      </div>
      <div className="mb-12 px-12 text-left">
        <p className="mb-2 text-xl font-semibold text-white md:text-2xl">
          Built with:
        </p>
        <ul className="list-disc pl-8 text-white">
          <li>React</li>
          <li>TypeScript</li>
          <li>TailwindCSS</li>
          <li>Immer</li>
          <li>dog.ceo API</li>
        </ul>
      </div>
    </div>
  );
}
