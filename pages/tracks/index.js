// import styles from '../styles/News.module.css'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'


function Track({ data, page, numberofTrk }) {
    // console.log(data.results[0].multimedia[0].url)
    // console.log(data)
    const router = useRouter ()
    const lastpage = Math.ceil(numberofTrk/2)
    // console.log(router.query)
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
            <div class="overflow-holder">
                <div class="container">
                    <div class="row items filter-items">
                        {data.map((trk) => (
                            <div class="col-12 col-md-6 col-lg-4 item filter-item">
                                <div class="row card p-0 text-center">
                                    <div class="image-over">
                                        <img
                                            src={trk.image[0].url}  
                                            alt="First slide"
                                            width=""
                                            height=""
                                        />
                                    </div>
                                    <div class="card-footer d-lg-flex align-items-center justify-content-center"> {trk.title} </div>
                                    <div class="card-caption col-12 p-0">
                                        <div class="card-body">
                                            <a href={`tracks/${trk.id}`} class="smooth-anchor ml-sm-4 mt-4 btn outline-button"> Read More </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <nav>
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <button class="page-link" onClick={() => router.push(`/tracks?page=${page - 1}`)} disabled={page <= 1}>
                                    <i class="icon-arrow-left"></i>
                                </button>
                            </li>

                            <li class="page-item active"><button class="page-link"> {page} </button></li>

                            <li class="page-item">
                                <button class="page-link" onClick={() => router.push(`/tracks?page=${page + 1}`)} disabled={page >= lastpage}>
                                    <i class="icon-arrow-right"></i>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Layout>
    )
}

// This gets called on every request
export async function getServerSideProps({ query: {page: page = 1} }) {
    // Fetch data from external API
    const start = +page === 1 ? 0 : (+page - 1) * 2

    // const res = await fetch(`http://localhost:1337/tracks?_limit=2&_start=${start}`)
    // const numberofTracks = await fetch(`http://localhost:1337/tracks/count`)
    const numberofTracks = await fetch(`https://still-brook-02480.herokuapp.com/tracks/count`)
    const numberofTrk = await numberofTracks.json()
    const res = await fetch(`https://still-brook-02480.herokuapp.com/tracks?_limit=2&_start=${start}`)
    const data = await res.json()
    
    // console.log()
    // Pass data to the page via props
    return { 
        props: 
        { 
                data: data,
                page: +page,
                numberofTrk
                     
        }
    }
}
export default Track