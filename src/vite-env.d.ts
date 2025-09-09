/// <reference types="vite/client" />

// 补充图片类型声明（处理大写扩展名）
declare module "*.JPG" {
  const src: string;
  export default src;
}