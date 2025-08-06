import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/dashboard">
        <Button>Access Dashboard</Button>
      </Link>
    </main>
  );
}
