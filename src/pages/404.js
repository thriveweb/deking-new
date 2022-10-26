import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import _get from 'lodash/get'
import AlertTriangle from 'react-feather/dist/icons/alert-triangle'
// import ResultAmount from '../components/ResultAmount'

const NotFoundPage = ({ data }) => {
  // const testinput = {
  //   length: 1,
  //   width: 1,
  //   option : 'lowerLevelDeckPatio',
  //   extras: {
  //     stairs : 'stairs',
  //     handrail : 'handrail',
  //     insulated : 'insulated',
  //     // attached : 'attached',
  //     attached : 'flyover',
  //   },
  // };
  
  return (
    <Fragment>
      <main>
        <Helmet>
          <title>404 – Page Not Found</title>
        </Helmet>
        <section className="section thick">
          <div className="container skinny taCenter">
            <p>
              <AlertTriangle size="5rem" />
            </p>
            <h1>404 - Page Not Found</h1>
            {/* <h2>{ResultAmount(testinput)}</h2> */}
            <p>
              We can't find the page you are looking for!<br />Head back to{' '}
              <Link to="/">{_get(data, 'globalSettings.siteTitle')}</Link>
            </p>
          </div>
        </section>
      </main>
    </Fragment>
  )
}

export default NotFoundPage

export const query = graphql`
  query NotFoundPageQuery {
    globalSettings: settingsYaml {
      siteUrl
      siteTitle
    }
  }
`
