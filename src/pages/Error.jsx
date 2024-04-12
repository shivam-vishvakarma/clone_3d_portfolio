import { Link } from "react-router-dom"
export default function Error() {
    return (
      <div className="flex flex-col items-center justify-center h-[90vh] space-y-4">
        <h1 className="text-6xl font-bold text-center text-red-500">404</h1>
        <h2 className="text-5xl font-bold text-center">Page Not Found</h2>
        <p className="text-2xl w-full md:w-4/5 lg:w-3/5 text-center px-10 dark:text-white">
          Looks like our web developers are playing hide and seek with this
          page. Don't worry, we'll track it down faster than your cat finds the
          sunniest spot in the house!
        </p>
        <Link to="/" className="text-3xl font-bold text-center text-blue-500">
          Go Home
        </Link>
      </div>
    );
}   