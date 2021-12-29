import {useRoute} from '@react-navigation/native';
import React from 'react';
import ComicDetailLayout from '../../components/ComicDetailLayout';
import useFetch from '../../hooks/useFetch';

const ComicDetail = () => {
  const route = useRoute();
  const {comicData} = route.params;
  const {loading, error, data} = useFetch(`comics/${comicData.id}/characters`);

  return <ComicDetailLayout comicData={comicData} loading={loading} charactersData={data}/>;
};
export default ComicDetail;
