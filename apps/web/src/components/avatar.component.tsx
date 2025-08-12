import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "next-auth";

export default function AvatarComponent({ user }: { user: User }) {
  return (
    <Avatar>
      <AvatarImage src={user.image!} alt={user.name!} />
      <AvatarFallback>AV</AvatarFallback>
    </Avatar>
  );
}
