import React from 'react';
// import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ section }) => (
  <DirectoryMenuContainer>
    {section.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  section: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
