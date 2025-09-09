import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Code, Database, Globe, Smartphone, Server, Palette, Plus, Trash2, Save, Edit3 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { useMemo, useState } from "react";

export function Skills() {
  type Skill = { name: string; level: number };
  type Category = { title: string; icon: JSX.Element; skills: Skill[] };

  const initialCategories: Category[] = useMemo(() => [
    {
      title: "自动化测试",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Selenium", level: 95 },
        { name: "Cypress", level: 90 },
        { name: "Playwright", level: 85 },
        { name: "Jest", level: 90 },
        { name: "TestNG", level: 80 }
      ]
    },
    {
      title: "性能测试", 
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "JMeter", level: 90 },
        { name: "LoadRunner", level: 85 },
        { name: "K6", level: 80 },
        { name: "Gatling", level: 75 },
        { name: "Artillery", level: 70 }
      ]
    },
    {
      title: "测试工具",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Postman", level: 95 },
        { name: "SoapUI", level: 85 },
        { name: "Charles", level: 80 },
        { name: "Fiddler", level: 80 },
        { name: "Burp Suite", level: 75 }
      ]
    },
    {
      title: "移动测试",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "Appium", level: 85 },
        { name: "Espresso", level: 80 },
        { name: "XCUITest", level: 75 },
        { name: "Detox", level: 70 }
      ]
    },
    {
      title: "DevOps & CI/CD",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "Jenkins", level: 90 },
        { name: "GitLab CI", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 },
        { name: "Allure", level: 85 }
      ]
    },
    {
      title: "编程语言",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "SQL", level: 85 }
      ]
    }
  ], []);

  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [editing, setEditing] = useState(false);

  const addSkill = (catIdx: number) => {
    const next = [...categories];
    next[catIdx].skills.push({ name: "新技能", level: 60 });
    setCategories(next);
  };

  const removeSkill = (catIdx: number, skillIdx: number) => {
    const next = [...categories];
    next[catIdx].skills.splice(skillIdx, 1);
    setCategories(next);
  };

  const updateSkill = (catIdx: number, skillIdx: number, patch: Partial<Skill>) => {
    const next = [...categories];
    next[catIdx].skills[skillIdx] = { ...next[catIdx].skills[skillIdx], ...patch };
    setCategories(next);
  };

  const addCategory = () => {
    setCategories((prev) => [
      ...prev,
      { title: "新分类", icon: <Code className="w-6 h-6" />, skills: [{ name: "新技能", level: 70 }] }
    ]);
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="text-center md:text-left">
            <h2 className="mb-2">测试技能</h2>
            <p className="text-muted-foreground max-w-2xl">
              多年的测试经验让我掌握了软件测试的各个环节，从功能测试到性能测试，从手工测试到自动化测试，都能提供专业的质量保障。
            </p>
          </div>
          <div className="no-print">
            <Button variant={editing ? "secondary" : "outline"} onClick={() => setEditing((v) => !v)}>
              {editing ? <Save className="w-4 h-4 mr-2" /> : <Edit3 className="w-4 h-4 mr-2" />}
              {editing ? "保存" : "编辑技能"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <Input
                    className={editing ? "h-9" : "h-9 pointer-events-none bg-transparent border-0 p-0 text-base"}
                    value={category.title}
                    readOnly={!editing}
                    onChange={(e) => {
                      const next = [...categories];
                      next[index].title = e.target.value;
                      setCategories(next);
                    }}
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Input
                        className={editing ? "h-8" : "h-8 pointer-events-none bg-transparent border-0 p-0 text-sm"}
                        value={skill.name}
                        readOnly={!editing}
                        onChange={(e) => updateSkill(index, skillIndex, { name: e.target.value })}
                      />
                      <span className="text-xs text-muted-foreground w-12 text-right">{skill.level}%</span>
                      {editing && (
                        <Button variant="ghost" size="sm" onClick={() => removeSkill(index, skillIndex)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    {editing ? (
                      <Slider
                        value={[skill.level]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={(v) => updateSkill(index, skillIndex, { level: v[0] ?? 0 })}
                      />
                    ) : (
                      <Progress value={skill.level} className="h-2" />
                    )}
                  </div>
                ))}
                {editing && (
                  <Button variant="outline" size="sm" className="w-full" onClick={() => addSkill(index)}>
                    <Plus className="w-4 h-4 mr-1" /> 添加技能
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {editing && (
          <div className="mt-6 no-print">
            <Button onClick={addCategory}>
              <Plus className="w-4 h-4 mr-1" /> 添加分类
            </Button>
          </div>
        )}

        {/* 技术标签云 */}
        <div className="mt-12 text-center">
          <h3 className="mb-6">技术栈</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Selenium", "Cypress", "Playwright", "Jest", "JMeter", "Postman", 
              "Java", "Python", "JavaScript", "TestNG", "Appium", "Jenkins", 
              "Docker", "Git", "SQL", "API测试", "自动化测试", "性能测试", "CI/CD",
              "LoadRunner", "Charles", "Allure", "K6", "Gatling", "SoapUI"
            ].map((tech, index) => (
              <Badge key={index} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}