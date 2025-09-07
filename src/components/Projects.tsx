import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const REPO = "https://github.com/lsjt5858/xiong_resume.git";

export function Projects() {
  const projects = [
    {
      title: "企业级自动化测试平台",
      description: "基于Selenium Grid和Jenkins构建的分布式自动化测试平台，支持Web、移动端和API测试，提供实时测试报告和质量分析。",
      image: "https://images.unsplash.com/photo-1598023707260-bb5987bf06e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBhdXRvbWF0aW9uJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NzE2OTE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Selenium", "Jenkins", "Docker", "TestNG", "Allure", "Java"],
      githubUrl: REPO,
      liveUrl: "#",
      date: "2024年",
      team: "4人测试团队",
      features: [
        "分布式测试执行",
        "多环境支持",
        "实时测试报告",
        "失败用例重试机制"
      ]
    },
    {
      title: "性能测试监控系统",
      description: "使用JMeter和Grafana构建的性能测试解决方案，集成了实时监控、压力测试和容量规划功能，支持微服务架构性能分析。",
      image: "https://images.unsplash.com/photo-1709601414310-eaa6103cf186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMHRlc3RpbmclMjBtb25pdG9yaW5nfGVufDF8fHx8MTc1NzE2OTE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["JMeter", "Grafana", "InfluxDB", "K6", "Python", "Docker"],
      githubUrl: REPO,
      liveUrl: "#",
      date: "2024年",
      team: "独立开发",
      features: [
        "多协议压测支持",
        "实时性能监控",
        "性能基线管理",
        "自动化报告生成"
      ]
    },
    {
      title: "API测试框架",
      description: "基于RestAssured和Python开发的API自动化测试框架，支持RESTful和GraphQL接口测试，包含数据驱动和参数化测试功能。",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXN0JTIwYXV0b21hdGlvbiUyMGZyYW1ld29yayUyMGNvZGV8ZW58MXx8fHwxNzU3MTY5MTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "RestAssured", "Pytest", "Postman", "Newman", "GitLab CI"],
      githubUrl: REPO,
      liveUrl: "#",
      date: "2023年",
      team: "2人团队",
      features: [
        "多种断言支持",
        "数据驱动测试",
        "契约测试",
        "CI/CD集成"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">测试项目</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            这里展示了我参与的一些重要测试项目，涵盖了自动化测试、性能测试和API测试等不同领域，体现了我的测试技术深度和质量保障能力。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="p-1 h-auto" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" className="p-1 h-auto" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* 项目信息 */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {project.team}
                  </div>
                </div>

                {/* 技术栈 */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* 主要功能 */}
                <div className="space-y-2">
                  <h4 className="text-sm">主要功能</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      查看项目
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      源码
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 更多项目链接 */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href={REPO} target="_blank" rel="noreferrer">
              <Github className="w-4 h-4 mr-2" />
              查看更多项目
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}