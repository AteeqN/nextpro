import Layout from '../components/layout'
function About({ data }) {
    // console.log(data.results[0].multimedia[0].url)
    // console.log(data)
    return (
        <Layout>

            <div>
                <img
                    src="/assets/images/bg-8.jpg"  
                    alt="First slide"
                    width=""
                    height=""
                />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">

                        <div class="container">
                            <div class="row">
                                <div>
                                    <h3>{data.title}</h3>
                                </div> 

                            </div>
                            <div class="row">
                                <div>
                                    <p>
                                        {data.description}
                                    </p>
                                </div> 

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                    <img
                        src={data.image[0].url}  
                        alt="First slide"
                        width=""
                        height=""
                    />    
                    </div>
                </div>
            </div>
            <section id="about" class="section-1 highlights team image-right" >
                <div class="container">
                    <div class="row">
                        <div class="col-11 col-lg-4" >
                            <img src="/assets/images/maritime.webp" class="fit-image" />
                        </div>
                        <div class="col-12 col-lg-8 align-self-top text">
                            <div class="row intro m-0">
                                <div class="col-12 p-0">
                                    <h2>
                                        Maritime Study Forum (MSF)
                                    </h2>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-12 p-0 pr-md-5">
                                    <p>
                                        To mitigate the gaps in the national maritime domain, a need was felt to establish an informal yet professional research and outreach body to focus on the above aspects titled “Marine Echo”. The envisioned body named as “Maritime Study Forum (MSF)”, is established as an informal, independent, and non-partisan research institute dedicated to studying the emerging role of maritime in international relations, focusing on the Indian Ocean and beyond, and on issues having direct/indirect influence or significance for Pakistan. MSF is dedicated to generating meaningful dialogue, cutting edge research, and human development through engaging academia, media, civil society, policy practitioners, and opinion makers for the advancement of Pakistan’s maritime interests. MSF envisions itself as a leading platform for stakeholders in generating policy-oriented discourse on national, regional, and global maritime affairs domains
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="subscribe" class="section-6 odd subscribe">
                <div class="container smaller">
                    <div class="row">
                        <div class="col-12 col-md-6 m-md-0 intro">
                            <span class="pre-title m-0">Newsletter</span>
                            <h2><span class="featured"><span>Know</span></span> First</h2>
                            <p>Follow closely and receive content about our company and the news of the current market.</p>
                        </div>
                        <div class="col-12 col-md-6">
                            <h1>4445</h1>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://still-brook-02480.herokuapp.com/about`)
    const data = await res.json()
    // console.log(data)
    // Pass data to the page via props
    return { props: { data } }
  }

export default About