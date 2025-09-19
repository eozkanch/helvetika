interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: number;
  area: number;
  rooms: number;
  imageUrl?: string;
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  area,
  rooms,
  imageUrl
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Placeholder */}
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-sm">
            Image placeholder
          </div>
        )}
      </div>
      
      {/* Property Details */}
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-black mb-1">
            {title} — {location}
          </h3>
          <p className="text-black text-lg font-medium mb-1">
            CHF {price.toLocaleString()} / mois
          </p>
          <p className="text-black text-sm">
            {area} m² · {rooms} pièce{rooms > 1 ? 's' : ''}
          </p>
        </div>
        
        {/* Action Button */}
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
          Voir le bien
        </button>
      </div>
    </div>
  );
}
