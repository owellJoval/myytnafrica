import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  DownloadIcon,
  BarChart3Icon,
  PieChartIcon,
  LineChartIcon,
  TrendingUpIcon,
  UsersIcon,
  PlayCircleIcon,
  DollarSignIcon,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface PlatformData {
  name: string;
  value: number;
  color: string;
  change: number;
  icon: React.ReactNode;
}

interface EarningsData {
  month: string;
  amount: number;
}

interface EngagementData {
  platform: string;
  views: number;
  likes: number;
  shares: number;
  comments: number;
}

interface DemographicData {
  age: string;
  percentage: number;
}

const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState("30days");

  // Mock data for platform performance
  const platformData: PlatformData[] = [
    {
      name: "YouTube",
      value: 45,
      color: "bg-red-500",
      change: 12,
      icon: <PlayCircleIcon className="h-4 w-4 text-red-500" />,
    },
    {
      name: "Spotify",
      value: 30,
      color: "bg-green-500",
      change: 8,
      icon: <PlayCircleIcon className="h-4 w-4 text-green-500" />,
    },
    {
      name: "Instagram",
      value: 15,
      color: "bg-purple-500",
      change: -3,
      icon: <UsersIcon className="h-4 w-4 text-purple-500" />,
    },
    {
      name: "TikTok",
      value: 10,
      color: "bg-blue-500",
      change: 20,
      icon: <PlayCircleIcon className="h-4 w-4 text-blue-500" />,
    },
  ];

  // Mock data for earnings
  const earningsData: EarningsData[] = [
    { month: "Jan", amount: 1200 },
    { month: "Feb", amount: 1400 },
    { month: "Mar", amount: 1100 },
    { month: "Apr", amount: 1600 },
    { month: "May", amount: 1800 },
    { month: "Jun", amount: 2100 },
  ];

  // Mock data for engagement
  const engagementData: EngagementData[] = [
    {
      platform: "YouTube",
      views: 45000,
      likes: 3200,
      shares: 1200,
      comments: 850,
    },
    { platform: "Spotify", views: 32000, likes: 0, shares: 0, comments: 0 },
    {
      platform: "Instagram",
      views: 28000,
      likes: 4500,
      shares: 1800,
      comments: 920,
    },
    {
      platform: "TikTok",
      views: 52000,
      likes: 8900,
      shares: 3200,
      comments: 1400,
    },
  ];

  // Mock data for demographics
  const demographicData: DemographicData[] = [
    { age: "18-24", percentage: 35 },
    { age: "25-34", percentage: 42 },
    { age: "35-44", percentage: 15 },
    { age: "45-54", percentage: 5 },
    { age: "55+", percentage: 3 },
  ];

  // Total earnings calculation
  const totalEarnings = earningsData.reduce(
    (sum, item) => sum + item.amount,
    0,
  );

  // Total views calculation
  const totalViews = engagementData.reduce((sum, item) => sum + item.views, 0);

  return (
    <div className="bg-background p-6 space-y-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <DownloadIcon className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Earnings
                </p>
                <h3 className="text-2xl font-bold">
                  ${totalEarnings.toLocaleString()}
                </h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUpIcon className="h-3 w-3 mr-1" /> +18% from last
                  period
                </p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <DollarSignIcon className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Views
                </p>
                <h3 className="text-2xl font-bold">
                  {totalViews.toLocaleString()}
                </h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUpIcon className="h-3 w-3 mr-1" /> +24% from last
                  period
                </p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <PlayCircleIcon className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Engagement Rate
                </p>
                <h3 className="text-2xl font-bold">8.7%</h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUpIcon className="h-3 w-3 mr-1" /> +5% from last
                  period
                </p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <UsersIcon className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Active Platforms
                </p>
                <h3 className="text-2xl font-bold">8</h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUpIcon className="h-3 w-3 mr-1" /> +2 from last
                  period
                </p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <BarChart3Icon className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="earnings">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="platforms">Platform Performance</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="engagement">Content Engagement</TabsTrigger>
        </TabsList>

        {/* Earnings Tab */}
        <TabsContent value="earnings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Earnings Overview</CardTitle>
              <CardDescription>
                Your earnings across all platforms over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-end justify-between space-x-2">
                {earningsData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="bg-primary w-12 rounded-t-md"
                      style={{ height: `${(item.amount / 2500) * 100}%` }}
                    ></div>
                    <span className="text-xs mt-2">{item.month}</span>
                    <span className="text-xs font-medium">${item.amount}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Sources</CardTitle>
                <CardDescription>Breakdown by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {platformData.map((platform, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {platform.icon}
                          <span className="ml-2 text-sm font-medium">
                            {platform.name}
                          </span>
                        </div>
                        <span className="text-sm">
                          $
                          {Math.floor(
                            totalEarnings * (platform.value / 100),
                          ).toLocaleString()}
                        </span>
                      </div>
                      <Progress
                        value={platform.value}
                        className={platform.color}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payout History</CardTitle>
                <CardDescription>Recent transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((_, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center pb-4 border-b last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="font-medium">Payout #{1000 + index}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(2023, 5 - index, 15).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          ${(800 + index * 200).toLocaleString()}
                        </p>
                        <p className="text-xs text-green-500">Completed</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Platform Performance Tab */}
        <TabsContent value="platforms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Distribution</CardTitle>
              <CardDescription>
                Performance across different platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-6">
                <div className="relative h-[250px] w-[250px] rounded-full border-8 border-background flex items-center justify-center">
                  {/* Simulated pie chart segments */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div
                      className="absolute bg-red-500 h-full w-full"
                      style={{
                        clipPath:
                          "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)",
                      }}
                    ></div>
                    <div
                      className="absolute bg-green-500 h-full w-full"
                      style={{ clipPath: "polygon(50% 50%, 0% 0%, 50% 0%)" }}
                    ></div>
                    <div
                      className="absolute bg-purple-500 h-full w-full"
                      style={{ clipPath: "polygon(50% 50%, 0% 0%, 0% 50%)" }}
                    ></div>
                    <div
                      className="absolute bg-blue-500 h-full w-full"
                      style={{
                        clipPath: "polygon(50% 50%, 0% 50%, 0% 100%, 25% 100%)",
                      }}
                    ></div>
                  </div>
                  <div className="bg-background rounded-full h-[150px] w-[150px] flex items-center justify-center z-10">
                    <PieChartIcon className="h-10 w-10 text-muted-foreground" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {platformData.map((platform, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div
                      className={`h-3 w-3 rounded-full ${platform.color}`}
                    ></div>
                    <div>
                      <p className="text-sm font-medium">{platform.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {platform.value}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Growth Trends</CardTitle>
                <CardDescription>Month-over-month changes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {platformData.map((platform, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center">
                        {platform.icon}
                        <span className="ml-2 text-sm font-medium">
                          {platform.name}
                        </span>
                      </div>
                      <span
                        className={`text-sm ${platform.change >= 0 ? "text-green-500" : "text-red-500"}`}
                      >
                        {platform.change >= 0 ? "+" : ""}
                        {platform.change}%
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Platform Insights</CardTitle>
                <CardDescription>
                  Key metrics and recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-md">
                    <h4 className="font-medium text-amber-800">Opportunity</h4>
                    <p className="text-sm text-amber-700 mt-1">
                      TikTok engagement is growing rapidly. Consider increasing
                      content frequency.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                    <h4 className="font-medium text-blue-800">Insight</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      YouTube revenue per view has increased by 15% this month.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Demographics Tab */}
        <TabsContent value="demographics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
                <CardDescription>
                  Listener demographics by age group
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {demographicData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.age}</span>
                        <span className="text-sm">{item.percentage}%</span>
                      </div>
                      <Progress value={item.percentage} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Top countries and regions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { country: "United States", percentage: 42, flag: "🇺🇸" },
                    { country: "United Kingdom", percentage: 18, flag: "🇬🇧" },
                    { country: "Canada", percentage: 12, flag: "🇨🇦" },
                    { country: "Australia", percentage: 8, flag: "🇦🇺" },
                    { country: "Germany", percentage: 6, flag: "🇩🇪" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center">
                        <span className="text-xl mr-2">{item.flag}</span>
                        <span className="text-sm font-medium">
                          {item.country}
                        </span>
                      </div>
                      <span className="text-sm">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Audience Insights</CardTitle>
              <CardDescription>Detailed demographic breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-medium mb-2">Gender</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Male</span>
                      <span className="text-sm">58%</span>
                    </div>
                    <Progress value={58} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Female</span>
                      <span className="text-sm">40%</span>
                    </div>
                    <Progress value={40} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Non-binary</span>
                      <span className="text-sm">2%</span>
                    </div>
                    <Progress value={2} />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Listening Time</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Morning</span>
                      <span className="text-sm">25%</span>
                    </div>
                    <Progress value={25} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Afternoon</span>
                      <span className="text-sm">30%</span>
                    </div>
                    <Progress value={30} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Evening</span>
                      <span className="text-sm">45%</span>
                    </div>
                    <Progress value={45} />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Device Type</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Mobile</span>
                      <span className="text-sm">68%</span>
                    </div>
                    <Progress value={68} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Desktop</span>
                      <span className="text-sm">22%</span>
                    </div>
                    <Progress value={22} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tablet</span>
                      <span className="text-sm">10%</span>
                    </div>
                    <Progress value={10} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Engagement Tab */}
        <TabsContent value="engagement" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Performance</CardTitle>
              <CardDescription>
                Engagement metrics across platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 text-sm font-medium">
                        Platform
                      </th>
                      <th className="text-left py-3 px-2 text-sm font-medium">
                        Views
                      </th>
                      <th className="text-left py-3 px-2 text-sm font-medium">
                        Likes
                      </th>
                      <th className="text-left py-3 px-2 text-sm font-medium">
                        Shares
                      </th>
                      <th className="text-left py-3 px-2 text-sm font-medium">
                        Comments
                      </th>
                      <th className="text-left py-3 px-2 text-sm font-medium">
                        Engagement Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {engagementData.map((item, index) => {
                      const engagementRate =
                        item.platform === "Spotify"
                          ? "N/A"
                          : `${(((item.likes + item.shares + item.comments) / item.views) * 100).toFixed(1)}%`;

                      return (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 px-2 text-sm">{item.platform}</td>
                          <td className="py-3 px-2 text-sm">
                            {item.views.toLocaleString()}
                          </td>
                          <td className="py-3 px-2 text-sm">
                            {item.likes ? item.likes.toLocaleString() : "N/A"}
                          </td>
                          <td className="py-3 px-2 text-sm">
                            {item.shares ? item.shares.toLocaleString() : "N/A"}
                          </td>
                          <td className="py-3 px-2 text-sm">
                            {item.comments
                              ? item.comments.toLocaleString()
                              : "N/A"}
                          </td>
                          <td className="py-3 px-2 text-sm">
                            {engagementRate}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Content</CardTitle>
                <CardDescription>Your most engaging releases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Summer Vibes (feat. DJ Maxout)",
                      views: 128500,
                      platform: "YouTube",
                      thumbnail:
                        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&q=80",
                    },
                    {
                      title: "Midnight Dreams",
                      views: 98200,
                      platform: "Spotify",
                      thumbnail:
                        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&q=80",
                    },
                    {
                      title: "Urban Flow",
                      views: 87400,
                      platform: "TikTok",
                      thumbnail:
                        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=200&q=80",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex space-x-4">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-16 w-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.platform}
                        </p>
                        <p className="text-sm">
                          {item.views.toLocaleString()} views
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Trends</CardTitle>
                <CardDescription>Weekly performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full flex items-end space-x-2">
                  {/* Simulated line chart */}
                  <div className="relative h-full w-full">
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-border"></div>
                    <div className="absolute left-0 bottom-0 top-0 w-px bg-border"></div>

                    <div className="absolute bottom-0 left-0 right-0 h-[40%] border-t border-green-500 border-dashed"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-[60%] border-t border-blue-500 border-dashed"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-[80%] border-t border-red-500 border-dashed"></div>

                    <div className="absolute bottom-0 left-[10%] h-[45%] w-1 bg-green-500 rounded-t"></div>
                    <div className="absolute bottom-0 left-[25%] h-[65%] w-1 bg-green-500 rounded-t"></div>
                    <div className="absolute bottom-0 left-[40%] h-[55%] w-1 bg-green-500 rounded-t"></div>
                    <div className="absolute bottom-0 left-[55%] h-[75%] w-1 bg-green-500 rounded-t"></div>
                    <div className="absolute bottom-0 left-[70%] h-[85%] w-1 bg-green-500 rounded-t"></div>
                    <div className="absolute bottom-0 left-[85%] h-[70%] w-1 bg-green-500 rounded-t"></div>

                    <div className="absolute bottom-[45%] left-[10%] h-2 w-2 bg-green-500 rounded-full"></div>
                    <div className="absolute bottom-[65%] left-[25%] h-2 w-2 bg-green-500 rounded-full"></div>
                    <div className="absolute bottom-[55%] left-[40%] h-2 w-2 bg-green-500 rounded-full"></div>
                    <div className="absolute bottom-[75%] left-[55%] h-2 w-2 bg-green-500 rounded-full"></div>
                    <div className="absolute bottom-[85%] left-[70%] h-2 w-2 bg-green-500 rounded-full"></div>
                    <div className="absolute bottom-[70%] left-[85%] h-2 w-2 bg-green-500 rounded-full"></div>

                    <div className="absolute bottom-[45%] left-[10%] right-[15%] border-t border-green-500"></div>
                    <div className="absolute bottom-[65%] left-[25%] right-[30%] border-t border-green-500"></div>
                    <div className="absolute bottom-[55%] left-[40%] right-[45%] border-t border-green-500"></div>
                    <div className="absolute bottom-[75%] left-[55%] right-[30%] border-t border-green-500"></div>
                    <div className="absolute bottom-[85%] left-[70%] right-[15%] border-t border-green-500"></div>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-xs">Engagement</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-xs">Average</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-xs">Target</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsDashboard;
