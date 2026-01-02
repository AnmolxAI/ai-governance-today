import { RegulationEntry } from '@/data/types';

/**
 * Helper function to format date string (e.g., "2024-12-04")
 * into a readable format (e.g., "December 4, 2024").
 */
const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString + 'T00:00:00Z'); // Explicitly set to UTC midnight
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    });
  } catch (error) {
    // Fallback to original string if date parsing fails
    return dateString;
  }
};

interface RegulationCardProps {
  entry: RegulationEntry;
}

export default function RegulationCard({ entry }: RegulationCardProps) {
  // Create a URL-friendly slug for the status class
  // Handle parentheses and other special characters
  const statusClass = `status-${entry.status.toLowerCase().replace(/[\s()]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '')}`;

  return (
    <article className="regulation-card">
      <header className="card-header">
        <div className="card-meta">
          <span className="card-date">{formatDate(entry.date)}</span>
          <span className={`card-status ${statusClass}`}>{entry.status}</span>
        </div>
        <h3 className="card-title">{entry.title}</h3>
        <div className="card-tags">
          <span className="tag-region">{entry.jurisdiction}</span>
          <span className="tag-industry">{entry.industry}</span>
        </div>
      </header>
      <p className="card-notes">{entry.notes}</p>
    </article>
  );
}