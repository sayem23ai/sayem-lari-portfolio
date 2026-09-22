import { Button, Badge } from "../components/ui";
export default function NotFound() {
  return (
    <div className="not-found">
      <Badge tone="yellow">UNKNOWN DESTINATION</Badge>
      <div className="error-code">404</div>
      <h1>This route is uncharted.</h1>
      <p>
        The page you’re looking for doesn’t exist. Let’s get you back to
        familiar ground.
      </p>
      <Button to="/">RETURN HOME</Button>
    </div>
  );
}
