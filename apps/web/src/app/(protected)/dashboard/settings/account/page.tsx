"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  AlertTriangle,
  Bell,
  CreditCard,
  Key,
  Shield,
  User,
  Users,
  Zap,
} from "lucide-react";
import DashboardHeaderComponent from "../../../../../components/dashboard/header.component";

export default function Page() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
    security: true,
  });

  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <>
      {/* Header */}
      <DashboardHeaderComponent
        title={"Account Settings"}
        description={"Manage your account preferences and security settings"}
      />

      <Tabs defaultValue="profile" className="space-y-4 sm:space-y-6">
        <div className="w-full overflow-x-auto">
          <TabsList className="sm:h-fit inline-flex items-center justify-start rounded-md bg-muted p-1 text-muted-foreground min-w-full sm:min-w-0">
            <TabsTrigger
              value="profile"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 whitespace-nowrap"
            >
              <User className="h-4 w-4" />
              <span className="text-xs sm:text-sm">Profile</span>
            </TabsTrigger>
            <TabsTrigger
              value="billing"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 whitespace-nowrap"
            >
              <CreditCard className="h-4 w-4" />
              <span className="text-xs sm:text-sm">Billing</span>
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 whitespace-nowrap"
            >
              <Shield className="h-4 w-4" />
              <span className="text-xs sm:text-sm">Security</span>
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 whitespace-nowrap"
            >
              <Bell className="h-4 w-4" />
              <span className="text-xs sm:text-sm">Notifications</span>
            </TabsTrigger>
            <TabsTrigger
              value="team"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 whitespace-nowrap"
            >
              <Users className="h-4 w-4" />
              <span className="text-xs sm:text-sm">Team</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">
                Profile Information
              </CardTitle>
              <CardDescription className="text-sm">
                Update your personal information and profile settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4">
                <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
                  <AvatarImage src="/professional-headshot.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-2 text-center sm:text-left">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto bg-transparent"
                  >
                    Change Avatar
                  </Button>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    JPG, GIF or PNG. 1MB max.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john.doe@company.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">
                  Company
                </Label>
                <Input id="company" defaultValue="Acme Corp" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="text-sm font-medium">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  defaultValue="Product manager passionate about building great user experiences."
                  className="min-h-[80px] sm:min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone" className="text-sm font-medium">
                  Timezone
                </Label>
                <Select defaultValue="utc-8">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                    <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                    <SelectItem value="utc+0">UTC</SelectItem>
                    <SelectItem value="utc+1">
                      Central European Time (UTC+1)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full sm:w-auto">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Zap className="h-5 w-5" />
                Current Plan
              </CardTitle>
              <CardDescription className="text-sm">
                Manage your subscription and billing information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3 sm:gap-0">
                <div>
                  <h3 className="font-semibold">Pro Plan</h3>
                  <p className="text-sm text-muted-foreground">
                    $29/month • Billed monthly
                  </p>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Plan Features</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-500 rounded-full flex-shrink-0" />
                    Unlimited projects
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-500 rounded-full flex-shrink-0" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-500 rounded-full flex-shrink-0" />
                    Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-green-500 rounded-full flex-shrink-0" />
                    Team collaboration
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent"
                >
                  Change Plan
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent"
                >
                  View Usage
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">
                Payment Method
              </CardTitle>
              <CardDescription className="text-sm">
                Update your payment information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-3 sm:gap-0">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-muted-foreground">
                      Expires 12/25
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto bg-transparent"
                >
                  Update
                </Button>
              </div>

              <Button
                variant="outline"
                className="w-full sm:w-auto bg-transparent"
              >
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">
                Billing History
              </CardTitle>
              <CardDescription className="text-sm">
                Download your previous invoices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { date: "Dec 1, 2024", amount: "$29.00", status: "Paid" },
                  { date: "Nov 1, 2024", amount: "$29.00", status: "Paid" },
                  { date: "Oct 1, 2024", amount: "$29.00", status: "Paid" },
                ].map((invoice, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-2 gap-2 sm:gap-0"
                  >
                    <div>
                      <p className="font-medium">{invoice.date}</p>
                      <p className="text-sm text-muted-foreground">
                        {invoice.amount}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-green-600">
                        {invoice.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">Password</CardTitle>
              <CardDescription className="text-sm">
                Update your password to keep your account secure
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="currentPassword"
                  className="text-sm font-medium"
                >
                  Current Password
                </Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword" className="text-sm font-medium">
                  New Password
                </Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium"
                >
                  Confirm New Password
                </Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <Button className="w-full sm:w-auto">Update Password</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">
                Two-Factor Authentication
              </CardTitle>
              <CardDescription className="text-sm">
                Add an extra layer of security to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <div className="space-y-1">
                  <p className="font-medium">Authenticator App</p>
                  <p className="text-sm text-muted-foreground">
                    Use an authenticator app to generate verification codes
                  </p>
                </div>
                <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
              </div>

              {twoFactor && (
                <div className="p-4 border rounded-lg bg-muted/50">
                  <div className="flex flex-col sm:flex-row items-start gap-3">
                    <Key className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <p className="font-medium">Setup Required</p>
                      <p className="text-sm text-muted-foreground">
                        Scan the QR code with your authenticator app to complete
                        setup.
                      </p>
                      <Button size="sm" className="w-full sm:w-auto">
                        Setup Authenticator
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">
                Active Sessions
              </CardTitle>
              <CardDescription className="text-sm">
                Manage your active sessions across devices
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  device: "MacBook Pro",
                  location: "San Francisco, CA",
                  current: true,
                },
                {
                  device: "iPhone 15",
                  location: "San Francisco, CA",
                  current: false,
                },
                {
                  device: "Chrome on Windows",
                  location: "New York, NY",
                  current: false,
                },
              ].map((session, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg gap-3 sm:gap-0"
                >
                  <div className="flex-1">
                    <p className="font-medium flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span>{session.device}</span>
                      {session.current && (
                        <Badge variant="secondary" className="text-xs w-fit">
                          Current
                        </Badge>
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {session.location}
                    </p>
                  </div>
                  {!session.current && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto bg-transparent"
                    >
                      Revoke
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">
                Email Notifications
              </CardTitle>
              <CardDescription className="text-sm">
                Choose what email notifications you'd like to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                  <div className="space-y-1 flex-1">
                    <p className="font-medium">Account Activity</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified about important account changes
                    </p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, email: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                  <div className="space-y-1 flex-1">
                    <p className="font-medium">Security Alerts</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified about security-related events
                    </p>
                  </div>
                  <Switch
                    checked={notifications.security}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({
                        ...prev,
                        security: checked,
                      }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                  <div className="space-y-1 flex-1">
                    <p className="font-medium">Marketing Updates</p>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about new features and promotions
                    </p>
                  </div>
                  <Switch
                    checked={notifications.marketing}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({
                        ...prev,
                        marketing: checked,
                      }))
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">
                Push Notifications
              </CardTitle>
              <CardDescription className="text-sm">
                Manage push notifications for your devices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <div className="space-y-1 flex-1">
                  <p className="font-medium">Browser Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications in your browser
                  </p>
                </div>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={(checked) =>
                    setNotifications((prev) => ({ ...prev, push: checked }))
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">Team Members</CardTitle>
              <CardDescription className="text-sm">
                Manage your team members and their permissions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input placeholder="Enter email address" className="flex-1" />
                <Select defaultValue="member">
                  <SelectTrigger className="w-full sm:w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="w-full sm:w-auto">Invite</Button>
              </div>

              <div className="space-y-3">
                {[
                  {
                    name: "John Doe",
                    email: "john.doe@company.com",
                    role: "Owner",
                    avatar: "JD",
                  },
                  {
                    name: "Jane Smith",
                    email: "jane.smith@company.com",
                    role: "Admin",
                    avatar: "JS",
                  },
                  {
                    name: "Mike Johnson",
                    email: "mike.johnson@company.com",
                    role: "Member",
                    avatar: "MJ",
                  },
                ].map((member, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg gap-3 sm:gap-0"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <Avatar className="h-10 w-10 flex-shrink-0">
                        <AvatarFallback>{member.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium truncate">{member.name}</p>
                        <p className="text-sm text-muted-foreground truncate">
                          {member.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 justify-between sm:justify-end">
                      <Badge variant="outline">{member.role}</Badge>
                      {member.role !== "Owner" && (
                        <Button variant="ghost" size="sm">
                          Remove
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Danger Zone
              </CardTitle>
              <CardDescription className="text-sm">
                Irreversible and destructive actions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                <h4 className="font-medium text-red-900 mb-2">
                  Delete Account
                </h4>
                <p className="text-sm text-red-700 mb-4">
                  Once you delete your account, there is no going back. Please
                  be certain.
                </p>
                <Button
                  variant="destructive"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
