
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookType } from '../types/books';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpenCheck, Search, Tag, X } from 'lucide-react';
import BookCard from '../components/BookCard';
import MetaTags from '../components/MetaTags';

// قائمة الكتب
export const booksData: BookType[] = [
  {
    id: 1,
    title: "الدمغة القوية لنسف عقيدة الديمقراطية",
    author: "الشيخ علي بن حاج",
    cover: "/lovable-uploads/065a19d6-6152-4694-ba48-4979b4560ea0.png",
    downloadUrl: "https://web.archive.org/web/20130806214752/http://alibenhadj.net/ebooks/ali.1.zip",
    year: "1990",
    publicationDate: "15 سبتمبر 1990",
    pages: "19",
    description: "رسالة فكرية عقدية تُفند الديمقراطية الغربية بمنهجية عقدية مستندة إلى القرآن والسنة وأقوال علماء السلف.",
    tags: ["فكر سياسي", "العقيدة", "نقد الديمقراطية"],
    fullDescription: "الدمغة القوية لنسف عقيدة الديمقراطية هي رسالة فكرية عقدية كتبها الشيخ علي بن حاج، نُشرت على صفحات جريدة المنقذ الناطقة باسم الجبهة الإسلامية للإنقاذ في عددين متتاليين بتاريخ 24 و25 صفر 1411 هـ الموافق لـ 14 و15 سبتمبر 1990 م، وأعيد نشرها لاحقًا في كتيب مستقل يقع في 19 صفحة. وتُعد من أوائل النصوص الإسلامية الجزائرية التي تُفند الديمقراطية الغربية بمنهجية عقدية مستندة إلى القرآن والسنة وأقوال علماء السلف.\n\nجاءت هذه الرسالة في سياق فكري وسياسي خاص، حيث كانت الجبهة الإسلامية للإنقاذ في أوج صعودها الجماهيري بعد اكتساحها للانتخابات المحلية في جوان 1990، وفي خضم جدل سياسي متصاعد حول مدى التزامها أو رفضها للمفاهيم الغربية، وعلى رأسها \"الديمقراطية\". وقد جاءت الرسالة لتؤكد، بوضوح لا لبس فيه، الرفض المبدئي لعقيدة الديمقراطية باعتبارها \"مذهبًا وضعيًا كافرًا مناقضًا لحاكمية الله، ومبنيًا على أصول شركية\".\n\nالمحاور الكبرى التي تناولتها الرسالة:\n1. تعريف الديمقراطية ومصدرها الغربي\nاستهلت الرسالة بتعريف الديمقراطية على أنها \"حكم الشعب بالشعب وللشعب\"، وبيّنت أنها ليست مجرد آلية أو وسيلة انتخابية، بل هي عقيدة سياسية كاملة نشأت في بيئة فلسفية وثنية، ثم تبلورت في سياق علماني مادي يُقصي الدين من الحياة العامة.\n\n2. مفهوم الحاكمية ونفي السيادة الشعبية\nتؤكد الرسالة أن الإسلام يقوم على حاكمية الله المطلقة، وأنه لا يجوز للبشر أن يشرّعوا لأنفسهم ما لم يأذن به الله. واستشهدت بآيات صريحة مثل: \"إن الحكم إلا لله\"، \"ولا يشرك في حكمه أحدًا\". واعتبرت أن الديمقراطية تُنازع الله في حقه في التشريع، وهو ما يجعلها - بحسب الرسالة - صورة من صور الشرك السياسي.\n\n3. نقض مبدأ \"رأي الأغلبية\"\nهاجمت الرسالة مبدأ \"الأغلبية\" بوصفه قاعدة فاسدة، وذكّرت بأن \"الكثرة\" ليست دليلًا على الحق، مستندة إلى عشرات الآيات التي تذم الأكثرية مثل: \"وإن تطع أكثر من في الأرض يضلوك عن سبيل الله\"، و\"وما أكثر الناس ولو حرصت بمؤمنين\". وبيّنت أن الحق في الإسلام يُعرف بالدليل لا بعدد المؤيدين.\n\n4. الديمقراطية بين التنظير والحقيقة\nقدّمت الرسالة نقدًا عمليًا للديمقراطية الغربية، ووصفتها بأنها خدعة تُلبس الاستبداد ثوب الحرية. وأكدت أن ما يُسمى بـ\"الإرادة الشعبية\" ليس إلا غطاء لتحكم قلة من النخب الاقتصادية والسياسية، تتحكم في الإعلام والقوانين، وتفرض نمطًا واحدًا من الحياة يُقصي الدين والأخلاق.\n\n5. الموقف من التشبه بالغرب\nخصصت الرسالة فصلًا مطولًا للتحذير من التبعية الفكرية والتشريعية للغرب، وذكّرت بوجوب مخالفة الكفار، وبخطورة استيراد نظمهم السياسية، مستشهدة بكلام ابن تيمية في \"اقتضاء الصراط المستقيم\" وفتاوى علماء كبار حول تحكيم غير شريعة الله.\n\n6. موقف مفكري الغرب والمسلمين من الديمقراطية\nأوردت الرسالة مقتطفات من أقوال مفكرين غربيين ينتقدون الديمقراطية، مثل \"جان جاك روسو\"، و\"بارثمي\"، باعتبارها نظامًا غير واقعي وفاسد في جوهره. كما استشهدت بكتابات مفكرين مسلمين مثل المودودي، وفتحي الدريني، ومالك بن نبي، وغيرهم ممن انتقدوا الشكلانية الديمقراطية وانفصالها عن القيم العليا.\n\n7. الديمقراطية والانحلال الأخلاقي\nربطت الرسالة بين الديمقراطية والعلمانية والانحلال الخلقي، مشيرة إلى أن المجتمعات الديمقراطية الغربية أصبحت مرتعًا للرذائل، حيث تُسن القوانين التي تُبيح الزنا، والشذوذ، والتبرج، والربا، والمسكرات باسم الحرية الفردية.\n\n8. موقف الجبهة الإسلامية للإنقاذ\nفي فقرة بارزة، توضح الرسالة أن تبني بعض أطراف الجبهة لمصطلح \"الديمقراطية\" هو من باب الاجتهاد السياسي المرحلي، وليس قبولًا بمضمونها العقدي، وتُذكّر بضرورة العودة إلى المصطلحات الإسلامية الأصيلة مثل: الشورى، الحاكمية، الخلافة، البيعة.\n\nأسلوب الرسالة:\nالرسالة مكتوبة بلغة دعوية خطابية، تعتمد على التكرار والتوكيد، وتخاطب جمهور الصحوة الإسلامية. وهي تُصنّف ضمن أدبيات السلفية الحركية، التي تدمج بين رفض التغريب، والدعوة للتمكين السياسي الإسلامي، مع رفض قاطع لأي تسوية فكرية مع النظم الغربية.\n\nالقيمة المرجعية:\nتمثل هذه الرسالة واحدة من أوضح الوثائق الفكرية التي تُعبّر عن الموقف العقدي للشيخ علي بن حاج من الديمقراطية، وتُعد مرجعًا أساسيًا لفهم الطرح العقدي والسياسي للجبهة الإسلامية للإنقاذ في بداياتها."
  },
  {
    id: 2,
    title: "السيرة النبوية: دروس وعبر",
    author: "الشيخ علي بن حاج",
    cover: "/lovable-uploads/934d49bc-3348-4aee-af40-5d3ae79cfac9.png",
    downloadUrl: "https://example.com/book2.pdf",
    year: "2005",
    publicationDate: "ربيع الأول 1426هـ",
    pages: "524",
    description: "كتاب شامل يتناول السيرة النبوية بأسلوب معاصر، مستخلصًا منها الدروس والعبر التي يحتاجها المسلم المعاصر",
    tags: ["السيرة النبوية", "التاريخ الإسلامي", "فقه السيرة"],
    fullDescription: "كتاب شامل يتناول السيرة النبوية بأسلوب معاصر، مستخلصًا منها الدروس والعبر التي يحتاجها المسلم المعاصر. يمر الكتاب على أحداث السيرة مرورًا دقيقًا، ويستنبط منها الأحكام والتوجيهات الربانية، ويكشف عن سنن الله في الأمم من خلال دراسة حياة النبي صلى الله عليه وسلم."
  },
  {
    id: 3,
    title: "منهجية التغيير عند الإمام مالك",
    author: "الشيخ علي بن حاج",
    cover: "/lovable-uploads/9b70a61d-fdfe-40af-9a1d-bff43338c387.png",
    downloadUrl: "https://example.com/book3.pdf",
    year: "2010",
    publicationDate: "محرم 1431هـ",
    pages: "347",
    description: "دراسة معمقة حول منهجية الإمام مالك في التعامل مع الواقع السياسي والاجتماعي في عصره، وكيفية تطبيق ذلك في العصر الحديث",
    tags: ["الفقه المالكي", "الإصلاح السياسي", "منهجية التغيير"],
    fullDescription: "دراسة معمقة حول منهجية الإمام مالك في التعامل مع الواقع السياسي والاجتماعي في عصره، وكيفية تطبيق ذلك في العصر الحديث. يستعرض الكتاب موقف الإمام مالك من السلطة السياسية في عصره، وكيفية تعامله مع التحديات التي واجهته، ويستنبط من ذلك منهجًا متكاملًا للتغيير الإسلامي المعاصر. كما يتناول الكتاب العلاقة بين المذهب المالكي وخصائص المجتمع المغاربي، واستشراف دوره في النهضة الإسلامية المعاصرة."
  },
  {
    id: 4,
    title: "فقه النوازل المعاصرة",
    author: "الشيخ علي بن حاج",
    cover: "/lovable-uploads/195d1750-6f7d-43a7-962d-99a344af50b7.png",
    downloadUrl: "https://example.com/book4.pdf",
    year: "2015",
    publicationDate: "جمادى الأولى 1436هـ",
    pages: "412",
    description: "يتناول الكتاب القضايا الفقهية المعاصرة في مجالات الاقتصاد والطب والتكنولوجيا، ويقدم حلولاً شرعية مبنية على أصول الشريعة ومقاصدها",
    tags: ["الفقه", "النوازل المعاصرة", "الاجتهاد الفقهي", "الاقتصاد الإسلامي", "الطب والشريعة"],
    fullDescription: "يتناول الكتاب القضايا الفقهية المعاصرة في مجالات الاقتصاد والطب والتكنولوجيا، ويقدم حلولاً شرعية مبنية على أصول الشريعة ومقاصدها. يعالج الكتاب قضايا مثل: المعاملات المالية المعاصرة، والبنوك الإسلامية، والتأمين، والاستنساخ، والتلقيح الصناعي، والموت الدماغي، وزراعة الأعضاء، وغيرها من المستجدات التي تحتاج إلى اجتهاد فقهي معاصر. ويمتاز الكتاب بالمنهجية العلمية الرصينة، والتوازن بين الأصالة والمعاصرة."
  },
  {
    id: 5,
    title: "منهج السلف في العقيدة",
    author: "الشيخ علي بن حاج",
    cover: "/lovable-uploads/c48f156c-7604-4c04-bd4d-70f60e78d3f0.png",
    downloadUrl: "https://example.com/book5.pdf",
    year: "2000",
    publicationDate: "شعبان 1421هـ",
    pages: "298",
    description: "شرح مفصل لعقيدة أهل السنة والجماعة، ومنهج السلف في فهمها وتطبيقها، مع الرد على الشبهات المعاصرة",
    tags: ["العقيدة", "التوحيد", "أهل السنة"],
    fullDescription: "شرح مفصل لعقيدة أهل السنة والجماعة، ومنهج السلف في فهمها وتطبيقها، مع الرد على الشبهات المعاصرة. يتناول الكتاب مسائل الإيمان بالله ورسله وكتبه واليوم الآخر، ويوضح منهج السلف في فهم النصوص المتعلقة بأسماء الله وصفاته، ويرد على شبهات المتكلمين والفلاسفة قديمًا وحديثًا. كما يتطرق الكتاب إلى بعض القضايا العقدية المعاصرة مثل: العلمانية، والليبرالية، والحداثة، ويبين موقف الإسلام منها."
  },
  {
    id: 6,
    title: "تحرير المرأة بين الإسلام والغرب",
    author: "الشيخ علي بن حاج",
    cover: "/lovable-uploads/0b5b4808-4d98-4f13-b56d-488ec6e0da87.png",
    downloadUrl: "https://example.com/book6.pdf",
    year: "2007",
    publicationDate: "ذو القعدة 1428هـ",
    pages: "253",
    description: "دراسة مقارنة بين نظرة الإسلام للمرأة ومكانتها، وبين الدعوات الغربية لتحرير المرأة وآثارها الاجتماعية والأخلاقية",
    tags: ["المرأة في الإسلام", "الفكر الإسلامي", "النقد الحضاري"],
    fullDescription: "دراسة مقارنة بين نظرة الإسلام للمرأة ومكانتها، وبين الدعوات الغربية لتحرير المرأة وآثارها الاجتماعية والأخلاقية. يستعرض الكتاب حقوق المرأة في الإسلام، ومكانتها في المجتمع الإسلامي، ويقارن ذلك بوضع المرأة في المجتمعات الغربية قديمًا وحديثًا. كما ينقد نقدًا علميًا دعوات تحرير المرأة بمفهومها الغربي، ويكشف آثارها السلبية على الأسرة والمجتمع."
  }
];

// حالة للبحث
const [search, setSearch] = useState('');
// حالة لتخزين الكلمات المفتاحية المفلترة
const [filteredTags, setFilteredTags] = useState<string[]>([]);

const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value);
};

// دالة لتحديث الكلمات المفتاحية المفلترة
const toggleTag = (tag: string) => {
  if (filteredTags.includes(tag)) {
    setFilteredTags(filteredTags.filter((t) => t !== tag));
  } else {
    setFilteredTags([...filteredTags, tag]);
  }
};

// تصفية الكتب بناءً على البحث والكلمات المفتاحية
const filteredBooks = booksData.filter((book) => {
  const searchMatch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                      book.description.toLowerCase().includes(search.toLowerCase()) ||
                      book.author.toLowerCase().includes(search.toLowerCase());

  const tagMatch = filteredTags.length === 0 || book.tags.some(tag => filteredTags.includes(tag));

  return searchMatch && tagMatch;
});

const Books = () => {
  // استخراج جميع الكلمات المفتاحية الفريدة من جميع الكتب
  const allTags = [...new Set(booksData.flatMap(book => book.tags))];

  return (
    <div className="books-page">
      <MetaTags title="مكتبة الشيخ علي بن حاج - مؤلفات وكتب" description="مجموعة من كتب ومؤلفات الشيخ علي بن حاج، تحميل وقراءة في مختلف المجالات الإسلامية والفكرية." />
      {/* قسم البحث والتصفية */}
      <div className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-2xl font-bold text-navy-dark mb-4 md:mb-0">مكتبة الشيخ علي بن حاج</h2>

            <div className="flex items-center">
              {/* مربع البحث */}
              <div className="relative rounded-md shadow-sm ml-4">
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <Input
                  type="search"
                  name="search"
                  id="search"
                  className="block w-full pl-4 pr-10 sm:text-sm rounded-md border-gray-300 focus:ring-gold focus:border-gold"
                  placeholder="ابحث عن كتاب..."
                  value={search}
                  onChange={handleSearch}
                />
              </div>

              {/* زر عرض جميع الكتب */}
              {search !== '' && (
                <Button variant="ghost" onClick={() => setSearch('')} className="mr-2">
                  <X className="h-4 w-4 ml-1" />
                  إلغاء البحث
                </Button>
              )}
            </div>
          </div>

          {/* قائمة الكلمات المفتاحية */}
          <div className="mt-4 flex flex-wrap items-center">
            <span className="text-sm text-gray-500 ml-2">تصفية حسب:</span>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant="outline"
                className={`mr-2 mb-2 rounded-full text-sm ${filteredTags.includes(tag) ? 'bg-gold text-navy' : 'text-gray-700'}`}
                onClick={() => toggleTag(tag)}
              >
                <Tag className="h-4 w-4 ml-1" />
                {tag}
                {filteredTags.includes(tag) && <BookOpenCheck className="h-4 w-4 mr-1" />}
              </Button>
            ))}
            {filteredTags.length > 0 && (
              <Button variant="ghost" onClick={() => setFilteredTags([])} className="mr-2">
                <X className="h-4 w-4 ml-1" />
                إلغاء التصفية
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* قسم عرض الكتب */}
      <div className="section-container">
        {filteredBooks.length === 0 ? (
          <div className="text-center py-12">
            <BookOpenCheck size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">لا يوجد نتائج</h2>
            <p className="text-gray-500 mb-6">لم يتم العثور على أي كتب تطابق معايير البحث والتصفية.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                cover={book.cover}
                year={book.year}
                publicationDate={book.publicationDate}
                pages={book.pages}
                description={book.description}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
