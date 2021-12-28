import {useRoute} from '@react-navigation/native';
import React from 'react';
import CharacterDetailLayout from '../../components/CharacterDetailLayout';
import useFetch from '../../hooks/useFetch';

const CharacterDetail = () => {
  const route = useRoute();
  const {characterData} = route.params;
  const {loading, error, data} = useFetch(`characters/${characterData.id}/comics`);

  return <CharacterDetailLayout characterData={characterData} loading={loading} comicsData={data}/>;
};
export default CharacterDetail;
