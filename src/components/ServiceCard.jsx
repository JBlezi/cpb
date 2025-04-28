function ServiceCard({ title, description, icon }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl text-blue-900 mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  }

  export default ServiceCard;