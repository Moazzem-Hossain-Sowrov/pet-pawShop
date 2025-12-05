import React from "react";
import toast from "react-hot-toast";

const vets = [
  {
    id: 1,
    name: "Dr. Amelia Snow",
    specialty: "Winter Allergies & Skin Care",
    experience: "6 years",
    image: "https://i.postimg.cc/KzL9dGd3/vet1.jpg",
  },
  {
    id: 2,
    name: "Dr. Leo Winters",
    specialty: "Cold-Weather Nutrition",
    experience: "5 years",
    image: "https://i.postimg.cc/mgDmTN00/vet2.jpg",
  },
  {
    id: 3,
    name: "Dr. Mia Frost",
    specialty: "Paw Protection & Grooming",
    experience: "8 years",
    image: "https://i.postimg.cc/YCGQXnc2/vet3.jpg",
  }
];


const MeetOurVets = () => {

  const handleBooking = (vetName) => {
    toast.success(`Booking for ${vetName} successful!`);
  }

  return (
    <div className="lg:px-[120px] sm:px-5 px-10">
      <div>
        <h2 className="font-bold text-2xl sm:text-4xl text-center p-6 text-blue-500">
          Meet Our Expert Vets
        </h2>
      </div>

      <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-3">
        {vets.map((vet) => (
          <div key={vet.id} className="card bg-base-100 shadow-md w-full sm:w-full">
            <figure>
              <img
                src={vet.image}
                alt={vet.name}
                className="w-full h-[300px] sm:h-64 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-blue-500">{vet.name}</h2>
              <div>
                <p>{vet.specialty}</p>
                <p>{vet.experience}</p>
              </div>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleBooking(vet.name)}
                  className="btn btn-primary"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}


export default MeetOurVets;