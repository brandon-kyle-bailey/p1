import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { Clock } from "lucide-react";

type Activity = {
  incomingActivityId: string;
  accountId: string;
  userId: string | null;
  appId: string;
  source: string;
  description: string;
  startTime: string;
  endTime: string;
  duration: number;
  createdBy: string;
  updatedBy: string | null;
  deletedBy: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  id: string;
};

export default async function Page() {
  const session = await auth();
  if (!session?.user?.accessToken || !session.user.accountId) {
    return <p>Not authenticated</p>;
  }

  const res = await fetch(
    `http://localhost:3000/api/core/v1/activities?sortField=startTime&sortOrder=desc`,
    {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch activities");
  }

  const response = await res.json();
  const activities: Activity[] = response.data;

  if (!activities || activities.length === 0)
    return <p className="text-muted-foreground">No activities found.</p>;

  return (
    <div className="p-6 space-y-4">
      {activities.map((activity) => (
        <Card key={activity.id}>
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle>{activity.description}</CardTitle>
              <CardDescription>{activity.source}</CardDescription>
            </div>
            <Badge variant={activity.deletedBy ? "destructive" : "secondary"}>
              {activity.deletedBy ? "Deleted" : "Active"}
            </Badge>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p>
                <span className="font-medium">Activity ID:</span>{" "}
                {activity.incomingActivityId}
              </p>
              <p>
                <span className="font-medium">Account ID:</span>{" "}
                {activity.accountId}
              </p>
              <p>
                <span className="font-medium">User ID:</span>{" "}
                {activity.userId ?? (
                  <Badge variant="secondary">Unclaimed</Badge>
                )}
              </p>
              <p>
                <span className="font-medium">App ID:</span> {activity.appId}
              </p>
            </div>
            <div className="space-y-1">
              <p>
                <span className="font-medium">Created By:</span>{" "}
                {activity.createdBy}
              </p>
              <p>
                <span className="font-medium">Updated By:</span>{" "}
                {activity.updatedBy ?? <Badge variant="secondary">N/A</Badge>}
              </p>
              <p>
                <span className="font-medium">Start Time:</span>{" "}
                {new Date(activity.startTime).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">End Time:</span>{" "}
                {new Date(activity.endTime).toLocaleString()}
              </p>
              <p className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Duration: {activity.duration}ms</span>
              </p>
            </div>
            <div className="col-span-full">
              <p>
                <span className="font-medium">Deleted At:</span>{" "}
                {activity.deletedAt ?? (
                  <Badge variant="secondary">Active</Badge>
                )}
              </p>
              <p>
                <span className="font-medium">Created At:</span>{" "}
                {new Date(activity.createdAt).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Updated At:</span>{" "}
                {new Date(activity.updatedAt).toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
