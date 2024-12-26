import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const blogs = [
  {
    title: "Boost your conversion rate",
    date: "Mar 16, 2020",
    category: "Marketing",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "https://ui.convertfa.st/avatars/avatar-1.svg",
    },
    image:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  {
    title: "How to use search engine optimization to drive sales",
    date: "Mar 10, 2020",
    category: "Sales",
    href: "#",
    description:
      "Optio cum necessitatibus dolor voluptatem provident commodi et. Qui aperiam fugiat nemo cumque.",
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      href: "#",
      imageUrl: "https://ui.convertfa.st/avatars/avatar-2.svg",
    },
    image:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
  },
  {
    title: "Improve your customer experience",
    date: "Feb 12, 2020",
    category: "Business",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    author: {
      name: "Tom Cook",
      role: "Director of Product",
      href: "#",
      imageUrl: "https://ui.convertfa.st/avatars/avatar-3.svg",
    },
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=3270&q=80",
  },
];

export function BlogSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-4xl sm:text-5xl font-bold leading-7 text-primary">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground sm:text-center">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col bg-card text-card-foreground shadow-none h-full"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-64 w-full object-cover rounded-lg border"
              />
              <div className="flex flex-col flex-1 my-8">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={blog.date} className="text-gray-500">
                    {blog.date}
                  </time>
                  <Badge variant="secondary">
                    <a href={blog.category}>{blog.category}</a>
                  </Badge>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={blog.href}>
                      <span className="absolute inset-0" />
                      {blog.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {blog.description}
                  </p>
                </div>
              </div>
              <div className="relative mt-6 flex items-center gap-x-4">
                <Avatar>
                  <AvatarImage
                    alt={blog.author.name}
                    src={blog.author.imageUrl}
                  />
                  <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={blog.author.href}>
                      <span className="absolute inset-0" />
                      {blog.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{blog.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}