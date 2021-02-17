import React, { Component } from 'react';
import Home from './section/Home';
import About from './section/About';
import Services from './section/Services';
import Gallery from './section/Gallery';
import Contact from './section/Contact';
import Blog from './section/Blog';
import {Route} from 'react-router-dom';


export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/contact" component={Contact} />
                <Route path="/blog" component={Blog} />
            </section>
        )
    }
}

export default Section
