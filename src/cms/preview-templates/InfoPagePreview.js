import React from 'react'
import PropTypes from 'prop-types'
import { InfoPageTemplate } from '../../templates/info-page'

const InfoPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <InfoPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        content={data.content}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

InfoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default InfoPagePreview
