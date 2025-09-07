import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageCircle,
  Send,
  Heart
} from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/lsjt5858/xiong_resume.git" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
    { icon: <MessageCircle className="w-5 h-5" />, label: "微信", href: "#" }
  ];

  const quickLinks = [
    { label: "关于我", href: "#" },
    { label: "技能专长", href: "#" },
    { label: "项目展示", href: "#" },
    { label: "知识分享", href: "#" },
    { label: "联系方式", href: "#" }
  ];

  const services = [
    { label: "自动化测试", href: "#" },
    { label: "性能测试", href: "#" },
    { label: "测试咨询", href: "#" },
    { label: "质量保障", href: "#" },
    { label: "测试培训", href: "#" }
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-6xl mx-auto px-4">
        {/* 主要内容区域 */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 个人信息 */}
          <div className="space-y-4">
            <h3>刘雄</h3>
            <p className="text-muted-foreground text-sm">
              高级测试工程师，专注于质量保障和自动化测试。热爱测试技术分享和开源测试工具开发。
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                15988107785@163.com
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                15988107785
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                北京，中国
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div className="space-y-4">
            <h4>快速链接</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* 服务项目 */}
          <div className="space-y-4">
            <h4>服务项目</h4>
            <nav className="space-y-2">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {service.label}
                </a>
              ))}
            </nav>
          </div>

          {/* 联系我 */}
          <div className="space-y-4">
            <h4>保持联系</h4>
            <p className="text-sm text-muted-foreground">
              订阅我的动态，获取最新的测试技术分享和项目更新。
            </p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input 
                  placeholder="输入邮箱地址" 
                  className="text-sm"
                />
                <Button size="sm">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                我承诺不会发送垃圾邮件，您可以随时取消订阅。
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* 底部信息 */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© 2024 刘雄. 用</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>制作</span>
          </div>

          {/* 社交媒体链接 */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="p-2 h-auto hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={social.label}
                asChild
              >
                <a href={social.href} target="_blank" rel="noreferrer">
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>

          {/* 附加信息 */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              隐私政策
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              使用条款
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              网站地图
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}