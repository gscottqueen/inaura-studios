import React from 'react'
import PropTypes from 'prop-types'
import { SectionTemplate } from '../../templates/section'

const SectionPreview = ({ entry, widgetFor }) => (
  <SectionTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    subtitle={entry.getIn(['data', 'subtitle'])}
    title={entry.getIn(['data', 'title'])}
    order={entry.getIn(['data', 'order'])}
  />
)

SectionPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SectionPreview
