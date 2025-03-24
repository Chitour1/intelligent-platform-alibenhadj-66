
import { Link } from "react-router-dom";
import { BookOpen, Calendar } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface BookCardProps {
  id: number;
  title: string;
  cover: string;
  year: string; // Release year
  publicationDate?: string; // Publication date
  pages: string;
  description: string;
}

const BookCard = ({ id, title, cover, year, publicationDate, pages, description }: BookCardProps) => {
  return (
    <Link to={`/publications/books/${id}`} className="card group">
      <div className="relative overflow-hidden rounded-md">
        <AspectRatio ratio={3/4} className="w-full">
          <img 
            src={cover} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-bold group-hover:text-gold transition-colors duration-300">
              {title}
            </h3>
          </div>
        </AspectRatio>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar size={14} className="ml-1" />
            <span>
              {year}
            </span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <BookOpen size={14} className="ml-1" />
            {pages} صفحة
          </div>
        </div>
        {publicationDate && (
          <div className="text-xs text-gold mb-2">
            تاريخ النشر: {publicationDate}
          </div>
        )}
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
    </Link>
  );
};

export default BookCard;
