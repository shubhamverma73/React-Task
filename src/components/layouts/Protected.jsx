import React, {createContext} from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

const localStorageData = createContext();

const Protected = (props) => {

    return (
        <>
            <Header />
            <Navigation />
            <props.component />
            <Footer />
        </>
    );
}
export default Protected;
export {localStorageData};