import { useRouteError, useNavigate } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}
