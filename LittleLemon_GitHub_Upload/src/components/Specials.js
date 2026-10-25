import SpecialsCard from './SpecialsCard';
import salad from '../assets/greek-salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import dessert from '../assets/lemon-dessert.jpg';
const dishes=[{name:'Greek salad',price:'$12.99',image:salad,description:'Crisp vegetables, olives, feta, and our lemon-herb dressing.'},{name:'Bruschetta',price:'$7.99',image:bruschetta,description:'Toasted bread topped with juicy tomatoes and fresh basil.'},{name:'Lemon dessert',price:'$6.50',image:dessert,description:'A bright and delicate sweet finish to your meal.'}];
export default function Specials(){return <section id="menu" className="section container"><div className="section-heading"><div><p className="eyebrow">Made with care</p><h2>Our favorites</h2></div><a className="button button-dark" href="/#menu">Explore the menu</a></div><div className="cards">{dishes.map(dish=><SpecialsCard key={dish.name} dish={dish}/>)}</div></section>}
