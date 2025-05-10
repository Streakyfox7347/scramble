
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Course {
  id: number;
  name: string;
  location: string;
  description: string;
  coordinates?: [number, number]; // [longitude, latitude]
}

interface CourseMapProps {
  courses: Course[];
}

const CourseMap: React.FC<CourseMapProps> = ({ courses }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const navigate = useNavigate();
  
  // For demo purposes, we're adding mock coordinates to our courses
  const coursesWithCoordinates = courses.map(course => {
    // Generate some random coordinates around the US for demonstration
    // In a real app, you'd store actual coordinates in your database
    const randomLng = -98 + (Math.random() * 30 - 15);
    const randomLat = 39 + (Math.random() * 10 - 5);
    
    return {
      ...course,
      coordinates: [randomLng, randomLat] as [number, number]
    };
  });

  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    
    // Initialize map when token is available
    if (mapboxToken) {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-98, 39], // Center of the US
        zoom: 3
      });
      
      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
      // Add markers for each course
      coursesWithCoordinates.forEach(course => {
        if (!course.coordinates || !map.current) return;
        
        // Create a custom marker element
        const el = document.createElement('div');
        el.className = 'course-marker';
        el.innerHTML = `
          <div class="w-8 h-8 bg-scramble-mint rounded-full flex items-center justify-center cursor-pointer shadow-lg transform transition-transform hover:scale-110">
            <span class="text-scramble-dark font-bold text-xs">${course.id}</span>
          </div>
        `;
        
        // Add click event to navigate to course members page
        el.addEventListener('click', () => {
          navigate(`/courses/${course.id}/members`);
        });
        
        // Add popup with course info
        const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-bold">${course.name}</h3>
              <p class="text-sm">${course.location}</p>
            </div>
          `);
        
        // Add marker to map
        new mapboxgl.Marker(el)
          .setLngLat(course.coordinates)
          .setPopup(popup)
          .addTo(map.current);
      });
    }
    
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxToken, coursesWithCoordinates, navigate]);

  return (
    <div className="space-y-4">
      {!mapboxToken ? (
        <div className="p-4 bg-scramble-dark border border-slate-700 rounded-lg">
          <h3 className="text-white font-medium mb-2">Map API Key Required</h3>
          <p className="text-white/70 mb-4 text-sm">
            To view the interactive map, please enter your Mapbox public token:
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Mapbox public token"
              className="flex-1 px-3 py-2 bg-scramble-dark-light border border-slate-700 rounded text-white text-sm"
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <Button 
              className="bg-scramble-mint text-scramble-dark hover:bg-scramble-mint/80"
              onClick={() => setMapboxToken(mapboxToken)}
            >
              Set Token
            </Button>
          </div>
          <p className="text-xs text-white/50 mt-2">
            Get your token at <a href="https://account.mapbox.com/access-tokens/" target="_blank" rel="noopener noreferrer" className="text-scramble-mint hover:underline">mapbox.com</a>
          </p>
        </div>
      ) : null}
      
      <style jsx>{`
        .mapboxgl-popup-content {
          background-color: #172634;
          color: white;
          border-radius: 4px;
          border: 1px solid #0B1218;
          padding: 0;
        }
        
        .mapboxgl-popup-tip {
          border-top-color: #172634 !important;
          border-bottom-color: #172634 !important;
        }
      `}</style>
      
      <div 
        ref={mapContainer} 
        className="w-full h-[500px] rounded-lg overflow-hidden border border-slate-700"
        style={{ display: mapboxToken ? 'block' : 'none' }}
      />
    </div>
  );
};

export default CourseMap;
