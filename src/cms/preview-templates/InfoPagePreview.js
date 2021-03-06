import React from 'react'
import PropTypes from 'prop-types'
import { InfoPageTemplate } from '../../templates/info-page'

const InfoPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <InfoPageTemplate
        title={data.title}
        subtitle={data.subtitle}
        image={getAsset(data.image)}
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
