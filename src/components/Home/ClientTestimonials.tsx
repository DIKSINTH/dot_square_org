import { Play, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  videoUrl: string;
  rating: number;
}

interface Review {
  id: number;
  rating: number;
  text: string;
  author: string;
  role: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kevin Wolf",
    role: "Marketing Manager, Samuel, Son & C",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    rating: 5,
  },
  {
    id: 2,
    name: "Mark Osmond",
    role: "Mood Addict.com",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    rating: 5,
  },
  {
    id: 3,
    name: "Austin",
    role: "Alao-Amadasun",
    image:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    rating: 5,
  },
  {
    id: 4,
    name: "Tom Squire",
    role: "Shieldpay",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    rating: 5,
  },
  {
    id: 5,
    name: "Nick",
    role: "Director at insidelines.com.au",
    image:
      "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    rating: 5,
  },
  {
    id: 6,
    name: "Matt Brown",
    role: "Magical Maths Club",
    image:
      "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    rating: 5,
  },
];

const reviews: Review[] = [
  {
    id: 1,
    rating: 4.5,
    text: '"We were impressed by their willingness to work hard to ensure that we reached our goa...',
    author: "Sales Operations, Jet Sapres International",
    role: "",
    verified: true,
  },
  {
    id: 2,
    rating: 5.0,
    text: '"They were very patient with us and guided us on what they needed to know to complete th...',
    author: "Director, Expert Witness Gateway",
    role: "",
    verified: true,
  },
  {
    id: 3,
    rating: 4.5,
    text: '"Working with Dotsquares was an exceptional experience."',
    author: "Senior Digital Project Manager, Luminous",
    role: "",
    verified: true,
  },
  {
    id: 4,
    rating: 4.0,
    text: '"We are incredibly grateful for their hard work."',
    author: "VP, The Script Craft",
    role: "",
    verified: true,
  },
  {
    id: 5,
    rating: 4.5,
    text: '"The level of communication was very good."',
    author: "Operations Manager, Think Renewable",
    role: "",
    verified: true,
  },
  {
    id: 6,
    rating: 5.0,
    text: '"We would like to commend Dotsquares for the amazing work they did."',
    author: "Business Owner, Real Estate Company",
    role: "",
    verified: true,
  },
  {
    id: 7,
    rating: 5.0,
    text: '"Dotsquares exceptional communication and collaborative mindset set them..."',
    author: "Director, Fmcg Markets",
    role: "",
    verified: true,
  },
  {
    id: 8,
    rating: 4.0,
    text: '"Each feature or modification request was accommodated swiftly and precisely."',
    author: "Professor, Department of Mathematics, Temple University",
    role: "",
    verified: true,
  },
  {
    id: 9,
    rating: 5.0,
    text: '"We\'re very happy with the quality, urgency and efficiency of their work."',
    author: "Marketing Specialist, Samuel Son & Co",
    role: "",
    verified: true,
  },
  {
    id: 10,
    rating: 5.0,
    text: '"The team was exceptionally professional with a proactive project manager who..."',
    author: "Executive, W1 Analytica Limited",
    role: "",
    verified: true,
  },
  {
    id: 11,
    rating: 5.0,
    text: '"Their proactive advice and collaborative approach add significant value to the positive outcome of the new website."',
    author: "Mavol Marketing, Mavol",
    role: "",
    verified: true,
  },
  {
    id: 12,
    rating: 4.0,
    text: '"Each feature or modification request was accommodated swiftly and precisely."',
    author: "Owner & Director, SAL Marine",
    role: "",
    verified: true,
  },
];

const ClientTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviewsPerPage = 4;

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, "_blank", "noopener,noreferrer");
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev + reviewsPerPage >= reviews.length ? 0 : prev + reviewsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev - reviewsPerPage < 0
        ? Math.floor(reviews.length / reviewsPerPage) * reviewsPerPage
        : prev - reviewsPerPage
    );
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < fullStars
                ? "fill-yellow-400 text-yellow-400"
                : i === fullStars && hasHalfStar
                ? "fill-yellow-400 text-yellow-400 opacity-50"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  const visibleReviews = reviews.slice(
    currentSlide,
    currentSlide + reviewsPerPage
  );

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#064354] text-sm font-semibold tracking-wide uppercase mb-3">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#064354] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#064354] text-sm md:text-base max-w-3xl mx-auto">
            Discover how we've helped businesses achieve their goals through our
            dedicated service and expertise.
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col">
              {/* Video Card */}
              <div
                onClick={() => handleVideoClick(testimonial.videoUrl)}
                className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group mb-4"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 transition-all duration-300 group-hover:bg-opacity-30">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play
                      className="w-6 h-6 text-[#064354] ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>

              {/* Testimonial Info */}
              <div className="flex flex-col">
                {renderStars(testimonial.rating)}
                <h3 className="text-lg font-bold text-[#064354] mt-2 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-[#064354]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="bg-gray-50 rounded-2xl py-10 px-4 md:px-8">
          {/* Reviews Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Dotsquares Reviews
              </h3>
              <span className="text-xl md:text-2xl font-bold text-gray-900">
                4.7
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#064354] text-[#064354]"
                  />
                ))}
              </div>
              <a href="#" className="text-blue-600 text-sm hover:underline">
                94 reviews
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Powered by</span>
              <span className="font-bold text-gray-900">Clutch</span>
            </div>
          </div>

          {/* Reviews Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {visibleReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-gray-900">
                      {review.rating.toFixed(1)}
                    </span>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {review.text}
                  </p>
                  <p className="text-xs text-gray-600 mb-3">{review.author}</p>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                          fill="currentColor"
                          opacity="0.3"
                        />
                      </svg>
                      <span>Verified Review</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(Math.ceil(reviews.length / reviewsPerPage))].map(
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i * reviewsPerPage)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      Math.floor(currentSlide / reviewsPerPage) === i
                        ? "bg-gray-900 w-6"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                )
              )}
            </div>
          </div>

          {/* Trustpilot Link */}
          <div className="text-center mt-8">
            <a
              href="https://www.trustpilot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Trustpilot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
