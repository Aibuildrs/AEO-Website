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
      <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-slate-400 font-medium">
        <ol className="flex flex-wrap items-center gap-1">
          {/* Map all breadcrumb items */}
          {[
            { name: "Home", url: "/" }, // Always start with Home
            ...items,
          ].map((item, index) => (
            <li key={index} className="flex items-center flex-wrap">
              {/* Separator */}
              {index !== 0 && (
                <span className="mx-1 text-slate-400">&gt;</span>
              )}

              {/* Breadcrumb link or text */}
              {index === items.length ? (
                <span className="font-medium text-blue-700 break-words max-w-full">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="text-blue-700 transition-colors hover:underline break-words max-w-full"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>

        {/* Optional article metadata */}
        {article && (article.readingTime || article.wordCount) && (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 ml-0 sm:ml-4 text-sm sm:text-sm text-slate-400 font-medium">
            {article.readingTime && (
              <span className="text-blue-700">{article.readingTime} min read</span>
            )}
            {article.wordCount && (
              <span className="text-blue-700">
                {article.wordCount.toLocaleString()} words
              </span>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
