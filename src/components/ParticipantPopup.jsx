import React from 'react';

const ParticipantPopup = ({ participants, onClose }) => {
  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Participants</h2>
        <ul>
          {participants.map((participant) => (
            <li key={participant.id} className="text-sm text-gray-700">
              {participant.name} ({participant.role === 0 ? 'Admin' : participant.role === 1 ? 'Agent' : 'Customer'})
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 p-2 bg-emerald-500 text-white rounded-lg w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ParticipantPopup;