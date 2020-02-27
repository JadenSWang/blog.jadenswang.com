import React from "react"

const FeaturedContent = ({ title, description, thumbnail }) => {
  return (
    <React.Fragment>
      <div className="col s12 m8">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <h6>FEATURED</h6>
              <h3>{title}</h3>
              <h6>{description}</h6>
            </div>
            <div className="card-action">
              <a href="#!">Continue Reading</a>
            </div>
          </div>
          <div className="card-image">
            <img src={thumbnail} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FeaturedContent
