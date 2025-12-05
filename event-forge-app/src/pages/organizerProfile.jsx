import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import '../styling/OrganizerProfile.css';

export default function OrganizerProfile({ organizer }) {
    const { user } = useContext(UserContext);

    if (!user || user.role !== 'Organizer') {
        return <p>You must be logged in as an organizer to view this profile.</p>;
    }

    return (
        <div className="organizer-profile">
            <h2>{organizer.name}</h2>
            <p className="profile-role">Organizer</p>
            <p className="profile-email">{organizer.email}</p>
            <p className="profile-bio">{organizer.bio || 'No bio available yet.'}</p>

            <div>
                Events
            </div>
        </div>
  ) ;
}

