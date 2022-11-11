import propTypes from 'prop-types';
import { getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contactsOperations';
import { FormWrapper, Label, Input } from './Filter.styled';


const Filter = () => {
  const dispatch = useDispatch();
  const filterSelector = useSelector(getFilter);
  const onChangeInput = evt => dispatch(changeFilter(evt.target.value));
  return (
    <FormWrapper>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filterSelector}
          onChange={onChangeInput}
        />
      </Label>
    </FormWrapper>
  );
};
export default Filter;

Filter.propTypes = {
  filter: propTypes.string,
  filterContacts: propTypes.func,
};
