import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <>
        <main className="flex-shrink-0">
          {/* <!-- Header--> */}
          <header className="py-5">
            <div className="container px-5">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-xxl-12">
                  <div className="my-5">
                    <h1 className="fw-bolder mb-3">Quem Somos</h1>
                    <p className="lead fw-normal text-muted mb-4">
                      Somos pessoas que compartilham o propósito de transformar
                      o mundo num lugar mais próspero e igualitário para as
                      próximas gerações. Somos pessoas inconformadas,
                      comprometidas e transparentes. Gente excepcional é, e
                      sempre será, nosso motor e maior foco. Acreditamos que
                      gente boa, unida por um propósito, muda o mundo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* <!-- About section one--> */}
          <section className="py-5 bg-light" id="scroll-target">
            <div className="container px-5 my-5">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <img
                    className="img-fluid rounded mb-5 mb-lg-0"
                    src="https://dummyimage.com/600x400/343a40/6c757d"
                    alt="..."
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="fw-bolder">Our founding</h2>
                  <p className="lead fw-normal text-muted mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto est, ut esse a labore aliquam beatae expedita.
                    Blanditiis impedit numquam libero molestiae et fugit
                    cupiditate, quibusdam expedita, maiores eaque quisquam.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- About section two--> */}
          <section className="py-5">
            <div className="container px-5 my-5">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6 order-first order-lg-last">
                  <img
                    className="img-fluid rounded mb-5 mb-lg-0"
                    src="https://dummyimage.com/600x400/343a40/6c757d"
                    alt="..."
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="fw-bolder">Growth &amp; beyond</h2>
                  <p className="lead fw-normal text-muted mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto est, ut esse a labore aliquam beatae expedita.
                    Blanditiis impedit numquam libero molestiae et fugit
                    cupiditate, quibusdam expedita, maiores eaque quisquam.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    )
  }
}

export default About;
