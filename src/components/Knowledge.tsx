import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, Clock, BookOpen, ArrowRight, Heart, MessageCircle, Share2 } from "lucide-react";

export function Knowledge() {
  const articles = [
    {
      title: "Playwright vs Cypress: 现代Web自动化测试框架对比",
      description: "深入对比Playwright和Cypress两大主流测试框架的特点、性能和适用场景，帮助团队选择最适合的自动化测试解决方案。",
      category: "自动化测试",
      readTime: "10分钟",
      publishDate: "2024年12月15日",
      likes: 156,
      comments: 28,
      tags: ["Playwright", "Cypress", "自动化测试"],
      url: "https://playwright.dev"
    },
    {
      title: "性能测试实战：从JMeter到云端负载测试",
      description: "从传统的JMeter工具到现代云端负载测试平台，分享性能测试的完整实践过程，包括测试设计、执行和结果分析。",
      category: "性能测试",
      readTime: "15分钟", 
      publishDate: "2024年12月10日",
      likes: 203,
      comments: 35,
      tags: ["JMeter", "性能测试", "负载测试"],
      url: "https://jmeter.apache.org/"
    },
    {
      title: "API测试最佳实践：契约测试与自动化",
      description: "分享API测试的完整流程，从契约测试、数据驱动测试到持续集成，构建可靠的API质量保障体系。",
      category: "API测试",
      readTime: "12分钟",
      publishDate: "2024年12月5日", 
      likes: 178,
      comments: 42,
      tags: ["API测试", "契约测试", "自动化"],
      url: "https://swagger.io/"
    },
    {
      title: "移动端测试策略：Appium与云测试平台",
      description: "探讨移动应用测试的挑战与解决方案，从Appium自动化测试到云测试平台的使用，提升移动测试效率。",
      category: "移动测试",
      readTime: "13分钟",
      publishDate: "2024年11月28日",
      likes: 134,
      comments: 22,
      tags: ["Appium", "移动测试", "云测试"],
      url: "https://appium.io/"
    },
    {
      title: "测试左移：DevOps中的质量保障实践",
      description: "分享在DevOps流程中实施测试左移的经验，包括早期质量检查、自动化测试集成和持续反馈机制建设。",
      category: "DevOps",
      readTime: "11分钟",
      publishDate: "2024年11月20日",
      likes: 192,
      comments: 38,
      tags: ["DevOps", "测试左移", "CI/CD"],
      url: "https://about.gitlab.com/topics/ci-cd/"
    },
    {
      title: "测试数据管理与隐私保护策略",
      description: "探讨测试环境中的数据管理挑战，包括敏感数据脱敏、测试数据生成和数据隐私保护的最佳实践。",
      category: "测试管理",
      readTime: "9分钟",
      publishDate: "2024年11月15日",
      likes: 167,
      comments: 31,
      tags: ["测试数据", "隐私保护", "数据管理"],
      url: "https://en.wikipedia.org/wiki/Test_data"
    }
  ];

  const categories = ["全部", "自动化测试", "性能测试", "API测试", "移动测试", "DevOps", "测试管理"];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">测试分享</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            我致力于将测试领域的专业知识和实践经验分享给社区，希望能够帮助到更多的测试工程师。这里记录了我的测试思考和质量保障实践。
          </p>
        </div>

        {/* 分类筛选 */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* 文章列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {articles.map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {article.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* 标签 */}
                <div className="flex flex-wrap gap-1">
                  {article.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* 文章信息 */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.publishDate}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {article.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {article.comments}
                    </div>
                  </div>
                </div>

                {/* 阅读按钮 */}
                <Button className="w-full group/btn" asChild>
                  <a href={article.url} target="_blank" rel="noreferrer">
                    <BookOpen className="w-4 h-4 mr-2" />
                    阅读全文
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 统计信息 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center p-4">
            <h3 className="text-2xl mb-1">45+</h3>
            <p className="text-muted-foreground text-sm">测试文章</p>
          </Card>
          <Card className="text-center p-4">
            <h3 className="text-2xl mb-1">8K+</h3>
            <p className="text-muted-foreground text-sm">阅读量</p>
          </Card>
          <Card className="text-center p-4">
            <h3 className="text-2xl mb-1">1.8K+</h3>
            <p className="text-muted-foreground text-sm">点赞数</p>
          </Card>
          <Card className="text-center p-4">
            <h3 className="text-2xl mb-1">420+</h3>
            <p className="text-muted-foreground text-sm">评论互动</p>
          </Card>
        </div>

        {/* 订阅提醒 */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <div className="text-center">
            <h3 className="mb-2">订阅测试分享</h3>
            <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
              关注我的测试博客，第一时间获取最新的测试技术文章和质量保障实践经验分享。
            </p>
            <div className="flex gap-2 justify-center">
              <Button>
                <BookOpen className="w-4 h-4 mr-2" />
                关注博客
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                分享给朋友
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}