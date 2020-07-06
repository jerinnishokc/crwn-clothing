import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
//import './collection-preview.styles.scss';
import { withRouter } from "react-router";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, match, routeName, history }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, id) => {
          return id < 4;
        })
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
