function TestimonialCard({ quote, author }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <svg className="w-10 h-10 text-blue-200 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
        </svg>
        <p className="text-gray-700 mb-4 italic">{quote}</p>
        <p className="text-blue-900 font-medium">— {author}</p>
      </div>
    );
  }

  export default TestimonialCard;