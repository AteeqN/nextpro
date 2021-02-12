import Head from 'next/head'
import Footer from './footer'
import NavBr from './nav'


export default function Layout({ children}){
    return(
        <div>
            <Head>
                <title>Create Next App</title>
                <meta charset="utf-8" />
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Business, Consulting, Finance, Insurance, Startup and Technology" />
                <meta name="subject" content="Business, Consulting, Finance, Insurance, Startup and Technology" />
                <meta name="author" content="Codings" />       
                
                <link rel="shortcut icon" href="/assets/images/favicon.ico" />
                <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/assets/images/apple-touch-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/apple-touch-icon-114x114.png" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/vendor/slider.min.css" />
                <link rel="stylesheet" href="/assets/css/main.css" />
                <link rel="stylesheet" href="/assets/css/vendor/icons.min.css" />
                <link rel="stylesheet" href="/assets/css/vendor/icons-fa.min.css" />
                <link rel="stylesheet" href="/assets/css/vendor/animation.min.css" />
                <link rel="stylesheet" href="/assets/css/vendor/gallery.min.css" />
                <link rel="stylesheet" href="/assets/css/vendor/cookie-notice.min.css" />
                <link rel="stylesheet" href="/assets/css/default.css" />
            </Head>
            <header id="header">
                <NavBr />
            </header>
            <main> {children} </main>
            <Footer />
        </div>
    )

}