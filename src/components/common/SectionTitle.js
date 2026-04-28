import './SectionTitle.css';

function SectionTitle({ children }) {
  return (
    <div className="section-title">
      <div className="section-subtitle">Portfolio</div>
      <h2 className="section-heading">{children}</h2>
    </div>
  );
}

export default SectionTitle;