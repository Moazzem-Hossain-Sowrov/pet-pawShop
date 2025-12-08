import React from "react";
import toast from "react-hot-toast";

const MeetOurVets = () => {

  return (
    <section className="py-12 bg-base-100">
  <div className="max-w-6xl mx-auto px-5">
    
    <h2 className="text-3xl font-bold text-center mb-6">
      Meet Our <span className="text-primary">Pet Heroes</span>
    </h2>

    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
      These amazing individuals have opened their hearts and homes to pets in need. 
      Their love creates stories worth celebrating.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Hero 1 */}
      <div className="bg-white shadow rounded-xl p-5 text-center">
        <img 
          src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80" 
          alt="Hero 1" 
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">Arif Rahman</h3>
        <p className="text-sm text-gray-500">Adopted: Golden Retriever</p>
        <p className="mt-2 text-gray-600">
          “Adopting from PawMart changed my life. Bruno brings pure joy every day.”
        </p>
      </div>

      {/* Hero 2 */}
      <div className="bg-white shadow rounded-xl p-5 text-center">
        <img 
          src="https://www.shutterstock.com/image-photo/human-face-women-portrait-260nw-267575231.jpg" 
          alt="Hero 2" 
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">Nusrat Jahan</h3>
        <p className="text-sm text-gray-500">Adopted: Persian Cat</p>
        <p className="mt-2 text-gray-600">
          “Misty was abandoned as a kitten. Now she's part of our family forever.”
        </p>
      </div>

      {/* Hero 3 */}
      <div className="bg-white shadow rounded-xl p-5 text-center">
        <img 
          src="https://img.freepik.com/free-photo/handsome-young-cheerful-man-with-arms-crossed_171337-1073.jpg?semt=ais_hybrid&w=740&q=80" 
          alt="Hero 3" 
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">Sabbir Ahmed</h3>
        <p className="text-sm text-gray-500">Rescued: Mixed Breed Puppy</p>
        <p className="mt-2 text-gray-600">
          “Thanks to PawMart, we rescued Milo from the streets. He’s healthy and happy now.”
        </p>
      </div>

    </div>
  </div>
</section>
  )
}

export default MeetOurVets;




