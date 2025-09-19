import PropertyCard from './PropertyCard';

export default function PropertyGrid() {
  const properties = [
    {
      title: "3 pièces",
      location: "Eaux-Vives",
      price: 2600,
      area: 68,
      rooms: 3,
      imageUrl: undefined // Placeholder için
    },
    {
      title: "Studio",
      location: "Plainpalais",
      price: 1450,
      area: 28,
      rooms: 1,
      imageUrl: undefined // Placeholder için
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Propriétés disponibles
        </h2>
        <p className="text-gray-600">
          Découvrez nos dernières offres de location à Genève
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            title={property.title}
            location={property.location}
            price={property.price}
            area={property.area}
            rooms={property.rooms}
            imageUrl={property.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
