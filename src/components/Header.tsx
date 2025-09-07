import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Download, Copy, QrCode } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useCallback } from "react";

export function Header() {
  const handleDownload = useCallback(() => {
    // 使用浏览器打印为PDF，保持简单且跨平台
    window.print();
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText("weixin: test_wechat_123");
      alert("微信号已复制：test_wechat_123");
    } catch (e) {
      alert("复制失败，请手动复制：test_wechat_123");
    }
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar Section */}
          <div className="flex-shrink-0">
            <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc1NzExOTExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="个人头像" 
              />
              <AvatarFallback>李测试</AvatarFallback>
            </Avatar>
          </div>

          {/* Info Section */}
          <div className="flex-grow text-center md:text-left">
            <h1 className="mb-2">李测试</h1>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
              <Badge variant="secondary">高级测试工程师</Badge>
              <Badge variant="outline">自动化测试专家</Badge>
              <Badge variant="outline">质量保障</Badge>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              具有6年以上软件测试经验的高级测试工程师，专注于自动化测试和质量保障体系建设。
              擅长测试框架设计、性能测试和DevOps流程优化，致力于提升产品质量和交付效率。
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                litest@example.com
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                +86 138 0000 0000
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                北京，中国
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center md:justify-start">
              <Button onClick={handleDownload} title="下载简历为PDF">
                <Download className="w-4 h-4 mr-2" />
                下载简历
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">联系我</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>联系我</DialogTitle>
                    <DialogDescription>添加我的微信，备注“求职/合作”。</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <QrCode className="w-5 h-5" />
                      <span className="font-medium">微信号：test_wechat_123</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={handleCopy}>
                        <Copy className="w-4 h-4 mr-1" /> 复制微信号
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">也可以通过邮箱与我联系：litest@example.com</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}