import React from "react";
import toast from "react-hot-toast";

const MeetOurVets = () => {

  return (
    <div>
      <section className="py-12 bg-base-200">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Adopt from <span className="text-primary">PawMart?</span>
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            At PawMart, we believe every pet deserves a loving home. Adopting from our
            community helps save lives and gives abandoned pets a second chance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-6 bg-white shadow rounded-xl text-center">
              <div className="text-4xl mb-3">❤️</div>
              <h3 className="text-xl font-semibold mb-2">Save a Life</h3>
              <p className="text-gray-600">
                Every adoption helps reduce street animal suffering and gives pets a new beginning.
              </p>
            </div>

            <div className="p-6 bg-white shadow rounded-xl text-center">
              <div className="text-4xl mb-3">👪</div>
              <h3 className="text-xl font-semibold mb-2">Find a True Companion</h3>
              <p className="text-gray-600">
                Adopted pets form strong emotional bonds and bring joy to your home.
              </p>
            </div>

            <div className="p-6 bg-white shadow rounded-xl text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Support a Kind Community</h3>
              <p className="text-gray-600">
                Your adoption promotes responsible pet ownership and community compassion.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default MeetOurVets;