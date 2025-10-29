import Link from "next/link";
import { FC } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  article?: {
    readingTime?: number;
    wordCount?: number;
  };
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, article }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <div className="flex flex-wrap items-center space-x-2 text-sm sm:text-base text-slate-600 overflow-x-auto whitespace-nowrap">
        {/* === Breadcrumbs === */}
        <ol
          className="flex items-center space-x-2 flex-shrink-0"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {/* Home Icon */}
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center flex-shrink-0"
          >
            <Link href="/blog" itemProp="item" aria-label="Home">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-700 transition-colors"
              >
                <path
                  d="M16 7.609c.352 0 .69.122.96.343l.111.1 6.25 6.25v.001a1.5 1.5 0 0 1 .445 1.071v7.5a.89.89 0 0 1-.891.891H9.125a.89.89 0 0 1-.89-.89v-7.5l.006-.149a1.5 1.5 0 0 1 .337-.813l.1-.11 6.25-6.25c.285-.285.67-.444 1.072-.444Zm5.984 7.876L16 9.5l-5.984 5.985v6.499h11.968z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <meta itemProp="position" content="1" />
          </li>

          {items.map((item, index) => (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center flex-shrink-0
                       hidden sm:flex"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-1 text-slate-400 flex-shrink-0"
              >
                <path
                  d="M6.784 15.68 11.46 4.13h1.75L8.534 15.68z"
                  fill="currentColor"
                />
              </svg>

              {index === items.length - 1 ? (
                <span
                  itemProp="name"
                  className="font-medium text-blue-700 max-w-[120px] sm:max-w-none"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  itemProp="item"
                  className="text-blue-700 transition-colors"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          ))}
        </ol>

        {/* === Metadata === */}
        {article && (article.readingTime || article.wordCount) && (
          <div className="flex items-center space-x-2 ml-4 flex-shrink-0 text-xs sm:text-sm text-slate-400 font-medium">
            {article.readingTime && (
              <div className="flex items-center space-x-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.784 15.68 11.46 4.13h1.75L8.534 15.68z"
                    fill="#94A3B8"
                  />
                </svg>
                <span className="text-blue-700">
                  {article.readingTime} min read
                </span>
              </div>
            )}
            {article.wordCount && (
              <div className="flex items-center space-x-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.784 15.68 11.46 4.13h1.75L8.534 15.68z"
                    fill="#94A3B8"
                  />
                </svg>
                <span className="text-blue-700">
                  {article.wordCount.toLocaleString()} words
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
