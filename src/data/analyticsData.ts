export const mockUserActivity = {
    dailyActiveUsers: [50, 75, 60, 90, 100, 85, 120], 
    sessionDuration: [5, 8, 6, 7, 8, 10, 12], 
    userRetention: [80, 75, 78, 77, 76, 74, 73] 
  };
  
  export const mockGrowthMetrics = {
    userGrowth: [100, 150, 200, 250, 300, 350, 400], 
    churnRate: 5, 
    signUpSources: [
      { source: 'Organic', count: 150 },
      { source: 'Social Media', count: 100 },
      { source: 'Referral', count: 50 },
    ],
  };
  
  export const mockDemographics = {
    geographicDistribution: [
      { country: 'USA', users: 120 },
      { country: 'UK', users: 80 },
      { country: 'India', users: 150 },
    ],
    ageGroups: [
      { ageGroup: '18-24', count: 100 },
      { ageGroup: '25-34', count: 120 },
      { ageGroup: '35-44', count: 80 },
    ],
  };
  
  export const mockUsageBehavior = {
    featureUsage: [
      { feature: 'Dashboard', usagePercentage: 80 },
      { feature: 'Messaging', usagePercentage: 60 },
      { feature: 'Analytics', usagePercentage: 40 },
    ],
    popularTimes: ['8am-9am', '12pm-1pm', '6pm-7pm'],
    userPathways: ['Login > Dashboard > Profile', 'Login > Messages > Dashboard'],
  };
  
  export const mockSystemPerformance = {
    errorRates: [2, 1, 3, 0, 4, 2, 1], 
    loadTimes: [1.2, 1.1, 1.3, 1.4, 1.0, 0.9, 1.5], 
    uptime: 99.9, 
  };
  