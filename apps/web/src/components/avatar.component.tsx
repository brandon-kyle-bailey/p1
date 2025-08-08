import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

export default function AvatarComponent() {
  const { data: session } = useSession();
  if (!session) return null;
  return (
    <Avatar>
      <AvatarImage src={session.user.image!} alt={session.user.name!} />
      <AvatarFallback>SN</AvatarFallback>
    </Avatar>
  );
}
