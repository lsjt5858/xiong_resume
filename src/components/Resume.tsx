import { Button } from "./ui/button";
import { Download } from "lucide-react";
import resumePdf from "../assets/刘先生-测试工程师.pdf";

export function Resume() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="mb-0">在线简历</h2>
          <a href={resumePdf} download className="no-print">
            <Button>
              <Download className="w-4 h-4 mr-2" /> 下载PDF
            </Button>
          </a>
        </div>
        <div className="rounded-lg border bg-card overflow-hidden">
          <object data={resumePdf} type="application/pdf" className="w-full" style={{ height: 900 }}>
            <div className="p-6 text-center text-sm text-muted-foreground">
              您的浏览器不支持内嵌 PDF 预览。
              <a href={resumePdf} target="_blank" rel="noreferrer" className="text-primary underline ml-1">点击在新标签页打开</a>
              或右键保存进行下载。
            </div>
          </object>
        </div>
      </div>
    </section>
  );
}