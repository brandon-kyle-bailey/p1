import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ResetPasswordForm() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="m@example.com" required />
      <Button type="submit" className="w-full">
        Reset my password
      </Button>
    </form>
  );
}
