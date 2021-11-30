import './assets/style/style.scss';
import { AppHeader } from './cmps/AppHeader';
import { AppFooter } from './cmps/AppFooter';
import { MapApp } from './pages/MapApp';

export const App = () => {
    return (
        <>
            <AppHeader />
            <MapApp />
            <AppFooter />
        </>
    );
};
