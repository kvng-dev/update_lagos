import UnderConstruction from "@/components/under-construction";

export default function NotFoundPage() {
  return (
    <UnderConstruction
      title="Oops! Page Not Found"
      message="Looks like this part of the site is still cooking. 🍳 Come back soon!"
      buttonText="Take Me Home"
      redirectUrl="/"
    />
  );
}
