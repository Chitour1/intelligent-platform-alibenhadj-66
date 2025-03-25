
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import MetaTags from '@/components/MetaTags';

// Sample video for edit mode
const sampleVideo = {
  id: 1,
  title: "خطبة الجمعة: التوكل على الله",
  date: "10/05/2023",
  description: "خطبة جمعة عن أهمية التوكل على الله تعالى في حياة المسلم",
  category: "خطب الجمعة",
  youtubeId: "dQw4w9WgXcQ"
};

const VideoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditMode = id !== 'new';

  const [video, setVideo] = useState({
    title: '',
    date: new Date().toLocaleDateString('en-GB').split('/').join('/'),
    description: '',
    category: '',
    youtubeId: ''
  });

  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    if (isEditMode) {
      // In a real app, fetch the video data from an API
      setVideo(sampleVideo);
      updatePreview(sampleVideo.youtubeId);
    }
  }, [id, isEditMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setVideo(prev => ({ ...prev, [name]: value }));

    if (name === 'youtubeId') {
      updatePreview(value);
    }
  };

  const updatePreview = (youtubeId: string) => {
    if (youtubeId) {
      // Extract video ID if full URL is pasted
      let videoId = youtubeId;
      
      if (youtubeId.includes('youtube.com') || youtubeId.includes('youtu.be')) {
        const urlParams = new URLSearchParams(new URL(youtubeId).search);
        videoId = urlParams.get('v') || youtubeId.split('/').pop() || '';
      }
      
      setPreviewUrl(`https://www.youtube.com/embed/${videoId}`);
    } else {
      setPreviewUrl('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to an API
    // For demo purposes, we're just showing a success message
    if (isEditMode) {
      toast({
        title: "تم تحديث الفيديو",
        description: "تم تحديث الفيديو بنجاح",
      });
    } else {
      toast({
        title: "تم إضافة الفيديو",
        description: "تم إضافة الفيديو بنجاح",
      });
    }
    
    navigate('/admin/videos');
  };

  return (
    <div>
      <MetaTags title={isEditMode ? "تعديل الفيديو" : "إضافة فيديو جديد"} />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {isEditMode ? "تعديل الفيديو" : "إضافة فيديو جديد"}
        </h1>
        <Button variant="outline" onClick={() => navigate('/admin/videos')}>
          <ArrowRight className="ml-2 h-4 w-4" />
          العودة للفيديوهات
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="title">عنوان الفيديو</Label>
            <Input
              id="title"
              name="title"
              value={video.title}
              onChange={handleChange}
              placeholder="أدخل عنوان الفيديو"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">تاريخ النشر</Label>
            <Input
              id="date"
              name="date"
              value={video.date}
              onChange={handleChange}
              placeholder="DD/MM/YYYY"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">التصنيف</Label>
            <Input
              id="category"
              name="category"
              value={video.category}
              onChange={handleChange}
              placeholder="تصنيف الفيديو"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="youtubeId">معرّف يوتيوب أو رابط الفيديو</Label>
            <Input
              id="youtubeId"
              name="youtubeId"
              value={video.youtubeId}
              onChange={handleChange}
              placeholder="مثال: dQw4w9WgXcQ أو رابط كامل"
              dir="ltr"
              required
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description">وصف الفيديو</Label>
            <Textarea
              id="description"
              name="description"
              value={video.description}
              onChange={handleChange}
              placeholder="اكتب وصف الفيديو هنا"
              rows={3}
              required
            />
          </div>

          {previewUrl && (
            <div className="md:col-span-2">
              <Label>معاينة الفيديو</Label>
              <div className="mt-2 aspect-video">
                <iframe
                  src={previewUrl}
                  className="w-full h-full rounded-lg"
                  title="معاينة الفيديو"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            {isEditMode ? "تحديث الفيديو" : "حفظ الفيديو"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VideoForm;
