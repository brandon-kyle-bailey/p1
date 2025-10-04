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

type Workspace = {
  id: string;
  name: string;
  accountId: string;
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
    `http://localhost:3000/api/core/v1/workspaces`,
    {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    },
  );

  if (!res?.ok) {
    throw new Error("Failed to fetch workspaces");
  }

  const response = await res.json();
  const workspaces: Workspace[] = response.data;

  if (!workspaces) return <p>Loading workspaces...</p>;

  return (
    <div className="p-6 space-y-4">
      {workspaces.map((workspace) => {
        return (
          <Card key={workspace.id}>
            <CardHeader>
              <CardTitle>{workspace.name}</CardTitle>
              <CardDescription>Workspace details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <span className="font-medium">ID:</span> {workspace.id}
              </p>
              <p>
                <span className="font-medium">Account ID</span>{" "}
                {workspace.accountId}
              </p>
              <p>
                <span className="font-medium">Created By:</span>{" "}
                {workspace.createdBy}
              </p>
              <p>
                <span className="font-medium">Updated By:</span>{" "}
                {workspace.updatedBy}
              </p>
              <p>
                <span className="font-medium">Created At:</span>{" "}
                {new Date(workspace.createdAt).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Updated At:</span>{" "}
                {new Date(workspace.updatedAt).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Deleted By:</span>{" "}
                {workspace.deletedBy ?? (
                  <Badge variant="secondary">Active</Badge>
                )}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
