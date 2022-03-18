import React from "react"
import { Helmet } from "react-helmet"

class Helm extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Electric Quahogs!</title>
        </Helmet>
      </div>
    )
  }
}

export default Helm
