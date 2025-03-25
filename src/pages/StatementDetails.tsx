import { useParams, Link } from 'react-router-dom';
import { statementsData } from '../utils/statementsData';
import { ArrowLeft, Calendar, Clock, Share2, BookOpen, Video } from 'lucide-react';
import { useState, useEffect } from 'react';
import MetaTags from '../components/MetaTags';

const StatementDetails = () => {
  const { statementId } = useParams<{ statementId: string }>();
  const [statement, setStatement] = useState(statementsData.find(s => s.id === statementId));
  
  // If statement not found, redirect to not found page
  useEffect(() => {
    if (!statement) {
      // You could redirect to a not found page here
      console.log('Statement not found');
    }
  }, [statement]);

  if (!statement) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">الخبر غير موجود</h1>
          <p className="text-gray-600 mb-6">لم يتم العثور على الخبر المطلوب</p>
          <Link to="/statements" className="btn-primary">
            العودة إلى أحدث كلمات الشيخ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* إضافة العلامات الوصفية */}
      <MetaTags statement={statement} isStatementPage={true} />
      
      {/* Hero Section */}
      <div className="relative bg-navy text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={statement.imageUrl} 
            alt={statement.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 to-navy"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/statements" className="inline-flex items-center text-gold hover:text-gold-light mb-6">
            <ArrowLeft size={16} className="ml-1" />
            العودة إلى أحدث كلمات الشيخ
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-relaxed md:leading-loose">{statement.title}</h1>
          <div className="flex flex-wrap items-center text-gray-300 gap-4 mb-6">
            <div className="flex items-center">
              <Calendar size={16} className="ml-1" />
              <span>{statement.date}</span>
              {statement.hijriDate && (
                <span className="mr-1">({statement.hijriDate})</span>
              )}
            </div>
            <div className="flex items-center">
              <span className="bg-gold/20 text-gold-light px-2 py-1 rounded-md text-xs font-medium">
                {statement.category}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <img 
            src={statement.imageUrl} 
            alt={statement.title} 
            className="w-full rounded-lg shadow-md"
          />
        </div>
        
        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {statement.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed md:leading-9 text-gray-800 text-base md:text-lg font-droid-kufi tracking-normal" style={{ lineHeight: '2.2' }}>{paragraph}</p>
          ))}
        </div>
        
        {/* Video Embed */}
        {statement.videoId && (
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4 flex items-center leading-relaxed">
              <Video size={20} className="ml-2 text-gold" />
              شاهد الكلمة كاملة
            </h3>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${statement.videoId}`}
                title={statement.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        
        {/* Share Links */}
        <div className="mt-12 flex justify-between items-center border-t border-gray-200 pt-6">
          <button 
            className="flex items-center text-navy hover:text-gold transition-colors"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: statement.title,
                  text: statement.excerpt,
                  url: window.location.href,
                }).catch(err => {
                  console.error('Error sharing:', err);
                });
              } else {
                // الخيار البديل: نسخ الرابط إلى الحافظة
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('تم نسخ الرابط بنجاح!');
                }).catch(err => {
                  console.error('Error copying to clipboard:', err);
                });
              }
            }}
          >
            <Share2 size={18} className="ml-2" />
            مشاركة هذه الكلمة
          </button>
          <Link to="/statements" className="flex items-center text-gold hover:text-gold-dark transition-colors">
            <BookOpen size={18} className="ml-2" />
            المزيد من كلمات الشيخ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StatementDetails;
