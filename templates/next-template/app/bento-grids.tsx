import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CardItemProps = {
  image: string;
  title: string;
  category: string;
  description: string;
  roundedClasses: string; // 新增的参数，用于传递左右不同的圆角样式
};

const CardItem: React.FC<CardItemProps> = ({
  image,
  title,
  category,
  description,
  roundedClasses,
}) => {
  return (
    <Card className={`flex flex-col h-full overflow-hidden ${roundedClasses}`}>
      {/* 图片 */}
      <div className="w-full overflow-hidden">
        <img
          className="w-full h-80 object-cover rounded-t-lg" // 图片只在顶部圆角
          src={image}
          alt={title}
        />
      </div>
      {/* 文本 */}
      <CardContent className="flex flex-col flex-grow p-4">
        <p className="text-xs font-medium text-muted-foreground">{category}</p> {/* 分类 */}
        <CardHeader className="p-0 mt-2">
          <CardTitle className="text-lg font-bold text-gray-900">{title}</CardTitle>
        </CardHeader>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export function BentoGrids() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Header Section */}
        <h2 className="text-base font-semibold leading-7 text-muted-foreground">
          Deploy faster
        </h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Everything you need to deploy your app
        </p>

        {/* Grid Section */}
        <div className="mt-10 grid gap-4 sm:mt-16">
          {/* 第一行和第二行：响应式布局 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {/* 左侧 2:1 或全宽 */}
            <div className="col-span-1 md:col-span-2">
              <CardItem
                image="https://tailwindui.com/plus/img/component-images/bento-02-releases.png"
                category="Category A"
                title="Mobile friendly"
                description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."
                roundedClasses="rounded-l-3xl" // 左侧大圆角
              />
            </div>
            {/* 右侧 1:1 或全宽 */}
            <CardItem
              image="https://tailwindui.com/plus/img/component-images/bento-02-integrations.png"
              category="Category B"
              title="Performance"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit."
              roundedClasses="rounded-r-3xl" // 右侧大圆角
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {/* 左侧 1:1 或全宽 */}
            <CardItem
              image="https://tailwindui.com/plus/img/component-images/bento-02-security.png"
              category="Category C"
              title="Security"
              description="Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi."
              roundedClasses="rounded-l-3xl" // 左侧大圆角
            />
            {/* 右侧 2:1 或全宽 */}
            <div className="col-span-1 md:col-span-2">
              <CardItem
                image="https://tailwindui.com/plus/img/component-images/bento-02-performance.png"
                category="Category D"
                title="Powerful APIs"
                description="Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida."
                roundedClasses="rounded-r-3xl" // 右侧大圆角
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BentoGrids;