
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseMembers from "./pages/CourseMembers";
import MemberProfile from "./pages/MemberProfile";
import AddCourse from "./pages/AddCourse";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Members from "./pages/Members";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId/members" element={<CourseMembers />} />
          <Route path="/members/:memberId" element={<MemberProfile />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
