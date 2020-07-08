import WithSpinner from '../with-spinner/with-spinner.component';

import CollectionOverview from './collection-overview.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selector';
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

//const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
