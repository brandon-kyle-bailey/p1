import { auth } from "@/lib/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import fetchWithAuth from "@/hooks/fetch-with-auth.hook";

type Account = {
  id: string;
  name: string;
  createdBy: string;
  updatedBy: string;
  deletedBy: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export default async function Page() {
  const session = await auth();
  if (!session?.user?.accessToken || !session.user.accountId) {
    return <p>Not authenticated</p>;
  }

  const res = await fetchWithAuth(
    `http://localhost:3000/api/core/v1/accounts/${session.user.accountId}`,
    {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    },
  );

  if (!res?.ok) {
    throw new Error("Failed to fetch account");
  }

  const account: Account = await res.json();

  if (!account) return <p>Loading account...</p>;

  return (
    <div className="p-6 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{account.name}</CardTitle>
          <CardDescription>Account details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            <span className="font-medium">ID:</span> {account.id}
          </p>
          <p>
            <span className="font-medium">Created By:</span> {account.createdBy}
          </p>
          <p>
            <span className="font-medium">Updated By:</span> {account.updatedBy}
          </p>
          <p>
            <span className="font-medium">Created At:</span>{" "}
            {new Date(account.createdAt).toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Updated At:</span>{" "}
            {new Date(account.updatedAt).toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Deleted By:</span>{" "}
            {account.deletedBy ?? <Badge variant="secondary">Active</Badge>}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
