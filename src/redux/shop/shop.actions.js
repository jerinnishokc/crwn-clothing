import ShopActionTypes from "./shop.types";
import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.fetchCollectionsFailure,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");

    dispatch(fetchCollectionsStart());

    collectionRef.get().then(snapshot => {
      const collections = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collections));      
    }).catch(error => dispatch(fetchCollectionsFailure(error)));
  };
};