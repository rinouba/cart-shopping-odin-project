import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center text-red-500 text-4xl">
      <h1>Oh no, this route doest exist!</h1>
      <Link to="/" className="hover:scale-110">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;