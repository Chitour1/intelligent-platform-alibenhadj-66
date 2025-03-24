
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Search, BookOpen, CalendarDays, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const bookTags = ["الفكر الإسلامي", "السياسة الشرعية", "الفقه", "العقيدة", "الإصلاح", "التربية", "التاريخ"];

interface BookType {
  id: number;
  title: string;
  author: string;
  cover: string;
  downloadUrl: string;
  year: string;
  pages: string;
  description: string;
  tags: string[];
}

// Sample books data
const booksData: BookType[] = [
  {
    id: 1,
    title: "البرهان فيما يجب على الراعي والرعية نحو القرآن",
    author: "أبو عبد الفتاح علي بن حاج",
    cover: "/lovable-uploads/1c7632ee-4853-4921-b4bb-5ebc916df3c6.png",
    downloadUrl: "https://down.ketabpedia.com/files/gsh/gsh14120.rar",
    year: "٢٠١٥",
    pages: "٦٢",
    description: "يطرح الشيخ علي بن حاج في هذا الكتاب رؤية شرعية وفكرية ناقدة للعلاقة بين الحاكم والمحكوم تجاه القرآن الكريم، ويتناول بالتفصيل الواجبات الدينية والسياسية التي ينبغي أن يلتزم بها كل من الراعي (الحاكم) والرعية (الشعب) تجاه كتاب الله عز وجل، مع تسليط الضوء على مظاهر الانحراف عن هذه الواجبات في الواقع المعاصر.",
    tags: ["الفكر الإسلامي", "السياسة الشرعية", "الإصلاح"]
  },
  {
    id: 2,
    title: "التحديات السياسية المعاصرة",
    author: "أبو عبد الفتاح علي بن حاج",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1200&auto=format&fit=crop",
    downloadUrl: "#",
    year: "٢٠٢٢",
    pages: "٣٢٠",
    description: "كتاب يناقش التحديات السياسية المعاصرة في العالم العربي ويطرح رؤية إصلاحية شاملة للتعامل معها...",
    tags: ["السياسة الشرعية", "الإصلاح"]
  },
  {
    id: 3,
    title: "المشروع الإصلاحي الشامل",
    author: "أبو عبد الفتاح علي بن حاج",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop",
    downloadUrl: "#",
    year: "٢٠٢٠",
    pages: "٢٨٠",
    description: "دراسة تحليلية شاملة حول متطلبات وآليات الإصلاح السياسي والاجتماعي في المجتمعات العربية المعاصرة...",
    tags: ["الإصلاح", "الفكر الإسلامي"]
  },
  {
    id: 4,
    title: "الدولة المدنية: المفهوم والتطبيق",
    author: "أبو عبد الفتاح علي بن حاج",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1200&auto=format&fit=crop",
    downloadUrl: "#",
    year: "٢٠١٩",
    pages: "٢٥٠",
    description: "دراسة في مفهوم الدولة المدنية وآليات تطبيقها في السياق العربي المعاصر مع استعراض للتجارب العالمية...",
    tags: ["السياسة الشرعية", "الفكر الإسلامي"]
  },
  {
    id: 5,
    title: "الهوية والانتماء في عصر العولمة",
    author: "أبو عبد الفتاح علي بن حاج",
    cover: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1200&auto=format&fit=crop",
    downloadUrl: "#",
    year: "٢٠١٧",
    pages: "٢٣٠",
    description: "بحث في إشكاليات الهوية والانتماء في ظل تحديات العولمة وكيفية الحفاظ على الخصوصية الثقافية...",
    tags: ["الفكر الإسلامي", "التربية"]
  }
];

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredBooks = booksData.filter((book) => {
    const matchesSearch = book.title.includes(searchQuery) || 
                         book.author.includes(searchQuery) || 
                         book.description.includes(searchQuery);
    
    const matchesTag = selectedTag ? book.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern opacity-30"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">كتب الشيخ علي بن حاج</h1>
            <p className="text-xl text-gray-200 mb-6">
              مجموعة من المؤلفات الفكرية والشرعية التي تتناول قضايا الأمة وسبل الإصلاح
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="bg-white w-full pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="ابحث عن كتاب..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                className={cn(
                  "px-3 py-1 text-sm rounded-full border transition-colors",
                  !selectedTag
                    ? "bg-gold text-navy border-gold"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                )}
                onClick={() => setSelectedTag(null)}
              >
                الكل
              </button>
              {bookTags.map((tag) => (
                <button
                  key={tag}
                  className={cn(
                    "px-3 py-1 text-sm rounded-full border transition-colors",
                    selectedTag === tag
                      ? "bg-gold text-navy border-gold"
                      : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                  )}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="section-container">
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
              <Link to={`/publications/books/${book.id}`} key={book.id} className="card group hover:shadow-lg transition-all">
                <div className="flex md:flex-col lg:flex-row gap-4 p-4">
                  <div className="relative w-1/3 md:w-full lg:w-1/3 aspect-[3/4] overflow-hidden rounded-md shadow-md">
                    <img 
                      src={book.cover} 
                      alt={book.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-2/3 md:w-full lg:w-2/3">
                    <h3 className="text-lg font-bold text-navy-dark mb-2 group-hover:text-gold transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{book.author}</p>
                    <div className="flex items-center gap-3 text-gray-500 text-sm mb-2">
                      <div className="flex items-center">
                        <CalendarDays size={14} className="ml-1" />
                        {book.year}
                      </div>
                      <div className="flex items-center">
                        <FileText size={14} className="ml-1" />
                        {book.pages} صفحة
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{book.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">لا توجد نتائج</h3>
            <p className="text-gray-500">لم يتم العثور على كتب تطابق معايير البحث</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Books;
