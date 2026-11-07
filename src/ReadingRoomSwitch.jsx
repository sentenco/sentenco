import "./readingRooms.css";


// Two-room switch under the Reading title: Story Books or Unseen Reading.
// Only rendered for people who can open the Unseen lessons.
export default function ReadingRoomSwitch({ room, onChange }) {
  return (
    <div className="rr-rooms" role="tablist" aria-label="Reading rooms">
      <button type="button" role="tab" className="rr-room" aria-selected={room === "books"} onClick={() => onChange("books")}>
        <strong>Story Books</strong>
        <span>Read a story, one level at a time</span>
      </button>
      <button type="button" role="tab" className="rr-room rr-room--unseen" aria-selected={room === "unseen"} onClick={() => onChange("unseen")}>
        <strong>Unseen Reading</strong>
        <span>Two linked texts, questions and words</span>
      </button>
    </div>
  );
}
