import doc1 from "../imgs/doctors/doctors-1.jpg"
import doc2 from "../imgs/doctors/doctors-2.jpg"
import doc3 from "../imgs/doctors/doctors-3.jpg"  
import doc4 from "../imgs/doctors/doctors-4.jpg"

const doctors = [
  {
    name: "Walter White",
    role: "Chief Medical Officer",
  image: doc1, 
  },
  {
    name: "Sarah Jhonson",
    role: "Anesthesiologist",
    image: doc2, 
  },
  {
    name: "William Anderson",
    role: "Cardiology",
    image: doc3, 
  },
  {
    name: "Amanda Jepson",
    role: "Neurosurgeon",
    image: doc4,
  },
];

const Doctors = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Doctors</h2>
          <p className="text-gray-500 mt-2">
          These are the doctors that are available at your convenience.
          </p>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                <p className="text-gray-500">{doctor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
