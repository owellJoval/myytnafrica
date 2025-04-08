import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Music,
  Share2,
  Settings,
  LogOut,
  Bell,
  Search,
  Home,
  Upload,
  PieChart,
  Users,
  DollarSign,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import AnalyticsDashboard from "@/components/admin/AnalyticsDashboard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for recent uploads
  const recentUploads = [
    {
      id: 1,
      title: "Summer Vibes",
      type: "Audio",
      platforms: ["YouTube", "Instagram", "TikTok"],
      date: "2023-09-15",
      status: "Active",
    },
    {
      id: 2,
      title: "Midnight Dreams",
      type: "Video",
      platforms: ["YouTube", "Facebook"],
      date: "2023-09-10",
      status: "Processing",
    },
    {
      id: 3,
      title: "Urban Flow",
      type: "Audio",
      platforms: ["Instagram", "TikTok", "WhatsApp"],
      date: "2023-09-05",
      status: "Active",
    },
    {
      id: 4,
      title: "Rhythm Nation",
      type: "Video",
      platforms: ["YouTube", "Facebook", "Instagram"],
      date: "2023-09-01",
      status: "Active",
    },
  ];

  // Mock data for distribution stats
  const distributionStats = [
    { platform: "YouTube", count: 156, growth: 12 },
    { platform: "Instagram", count: 89, growth: 23 },
    { platform: "TikTok", count: 67, growth: 41 },
    { platform: "Facebook", count: 45, growth: 8 },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 bg-card border-r">
        <div className="flex h-14 items-center border-b px-4">
          <Link to="/" className="flex items-center font-bold text-xl">
            <Music className="h-6 w-6 mr-2" />
            <span>MusicDist</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary bg-primary/10"
            >
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/admin/content"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Music className="h-4 w-4" />
              <span>Content Management</span>
            </Link>
            <Link
              to="/admin/upload"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Upload className="h-4 w-4" />
              <span>Upload Content</span>
            </Link>
            <Link
              to="/admin/analytics"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <BarChart3 className="h-4 w-4" />
              <span>Analytics</span>
            </Link>
            <Link
              to="/admin/distribution"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Share2 className="h-4 w-4" />
              <span>Distribution Center</span>
            </Link>
            <Link
              to="/admin/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Settings className="h-4 w-4" />
              <span>Account Settings</span>
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4 border-t">
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => console.log("Logout")}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 md:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="flex h-14 items-center justify-between px-4">
            <div className="hidden md:block">
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-[200px] pl-8 md:w-[260px] rounded-full bg-muted"
                />
              </div>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=artist123"
                        alt="Artist"
                      />
                      <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="grid gap-6">
            {/* Dashboard Tabs */}
            <Tabs
              defaultValue="overview"
              className="space-y-4"
              onValueChange={setActiveTab}
            >
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="distribution">Distribution</TabsTrigger>
              </TabsList>

              {/* Overview Tab Content */}
              <TabsContent value="overview" className="space-y-4">
                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Uploads
                      </CardTitle>
                      <Music className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">357</div>
                      <p className="text-xs text-muted-foreground">
                        +24 from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Earnings
                      </CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$12,543.89</div>
                      <p className="text-xs text-muted-foreground">
                        +12.5% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Plays
                      </CardTitle>
                      <PieChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1.2M</div>
                      <p className="text-xs text-muted-foreground">
                        +18.2% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Active Listeners
                      </CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">573K</div>
                      <p className="text-xs text-muted-foreground">
                        +7.4% from last month
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Uploads */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Uploads</CardTitle>
                    <CardDescription>
                      Your latest content uploads and their status
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentUploads.map((upload) => (
                        <div
                          key={upload.id}
                          className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                        >
                          <div className="space-y-1">
                            <p className="font-medium">{upload.title}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span className="mr-2">{upload.type}</span>
                              <span>•</span>
                              <span className="mx-2">{upload.date}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {upload.platforms.map((platform) => (
                                <Badge
                                  key={platform}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {platform}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Badge
                            variant={
                              upload.status === "Active"
                                ? "default"
                                : "secondary"
                            }
                            className="ml-auto"
                          >
                            {upload.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Distribution Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle>Distribution by Platform</CardTitle>
                    <CardDescription>
                      Your content distribution across platforms
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {distributionStats.map((stat) => (
                        <div key={stat.platform} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">
                                {stat.platform}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {stat.count} uploads
                              </Badge>
                            </div>
                            <span className="text-sm text-green-500">
                              +{stat.growth}%
                            </span>
                          </div>
                          <Progress value={stat.count / 2} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Analytics Tab Content */}
              <TabsContent value="analytics">
                <AnalyticsDashboard />
              </TabsContent>

              {/* Content Tab Content */}
              <TabsContent value="content">
                <Card>
                  <CardHeader>
                    <CardTitle>Content Management</CardTitle>
                    <CardDescription>
                      Manage your uploaded content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Content management interface will be displayed here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Distribution Tab Content */}
              <TabsContent value="distribution">
                <Card>
                  <CardHeader>
                    <CardTitle>Distribution Center</CardTitle>
                    <CardDescription>
                      Manage your content distribution
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Distribution management interface will be displayed here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

// Menu component for mobile navigation
const Menu = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
};
