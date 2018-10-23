import Items from '../components/Items';

const Home = props => (
    // Mote: || 1 is added because if http://localhost:7777/items is called 
    // instead of http://localhost:7777/items?page=x an NaN of x is returned in Pagination.js
    <div>
        <Items page={parseFloat(props.query.page) || 1} />
    </div>
);

export default Home;