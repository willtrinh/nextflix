import Header from '../../components/Header';
import { multiSearch } from '../../helpers/api-utils';
import SearchResults from '../../components/SearchResults';

const SearchPage = ({ results }) => {
  return (
    <>
      <Header />
      <SearchResults results={results} />
    </>
  );
};

export default SearchPage;

export async function getServerSideProps(context) {
  const query = context.query.query;

  const searchData = await multiSearch(query);
  return {
    props: {
      results: searchData.results,
    },
  };
}
