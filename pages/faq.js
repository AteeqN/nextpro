// import styles from '../styles/News.module.css'
import NavBr from '../components/nav'
import Footer from '../components/footer'
import banner from '../public/assets/images/bg-8.jpg'
import Layout from '../components/layout'
function Faq({ data }) {
    // console.log(data.results[0].multimedia[0].url)
    // console.log(data)
    return (
        <Layout>
            <div>
                <img
                    src={banner}  
                    alt="First slide"
                    width=""
                    height=""
                />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        {data.map((fq) => (
                            <div class="container">
                                <div class="row">
                                    <div class="col-12"><h3>{fq.title}</h3></div>
                                </div>
                                <div class="row">
                                    <div class="col-12">{fq.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
            )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://still-brook-02480.herokuapp.com/faqs`)
    const data = await res.json()
    // console.log(data)
    // Pass data to the page via props
    return { props: { data } }
  }
export default Faq