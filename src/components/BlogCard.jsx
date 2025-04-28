function BlogCard({ title, date, description }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
        <h3 className="text-xl text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href="#" className="text-blue-700 hover:text-blue-900 font-medium">Read More →</a>
      </div>
    );
  }

  export default BlogCard;