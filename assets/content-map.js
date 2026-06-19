// assets/content-map.js

// Configuration data for site content management
const siteConfig = {
  baseUrl: "https://cnhome-aiyouxi.com.cn",
  primaryTag: "爱游戏",
  version: "1.2.0"
};

// Content sections with keywords and metadata
const contentSections = [
  {
    id: "homepage",
    title: "首页",
    keywords: ["爱游戏", "首页", "推荐"],
    description: "站点首页，展示热门游戏内容"
  },
  {
    id: "games",
    title: "游戏库",
    keywords: ["爱游戏", "游戏", "攻略", "评测"],
    description: "收录各类游戏资讯与评测"
  },
  {
    id: "community",
    title: "社区",
    keywords: ["爱游戏", "讨论", "玩家", "交流"],
    description: "玩家交流与分享平台"
  },
  {
    id: "about",
    title: "关于我们",
    keywords: ["爱游戏", "团队", "联系"],
    description: "站点介绍与联系方式"
  }
];

// Tag mapping for quick lookups
const tagMap = {
  "爱游戏": ["homepage", "games", "community"],
  "热门": ["homepage", "games"],
  "攻略": ["games"],
  "评测": ["games"],
  "交流": ["community"]
};

/**
 * Simple search filter function
 * @param {string} query - Search query string
 * @returns {Array} Filtered content sections
 */
function searchContent(query) {
  if (!query || typeof query !== "string") {
    return [];
  }

  const trimmedQuery = query.trim().toLowerCase();
  if (trimmedQuery.length === 0) {
    return [];
  }

  // Search by keywords or title
  return contentSections.filter(section => {
    const titleMatch = section.title.toLowerCase().includes(trimmedQuery);
    const keywordMatch = section.keywords.some(kw =>
      kw.toLowerCase().includes(trimmedQuery)
    );
    return titleMatch || keywordMatch;
  });
}

/**
 * Get sections by specific tag
 * @param {string} tag - Tag to filter by
 * @returns {Array} Matching section IDs
 */
function getSectionsByTag(tag) {
  if (!tag || typeof tag !== "string") {
    return [];
  }
  const normalizedTag = tag.trim();
  return tagMap[normalizedTag] || [];
}

/**
 * Generate a simple sitemap-like structure for the site
 * @returns {Array} Array of page objects with URL and metadata
 */
function generateSiteMap() {
  return contentSections.map(section => ({
    url: `${siteConfig.baseUrl}/${section.id}`,
    title: section.title,
    tags: section.keywords.slice(),
    lastModified: new Date().toISOString().split("T")[0]
  }));
}

// Example usage (commented out for production)
// const searchResults = searchContent("爱游戏");
// console.log("Search results for '爱游戏':", searchResults);

// const gameSections = getSectionsByTag("攻略");
// console.log("Sections with tag '攻略':", gameSections);

// const siteMap = generateSiteMap();
// console.log("Site map:", siteMap);

// Export functions for use in other modules (if using modules)
// module.exports = { searchContent, getSectionsByTag, generateSiteMap, contentSections, tagMap, siteConfig };
// export { searchContent, getSectionsByTag, generateSiteMap, contentSections, tagMap, siteConfig };