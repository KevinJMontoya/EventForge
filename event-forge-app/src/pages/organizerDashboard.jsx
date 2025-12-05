import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrganizerDashboard() {
  const navigate = useNavigate();
  const [organizer] = React.useState({ id: 1, name: 'Sarah Miller', email: 'sarah@example.com', company: 'EventMasters Inc' });

  const [drafts] = React.useState([
    { id: 1, title: 'Summer Music Festival', description: 'A vibrant music festival featuring indie and alternative bands.', createdAt: '2025-11-20', ticketsSold: 0 },
    { id: 2, title: 'Tech Conference 2026', description: 'Annual tech industry conference and networking event.', createdAt: '2025-11-18', ticketsSold: 0 },
  ]);

  const [posted] = React.useState([
    { id: 101, title: 'Holiday Networking Gala', description: 'Exclusive networking event for professionals.', postedAt: '2025-11-15', ticketsSold: 45, capacity: 100, status: 'Active' },
    { id: 102, title: 'Indie Rock Night', description: 'Live performance by local indie rock bands.', postedAt: '2025-11-10', ticketsSold: 78, capacity: 150, status: 'Active' },
    { id: 103, title: 'Spring Craft Fair', description: 'Local artisans and handmade goods marketplace.', postedAt: '2025-10-30', ticketsSold: 200, capacity: 200, status: 'Sold Out' },
  ]);

  const handleCreateEvent = () => {
    navigate('/pages/createEvent');
  };

  const handleEditDraft = (draftId) => {
    // Navigate to event creation with draft pre-filled
    navigate(`/pages/createEvent?draftId=${draftId}`);
  };

  const handlePublishDraft = (draftId) => {
    // Move draft to posted events
    console.log('Publishing draft:', draftId);
  };

  const handleDeleteDraft = (draftId) => {
    // Delete the draft
    console.log('Deleting draft:', draftId);
  };

  const handleViewEvent = (eventId) => {
    navigate(`/pages/eventDetails/${eventId}`);
  };

  return (
    <div className="organizer-dashboard" style={{ maxWidth: 1100, margin: '32px auto', padding: 20 }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div>
          <h1 style={{ margin: 0 }}>Welcome, {organizer.name}</h1>
          <div style={{ color: '#555', fontSize: 14 }}>{organizer.company} • {organizer.email}</div>
        </div>
        <div>
          <button
            onClick={handleCreateEvent}
            style={{
              marginRight: 8,
              padding: '10px 14px',
              background: '#0366d6',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            + Create Event
          </button>
          <button style={{ marginRight: 8, padding: '8px 12px', cursor: 'pointer' }}>Edit Profile</button>
          <button style={{ padding: '8px 12px', cursor: 'pointer' }}>Sign Out</button>
        </div>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        {/* Quick Stats */}
        <div style={{ border: '1px solid #eee', borderRadius: 6, padding: 14, background: '#f9f9f9' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: 14 }}>Quick Stats</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#0366d6' }}>{drafts.length}</div>
              <div style={{ fontSize: 12, color: '#666' }}>Event Drafts</div>
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#28a745' }}>{posted.length}</div>
              <div style={{ fontSize: 12, color: '#666' }}>Posted Events</div>
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#6f42c1' }}>{posted.reduce((sum, e) => sum + e.ticketsSold, 0)}</div>
              <div style={{ fontSize: 12, color: '#666' }}>Tickets Sold</div>
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#fd7e14' }}>${(posted.reduce((sum, e) => sum + e.ticketsSold, 0) * 45).toLocaleString()}</div>
              <div style={{ fontSize: 12, color: '#666' }}>Estimated Revenue</div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div style={{ border: '1px solid #eee', borderRadius: 6, padding: 14 }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: 14 }}>Recent Activity</h3>
          <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none', fontSize: 13 }}>
            <li style={{ padding: '6px 0', borderBottom: '1px solid #f0f0f0' }}>✓ Event "Indie Rock Night" sold 5 tickets</li>
            <li style={{ padding: '6px 0', borderBottom: '1px solid #f0f0f0' }}>✓ Event "Spring Craft Fair" is now sold out</li>
            <li style={{ padding: '6px 0', borderBottom: '1px solid #f0f0f0' }}>✓ New attendee registration for "Holiday Networking Gala"</li>
            <li style={{ padding: '6px 0' }}>→ "Summer Music Festival" draft saved</li>
          </ul>
        </div>
      </section>

      {/* Event Drafts */}
      <section style={{ marginBottom: 20 }}>
        <h2 style={{ margin: '0 0 12px 0' }}>Event Drafts</h2>
        <div style={{ border: '1px solid #eee', borderRadius: 6, padding: 12 }}>
          {drafts.length === 0 ? (
            <p style={{ margin: 0, color: '#666' }}>No drafts. Start creating your first event!</p>
          ) : (
            <div>
              {drafts.map((draft) => (
                <div key={draft.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{draft.title}</div>
                    <div style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>{draft.description}</div>
                    <div style={{ fontSize: 12, color: '#999' }}>Created: {draft.createdAt}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      onClick={() => handleEditDraft(draft.id)}
                      style={{ padding: '6px 10px', background: '#0366d6', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 12 }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handlePublishDraft(draft.id)}
                      style={{ padding: '6px 10px', background: '#28a745', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 12 }}
                    >
                      Publish
                    </button>
                    <button
                      onClick={() => handleDeleteDraft(draft.id)}
                      style={{ padding: '6px 10px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 12 }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Posted Events */}
      <section>
        <h2 style={{ margin: '0 0 12px 0' }}>Posted Events</h2>
        <div style={{ border: '1px solid #eee', borderRadius: 6, padding: 12 }}>
          {posted.length === 0 ? (
            <p style={{ margin: 0, color: '#666' }}>No posted events yet.</p>
          ) : (
            <div>
              {posted.map((event) => (
                <div key={event.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{event.title}</div>
                    <div style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>{event.description}</div>
                    <div style={{ fontSize: 12, color: '#999', display: 'flex', gap: 16 }}>
                      <span>Posted: {event.postedAt}</span>
                      <span>Tickets: {event.ticketsSold}/{event.capacity}</span>
                      <span style={{ color: event.status === 'Sold Out' ? '#dc3545' : '#28a745', fontWeight: 600 }}>{event.status}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      onClick={() => handleViewEvent(event.id)}
                      style={{ padding: '6px 10px', background: '#6c757d', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 12 }}
                    >
                      View
                    </button>
                    <button
                      style={{ padding: '6px 10px', background: '#0366d6', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 12 }}
                    >
                      Analytics
                    </button>
                    <button
                      style={{ padding: '6px 10px', background: '#6c757d', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 12 }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
