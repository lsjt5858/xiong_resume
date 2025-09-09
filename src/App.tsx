import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Knowledge } from "./components/Knowledge";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* 导航头部 */}
      <Header />
      
      {/* 技能展示 */}
      <Skills />
      
      {/* 项目展示 */}
      <Projects />
      
      {/* 知识分享 */}
      <Knowledge />
      
      {/* 页脚 */}
      <Footer />
    </div>
  );
}