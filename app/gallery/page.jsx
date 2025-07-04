export default function GalleryPage() {
  const videos = [
    {
      title: "Intro to React",
      url: "https://www.youtube.com/embed/w7ejDZ8SWv8",
    },
    {
      title: "JavaScript Crash Course",
      url: "https://www.youtube.com/embed/hdI2bqOjy3c",
    },
    {
      title: "Tailwind CSS Basics",
      url: "https://www.youtube.com/embed/dFgzHOX84xQ",
    },
    {
      title: "Next.js Full Course",
      url: "https://www.youtube.com/embed/Sklc_fQBmcs",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          🎥 Video Gallery
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden">
              <iframe
                src={video.url}
                title={video.title}
                className="w-full h-64 sm:h-72 md:h-80"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="bg-white dark:bg-gray-800 p-4">
                <p className="text-gray-700 dark:text-gray-200 font-medium text-center">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
