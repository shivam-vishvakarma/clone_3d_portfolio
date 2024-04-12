import { Link } from "react-router-dom"
export default function Error() {
    return (
      <div className="flex flex-col items-center justify-center h-[90vh] space-y-4">
        <h1 className="text-6xl font-bold text-center text-red-500">404</h1>
        <h2 className="text-5xl font-bold text-center">Page Not Found</h2>
        <Link to="/" className="text-3xl font-bold text-center text-blue-500">
          Go Home
        </Link>
      </div>
    );
}   