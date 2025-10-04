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

type Device = {
  id: string;
  accountId: string;
  ipAddress: string;
  hostuser: string;
  hostname: string;
  macAddress: string;
  os: string;
  arch: string;
  fingerprint: string;
  userId: string;
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

  const res = await fetchWithAuth(`http://localhost:3000/api/core/v1/devices`, {
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  });

  if (!res?.ok) {
    throw new Error("Failed to fetch account");
  }

  const response = await res.json();
  const devices: Device[] = response.data;

  if (!devices) return <p>Loading devices...</p>;

  return (
    <div className="p-6 space-y-4">
      {devices.map((device) => {
        return (
          <Card key={device.id}>
            <CardHeader>
              <CardTitle>{device.hostuser}</CardTitle>
              <CardDescription>{device.hostname} details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <span className="font-medium">ID:</span> {device.id}
              </p>
              <p>
                <span className="font-medium">IP Address:</span>{" "}
                {device.ipAddress}
              </p>
              <p>
                <span className="font-medium">MAC Address:</span>{" "}
                {device.macAddress}
              </p>
              <p>
                <span className="font-medium">Operating System:</span>{" "}
                {device.os}
              </p>
              <p>
                <span className="font-medium">Architecture:</span> {device.arch}
              </p>
              <p>
                <span className="font-medium">fingerprint:</span>{" "}
                {device.fingerprint}
              </p>
              <p>
                <span className="font-medium">User ID:</span>{" "}
                {device.userId ?? <Badge variant="secondary">Unclaimed</Badge>}
              </p>
              <p>
                <span className="font-medium">Created By:</span>{" "}
                {device.createdBy}
              </p>
              <p>
                <span className="font-medium">Updated By:</span>{" "}
                {device.updatedBy}
              </p>
              <p>
                <span className="font-medium">Created At:</span>{" "}
                {new Date(device.createdAt).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Updated At:</span>{" "}
                {new Date(device.updatedAt).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Deleted By:</span>{" "}
                {device.deletedBy ?? <Badge variant="secondary">Active</Badge>}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
