import doc1 from "../imgs/doctors/doctors-1.jpg";
import doc2 from "../imgs/doctors/doctors-2.jpg";
import doc3 from "../imgs/doctors/doctors-3.jpg";
import doc4 from "../imgs/doctors/doctors-4.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { doctorsApi } from "../features/Doctors/DoctorsAPI";
import  {Doctor}  from "../features/Doctors/DoctorsAPI";


// Local static doctors (for fallback if API fails)
const staticDoctors = [
  { id: 1, name: "Walter White", role: "Chief Medical Officer", image: doc1 },
  { id: 2, name: "Sarah Johnson", role: "Anesthesiologist", image: doc2 },
  { id: 3, name: "William Anderson", role: "Cardiology", image: doc3 },
  { id: 4, name: "Amanda Jepson", role: "Neurosurgeon", image: doc4 },
];

// Loader Component
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-cyan-400 rounded-full animate-spin"></div>
    </div>
  );
};

const Doctors = () => {
  // Fetch doctors from API
  const { data: doctorsData, error, isLoading } = doctorsApi.useGetDoctorsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-20">Error Loading Doctors</div>;
  }

  // Use API data or fallback to static data
  const doctors = doctorsData || staticDoctors;

  return (
    <>
      <Navbar />
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
            {doctors.map((doctor: Doctor) => (
              <div key={doctor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={doctor.image_url} alt={doctor.name} className="w-full h-64 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                  <p className="text-gray-500">{doctor.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Doctors;
