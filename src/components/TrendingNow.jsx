import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Info } from 'lucide-react';

import { trendingMovies } from '../data';


export default function TrendingNow() {
    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const scrollLeftStart = useRef(0);

    // Handle scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                setShowLeftArrow(scrollLeft > 0);
                setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
            }
        };

        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
        }
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    // Scroll handlers
    const handleScrollLeft = () => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Dragging handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        startX.current = e.pageX;
        scrollLeftStart.current = scrollRef.current.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const distanceDragged = e.pageX - startX.current;
        scrollRef.current.scrollLeft = scrollLeftStart.current - distanceDragged;
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handleMovieClick = (movie) => {
        if (!isDragging) {
            console.log('Clicked movie:', movie.title); 
        }
    };

    return (
        <div className="bg-black text-white py-8 relative group">
            <h2 className="text-3xl font-semibold mb-8">Trending Now</h2>

            {showLeftArrow && (
                <button
                    className="absolute left-0 top-1/2 z-40 bg-black/50 p-2 rounded-full transform -translate-y-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={handleScrollLeft}
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            )}

            {showRightArrow && (
                <button
                    className="absolute right-0 top-1/2 z-40 bg-black/50 p-2  transform -translate-y-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={handleScrollRight}
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            )}

            <div
                ref={scrollRef}
                className="flex gap-2 overflow-x-scroll scrollbar-hide scroll-smooth"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
            >
                {trendingMovies.map((movie) => (
                    <div
                        key={movie.id}
                        className="flex-none w-[300px] group/item relative cursor-pointer"
                        onClick={() => handleMovieClick(movie)}
                    >
                        <div className="relative overflow-hidden rounded-md transition-transform duration-300 group-hover/item:scale-110 group-hover/item:z-50">
                            <img src={movie.image} alt={movie.title} className="w-full h-[168px] object-cover" />
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 p-4 w-full">
                                    <div className="flex gap-2 mb-2">
                                        <button className="bg-white text-black p-2 rounded-full hover:bg-white/80">
                                            <Play className="w-4 h-4" />
                                        </button>
                                        <button className="border border-white p-2 rounded-full hover:bg-white/20">
                                            <Info className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
                                    <div className="flex items-center gap-2 text-sm mb-2">
                                        <span className="text-green-500">{movie.rating}</span>
                                        <span>{movie.year}</span>
                                        <span>{movie.seasons}</span>
                                    </div>
                                    <p className="text-sm line-clamp-2">{movie.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
