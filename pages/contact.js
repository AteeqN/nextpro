import Layout from '../components/layout'
function Contact() {
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
                    <div class="col-sm-12">
                        <h2 class="text-center"> Contact Us </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-1">
                        <div class="row">
                            <div class="col-sm-1">1</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-1">2</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-1">3</div>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="row">
                            <div class="col-sm-8">
                                Suite# 203, 2nd Floor, Plot No 37-C, 8th Lane Off Khayaban-e-Muslim, Bukhari Commercial, Phase 6 DHA, Karachi, Pakistan
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-8">
                            (+92)333-0202729 (+92)300-2017020
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-8">
                            bei@cambridgeadvisorsnetwork.com
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row form-group-margin" >
                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                <input type="text" name="name" class="form-control field-name" placeholder="Name" />
                            </div>
                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                <input type="text" name="last_name" class="form-control field-name" placeholder="Last Name" />
                            </div>
                            <div class="col-12 m-0 p-2 input-group">
                                <input type="text" name="email" class="form-control field-phone" placeholder="Email" />
                            </div>
                            <div class="col-12 m-0 p-2 input-group">
                                <textarea name="message" class="form-control field-message" placeholder="Message">
                                </textarea>
                            </div>
                            <div class="col-12 col-12 m-0 pl-md-2"><span class="form-alert"></span>
                            </div>
                            <div class="col-12 input-group m-0 p-2">
                                <a class="btn primary-button">SEND</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

// This gets called on every request
// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`http://localhost:1337/news-sites`)
//     const data = await res.json()
//     // console.log(data)
//     // Pass data to the page via props
//     return { props: { data } }
//   }
export default Contact