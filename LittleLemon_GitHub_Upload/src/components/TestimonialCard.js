import Rating from './Rating';
export default function TestimonialCard({review}){return <article className="review"><Rating value={review.stars}/><p>“{review.quote}”</p><strong>{review.name}</strong></article>}
