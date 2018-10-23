import Link from 'next/link';
import NavStyles  from './styles/NavStyles';
import User from './User';
import Signout from './Signout';

//The <> and </> are part of React's fragments that let you render 
// an array of elements to the page without using wrapper divs - https://getstream.io/blog/react-fragments/

const Nav = () => (
        <User>
            {({data: { me } }) => (
                <NavStyles>
                    <Link href="/items">
                        <a>SHOP</a>
                    </Link>
                    
                    {me && (
                        <>
                            <Link href="/sell">
                                <a>SELL</a>
                            </Link>
                            <Link href="/orders">
                                <a>ORDERS</a>
                            </Link>
                            <Link href="/me">
                                <a>ACCOUNT</a>
                            </Link>
                            <Signout />
                        </>      
                    )}

                    {!me && (
                        <Link href="/signup">
                            <a>SIGN IN</a>
                        </Link>
                    )}
                </NavStyles>

            )}
        </User>
)

export default Nav;