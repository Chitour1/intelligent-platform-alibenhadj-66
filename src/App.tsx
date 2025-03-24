
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import News from "./pages/News";
import Articles from "./pages/Articles";
import LecturesSermons from "./pages/LecturesSermons";
import Interviews from "./pages/Interviews";
import FridayMeetingsVideo from "./pages/FridayMeetingsVideo";
import MediaLibrary from "./pages/MediaLibrary"; 
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import BookReaderPage from "./pages/BookReaderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/news" element={<News />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/lectures-sermons" element={<LecturesSermons />} />
              <Route path="/interviews" element={<Interviews />} />
              <Route path="/media" element={<MediaLibrary />} />
              <Route path="/media/friday-meetings-video" element={<FridayMeetingsVideo />} />
              <Route path="/publications/books" element={<Books />} />
              <Route path="/publications/books/:bookId" element={<BookDetails />} />
              <Route path="/publications/books/:bookId/read" element={<BookReaderPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
