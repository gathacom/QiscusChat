import React from 'react';

const ParticipantList = ({ participants }) => {
  return (
    <div className="mt-2">
      <h2 className="text-sm text-gray-600">Participants:</h2>
      <ul>
        {participants.map((participant) => (
          <li key={participant.id} className="text-sm text-gray-700">
            {participant.name} ({participant.role === 0 ? 'Admin' : participant.role === 1 ? 'Agent' : 'Customer'})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipantList;