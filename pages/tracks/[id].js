import Layout from '../../components/layout';

function Track({ data }) {
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
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <h2>{data.title}</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <p> {data.description} </p>
                            </div>
                            <div class="col-6">
                                <img src={data.image[0].url} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

// This gets called on every request
export async function getServerSideProps(context) {
    // Fetch data from external API
    const id = context.query.id
    // const res = await fetch(`http://localhost:1337/tracks?_limit=2&_start=${start}`)
    // const res = await fetch(`http://localhost:1337/tracks/${id}`)
    const res = await fetch(`https://still-brook-02480.herokuapp.com/tracks/${id}`)
    const data = await res.json()
    // console.log()
    // Pass data to the page via props
    return { 
        props: 
        { 
            data,
        }
    }
}

export default Track