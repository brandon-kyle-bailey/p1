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

type App = {
  id: string;
  name: string;
  description: string;
  category: string;
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

  const res = await fetchWithAuth(`http://localhost:3000/api/core/v1/apps`, {
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  });

  if (!res?.ok) {
    throw new Error("Failed to fetch account");
  }

  const response = await res.json();
  const apps: App[] = response.data;

  if (!apps) return <p>Loading apps...</p>;

  return (
    <div className="p-6 space-y-4">
      {apps.map((app) => {
        return (
          <Card key={app.id}>
            <CardHeader>
              <CardTitle>{app.name}</CardTitle>
              <CardDescription>App details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <span className="font-medium">ID:</span> {app.id}
              </p>
              <p>
                <span className="font-medium">Description:</span>{" "}
                {app.description}
              </p>
              <p>
                <span className="font-medium">Category:</span> {app.category}
              </p>
              <p>
                <span className="font-medium">Created By:</span> {app.createdBy}
              </p>
              <p>
                <span className="font-medium">Updated By:</span> {app.updatedBy}
              </p>
              <p>
                <span className="font-medium">Created At:</span>{" "}
                {new Date(app.createdAt).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Updated At:</span>{" "}
                {new Date(app.updatedAt).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Deleted By:</span>{" "}
                {app.deletedBy ?? <Badge variant="secondary">Active</Badge>}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
