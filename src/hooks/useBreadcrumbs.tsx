import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  path: string;
  label: string;
}

const getPageLabel = (pathname: string): string => {
  const pathMap: Record<string, string> = {
    '/dashboard': 'Dashboard',
    '/courses': 'Courses',
    '/members': 'Members',
    '/add-course': 'Add Course',
    '/contact': 'Contact',
    '/about': 'About',
    '/faq': 'FAQ',
    '/support': 'Support',
  };

  // Handle dynamic routes
  if (pathname.includes('/members/') && pathname !== '/members') {
    return 'Member Profile';
  }
  if (pathname.includes('/courses/') && pathname.includes('/members')) {
    return 'Course Members';
  }

  return pathMap[pathname] || 'Page';
};

export const useBreadcrumbs = (maxItems: number = 3) => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    const currentPath = location.pathname;
    const currentLabel = getPageLabel(currentPath);

    setBreadcrumbs(prev => {
      // Remove current path if it already exists
      const filtered = prev.filter(item => item.path !== currentPath);
      
      // Add current path to the beginning
      const updated = [{ path: currentPath, label: currentLabel }, ...filtered];
      
      // Keep only the specified number of items
      return updated.slice(0, maxItems);
    });
  }, [location.pathname, maxItems]);

  return breadcrumbs;
};
