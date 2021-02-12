export default function NavBr() {
    return (
        <div>
            {/* <!-- Top Navbar --> */}
            <nav class="navbar navbar-expand top">
                <div class="container header">
                    {/* <!-- Navbar Items [left] --> */}
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="/" class="nav-link pl-0"> Home </a>
                            <a href="about" class="nav-link pl-0"> About</a>
                            <a href="tracks" class="nav-link pl-0"> Incubation Track </a>
                            <a href="contact" class="nav-link pl-0"> Contact </a>
                            <a href="faq" class="nav-link pl-0"> FAQ </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
