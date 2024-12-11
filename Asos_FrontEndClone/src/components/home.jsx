import { Navbar } from './navbar'
import { Navbar2 } from './navbar2';
import { Titlebar1 } from './titlebar1';
import { Content1 } from './content1';
import { Titlebar2 } from './titlebar2';
import { Content2 } from './content2';
import { Banner1 } from './banner1';
import { Footer } from './footer';

export function Home() {
    return (
        <>
            <Navbar />
            <Navbar2/>
            <Titlebar1/>
            <Content1/>
            <Titlebar2/>
            <Content2/>
            <Banner1/>
            <Footer/>
        </>
    );
}