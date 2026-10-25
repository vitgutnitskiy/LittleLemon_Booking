export default function Rating({value=5}){return <span className="rating" aria-label={`${value} out of 5 stars`}>{'★'.repeat(value)}{'☆'.repeat(5-value)}</span>}
