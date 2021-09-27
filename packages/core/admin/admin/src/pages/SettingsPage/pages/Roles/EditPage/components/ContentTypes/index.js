import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@strapi/parts/Box';
import styled from 'styled-components';
import ContentTypeCollapses from '../ContentTypeCollapses';
import GlobalActions from '../GlobalActions';

const StyledBox = styled(Box)`
  overflow-x: auto;
`;

const ContentTypes = ({ isFormDisabled, kind, layout: { actions, subjects } }) => {
  const sortedSubjects = [...subjects].sort((a, b) => a.label > b.label);

  return (
    <StyledBox background="neutral0">
      <GlobalActions actions={actions} kind={kind} isFormDisabled={isFormDisabled} />
      <ContentTypeCollapses
        actions={actions}
        isFormDisabled={isFormDisabled}
        pathToData={kind}
        subjects={sortedSubjects}
      />
    </StyledBox>
  );
};

ContentTypes.propTypes = {
  isFormDisabled: PropTypes.bool.isRequired,
  kind: PropTypes.string.isRequired,
  layout: PropTypes.shape({
    actions: PropTypes.array,
    subjects: PropTypes.arrayOf(
      PropTypes.shape({
        uid: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        properties: PropTypes.array.isRequired,
      })
    ),
  }).isRequired,
};

export default memo(ContentTypes);
