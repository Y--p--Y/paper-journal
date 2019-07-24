import React from 'react';
import App, { Container } from 'next/app';
import { MDXProvider } from "@mdx-js/tag";

import Head from '../components/head'
import Title from '../components/title'
import Nav from '../components/nav'
import Footer from '../components/footer'
import components from "../components/markdown";

import '../styles/main.css'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head />
        <div className="flex min-h-screen flex-col">
          <header className="flex p-2 bg-purple-900 text-white mb-4">
            <Title path={this.props.router.route} />
            <Nav />
          </header>
          <MDXProvider components={components}>
            <main className="flex-grow container md-auto px-4">
              <Component {...pageProps} />
            </main>
          </MDXProvider>
          <Footer />
        </div>
      </Container>
    );
  }
}

export default MyApp;
